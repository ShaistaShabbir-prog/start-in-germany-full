import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "VisaVista — Move to Europe from Pakistan, India & Bangladesh", template: "%s | VisaVista" },
  description: "Complete visa guidance, job search, banking & appointment help for students and professionals from Pakistan, India, Bangladesh & Afghanistan moving to Germany, Italy, Sweden and the UK.",
  keywords: ["Germany visa Pakistan 2026", "Europe immigration India", "Germany student visa Bangladesh", "EU Blue Card", "Opportunity Card Germany", "Italy visa South Asia", "Sweden work permit"],
  openGraph: { title: "VisaVista", description: "Your trusted European immigration guide", type: "website" },
  icons: { icon: "/favicon.ico" },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
