import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function ContactUs() {
  return (
    <>
      <Layout>
        <Head>
          <title>Movers | Contact</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <h1>Get in touch!</h1>
        <h2>
          <Link href="/">
            Go back to Home!
          </Link>
        </h2>
      </Layout>
      
    </>
  );
}