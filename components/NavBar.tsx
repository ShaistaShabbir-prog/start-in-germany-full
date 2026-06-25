"use client";
// Multi-language support added
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const PD = '"Playfair Display",Georgia,serif';
const WA = "https://wa.me/XXXXXXXXXX?text=Hello%20VisaVista!%20I%20need%20immigration%20help.";

const destinations = [
  { href:"/visa",      flag:"🇩🇪", name:"Germany",        sub:"EU Blue Card · Opportunity Card", live:true },
  { href:"/italy",     flag:"🇮🇹", name:"Italy",          sub:"Decreto Flussi 2026", live:true },
  { href:"/sweden",    flag:"🇸🇪", name:"Sweden",         sub:"Work permit · Student visa", live:true },
  { href:"/uk",        flag:"🇬🇧", name:"United Kingdom", sub:"Skilled Worker · Student", live:true },
  { href:"/canada",    flag:"🇨🇦", name:"Canada",         sub:"Express Entry · PNP · Study", live:true },
  { href:"/australia", flag:"🇦🇺", name:"Australia",      sub:"Skilled 189/190 · TSS · Study", live:true },
  { href:"/spain",     flag:"🇪🇸", name:"Spain",          sub:"Digital Nomad · Blue Card", live:true },
  { href:"/malaysia",  flag:"🇲🇾", name:"Malaysia",       sub:"Employment Pass · Student", live:true },
  { href:"/china",     flag:"🇨🇳", name:"China",          sub:"Z Work Visa · X1/X2 Study", live:true },
];

const links = [
  {href:"/",l:"Home"},{href:"/work",l:"Work"},{href:"/study",l:"Study"},
  {href:"/finances",l:"💳 Banking"},{href:"/appointment",l:"Appointments"},
  {href:"/blog",l:"Blog"},{href:"/service",l:"Services"},{href:"/consultancy",l:"Consultancy"},{href:"/privacy-policy",l:"Privacy"},{href:"/affiliate-disclosure",l:"Affiliates"},
];

const LANG_OPTIONS = [
  {code:"en",label:"🇬🇧 EN"},{code:"de",label:"🇩🇪 DE"},{code:"ar",label:"🇸🇦 AR"},
  {code:"ur",label:"🇵🇰 UR"},{code:"hi",label:"🇮🇳 HI"},{code:"bn",label:"🇧🇩 BN"},
  {code:"tr",label:"🇹🇷 TR"},{code:"ru",label:"🇷🇺 RU"},{code:"fr",label:"🇫🇷 FR"},
  {code:"it",label:"🇮🇹 IT"},
];

export default function NavBar(){
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const h=(e:MouseEvent)=>{ if(dropRef.current && !dropRef.current.contains(e.target as Node)) setDestOpen(false); };
    document.addEventListener("mousedown",h);
    return ()=>document.removeEventListener("mousedown",h);
  },[]);

  const nl=(href:string):React.CSSProperties=>({
    fontSize:"13.5px",fontWeight:600,
    color:pathname===href?"#DC2626":"#374151",
    padding:"8px 10px",borderRadius:"10px",textDecoration:"none",
    background:pathname===href?"#FEF2F2":"transparent",
    display:"inline-block",whiteSpace:"nowrap" as const,
  });

  return(
    <>
      {/* Announcement bar */}
      <div style={{background:"#0B1D3A",padding:"8px 0",textAlign:"center",fontSize:"12.5px",color:"rgba(255,255,255,.65)"}}>
        🌍 <strong style={{color:"#FCD34D"}}>9 countries</strong>: 🇩🇪 🇮🇹 🇸🇪 🇬🇧 🇨🇦 🇦🇺 🇪🇸 🇲🇾 🇨🇳 &nbsp;·&nbsp;
        🇵🇰 Pakistan · 🇮🇳 India · 🇧🇩 Bangladesh · 🇦🇫 Afghanistan &nbsp;·&nbsp;
        <a href={WA} target="_blank" rel="noopener noreferrer" style={{color:"#25D366",fontWeight:700,textDecoration:"underline",textUnderlineOffset:"2px"}}>💬 WhatsApp [CONTACT FORM]</a>
      </div>

      <header style={{position:"sticky",top:0,zIndex:100,background:"rgba(255,255,255,.98)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:"1px solid #E5E7EB",boxShadow:"0 2px 16px rgba(0,0,0,.06)"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",height:"68px",gap:"12px"}}>

          {/* Logo */}
          <Link href="/" style={{display:"flex",alignItems:"center",gap:"11px",textDecoration:"none",flexShrink:0}}>
            <div style={{width:"40px",height:"40px",borderRadius:"12px",background:"linear-gradient(135deg,#DC2626,#991B1B)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(220,38,38,.4)"}}>
              <span style={{fontFamily:PD,fontWeight:900,fontSize:"18px",color:"#fff"}}>V</span>
            </div>
            <div>
              <div style={{fontFamily:PD,fontWeight:900,fontSize:"20px",color:"#0B1D3A",letterSpacing:"-0.02em",lineHeight:1}}>VisaVista</div>
              <div style={{fontSize:"9px",fontWeight:600,color:"#9CA3AF",letterSpacing:"0.06em",textTransform:"uppercase"}}>DE·IT·SE·UK·CA·AU·ES·MY·CN</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{display:"flex",alignItems:"center",gap:"2px",flex:1,justifyContent:"center"}} className="vv-desktop-nav">
            <Link href="/" style={nl("/")}>Home</Link>

            {/* Destinations dropdown */}
            <div ref={dropRef} style={{position:"relative"}}>
              <button onClick={()=>setDestOpen(!destOpen)} style={{fontFamily:"Inter,ui-sans-serif",fontSize:"13.5px",fontWeight:600,color:destOpen?"#DC2626":"#374151",padding:"8px 10px",borderRadius:"10px",background:destOpen?"#FEF2F2":"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"}}>
                Destinations
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{transform:destOpen?"rotate(180deg)":"none",transition:"transform .2s"}}><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {destOpen && (
                <div style={{position:"absolute",top:"calc(100% + 8px)",left:0,background:"#fff",borderRadius:"18px",border:"1px solid #E5E7EB",boxShadow:"0 20px 56px rgba(0,0,0,.12)",padding:"8px",minWidth:"250px",zIndex:200}}>
                  {destinations.map(c=>(
                    <Link key={c.name} href={c.href} onClick={()=>setDestOpen(false)} style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",borderRadius:"12px",textDecoration:"none",color:"inherit"}}>
                      <span style={{fontSize:"22px"}}>{c.flag}</span>
                      <div style={{flex:1}}>
                        <div style={{fontWeight:700,fontSize:"13.5px",color:"#111827"}}>{c.name}</div>
                        <div style={{fontSize:"11px",color:"#9CA3AF"}}>{c.sub}</div>
                      </div>
                      <span style={{background:"#ECFDF5",color:"#065F46",fontSize:"9px",fontWeight:700,padding:"2px 7px",borderRadius:"999px",border:"1px solid #6EE7B7",flexShrink:0}}>Live</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[{href:"/work",l:"Work"},{href:"/study",l:"Study"},{href:"/finances",l:"💳 Banking"},{href:"/blog",l:"Blog"}].map(n=>(
              <Link key={n.href} href={n.href} style={nl(n.href)}>{n.l}</Link>
            ))}
          <a href="/scholarships" style={{marginLeft:"8px",padding:"6px 12px",background:"rgba(255,204,2,.12)",border:"1px solid rgba(255,204,2,.3)",borderRadius:"8px",color:"#fbbf24",fontWeight:700,fontSize:".78rem",textDecoration:"none"}}>🏆 Scholarships</a>
      </nav>

          {/* Right buttons */}
          <div style={{display:"flex",alignItems:"center",gap:"8px",flexShrink:0}}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="vv-desktop-nav" style={{display:"inline-flex",alignItems:"center",gap:"6px",padding:"9px 14px",borderRadius:"10px",background:"#25D366",color:"#fff",textDecoration:"none",fontSize:"13px",fontWeight:700}}>💬 WhatsApp</a>
            <Link href="/consultancy" className="vv-desktop-nav" style={{display:"inline-flex",alignItems:"center",gap:"6px",padding:"9px 16px",borderRadius:"10px",background:"#DC2626",color:"#fff",textDecoration:"none",fontSize:"13px",fontWeight:700,boxShadow:"0 4px 12px rgba(220,38,38,.3)"}}>📅 Free Call</Link>
            <button onClick={()=>setMobileOpen(!mobileOpen)} className="vv-mobile-btn" style={{background:"none",border:"1.5px solid #E5E7EB",cursor:"pointer",padding:"9px 10px",borderRadius:"10px",color:"#555",display:"flex",alignItems:"center"}} aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">{mobileOpen?<path d="M18 6L6 18M6 6l12 12"/>:<path d="M3 12h18M3 6h18M3 18h18"/>}</svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen&&(
          <div style={{borderTop:"1px solid #E5E7EB",background:"#fff",padding:"12px 16px 20px"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px",marginBottom:"12px"}}>
              {destinations.map(c=>(
                <Link key={c.name} href={c.href} onClick={()=>setMobileOpen(false)} style={{display:"flex",alignItems:"center",gap:"8px",padding:"9px 12px",borderRadius:"10px",textDecoration:"none",color:"#111827",background:"#F9FAFB",border:"1px solid #E5E7EB",fontSize:"13px",fontWeight:600}}>
                  <span style={{fontSize:"18px"}}>{c.flag}</span>{c.name}
                </Link>
              ))}
            </div>
            {links.map(l=>(
              <Link key={l.href} href={l.href} onClick={()=>setMobileOpen(false)} style={{display:"block",padding:"10px 14px",borderRadius:"12px",fontSize:"14px",fontWeight:pathname===l.href?700:500,color:pathname===l.href?"#DC2626":"#111827",background:pathname===l.href?"#FEF2F2":"transparent",textDecoration:"none",marginBottom:"2px"}}>{l.l}</Link>
            ))}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginTop:"12px"}}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",padding:"11px",borderRadius:"12px",background:"#25D366",color:"#fff",textDecoration:"none",fontSize:"13px",fontWeight:700}}>💬 WhatsApp</a>
              <Link href="/consultancy" onClick={()=>setMobileOpen(false)} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",padding:"11px",borderRadius:"12px",background:"#DC2626",color:"#fff",textDecoration:"none",fontSize:"13px",fontWeight:700}}>📅 Free Consultation</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
