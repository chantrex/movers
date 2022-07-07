import Head from "next/head";
import Navbar from "../../components/Navbar";
import styles from './prices.module.css';

let singleMoving = 300;
let mediumMoving = 550;
let movingPlus = 899;
export default function Prices() {
  return (
    <>
    <Head>
      <title>Movers | Prices</title>
    </Head>
    <Navbar />
      <section className={styles.container}>
        <div className={styles.mainTitleContainer}>
          <h1 className={styles.mainTitle}>Check out our prices!</h1>
        </div>
        <div className={styles.containerDetails}>
          <div className={styles.detailsBox1}>
            <h2>Single Moving</h2>
            <h3>${singleMoving}</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, ipsa?</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 1</li>
              <li>Feature 1</li>
            </ul>
          </div>
          <div className={styles.detailsBox2}>
            <h2>Medium Moving</h2>
            <h3>${mediumMoving}</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, ipsa?</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 1</li>
              <li>Feature 1</li>
            </ul>
          </div>
          <div className={styles.detailsBox3}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path></svg>
            <h2>Moving Plus</h2>
            <h3>${movingPlus}</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, ipsa?</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 1</li>
              <li>Feature 1</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}