import "@/styles/globals.css";
import "@/styles/base.scss";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
    </>
  );
}
