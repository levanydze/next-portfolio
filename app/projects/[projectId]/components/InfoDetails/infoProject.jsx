import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./infoProject.module.css";

export default function InfoProject({
  title,
  projectTitle,
  github,
  projectWeb,
  gitIcon,
  detDescription,
}) {
  return (
    <div>
      <p className={styles.sectionNote}>
        The project I was working on this month
      </p>
      <Link href={github} className={styles.sectionTitle}>
        {projectTitle}
      </Link>
      <h3 className={styles.detDescription}>{detDescription}</h3>
      {/* //git icon and link */}
      <div>
        {github && (
          <div className={styles.iconLinkWrapper}>
            <Image
              className={styles.iconLogo}
              src={gitIcon}
              width={200}
              height={200}
              alt={title}
            ></Image>
            <div>
              <Link href={github}>
                <p className={styles.iconLink}>
                  &lt; <span>Github </span>&gt; Git Code{" "}
                  <span>&lt;/Github&gt;</span>
                </p>
              </Link>
              <Link href={projectWeb}>
                <p className={styles.iconLink}>www.This-Project.com</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
