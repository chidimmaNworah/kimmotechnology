import React, { useState, useEffect } from "react";
import { Navbar } from "@/components";
import Countdown from "@/components/CountDown";
import Newsletter from "@/components/Newsletter";
import { Expertises, Footer, Header, Testimonial, Work } from "@/container";
import Articles from "@/container/Articles/Articles";
import styles from "@/styles/homescreen.module.scss";
import { fetchAbouts, fetchExpertise, fetchProjects } from "@/utils/api";
import Head from "next/head";

export async function getServerSideProps() {
  try {
    const abouts = await fetchAbouts();
    const expertise = await fetchExpertise();
    const projects = await fetchProjects();

    return {
      props: {
        aboutsData: abouts || [],
        expertiseData: expertise || [],
        projectsData: projects || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        aboutsData: [],
        expertiseData: [],
        projectsData: [],
      },
    };
  }
}

export default function Homescreen({
  aboutsData,
  expertiseData,
  projectsData,
}) {
  const [loading, setLoading] = useState(true);

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
        {/* <Countdown targetDate="2025-04-19T07:30:00" /> */}
        <Header />
        {/* <Expertises expertise={expertiseData} /> */}
        {/* {loading ? (
          <p className="text-center mt-10">
            Loading content... <br />
            Kindly reload the page if delay persists
          </p>
        ) : ( */}
        <>
          {/* <Work works={projectsData} />
          <Articles abouts={aboutsData} /> */}
        </>
        {/* )} */}
        <Work works={projectsData} />
        <Articles abouts={aboutsData} />

        {/* Pricing & engagement section */}
        <section
          id="pricing"
          className="w-full bg-slate-900 text-slate-50 py-16 px-4 mt-12"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="inline-flex items-center rounded-full bg-slate-800 text-slate-200 px-4 py-1 text-xs tracking-wide uppercase mb-4">
                Pricing
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                Choose how you want to work with us
              </h2>
              <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
                From fast landing pages to full product UI and long-term
                partnerships, pick the option that matches your stage and
                ambition.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-slate-800/80 rounded-2xl border border-slate-700 shadow-sm p-6 flex flex-col">
                <h3 className="text-sm font-semibold mb-1">Starter Website</h3>
                <p className="text-xs text-slate-300 mb-4">
                  Perfect for portfolios, landing pages, and simple marketing
                  sites.
                </p>
                <p className="text-2xl font-bold mb-4">
                  $<span>1.5k+</span>
                  <span className="text-xs font-normal text-slate-300 ml-1">
                    / project
                  </span>
                </p>
                <ul className="space-y-2 text-xs text-slate-200 mb-5 flex-1">
                  <li>- Up to 5 pages, responsive & SEO-friendly</li>
                  <li>- Custom UI aligned with your brand</li>
                  <li>- Basic analytics & contact forms</li>
                </ul>
                <button className="mt-auto w-full rounded-full bg-slate-50 text-slate-900 text-xs font-medium py-2.5 hover:bg-white transition">
                  Book a discovery call
                </button>
              </div>

              <div className="bg-indigo-500 text-slate-50 rounded-2xl border border-indigo-400 shadow-lg p-6 flex flex-col relative overflow-hidden">
                <span className="absolute top-3 right-4 text-[10px] uppercase tracking-[0.18em] bg-slate-900 text-white px-2 py-1 rounded-full">
                  Most popular
                </span>
                <h3 className="text-sm font-semibold mb-1">Product UI + Dev</h3>
                <p className="text-xs text-indigo-50/90 mb-4">
                  Ideal for SaaS, dashboards, and web applications.
                </p>
                <p className="text-2xl font-bold mb-4">
                  $<span>4k+</span>
                  <span className="text-xs font-normal text-indigo-50 ml-1">
                    / project
                  </span>
                </p>
                <ul className="space-y-2 text-xs text-indigo-50 flex-1 mb-5">
                  <li>- UX flows, design system, responsive UI</li>
                  <li>- Frontend implementation (Next.js / React)</li>
                  <li>- Handover docs & performance best practices</li>
                </ul>
                <button className="mt-auto w-full rounded-full bg-slate-900 text-slate-50 text-xs font-medium py-2.5 hover:bg-black transition">
                  Talk about your product
                </button>
              </div>

              <div className="bg-slate-800/80 rounded-2xl border border-slate-700 shadow-sm p-6 flex flex-col">
                <h3 className="text-sm font-semibold mb-1">
                  Ongoing Partnership
                </h3>
                <p className="text-xs text-slate-300 mb-4">
                  Continuous improvements, new features, and experiments.
                </p>
                <p className="text-2xl font-bold mb-4">
                  $<span>1.5k</span>
                  <span className="text-xs font-normal text-slate-300 ml-1">
                    / month
                  </span>
                </p>
                <ul className="space-y-2 text-xs text-slate-200 mb-5 flex-1">
                  <li>- Monthly design & development hours</li>
                  <li>- Roadmap support & prioritization</li>
                  <li>- Analytics reviews & UX tweaks</li>
                </ul>
                <button className="mt-auto w-full rounded-full bg-slate-50 text-slate-900 text-xs font-medium py-2.5 hover:bg-white transition">
                  Explore retainers
                </button>
              </div>
            </div>
          </div>
        </section>

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
