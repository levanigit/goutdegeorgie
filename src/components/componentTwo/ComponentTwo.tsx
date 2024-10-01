import React from "react";
import styles from "./ComponentTwo.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ComponentTwo() {
  const t = useTranslations("homePage.componentTwo");
  return (
    <section className="section ">
      <div className="container">
        <div className={styles.TwoTextWrapper}>
          <div className={` ${styles.head}`}>
            <h4 className={`heading6 color2`}>{t("title1")}</h4>
            <h2 className={`heading2`}>{t("title2")}</h2>
            <p className={` twoLines `}></p>
          </div>
          <div className={`paragraph gray7  ${styles.textWrap}`}>
            <div>
              <p>{t("text1")}</p>
            </div>
            <div>
              <p>{t("text2")}</p>
            </div>
          </div>
          <Link href="/about" className={` button  `}>
            More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
