"use client";
import { useState } from "react";
import NewsWidget from "@/components/NewsWidget";
import Link from "next/link";

const PD = '"Playfair Display",Georgia,serif';
const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';

const COUNTRIES = [
  { id:"germany",   flag:"🇩🇪", name:"Germany",   color:"#DC2626" },
  { id:"italy",     flag:"🇮🇹", name:"Italy",     color:"#059669" },
  { id:"sweden",    flag:"🇸🇪", name:"Sweden",    color:"#1D4ED8" },
  { id:"uk",        flag:"🇬🇧", name:"UK",        color:"#7C3AED" },
  { id:"canada",    flag:"🇨🇦", name:"Canada",    color:"#D97706" },
  { id:"australia", flag:"🇦🇺", name:"Australia", color:"#0D9488" },
  { id:"spain",     flag:"🇪🇸", name:"Spain",     color:"#EC4899" },
];

export default function NewsPage() {
  const [active, setActive] = useState("germany");
  const ac = COUNTRIES.find(c=>c.id===active)!;

  return (
    <div style={{background:"#F9FAFB",minHeight:"100vh",fontFamily:IN}}>
      {/* Header */}
      <div style={{background:"linear-gradient(135deg,#0B1D3A,#1E3A5F)",padding:"60px 1.5rem 40px"}}>
        <div style={{maxWidth:"900px",margin:"0 auto"}}>
          <span style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",color:"#FCD34D",display:"block",marginBottom:"10px"}}>📰 Immigration Updates</span>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2rem,5vw,3rem)",fontWeight:900,color:"#fff",marginBottom:"12px",lineHeight:1.1}}>
            Latest visa & immigration news
          </h1>
          <p style={{fontSize:"16px",color:"rgba(255,255,255,.65)",maxWidth:"560px",lineHeight:1.75}}>
            Real-time updates on visa rules, salary thresholds, quota openings, and law changes across all 7 destinations.
          </p>
          {/* Country tabs */}
          <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"28px"}}>
            {COUNTRIES.map(c=>(
              <button key={c.id} onClick={()=>setActive(c.id)}
                style={{display:"flex",alignItems:"center",gap:"6px",padding:"8px 16px",borderRadius:"20px",border:"none",cursor:"pointer",fontWeight:700,fontSize:"13px",fontFamily:IN,transition:"all .15s",
                  background:active===c.id?"#fff":active===c.id?"#fff":"rgba(255,255,255,.12)",
                  color:active===c.id?c.color:"rgba(255,255,255,.8)"}}>
                {c.flag} {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{maxWidth:"900px",margin:"0 auto",padding:"32px 1.5rem"}}>
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"28px"}}>
          {/* News feed */}
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"}}>
              <span style={{fontSize:"24px"}}>{ac.flag}</span>
              <h2 style={{fontFamily:PD,fontSize:"22px",fontWeight:800,color:"#0B1D3A",margin:0}}>{ac.name} — Latest Updates</h2>
              <span style={{fontSize:"11px",fontWeight:700,padding:"3px 8px",borderRadius:"4px",background:"#FEF3C7",color:"#92400E"}}>2026</span>
            </div>
            <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"16px",padding:"8px 20px 0"}}>
              <NewsWidget country={active} />
            </div>
          </div>

          {/* Sidebar */}
          <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            {/* Quick links */}
            <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"14px",padding:"16px 18px"}}>
              <h3 style={{fontWeight:800,fontSize:"14px",marginBottom:"12px",color:"#0B1D3A"}}>🔗 Quick links — {ac.name}</h3>
              <div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
                {active==="germany"&&[
                  {l:"Apply for Opportunity Card",href:"/visa"},
                  {l:"Find a job",href:"/work"},
                  {l:"Book embassy appointment",href:"/appointment"},
                  {l:"Open German bank account",href:"/finances"},
                ].map(k=>(
                  <Link key={k.l} href={k.href} style={{fontSize:"13px",color:ac.color,fontWeight:600,textDecoration:"none",padding:"6px 0",borderBottom:"1px solid #F9FAFB"}}>→ {k.l}</Link>
                ))}
                {active!=="germany"&&[
                  {l:`${ac.name} visa guide`,href:`/${active==="uk"?"uk":active}`},
                  {l:"Free consultation",href:"/consultancy"},
                  {l:"WhatsApp us",href:"https://wa.me/4915906171828"},
                ].map(k=>(
                  <a key={k.l} href={k.href} style={{fontSize:"13px",color:ac.color,fontWeight:600,textDecoration:"none",padding:"6px 0",borderBottom:"1px solid #F9FAFB"}}>→ {k.l}</a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div style={{background:"linear-gradient(135deg,#0B1D3A,#1E3A5F)",borderRadius:"14px",padding:"18px"}}>
              <p style={{fontSize:"13px",fontWeight:800,color:"#fff",marginBottom:"6px"}}>📱 Get personalised advice</p>
              <p style={{fontSize:"12px",color:"rgba(255,255,255,.6)",lineHeight:1.6,marginBottom:"12px"}}>Our immigration specialists answer questions for {ac.name} applications daily.</p>
              <a href="https://wa.me/4915906171828?text=Hi! I want to move to ${ac.name} and need help." target="_blank" rel="noopener"
                style={{display:"block",background:"#25D366",color:"#fff",padding:"10px 14px",borderRadius:"8px",fontWeight:700,fontSize:"13px",textAlign:"center",textDecoration:"none"}}>
                WhatsApp Free Consult →
              </a>
            </div>

            {/* Newsletter */}
            <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"14px",padding:"16px 18px"}}>
              <p style={{fontWeight:800,fontSize:"14px",marginBottom:"6px",color:"#0B1D3A"}}>📬 Get updates by email</p>
              <p style={{fontSize:"12px",color:"#6B7280",marginBottom:"10px"}}>Weekly immigration news digest for South Asians.</p>
              <Link href="/" style={{display:"block",background:"#DC2626",color:"#fff",padding:"9px 14px",borderRadius:"8px",fontWeight:700,fontSize:"13px",textAlign:"center",textDecoration:"none"}}>
                Subscribe free →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
