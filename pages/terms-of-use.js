import { CareersFooter, Navbar } from "@/components";
import Link from "next/link";
import React from "react";

const TermsOfUse = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10 px-6 md:px-20 lg:px-40 text-gray-800">
        <div className="max-w-4xl mx-auto bg-[#eee] p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Terms of Use
          </h1>
          <p className="text-gray-600 mb-6">Effective Date: 12 March, 2025</p>

          <h2 className="text-2xl font-semibold mt-6">1. Introduction</h2>
          <p>
            Welcome to Kimmotech. By accessing and using our services, you agree
            to comply with these Terms of Use. Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            2. Use of Our Services
          </h2>
          <p>
            You agree to use our Careers, Blog, Portfolio, and Subscription
            services in accordance with applicable laws and regulations.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. User Accounts</h2>
          <ul className="list-disc list-inside">
            <li>You must provide accurate and up-to-date information.</li>
            <li>You are responsible for maintaining account security.</li>
            <li>We reserve the right to suspend or terminate accounts.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            4. Intellectual Property
          </h2>
          <p>
            All content, trademarks, and materials on our platform are owned by
            Kimmotech and protected by copyright laws. Unauthorized use is
            prohibited.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            5. Prohibited Activities
          </h2>
          <p>You may not:</p>
          <ul className="list-disc list-inside">
            <li>Engage in fraudulent, harmful, or illegal activities.</li>
            <li>Upload malicious code or interfere with system integrity.</li>
            <li>Impersonate others or misrepresent your identity.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            6. Subscription & Payments
          </h2>
          <p>
            Some features require payment. All transactions are securely
            processed, and refunds are subject to our policy.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            7. Disclaimers & Limitations
          </h2>
          <p>
            Our services are provided "as is." We do not guarantee uninterrupted
            access or error-free operation.
          </p>

          <h2 className="text-2xl font-semibold mt-6">8. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. Continued use of our services
            constitutes acceptance of updates.
          </p>

          <h2 className="text-2xl font-semibold mt-6">9. Contact Us</h2>
          <p>
            If you have questions about these Terms, visit our{" "}
            <Link className="text-blue-700 underline" href="/#contact">
              Contact Us page
            </Link>
            .
          </p>
        </div>
      </div>
      <CareersFooter />
    </>
  );
};

export default TermsOfUse;
