import styles from '../styles/error404.module.css';
import Link from 'next/link';

export default function Page404() {
  return (
    <>
      <section className={styles.sectionContainer}>
        <main className={styles.sectionMain}>
          <h1>404</h1>
          <p>- Page Not Found -</p>
          <Link href="/">
            <a className={styles.goBack}>Go back home</a>
          </Link>
        </main>
      </section>
    </>
  );
}