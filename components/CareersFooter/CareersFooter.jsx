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
    <footer className="bg-surface border-t border-border-subtle">
      <div className="max-w-4xl mx-auto py-12 px-6">
        {/* Newsletter */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="font-display text-lg font-bold text-txt-primary mb-1">
            Subscribe to our newsletter
          </h2>
          <p className="text-xs text-txt-muted mb-4">
            Get the latest career opportunities delivered to your inbox.
          </p>
          <div className="flex w-full max-w-md rounded-xl overflow-hidden border border-border-subtle bg-card">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 text-sm bg-transparent text-txt-primary placeholder:text-txt-muted outline-none"
            />
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className="px-5 py-2.5 bg-cyan-accent text-deep text-xs font-bold uppercase tracking-wide hover:bg-[#67e8f9] disabled:opacity-50 transition-all whitespace-nowrap"
              type="submit"
            >
              {loading ? "..." : "Subscribe"}
            </button>
          </div>
          {error ? (
            <p className="text-red-400 text-xs mt-2">{error}</p>
          ) : (
            message && <p className="text-emerald-400 text-xs mt-2">{message}</p>
          )}
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-txt-muted mb-4">
          <Link href="/privacy-policy" className="hover:text-cyan-accent transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-use" className="hover:text-cyan-accent transition-colors">
            Terms of Use
          </Link>
          <Link href="/cookies-policy" className="hover:text-cyan-accent transition-colors">
            Cookies Policy
          </Link>
          <Link href="/newsletter/unsubscribe" className="hover:text-cyan-accent transition-colors">
            Unsubscribe
          </Link>
        </div>

        <p className="text-center text-[11px] text-txt-muted">
          &copy; {new Date().getFullYear()} Kimmotech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
