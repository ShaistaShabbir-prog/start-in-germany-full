import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

export const metadata: Metadata = {
  title: { default: "VisaVista — Move to Europe from Pakistan, India & Bangladesh", template: "%s | VisaVista" },
  description: "Complete visa guidance, job search, banking & appointment help for students and professionals from Pakistan, India, Bangladesh & Afghanistan moving to Germany, Italy, Sweden and the UK.",
  keywords: ["Germany visa Pakistan 2026","Europe immigration India","Germany student visa Bangladesh","EU Blue Card","Opportunity Card Germany","Italy visa South Asia","Sweden immigration","UK visa South Asia"],
  openGraph: {
    title: "VisaVista — Move to Europe",
    description: "Trusted visa & immigration guidance for students and professionals from Pakistan, India, Bangladesh & Afghanistan.",
    type: "website",
    url: "https://visavista.eu",
  },
  twitter: { card: "summary_large_image", title: "VisaVista", description: "Your European immigration guide" },
  icons: { icon: "/favicon.ico" },
  manifest: "/site.webmanifest",
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
      </body>
    </html>
  );
}
