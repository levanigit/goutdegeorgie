"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public/image";
import LanguageFlag from "./Navigations/LanguageSwitcher/LanguageFlag";
import { companyName } from "@/src/manager/info";
import StandartNav from "./Navigations/StandartNav/StandartNav";
import BurgerNav from "./Navigations/BurgerNav/BurgerNav";
import { useLocale } from "next-intl";
// import LanguageAlphabet from "./Navigations/LanguageSwitcher/LanguageAlphabet";

export default function Header() {
  const locale = useLocale();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggler = () => setIsNavOpen((prev) => !prev);
  const navClose = () => setIsNavOpen(false);
  return (
    <header className={styles.headWrapper}>
      <section className="section header">
        <div className="container">
          <div className={styles.navigationWrapper}>
            <Link
              href={`/${locale}/`}
              onClick={navClose}
              className={styles.logoWrapper}
            >
              <Image
                className="logo"
                src={logo}
                height={200}
                width={200}
                alt={`${companyName} logo`}
              />
            </Link>
            <StandartNav />
            <LanguageFlag />
            {/* <LanguageAlphabet /> */}
            <BurgerNav
              navClose={navClose}
              navToggler={navToggler}
              isNavOpen={isNavOpen}
            />
          </div>
        </div>
      </section>
    </header>
  );
}
