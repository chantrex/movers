import Head from 'next/head';

export const companyName = 'Golden Movers';
export const companyPhone = <a href="tel:+522227734502">222 773 4502</a>;

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Movers description"
          content="Changes are good!"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            companyName,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={companyName} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
    </>
  );
}