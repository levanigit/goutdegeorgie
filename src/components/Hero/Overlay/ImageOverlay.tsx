import styles from "./ImageOverlay.module.css";
import { FiPhone } from "react-icons/fi";
import SocialMedia from "./SocialMedia/SocialMedia";
import Link from "next/link";
import { companyName, phoneNumber } from "@/Manager/info";
import { useTranslations } from "next-intl";

export default function ImageOverlay() {
  const t = useTranslations("homePage.hero");
  return (
    <section className="section no-padding-y">
      <div className="container">
        <div className={styles.overlayWrapper}>
          <div className={styles.empty}></div>
          <div className={styles.middle}>
            <h2 className="heading5 color2">{t("title1")}</h2>
            <h1 className="heading1 ">{companyName}</h1>
            <div className="twoLines"></div>
            <p className="paragraph white">{t("text")}</p>
            <div className={styles.buttons}>
              <Link className="button" href="./menu">
                {t("button1")}
              </Link>
              <Link href="/reservation" className="button button-reverse">
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
