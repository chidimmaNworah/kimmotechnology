import { JobNavbar } from "@/components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Unsubscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.query.email) {
      setEmail(router.query.email);
    }
  }, [router.query.email]);

  const handleUnsubscribe = async () => {
    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/jobs/newsletter/unsubscribe?email=${email}`,
        { method: "DELETE" }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.detail || "Failed to unsubscribe. Please try again."
        );
      }

      setMsg(data.message || "Successfully unsubscribed!");
      router.push("/newsletter/unsubscribed-success");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <JobNavbar />
      <div className="">
        <div className="flex flex-col justify-center items-center mb-10 gap-4 min-h-screen">
          <h2 className="bold-text">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <div className="flex flex-row items-center justify-center rounded-lg shadow-lg border border-2 overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email *"
              className="w-full px-2 py-4 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="px-6 py-4 transition duration-300 bg-[#313bac] hover:bg-[#3541cc]"
              type="submit"
              onClick={handleUnsubscribe}
              disabled={loading}
            >
              {loading ? "Unsubscribing..." : "Unsubscribe"}
            </button>
          </div>
        </div>
        {error ? (
          <p className="text-red-500 mt-2">{error}</p>
        ) : (
          <p className="text-green-500 mt-2">{msg}</p>
        )}
      </div>
    </>
  );
};

export default Unsubscribe;
