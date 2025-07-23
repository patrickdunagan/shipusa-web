import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Premier indoor batting cages in Oklahoma City. Perfect for players, parents, and coaches."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
       {/* Google Analytics Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-X2WXQDFXH3"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
       {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X2WXQDFXH3', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
