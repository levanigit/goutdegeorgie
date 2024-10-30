import React from "react";
import styles from "./ComponentSix.module.css";
import Hours from "./components/Hours";
import Text from "./components/Text";
import { mapImage } from "@/public/image";
import Image from "next/image";

export default function ComponentSix() {
  return (
    <section className="section section-medium">
      <div className="container">
        <div className={styles.mapAndTimesWrapper}>
          <div className={styles.textMapWrap}>
            <Text />
            <div className={styles.mapSide}>
              {/* <iframe className={styles.mapSide} src={mapLocation}></iframe> */}
              <Image src={mapImage} alt="google map" width={500} height={800} />
            </div>
          </div>
          <Hours />
        </div>
      </div>
    </section>
  );
}
