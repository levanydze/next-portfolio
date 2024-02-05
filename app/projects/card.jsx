import React from "react";
import Image from "next/image";
import Link from "next/link";

//import styles
import styles from "./card.module.css";

export default function Card({
  image,
  title,
  description,
  date,
  id,
  important,
  filter,
  best,
}) {
  return (
    <div
      className={`${styles.mainWrapper} ${filter ? styles.important : ""} ${
        best && filter ? styles.best : ""
      }`}
    >
      <Link className={styles.linkWrapper} href={`/projects/${id}`}></Link>
      <div className={styles.cardWrapper}>
        <h3 className={styles.date}>{date}</h3>
        <div className={styles.infoWrapper}></div>
        <div className={styles.photoDiv}>
          <Image
            width={500}
            height={500}
            src={image}
            alt={description}
            priority
          ></Image>
        </div>
      </div>
      <div className={styles.titleDesc}>
        <div className={styles.title}>{title}</div>
        <p> {description}</p>
      </div>
    </div>
  );
}
