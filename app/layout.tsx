import type { Metadata } from "next";
import FloatingWhatsAppButton from "@/components/FloatingWhatsapp";


import {
  Manrope,
  Space_Grotesk,
} from "next/font/google";

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
  title: " RCC & Civil - Mekark",

  description:
    " Mekark delivers comprehensive commercial RCC construction services, specializing in industrial projects. With a focus on quality, safety, and timely delivery, we provide end-to-end solutions for all your construction needs. Contact us today to discuss your project requirements and experience our commitment to excellence.  ",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
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
      <body className="min-h-full bg-white text-black">
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}