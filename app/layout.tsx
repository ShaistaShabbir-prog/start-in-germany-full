import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export const metadata: Metadata = { title:"Start in Germany — Work, Study, Live", description:"Original, friendly guidance for moving to Germany." };
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang="en"><body><NavBar/><main>{children}</main><Footer/></body></html>);}
