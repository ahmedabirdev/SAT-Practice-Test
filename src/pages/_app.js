import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {

  return (
    <>
      <Script
        src="https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
