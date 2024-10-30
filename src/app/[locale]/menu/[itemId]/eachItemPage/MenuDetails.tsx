import styles from "./MenuDetails.module.css";
import Image from "next/image";
import { useLocale } from "next-intl";
import { menuCarPlaceHoldImg } from "@/Manager/navigation";
import { newItem } from "@/public/image";
import { FaHeart } from "react-icons/fa6";
import { LuVegan } from "react-icons/lu";

interface MenuDetailsProps {
  item: {
    id: string;
    names: { [key: string]: string };
    descriptions: { [key: string]: string };
    price: number;
    image?: string;
    option1?: boolean;
    option2?: boolean;
    option3?: boolean;
  };
}

export default function MenuDetails({ item }: MenuDetailsProps) {
  const locale = useLocale(); // Use locale directly from next-intl

  if (!item) {
    return null;
    // <p>Error: Item not found</p>;
  }

  const itemName = item.names[locale] || item.names["fr"] || "Unnamed Item";
  const itemDescription =
    item.descriptions[locale] ||
    item.descriptions["fr"] ||
    "No description available";

  return (
    <article className={styles.menuDetailsWrapper}>
      <div className={styles.imgWrapper}>
        <Image
          priority
          src={item.image || menuCarPlaceHoldImg}
          alt={itemName}
          height={1000}
          width={1000}
          className={styles.image}
        />
      </div>
      <div className={styles.infoWrapper}>
        <h2 className={`heading3 font1 color1 ${styles.title}`}>{itemName}</h2>
        <p className={`paragraph ${styles.description}`}>{itemDescription}</p>

        <div className={` ${styles.tagsPriceWrap}`}>
          <div className={styles.details}>
            {item.option1 && (
              <div className={styles.new}>
                <Image
                  className={styles.eachItem}
                  src={newItem}
                  width={50}
                  height={40}
                  alt="svgNew"
                />
              </div>
            )}
            {item.option2 && (
              <div className={styles.heart}>
                <FaHeart className={styles.eachItem} />
              </div>
            )}
            {item.option3 && (
              <div className={styles.vegan}>
                <LuVegan className={styles.eachItem} />
              </div>
            )}
          </div>

          <div className={styles.priceWrap}>
            <p className={styles.price}>{item.price} </p>
            <span>CHF</span>
          </div>
        </div>
      </div>
    </article>
  );
}
