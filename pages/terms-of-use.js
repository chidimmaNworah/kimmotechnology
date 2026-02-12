import { Navbar } from "@/components";
import Footer from "@/container/Footer/Footer";
import Link from "next/link";
import Head from "next/head";
import React from "react";

const TermsOfUse = () => {
  return (
    <>
      <Head>
        <title>Terms of Use — Kimmotech</title>
      </Head>
      <div className="min-h-screen bg-deep">
        <Navbar />
        <div className="pt-28 pb-20 px-6 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-violet-accent bg-violet-accent/8 border border-violet-accent/15 px-3.5 py-1 rounded-full mb-4">
              Legal
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-txt-primary tracking-tight mb-2">
              Terms of Use
            </h1>
            <p className="text-sm text-txt-muted mb-10">
              Effective Date: 12 March, 2025
            </p>

            <div className="space-y-8 text-sm text-txt-secondary leading-relaxed">
              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">1. Introduction</h2>
                <p>Welcome to Kimmotech. By accessing and using our services, you agree to comply with these Terms of Use. Please read them carefully.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">2. Use of Our Services</h2>
                <p>You agree to use our Careers, Blog, Portfolio, and Subscription services in accordance with applicable laws and regulations.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">3. User Accounts</h2>
                <ul className="list-none space-y-1.5 ml-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>You must provide accurate and up-to-date information.</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>You are responsible for maintaining account security.</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>We reserve the right to suspend or terminate accounts.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">4. Intellectual Property</h2>
                <p>All content, trademarks, and materials on our platform are owned by Kimmotech and protected by copyright laws. Unauthorized use is prohibited.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">5. Prohibited Activities</h2>
                <p className="mb-2">You may not:</p>
                <ul className="list-none space-y-1.5 ml-1">
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>Engage in fraudulent, harmful, or illegal activities.</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>Upload malicious code or interfere with system integrity.</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-accent mt-0.5">▸</span>Impersonate others or misrepresent your identity.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">6. Subscription &amp; Payments</h2>
                <p>Some features require payment. All transactions are securely processed, and refunds are subject to our policy.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">7. Disclaimers &amp; Limitations</h2>
                <p>Our services are provided &quot;as is.&quot; We do not guarantee uninterrupted access or error-free operation.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">8. Changes to Terms</h2>
                <p>We may modify these Terms at any time. Continued use of our services constitutes acceptance of updates.</p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-txt-primary mb-2">9. Contact Us</h2>
                <p>
                  If you have questions about these Terms, visit our{" "}
                  <Link className="text-cyan-accent hover:underline" href="/#contact">
                    Contact Us page
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

export default TermsOfUse;
