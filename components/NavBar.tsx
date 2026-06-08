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
        background:"rgba(255,255,255,0.96)",
        backdropFilter:"blur(14px)",
        WebkitBackdropFilter:"blur(14px)",
        borderBottom:"1px solid #e8e8f0",
        boxShadow:"0 1px 8px rgba(0,0,0,0.05)"
      }}>
        <div style={{
          maxWidth:"1100px",margin:"0 auto",padding:"0 1.5rem",
          display:"flex",alignItems:"center",justifyContent:"space-between",
          height:"62px"
        }}>
          {/* Logo */}
          <Link href="/" style={{
            display:"flex",alignItems:"center",gap:"10px",textDecoration:"none",
            fontFamily:'"Syne", ui-sans-serif, system-ui, sans-serif',
            fontWeight:800,fontSize:"18px",flexShrink:0
          }}>
            <div style={{
              width:"36px",height:"36px",borderRadius:"10px",background:"#E63946",
              display:"flex",alignItems:"center",justifyContent:"center",
              color:"#fff",fontSize:"16px",fontWeight:900,flexShrink:0
            }}>S</div>
            <span style={{color:"#1D3557"}}>Start</span>
            <span style={{color:"#1c5fe6",marginLeft:"2px"}}>in</span>
            <span style={{color:"#1D3557",marginLeft:"2px"}}>Germany</span>
          </Link>

          {/* Desktop nav — hidden on mobile */}
          <nav style={{
            display:"flex",alignItems:"center",gap:"2px",
            overflow:"hidden"
          }} className="desktop-nav">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`navlink${pathname === l.href ? " active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              background:"none",border:"1.5px solid #e8e8f0",cursor:"pointer",
              padding:"8px 10px",borderRadius:"10px",color:"#555",
              display:"flex",alignItems:"center",justifyContent:"center",
              flexShrink:0
            }}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              {open
                ? <path d="M18 6L6 18M6 6l12 12"/>
                : <path d="M3 12h18M3 6h18M3 18h18"/>
              }
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div style={{borderTop:"1px solid #ebebf0",background:"#fff",padding:"10px 16px 16px"}}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display:"block",padding:"11px 14px",borderRadius:"12px",
                  fontSize:"14px",fontWeight: pathname===l.href ? 700 : 400,
                  color: pathname===l.href ? "#1c5fe6" : "#333",
                  background: pathname===l.href ? "#f0f4ff" : "transparent",
                  textDecoration:"none",marginBottom:"2px",transition:"background 0.15s"
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Desktop nav CSS — hide on small screens, show on md+ */}
      <style>{`
        .desktop-nav { display: flex !important; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 901px) {
          .desktop-nav + button { display: none !important; }
        }
      `}</style>
    </>
  );
}
