import React from "react";
import styles from "./ComponentTwo.module.css";
import Link from "next/link";
import { useLocale } from "next-intl";
interface componentTwoProps {
  title1: string;
  title2: string;
  text1: string;
  text2: string;
  button?: string;
}

export default function ComponentTwo({
  title1,
  title2,
  text1,
  text2,
  button,
}: componentTwoProps) {
  const locale = useLocale();
  return (
    <section className="section ">
      <div className="container">
        <div className={styles.TwoTextWrapper}>
          <div className={` ${styles.head}`}>
            <h3 className={`heading6 color2`}>{title1}</h3>
            <h2 className={`heading2`}>{title2}</h2>
            <p className={` twoLines `}></p>
          </div>
          <div className={`paragraph gray7  ${styles.textWrap}`}>
            <div>
              <p>{text1}</p>
            </div>
            <div>
              <p>{text2}</p>
            </div>
          </div>
          {button && (
            <Link href={`/${locale}/story`} className={` button  `}>
              {button}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
