import Head from 'next/head';

// Export constants to the entire web site to make it easier and scalable
export const companyName = 'Golden Movers';
export const companyPhone = '(647)-762-3958'
export const companyLadaPhone = '16477623958';
export const hrefLinkPhone = 'tel:+' + companyLadaPhone;
export const companyEmail = 'info@goldenmovers.com';
export const hrefLinkEmail = 'mailto:' + companyEmail;

const waMessage = "Hello!%20I%20want%20to%20get%20info%20about%20Golden%20movers'%20services";
export const whatsappLink = "https://wa.me/" + companyLadaPhone + "?text=" + waMessage;
export const whatsapp = <a href={whatsappLink} target="_blank">
<img
  src="https://trickuweb.com/whatsapp.png"
  alt=""
  height="50px"
  width="50px"
/>
</a>

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