import React from "react";
import styles from "./ComponentOne.module.css";
import Image, { StaticImageData } from "next/image";
import { getTranslations } from "next-intl/server";
interface ComponentOne {
  image: StaticImageData;
  reverse?: boolean;
}

export default async function ComponentOne({ image, reverse }: ComponentOne) {
  const t = await getTranslations("homePage.componentOne");

  return (
    <section className="section section-medium">
      <div className="container">
        <div
          className={` ${reverse ? styles.reverse : ""}  ${
            styles.photoTextWrapper
          }`}
        >
          <Image src={image} height={1500} width={1000} alt="ss" />
          <div className={` ${styles.textDiv}`}>
            <h2 className="color2 heading6"> {t("title1")}</h2>
            <h2 className="heading3 ">{t("title2")}</h2>
            <p className="twoLines"></p>
            <h3 className="paragraph">{t("text")}</h3>
            <h4 className="heading6">Mari</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
