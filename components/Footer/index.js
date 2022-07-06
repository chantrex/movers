import styles from './footer.module.css';

export const companyName = 'Golden Movers';
export const companyPhoneA = <a href="tel:+522227734502">222 773 4502</a>;
export const companyEmail = <a href="mailto:info@goldemovers.com">info@goldemovers.com</a>;

const companyPhone = '522227734502';
const waMessage = "Hello!%20I%20want%20to%20rent%20Golden%20movers'%20services";
let whatsappLink = "https://wa.me/" + companyPhone + "?text=" + waMessage;

const whatsapp = <a href={whatsappLink} target="_blank" className={styles.whatsapp}>
<img
  src="https://trickuweb.com/whatsapp.png"
  alt=""
  height="50px"
  width="50px"
/>
</a> 

export default function Footer() {
  return(
    <>
      <footer className={styles.footer}>
        <main className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <h1>{companyName}</h1>
            <p>Affordable Rates</p>
          </div>
          <div className={styles.footerContactInfo}>
            <h2>Contact Info</h2>
            <ul className={styles.footerContactUl}>
              <li>Vaughan, Ontario.</li>
              <li>{companyPhoneA}</li>
              <li>{companyEmail}</li>
              <li>
                Send us a WhatsApp{whatsapp}
              </li>
            </ul>
          </div>
        </main>
        <div className={styles.footerBelow}>
          <a href="#quote">▲</a>
        </div>
        
      </footer>
    </>
  );
}