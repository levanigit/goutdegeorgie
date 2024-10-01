import { useLocale } from "next-intl";
import React from "react";
import styles from "./Second.module.css";
import Link from "next/link";
import { navItems } from "@/Manager/navigation";
import { NavItemProps } from "@/Manager/navigation";

export default function Second() {
  const locale = useLocale(); // Get the current locale
  const items: NavItemProps[] = navItems[locale]; // Get items for the current locale
  return (
    <section>
      <h2 className="heading4">Navigation</h2>

      <div className={styles.menuWrap}>
        {items.map((item: NavItemProps) => {
          const localizedUrl =
            item.url === "/" ? `/${locale}` : `/${locale}${item.url}`;
          return (
            <Link key={item.title} className="link" href={localizedUrl}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
