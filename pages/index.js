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
      <section className={utilStyles.container1}>
        <h1>Pulga Movers. Because changes are good!</h1>
        <div className={utilStyles.videoContainer}>
          <img src="https://media2.giphy.com/media/UTj6uNKzYFmJGbKdgH/giphy.gif?cid=ecf05e4796z486iumakdlkts123fzlpxw8ibh6odsb3wj9sv&rid=giphy.gif&ct=g" alt="" />
        </div>
      </section>
    </Layout>
  );
}