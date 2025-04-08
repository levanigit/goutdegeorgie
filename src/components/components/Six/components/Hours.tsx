import React from "react";
import styles from "./Hours.module.css";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Hours() {
  const locale = await getLocale();
  const t = await getTranslations("homePage.componentSix");

  return (
    <div className={styles.hoursMainWrap}>
      <div className={styles.hoursWrap}>
        <div className={styles.hoursHead}>
          <h3>{t("title1")}</h3>
          <h4 className="heading4">{t("title2")}</h4>
        </div>
        <div className={styles.hoursTimes}>
          <div className={styles.timesDay}>
            <p className={styles.day}>{t("monday")}</p>
            <div className={styles.dotted}></div>
            <p className={styles.hours}>07:00 - 22:00</p>
          </div>
          <div className={styles.timesDay}>
            <p className={styles.day}>{t("tusday")}</p>
            <div className={styles.dotted}></div>
            <p className={styles.hours}>07:00 - 22:00</p>
          </div>
          <div className={styles.timesDay}>
            <p className={styles.day}>{t("wednsday")}</p>
            <div className={styles.dotted}></div>
            <p className={styles.hours}>07:00 - 22:00</p>
          </div>
          <div className={styles.timesDay}>
            <p className={styles.day}>{t("thursday")}</p>
            <div className={styles.dotted}></div>
            <p className={styles.hours}>07:00 - 22:00</p>
          </div>
          <div className={styles.timesDay}>
            <p className={styles.day}>{t("friday")}</p>
            <div className={styles.dotted}></div>
            <p className={styles.hours}>07:00 - 22:00</p>
          </div>
          <div className={styles.timesDay}>
            <p className={styles.day}>{t("saturday")}</p>
            <div className={styles.dotted}></div>
            <p className={styles.hours}>10:00 - 22:00</p>
          </div>

          <div className={styles.timesDay}>
            <p className={styles.day}>{t("sunday")}</p>
            <div className={styles.dotted}></div>
            <p className={styles.hours}>09:00 - 18:00</p>
          </div>
        </div>
        <div className={styles.hoursReserv}>
          <Link className="button" href={`${locale}/reservation`}>
            {t("button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
