import styles from "./LanguageAlphabet.module.css";
import { useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { supportedLocales } from "@/src/manager/navigation";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function LanguageAlphabet() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const handleLocaleSwitch = (nextLocale: string) => {
    startTransition(() => {
      const newPathname = pathname.replace(`/${locale}`, "") || "/";
      router.replace(`/${nextLocale}${newPathname}`);
    });
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div
      className={styles.languageSwitcher}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      {locale}
      <MdOutlineKeyboardArrowDown />
      {isDropdownOpen && (
        <div className={styles.languageDropdown}>
          {supportedLocales
            .filter((lang) => lang !== locale)
            .map((lang) => (
              <button
                key={lang}
                className={styles.languageOption}
                onClick={() => handleLocaleSwitch(lang)}
              >
                {lang}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
