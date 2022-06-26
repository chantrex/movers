import React, {Component} from "react";
import Link from "next/link";
import styles from './navbar.module.css';

export default function Navbar() {
  return(
    <>
      <section className={styles.container}>
        <h1>Pulga Movers</h1>
        <div>
          <ol>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
            <Link href="/prices">
              <li>Prices</li>
            </Link>
          </ol>
        </div>
      </section>
      
    </>
  );
}