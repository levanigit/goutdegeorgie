import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { ReturnTypeOfExtract } from "@/src/lib/firebase/types";
import { getLocale } from "next-intl/server";
import { route1 } from "@/src/manager/info";
import { menuItemPlaceHolder } from "@/public/image";

export default async function ServerCard({
  id,
  images,
  transOption1,
  transOption2,
  noTransOption1,
  boolOption2,
  boolOption3,
  boolOption4,
}: ReturnTypeOfExtract) {
  const locale = await getLocale();

  return (
    <Link href={`/${locale}/${route1}/${id}`}>
      <div className={` ${styles.cardWrapper}`}>
        <Image
          src={images[0] || menuItemPlaceHolder}
          width={1000}
          height={700}
          alt={transOption1}
          loading="lazy"
        />
        <div className={styles.cardInfoDiv}>
          <div>
            <div className={styles.titlePrice}>
              <h2 className="caption color4 ">
                {transOption1.length > 40
                  ? `${transOption1.substring(0, 40)}...`
                  : transOption1}
              </h2>
              <div className={styles.priceWrap}>
                <p className={styles.price}>{noTransOption1}</p>

                <span>CHF</span>
              </div>
            </div>
            <h3 className="paragraph gray7 ">
              {transOption2.length > 60
                ? `${transOption2.substring(0, 60)}...`
                : transOption2}
            </h3>
          </div>

          <div className={` ${styles.tagseWrap}`}>
            <div className={styles.details}>
              {boolOption2 && <p className={styles.favorite}>favorite</p>}
              {boolOption3 && <p className={styles.vegan}>vegetarian</p>}
              {boolOption4 && <p className={styles.new}>new</p>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
