import React from "react";
import styles from "./Footer.module.css";
import First from "./fotComponents/First";
import Second from "./fotComponents/Second";
import Third from "./fotComponents/Third";
import Fourth from "./fotComponents/Fourth";
import LowerFoot from "../LowerFooter/LowerFoot";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");
  return (
    <footer className={styles.footMainWrapper}>
      <section className="section">
        <div className="container">
          <div className={styles.footWrapper}>
            <First title={t("title1")} />
            <Second title={t("title2")} />
            {/* <Third title={t("title3")} /> */}
            <Fourth title={t("title4")} subTitle={t("title5")} />
          </div>
        </div>
      </section>
      <LowerFoot />
    </footer>
  );
}
