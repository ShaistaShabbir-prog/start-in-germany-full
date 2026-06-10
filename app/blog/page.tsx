"use client";
import Link from "next/link";
import { useState } from "react";
import NewsWidget from "@/components/NewsWidget";

const PD = '"Playfair Display",Georgia,serif';
const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';
const WA = "https://wa.me/4915906171828?text="+encodeURIComponent("Hi VisaVista!");

const POSTS = [
  {slug:"germany-opportunity-card-pakistan-india",cat:"Visa 🇩🇪",title:"Germany Opportunity Card 2026: Complete guide for Pakistan & India",date:"Jun 2026",read:"8 min",desc:"The Chancenkarte lets you enter Germany WITHOUT a job offer. Here's exactly how to apply from Pakistan and India, what documents you need, and how the points system works.",img:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=70&auto=format&fit=crop",hot:true},
  {slug:"commerzbank-wise-banking-germany-newcomers",cat:"Banking 💳",title:"Best bank accounts for Germany newcomers 2026 — Wise vs Commerzbank vs Advanzia",date:"Jun 2026",read:"6 min",desc:"You need a German IBAN before you arrive. We compare Wise, Commerzbank (50€ bonus) and Advanzia Mastercard Gold — which you need and which to open first.",img:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=70&auto=format&fit=crop",hot:true},
  {slug:"german-embassy-appointment-pakistan-2026",cat:"Appointment 🗓️",title:"How to get a German embassy appointment from Pakistan in 2026",date:"May 2026",read:"7 min",desc:"The new CSP portal, click-day slots and how to monitor Islamabad & Karachi embassy availability. Everything Pakistani applicants need to know.",img:"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=70&auto=format&fit=crop",hot:true},
  {slug:"study-germany-free-south-asian-guide",cat:"Study 🎓",title:"Study in Germany for free: complete guide for Pakistani, Indian & Bangladeshi students",date:"May 2026",read:"10 min",desc:"Most German public universities are tuition-free. APS certificate, blocked accounts, language requirements — everything you need step by step.",img:"https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=70&auto=format&fit=crop",hot:false},
  {slug:"eu-blue-card-salary-2026",cat:"Visa 🇩🇪",title:"EU Blue Card 2026: new €50,700 salary threshold explained",date:"Apr 2026",read:"5 min",desc:"Germany raised the Blue Card minimum salary threshold in 2026. Here's what changed, which shortage roles qualify for the lower €45,934 threshold, and how to apply.",img:"https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&q=70&auto=format&fit=crop",hot:false},
  {slug:"italy-decreto-flussi-2026-pakistan",cat:"Italy 🇮🇹",title:"Decreto Flussi 2026: how to get an Italian work permit from Pakistan",date:"Feb 2026",read:"7 min",desc:"Italy opened 452,000 work permit slots in 2026. Pakistan is a priority country. Here's how the click-day works and how to get your employer to apply for you.",img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=70&auto=format&fit=crop",hot:false},
  {slug:"canada-express-entry-south-asian-guide",cat:"Canada 🇨🇦",title:"Canada Express Entry 2026: complete guide for Pakistan, India & Bangladesh",date:"Jan 2026",read:"9 min",desc:"Express Entry, PNP, Study+PGWP — Canada's PR pathways explained for South Asians. Current CRS scores, processing times, and which route suits your profile.",img:"https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&q=70&auto=format&fit=crop",hot:false},
  {slug:"australia-skilled-visa-189-190-guide",cat:"Australia 🇦🇺",title:"Australia Skilled Visa (189/190) for South Asians: points, occupations & process 2026",date:"Jan 2026",read:"8 min",desc:"Australia's points-based SkillSelect system for Pakistani, Indian and Bangladeshi professionals. How to calculate your score, which occupation list to check, and how to apply.",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70&auto=format&fit=crop",hot:false},
  {slug:"spain-digital-nomad-visa-south-asia",cat:"Spain 🇪🇸",title:"Spain Digital Nomad Visa 2026: the guide for remote workers from South Asia",date:"Dec 2025",read:"6 min",desc:"Spain's Digital Nomad Visa requires €2,334/month income and lets you live in Spain for up to 5 years. Full guide for Pakistanis and Indians.",img:"https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=70&auto=format&fit=crop",hot:false},
];

const CATS = ["All","Visa 🇩🇪","Study 🎓","Banking 💳","Italy 🇮🇹","Canada 🇨🇦","Australia 🇦🇺","Spain 🇪🇸","Appointment 🗓️"];

export default function BlogPage() {
  const [cat, setCat] = useState("All");
  const [activeNews, setActiveNews] = useState("germany");
  const filtered = cat==="All" ? POSTS : POSTS.filter(p=>p.cat===cat);

  return (
    <div style={{background:"#F9FAFB"}}>
      {/* Header */}
      <div style={{background:"#0B1D3A",padding:"72px 1.5rem 48px"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <span style={{display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",color:"#FCD34D",marginBottom:"10px"}}>📖 VisaVista Blog & Updates</span>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2.2rem,5vw,3.2rem)",fontWeight:900,color:"#fff",marginBottom:"14px",lineHeight:1.1}}>
            Guides, tips & live visa updates
          </h1>
          <p style={{fontSize:"16px",color:"rgba(255,255,255,.7)",maxWidth:"560px",lineHeight:1.75}}>
            Practical advice updated regularly — plus live news on law changes, salary thresholds, and embassy processes.
          </p>
          <Link href="/news" style={{display:"inline-flex",alignItems:"center",gap:"6px",marginTop:"18px",padding:"10px 20px",background:"#DC2626",color:"#fff",borderRadius:"10px",fontWeight:700,fontSize:"13px",textDecoration:"none"}}>
            📰 See all live updates →
          </Link>
        </div>
      </div>

      <div style={{maxWidth:"1200px",margin:"0 auto",padding:"32px 1.5rem"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 320px",gap:"40px"}}>

          {/* Left — articles */}
          <div>
            {/* Category filter */}
            <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"28px"}}>
              {CATS.map(c=>(
                <button key={c} onClick={()=>setCat(c)}
                  style={{padding:"7px 14px",borderRadius:"20px",border:cat===c?"none":"1px solid #E5E7EB",background:cat===c?"#DC2626":"#fff",color:cat===c?"#fff":"#374151",fontWeight:cat===c?700:500,fontSize:"12px",cursor:"pointer",fontFamily:IN}}>
                  {c}
                </button>
              ))}
            </div>

            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"20px"}}>
              {filtered.map(p=>(
                <article key={p.slug} style={{background:"#fff",borderRadius:"14px",overflow:"hidden",border:"1px solid #E5E7EB",transition:"box-shadow .2s,transform .2s"}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 8px 28px rgba(0,0,0,.12)";(e.currentTarget as HTMLElement).style.transform="translateY(-2px)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow="none";(e.currentTarget as HTMLElement).style.transform="none";}}>
                  <div style={{position:"relative"}}>
                    <img src={p.img} alt={p.title} style={{width:"100%",height:"160px",objectFit:"cover",display:"block"}} loading="lazy"/>
                    {p.hot&&<span style={{position:"absolute",top:"10px",left:"10px",background:"#DC2626",color:"#fff",padding:"3px 8px",borderRadius:"4px",fontSize:"10px",fontWeight:800,letterSpacing:"0.05em"}}>HOT</span>}
                    <span style={{position:"absolute",top:"10px",right:"10px",background:"rgba(0,0,0,.65)",color:"#fff",padding:"3px 8px",borderRadius:"4px",fontSize:"10px",fontWeight:700}}>{p.cat}</span>
                  </div>
                  <div style={{padding:"16px"}}>
                    <h3 style={{fontFamily:PD,fontSize:"15px",fontWeight:800,lineHeight:1.4,color:"#0B1D3A",marginBottom:"8px"}}>{p.title}</h3>
                    <p style={{fontSize:"12px",color:"#6B7280",lineHeight:1.65,marginBottom:"12px"}}>{p.desc}</p>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                      <span style={{fontSize:"11px",color:"#9CA3AF"}}>{p.date} · {p.read}</span>
                      <Link href={`/blog/${p.slug}`} style={{fontSize:"12px",fontWeight:700,color:"#DC2626",textDecoration:"none"}}>Read →</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right sidebar — live news */}
          <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"14px",padding:"16px 18px",position:"sticky",top:"80px"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"}}>
                <h3 style={{fontWeight:800,fontSize:"14px",color:"#0B1D3A",margin:0}}>📰 Live immigration news</h3>
                <Link href="/news" style={{fontSize:"11px",color:"#DC2626",fontWeight:700,textDecoration:"none"}}>All →</Link>
              </div>
              {/* Country picker */}
              <div style={{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"12px"}}>
                {[{id:"germany",f:"🇩🇪"},{id:"italy",f:"🇮🇹"},{id:"sweden",f:"🇸🇪"},{id:"uk",f:"🇬🇧"},{id:"canada",f:"🇨🇦"},{id:"australia",f:"🇦🇺"},{id:"spain",f:"🇪🇸"}].map(c=>(
                  <button key={c.id} onClick={()=>setActiveNews(c.id)}
                    style={{padding:"4px 8px",borderRadius:"6px",border:"none",background:activeNews===c.id?"#0B1D3A":"#F3F4F6",cursor:"pointer",fontSize:"13px"}}>
                    {c.f}
                  </button>
                ))}
              </div>
              <NewsWidget country={activeNews} />
            </div>

            {/* WhatsApp CTA */}
            <div style={{background:"linear-gradient(135deg,#0B1D3A,#1E3A5F)",borderRadius:"14px",padding:"18px"}}>
              <p style={{fontSize:"13px",fontWeight:800,color:"#fff",marginBottom:"6px"}}>💬 Have a specific question?</p>
              <p style={{fontSize:"12px",color:"rgba(255,255,255,.6)",lineHeight:1.6,marginBottom:"12px"}}>Get personalised immigration advice on WhatsApp. Free consultation.</p>
              <a href={WA} target="_blank" rel="noopener" style={{display:"block",background:"#25D366",color:"#fff",padding:"10px",borderRadius:"8px",fontWeight:700,fontSize:"13px",textAlign:"center",textDecoration:"none"}}>
                📱 WhatsApp Free Consult
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
