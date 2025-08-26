"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links=[{href:"/",label:"Home"},{href:"/work",label:"Work"},{href:"/study",label:"Study & Training"},{href:"/visa",label:"Visa & Residence"},{href:"/living",label:"Living"},{href:"/finances",label:"Money"},{href:"/service",label:"Service"},{href:"/about",label:"About"}];
export default function NavBar(){
  const pathname=usePathname();
  return(<header className="border-b border-gray-200 bg-white"><div className="container-narrow flex items-center justify-between py-4"><Link href="/" className="text-xl font-extrabold tracking-tight">Start<span className="text-brand-600">in</span>Germany</Link><nav className="hidden gap-5 md:flex">{links.map(l=>(<Link key={l.href} href={l.href} className={(pathname===l.href? "active ":"")+"text-gray-700 hover:text-brand-700"}>{l.label}</Link>))}</nav></div></header>);
}