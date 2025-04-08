import React from "react";
import styles from "./ComponentFive.module.css";
import { address, email, phoneNumber } from "@/src/manager/info";
import { useTranslations } from "next-intl";
import emailIcon from "./icons/email.png";
import phoneIcon from "./icons/phone-call.png";
import chatIcon from "./icons/live-chat.png";
import addresslIcon from "./icons/address.png";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useLocale } from "next-intl";

export default function ComponentFive() {
  const locale = useLocale();
  const t = useTranslations("homePage.componentFive");
  return (
    <section className="section ">
      <div className="container">
        <div className="container">
          <div className={styles.FourBoxMainWrapper}>
            {/* Location Box */}
            <Link href="">
              <Image
                src={addresslIcon}
                width={70}
                height={70}
                alt="Location Icon"
              />
              <span className="twoLines"></span>
              <h4 className="paragraph gray7">{address}</h4>
            </Link>

            {/* phone number box */}
            <Link href={`tel: ${phoneNumber}`}>
              <Image src={phoneIcon} width={70} height={70} alt="Mobile Icon" />
              <span className="twoLines"></span>

              <p className="paragraph gray7">{phoneNumber}</p>
            </Link>

            {/* Email Box */}
            <Link href={`mailto: ${email}`}>
              <Image src={emailIcon} width={70} height={70} alt="Email Icon" />
              <span className="twoLines"></span>

              <p className="paragraph gray7">{email}</p>
            </Link>

            {/* Chat with Us Box */}
            <Link href={`${locale}/reservation `}>
              <Image src={chatIcon} width={70} height={70} alt="Chat Icon" />
              <span className="twoLines"></span>
              <p className="paragraph gray7">Chat with Us</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
