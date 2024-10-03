import React from "react";
import styles from "./ComponentFive.module.css";
import EachFourBox from "./EachFourBox";
import { address, email, phoneNumber } from "@/Manager/info";
import { useTranslations } from "next-intl";
import emailIcon from "./icons/email.png";
import phoneIcon from "./icons/phone-call.png";
import chatIcon from "./icons/live-chat.png";
import addresslIcon from "./icons/address.png";

export default function ComponentFive() {
  const t = useTranslations("homePage.componentFive");
  return (
    <section className="section ">
      <div className="container">
        <div className={styles.FourBoxMainWrapper}>
          <EachFourBox image={addresslIcon} alt="arrows" title={address} />
          <EachFourBox
            image={phoneIcon}
            alt="phone"
            title={phoneNumber}
            phone
          />
          <EachFourBox image={emailIcon} alt="postbox" title={email} email />
          <EachFourBox image={chatIcon} alt="chat" title={t("title4")} link />
        </div>
      </div>
    </section>
  );
}
