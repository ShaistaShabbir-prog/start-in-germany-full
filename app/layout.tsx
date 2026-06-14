import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://start-in-germany-full.vercel.app"),

  title: {
    default: "VisaVista — Global Immigration Platform · Germany, UK, Canada, Australia & More",
    template: "%s | VisaVista Immigration",
  },

  description: "VisaVista helps students and professionals worldwide navigate visas for Germany, Italy, Malaysia, China, the UK, Canada, Australia, Sweden and more.",

  keywords: [
    "Germany immigration", "EU Blue Card", "Chancenkarte", "work in Germany",
    "Germany visa 2026", "move to Germany", "Germany Blue Card salary",
    "UK Skilled Worker visa", "Canada Express Entry", "Australia skilled visa",
    "immigration guide", "VisaVista", "international scholarships",
    "DAAD scholarship", "Chevening scholarship", "Fulbright scholarship",
    "Germany bank account", "Commerzbank Germany", "Wise transfer Germany",
    "Pakistan Germany visa", "India Germany", "Bangladesh Germany",
    "international students Europe", "study in Germany free",
  ],

  authors: [{ name: "VisaVista Immigration" }],

  creator: "VisaVista",

  publisher: "VisaVista",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://start-in-germany-full.vercel.app",
    languages: {
      "en": "https://start-in-germany-full.vercel.app",
      "de": "https://start-in-germany-full.vercel.app",
      "ar": "https://start-in-germany-full.vercel.app",
      "ur": "https://start-in-germany-full.vercel.app",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://start-in-germany-full.vercel.app",
    siteName: "VisaVista",
    title: "VisaVista — Global Immigration Platform",
    description: "Trusted immigration guides for Germany, UK, Canada, Australia and more. Blue Card, scholarships, banking, step-by-step visa help.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=90&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "VisaVista — Global Immigration Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VisaVista — Global Immigration Platform",
    description: "Immigration guides for Germany, UK, Canada, Australia and more. Blue Card, scholarships, banking guides.",
    images: ["https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=90&auto=format&fit=crop"],
  },

  verification: {
    google: "ADD_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  },

  category: "immigration, travel, education",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER" strategy="afterInteractive"/>
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PLACEHOLDER');
        `}</Script>
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
      </body>
    </html>
  );
}
