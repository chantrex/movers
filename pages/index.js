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
          <div className={utilStyles.videoContainerOverlay}></div>
          <img src="https://media2.giphy.com/media/UTj6uNKzYFmJGbKdgH/giphy.gif?cid=ecf05e4796z486iumakdlkts123fzlpxw8ibh6odsb3wj9sv&rid=giphy.gif&ct=g" alt="" />
        </div>
      </section>
      <section className={utilStyles.container2}>
        {/* The animation in the title is causing some troubles when the screen is lesser
        than 300px */}
        <h1 className={utilStyles.container2Header}>
          <span>W</span>
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
          <span>n</span>
        </h1>
        <main className={utilStyles.cardsContainer}>
          <div className={utilStyles.whyUsCard}>
            <h3>Effective Work</h3>
            <ul>
              <li>Our team is ready to do the job.</li>
              <li>We are responsible of the work we do.</li>
              <li>Your goods always will be grabed carefully.</li>
            </ul>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADbUlEQVRogeWZS2gUQRCGvzzciJhAInrQCCaieAloEAWFIB4ENaAkUQTxcVDQs6AXMZEYVBBF8OpB0Ysn0YMPBEUPBhIRIij4iOaheaigOYgYk/HQPTg7Oz3TMzvdE/GHYnera4r6e6emqmsgO1QC3cAb4BAwO8NYEqMEuAE4HhkDOoDqDOOKjePkk/DKBHARWJhZdJrYBPxGTcSVn8BVYHk2YYZjC/CdaBJemQSuAQ0ZxJuHFcB54CXxCPhlGrgNrLcbvsBRxC1SDIEgeYz4d0tskOgwQMAvfcBeoNwUiRYLJLzSbYJEOdBvmUifCSJtlklMA00miNy3TOSyCRL1wJRFEl+A+QClCYKtAPYhdn4AUaV3ybWDCX0mxRHgc5ILG4AX5O/KOJADZgEjBO9cV9Ehp4g6RIfqD/KsXFcl+TSw1HawKlRQ+E+4QS6TNvcC1h2pB6hF9E1p5MY7oB1xF8TCKYXDB3K9DnWSt0qbEymR8EpnHBKrgF8KRzukTZdifRSxa6XABwNEhnRJ5BBVM8jJOOKWKwc+KmxOSz/NBkg4iIeLFjpDnJyRNqq+ypvktwwROadDohF1cnqDvKuwcfOnFr0TYRz5ClxAY2CxEngd4uiJtFuCOsl3Spv2FALfGBWwHzngJOrkdsWtHQcU62PSVxkwmAKR1VGBe9uJRqAH8ZiMej5PyU/VgeYKYjM2A4ujgtBAD39JKWtIBaJOxClWd+S1tRQOE75JPZhLcoeAGvIogZNJxFABxDDgGeJs3gusk/q1mO2EC2rIp4SOngM1fmcSi4BXBkk4Mu483CzC2XtgD1AlfS0ADgPDhkk4BNSQYyk5/mEheIeQGtJkKYCkolVDShEJOqljnBEm4hj3kv3O64iyhpTJzwZgTRzmGaEa2IAYlT70LriV/antiIrEfr/CJWJk5GgQBa2RS6Qf0ej9K7getlhMYbQlWueQtAqj9RoC+W38TEz4WDXExRyiW/lBxHinEtFftQFvEe/Kk+orpT7qABZrlhVWGAcI7nbnSSlWX6NBxkFzlnUpxEGLtGlGdLdDwFbPtWnoWzWIaM2ydoc4mCttvDOsYc+1aeirNIgUnEOCUB/iwIVtvV+0ZlkgXv3ORCKhNSTJe2rH97skZX0iJHm7NOr5PmJAbw3bEQPsMWCbAf3/jT9mgln3bGfaJAAAAABJRU5ErkJggg=="></img>
          </div>
          <div className={utilStyles.whyUsCard} >
            <h3>Fair prices</h3>
            <ul>
              <li>You are able to get in contact with our team to make a price calculation.</li>
              <li>We have plans that fit in what you need.</li>
            </ul>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFE0lEQVR4nO2aS4gcRRjHf7OzO4mPBeMDUXKJoIQoiaIGFd0c1IMHIYLZRMz6ungQowfBi140IYqinoKQ4KIRBDVEEyWJRIQ8BDcEH+huLm5yUIgky0YiutnEjIf6yqmpqa6u7q7eFuwfNN31+upfX1d9VdO7UPP/plGS3XnAq8AjQBt4B/gbeELSo1LPTPcDj4umd4HngdmS9JXOW6iBFbnemHPVEZlCDeIO4E46g8qSPjnnqiOiB1Q0vQn4GfgT2F+G0LJigB5Mo2DaJrrevtgGI7MdWDaXHR4AxoG1QFPyWsDrqHU9hQpOA4621wDPAnuJtwQus9J7gWekL5sW8KZoPAm8JnnIWEaACaylZE+pr4Hb5fkX4BNgAfCwVe9tKVsGLAVuBhY7RN0lfezLmfYtiSPAYeAH4HvgAeBJq877wClgJbBQ8g6iAq2TJmqwE/RuS3bEtq8p4AOUp4tugUkzYkT6mPK0SdI5LmNrGna9QeUm4H7gOWCQ7rdzBuXJceBH1Bs4hDrsaMGgpmIbdbA5Bzwm+aNiy0y3UAenBnC5pc8Okk3gVtQMvAFYIoNuWTpPo5bvTuBbz1i9bKTXmxtT2thvMCtpMcLFK2TXGcQg6kiqjc5Kno8qHJBHZ9A2eB8q6o/JNSB5sWmhltt3OduXpnMnyqNPy9WWPB9ZZ8A84Cu6p+8+ozzEXh6dqVyBmkqz8mynk8jqgBel/nHUdnZRRnt5daayTjreYeTtoOPpJM5LnYsD+5mU+isdZYNSds7TXr9xl851gRqcjImRVUbesOSNedodlzpLA/vRb9gVtG6Usl8DdA4beasCdHpZLAamgflG/nzU6aqN+/QHat9vAy8F9rWf7jVvskFsjSaUa52nHDqnU3R60R1vdpRtlrL1CW1vk/LTeTsXlgB/iK3lCXXWB+jckLXjPuCYNB5ylK+QsmMknyY3SZ3fgAc99Vw0UNP5hNh4z1NP61zhKB8ydGb65asHeBS38LSOQe3Dn9NZ33sy9P+l0e4zuqe2S2fSi2igxuDT6WQL/ikO/qmnadKJ0L4obqMH/xT+N5e2FE2dW0I7Dw0e10md34ELPPX6pd7ZUAGEnSNCdV5LmM5/WS0Nvgmoe4jebdKmLAeEbMca1zYJuKfXiNy3BhjWdUa8tRRFfhy5KEWnPkKeBa4MMBxSf4DOr7NQQo++hXXaM+AhlOBdqO0rjRPAF6hp7lsGsVmD0rmbcJ17UDp7loFJyJq2SYsZLSk/k8Fm2gxIXNMeUmNGaFS3SYvGsR2QOaoLTp3mEnhU7h8Cf2UwPANsk+e1Rv5BugeuHRFyaXTa/JStdX6UQ+fH8uwMhvrEVOSadIiPdWkmI9g6qo31G4YXuLySEZeNon/OspfCpQXtAVyiH8wlcETu96BEZ7nulbYTEcSlEVWn6YDdcl+dQ9Qaue/K0TYrpem8GhWwZoFbMhhdjjpgzABXGfkhx9kQbDuxdXZhfpxM/PuZwRDqINIGXrDKynIAxNXZRR/wqVQ8j9o2hoFFwIVyLUJNv210Pn5up/dUWaYDYursYQD1CWmG9O1kBniZ7t3EJzwPSXai6PRtUQtRB4a7gevpbHHTwE+ov9VvJflrrRYdaxtMslNUZ2mUPQOi8F//F5nSqR1QtYCqqR1QtYCqqR1QtYCqqR1QtYCqqR1QtYCqqR1QtYCqqR1QtYCqqR1QtYCqqR1QtYCqcX3NjcUB4nzLi2WnpsbBP8H+T+AXAaFDAAAAAElFTkSuQmCC"></img>
          </div>
        </main>
        
      </section>
    </Layout>
  );
}