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
  github,
  projectWeb,
}) {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.cardWrapper}>
        <h3
          className={`${styles.date} ${filter ? styles.important : ""} ${
            best && filter ? styles.best : ""
          }`}
        >
          {date}
        </h3>
        <div className={styles.infoWrapper}></div>
        <div className={styles.photoDiv}>
          <Link className={styles.linkWrapper} href={`/projects/${id}`}>
            <Image
              width={500}
              height={500}
              src={image}
              alt={description}
              priority
            ></Image>
          </Link>
        </div>
      </div>
      <div className={styles.liveGit}>
        <Link href={projectWeb ? projectWeb : ""} className={styles.live}>
          {projectWeb ? "View Live" : ""}
        </Link>
        <Link href={`/projects/${id}`}>Wiev More</Link>
      </div>
      <div className={styles.titleDesc}>
        <div className={styles.title}>{title}</div>
        <p>
          {description.length > 50 ? description.substring(0, 50) : description}
          ...
        </p>
      </div>
    </div>
  );
}
