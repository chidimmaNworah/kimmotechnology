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
        id="monetag-ad-script"
        strategy="lazyOnLoad"
        dangerouslySetInnerHTML={{
          html: `(function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('groleegni.net',9161384,document.createElement('script'))`,
        }}
      />
      <Component {...pageProps} />
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />
    </>
  );
}
