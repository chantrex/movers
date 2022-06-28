import React, {Component} from "react";
import Link from "next/link";
import styles from './navbar.module.css';

export default function Navbar() {
  return(
    <>
      <section className={styles.container}>
        <h1>Pulga Movers</h1>
        <div className={styles.navbarLinksBox}>
          <ol className={styles.navbarLinksOl}>
            <Link href="/">
              <p className={styles.navbarLinks}>Home</p>
            </Link>
            <Link href="/contact">
              <p className={styles.navbarLinks}>Contact</p>
            </Link>
            <Link href="/prices">
              <p className={styles.navbarLinks}>Prices</p>
            </Link>
          </ol>
        </div>
      </section>
      
    </>
  );
}