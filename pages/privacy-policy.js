import { CareersFooter, Navbar } from "@/components";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10 px-6 md:px-20 lg:px-40 text-gray-800">
        <div className="max-w-4xl mx-auto bg-[#eee] p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-6">Effective Date: 12 March, 2025</p>

          <h2 className="text-2xl font-semibold mt-6">1. Introduction</h2>
          <p>
            Welcome to Kimmotech. This Privacy Policy explains how we collect,
            use, and protect your information across our Careers, Blog,
            Portfolio, and Subscription services.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            2. Information We Collect
          </h2>
          <h3 className="text-xl font-semibold mt-4">{`a)`} Personal Data</h3>
          <p>
            We collect personal information such as your name, email, phone
            number, and payment details when you register, subscribe, or apply
            for job opportunities.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            {`b)`} Non-Personal Data
          </h3>
          <p>
            We collect non-identifiable data such as IP addresses, browser type,
            and website usage analytics.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside">
            <li>
              To manage access to our Careers, Blog, and Portfolio platforms.
            </li>
            <li>To process subscriptions and payments for premium services.</li>
            <li>To improve user experience through analytics.</li>
            <li>To send promotional or important updates (you may opt out).</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            4. Subscription & Payment Data
          </h2>
          <p>
            We collect payment details through secure third-party processors. We
            do not store your credit card details.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Cookies & Tracking</h2>
          <p>
            We use cookies and tracking technologies to enhance user experience,
            analyze traffic, and personalize content.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            6. Sharing Your Information
          </h2>
          <p>
            We do not sell your personal information. However, we may share data
            with:
          </p>
          <ul className="list-disc list-inside">
            <li>Third-party payment processors.</li>
            <li>Analytics and advertising partners.</li>
            <li>Legal authorities if required by law.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">7. Your Rights</h2>
          <ul className="list-disc list-inside">
            <li>Request access to your data.</li>
            <li>Request data deletion.</li>
            <li>Opt-out of marketing emails.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">8. Data Security</h2>
          <p>
            We implement security measures to protect your data, but no online
            service is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mt-6">9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not
            responsible for their privacy practices.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            10. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy. Any changes will be posted on
            this page.
          </p>

          <h2 className="text-2xl font-semibold mt-6">11. Contact Us</h2>
          <p>
            If you have any questions, contact us at{" "}
            <Link className="text-blue-700 underline" href="/#contact">
              Contact us page
            </Link>
            .
          </p>
        </div>
      </div>
      <CareersFooter />
    </>
  );
};

export default PrivacyPolicy;
