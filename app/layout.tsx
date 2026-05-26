import type { Metadata } from "next";
import FloatingWhatsAppButton from "@/components/FloatingWhatsapp";

import {
  Manrope,
  Space_Grotesk,
} from "next/font/google";

import Script from "next/script";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RCC & Civil - Mekark",

  description:
    "Mekark delivers comprehensive commercial RCC construction services, specializing in industrial projects. With a focus on quality, safety, and timely delivery, we provide end-to-end solutions for all your construction needs. Contact us today to discuss your project requirements and experience our commitment to excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${manrope.variable}
        ${spaceGrotesk.variable}
        h-full
        scroll-smooth
        antialiased
      `}
    >
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5SBMM86H');
          `}
        </Script>
      </head>

      <body className="min-h-full bg-white text-black">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5SBMM86H"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {children}

        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}