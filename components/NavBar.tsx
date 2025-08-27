"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/study", label: "Study" },
  { href: "/visa", label: "Visa" },
  { href: "/living", label: "Living" },
  { href: "/finances", label: "Money" },
  { href: "/service", label: "Service" },
  { href: "/about", label: "About" }
];

export default function NavBar(){
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container-narrow flex items-center justify-between h-14">
        <Link href="/" className="font-extrabold tracking-tight">Start in Germany</Link>
        <nav className="hidden md:flex items-center gap-2">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={pathname===l.href ? "active" : ""}>{l.label}</Link>
          ))}
        </nav>
        <button className="md:hidden btn btn-ghost" aria-label="Open menu" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/95">
          <nav className="container-narrow py-2 flex flex-col">
            {links.map(l => (
              <Link key={l.href} href={l.href} className={"py-2 " + (pathname===l.href ? "active" : "")} onClick={()=>setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
