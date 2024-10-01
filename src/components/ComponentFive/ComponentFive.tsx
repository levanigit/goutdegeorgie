import React from "react";
import styles from "./ComponentFive.module.css";
import EachFourBox from "./EachFourBox";
import { address, email, phoneNumber } from "@/Manager/info";
import { heroMain } from "@/public/image";
import { useTranslations } from "next-intl";

export default function ComponentFive() {
  const t = useTranslations("homePage.componentFive");
  return (
    <section className="section ">
      <div className="container">
        <div className={styles.FourBoxMainWrapper}>
          <EachFourBox image={heroMain} alt="arrows" title={address} />
          <EachFourBox image={heroMain} alt="phone" title={phoneNumber} phone />
          <EachFourBox image={heroMain} alt="postbox" title={email} email />
          <EachFourBox image={heroMain} alt="chat" title={t("title4")} link />
        </div>
      </div>
    </section>
  );
}
