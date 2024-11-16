import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoRestaurantOutline } from "react-icons/io5";
import styles from "./SocialMedia.module.css";
import { facebookUrl, foodUrl, googleUrl, instagramUrl } from "@/Manager/info";
import { IoLogoGoogle } from "react-icons/io";

export default function SocialMedia() {
  return (
    <div className={styles.socialMedia}>
      {instagramUrl && (
        <Link href={instagramUrl} target="_blank">
          <FaInstagram className={styles.socialMediaIcon} />
        </Link>
      )}
      {facebookUrl && (
        <Link href={facebookUrl} target="_blank">
          <CiFacebook className={styles.socialMediaIcon} />
        </Link>
      )}
      {foodUrl && (
        <Link href={foodUrl} target="_blank">
          <IoRestaurantOutline className={styles.socialMediaIcon} />
        </Link>
      )}
      {googleUrl && (
        <Link href={googleUrl} target="_blank">
          <IoLogoGoogle className={styles.socialMediaIcon} />
        </Link>
      )}
    </div>
  );
}
