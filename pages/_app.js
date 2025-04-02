import "@/styles/globals.css";
import "@/styles/base.scss";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://groleegni.net/401/9161384"
        strategy="lazyOnload"
        async
      />
      <Component {...pageProps} />
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />
    </>
  );
}
