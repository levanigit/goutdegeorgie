// Collections.tsx
import { fetchCollectionIfUpdated } from "@/src/lib/firebase/getFirebaseData";
import ServerCard from "./card/ServerCard";
import { collectionRoute1, companyRoute } from "@/src/manager/info";
import styles from "./Collection.module.css";
import { extractCollectionFields } from "@/src/lib/firebase/types";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Collections() {
  const locale = await getLocale();
  const t = await getTranslations("menuPage.menu");

  const collection = await fetchCollectionIfUpdated(
    companyRoute,
    collectionRoute1
  );

  const items = collection?.items ? Object.values(collection.items) : [];
  const categories: {
    id: string;
    order: number;
    translations: Record<string, string>;
  }[] = collection?.categories ? Object.values(collection.categories) : [];

  const extractedItems = items
    .map((item) => extractCollectionFields(item, locale))
    .filter((item) => !item.itemActive); // ✅ Filter inactive items

  return (
    <div className={styles.cardWrapper}>
      <section className="section section-medium">
        <div className={`container ${styles.container}`}>
          {categories
            .sort((a, b) => a.order - b.order) // ✅ Sort categories by their order
            .filter((category) => category.id !== "cat-all") // ✅ Skip "cat-all"
            .map((category) => {
              const itemsInCategory = extractedItems
                .filter((item) => item.full.itemCategories?.[category.id])
                .sort(
                  (a, b) =>
                    (a.full.itemCategories?.[category.id]?.order || 0) -
                    (b.full.itemCategories?.[category.id]?.order || 0)
                );

              if (itemsInCategory.length === 0) return null;

              return (
                <div key={category.id} className={styles.menuWrapper}>
                  <div className={styles.menuTitles}>
                    <span className="font2 heading4 color2 ">
                      {t("underCategory")}
                    </span>
                    <p className="twoLines"></p>
                    <h3 className="font2 color4 heading2">
                      {category.translations?.[locale]}
                    </h3>
                  </div>
                  <div className={styles.itemContainer}>
                    {itemsInCategory.map((item) => (
                      <ServerCard key={item.id} {...item} />
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}
