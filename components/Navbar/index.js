import React, { Component } from "react";
import styles from './navbar.module.css';
import { companyName, whatsapp, companyPhone, hrefLinkPhone } from "../layout";


// This function will have the navbar component to use in the entire site
export default function Navbar() {
  return(
    <>
      <section className={styles.container}>
        <a className={styles.navbarBrand} href="/"><h1>{companyName}</h1></a>
        <div className={styles.navbarLinksBox}>
          <div className={styles.navbarLinksOl}>
            <a className={styles.navbarLinksPhone} href={hrefLinkPhone}>Call us: {companyPhone}</a>
            <p>{whatsapp}</p>
          </div>
            
        </div>
      </section>
    </>
  );
}