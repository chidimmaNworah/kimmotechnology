import React, { useState } from "react";
import Link from "next/link";

export default function CareersFooter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/jobs/newsletter/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Subscription failed. Please try again.");
      }

      setMessage("Successfully subscribed!");
      setEmail("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mt-10">
      <div className="flex flex-col justify-center items-center mb-10 gap-4">
        <h2 className="bold-text">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <div className="flex flex-row items-center justify-center rounded-lg shadow-lg border border-2 overflow-hidden">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email *"
            className="w-full px-2 py-4 text-black outline-none border-none"
          />
          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="px-6 py-4 transition duration-300 bg-[#313bac] hover:bg-[#3541cc] disabled:opacity-50"
            type="submit"
          >
            {loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
          </button>
        </div>
        {error ? (
          <p className="text-red-500 mt-2">{error}</p>
        ) : (
          <p className="text-green-500 mt-2">{message}</p>
        )}
      </div>
      <div className="flex justify-center items-center text-xs gap-10">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-use">Terms of Use</Link>
        <Link href="/cookies-policy">Cookies Policy</Link>
        <Link href="/newsletter/unsubscribe">Unsubcribe</Link>
      </div>
      <div className="copyright">
        <p className="p-text">@2019 KIMMOTECH</p>
        <p className="p-text mb-10">All rights reserved</p>
      </div>
    </div>
  );
}
