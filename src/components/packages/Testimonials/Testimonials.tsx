"use client";
import Image from "next/image";
import styles from "./Testimonials.module.css";
import { StarIcon } from "./StarIcon";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { useRef, useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { fetchCollectionIfUpdated } from "@/src/lib/firebase/getFirebaseData";
import { testimonialRoute, companyRoute } from "@/src/manager/info";
import { extractCollectionFields } from "@/src/lib/firebase/types";

export default function Testimonials({
  title1,
  title2,
}: {
  title1: string;
  title2?: string;
}) {
  const reviewsWrapperRef = useRef<HTMLDivElement>(null);
  const [isScrolledLeft, setIsScrolledLeft] = useState(true);
  const [isScrolledRight, setIsScrolledRight] = useState(false);
  const [items, setItems] = useState<any[]>([]);
  const locale = useLocale();

  useEffect(() => {
    const loadTestimonials = async () => {
      const collection = await fetchCollectionIfUpdated(
        companyRoute,
        testimonialRoute
      );
      const rawItems = collection?.items ? Object.values(collection.items) : [];

      const extracted = rawItems
        .map((item) => extractCollectionFields(item, locale))
        .filter((item) => !item.itemActive);

      setItems(extracted);
    };

    loadTestimonials();
  }, [locale]);

  const handleScroll = () => {
    const wrapper = reviewsWrapperRef.current;
    if (wrapper) {
      const isAtStart = wrapper.scrollLeft === 0;
      const isAtEnd =
        wrapper.scrollLeft + wrapper.offsetWidth >= wrapper.scrollWidth;

      setIsScrolledLeft(isAtStart);
      setIsScrolledRight(isAtEnd);
    }
  };

  const scrollLeft = () => {
    reviewsWrapperRef.current?.scrollBy({ left: -380, behavior: "smooth" });
  };

  const scrollRight = () => {
    reviewsWrapperRef.current?.scrollBy({ left: 380, behavior: "smooth" });
  };

  useEffect(() => {
    const wrapper = reviewsWrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => wrapper.removeEventListener("scroll", handleScroll);
    }
  }, []);

  if (items.length < 1) return null;

  return (
    <section className="section hidden no-padding-x section-medium no-padding-y">
      <div>
        <div className="section no-padding-y">
          <div className="container">
            <div className={styles.titlesWrapper}>
              <h3 className="heading2 color4">{title1}</h3>
            </div>
          </div>
        </div>
        <div className={styles.reviewsWrapper} ref={reviewsWrapperRef}>
          {items.map((info, index) => (
            <div key={index} className={`lift shadow1 ${styles.card}`}>
              <div className={styles.starsReview}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, starIndex) => {
                    const ratingStr =
                      info.noTransOption1?.replace(",", ".") || "5";
                    const rating = parseFloat(ratingStr);

                    const filled = starIndex < Math.floor(rating);
                    const half =
                      rating % 1 !== 0 && starIndex === Math.floor(rating);

                    return (
                      <StarIcon key={starIndex} filled={filled} half={half} />
                    );
                  })}
                </div>

                <p className="paragraph gray7">{info.transOption2}</p>
              </div>

              <div className={styles.authorInfoWrap}>
                {info.images[0] && (
                  <Image
                    className="shadow-4-s"
                    src={info.images?.[0]}
                    alt={info.transOption1}
                    width={50}
                    height={50}
                  />
                )}
                <div>
                  <h3 className="paragraph">{info.transOption1}</h3>
                  <p className="caption-mini gray5">
                    {info.transOption3 || ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section no-padding-y">
          <div className="container">
            <div className={`gray7 ${styles.arrowWrapper}`}>
              <IoMdArrowBack
                className={`${styles.arrow} ${isScrolledLeft ? "gray3" : ""}`}
                onClick={scrollLeft}
              />
              <IoMdArrowForward
                className={`${styles.arrow} ${isScrolledRight ? "gray3" : ""}`}
                onClick={scrollRight}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
