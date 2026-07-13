"use client";
import Link from "next/link";
const PD='"Playfair Display",Georgia,serif';
const IN='"Inter",ui-sans-serif,system-ui,sans-serif';
const HERO="https://images.unsplash.com/photo-154915906171828-21bda4d32df4?w=1400&q=85&auto=format&fit=crop";
const SYDNEY="https://images.unsplash.com/photo-1524820801657-fd59673fef05?w=1200&q=80&auto=format&fit=crop";
const WA="/contact?text=Hi%20VisaVista!%20I%20need%20help%20with%20Australia%20visa.";

const btnP:React.CSSProperties={display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"none",textDecoration:"none",background:"#DC2626",color:"#fff",boxShadow:"0 4px 18px rgba(220,38,38,.35)"};
const btnG:React.CSSProperties={display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"1.5px solid rgba(255,255,255,.3)",textDecoration:"none",background:"rgba(255,255,255,.12)",color:"#fff"};
const wrap:React.CSSProperties={maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem"};
const sec:React.CSSProperties={maxWidth:"1200px",margin:"0 auto",padding:"5rem 1.5rem"};
const eye:React.CSSProperties={display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",color:"#DC2626",marginBottom:"10px"};
const bar:React.CSSProperties={width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 24px"};
const h2s:React.CSSProperties={fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A"};
const tick:React.CSSProperties={width:"20px",height:"20px",borderRadius:"50%",background:"#ECFDF5",border:"1.5px solid #6EE7B7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"10px",color:"#059669",marginTop:"1px"};
function CI({c}:{c:string}){return <li style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"10px",listStyle:"none"}}><span style={tick}>✓</span><span style={{fontSize:"13px",color:"#374151",lineHeight:1.6}}>{c}</span></li>;}

export default function AustraliaPage(){
  const visas=[
    {icon:"⭐",bg:"#FEF2F2",border:"#FCA5A5",title:"Skilled Independent Visa (subclass 189)",badge:"No sponsorship needed",
     desc:"Australia's points-based permanent visa — no employer or state sponsorship needed. Score 65+ points on the points test, submit an Expression of Interest (EOI) via SkillSelect, and wait for an invitation.",
     pts:["Min. 65 points: Age (max 30), English (max 20), Work experience (max 20), Qualifications (max 20)","IELTS minimum: 6.0 each band (Competent) — 7.0+ adds more points","Occupation must be on the Medium and Long-term Strategic Skills List (MLTSSL)","Current invitation scores: typically 85–90+ for popular occupations","Positive Skills Assessment from relevant assessing authority required","No age limit but must be under 45 at time of invitation"]},
    {icon:"🌏",bg:"#EFF6FF",border:"#BFDBFE",title:"Skilled Nominated Visa (subclass 190)",badge:"State/territory sponsored",
     desc:"Like the 189 but requires nomination by an Australian state or territory. The nomination adds 5 points to your score. Each state has different occupation lists and requirements.",
     pts:["State/territory nomination adds 5 points to your EOI score","Different states have different in-demand occupations","NSW, Victoria, Queensland, WA, SA all have active nomination programs","Some states require you to commit to living there for 2 years","Lower points score needed than 189 for same occupations","Check state websites: migration.nsw.gov.au, liveinvictoria.vic.gov.au etc."]},
    {icon:"💼",bg:"#ECFDF5",border:"#6EE7B7",title:"Employer Sponsored (subclass 482 TSS)",badge:"Employer-sponsored",
     desc:"The Temporary Skills Shortage (TSS) visa allows Australian employers to sponsor foreign workers for up to 4 years. Short-term stream (2yr) and Medium-term stream (4yr, pathway to PR).",
     pts:["Employer must be an approved sponsoring business","Labour Market Testing required (employer advertises role first)","Salary must meet Temporary Skilled Migration Income Threshold (TSMIT): AUD $70,000+","Short-term stream: max 2 years (most occupations)","Medium-term stream: up to 4 years, pathway to ENS 186 PR visa","Skills assessment required for most occupations"]},
    {icon:"🎓",bg:"#FFFBEB",border:"#FCD34D",title:"Student Visa (subclass 500)",badge:"Study → work → PR",
     desc:"Study at Australian universities → Graduate Temporary Visa (subclass 485) for 2–6 years → Skilled visa → PR. One of the most reliable pathways to Australian PR for South Asians.",
     pts:["Confirmation of Enrolment (CoE) from an Australian institution","Proof of funds: AUD $24,505/year (2026)","IELTS 5.5–6.5 depending on course level","Graduate Visa (485): 2 years (bachelor) to 6 years (Masters/PhD)","Can work 48h per fortnight during studies, unlimited in holidays","Study at regional universities: bonus points + extra work rights"]},
    {icon:"🏥",bg:"#F0FDFA",border:"#99F6E4",title:"Healthcare & Nursing Pathways",badge:"Critical shortage",
     desc:"Australia has a severe shortage of nurses, doctors and aged care workers. Multiple dedicated visas and state-specific healthcare streams exist.",
     pts:["Registered Nurses: AHPRA registration required (takes 3–6 months)","Nursing skills assessment via ANMAC (Australian Nursing & Midwifery Accreditation Council)","Aged Care Worker Pilot visa available for care workers","Doctors: AMC Part 1 & 2 exams required for general registration","Many states have priority processing for healthcare workers","Pakistan, India and Bangladesh are top source countries for Australian nurses"]},
    {icon:"👨‍👩‍👧",bg:"#F5F3FF",border:"#C4B5FD",title:"Partner & Family Visa",badge:"For PRs & citizens",
     desc:"Australian PRs and citizens can sponsor their partner (married or de facto) and children. Partner visa is a 2-stage process — temporary then permanent.",
     pts:["Partner visa (820/801): offshore (309/100) or onshore (820/801)","Temporary visa first, then permanent after 2 years","De facto relationships accepted — must prove genuine relationship","Processing time: 12–24 months (offshore), 18–36 months (onshore)","Child visa: dependent children under 18 can be included","Parent visa: long waiting list (10–30 years) — Contributory Parent faster (3–5 years)"]},
  ];

  return(
    <div style={{background:"#F9FAFB"}}>
      <section style={{position:"relative",minHeight:"420px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center 40%",filter:"brightness(0.28)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.75))"}}/>
        <div style={{...wrap,position:"relative",zIndex:1,width:"100%",padding:"80px 1.5rem"}}>
          <span style={{...eye,color:"#FCD34D"}}>🇦🇺 Australia Immigration Guide 2026</span>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2.4rem,5vw,3.8rem)",fontWeight:900,lineHeight:1.08,letterSpacing:"-0.025em",color:"#fff",maxWidth:"720px",marginBottom:"18px"}}>Move to Australia — skilled visas, study &amp; PR pathways 2026</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"600px",lineHeight:1.75,marginBottom:"28px"}}>Australia has a strong demand for skilled workers from Pakistan, India and Bangladesh. The points-based SkillSelect system gives you multiple routes to Permanent Residence — no quota, merit-based.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={btnP}>💬 Get Australia visa help →</a>
            <Link href="/consultancy" style={btnG}>📅 Book free consultation</Link>
          </div>
        </div>
      </section>

      <div style={{background:"#0B1D3A"}}><div style={wrap}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))"}}>
        {[{n:"195K+",l:"Skilled migration places 2026"},{n:"65 pts",l:"Minimum points for 189 visa"},{n:"4 yrs",l:"TSS employer-sponsored max"},{n:"AUD $70K",l:"Min. salary for TSS visa"}].map((s,i)=>(
          <div key={s.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
            <div style={{fontFamily:PD,fontWeight:900,fontSize:"1.75rem",color:"#FCD34D"}}>{s.n}</div>
            <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"3px"}}>{s.l}</div>
          </div>
        ))}
      </div></div></div>

      <section style={sec}>
        <span style={eye}>Australia visa pathways</span>
        <h2 style={h2s}>Which Australia visa is right for you?</h2>
        <div style={bar}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:"22px"}}>
          {visas.map(v=>(
            <div key={v.title} style={{background:v.bg,border:`1.5px solid ${v.border}`,borderRadius:"20px",padding:"1.75rem"}}>
              <div style={{display:"flex",gap:"12px",alignItems:"flex-start",marginBottom:"14px"}}>
                <span style={{fontSize:"32px",flexShrink:0}}>{v.icon}</span>
                <div>
                  <div style={{fontFamily:PD,fontWeight:800,fontSize:"17px",color:"#0B1D3A",lineHeight:1.25,marginBottom:"7px"}}>{v.title}</div>
                  <span style={{display:"inline-flex",borderRadius:"999px",padding:"3px 10px",fontSize:"11.5px",fontWeight:700,background:"rgba(220,38,38,.1)",color:"#DC2626",border:"1px solid #FCA5A5"}}>{v.badge}</span>
                </div>
              </div>
              <p style={{fontSize:"13.5px",color:"#374151",lineHeight:1.7,marginBottom:"14px"}}>{v.desc}</p>
              <ul style={{listStyle:"none",padding:0}}>{v.pts.map((p,i)=><CI key={i} c={p}/>)}</ul>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{...btnP,width:"100%",justifyContent:"center",fontSize:"13px",padding:"11px",marginTop:"14px",display:"flex"}}>Get Australia visa help →</a>
            </div>
          ))}
        </div>
      </section>

      <div style={{background:"#fff",padding:"5rem 1.5rem"}}><div style={wrap}>
        <span style={eye}>Life in Australia</span>
        <h2 style={h2s}>South Asian community &amp; life in Australia</h2>
        <div style={bar}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"20px"}}>
          {[
            {i:"🕌",t:"Muslim & South Asian life",d:"800K+ Muslims in Australia. Large Pakistani community in Sydney (Auburn/Lakemba), Melbourne (Broadmeadows), Brisbane. 300+ mosques. Halal food widely available in all major cities."},
            {i:"💰",t:"Salaries & costs",d:"Sydney avg: AUD $90K. Melbourne: AUD $85K. Brisbane: AUD $80K. Sydney 1-bed: AUD $2,500–$3,200. Melbourne: AUD $2,000–$2,800. Brisbane cheapest of big 3."},
            {i:"☀️",t:"Quality of life",d:"Consistently top 10 globally. Excellent weather, world-class universities, multicultural society. Very safe. Outdoor lifestyle. Strong work-life balance culture (38-hour standard work week)."},
            {i:"🏥",t:"Healthcare (Medicare)",d:"Free universal healthcare (Medicare) for all PRs. Free GP visits, hospital care. Prescription medications subsidised under PBS scheme. Dental not covered by Medicare — private insurance recommended."},
            {i:"🎓",t:"Education",d:"Free public schooling for all children. Go8 universities: Melbourne, Sydney, ANU, UNSW, Monash, UQ, Adelaide, UWA — globally ranked. University HECS debt only repaid once earning AUD $51,550+."},
            {i:"📍",t:"Best cities for South Asians",d:"Sydney (largest Pakistani/Indian community), Melbourne (very multicultural), Brisbane (fastest growing, cheaper), Adelaide (easier PR via regional visa, smaller community), Perth (mining sector, high salaries)."},
          ].map(c=>(
            <div key={c.t} style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"18px",padding:"1.5rem"}}>
              <div style={{fontSize:"32px",marginBottom:"12px"}}>{c.i}</div>
              <div style={{fontFamily:PD,fontWeight:700,fontSize:"16px",color:"#0B1D3A",marginBottom:"8px"}}>{c.t}</div>
              <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.65}}>{c.d}</div>
            </div>
          ))}
        </div>
      </div></div>

      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{...wrap,background:"linear-gradient(135deg,#DC2626,#991B1B)",borderRadius:"28px",padding:"52px",textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:"-60px",right:"-60px",width:"250px",height:"250px",borderRadius:"50%",background:"rgba(255,255,255,.07)"}}/>
          <h2 style={{fontFamily:PD,fontWeight:800,color:"#fff",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",marginBottom:"12px",position:"relative",zIndex:1}}>Ready to move to Australia?</h2>
          <p style={{color:"rgba(255,255,255,.72)",fontSize:"16px",marginBottom:"26px",position:"relative",zIndex:1}}>Our consultants can assess your points score, skills assessment and the right pathway for your profile. Free 30-min call in Urdu, Hindi, Bengali or English.</p>
          <div style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",position:"relative",zIndex:1}}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{...btnG,background:"#25D366",border:"none",fontWeight:800}}>💬 WhatsApp now</a>
            <Link href="/consultancy" style={{...btnG,background:"#fff",color:"#DC2626",border:"none",fontWeight:800}}>📅 Book free call</Link>
          </div>
        </div>
      </div>
    

{/* ── VISIT VISA SECTION ── */}
<section style={{background:"#FFFBF0",borderTop:"3px solid #00407A",padding:"4rem 0"}}>
  <div style={{...sec}}>
    <span style={{...eye,color:"#00407A"}}>🇦🇺 Visit / Tourist Visa</span>
    <h2 style={{fontFamily:PD,fontSize:"clamp(1.6rem,3vw,2.3rem)",fontWeight:800,color:"#0B1D3A",lineHeight:1.2,marginBottom:"8px"}}>Australia Visitor Visa (Subclass 600)</h2>
    <div style={{...bar,background:"#00407A"}}/>
    <p style={{fontSize:"15px",color:"#6B7280",marginBottom:"2rem",maxWidth:"640px"}}>Tourism, family or business visits — 3 or 12 months</p>
    <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"2.5rem"}}>
      {[{label:"Duration",value:"3 or 12 months (single/multiple entry)",icon:"📅"},{label:"Visa Fee",value:"AUD $190",icon:"💳"},{label:"Processing",value:"20–60 days",icon:"⏱️"}].map(function(s){return <div key={s.label} style={{background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:"12px",padding:"1rem 1.5rem",minWidth:"160px",flex:"1"}}><div style={{fontSize:"1.4rem",marginBottom:"4px"}}>{s.icon}</div><div style={{fontSize:"11px",color:"#9CA3AF",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"2px"}}>{s.label}</div><div style={{fontSize:"15px",fontWeight:700,color:"#0B1D3A"}}>{s.value}</div></div>;})}
    </div>
    <div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:"2rem",alignItems:"start"}}>
      <div style={{background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:"16px",padding:"1.5rem"}}>
        <h3 style={{fontFamily:PD,fontWeight:700,fontSize:"1.1rem",color:"#0B1D3A",marginBottom:"1rem"}}>📋 Required Documents (from Pakistan)</h3>
        <ul style={{padding:0,margin:0}}>
              <CI key="0">Online application via ImmiAccount</CI>
              <CI key="1">Valid Pakistani passport</CI>
              <CI key="2">Sufficient funds proof (AUD $5,000+ recommended)</CI>
              <CI key="3">Employment letter with leave approval</CI>
              <CI key="4">Purpose of visit (tourism / family invitation)</CI>
              <CI key="5">Travel insurance for Australia</CI>
              <CI key="6">Health insurance or ability to pay for healthcare</CI>
              <CI key="7">Biometrics at Australian Embassy Islamabad</CI>
              <CI key="8">Return flight itinerary</CI>
        </ul>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        <div style={{background:"#FEF3C7",border:"1.5px solid #FCD34D",borderRadius:"16px",padding:"1.5rem"}}>
          <div style={{fontWeight:700,fontSize:"13px",color:"#92400E",marginBottom:"8px"}}>💡 Important Tip for Pakistanis</div>
          <p style={{fontSize:"13px",color:"#78350F",lineHeight:1.6,margin:0}}>Online applications via ImmiAccount. Strong bank balance and clear purpose essential. Health examination may be required for longer stays.</p>
        </div>
        <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600" target="_blank" rel="noopener noreferrer"
          style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"14px 24px",
            borderRadius:"12px",background:"#00407A",color:"#fff",fontWeight:700,fontSize:"15px",
            textDecoration:"none",fontFamily:IN}}>🌐 Official 🇦🇺 Visa Application →</a>
        <a href={WA} target="_blank" rel="noopener noreferrer"
          style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"14px 24px",
            borderRadius:"12px",background:"#25D366",color:"#fff",fontWeight:700,fontSize:"15px",
            textDecoration:"none",fontFamily:IN}}>💬 Need visa help? WhatsApp us →</a>
      </div>
    </div>
  </div>
</section>
</div>
  );
}
