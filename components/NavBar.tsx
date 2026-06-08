"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  {
    label: "Destinations", children: [
      { href: "/visa", label: "🇩🇪 Germany", sub: "Visas, Blue Card, Jobs" },
      { href: "/", label: "🇮🇹 Italy", sub: "Coming soon" },
      { href: "/", label: "🇸🇪 Sweden", sub: "Coming soon" },
      { href: "/", label: "🇬🇧 United Kingdom", sub: "Coming soon" },
    ]
  },
  { href: "/work", label: "Work" },
  { href: "/study", label: "Study" },
  { href: "/finances", label: "Banking" },
  { href: "/service", label: "Services" },
  { href: "/consultancy", label: "Consultancy" },
];

const D = '"Playfair Display",Georgia,serif';

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      {/* Announcement */}
      <div className="announce">
        🌍&nbsp; Trusted by <strong style={{color:"#FCD34D"}}>50,000+</strong> South Asians &nbsp;·&nbsp;
        🇵🇰 Pakistan &nbsp;·&nbsp; 🇮🇳 India &nbsp;·&nbsp; 🇧🇩 Bangladesh &nbsp;·&nbsp; 🇦🇫 Afghanistan &nbsp;·&nbsp;
        <Link href="/consultancy" style={{color:"#FCD34D",fontWeight:700,textDecoration:"underline",textUnderlineOffset:"2px"}}>Book free consultation →</Link>
      </div>

      <header style={{position:"sticky",top:0,zIndex:100,background:"rgba(255,255,255,.98)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:"1px solid #E5E7EB",boxShadow:"0 2px 16px rgba(0,0,0,.06)"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",height:"68px"}}>

          {/* Logo */}
          <Link href="/" style={{display:"flex",alignItems:"center",gap:"11px",textDecoration:"none",flexShrink:0}}>
            <div style={{width:"40px",height:"40px",borderRadius:"12px",background:"linear-gradient(135deg,#DC2626,#991B1B)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(220,38,38,.4)"}}>
              <span style={{fontFamily:D,fontWeight:900,fontSize:"18px",color:"#fff",letterSpacing:"-0.02em"}}>V</span>
            </div>
            <div>
              <div style={{fontFamily:D,fontWeight:900,fontSize:"20px",color:"#0B1D3A",letterSpacing:"-0.02em",lineHeight:1}}>VisaVista</div>
              <div style={{fontSize:"9.5px",fontWeight:600,color:"#9CA3AF",letterSpacing:"0.08em",textTransform:"uppercase"}}>Europe Immigration Guide</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{display:"flex",alignItems:"center",gap:"2px"}} className="vv-desktop-nav">
            <Link href="/" className={`navlink${pathname==="/"?" active":""}`}>Home</Link>

            {/* Destinations dropdown */}
            <div style={{position:"relative"}} onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
              <button style={{fontFamily:"inherit",fontSize:"14px",fontWeight:600,color:"#374151",padding:"8px 12px",borderRadius:"10px",background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"5px",transition:"all .15s"}}
                className="navlink">
                Destinations
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{transition:"transform .2s",transform:dropdown?"rotate(180deg)":"none"}}><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {dropdown && (
                <div style={{position:"absolute",top:"calc(100% + 4px)",left:0,background:"#fff",borderRadius:"16px",border:"1px solid #E5E7EB",boxShadow:"0 20px 56px rgba(0,0,0,.12)",padding:"8px",minWidth:"220px",zIndex:200}}>
                  {[
                    {href:"/visa",flag:"🇩🇪",name:"Germany",sub:"Visas, Blue Card, Jobs",live:true},
                    {href:"/",flag:"🇮🇹",name:"Italy",sub:"Coming soon",live:false},
                    {href:"/",flag:"🇸🇪",name:"Sweden",sub:"Coming soon",live:false},
                    {href:"/",flag:"🇬🇧",name:"UK",sub:"Coming soon",live:false},
                  ].map(c=>(
                    <Link key={c.name} href={c.href} style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",borderRadius:"10px",textDecoration:"none",color:"inherit",transition:"background .15s"}}
                      onMouseOver={e=>(e.currentTarget.style.background="#F9FAFB")}
                      onMouseOut={e=>(e.currentTarget.style.background="transparent")}>
                      <span style={{fontSize:"24px"}}>{c.flag}</span>
                      <div>
                        <div style={{fontWeight:700,fontSize:"14px",color:"#111827"}}>{c.name}</div>
                        <div style={{fontSize:"11.5px",color:"#9CA3AF"}}>{c.sub}</div>
                      </div>
                      {c.live && <span style={{marginLeft:"auto",background:"#ECFDF5",color:"#065F46",fontSize:"10px",fontWeight:700,padding:"2px 8px",borderRadius:"999px",border:"1px solid #6EE7B7"}}>Live</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/work"        className={`navlink${pathname==="/work"?" active":""}`}>Work</Link>
            <Link href="/study"       className={`navlink${pathname==="/study"?" active":""}`}>Study</Link>
            <Link href="/finances"    className={`navlink${pathname==="/finances"?" active":""}`}>💳 Banking</Link>
            <Link href="/service"     className={`navlink${pathname==="/service"?" active":""}`}>Services</Link>
          </nav>

          {/* CTA + hamburger */}
          <div style={{display:"flex",alignItems:"center",gap:"10px",flexShrink:0}}>
            <Link href="/consultancy" className="btn btn-primary btn-sm vv-desktop-nav">📅 Free Consultation</Link>
            <button onClick={()=>setOpen(!open)} style={{background:"none",border:"1.5px solid #E5E7EB",cursor:"pointer",padding:"9px 10px",borderRadius:"10px",color:"#555",display:"flex",alignItems:"center"}} aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {open?<path d="M18 6L6 18M6 6l12 12"/>:<path d="M3 12h18M3 6h18M3 18h18"/>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile */}
        {open && (
          <div style={{borderTop:"1px solid #E5E7EB",background:"#fff",padding:"12px 16px 20px"}}>
            {[{href:"/",l:"🏠 Home"},{href:"/visa",l:"🇩🇪 Germany Visa"},{href:"/work",l:"💼 Work"},{href:"/study",l:"🎓 Study"},{href:"/finances",l:"💳 Banking"},{href:"/service",l:"🛠 Services"},{href:"/consultancy",l:"📅 Consultancy"}].map(l=>(
              <Link key={l.href} href={l.href} onClick={()=>setOpen(false)} style={{display:"block",padding:"11px 14px",borderRadius:"12px",fontSize:"14px",fontWeight:600,color:pathname===l.href?"#DC2626":"#111827",background:pathname===l.href?"#FEF2F2":"transparent",textDecoration:"none",marginBottom:"2px"}}>
                {l.l}
              </Link>
            ))}
            <Link href="/consultancy" className="btn btn-primary" style={{width:"100%",justifyContent:"center",marginTop:"10px"}}>📅 Book Free Consultation</Link>
          </div>
        )}
      </header>

      <style>{`
        .vv-desktop-nav { display: flex !important; }
        @media (max-width: 1024px) { .vv-desktop-nav { display: none !important; } }
        @media (min-width: 1025px) { header button[aria-label="Menu"] { display: none !important; } }
      `}</style>
    </>
  );
}
