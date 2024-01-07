import Link from "next/link";
import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

//import styles
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.leftWrapper}>
        <h6>© Levani Levanidze.</h6>
        <p>All Rights Reserved </p>
      </div>
      <div className={styles.middleWrapper}>
        <Link href="https://github.com/levanydze">
          <FaGithub />
        </Link>
        <Link href="https://facebook.com/levanidze">
          <FaFacebook />
        </Link>
        <Link href="https://linkedin.com/in/levanidze">
          <FaLinkedin />
        </Link>
      </div>
      <Link href="https://levanidze.com" className={styles.rightWrapper}>
        Made by Levanidze
      </Link>
    </div>
  );
}
