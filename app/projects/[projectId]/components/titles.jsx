import React from "react";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

//import styles
import styles from "./titles.module.css";

export default function Titles({ date, title, description }) {
  return (
    <div>
      <h4 className={styles.pageHeadTitle}>{date}</h4>
      <Link href="./">
        <IoMdArrowRoundBack className={styles.goBack} />
      </Link>
      <div className={styles.titleDescWrap}>
        <h2 className={styles.projectTitle}>{title}</h2>
        <h2 className={styles.descriptionTitle}>{description}</h2>
      </div>
    </div>
  );
}
