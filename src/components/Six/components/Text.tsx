import React from "react";
import Image from "next/image";
import arrowPost from "../arrow-post.png";
import styles from "./Text.module.css";
import { address, email, phoneNumber } from "@/Manager/info";

export default function Text() {
  return (
    <div className={styles.textWrap}>
      <Image src={arrowPost} alt="arrow post" height="70" width={70} />
      <h2 className="title3">EASY TO FIND</h2>
      <span className="twoLines"></span>
      <p className={`font1 title1 ${styles.addres}`}>{address}</p>
      <p className={`font1 title1 ${styles.email}`}>{email}</p>
      <p className={`font1 ${styles.number}`}>{phoneNumber}</p>
    </div>
  );
}
