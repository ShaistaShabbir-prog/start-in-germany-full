"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/study", label: "Study & Training" },
  { href: "/visa", label: "Visa & Residence" },
  { href: "/living", label: "Living" },
  { href: "/finances", label: "💳 Banking" },
  { href: "/service", label: "Service" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* top announcement bar */}
      <div className="bg-navy py-2 text-center text-xs text-white/70">
        🇩🇪 Independent guidance portal for moving to Germany &nbsp;·&nbsp;
        <Link href="/finances" className="font-semibold text-amber-400 underline-offset-2 hover:underline">
          Open a free bank account →
        </Link>
      </div>

      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="container-narrow flex items-center justify-between py-3">
          {/* logo */}
          <Link href="/" className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white text-sm font-black">
              S
            </div>
            <span className="text-navy">Start</span>
            <span className="text-brand-600">in</span>
            <span className="text-navy">Germany</span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-xl px-3 py-2 text-sm transition hover:bg-brand-50 hover:text-brand-700 ${
                  pathname === l.href
                    ? "bg-brand-50 font-semibold text-brand-700"
                    : "text-gray-600"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* mobile hamburger */}
          <button
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* mobile dropdown */}
        {open && (
          <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-2.5 text-sm ${
                  pathname === l.href
                    ? "bg-brand-50 font-semibold text-brand-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
