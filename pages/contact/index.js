import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import Navbar from "../../components/Navbar";
import styles from "./contact.module.css"

export default function ContactUs() {
  return (
    <>
      {/* <Layout> */}
        <Head>
          <title>Movers | Contact</title>
        </Head>
        <Navbar />
        <section className={styles.container}>
          <div className={styles.containerHeader}>
            <h1>Contact us!</h1>
            <p>Send us a message through WhatsApp, and we will answer you back to help you!</p>
          </div>
          <div className={styles.formMainContainer}>
              {/* Whatsapp button */}
            <Link href="https://wa.me/522227734502?text=Hello!%20I%20want%20to%20rent%20pulga%20movers'services" target="_blank" rel="noopener noreferrer" class="float" className={styles.whatsapp}>
              <img
                src="https://trickuweb.com/whatsapp.png"
                alt=""
                height="100px"
                width="100px"
              />
            </Link>
          </div>
        </section>
          

      {/* </Layout> */}
      
    </>
  );
}

// Functionality to the form

// function gotowhatsapp() {
    
//   var name = document.getElementById("name").value;
//   var phone = document.getElementById("phone").value;
//   var email = document.getElementById("email").value;
//   var service = document.getElementById("service").value;

//   var url = "https://wa.me/918789529215?text=" 
//   + "Name: " + name + "%0a"
//   + "Phone: " + phone + "%0a"
//   + "Email: " + email  + "%0a"
//   + "Service: " + service; 

//   window.open(url, '_blank').focus();
