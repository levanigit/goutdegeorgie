import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { MenuItemProps } from "../menuTypes"; // Assuming MenuItemProps is defined correctly
import { dynamicPageRoute } from "@/Manager/navigation";
import { useLocale } from "next-intl";
import { menuCarPlaceHoldImg } from "@/Manager/navigation";

export default function ServerCard({
  id,
  image,
  names,
  descriptions,
  price,
  option1,
  option2,
  option3,
}: MenuItemProps) {
  // Get current locale
  const locale = useLocale();

  // Safely handle the display of names and descriptions with fallbacks
  const displayName = names?.[locale] || ""; // Try multilingual names, fallback to single name
  const displayDescription = descriptions?.[locale] || ""; // Multilingual descriptions, fallback to single description

  return (
    <Link href={`/${locale}/${dynamicPageRoute}/${id}`}>
      <div className={` ${styles.cardWrapper}`}>
        <Image
          src={image || menuCarPlaceHoldImg}
          width={1000}
          height={700}
          alt={displayName}
          loading="lazy"
        />
        <div className={styles.cardInfoDiv}>
          <div>
            <div className={styles.titlePrice}>
              <h2 className="caption color4 ">
                {displayName.length > 40
                  ? `${displayName.substring(0, 40)}...`
                  : displayName}
              </h2>{" "}
              <div className={styles.priceWrap}>
                <p className={styles.price}>{price.toFixed(2)}</p>

                <span>CHF</span>
              </div>
            </div>
            <h3 className="paragraph gray7 ">
              {displayDescription.length > 60
                ? `${displayDescription.substring(0, 60)}...`
                : displayDescription}
            </h3>
          </div>

          <div className={` ${styles.tagseWrap}`}>
            <div className={styles.details}>
              {option1 && <p className={styles.favorite}>favorite</p>}
              {option2 && <p className={styles.new}>new</p>}
              {option3 && <p className={styles.vegan}>vegetarian</p>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
/* Group 98 */
/* Rectangle 30 */
