import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./StandartNav.module.css";
import { navItems, NavItemProps } from "@/src/manager/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function StandartNav() {
  const pathname = usePathname();
  const locale = useLocale();
  const items: NavItemProps[] = navItems[locale] || [];

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <nav className={styles.mainNavWrap}>
      <ul className={styles.listWrap}>
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
            <li
              key={item.url}
              className={`${styles.navItem} ${
                hasDropdown ? styles.dropdownParent : " "
              }`}
            >
              {/* If there is a dropdown, use <span> instead of <Link> */}
              {hasDropdown ? (
                <Link
                  href={localizedUrl}
                  className={`link ${isActive ? "active-link" : ""}`}
                  onClick={() => toggleDropdown(item.title)}
                  style={{ cursor: "pointer" }}
                >
                  {item.title} ▼
                </Link>
              ) : (
                <Link
                  href={localizedUrl}
                  className={`${
                    item.button && "button button-small button-reverse"
                  }
                  ${!item.button && "link link-animate"}

                   ${isActive && !item.button ? "active-link " : ""}`}
                >
                  {item.title}
                </Link>
              )}

              {/* Dropdown menu - separate from Link */}
              {hasDropdown && (
                <ul
                  className={`${styles.dropdownMenu} ${
                    isDropdownOpen ? styles.open : ""
                  }`}
                >
                  {item.dropdown?.map((subItem) => (
                    <li key={subItem.url}>
                      <Link
                        href={`/${locale}${item.url}${subItem.url}`}
                        className="link"
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
    </nav>
  );
}
