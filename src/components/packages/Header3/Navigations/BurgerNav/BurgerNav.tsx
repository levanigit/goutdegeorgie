import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BurgerNav.module.css";
import { navItems, NavItemProps } from "@/src/manager/navigation";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocale } from "next-intl";
import { useState } from "react";

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
  const locale = useLocale();
  const items: NavItemProps[] = navItems[locale];
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <div className={styles.burgerWrapper}>
      <div className={styles.burgerMenu}>
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
                ? pathname === `/${locale}`
                : pathname.startsWith(localizedUrl);

            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            const isDropdownOpen = openDropdown === item.title;

            return (
              <li key={localizedUrl} className={styles.burgerLi}>
                <div className={styles.burgerItemWrapper}>
                  {hasDropdown ? (
                    <div className={styles.burgerDropdownHeader}>
                      <span
                        onClick={() => toggleDropdown(item.title)}
                        className={` burger-link ${
                          isActive ? "active-burger-link" : ""
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>
                  ) : (
                    <Link
                      className={`${styles.button} ${
                        item.button
                          ? "button button-small button-reverse"
                          : "burger-link"
                      } ${isActive ? "active-burger-link" : ""}`}
                      href={localizedUrl}
                      onClick={navClose}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>

                {/* Dropdown menu */}
                {hasDropdown && isDropdownOpen && (
                  <ul className={styles.dropdownMenu}>
                    {item.dropdown?.map((subItem) => (
                      <li key={subItem.url}>
                        <Link
                          href={`/${locale}${item.url}${subItem.url}`}
                          className="burger-link"
                          onClick={() => {
                            setOpenDropdown(null);
                            navToggler();
                          }}
                        >
                          - {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Burger Menu Open/Close Icons */}
      <div
        className={styles.openCloseIconDiv}
        onClick={() => {
          setOpenDropdown(null);
          navToggler();
        }}
      >
        {isNavOpen ? (
          <IoClose className={styles.openCloseIcon} />
        ) : (
          <GiHamburgerMenu className={styles.openCloseIcon} />
        )}
      </div>
    </div>
  );
}
