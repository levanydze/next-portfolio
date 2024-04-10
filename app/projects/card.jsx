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
        {/* <h3
          className={`${styles.date} ${filter ? styles.important : ""} ${
            best && filter ? styles.best : ""
          }`}
        >
          {date}
        </h3> */}
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
        <div className={styles.titleDesc}>
          <p className={styles.date}>{date}</p>
          <div className={styles.title}>{title}</div>
          <p className={styles.description}>
            {description.length > 60
              ? description.substring(0, 60) + "..."
              : description}
          </p>
          <div className={styles.liveGit}>
            <Link href={projectWeb ? projectWeb : ""} className={styles.live}>
              {projectWeb ? "View Live" : ""}
            </Link>
            <Link href={`/projects/${id}`}>View More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
