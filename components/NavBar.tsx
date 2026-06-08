"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect, useRef } from "react";

const PD = '"Playfair Display",Georgia,serif';
const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/study", label: "Study" },
  { href: "/visa", label: "Visa & Residence" },
  { href: "/living", label: "Living" },
  { href: "/finances", label: "💳 Banking" },
  { href: "/service", label: "Services" },
  { href: "/appointment", label: "Appointments" },
  { href: "/consultancy", label: "Consultancy" },
];

const destinations = [
  { href: "/visa", flag: "🇩🇪", name: "Germany", sub: "Live & updated 2026", live: true },
  { href: "/", flag: "🇮🇹", name: "Italy", sub: "Coming Q3 2026", live: false },
  { href: "/", flag: "🇸🇪", name: "Sweden", sub: "Coming Q4 2026", live: false },
  { href: "/", flag: "🇬🇧", name: "UK", sub: "Coming 2027", live: false },
];

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDestOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* Announcement */}
      <div className="announce">
        🌍 Trusted by <strong style={{color:"#FCD34D"}}>50,000+</strong> South Asians &nbsp;·&nbsp;
        🇵🇰 Pakistan &nbsp;·&nbsp; 🇮🇳 India &nbsp;·&nbsp; 🇧🇩 Bangladesh &nbsp;·&nbsp; 🇦🇫 Afghanistan &nbsp;·&nbsp;
        <Link href="/consultancy" style={{color:"#FCD34D",fontWeight:700,textDecoration:"underline",textUnderlineOffset:"2px"}}>Book free consultation →</Link>
      </div>

      <header style={{
        position:"sticky",top:0,zIndex:100,
        background:"rgba(255,255,255,0.98)",
        backdropFilter:"blur(20px)",
        WebkitBackdropFilter:"blur(20px)",
        borderBottom:"1px solid #E5E7EB",
        boxShadow:"0 2px 16px rgba(0,0,0,0.06)"
      }}>
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",height:"68px",gap:"16px"}}>

          {/* Logo */}
          <Link href="/" style={{display:"flex",alignItems:"center",gap:"11px",textDecoration:"none",flexShrink:0}}>
            <div style={{width:"40px",height:"40px",borderRadius:"12px",background:"linear-gradient(135deg,#DC2626,#991B1B)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(220,38,38,0.4)"}}>
              <span style={{fontFamily:PD,fontWeight:900,fontSize:"18px",color:"#fff"}}>V</span>
            </div>
            <div>
              <div style={{fontFamily:PD,fontWeight:900,fontSize:"20px",color:"#0B1D3A",letterSpacing:"-0.02em",lineHeight:1}}>VisaVista</div>
              <div style={{fontSize:"9.5px",fontWeight:600,color:"#9CA3AF",letterSpacing:"0.08em",textTransform:"uppercase"}}>Europe Immigration Guide</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="vv-desktop-nav" style={{display:"flex",alignItems:"center",gap:"2px",flex:1,justifyContent:"center"}}>
            <Link href="/" className={`navlink${pathname==="/"?" active":""}`}>Home</Link>

            {/* Destinations dropdown */}
            <div ref={dropRef} style={{position:"relative"}}>
              <button
                onClick={()=>setDestOpen(!destOpen)}
                style={{fontFamily:"Inter,ui-sans-serif",fontSize:"14px",fontWeight:600,color: destOpen?"#DC2626":"#374151",padding:"8px 12px",borderRadius:"10px",background:destOpen?"#FEF2F2":"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"5px",transition:"all .15s"}}
              >
                Destinations
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{transition:"transform .2s",transform:destOpen?"rotate(180deg)":"rotate(0deg)"}}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              {destOpen && (
                <div style={{position:"absolute",top:"calc(100% + 8px)",left:0,background:"#fff",borderRadius:"18px",border:"1px solid #E5E7EB",boxShadow:"0 20px 56px rgba(0,0,0,0.12)",padding:"8px",minWidth:"230px",zIndex:200}}>
                  {destinations.map(c=>(
                    <Link key={c.name} href={c.href}
                      onClick={()=>setDestOpen(false)}
                      style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",borderRadius:"12px",textDecoration:"none",color:"inherit",transition:"background .15s"}}
                      onMouseOver={e=>(e.currentTarget.style.background="#F9FAFB")}
                      onMouseOut={e=>(e.currentTarget.style.background="transparent")}
                    >
                      <span style={{fontSize:"26px"}}>{c.flag}</span>
                      <div style={{flex:1}}>
                        <div style={{fontWeight:700,fontSize:"14px",color:"#111827"}}>{c.name}</div>
                        <div style={{fontSize:"11.5px",color:"#9CA3AF"}}>{c.sub}</div>
                      </div>
                      {c.live && <span style={{background:"#ECFDF5",color:"#065F46",fontSize:"10px",fontWeight:700,padding:"2px 8px",borderRadius:"999px",border:"1px solid #6EE7B7"}}>Live</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[{href:"/work",l:"Work"},{href:"/study",l:"Study"},{href:"/finances",l:"💳 Banking"},{href:"/appointment",l:"Appointments"},{href:"/service",l:"Services"}].map(n=>(
              <Link key={n.href} href={n.href} className={`navlink${pathname===n.href?" active":""}`}>{n.l}</Link>
            ))}
          </nav>

          {/* Right side */}
          <div style={{display:"flex",alignItems:"center",gap:"10px",flexShrink:0}}>
            <Link href="/consultancy" className="btn btn-primary btn-sm vv-desktop-nav" style={{display:"inline-flex"}}>
              📅 Free Consultation
            </Link>
            <button
              className="vv-mobile-btn"
              onClick={()=>setMobileOpen(!mobileOpen)}
              style={{background:"none",border:"1.5px solid #E5E7EB",cursor:"pointer",padding:"9px 10px",borderRadius:"10px",color:"#555",display:"flex",alignItems:"center"}}
              aria-label="Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {mobileOpen?<path d="M18 6L6 18M6 6l12 12"/>:<path d="M3 12h18M3 6h18M3 18h18"/>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div style={{borderTop:"1px solid #E5E7EB",background:"#fff",padding:"12px 16px 20px"}}>
            {links.map(l=>(
              <Link key={l.href} href={l.href} onClick={()=>setMobileOpen(false)} style={{
                display:"block",padding:"11px 14px",borderRadius:"12px",
                fontSize:"14px",fontWeight:pathname===l.href?700:500,
                color:pathname===l.href?"#DC2626":"#111827",
                background:pathname===l.href?"#FEF2F2":"transparent",
                textDecoration:"none",marginBottom:"2px"
              }}>{l.label}</Link>
            ))}
            <Link href="/consultancy" onClick={()=>setMobileOpen(false)} className="btn btn-primary" style={{width:"100%",justifyContent:"center",marginTop:"10px",display:"flex"}}>
              📅 Book Free Consultation
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
