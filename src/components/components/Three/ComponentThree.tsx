import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./ComponentThree.module.css";
import EachService from "./EachService/EachService";
import {
  cehf,
  catering,
  contact,
  menu,
  reservation,
  story,
} from "./EachService/icons/importIcons";
import { useLocale, useTranslations } from "next-intl";

export default function ComponentThree({ image }: { image: StaticImageData }) {
  const t = useTranslations("storyPage.componentThree");
  const locale = useLocale();
  return (
    <section className="section">
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.textWrapper}>
            <h2 className="heading4 gray7">{t("title1")}</h2>
            <h3 className="heading3 ">{t("title2")}</h3>
          </div>
          <div className={styles.threeSectionWrapper}>
            <div className={`${styles.sideSection} `}>
              <EachService
                icon={cehf}
                title={t("services.ser1")}
                url={`/${locale}`}
              />
              <EachService
                icon={story}
                title={t("services.ser2")}
                url={`/${locale}/story`}
              />
              <EachService
                icon={menu}
                title={t("services.ser3")}
                url={`/${locale}/menu`}
              />
            </div>
            <Image
              className={styles.image}
              src={image}
              width={800}
              height={1500}
              alt="construction guy"
            />
            <div className={`${styles.sideSection} `}>
              <EachService
                icon={reservation}
                title={t("services.ser4")}
                url={`/${locale}/reservation`}
              />
              <EachService
                icon={catering}
                title={t("services.ser5")}
                url={`/${locale}/menu`}
              />
              <EachService
                icon={contact}
                title={t("services.ser6")}
                url={`/${locale}/reservation`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
