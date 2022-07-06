import React, {Component} from "react";
import Link from "next/link";
import styles from './navbar.module.css';


const companyPhone = '522227734502';
const waMessage = "Hello!%20I%20want%20to%20rent%20Golden%20movers'%20services";
let whatsappLink = "https://wa.me/" + companyPhone + "?text=" + waMessage;

const whatsapp = <a href={whatsappLink} target="_blank" className={styles.whatsapp}>
<img
  src="https://trickuweb.com/whatsapp.png"
  alt=""
  height="50px"
  width="50px"
/>
</a>

// This function will have the navbar component to use in the entire site
export default function Navbar() {
  return(
    <>
      <section className={styles.container}>
        <a className={styles.navbarBrand} href="/"><h1>Golden Movers</h1></a>
        <div className={styles.navbarLinksBox}>
          <div className={styles.navbarLinksOl}>
            <a className={styles.navbarLinksPhone} href="tel:+522227734502">Call us: 222 773 4502</a>
            <p>{whatsapp}</p>
            {/* <p>Or</p> */}
          </div>
            
        </div>
      </section>
    </>
  );
}