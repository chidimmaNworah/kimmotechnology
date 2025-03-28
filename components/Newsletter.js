import Link from "next/link";
import React, { useState } from "react";

export default function Newsletter() {
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
    <div className="bg-gray-900 px-20 shadow-xl rounded-xl pt-2">
      <div className="mt-10">
        <div className="flex flex-col justify-center items-center gap-4">
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
              title="subscribe"
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
        <div className="copyright">
          <p className="p-text mb-10">
            By subscribing, you agree to our terms of use.
          </p>
        </div>
      </div>
    </div>
  );
}
