"use client";
import dynamic from "next/dynamic";

// Dynamically import the client script with SSR disabled
const ClientScript = dynamic(() => import("@/components/clientscript"), {
  ssr: false,
});

export default ClientScript;
