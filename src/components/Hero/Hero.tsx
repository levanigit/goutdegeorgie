import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import ImageOverlay from "./Overlay/ImageOverlay";
import { acharuli } from "@/public/image";

export default function MainImage() {
  return (
    <div className={` ${styles.mainWrapper} ${styles.outline}`}>
      <ImageOverlay />
      <div className={styles.imageDarkLayer}></div>
      <Image
        className={styles.mainImage}
        src={acharuli}
        alt=""
        width={1200}
        height={800}
        priority
      />
    </div>
  );
}
