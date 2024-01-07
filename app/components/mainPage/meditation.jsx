import React from "react";
import Image from "next/image";
//import styles
import styles from "./meditation.module.css";

//import pages.jsx

//import files
import meditation from "@/public/images/mainPage/meditation-guy.png";
import Icons from "./icons";

export default function Meditation() {
  return (
    <div className={styles.wrapper}>
      <Icons />
      <div className={`gradientBg ${styles.backgroundCircle}`}></div>
      <Image
        className={styles.meditationPhoto}
        src={
          "https://github.com/levanydze/portfoliosupport/blob/main/me.png?raw=true"
        }
        width={1000}
        height={1000}
        alt="levani levanidze"
        priority
      ></Image>
    </div>
  );
}
