import { fetchCollectionIfUpdated } from "@/src/lib/firebase/getFirebaseData";
import styles from "./Collection.module.css";
import { extractCollectionFields } from "@/src/lib/firebase/types";
import { getLocale } from "next-intl/server";
import { companyName, address, email, phoneNumber } from "@/src/Manager/info";

export function replacePlaceholders(text: string): string {
  return text
    .replace(/\$COMPANY_NAME/g, companyName)
    .replace(/\$ADDRESS/g, address)
    .replace(/\$EMAIL/g, email)
    .replace(/\$PHONE/g, phoneNumber);
}

export default async function Collections() {
  const collectionRoute1 = "privacy-policy-collection";
  const companyRoute = "privacy-policy";
  const locale = await getLocale();
  const collection = await fetchCollectionIfUpdated(
    companyRoute,
    collectionRoute1
  );

  const items = collection?.items ? Object.values(collection.items) : [];
  const extractedCollection = items
    .map((item) => extractCollectionFields(item, locale))
    .filter((item) => !item.itemActive);

  const sortedCollection = extractedCollection.sort((a, b) => {
    const aOrder = a.full?.itemCategories?.["cat-all"]?.order ?? 9999;
    const bOrder = b.full?.itemCategories?.["cat-all"]?.order ?? 9999;
    return aOrder - bOrder;
  });

  // Format the collection timestamp
  const collectionTimestamp = collection?.metadata?.collectionTimestamp;
  const formattedDate = collectionTimestamp
    ? new Date(collectionTimestamp).toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Not Available"; // Fallback if collectionTimestamp is not available
  return (
    <section className="section    ">
      <div className={`container`}>
        <div className={styles.wrapper}>
          <div className={styles.collectionWrapper}>
            {sortedCollection.map((item, index) => (
              <div
                className={`${index === 0 ? styles.head : styles.cardWrapper}`}
                key={item.id}
              >
                <h2 className="gray1 ">
                  {index !== 0 && index + ". "}
                  {replacePlaceholders(item.transOption1)}
                </h2>
                <p className="gray3 paragraph ">
                  {index !== 0 && "- "}
                  {replacePlaceholders(item.transOption2)}
                </p>
              </div>
            ))}
          </div>
          <p className="gray3" style={{ marginTop: "200px" }}>
            Update: {formattedDate}
          </p>
        </div>
      </div>
    </section>
  );
}
