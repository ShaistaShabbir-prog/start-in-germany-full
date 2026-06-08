import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EuroPathway — Move to Europe from Pakistan, India, Bangladesh & Afghanistan",
  description: "Your trusted guide to moving to Germany, Italy, Sweden & the UK. Visa help, job search, banking, appointments — in one place. Trusted by South Asian students and professionals.",
  keywords: ["Germany visa Pakistan", "Europe immigration India", "Germany student visa Bangladesh", "Italy visa Afghanistan", "Sweden immigration", "UK visa South Asia"],
  icons: { icon: "/favicon.ico" },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "EuroPathway — Move to Europe",
    description: "Trusted visa & immigration guidance for students and professionals from Pakistan, India, Bangladesh & Afghanistan.",
    type: "website",
  }
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
