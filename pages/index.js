import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Navbar from '../components/Navbar';

const companyName = "Pulga Movers";
const starsRate = <img src="https://img.icons8.com/emoji/344/star-emoji.png" alt="" />;

function StarsCounter5() {
  return (
    <div className={utilStyles.stars}>
      {starsRate}
      {starsRate}
      {starsRate}
      {starsRate}
      {starsRate}
    </div>
  );
}

// function FormData() {
//   return (
//     <form action="https://formsubmit.co/your@email.com" method="POST">
//       <input type="text" name="name" required>
//       <input type="email" name="email" required>
//       <button type="submit">Send</button>
//     </form> 
//   );
// }

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navbar />
      <section className={utilStyles.container1}>
        <div className={utilStyles.mainPresentation}>
          <h1>Pulga Movers.<br/>Changes are good!</h1>
          <form className={utilStyles.contactForm} action="https://formsubmit.co/chris.chantres@gmail.com" method='POST'>
            <h2>Contact us!</h2>
            <label>Your name:</label>
            <input type="text" name='name' placeholder='Mark Lamar' required />
            <label>Your email:</label>
            <input type="email" name='email' placeholder='mark123@mail.com' required />
            <label>Your message:</label>
            <textarea placeholder="Tell us your message!" name="message" required></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className={utilStyles.videoContainer}>
          <div className={utilStyles.videoContainerOverlay}></div>
          <img src="https://i.ibb.co/pXKvG39/toronto1.jpg" alt="" />
        </div>
      </section>
      <section className={utilStyles.howStartMovingContainer}>
        <h2>How to move with {companyName}</h2>
        <main className={utilStyles.howStartMovingMain}>
          <div className={utilStyles.startMovingCard}>
            <h4>First</h4>
            <h3>Schedule your moving</h3>
            <img src="https://img.icons8.com/ios-filled/344/overtime.png" alt="" />
          </div>
          <div className={utilStyles.startMovingCard}>
          <h4>Second</h4>
            <h3>We drive the truck to your house</h3>
            <img src="https://img.icons8.com/glyph-neue/344/truck.png" alt="" />
          </div>
          <div className={utilStyles.startMovingCard}>
            <h4>Third</h4>
            <h3>We load up the truck</h3>
            <img src="https://img.icons8.com/windows/344/people-carry.png" alt="" />
          </div>
          <div className={utilStyles.startMovingCard}>
            <h4>Fourth</h4>
            <h3>We deliver it to your new home</h3>
            <img src="https://img.icons8.com/ios-filled/344/delivery--v1.png" alt="" />
          </div>
        </main>
        </section>
      <section className={utilStyles.container2}>
        {/* The animation in the title is causing some troubles when the screen is lesser
        than 300px */}
        <h1 className={utilStyles.container2Header}>
          We Are Your Best Option
          {/* <span>W</span>
          <span>e</span>
          <span> a</span>
          <span>r</span>
          <span>e</span>
          <span> y</span>
          <span>o</span>
          <span>u</span>
          <span>r</span>
          <span> b</span>
          <span>e</span>
          <span>s</span>
          <span>t</span>
          <span> o</span>
          <span>p</span>
          <span>t</span>
          <span>i</span>
          <span>o</span>
          <span>n</span> */}
        </h1>
        <main className={utilStyles.cardsContainer}>
          <div className={utilStyles.whyUsCard}>
            <h3>Effective Work</h3>
            <ul>
              <li>Our team is ready to do the job.</li>
              <li>We take care of your belongnings.</li>
            </ul>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADbUlEQVRogeWZS2gUQRCGvzzciJhAInrQCCaieAloEAWFIB4ENaAkUQTxcVDQs6AXMZEYVBBF8OpB0Ysn0YMPBEUPBhIRIij4iOaheaigOYgYk/HQPTg7Oz3TMzvdE/GHYnera4r6e6emqmsgO1QC3cAb4BAwO8NYEqMEuAE4HhkDOoDqDOOKjePkk/DKBHARWJhZdJrYBPxGTcSVn8BVYHk2YYZjC/CdaBJemQSuAQ0ZxJuHFcB54CXxCPhlGrgNrLcbvsBRxC1SDIEgeYz4d0tskOgwQMAvfcBeoNwUiRYLJLzSbYJEOdBvmUifCSJtlklMA00miNy3TOSyCRL1wJRFEl+A+QClCYKtAPYhdn4AUaV3ybWDCX0mxRHgc5ILG4AX5O/KOJADZgEjBO9cV9Ehp4g6RIfqD/KsXFcl+TSw1HawKlRQ+E+4QS6TNvcC1h2pB6hF9E1p5MY7oB1xF8TCKYXDB3K9DnWSt0qbEymR8EpnHBKrgF8KRzukTZdifRSxa6XABwNEhnRJ5BBVM8jJOOKWKwc+KmxOSz/NBkg4iIeLFjpDnJyRNqq+ypvktwwROadDohF1cnqDvKuwcfOnFr0TYRz5ClxAY2CxEngd4uiJtFuCOsl3Spv2FALfGBWwHzngJOrkdsWtHQcU62PSVxkwmAKR1VGBe9uJRqAH8ZiMej5PyU/VgeYKYjM2A4ujgtBAD39JKWtIBaJOxClWd+S1tRQOE75JPZhLcoeAGvIogZNJxFABxDDgGeJs3gusk/q1mO2EC2rIp4SOngM1fmcSi4BXBkk4Mu483CzC2XtgD1AlfS0ADgPDhkk4BNSQYyk5/mEheIeQGtJkKYCkolVDShEJOqljnBEm4hj3kv3O64iyhpTJzwZgTRzmGaEa2IAYlT70LriV/antiIrEfr/CJWJk5GgQBa2RS6Qf0ej9K7getlhMYbQlWueQtAqj9RoC+W38TEz4WDXExRyiW/lBxHinEtFftQFvEe/Kk+orpT7qABZrlhVWGAcI7nbnSSlWX6NBxkFzlnUpxEGLtGlGdLdDwFbPtWnoWzWIaM2ydoc4mCttvDOsYc+1aeirNIgUnEOCUB/iwIVtvV+0ZlkgXv3ORCKhNSTJe2rH97skZX0iJHm7NOr5PmJAbw3bEQPsMWCbAf3/jT9mgln3bGfaJAAAAABJRU5ErkJggg=="></img>
          </div>
          <div className={utilStyles.whyUsCard} >
            <h3>Fair prices</h3>
            <ul>
              <li>You are able to get in contact with our team to make a price calculation.</li>
            </ul>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFE0lEQVR4nO2aS4gcRRjHf7OzO4mPBeMDUXKJoIQoiaIGFd0c1IMHIYLZRMz6ungQowfBi140IYqinoKQ4KIRBDVEEyWJRIQ8BDcEH+huLm5yUIgky0YiutnEjIf6yqmpqa6u7q7eFuwfNN31+upfX1d9VdO7UPP/plGS3XnAq8AjQBt4B/gbeELSo1LPTPcDj4umd4HngdmS9JXOW6iBFbnemHPVEZlCDeIO4E46g8qSPjnnqiOiB1Q0vQn4GfgT2F+G0LJigB5Mo2DaJrrevtgGI7MdWDaXHR4AxoG1QFPyWsDrqHU9hQpOA4621wDPAnuJtwQus9J7gWekL5sW8KZoPAm8JnnIWEaACaylZE+pr4Hb5fkX4BNgAfCwVe9tKVsGLAVuBhY7RN0lfezLmfYtiSPAYeAH4HvgAeBJq877wClgJbBQ8g6iAq2TJmqwE/RuS3bEtq8p4AOUp4tugUkzYkT6mPK0SdI5LmNrGna9QeUm4H7gOWCQ7rdzBuXJceBH1Bs4hDrsaMGgpmIbdbA5Bzwm+aNiy0y3UAenBnC5pc8Okk3gVtQMvAFYIoNuWTpPo5bvTuBbz1i9bKTXmxtT2thvMCtpMcLFK2TXGcQg6kiqjc5Kno8qHJBHZ9A2eB8q6o/JNSB5sWmhltt3OduXpnMnyqNPy9WWPB9ZZ8A84Cu6p+8+ozzEXh6dqVyBmkqz8mynk8jqgBel/nHUdnZRRnt5daayTjreYeTtoOPpJM5LnYsD+5mU+isdZYNSds7TXr9xl851gRqcjImRVUbesOSNedodlzpLA/vRb9gVtG6Usl8DdA4beasCdHpZLAamgflG/nzU6aqN+/QHat9vAy8F9rWf7jVvskFsjSaUa52nHDqnU3R60R1vdpRtlrL1CW1vk/LTeTsXlgB/iK3lCXXWB+jckLXjPuCYNB5ylK+QsmMknyY3SZ3fgAc99Vw0UNP5hNh4z1NP61zhKB8ydGb65asHeBS38LSOQe3Dn9NZ33sy9P+l0e4zuqe2S2fSi2igxuDT6WQL/ikO/qmnadKJ0L4obqMH/xT+N5e2FE2dW0I7Dw0e10md34ELPPX6pd7ZUAGEnSNCdV5LmM5/WS0Nvgmoe4jebdKmLAeEbMca1zYJuKfXiNy3BhjWdUa8tRRFfhy5KEWnPkKeBa4MMBxSf4DOr7NQQo++hXXaM+AhlOBdqO0rjRPAF6hp7lsGsVmD0rmbcJ17UDp7loFJyJq2SYsZLSk/k8Fm2gxIXNMeUmNGaFS3SYvGsR2QOaoLTp3mEnhU7h8Cf2UwPANsk+e1Rv5BugeuHRFyaXTa/JStdX6UQ+fH8uwMhvrEVOSadIiPdWkmI9g6qo31G4YXuLySEZeNon/OspfCpQXtAVyiH8wlcETu96BEZ7nulbYTEcSlEVWn6YDdcl+dQ9Qaue/K0TYrpem8GhWwZoFbMhhdjjpgzABXGfkhx9kQbDuxdXZhfpxM/PuZwRDqINIGXrDKynIAxNXZRR/wqVQ8j9o2hoFFwIVyLUJNv210Pn5up/dUWaYDYursYQD1CWmG9O1kBniZ7t3EJzwPSXai6PRtUQtRB4a7gevpbHHTwE+ov9VvJflrrRYdaxtMslNUZ2mUPQOi8F//F5nSqR1QtYCqqR1QtYCqqR1QtYCqqR1QtYCqqR1QtYCqqR1QtYCqqR1QtYCqqR1QtYCqqR1QtYCqcX3NjcUB4nzLi2WnpsbBP8H+T+AXAaFDAAAAAElFTkSuQmCC"></img>
          </div>
        </main>
      </section>
      <section className={utilStyles.container3}>
      <div className={utilStyles.bestMovingServices}>
          <h2>Have One of the Best Moving Services in Toronto</h2>
          <p>With the customer service we offer and the and the willingness to help the you, {companyName} offers the resources and smart work to get you to your new home.</p>
          <a className={utilStyles.getAQuote} href="/contact">Get a Quote!</a>
        </div>
        <div className={utilStyles.container3section1}>
          <h3>How we work?</h3>
          <div className={utilStyles.howWeWork}>
            <img src="data:image/png;base64,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"></img>
            <p>After the due date scheduled to start the moving, Pulga Mover's team is called to get our client's location to do the job. They meet the user and the client pays 50% of the amount, then our work starts. After the moving the client pays the 50% remaining.</p>
          </div>
        </div>
      </section>
      <section className={utilStyles.clientsCommentsContainer}>
        <h2>What Our Clients Say About Us:</h2>
        <main className={utilStyles.clientsCommentsMain}>
          <div className={utilStyles.clientCommentCard}>
            <h3>Dolores Justo</h3>
            {StarsCounter5()}          
            <p>This was my first experience moving in Toronto and I'm sure these guys did it with good effort and dedication. Congratulations {companyName}'s team.</p>
          </div>
          <div className={utilStyles.clientCommentCard}>
            <h3>Emily Jaqueline</h3>
            {StarsCounter5()}          
            <p>I am impressed of the service you have. You guys are super positive, I like how you did your work. Everything was grabbed and put carefuly.</p>
          </div>
          <div className={utilStyles.clientCommentCard}>
            <h3>Karol Rey</h3>
            {StarsCounter5()}          
            <p>The job was very quick. They know what is taking care about the items. I am happy with the work they did.</p>
          </div>
        </main>
      </section>
    </Layout>
  );
}