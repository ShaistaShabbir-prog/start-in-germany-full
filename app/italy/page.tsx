"use client";
import Link from "next/link";
const PD='"Playfair Display",Georgia,serif';
const IN='"Inter",ui-sans-serif,system-ui,sans-serif';
const HERO="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1400&q=85&auto=format&fit=crop";
const ROME="https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1200&q=80&auto=format&fit=crop";
const WA="https://wa.me/4915906171828?text="+encodeURIComponent("Hi VisaVista! I need help with Italy visa.");

const btnP:React.CSSProperties={display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"none",textDecoration:"none",background:"#DC2626",color:"#fff",boxShadow:"0 4px 18px rgba(220,38,38,.35)"};
const btnG:React.CSSProperties={display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"1.5px solid rgba(255,255,255,.3)",textDecoration:"none",background:"rgba(255,255,255,.12)",color:"#fff"};
const wrap:React.CSSProperties={maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem"};
const sec:React.CSSProperties={maxWidth:"1200px",margin:"0 auto",padding:"5rem 1.5rem"};
const eye:React.CSSProperties={display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",color:"#DC2626",marginBottom:"10px"};
const bar:React.CSSProperties={width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 24px"};
const tick:React.CSSProperties={width:"20px",height:"20px",borderRadius:"50%",background:"#ECFDF5",border:"1.5px solid #6EE7B7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"10px",color:"#059669",marginTop:"1px"};
function CI({children}:{children:React.ReactNode}){return <li style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"10px",listStyle:"none"}}><span style={tick}>✓</span><span style={{fontSize:"13px",color:"#374151",lineHeight:1.6}}>{children}</span></li>}

export default function ItalyPage(){
  return(
    <div style={{background:"#F9FAFB"}}>
      <section style={{position:"relative",minHeight:"420px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center 40%",filter:"brightness(0.28)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.75))"}}/>
        <div style={{position:"absolute",top:"-80px",right:"-60px",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(220,38,38,.1)"}}/>
        <div style={{...wrap,position:"relative",zIndex:1,width:"100%",padding:"80px 1.5rem"}}>
          <span style={{...eye,color:"#FCD34D"}}>🇮🇹 Italy Visa Guide 2026</span>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2.4rem,5vw,3.8rem)",fontWeight:900,lineHeight:1.08,letterSpacing:"-0.025em",color:"#fff",maxWidth:"720px",marginBottom:"18px"}}>Move to Italy — visas, jobs &amp; life for South Asians</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"600px",lineHeight:1.75,marginBottom:"28px"}}>Italy opened 452,000 work permit slots under the Decreto Flussi 2026. Huge demand for skilled workers, caregivers and seasonal workers. Here's your complete guide.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={btnP}>💬 Get Italy visa help →</a>
            <Link href="/consultancy" style={btnG}>📅 Book free consultation</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div style={{background:"#0B1D3A"}}>
        <div style={wrap}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))"}}>
            {[{n:"452K",l:"Work permits 2026 (Decreto Flussi)"},{n:"€1,310",l:"Net min. monthly salary"},{n:"5 yrs",l:"To permanent residence"},{n:"€30",l:"Work permit application fee"}].map((s,i)=>(
              <div key={s.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"1.75rem",color:"#FCD34D"}}>{s.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"3px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visa types */}
      <section style={sec}>
        <span style={eye}>Italy visa pathways</span>
        <h2 style={{fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A"}}>Which Italy visa is right for you?</h2>
        <div style={bar}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:"22px"}}>
          {[
            {icon:"⚡",bg:"#FEF2F2",border:"#FCA5A5",title:"Decreto Flussi — Work Permit (Nulla Osta)",badge:"452,000 slots 2026",
             desc:"Italy's annual work permit quota. Opens 3–4 times per year — applications open online via the Italian government portal (click day). 2026 quota: 452,000 total (130,000 non-seasonal, rest seasonal).",
             points:["Job offer from an Italian employer required before applying","Employer applies for Nulla Osta (work authorisation) online","Click day opens — applications fill within minutes to hours","Worker then applies for visa at Italian embassy in home country","Sectors prioritised: agriculture, construction, tourism, care work, logistics"]},
            {icon:"🎓",bg:"#EFF6FF",border:"#BFDBFE",title:"Student Visa (Visto per Studio)",badge:"Free/low tuition",
             desc:"Study at Italian universities — often very cheap (€100–€2,000/year). Italy has 3 universities in global top 200. Application for admission via universitaly.it.",
             points:["Admission from an Italian university (universitaly.it portal)","Financial proof: €448/month (€5,382/year) in bank account","Health insurance required","Language: Italian B2 for Italian-taught, IELTS/TOEFL for English-taught","After graduation: 12-month job-seeker stay permitted"]},
            {icon:"💼",bg:"#ECFDF5",border:"#6EE7B7",title:"EU Blue Card Italy",badge:"Highly skilled workers",
             desc:"Italy joined the harmonised EU Blue Card in 2023. For highly qualified workers with a university degree and job offer meeting the salary threshold.",
             points:["University degree (min. 3 years) recognised in Italy","Job offer with salary ≥ €16,243/year (much lower than Germany)","Contract for minimum 1 year","Fast-track to long-term residence","Family reunification immediately permitted"]},
            {icon:"🏠",bg:"#FFFBEB",border:"#FCD34D",title:"Family Reunification",badge:"Bring your family",
             desc:"Once you hold an Italian residence permit, your spouse and children can join under the family reunification norms. Italy has a significant South Asian diaspora especially from Pakistan.",
             points:["Sponsor must hold valid Italian residence permit","Adequate housing: minimum 14m² per additional person","Sufficient income: at least €5,818/year for family of 2","Sponsor submits application at Italian immigration desk (Sportello Unico)","Processing time: 6–18 months from Pakistan/Bangladesh"]},
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
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{...btnP,width:"100%",justifyContent:"center",fontSize:"13px",padding:"11px",marginTop:"14px",display:"flex"}}>Get Italy visa help →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Decreto Flussi deep-dive */}
      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={wrap}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"clamp(24px,4vw,56px)",alignItems:"start"}}>
            <div>
              <span style={eye}>Decreto Flussi 2026</span>
              <h2 style={{fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A",marginBottom:"16px"}}>How to apply for Italy's work permit quota</h2>
              <div style={bar}/>
              {[
                {n:"1",t:"Find an Italian employer",d:"You MUST have a job offer before applying. Search: InfoJobs.it, Indeed.it, LinkedIn Italy, Lavoro.gov.it (government portal). Sectors easiest: care homes, agriculture, construction, logistics."},
                {n:"2",t:"Employer submits Nulla Osta",d:"Your Italian employer applies online at portaleimmigrazione.it during the click day window. They need your documents: passport, qualification certificates, accommodation proof."},
                {n:"3",t:"Nulla Osta approved",d:"Processing takes 60–90 days. Once approved, the Nulla Osta is sent to the Italian embassy in your country."},
                {n:"4",t:"Apply for entry visa",d:"Apply at Italian Embassy Islamabad/Karachi (Pakistan), Rome Honorary Consulate network (India), Italian Embassy Dhaka (Bangladesh). Bring Nulla Osta + all documents."},
                {n:"5",t:"Arrive & apply for Permesso",d:"Within 8 days of arriving in Italy, go to a Post Office (Poste Italiane) to apply for your Permesso di Soggiorno (residence permit). Appointment via Questura."},
              ].map(s=>(
                <div key={s.n} style={{display:"flex",gap:"16px",marginBottom:"20px",alignItems:"flex-start"}}>
                  <div style={{width:"34px",height:"34px",borderRadius:"10px",background:"#DC2626",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:PD,fontWeight:800,fontSize:"15px",flexShrink:0}}>{s.n}</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:"15px",color:"#0B1D3A",marginBottom:"5px"}}>{s.t}</div>
                    <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.65}}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div style={{borderRadius:"22px",overflow:"hidden",position:"relative",aspectRatio:"4/3.5",marginBottom:"22px"}}>
                <div style={{position:"absolute",inset:0,backgroundImage:`url(${ROME})`,backgroundSize:"cover",backgroundPosition:"center"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(11,29,58,.9) 0%,transparent 60%)"}}/>
                <div style={{position:"absolute",bottom:"22px",left:"22px",right:"22px",zIndex:1}}>
                  <div style={{background:"rgba(255,255,255,.12)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,.2)",borderRadius:"14px",padding:"16px 18px"}}>
                    <div style={{fontSize:"11px",fontWeight:700,color:"#FCD34D",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"8px"}}>Decreto Flussi 2026 quotas</div>
                    {[["Non-seasonal work","130,000 slots"],["Seasonal (agriculture/tourism)","151,000 slots"],["Conversion permits","171,000 slots"],["From Pakistan 🇵🇰","Priority country"],["From India 🇮🇳","Priority country"],["From Bangladesh 🇧🇩","Priority country"]].map(([k,v])=>(
                      <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,.1)"}}>
                        <span style={{fontSize:"12.5px",color:"rgba(255,255,255,.7)"}}>{k}</span>
                        <span style={{fontSize:"12.5px",fontWeight:700,color:"#FCD34D"}}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{background:"#FEF2F2",border:"1.5px solid #FCA5A5",borderRadius:"20px",padding:"22px 24px"}}>
                <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"16px",marginBottom:"14px"}}>⚠️ Important: Click Day tips</div>
                {["Click day opens at 9:00am Italian time (CET/CEST) — set your alarm","Server crashes are common — have multiple devices ready","Your employer must have their account pre-registered weeks before","All documents must be pre-uploaded — no time to find them on the day","VisaVista Premium clients get step-by-step support on click day"].map((t,i)=>(
                  <div key={i} style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"9px"}}>
                    <span style={tick}>✓</span>
                    <span style={{fontSize:"13px",color:"#374151"}}>{t}</span>
                  </div>
                ))}
                <a href={WA} target="_blank" rel="noopener noreferrer" style={{...btnP,width:"100%",justifyContent:"center",marginTop:"16px",display:"flex",fontSize:"13.5px",padding:"11px"}}>Get click-day support →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Life in Italy */}
      <section style={sec}>
        <span style={eye}>Life in Italy</span>
        <h2 style={{fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A",marginBottom:"8px"}}>South Asian community &amp; life in Italy</h2>
        <div style={bar}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"20px"}}>
          {[
            {icon:"🕌",title:"Muslim community",desc:"Italy has 1.6M+ Muslims. Significant Pakistani community especially in Milan, Rome, Turin, Brescia. Mosques in all major cities. Halal food widely available in cities."},
            {icon:"💰",title:"Cost of living",desc:"Much cheaper than Germany. Milan avg. 1-bed: €900–€1,300. Rome: €800–€1,200. Southern Italy (Naples, Palermo): €400–€700. Lower salaries but significantly lower costs."},
            {icon:"🗣️",title:"Italian language",desc:"Italian is essential. A2–B1 for daily life. B2 for most jobs. Free Italian courses (corsi di lingua) widely available through Comuni (local government). Similar to Spanish — many South Asians learn quickly."},
            {icon:"🏥",title:"Healthcare (SSN)",desc:"Italy's national health service (Servizio Sanitario Nazionale) is free for all registered residents. Register at your local ASL after getting your Permesso di Soggiorno."},
            {icon:"📍",title:"Best cities for South Asians",desc:"Milan (largest Pakistani community, financial hub), Rome (government, tourism), Turin (manufacturing, Fiat), Brescia (industry), Bologna (logistics, education), Naples (southern gateway)."},
            {icon:"💼",title:"Jobs in demand",desc:"Care workers (badante/caregiver) for elderly — urgent shortage. Agriculture (Puglia, Sicily). Construction. Logistics. Hospitality. IT (Milan). Manufacturing (northern Italy)."},
          ].map(c=>(
            <div key={c.title} style={{background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:"18px",padding:"1.5rem",boxShadow:"0 2px 8px rgba(0,0,0,.04)"}}>
              <div style={{fontSize:"32px",marginBottom:"12px"}}>{c.icon}</div>
              <div style={{fontFamily:PD,fontWeight:700,fontSize:"16px",color:"#0B1D3A",marginBottom:"8px"}}>{c.title}</div>
              <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.65}}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{...wrap,background:"linear-gradient(135deg,#DC2626,#991B1B)",borderRadius:"28px",padding:"52px",position:"relative",overflow:"hidden",textAlign:"center"}}>
          <div style={{position:"absolute",top:"-60px",right:"-60px",width:"250px",height:"250px",borderRadius:"50%",background:"rgba(255,255,255,.07)"}}/>
          <h2 style={{fontFamily:PD,fontWeight:800,color:"#fff",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",marginBottom:"12px",position:"relative",zIndex:1}}>Ready to move to Italy?</h2>
          <p style={{color:"rgba(255,255,255,.72)",fontSize:"16px",marginBottom:"26px",position:"relative",zIndex:1}}>Book a free consultation — we speak Urdu, Hindi, Bengali &amp; English. Our experts know the Decreto Flussi process inside out.</p>
          <div style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",position:"relative",zIndex:1}}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{...btnG,background:"#25D366",border:"none",fontWeight:800}}>💬 WhatsApp now</a>
            <Link href="/consultancy" style={{...btnG,background:"#fff",color:"#DC2626",border:"none",fontWeight:800}}>📅 Book free call</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
