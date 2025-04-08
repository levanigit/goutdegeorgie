import styles from "./Item.module.css";
import type { ReturnTypeOfExtract } from "@/src/lib/firebase/types";
import { menuCarPlaceHoldImg } from "@/src/manager/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function ItemJsx({ item }: { item: ReturnTypeOfExtract }) {
  return (
    <div className={styles.background}>
      <article className={styles.menuDetailsWrapper}>
        <div className={styles.imgWrapper}>
          <Image
            priority
            src={item.images[0] || menuCarPlaceHoldImg}
            alt={item.transOption1}
            height={1000}
            width={1000}
            className={styles.image}
          />
        </div>
        <div className={styles.infoWrapper}>
          <h2 className={`heading3 font1 color1 ${styles.title}`}>
            {item.transOption1}
          </h2>
          <p className={`paragraph ${styles.description}`}>
            {item.transOption2}
          </p>

          <div className={` ${styles.tagsPriceWrap}`}>
            <div className={` ${styles.tagseWrap}`}>
              <div className={styles.details}>
                {item.boolOption2 && (
                  <p className={styles.favorite}>favorite</p>
                )}
                {item.boolOption3 && <p className={styles.vegan}>vegetarian</p>}
                {item.boolOption4 && <p className={styles.new}>new</p>}
              </div>
            </div>

            <div className={styles.priceWrap}>
              <p className={styles.price}>{item.noTransOption1}</p>
              <span>CHF</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
