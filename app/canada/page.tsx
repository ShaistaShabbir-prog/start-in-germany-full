"use client";
import Link from "next/link";
const PD='"Playfair Display",Georgia,serif';
const IN='"Inter",ui-sans-serif,system-ui,sans-serif';
const HERO="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1400&q=85&auto=format&fit=crop";
const CITY="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=80&auto=format&fit=crop";
const WA="/contact?text=Hi%20VisaVista!%20I%20need%20help%20with%20Canada%20immigration.";

const btnP:React.CSSProperties={display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"none",textDecoration:"none",background:"#DC2626",color:"#fff",boxShadow:"0 4px 18px rgba(220,38,38,.35)"};
const btnG:React.CSSProperties={display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"1.5px solid rgba(255,255,255,.3)",textDecoration:"none",background:"rgba(255,255,255,.12)",color:"#fff"};
const wrap:React.CSSProperties={maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem"};
const sec:React.CSSProperties={maxWidth:"1200px",margin:"0 auto",padding:"5rem 1.5rem"};
const eye:React.CSSProperties={display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",color:"#DC2626",marginBottom:"10px"};
const bar:React.CSSProperties={width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 24px"};
const h2s:React.CSSProperties={fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A"};
const tick:React.CSSProperties={width:"20px",height:"20px",borderRadius:"50%",background:"#ECFDF5",border:"1.5px solid #6EE7B7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"10px",color:"#059669",marginTop:"1px"};

function CI({c}:{c:string}){
  return <li style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"10px",listStyle:"none"}}><span style={tick}>✓</span><span style={{fontSize:"13px",color:"#374151",lineHeight:1.6}}>{c}</span></li>;
}

export default function CanadaPage(){
  const visas=[
    {icon:"⭐",bg:"#FEF2F2",border:"#FCA5A5",title:"Express Entry — Federal Skilled Worker",badge:"Fastest to PR",
     desc:"Canada's flagship points-based immigration. Score 67+ on the FSW grid, enter the Express Entry pool, and receive an Invitation to Apply (ITA) for Permanent Residence within 6 months.",
     pts:["Min. 67/100 points: Age (12), Education (25), Language (28), Experience (15)","IELTS CLB 7: Listening 8.0, Reading 7.0, Writing 7.0, Speaking 7.0","CRS score: recent draws around 480–520 (PNP draws as low as 300)","Processing: 6 months from Invitation to Apply (ITA)","Provincial Nomination adds +600 CRS — near-guaranteed ITA","No job offer required (but adds +50–200 CRS points)"]},
    {icon:"🌍",bg:"#EFF6FF",border:"#BFDBFE",title:"Provincial Nominee Programme (PNP)",badge:"Highest success rate",
     desc:"Each province has its own immigration streams. Ontario, BC, Alberta and Saskatchewan have dedicated streams for South Asians. A provincial nomination adds 600 CRS points.",
     pts:["Ontario OINP: tech, health, trades streams — active draws","BC PNP: tech workers, healthcare, hospitality","Alberta AAIP: many streams including Express Entry-linked","Saskatchewan SINP: lower CRS requirements than federal draws","Manitoba MPNP: strong for Bangladeshi and Pakistani applicants","Many PNPs accept direct applications — no EE profile needed"]},
    {icon:"🎓",bg:"#ECFDF5",border:"#6EE7B7",title:"Study Permit + Post-Grad Work (PGWP)",badge:"Most popular South Asian route",
     desc:"Study in Canada → 1–3 year Post-Graduate Work Permit → Express Entry → Permanent Residence. The most popular pathway to Canadian PR for South Asians.",
     pts:["Admission from a Designated Learning Institution (DLI)","Proof of funds: CAD $10,000/year minimum","IELTS 6.0–6.5 (undergrad), 6.5–7.0 (postgrad)","PGWP after graduation: up to 3 years duration","Work 24h/week during studies, full-time during breaks","PGWP → Canadian work experience → Express Entry CRS boost"]},
    {icon:"💼",bg:"#FFFBEB",border:"#FCD34D",title:"Temporary Foreign Worker (TFWP/LMIA)",badge:"Employer-sponsored",
     desc:"Canadian employers with a Labour Market Impact Assessment (LMIA) can hire non-Canadian workers. LMIA-based job offer adds up to +200 CRS points in Express Entry.",
     pts:["Employer obtains positive LMIA from ESDC Canada","Job offer letter + LMIA number provided to worker","Work permit application submitted at Canadian visa office","LMIA-exempt streams: intra-company transfers, CUSMA professionals","LMIA job offer: +50 pts (NOC TEER 0/1) or +200 pts (NOC TEER 0 senior)","Open Work Permit for spouses of skilled workers and students"]},
    {icon:"🏥",bg:"#F0FDFA",border:"#99F6E4",title:"Healthcare & Caregiver Pathways",badge:"Urgent demand",
     desc:"Canada has a critical shortage of nurses, caregivers and PSWs. Dedicated permanent pathways exist — you can get PR directly through healthcare routes without Express Entry.",
     pts:["Home Support Worker Pilot: 2-year work permit → direct PR","Nurses: NCLEX-RN exam + provincial registration required","Personal Support Workers (PSW): certificate program available in Canada","Provincial healthcare PNP streams in all provinces","Pakistan, India and Bangladesh among top source countries","Francophone communities also actively recruit care workers"]},
    {icon:"👨‍👩‍👧",bg:"#F5F3FF",border:"#C4B5FD",title:"Family Sponsorship",badge:"For PRs & citizens",
     desc:"Canadian PRs and citizens can sponsor immediate family. Spouse sponsorship processing 12–24 months. Parents & Grandparents Program (PGP) accepts 30,000 applicants per year.",
     pts:["Spouse/partner: 12–24 months (outland application from Pakistan/India)","Parents & Grandparents: annual lottery — 30,000 slots/year","Children under 22: can be included in principal applicant's PR","Sponsor must meet Low Income Cut-Off (LICO) + 30%","Biometrics: VFS Global Pakistan/India/Bangladesh","Super Visa: parents/grandparents can visit for 5 years per entry"]},
  ];

  return(
    <div style={{background:"#F9FAFB"}}>

      {/* HERO */}
      <section style={{position:"relative",minHeight:"420px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center 35%",filter:"brightness(0.28)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.75))"}}/>
        <div style={{position:"absolute",top:"-80px",right:"-60px",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(220,38,38,.1)"}}/>
        <div style={{...wrap,position:"relative",zIndex:1,width:"100%",padding:"80px 1.5rem"}}>
          <span style={{...eye,color:"#FCD34D"}}>🇨🇦 Canada Immigration Guide 2026</span>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2.4rem,5vw,3.8rem)",fontWeight:900,lineHeight:1.08,letterSpacing:"-0.025em",color:"#fff",maxWidth:"720px",marginBottom:"18px"}}>Move to Canada — Express Entry, PNP &amp; study pathways 2026</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"600px",lineHeight:1.75,marginBottom:"28px"}}>Canada welcomes 485,000+ new permanent residents per year. As a Pakistani, Indian or Bangladeshi professional, your qualifications are actively sought. Multiple proven pathways to Permanent Residence.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={btnP}>💬 Get Canada immigration help →</a>
            <Link href="/consultancy" style={btnG}>📅 Book free consultation</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{background:"#0B1D3A"}}><div style={wrap}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))"}}>
        {[{n:"485K+",l:"New PRs welcomed 2026"},{n:"6 mo",l:"Express Entry processing"},{n:"+600",l:"CRS pts from PNP nomination"},{n:"3 yrs",l:"Post-Graduate Work Permit"}].map((s,i)=>(
          <div key={s.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
            <div style={{fontFamily:PD,fontWeight:900,fontSize:"1.75rem",color:"#FCD34D"}}>{s.n}</div>
            <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"3px"}}>{s.l}</div>
          </div>
        ))}
      </div></div></div>

      {/* VISA TYPES */}
      <section style={sec}>
        <span style={eye}>Canada immigration pathways</span>
        <h2 style={h2s}>Which Canada pathway is right for you?</h2>
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
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{...btnP,width:"100%",justifyContent:"center",fontSize:"13px",padding:"11px",marginTop:"14px",display:"flex"}}>Get Canada visa help →</a>
            </div>
          ))}
        </div>
      </section>

      {/* LIFE IN CANADA + CITIES */}
      <div style={{background:"#fff",padding:"5rem 1.5rem"}}><div style={wrap}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"clamp(24px,4vw,56px)",alignItems:"start"}}>
          <div>
            <span style={eye}>South Asian life in Canada</span>
            <h2 style={h2s}>Canada's South Asian community</h2>
            <div style={bar}/>
            {[
              {i:"🇵🇰",t:"Pakistani community (300K+)",d:"Mississauga, Brampton, Toronto, Calgary, Vancouver. 200+ mosques. Urdu widely spoken. Very well-established community with strong business networks."},
              {i:"🇮🇳",t:"Indian community (1.8M+)",d:"Largest South Asian diaspora in Canada. Brampton, Surrey BC, Toronto. Diwali a near-national event. Very strong professional and business networks."},
              {i:"🇧🇩",t:"Bangladeshi community (130K+)",d:"Toronto (Scarborough), Vancouver, Calgary. Growing community with cultural organisations, Bengali press, restaurants and mosques."},
              {i:"🕌",t:"Muslim life",d:"1.8M+ Muslims. Eid is a school holiday in some provinces. Halal food everywhere. Very tolerant — one of the world's most multicultural countries."},
              {i:"💰",t:"Salaries",d:"Toronto IT avg: CAD $95K. Calgary engineering: CAD $85K. Vancouver tech: CAD $90K. Calgary is cheapest of major cities with 1-bed around CAD $1,600/mo."},
              {i:"🏥",t:"Healthcare",d:"Universal provincial healthcare for all PRs from day 1 of residency. Free GP, hospital, emergency care. Dental and prescription not included in basic plans."},
            ].map(c=>(
              <div key={c.t} style={{display:"flex",gap:"14px",padding:"14px 0",borderBottom:"1px solid #E5E7EB"}}>
                <span style={{fontSize:"24px",flexShrink:0}}>{c.i}</span>
                <div>
                  <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"14px",marginBottom:"4px"}}>{c.t}</div>
                  <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.6}}>{c.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{borderRadius:"22px",overflow:"hidden",position:"relative",aspectRatio:"4/4.5"}}>
            <div style={{position:"absolute",inset:0,backgroundImage:`url(${CITY})`,backgroundSize:"cover",backgroundPosition:"center"}}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(11,29,58,.92) 0%,transparent 55%)"}}/>
            <div style={{position:"absolute",bottom:"24px",left:"22px",right:"22px",zIndex:1}}>
              <div style={{background:"rgba(255,255,255,.12)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,.2)",borderRadius:"14px",padding:"18px 20px"}}>
                <div style={{fontSize:"11px",fontWeight:700,color:"#FCD34D",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"10px"}}>Best cities for South Asians 2026</div>
                {[["Brampton, ON","Largest Pak/Indian city outside South Asia"],["Mississauga, ON","Finance, tech, logistics hub"],["Surrey, BC","Fastest growing South Asian community"],["Calgary, AB","Lower cost, oil & gas, tech"],["Toronto, ON","Financial capital, all sectors"],["Ottawa, ON","Government, tech, growing SA community"]].map(([city,desc])=>(
                  <div key={city} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,.1)",gap:"8px"}}>
                    <span style={{fontSize:"12.5px",fontWeight:600,color:"#fff",flexShrink:0}}>{city}</span>
                    <span style={{fontSize:"11px",color:"rgba(255,255,255,.55)",textAlign:"right"}}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div></div>

      {/* CTA */}
      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{...wrap,background:"linear-gradient(135deg,#DC2626,#991B1B)",borderRadius:"28px",padding:"52px",textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:"-60px",right:"-60px",width:"250px",height:"250px",borderRadius:"50%",background:"rgba(255,255,255,.07)"}}/>
          <h2 style={{fontFamily:PD,fontWeight:800,color:"#fff",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",marginBottom:"12px",position:"relative",zIndex:1}}>Ready to move to Canada?</h2>
          <p style={{color:"rgba(255,255,255,.72)",fontSize:"16px",marginBottom:"26px",position:"relative",zIndex:1}}>Book a free 30-min consultation — in Urdu, Hindi, Bengali or English. Our experts know Express Entry and PNP inside out.</p>
          <div style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",position:"relative",zIndex:1}}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{...btnG,background:"#25D366",border:"none",fontWeight:800}}>💬 WhatsApp now</a>
            <Link href="/consultancy" style={{...btnG,background:"#fff",color:"#DC2626",border:"none",fontWeight:800}}>📅 Book free call</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
