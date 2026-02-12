import React from "react";
import { Navbar } from "@/components";
import { Footer, Header, Testimonial, Work } from "@/container";
import Articles from "@/container/Articles/Articles";
import { fetchAbouts, fetchExpertise, fetchProjects } from "@/utils/api";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

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
  return (
    <>
      <Head>
        <title>Kimmotech — Your Trusted Tech Partner</title>
        <meta
          name="description"
          content="Discover expert services, insights, and testimonials from satisfied clients. Let's build something great together!"
        />
        <meta
          name="keywords"
          content="expertise, services, work, articles, testimonials"
        />
        <meta property="og:title" content="Kimmotech — Your Trusted Partner" />
        <meta
          property="og:description"
          content="Discover expert services, insights, and testimonials from satisfied clients."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kimmotech — Your Trusted Partner" />
        <meta
          name="twitter:description"
          content="Explore our expertise and see how we can help you succeed."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-deep">
        <Navbar />
        <Header />
        <Work works={projectsData} />
        <Articles abouts={aboutsData} />

        {/* === Pricing Section === */}
        <section id="pricing" className="relative py-24 px-4 bg-surface overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-cyan-accent/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-cyan-accent bg-cyan-accent/8 border border-cyan-accent/15 px-3.5 py-1 rounded-full mb-4">
                Pricing
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-txt-primary tracking-tight mb-3">
                Choose How You Want to{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  Work With Us
                </span>
              </h2>
              <p className="text-txt-secondary text-sm md:text-base max-w-xl mx-auto">
                From fast landing pages to full product UI and long-term
                partnerships — pick the option that matches your stage.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {/* Starter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border-subtle rounded-2xl p-6 flex flex-col hover:border-cyan-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              >
                <h3 className="font-display text-lg font-bold text-txt-primary mb-1">
                  Starter Website
                </h3>
                <p className="text-xs text-txt-secondary mb-5">
                  Perfect for portfolios, landing pages, and simple marketing
                  sites.
                </p>
                <p className="text-3xl font-bold text-txt-primary mb-5 font-display">
                  ₦300k<span className="text-xs font-normal text-txt-muted ml-1">+</span>
                  <span className="text-xs font-normal text-txt-muted ml-1">
                    / project
                  </span>
                </p>
                <ul className="space-y-2.5 text-sm text-txt-secondary mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-accent mt-0.5">▸</span>
                    Up to 5 pages, responsive & SEO-friendly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-accent mt-0.5">▸</span>
                    Custom UI aligned with your brand
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-accent mt-0.5">▸</span>
                    Basic analytics & contact forms
                  </li>
                </ul>
                <Link
                  href="/#contact"
                  className="mt-auto w-full text-center rounded-xl bg-transparent border border-border-subtle text-txt-primary text-sm font-semibold py-2.5 hover:border-cyan-accent/30 hover:bg-card-hover transition-all"
                >
                  Book a Discovery Call
                </Link>
              </motion.div>

              {/* Product UI */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-gradient-to-br from-cyan-accent/10 to-violet-accent/10 border border-cyan-accent/25 rounded-2xl p-6 flex flex-col shadow-[0_0_60px_rgba(34,211,238,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.18em] bg-cyan-accent text-deep px-2.5 py-1 rounded-full font-bold">
                  Popular
                </span>
                <h3 className="font-display text-lg font-bold text-txt-primary mb-1">
                  Product UI + Dev
                </h3>
                <p className="text-xs text-txt-secondary mb-5">
                  Ideal for SaaS, dashboards, and web applications.
                </p>
                <p className="text-3xl font-bold text-txt-primary mb-5 font-display">
                  ₦600k<span className="text-xs font-normal text-txt-muted ml-1">+</span>
                  <span className="text-xs font-normal text-txt-muted ml-1">
                    / project
                  </span>
                </p>
                <ul className="space-y-2.5 text-sm text-txt-secondary mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-accent mt-0.5">▸</span>
                    UX flows, design system, responsive UI
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-accent mt-0.5">▸</span>
                    Frontend implementation (Next.js / React)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-accent mt-0.5">▸</span>
                    Handover docs & performance best practices
                  </li>
                </ul>
                <Link
                  href="/#contact"
                  className="mt-auto w-full text-center rounded-xl bg-cyan-accent text-deep text-sm font-bold py-2.5 hover:bg-[#67e8f9] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all"
                >
                  Talk About Your Product
                </Link>
              </motion.div>

              {/* Retainer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border-subtle rounded-2xl p-6 flex flex-col hover:border-cyan-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              >
                <h3 className="font-display text-lg font-bold text-txt-primary mb-1">
                  Ongoing Partnership
                </h3>
                <p className="text-xs text-txt-secondary mb-5">
                  Continuous improvements, new features, and experiments.
                </p>
                <p className="text-3xl font-bold text-txt-primary mb-5 font-display">
                  ₦200k
                  <span className="text-xs font-normal text-txt-muted ml-1">
                    / month
                  </span>
                </p>
                <ul className="space-y-2.5 text-sm text-txt-secondary mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-accent mt-0.5">▸</span>
                    Monthly design & development hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-accent mt-0.5">▸</span>
                    Roadmap support & prioritization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-accent mt-0.5">▸</span>
                    Analytics reviews & UX tweaks
                  </li>
                </ul>
                <Link
                  href="/#contact"
                  className="mt-auto w-full text-center rounded-xl bg-transparent border border-border-subtle text-txt-primary text-sm font-semibold py-2.5 hover:border-cyan-accent/30 hover:bg-card-hover transition-all"
                >
                  Explore Retainers
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <Testimonial />
        <Footer />
      </div>
    </>
  );
}
