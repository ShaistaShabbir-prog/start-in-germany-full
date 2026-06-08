"use client";
import Link from "next/link";
const PD='"Playfair Display",Georgia,serif';
const IN='"Inter",ui-sans-serif,system-ui,sans-serif';
const HERO="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=85&auto=format&fit=crop";
const WA="https://wa.me/4915906171828?text="+encodeURIComponent("Hi VisaVista! I need help with UK visa.");
const btnP:React.CSSProperties={display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"none",textDecoration:"none",background:"#DC2626",color:"#fff",boxShadow:"0 4px 18px rgba(220,38,38,.35)"};
const btnG:React.CSSProperties={display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"1.5px solid rgba(255,255,255,.3)",textDecoration:"none",background:"rgba(255,255,255,.12)",color:"#fff"};
const wrap:React.CSSProperties={maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem"};
const sec:React.CSSProperties={maxWidth:"1200px",margin:"0 auto",padding:"5rem 1.5rem"};
const eye:React.CSSProperties={display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",color:"#DC2626",marginBottom:"10px"};
const bar:React.CSSProperties={width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 24px"};
const tick:React.CSSProperties={width:"20px",height:"20px",borderRadius:"50%",background:"#ECFDF5",border:"1.5px solid #6EE7B7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"10px",color:"#059669",marginTop:"1px"};
function CI({children}:{children:React.ReactNode}){return <li style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"10px",listStyle:"none"}}><span style={tick}>✓</span><span style={{fontSize:"13px",color:"#374151",lineHeight:1.6}}>{children}</span></li>}

export default function UKPage(){
  return(
    <div style={{background:"#F9FAFB"}}>
      <section style={{position:"relative",minHeight:"420px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center 40%",filter:"brightness(0.26)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.75))"}}/>
        <div style={{...wrap,position:"relative",zIndex:1,width:"100%",padding:"80px 1.5rem"}}>
          <span style={{...eye,color:"#FCD34D"}}>🇬🇧 UK Visa Guide 2026</span>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2.4rem,5vw,3.8rem)",fontWeight:900,lineHeight:1.08,letterSpacing:"-0.025em",color:"#fff",maxWidth:"720px",marginBottom:"18px"}}>Move to the UK — visas, jobs &amp; life guide 2026</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"600px",lineHeight:1.75,marginBottom:"28px"}}>The UK has a well-established South Asian community and a points-based immigration system that welcomes skilled workers, students and healthcare professionals. Here's everything you need to know.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={btnP}>💬 Get UK visa help →</a>
            <Link href="/consultancy" style={btnG}>📅 Book free consultation</Link>
          </div>
        </div>
      </section>

      <div style={{background:"#0B1D3A"}}>
        <div style={wrap}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
            {[{n:"£26,200",l:"Skilled Worker min. salary 2026"},{n:"1.5M+",l:"Pakistani community in UK"},{n:"5 yrs",l:"To Indefinite Leave to Remain"},{n:"£490",l:"Visa application fee (standard)"}].map((s,i)=>(
              <div key={s.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"1.75rem",color:"#FCD34D"}}>{s.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"3px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section style={sec}>
        <span style={eye}>UK visa pathways</span>
        <h2 style={{fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A"}}>Which UK visa is right for you?</h2>
        <div style={bar}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"22px"}}>
          {[
            {icon:"💼",bg:"#EFF6FF",border:"#BFDBFE",title:"Skilled Worker Visa",badge:"Most popular",
             desc:"The UK's main work visa for skilled professionals. Points-based system — you need 70 points. Job offer from an approved employer (Sponsor Licence), salary ≥ £26,200/year and at least RQF Level 3 skills.",
             points:["Job offer from UK employer with Sponsor Licence (20 pts)","Salary ≥ £26,200/year or job going-rate — whichever is higher (20 pts)","Skill level: RQF Level 3 or above (20 pts)","English language: B1 level minimum (10 pts)","No quota — can apply any time of year","Indefinite Leave to Remain after 5 years"]},
            {icon:"🎓",bg:"#FEF2F2",border:"#FCA5A5",title:"Student Visa (formerly Tier 4)",badge:"World-class education",
             desc:"Study at UK universities — home to Oxford, Cambridge, Imperial, UCL, LSE, Manchester and more. English language requirement (IELTS 5.5–7.0 depending on course).",
             points:["Unconditional offer from a licensed Student sponsor (CAS number)","Sufficient funds: £1,334/month in London, £1,023/month outside London","English: IELTS 5.5–7.0 depending on course level","Graduate Route: 2-year work visa after degree (3 years for PhD)","Can work 20h/week during term, full-time in holidays","Student maintenance loan available for eligible students"]},
            {icon:"🏥",bg:"#ECFDF5",border:"#6EE7B7",title:"Health & Care Worker Visa",badge:"Fast & cheaper",
             desc:"A faster, cheaper version of the Skilled Worker Visa specifically for NHS and care sector workers. Application fee reduced, no Immigration Health Surcharge, priority processing.",
             points:["Job offer from NHS, registered care provider or health employer","Salary: £23,200+ for care workers, higher for NHS clinical staff","No Immigration Health Surcharge (saves £624/year)","Application fee reduced to £247","Huge demand — NHS recruits from Pakistan, India, Bangladesh actively","CQC-registered care employers can also use this route"]},
            {icon:"🌍",bg:"#F5F3FF",border:"#C4B5FD",title:"Graduate Route & Global Talent",badge:"Post-study & top talent",
             desc:"Graduate Route: automatic 2-year work visa after UK degree — any job, any employer, no sponsorship needed. Global Talent: for exceptional researchers, scientists, artists endorsed by a UK body.",
             points:["Graduate Route: available to all UK degree graduates from licensed unis","No job offer, no salary threshold, no sponsorship needed for 2 years","Can switch to Skilled Worker during Graduate Route easily","Global Talent: requires endorsement from UKRI, British Academy, Arts Council etc.","Fast-track to settlement: after 3 years for Global Talent","Highly competitive but no salary threshold for Global Talent"]},
          ].map(v=>(
            <div key={v.title} style={{background:v.bg,border:`1.5px solid ${v.border}`,borderRadius:"20px",padding:"1.75rem"}}>
              <div style={{display:"flex",gap:"12px",alignItems:"flex-start",marginBottom:"14px"}}>
                <span style={{fontSize:"32px",flexShrink:0}}>{v.icon}</span>
                <div>
                  <div style={{fontFamily:PD,fontWeight:800,fontSize:"17px",color:"#0B1D3A",lineHeight:1.25,marginBottom:"7px"}}>{v.title}</div>
                  <span style={{display:"inline-flex",borderRadius:"999px",padding:"3px 10px",fontSize:"11.5px",fontWeight:700,background:"rgba(220,38,38,.1)",color:"#DC2626",border:"1px solid #FCA5A5"}}>{v.badge}</span>
                </div>
              </div>
              <p style={{fontSize:"13.5px",color:"#374151",lineHeight:1.7,marginBottom:"14px"}}>{v.desc}</p>
              <ul style={{listStyle:"none",padding:0}}>
                {v.points.map((p,i)=><CI key={i}>{p}</CI>)}
              </ul>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{...btnP,width:"100%",justifyContent:"center",fontSize:"13px",padding:"11px",marginTop:"14px",display:"flex"}}>Get UK visa help →</a>
            </div>
          ))}
        </div>
      </section>

      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={wrap}>
          <span style={eye}>UK South Asian life</span>
          <h2 style={{fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A",marginBottom:"8px"}}>The UK's South Asian community — the largest outside South Asia</h2>
          <div style={bar}/>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
            {[
              {icon:"🇵🇰",t:"Pakistani community (1.5M+)",d:"Largest outside Pakistan. Birmingham, Bradford, Manchester, London (East End) have huge Pakistani communities. Urdu widely spoken. Mosques, halal restaurants, Pakistani cultural events throughout the year."},
              {icon:"🇮🇳",t:"Indian community (1.8M+)",d:"Second largest Indian diaspora in world. Leicester, Southall (London), Coventry, Manchester. Very established — Diwali celebrated nationally. Strong business and professional networks."},
              {icon:"🇧🇩",t:"Bangladeshi community (600K+)",d:"Tower Hamlets (London) is Bangladesh's largest diaspora hub in the world. Strong community organisations, mosques, Bengali media and cultural events. Curry Mile in Manchester."},
              {icon:"🕌",t:"Muslim life in the UK",d:"3.9M Muslims (6% of UK population). Mosques in every town. Halal food in every supermarket (Tesco, Sainsbury's, Asda). Friday prayers widely accommodated by employers. Ramadan widely respected."},
              {icon:"💰",t:"Salaries & costs",d:"London avg. salary: £42,000. Manchester/Birmingham: £30,000–£38,000. London 1-bed: £1,800–£2,500. Manchester 1-bed: £900–£1,400. Immigration Health Surcharge: £1,035/year (gives full NHS access)."},
              {icon:"🏥",t:"NHS & welfare",d:"Full NHS access after paying Immigration Health Surcharge (IHS). Free GP, hospital care, prescriptions (£9.90 per item). Child benefit: £25/week for first child. Free school for all children."},
            ].map(c=>(
              <div key={c.t} style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"18px",padding:"1.5rem"}}>
                <div style={{fontSize:"32px",marginBottom:"12px"}}>{c.icon}</div>
                <div style={{fontFamily:PD,fontWeight:700,fontSize:"16px",color:"#0B1D3A",marginBottom:"8px"}}>{c.t}</div>
                <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.65}}>{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{...wrap,background:"linear-gradient(135deg,#DC2626,#991B1B)",borderRadius:"28px",padding:"52px",textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:"-60px",right:"-60px",width:"250px",height:"250px",borderRadius:"50%",background:"rgba(255,255,255,.07)"}}/>
          <h2 style={{fontFamily:PD,fontWeight:800,color:"#fff",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",marginBottom:"12px",position:"relative",zIndex:1}}>Ready to move to the UK?</h2>
          <p style={{color:"rgba(255,255,255,.72)",fontSize:"16px",marginBottom:"26px",position:"relative",zIndex:1}}>Book a free 30-min consultation. We know the UK immigration system inside out — Skilled Worker, Student, Health & Care routes and more.</p>
          <div style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",position:"relative",zIndex:1}}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{...btnG,background:"#25D366",border:"none",fontWeight:800}}>💬 WhatsApp now</a>
            <Link href="/consultancy" style={{...btnG,background:"#fff",color:"#DC2626",border:"none",fontWeight:800}}>📅 Book free call</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
