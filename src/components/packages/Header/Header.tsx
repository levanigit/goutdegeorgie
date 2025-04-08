"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public/image";
import LanguageSwitcher from "./Navigations/LanguageSwitcher/LanguageSwitcher";
import { companyName } from "../../../manager/info";
import StandartNav from "./Navigations/StandartNav/StandartNav";
import BurgerNav from "./Navigations/BurgerNav/BurgerNav";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggler = () => setIsNavOpen((prev) => !prev);
  const navClose = () => setIsNavOpen(false);

  return (
    <header className={styles.headWrapper}>
      <section className="section header">
        <div className="container">
          <div className={styles.navigationWrapper}>
            <Link href={`/`} onClick={navClose} className={styles.logoWrapper}>
              <Image
                className="logo"
                src={logo}
                height={200}
                width={200}
                alt={`${companyName} logo`}
              />
            </Link>
            <StandartNav />
            <LanguageSwitcher />
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
