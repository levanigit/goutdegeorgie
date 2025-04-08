import React from "react";
import styles from "./LowerFoot.module.css";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "./leo.png";
import { getLocale } from "next-intl/server";

export default async function LowerFoot() {
  const locale = await getLocale();
  return (
    <div className={` ${styles.mainWrapper}`}>
      <div className={styles.lowerWrap}>
        <div className={styles.sectWrap}>
          <p className={` ${styles.heartName} ${styles.dimmed}`}>
            Created with <FaHeart className={styles.heart} />
            by
          </p>
          <Link href="https://www.levanidze.com/" target="_blank">
            <p className={` ${styles.lighted}`}>Levani</p>
          </Link>
        </div>
        <div className={styles.sectWrap}>
          <div className={styles.divider}></div>

          <p className={styles.dimmed}>Powered by</p>
          <Link
            href="https://www.levanidze.com/"
            target="_blank"
            className={styles.link}
          >
            <p className={` ${styles.lighted}`}>Levanidze.com</p>
            <Image
              className={styles.logoIcon}
              src={logo}
              width={15}
              height={15}
              alt="Levanidze Web Agency www.Levanidze.com"
            ></Image>
          </Link>
        </div>

        <div className={styles.sectWrap}>
          <div className={styles.divider}></div>
          <Link
            href={`/${locale}/privacy-policy`}
            className={`${styles.pages} ${styles.dimmed}`}
          >
            Privacy Plolicy
          </Link>
          {/* <div className={styles.divider}></div>
        <Link
          href={`/${locale}/privacy-policy`}
          className={`${styles.pages} ${styles.dimmed}`}
        >
          terms contiditions
        </Link> */}
        </div>
      </div>
    </div>
  );
}
