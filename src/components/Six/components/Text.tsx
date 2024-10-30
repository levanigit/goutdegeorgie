import React from "react";
import Image from "next/image";
import arrowPost from "../arrow-post.png";
import styles from "./Text.module.css";
import { address, addressLink, email, phoneNumber } from "@/Manager/info";
import Link from "next/link";

export default function Text() {
  return (
    <div className={styles.textWrap}>
      <Image src={arrowPost} alt="arrow post" height="70" width={70} />
      <h2 className="title3">EASY TO FIND</h2>
      <span className="twoLines"></span>
      <Link target="_blank" href={addressLink}>
        <p className={`font1 title1 ${styles.addres}`}>{address}</p>
      </Link>
      <p className={`font1 title1 ${styles.email}`}>
        <Link href={`mailto:${email}`} className={styles.email}>
          {email}
        </Link>
      </p>

      <p className={`font1 ${styles.number}`}>
        <Link className="caption pargrapht-bold" href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </Link>
      </p>
    </div>
  );
}
