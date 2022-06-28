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
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <Navbar />
        <section>
          <div>
            <h1>Contact us</h1>
            <p>We are glad to help you!</p>
          </div>
          <div>
            <form autocomplete="off">
              <div class="form-group">
                <input
                  type="text"
                  name="Name"
                  id="name"
                  class="form-control"
                  placeholder="Your Name *"
                  value=""
                  required=""
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="Email"
                  id="email"
                  class="form-control"
                  placeholder="Your Email *"
                  value=""
                  required=""
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  name="Phone"
                  id="phone"
                  class="form-control"
                  placeholder="Your Contact Number *"
                  value=""
                  required=""
                />
              </div>
              <div class="form-group">
                <select class="form-control" id="service">
                  <option>Default select</option>
                  <option>Website Development</option>
                  <option>Mobile App Development</option>
                  <option>Web and Mobile Application</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  name="submit"
                  class="btnSubmit btn-block"
                  value="Submit"
                />
              </div>
            </form>
          </div>
            
          {/* Whatsapp button */}
          <a href="https://wa.me/522227734502?text=Hello!%20I%20want%20to%20rent%20pulga%20movers'services"
            class="float"
            className={styles.whatsapp}
            >
            <img
              src="https://trickuweb.com/whatsapp.png"
              alt=""
              height="60px"
              width="60px"
            />
          </a>
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
