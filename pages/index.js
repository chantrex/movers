import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navbar />
      <section className={utilStyles.headingMd}>
        <p>Pulga Movers. Because we move!</p>
      </section>
    </Layout>
  );
}