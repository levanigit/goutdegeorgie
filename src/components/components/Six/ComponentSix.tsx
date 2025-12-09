import React from "react";
import styles from "./ComponentSix.module.css";
import Hours from "./components/Hours";
import Text from "./components/Text";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function ComponentSix() {
  return (
    <section className="section section-medium">
      <div className="container">
        <div className={styles.mapAndTimesWrapper}>
          <div className={styles.textMapWrap}>
            <Text />
            <div className={styles.mapSide}>
              <GoogleMapsEmbed
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || ""}
                mode="place"
                maptype="satellite"
                q="Geneva"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <Hours />
        </div>
      </div>
    </section>
  );
}
