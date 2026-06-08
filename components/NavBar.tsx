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
  { href: "/service", label: "Services" },
  { href: "/about", label: "About" },
];

const countries = [
  { flag: "🇩🇪", name: "Germany", href: "/" },
  { flag: "🇮🇹", name: "Italy", href: "/" },
  { flag: "🇸🇪", name: "Sweden", href: "/" },
  { flag: "🇬🇧", name: "UK", href: "/" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div style={{ background: "#0f1f3d", padding: "9px 0", textAlign: "center", fontSize: "12.5px", color: "rgba(255,255,255,.65)" }}>
        🌍 Trusted by students & professionals from Pakistan · India · Bangladesh · Afghanistan &nbsp;·&nbsp;
        <Link href="/finances" style={{ fontWeight: 700, color: "#f5c842", textDecoration: "underline", textUnderlineOffset: "2px" }}>
          Open a free EU bank account →
        </Link>
      </div>

      {/* Main nav */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,255,255,.97)",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid #e8e8ec",
        boxShadow: "0 2px 12px rgba(0,0,0,.06)"
      }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
            <div style={{
              width: "38px", height: "38px", borderRadius: "12px",
              background: "linear-gradient(135deg,#E63946,#a81e31)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: "16px", fontWeight: 900,
              boxShadow: "0 4px 12px rgba(230,57,70,.35)"
            }}>EP</div>
            <div>
              <div style={{ fontFamily: '"Syne",ui-sans-serif', fontWeight: 800, fontSize: "17px", color: "#0f1f3d", lineHeight: 1.1 }}>EuroPathway</div>
              <div style={{ fontSize: "10px", color: "#9ca3af", fontWeight: 500, letterSpacing: "0.05em" }}>DE · IT · SE · UK</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2px" }} className="desktop-nav">
            {links.map(l => (
              <Link key={l.href} href={l.href} className={`navlink${pathname === l.href ? " active" : ""}`}>{l.label}</Link>
            ))}
          </nav>

          {/* Country selector + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <div style={{ display: "flex", gap: "4px", background: "#f3f4f6", borderRadius: "12px", padding: "4px" }} className="country-flags">
              {countries.map(c => (
                <Link key={c.name} href={c.href} title={c.name} style={{ fontSize: "18px", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", textDecoration: "none", transition: "background .15s" }}
                  onMouseOver={e => (e.currentTarget.style.background = "#e5e7eb")}
                  onMouseOut={e => (e.currentTarget.style.background = "transparent")}>
                  {c.flag}
                </Link>
              ))}
            </div>
            <button onClick={() => setOpen(!open)} style={{ background: "none", border: "1.5px solid #e5e7eb", cursor: "pointer", padding: "8px 10px", borderRadius: "10px", color: "#555", display: "flex", alignItems: "center" }} aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div style={{ borderTop: "1px solid #e8e8ec", background: "#fff", padding: "10px 16px 16px" }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                display: "block", padding: "11px 14px", borderRadius: "12px",
                fontSize: "14px", fontWeight: pathname === l.href ? 700 : 500,
                color: pathname === l.href ? "#E63946" : "#333",
                background: pathname === l.href ? "#fff1f2" : "transparent",
                textDecoration: "none", marginBottom: "2px"
              }}>{l.label}</Link>
            ))}
          </div>
        )}
      </header>

      <style>{`
        .desktop-nav { display: flex !important; }
        .country-flags { display: flex !important; }
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .country-flags { display: none !important; }
        }
        @media (min-width: 961px) {
          header button[aria-label="Menu"] { display: none !important; }
        }
      `}</style>
    </>
  );
}
