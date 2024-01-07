"use client";
import Link from "next/link";
import React from "react";

// import styles
import styles from "./navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <div className={styles.wrapper}>
      <ul className={styles.menuWrapper}>
        <Link
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
          href={"/"}
        >
          HOME
        </Link>
        <Link
          className={`${styles.link} ${
            pathname.startsWith("/projects") ? styles.active : ""
          }`}
          href={"/projects"}
        >
          PROJECTS
        </Link>
        <Link
          className={`${styles.link} ${
            pathname === "/photography" ? styles.active : ""
          }`}
          href={"/photography"}
        >
          PHOTOGRAPHY
        </Link>
        <Link
          className={`${styles.link} ${
            pathname === "/contact" ? styles.active : ""
          }`}
          href={"/contact"}
        >
          CONTACT
        </Link>
      </ul>
    </div>
  );
}
