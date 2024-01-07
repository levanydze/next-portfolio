import Link from "next/link";
import React from "react";

// import styles
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.menuWrapper}>
        <Link href={"/"}>HOME</Link>
        <Link href={"/projects"}>PROJECTS</Link>
        <Link href={"/photography"}>PHOTOGRAPHY</Link>
        <Link href={"/contact"}>CONTACT</Link>
      </ul>
    </div>
  );
}
