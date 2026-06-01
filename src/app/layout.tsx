import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Spiralcon — Precision Ground Investigation & Environmental Services",
    template: "%s | Spiralcon",
  },
  description:
    "Trusted specialists in geotechnical drilling, environmental site investigation, monitoring wells, and GPR surveys. Delivering precision subsurface solutions for complex infrastructure and environmental projects.",
  keywords: [
    "geotechnical drilling",
    "environmental drilling",
    "ground investigation",
    "monitoring wells",
    "GPR survey",
    "contaminated land",
    "subsurface investigation",
    "India",
    "Bengaluru",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://spiralcon.com",
    siteName: "Spiralcon",
    title: "Spiralcon — Precision Ground Investigation & Environmental Services",
    description:
      "Trusted specialists in geotechnical drilling, environmental site investigation, monitoring wells, and GPR surveys.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiralcon",
    description: "Precision Ground Investigation & Environmental Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/hero/hero-1.webp" type="image/webp" />
        <link rel="preload" as="image" href="/images/hero/hero-2.webp" type="image/webp" />
        <link rel="preload" as="image" href="/images/hero/hero-3.webp" type="image/webp" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
