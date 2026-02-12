import { Navbar } from "@/components";
import Footer from "@/container/Footer/Footer";
import Link from "next/link";
import Head from "next/head";
import React from "react";

const CookiesPolicy = () => {
  return (
    <>
      <Head>
        <title>Cookies Policy — Kimmotech</title>
      </Head>
      <div className="min-h-screen bg-deep">
        <Navbar />
        <div className="pt-28 pb-20 px-6 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-violet-accent bg-violet-accent/8 border border-violet-accent/15 px-3.5 py-1 rounded-full mb-4">
              Legal
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-txt-primary tracking-tight mb-2">
              Cookies Policy
            </h1>
            <p className="text-sm text-txt-muted mb-10">
              Effective Date: 12 March, 2025
            </p>

            <div className="space-y-8 text-sm text-txt-secondary leading-relaxed">
              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">1. Introduction</h2>
                <p>This Cookies Policy explains how Kimmotech uses cookies and similar tracking technologies on our Careers, Blog, Portfolio, and Subscription services.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">2. What Are Cookies?</h2>
                <p>Cookies are small text files stored on your device that help improve your browsing experience by remembering preferences and analyzing website traffic.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">3. How We Use Cookies</h2>
                <ul className="list-none space-y-1.5 ml-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>To enhance website functionality and user experience.</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>To analyze traffic and user behavior.</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>To provide personalized content and advertisements.</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>To ensure security and prevent fraudulent activities.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">4. Types of Cookies We Use</h2>
                <div className="space-y-3 mt-3">
                  <div>
                    <h3 className="font-semibold text-txt-primary mb-1">a) Essential Cookies</h3>
                    <p>These cookies are necessary for the website to function properly.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-txt-primary mb-1">b) Performance Cookies</h3>
                    <p>These help us understand how visitors interact with our website by collecting anonymous data.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-txt-primary mb-1">c) Functional Cookies</h3>
                    <p>These cookies remember your preferences and enhance your browsing experience.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-txt-primary mb-1">d) Advertising Cookies</h3>
                    <p>These cookies are used to deliver relevant ads and measure their effectiveness.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">5. Managing Cookies</h2>
                <p>You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies as needed.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">6. Third-Party Cookies</h2>
                <p>We may use third-party cookies from analytics and advertising providers. These providers have their own policies governing their use of cookies.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">7. Updates to This Policy</h2>
                <p>We may update our Cookies Policy from time to time. Any changes will be posted on this page.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">8. Contact Us</h2>
                <p>
                  If you have any questions, contact us at our{" "}
                  <Link className="text-cyan-accent hover:underline" href="/#contact">
                    Contact page
                  </Link>.
                </p>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CookiesPolicy;
