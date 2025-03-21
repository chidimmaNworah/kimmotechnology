import { Navbar } from "@/components";
import { Expertises, Footer, Header, Testimonial, Work } from "@/container";
import Articles from "@/container/Articles/Articles";
import styles from "@/styles/homescreen.module.scss";
import Head from "next/head";

export default function Homescreen() {
  return (
    <>
      <Head>
        <title>Your Trusted Tech Partner</title>
        <meta
          name="description"
          content="Discover expert services, insights, and testimonials from satisfied clients. Let's build something great together!"
        />
        <meta
          name="keywords"
          content="expertise, services, work, articles, testimonials"
        />
        <meta property="og:title" content="Home - Your Trusted Partner" />
        <meta
          property="og:description"
          content="Discover expert services, insights, and testimonials from satisfied clients."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - Your Trusted Partner" />
        <meta
          name="twitter:description"
          content="Explore our expertise and see how we can help you succeed."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.homescreen} flex flex-col items-center justify-center`}
      >
        <Navbar />
        <Header />
        <Expertises />
        <Work />
        <Articles />
        <Testimonial />
        {/* <h2 className="head-text mt-16">Take a coffee & chat with us</h2> */}
        <div className={styles.footerbg}>
          <div className={styles.footerbg_div}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
