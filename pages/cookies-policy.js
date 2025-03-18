import { CareersFooter, Navbar } from "@/components";
import Link from "next/link";
import React from "react";

const CookiesPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10 px-6 md:px-20 lg:px-40 text-gray-800">
        <div className="max-w-4xl mx-auto bg-[#eee] p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Cookies Policy
          </h1>
          <p className="text-gray-600 mb-6">Effective Date: 12 March, 2025</p>

          <h2 className="text-2xl font-semibold mt-6">1. Introduction</h2>
          <p>
            This Cookies Policy explains how Kimmotech uses cookies and similar
            tracking technologies on our Careers, Blog, Portfolio, and
            Subscription services.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device that help improve
            your browsing experience by remembering preferences and analyzing
            website traffic.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. How We Use Cookies</h2>
          <ul className="list-disc list-inside">
            <li>To enhance website functionality and user experience.</li>
            <li>To analyze traffic and user behavior.</li>
            <li>To provide personalized content and advertisements.</li>
            <li>To ensure security and prevent fraudulent activities.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            4. Types of Cookies We Use
          </h2>
          <h3 className="text-xl font-semibold mt-4">
            {`a)`} Essential Cookies
          </h3>
          <p>
            These cookies are necessary for the website to function properly.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            {`b)`} Performance Cookies
          </h3>
          <p>
            These help us understand how visitors interact with our website by
            collecting anonymous data.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            {`c)`} Functional Cookies
          </h3>
          <p>
            These cookies remember your preferences and enhance your browsing
            experience.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            {`d)`} Advertising Cookies
          </h3>
          <p>
            These cookies are used to deliver relevant ads and measure their
            effectiveness.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings.
            Most browsers allow you to block or delete cookies as needed.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            6. Third-Party Cookies
          </h2>
          <p>
            We may use third-party cookies from analytics and advertising
            providers. These providers have their own policies governing their
            use of cookies.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            7. Updates to This Policy
          </h2>
          <p>
            We may update our Cookies Policy from time to time. Any changes will
            be posted on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-6">8. Contact Us</h2>
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

export default CookiesPolicy;
