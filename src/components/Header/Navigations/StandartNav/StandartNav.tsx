import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./StandartNav.module.css";
import { navItems, NavItemProps } from "@/Manager/navigation";
import { useLocale } from "next-intl";

export default function StandartNav() {
  const pathname = usePathname();
  const locale = useLocale(); // Get the current locale
  const items: NavItemProps[] = navItems[locale]; // Get items for the current locale

  return (
    <nav className={styles.mainNavWrap}>
      <ul className={styles.listWrap}>
        {items.map((item: NavItemProps) => {
          const localizedUrl =
            item.url === "/" ? `/${locale}` : `/${locale}${item.url}`;
          const isActive =
            item.url === "/"
              ? pathname === `/${locale}` // Exact match for homepage
              : pathname.startsWith(localizedUrl); // For other URLs, starts with localized URL

          return (
            <li key={item.url} className={styles.navItem}>
              <Link
                href={localizedUrl}
                className={`${
                  item.button ? "button button-small button-reverse" : "link"
                } ${isActive && !item.button ? "active-link" : ""}`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
