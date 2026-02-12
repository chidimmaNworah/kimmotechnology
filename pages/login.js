import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const validateForm = () => {
    if (!username || !password) {
      setError("Username and password are required");
      return false;
    }
    setError("");
    return true;
  };

  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/users/token`;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const formDetails = new URLSearchParams();
    formDetails.append("username", username);
    formDetails.append("password", password);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDetails,
      });
      setLoading(false);
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        router.push("/admin");
      } else {
        const errorData = await response.json();
        setError(errorData.detail || "Authentication failed!");
      }
    } catch (err) {
      setLoading(false);
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <Head>
        <title>Login — Kimmotech</title>
      </Head>

      <div className="min-h-screen bg-deep flex items-center justify-center px-4 relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-cyan-accent/8 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-violet-accent/8 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-md"
        >
          {/* Logo / brand */}
          <Link href="/" className="flex items-center justify-center gap-2 mb-8 group">
            <span className="text-2xl font-display font-bold text-txt-primary tracking-tight group-hover:text-cyan-accent transition-colors">
              Kimmotech
            </span>
          </Link>

          <div className="bg-card border border-border-subtle rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <h1 className="font-display text-xl font-bold text-txt-primary mb-1">
              Welcome back
            </h1>
            <p className="text-sm text-txt-secondary mb-6">
              Sign in to access the admin dashboard.
            </p>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-txt-secondary uppercase tracking-wide mb-1.5">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                  className="w-full rounded-xl bg-surface border border-border-subtle px-4 py-2.5 text-sm text-txt-primary placeholder:text-txt-muted outline-none focus:ring-2 focus:ring-cyan-accent/30 focus:border-cyan-accent/40 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-txt-secondary uppercase tracking-wide mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl bg-surface border border-border-subtle px-4 py-2.5 text-sm text-txt-primary placeholder:text-txt-muted outline-none focus:ring-2 focus:ring-cyan-accent/30 focus:border-cyan-accent/40 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-cyan-accent text-deep font-bold text-sm py-2.5 mt-2 hover:bg-[#67e8f9] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Signing in…
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
          </div>

          <p className="text-center text-xs text-txt-muted mt-6">
            <Link href="/" className="text-cyan-accent hover:underline">
              &larr; Back to homepage
            </Link>
          </p>
        </motion.div>
      </div>
    </>
  );
}
