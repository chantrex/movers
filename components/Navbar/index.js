import React, {Component} from "react";
import Link from "next/link";
import styles from './navbar.module.css';


// This function will have the navbar component to use in the entire site
export default function Navbar() {
  return(
    <>
      <section className={styles.container}>
        <a className={styles.navbarBrand} href="/"><h1>Golden Movers</h1></a>
        <div className={styles.navbarLinksBox}>
          <div className={styles.navbarLinksOl}>
            {/* <Link href="/">
              <p className={styles.navbarLinks}>Home</p>
            </Link>
            <Link href="/contact">
              <p className={styles.navbarLinks}>Contact</p>
            </Link>
          </div>
          <div className={styles.navbarLinksOl}>
          <Link href="/prices">
              <p className={styles.navbarLinks}>Prices</p>
            </Link> */}
            <a className={styles.navbarLinksPhone} href="tel:+522227734502">Call us: 222 773 4502</a>
          </div>
            
        </div>
      </section>
      
    </>
  );
}