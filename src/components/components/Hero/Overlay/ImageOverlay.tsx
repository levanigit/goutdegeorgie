import styles from "./ImageOverlay.module.css";
import { FiPhone } from "react-icons/fi";
import SocialMedia from "./SocialMedia/SocialMedia";
import Link from "next/link";
import { companyName, phoneNumber } from "@/src/manager/info";
import { useLocale, useTranslations } from "next-intl";

export default function ImageOverlay() {
  const locale = useLocale();
  const t = useTranslations("homePage.hero");
  return (
    <section className="section no-padding-y">
      <div className="container">
        <div className={styles.overlayWrapper}>
          <div className={styles.empty}></div>
          <div className={styles.middle}>
            <p className="heading5 color2">{t("title1")}</p>
            <p className={`heading3 font2 ${styles.title2}`}>{t("title2")}</p>
            <h1 className="heading1 ">{companyName}</h1>
            <div className="twoLines"></div>
            <h2 className="paragraph white">{t("text")}</h2>
            <div className={styles.buttons}>
              <Link className="button" href={`./${locale}/menu`}>
                {t("button1")}
              </Link>
              <Link
                href={`/${locale}/reservation`}
                className="button button-reverse"
              >
                {t("button2")}
              </Link>
            </div>
          </div>
          <div className="section no-padding-y">
            <div className="container ">
              <div className={styles.bottom}>
                <Link
                  className={`paragraph font1 ${styles.number}`}
                  href={`tel:${phoneNumber}`}
                >
                  <FiPhone className={`${styles.phoneIcon}`} />
                  {phoneNumber}
                </Link>
                <div className={styles.icons}>
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
