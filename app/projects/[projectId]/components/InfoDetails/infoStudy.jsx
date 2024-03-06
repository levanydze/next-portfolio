import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./infoStudy.module.css";

export default function Study({
  date,
  title,
  youtube,
  udemy,
  byEd,
  youtubeIcon,
  udemyIcon,
  byEdIcon,
  course,
  courseDesc,
  courseLink,
}) {
  return (
    <div>
      {/* <p className={styles.sectionNote}>The course I went through in {date}</p>
      <Link href={courseLink}>
        <h4 className={styles.sectionTitle}>{course}</h4>
      </Link>

      <p className={styles.detDescription}>{courseDesc}</p>
      <div>
        {course && (
          <Link href={courseLink} className={styles.iconLinkWrapper}>
            <Image
              className={styles.courseIcon}
              src={
                youtube === true
                  ? youtubeIcon
                  : udemy === true
                  ? udemyIcon
                  : byEd === true
                  ? byEdIcon
                  : ""
              }
              width={200}
              height={200}
              alt={title}
            />
            <p className={styles.iconLink}>Link to course</p>
          </Link>
        )}
      </div> */}
    </div>
  );
}
