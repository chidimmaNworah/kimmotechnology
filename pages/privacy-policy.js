import { Navbar } from "@/components";
import Footer from "@/container/Footer/Footer";
import Link from "next/link";
import Head from "next/head";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy — Kimmotech</title>
      </Head>
      <div className="min-h-screen bg-deep">
        <Navbar />
        <div className="pt-28 pb-20 px-6 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-violet-accent bg-violet-accent/8 border border-violet-accent/15 px-3.5 py-1 rounded-full mb-4">
              Legal
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-txt-primary tracking-tight mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-txt-muted mb-10">
              Effective Date: 12 March, 2025
            </p>

            <div className="space-y-8 text-sm text-txt-secondary leading-relaxed">
              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">1. Introduction</h2>
                <p>Welcome to Kimmotech. This Privacy Policy explains how we collect, use, and protect your information across our Careers, Blog, Portfolio, and Subscription services.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">2. Information We Collect</h2>
                <h3 className="font-semibold text-txt-primary mt-3 mb-1">a) Personal Data</h3>
                <p>We collect personal information such as your name, email, phone number, and payment details when you register, subscribe, or apply for job opportunities.</p>
                <h3 className="font-semibold text-txt-primary mt-3 mb-1">b) Non-Personal Data</h3>
                <p>We collect non-identifiable data such as IP addresses, browser type, and website usage analytics.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">3. How We Use Your Information</h2>
                <ul className="list-none space-y-1.5 ml-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>To manage access to our Careers, Blog, and Portfolio platforms.</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>To process subscriptions and payments for premium services.</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>To improve user experience through analytics.</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>To send promotional or important updates (you may opt out).</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">4. Subscription &amp; Payment Data</h2>
                <p>We collect payment details through secure third-party processors. We do not store your credit card details.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">5. Cookies &amp; Tracking</h2>
                <p>We use cookies and tracking technologies to enhance user experience, analyze traffic, and personalize content.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">6. Sharing Your Information</h2>
                <p className="mb-2">We do not sell your personal information. However, we may share data with:</p>
                <ul className="list-none space-y-1.5 ml-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>Third-party payment processors.</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>Analytics and advertising partners.</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>Legal authorities if required by law.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">7. Your Rights</h2>
                <ul className="list-none space-y-1.5 ml-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>Request access to your data.</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>Request data deletion.</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>Opt-out of marketing emails.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">8. Data Security</h2>
                <p>We implement security measures to protect your data, but no online service is 100% secure.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">9. Third-Party Links</h2>
                <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">10. Changes to This Policy</h2>
                <p>We may update this Privacy Policy. Any changes will be posted on this page.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">11. Contact Us</h2>
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

export default PrivacyPolicy;
