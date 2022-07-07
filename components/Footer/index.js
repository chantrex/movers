import styles from './footer.module.css';
import { companyName, whatsappLink, hrefLinkPhone, companyPhone, hrefLinkEmail, companyEmail } from '../layout';

const companyPhoneALink = <a href={hrefLinkPhone}>{companyPhone}</a>;
const companyEmailALink = <a href={hrefLinkEmail}>{companyEmail}</a>;

// It needed to create here again the whatsapp const to change the styles in the icon (at the Footer)
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
              <li>{companyPhoneALink}</li>
              <li>{companyEmailALink}</li>
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