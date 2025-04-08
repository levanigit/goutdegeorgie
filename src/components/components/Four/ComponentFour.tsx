import React from "react";
import styles from "./ComponentFour.module.css";
import Image, { StaticImageData } from "next/image";

interface TextIntoPhotoProps {
  reverse?: boolean;
  icon: StaticImageData;
  image: StaticImageData;
  title: string;
  text: string;
}

export default function ComponentFour({
  title,
  text,
  reverse,
  icon,
  image,
}: TextIntoPhotoProps) {
  return (
    <section className="section section-medium">
      <div className="container">
        <div
          className={` ${styles.TextIntoPhotoWrapper} ${
            reverse ? styles.reverse : null
          }`}
        >
          <Image
            // classname="fadeUp"
            className={`  ${styles.image}`}
            src={image}
            width={1000}
            height={1000}
            alt=""
          ></Image>
          <div className={`${styles.textDivWrapper}`}>
            {/* ${styles.slideSide} */}
            <div className={` ${styles.textDiv}`}>
              <Image src={icon} alt="chair" width={60} height={60}></Image>
              <h2 className="heading3 font1 ">{title}</h2>
              <p className="twoLines"></p>
              <h3 className="paragraph gray7 textMedium">{text}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
