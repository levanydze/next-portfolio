import Link from "next/link";
import React from "react";
import styles from "./photoInfo.module.css";
import Image from "next/image";

import InfoProject from "./InfoDetails/infoProject";
import InfoStudy from "./InfoDetails/infoStudy";

export default function PhotoInfo({
  date,
  image,
  title,
  study,
  youtube,
  udemy,
  byEd,
  youtubeIcon,
  udemyIcon,
  byEdIcon,
  course,
  courseDesc,
  courseLink,
  project,
  projectTitle,
  github,
  projectWeb,
  gitIcon,
  someText,
  someText2,
  detDescription,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageDiv}>
        {project ? (
          <Link href={project ? projectWeb : ""}>
            <Image
              src={image}
              width={500}
              height={500}
              alt={title}
              priority
            ></Image>
          </Link>
        ) : (
          <Image
            src={image}
            width={500}
            height={500}
            alt={title}
            priority
          ></Image>
        )}

        {projectWeb ? (
          <Link className={styles.viewLive} href={projectWeb}>
            View Live
          </Link>
        ) : null}
      </div>

      {/* information section */}
      <div className={styles.infoDiv}>
        {/* study info down */}
        {study && (
          <InfoStudy
            date={date}
            title={title}
            youtube={youtube}
            udemy={udemy}
            byEd={byEd}
            youtubeIcon={youtubeIcon}
            udemyIcon={udemyIcon}
            byEdIcon={byEdIcon}
            course={course}
            courseDesc={courseDesc}
            courseLink={courseLink}
          />
        )}

        {/* down here is some text for eu trip and for the photography project or any other */}
        {!study && (
          <div>
            <div className={styles.someText}>{someText}</div>
            <div className={styles.someText}>{someText2} </div>
            {someText2 && (
              <div className={styles.fbLink}>
                <Link href="https://www.facebook.com/levanidze/posts/pfbid0Us3BVHhWeAupuaC4QP9wCZEZpzyJAQGgyWt366f6ZE5fUWf2Mn9ekHaxcF5Ydrkml">
                  Click here to see more about the trip on my Facebook
                </Link>
              </div>
            )}
          </div>
        )}

        {/* project info down */}
        {project && (
          <InfoProject
            title={title}
            projectTitle={projectTitle}
            github={github}
            projectWeb={projectWeb}
            gitIcon={gitIcon}
            detDescription={detDescription}
          />
        )}
      </div>
    </div>
  );
}
