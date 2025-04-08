import styles from "./LanguageSwitcher.module.css";
import Flag from "react-world-flags"; // Assuming you're using this package for flags
import { useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { supportedLocales } from "@/src/manager/navigation";

export default function LanguageSwitcher() {
  const [flagShow, setFlagShow] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const handleLocaleSwitch = (nextLocale: string) => {
    startTransition(() => {
      // Strip the current locale from the pathname, if present
      const newPathname = pathname.replace(`/${locale}`, "") || "/";
      // Replace the route with the new locale
      router.replace(`/${nextLocale}${newPathname}`);
    });
  };

  const toggleFlagDropdown = () => {
    setFlagShow((prevFlagShow) => !prevFlagShow);
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={styles.currentLang}
        onClick={toggleFlagDropdown}
        aria-label="Select Language"
      >
        <Flag
          className={styles.flags}
          code={locale == "en" ? "gb" : locale}
          alt={`${locale} flag`}
        />
      </button>
      {flagShow && (
        <ul className={styles.languageDropdown}>
          {supportedLocales.map((lang) => (
            <li key={lang} className={styles.languageOption}>
              <button onClick={() => handleLocaleSwitch(lang)}>
                <Flag
                  code={lang === "en" ? "gb" : lang}
                  className={styles.flags}
                  aria-label="Select Language"
                  alt={`${lang} flag`}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
