import { Navbar } from "@/components";
import React from "react";

export default function SendEmail() {
  const sendEmails = async () => {
    const res = await fetch("/api/sendEmails", {
      method: "POST",
    });
    const result = await res.json();
    alert(result.message);
  };

  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center p-4 h-full">
        <Navbar />
        <h1 className="text-2xl font-bold mb-4">Send Emails</h1>
        <button
          onClick={sendEmails}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send training Emails
        </button>
      </div>
    </>
  );
}
