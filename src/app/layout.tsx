import type { Metadata } from "next";
import { Oswald, Hanken_Grotesk, Cormorant_Garamond } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const display = Oswald({
  variable: "--font-display-family",
  subsets: ["latin"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-body-family",
  subsets: ["latin"],
  display: "swap",
});

// Elegant high-contrast serif for accent moments ("key places where it pops").
const serif = Cormorant_Garamond({
  variable: "--font-serif-family",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yemandi.com"),
  title: {
    default: "Yemandi Yemeni Cuisine — Authentic Mandi & Haneeth | Richardson, TX",
    template: "%s | Yemandi Yemeni Cuisine",
  },
  description:
    "Yemandi — the first authentic Yemeni restaurant in DFW. Slow-cooked lamb & chicken mandi, haneeth, fahsa, saltah, and tandoor-baked rashoosh bread. 100% halal in Richardson.",
  keywords: [
    "Yemandi",
    "Yemeni restaurant Dallas",
    "mandi Richardson",
    "haneeth",
    "fahsa",
    "saltah",
    "halal Richardson",
    "Yemeni food DFW",
    "lamb mandi",
  ],
  openGraph: {
    title: "Yemandi Yemeni Cuisine — Authentic Mandi & Haneeth | Richardson, TX",
    description:
      "The first authentic Yemeni restaurant in DFW — mandi, haneeth, fahsa, saltah, and fresh rashoosh. 100% halal.",
    type: "website",
    locale: "en_US",
    siteName: "Yemandi Yemeni Cuisine",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yemandi Yemeni Cuisine — Mandi & Haneeth | Richardson, TX",
    description: "The first authentic Yemeni restaurant in DFW. Mandi, haneeth, fahsa. 100% halal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${serif.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
