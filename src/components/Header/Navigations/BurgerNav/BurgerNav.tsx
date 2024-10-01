import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BurgenNav.module.css";
import { navItems, NavItemProps } from "@/Manager/navigation";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocale } from "next-intl";

interface BurgerNavProps {
  isNavOpen: boolean;
  navClose: () => void;
  navToggler: () => void;
}

export default function BurgerNav({
  isNavOpen,
  navClose,
  navToggler,
}: BurgerNavProps) {
  const pathname = usePathname();
  const locale = useLocale(); // Get the current locale
  const items: NavItemProps[] = navItems[locale]; // Get items for the current locale

  return (
    <div className={styles.burgerWrapper}>
      <div className={`${styles.burgerMenu}`}>
        <ul
          className={`${isNavOpen ? styles.burgerActiveNav : ""} ${
            styles.burgerUl
          }`}
        >
          {items.map((item: NavItemProps) => {
            const localizedUrl =
              item.url === "/" ? `/${locale}` : `/${locale}${item.url}`;
            const isActive =
              item.url === "/"
                ? pathname === `/${locale}` // Exact match for homepage
                : pathname.startsWith(localizedUrl); // For other URLs, starts with localized URL

            return (
              <li key={localizedUrl} className={styles.burgerLi}>
                <Link
                  className={`${styles.button} ${
                    item.button
                      ? "button button button-small button-reverse"
                      : "burger-link"
                  } ${isActive ? "active-burger-link" : ""}`}
                  href={localizedUrl}
                  onClick={navClose}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {!isNavOpen ? (
        <div className={styles.openCloseIconDiv}>
          <GiHamburgerMenu
            className={styles.openCloseIcon}
            onClick={navToggler}
          />
        </div>
      ) : (
        <div className={styles.openCloseIconDiv}>
          <IoClose className={styles.openCloseIcon} onClick={navToggler} />
        </div>
      )}
    </div>
  );
}
