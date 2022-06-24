import React, {Component} from "react";
import styles from './navbar.module.css'

export default function Navbar() {
  return(
    <>
      <section className={styles.container}>
        <h1>Pulga Movers</h1>
        <div>
          <ol>
            <li>Home</li>
            <li>Contact</li>
            <li>Prices</li>
          </ol>
        </div>
      </section>
      
    </>
  );
}