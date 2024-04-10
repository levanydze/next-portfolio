import React from "react";
import Image from "next/image";

//import styles
import styles from "./icons.module.css";

//import icons
import iconHtml from "@/public/images/icons/html.webp";
import iconCss from "@/public/images/icons/css.png";
import iconLr from "@/public/images/icons/lr.webp";
import iconNextjs from "@/public/images/icons/nextjs.png";
import iconPs from "@/public/images/icons/ps.png";
import iconReact from "@/public/images/icons/react.png";
import iconJs from "@/public/images/icons/js.png";
import iconSass from "@/public/images/icons/sass.png";
import iconTailwind from "@/public/images/icons/tailwind.png";
import iconGit from "@/public/images/icons/git.png";
import iconNode from "@/public/images/icons/node.png";
import iconXd from "@/public/images/icons/xd.webp";
import ts from "@/public/images/icons/ts.png";

export default function Icons() {
  return (
    <div className={styles.iconsWrapper}>
      <div className={`${styles.lineOne} ${styles.iconLines} `}>
        <Image
          className={`${styles.iconCss} ${styles.allIcons}`}
          src={iconCss}
          width={200}
          height={200}
          alt="css"
        ></Image>
        <Image
          className={styles.iconSass}
          src={iconSass}
          width={200}
          height={200}
          alt="sass"
        ></Image>

        <Image
          className={styles.iconHtml}
          src={iconHtml}
          width={200}
          height={200}
          alt="html"
        ></Image>
      </div>
      <div className={`${styles.lineTwo} ${styles.iconLines}`}>
        <Image
          className={styles.iconJs}
          src={iconJs}
          width={200}
          height={200}
          alt="javascript"
        ></Image>

        <Image
          className={styles.iconTailwind}
          src={iconTailwind}
          width={200}
          height={200}
          alt="tailwind"
        ></Image>
      </div>
      <div className={`${styles.lineThree} ${styles.iconLines}`}>
        <Image
          className={styles.iconNextjs}
          src={iconNextjs}
          width={200}
          height={200}
          alt="nextjs"
        ></Image>
        <Image
          className={styles.iconPs}
          src={iconPs}
          width={200}
          height={200}
          alt="photoshop"
        ></Image>
      </div>
      <div className={`${styles.lineFour} ${styles.iconLines}`}>
        <Image
          className={styles.iconReact}
          src={iconReact}
          width={200}
          height={200}
          alt="react"
        ></Image>
        <Image
          className={styles.iconLr}
          src={iconLr}
          width={200}
          height={200}
          alt="lightroom"
        ></Image>
      </div>
      <div className={`${styles.lineFive} ${styles.iconLines}`}>
        <Image
          className={styles.iconGit}
          src={iconGit}
          width={200}
          height={200}
          alt="github"
        ></Image>

        <Image
          className={`${styles.iconHover} ${styles.iconXd}`}
          src={iconXd}
          width={200}
          height={200}
          alt="adobexd"
        ></Image>
      </div>
      <div className={`${styles.lineSex} ${styles.iconLines}`}>
        <Image
          className={styles.iconVs}
          src={ts}
          width={200}
          height={200}
          alt="visualstudiocode"
        ></Image>
        <Image
          className={styles.iconNode}
          src={iconNode}
          width={200}
          height={200}
          alt="nodejs"
        ></Image>
      </div>
    </div>
  );
}
