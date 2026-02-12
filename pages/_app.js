import "@/styles/globals.css";
import "@/styles/base.scss";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { useRouter } from "next/router";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith("/admin");

  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />
    </>
  );
}
