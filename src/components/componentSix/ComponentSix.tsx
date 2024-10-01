import React from "react";
import styles from "./ComponentSix.module.css";
import Hours from "./components/Hours";
import Text from "./components/Text";
import { mapLocation } from "@/Manager/info";

export default function ComponentSix() {
  return (
    <section className="section section-medium">
      <div className="container">
        <div className={styles.mapAndTimesWrapper}>
          <div className={styles.textMapWrap}>
            <Text />
            <Text />
            {/* <div className={styles.mapSide}> */}
            {/* <iframe className={styles.mapSide} src={mapLocation}></iframe> */}
            {/* </div> */}
          </div>
          <Hours />
        </div>
      </div>
    </section>
  );
}
