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
      {/* Announcement bar */}
      <div style={{background:"#1D3557",padding:"8px 0",textAlign:"center",fontSize:"12px",color:"rgba(255,255,255,0.65)"}}>
        🇩🇪 Independent guidance portal for moving to Germany &nbsp;·&nbsp;
        <Link href="/finances" style={{fontWeight:700,color:"#F7C948",textDecoration:"underline",textUnderlineOffset:"2px"}}>
          Open a free bank account →
        </Link>
      </div>

      {/* Main nav */}
      <header style={{
        position:"sticky",top:0,zIndex:50,
        background:"rgba(255,255,255,0.95)",
        backdropFilter:"blur(12px)",
        borderBottom:"1px solid #e8e8f0"
      }}>
        <div className="container-narrow" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 1.25rem"}}>
          {/* Logo */}
          <Link href="/" style={{display:"flex",alignItems:"center",gap:"10px",textDecoration:"none",fontFamily:"var(--font-display)",fontWeight:800,fontSize:"18px"}}>
            <div style={{
              width:"36px",height:"36px",borderRadius:"10px",background:"#E63946",
              display:"flex",alignItems:"center",justifyContent:"center",
              color:"#fff",fontSize:"15px",fontWeight:900,flexShrink:0
            }}>S</div>
            <span style={{color:"#1D3557"}}>Start</span>
            <span style={{color:"#1c5fe6"}}>in</span>
            <span style={{color:"#1D3557"}}>Germany</span>
          </Link>

          {/* Desktop nav */}
          <nav style={{display:"flex",alignItems:"center",gap:"2px"}}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize:"13.5px",
                  fontWeight: pathname === l.href ? 700 : 500,
                  color: pathname === l.href ? "#1c5fe6" : "#555570",
                  padding:"7px 12px",
                  borderRadius:"10px",
                  background: pathname === l.href ? "#f0f4ff" : "transparent",
                  textDecoration:"none",
                  transition:"all 0.15s",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{background:"none",border:"none",cursor:"pointer",padding:"8px",color:"#555"}}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open
                ? <path d="M18 6L6 18M6 6l12 12"/>
                : <path d="M3 12h18M3 6h18M3 18h18"/>
              }
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div style={{borderTop:"1px solid #ebebf0",background:"#fff",padding:"8px 16px 16px"}}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display:"block",padding:"10px 14px",borderRadius:"12px",
                  fontSize:"14px",fontWeight: pathname===l.href ? 600 : 400,
                  color: pathname===l.href ? "#1c5fe6" : "#444",
                  background: pathname===l.href ? "#f0f4ff" : "transparent",
                  textDecoration:"none",marginBottom:"2px"
                }}
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
