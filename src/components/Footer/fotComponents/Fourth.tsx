import { instagramUrl } from "@/Manager/info";
import styles from "./Fourth.module.css";
import Link from "next/link";
import {
  pizza,
  pizza2,
  heroMain,
  heroMenu,
  heroReservation,
  heroStory,
} from "@/public/image";
import Image from "next/image";

const defaultImages = [
  pizza,
  pizza2,
  heroMain,
  heroMenu,
  heroReservation,
  heroStory,
];
interface props {
  title: string;
  subTitle: string;
}
export default function Fourth({ title, subTitle }: props) {
  return (
    <section className={styles.wrapper}>
      <h2 className="heading4">{title}</h2>
      <div className={styles.imageWrapper}>
        {defaultImages.slice(0, 6).map((img, index) => (
          <Image
            key={img.src || index}
            className={styles.image}
            alt={`Instagram photo ${index + 1}`}
            width={70}
            height={70}
            src={img.src}
          />
        ))}
      </div>

      <Link
        href={instagramUrl}
        passHref
        target="_blank"
        rel="noopener noreferrer"
        className="caption"
      >
        <p>{subTitle}</p>
      </Link>
    </section>
  );
}
