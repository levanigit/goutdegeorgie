import { companyDomain, companyRoute } from "@/src/manager/info";
import { navItems, supportedLocales } from "@/src/manager/navigation";
import { ref, get, getDatabase } from "firebase/database";
import { app } from "@/src/lib/firebase/firebase";

const db = getDatabase(app);

export default async function sitemap() {
  try {
    const collectionsRef = ref(db, `companiesData/${companyRoute}/collections`);
    const snapshot = await get(collectionsRef);
    const collectionsData = snapshot.val();

    const collectionUrls = collectionsData
      ? Object.entries(collectionsData).flatMap(
          ([collectionId, collection]: any) => {
            if (!collection.items) return [];

            return Object.values(collection.items).flatMap((item: any) => {
              const itemUrl = `${companyDomain}/companiesData/${companyRoute}/collections/${collectionId}/items/${item.id}`;
              return supportedLocales.map((locale) => ({
                url: `${itemUrl}?lang=${locale}`,
                lastModified: new Date().toISOString(),
                changeFrequency: "monthly",
                priority: 0.7,
              }));
            });
          }
        )
      : [];

    const navUrls = supportedLocales.flatMap((locale) => {
      return (
        navItems[locale]?.map((navItem) => ({
          url: `${companyDomain}/${locale}${navItem.url}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "monthly",
          priority: 0.6,
        })) || []
      );
    });

    return [...collectionUrls, ...navUrls];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}
