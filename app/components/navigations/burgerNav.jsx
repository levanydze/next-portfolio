"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

//import styles
import styles from "./burgerNav.module.css";

export default function BurgerNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggler = () => {
    setIsNavOpen((prev) => !prev);
  };
  const navClose = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <div className={styles.barSpace}></div>
      <div className={styles.mainWrapper}>
        <div className={styles.barDiv}>
          <Link href={"/"} className={styles.burgerLogo}>
            Levanidze
          </Link>
        </div>
        <ul
          className={`${isNavOpen ? styles.activeNav : ""} ${
            styles.menuWrapper
          }`}
        >
          <Link onClick={navClose} className={styles.menuList} href={"/"}>
            HOME
          </Link>
          <Link
            onClick={navClose}
            className={styles.menuList}
            href={"/projects"}
          >
            PROJECTS
          </Link>
          <Link
            onClick={navClose}
            className={styles.menuList}
            href={"/photography"}
          >
            PHOTOGRAPHY
          </Link>

          {/* 12 */}
          <Link
            onClick={navClose}
            className={styles.menuList}
            href={"/contact"}
          >
            CONTACT
          </Link>
        </ul>
      </div>

      {!isNavOpen ? (
        <div>
          <GiHamburgerMenu className={styles.navIcon} onClick={navToggler} />
        </div>
      ) : (
        <div>
          <IoClose className={styles.navIcon} onClick={navToggler} />
        </div>
      )}
    </>
  );
}
