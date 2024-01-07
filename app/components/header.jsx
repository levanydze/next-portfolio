import Link from "next/link";
import React from "react";

// import styles
import styles from "./header.module.css";

//import components
import Navigation from "./navigations/navigation";
import BurgerNav from "./navigations/burgerNav";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.logo} href={"/"}>
        Levani Levanidze
      </Link>
      <Navigation />
      <BurgerNav />
    </div>
  );
}
