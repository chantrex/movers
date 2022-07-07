import styles from '../styles/error404.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { companyName } from '../components/layout';

export default function Page404() {
  return (
    <>
      <Head>
        <title>Error 404 | {companyName}</title>
      </Head>
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