import React from "react";
import styles from "./Footer.module.css";
import First from "./fotComponents/First";
import Second from "./fotComponents/Second";
import Third from "./fotComponents/Third";
import Fourth from "./fotComponents/Fourth";

export default function Footer() {
  return (
    <footer className={styles.footMainWrapper}>
      <section className="section">
        <div className="container">
          <div className={styles.footWrapper}>
            <First />
            <Second />
            {/* <Third /> */}
            <Fourth />
          </div>
        </div>
      </section>
    </footer>
  );
}
