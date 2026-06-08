import Link from "next/link";
const PD = '"Playfair Display",Georgia,serif';
const HERO   = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85&auto=format&fit=crop";
const OFFICE = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80&auto=format&fit=crop";
const TEAM   = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop";

export default function WorkPage() {
  return (
    <div>
      <section style={{position:"relative",minHeight:"400px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(0.26)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.75))"}}/>
        <div className="wrap" style={{position:"relative",zIndex:1,padding:"80px 1.5rem"}}>
          <span className="eyebrow" style={{color:"#FCD34D"}}>💼 Work in Germany 2026</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"720px",marginBottom:"18px"}}>1.7 million open jobs — your opportunities in Germany</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"600px",lineHeight:1.75,marginBottom:"28px"}}>Germany has a critical shortage of skilled workers. As a Pakistani, Indian or Bangladeshi professional, your skills are genuinely in demand. Here's how to find, apply and succeed.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <Link href="/visa" className="btn btn-primary">Check your work visa →</Link>
            <Link href="/consultancy" className="btn btn-ghost-light">📅 CV & career consultation</Link>
          </div>
        </div>
      </section>

      {/* Market stats */}
      <div style={{background:"#0B1D3A"}}>
        <div className="wrap">
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
            {[
              {n:"1.7M",l:"Open vacancies 2026"},
              {n:"€56,250",l:"Avg. Munich salary"},
              {n:"€58,000",l:"Avg. Berlin IT salary"},
              {n:"19%",l:"IT jobs English-only"},
            ].map((s,i)=>(
              <div key={s.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"1.75rem",color:"#FCD34D"}}>{s.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"3px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Jobs grid */}
      <section className="sec">
        <span className="eyebrow">In-demand professions 2026</span>
        <h2 className="h2" style={{marginBottom:"8px"}}>Top jobs for South Asian professionals</h2>
        <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 36px"}}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
          {[
            {e:"💻",t:"IT & Software",d:"Software engineers, DevOps, data scientists, ML engineers, cloud architects, cybersecurity.",sal:"€55,000–€95,000",dem:"Highest demand",bc:"badge-hot",tip:"19% of IT jobs need English only. Python, Java, AWS, Kubernetes most demanded. Berlin, Munich, Frankfurt top cities.",visa:"EU Blue Card (easy — salary usually qualifies)"},
            {e:"⚙️",t:"Engineers",d:"Mechanical, electrical, civil, chemical, automotive, embedded systems.",sal:"€50,000–€85,000",dem:"High demand",bc:"badge-hot",tip:"Bavaria (BMW, Bosch, Siemens) and Baden-Württemberg (Porsche, Daimler) have highest engineering vacancies.",visa:"EU Blue Card · Skilled Worker Visa"},
            {e:"🏥",t:"Nursing & Care",d:"Registered nurses, care workers, ICU nurses, elderly care specialists.",sal:"€32,000–€52,000",dem:"Critical shortage",bc:"badge-teal",tip:"'Triple Win Programme' specifically recruits Pakistani, Indian and Filipino nurses. Includes language support and relocation help.",visa:"Skilled Worker · Recognition support available"},
            {e:"👩‍⚕️",t:"Physicians & Dentists",d:"GPs, specialists, surgeons, dentists — 5,000+ unfilled positions nationwide.",sal:"€70,000–€130,000",dem:"Critical shortage",bc:"badge-teal",tip:"Approbation (licence to practice) takes 3–12 months by state. Start the recognition process 9–12 months before your planned move.",visa:"EU Blue Card · Specialised §18b route"},
            {e:"🔨",t:"Craftspeople & Trades",d:"Electricians, plumbers, HVAC engineers, roofers, tilers — all in acute shortage.",sal:"€35,000–€62,000",dem:"High demand",bc:"badge-hot",tip:"§18c visa allows experienced craftspeople WITHOUT formal recognition to work if they have 5 years documented experience.",visa:"§18c Skilled Worker (experience-based)"},
            {e:"🌱",t:"Green Energy & Sustainability",d:"Solar, wind, EV infrastructure, energy efficiency, environmental engineering.",sal:"€45,000–€82,000",dem:"Rapidly growing",bc:"badge-green",tip:"Germany's Energiewende (energy transition) targets 80% renewables by 2030. Thousands of new positions created annually.",visa:"EU Blue Card · Skilled Worker"},
            {e:"🔬",t:"Scientists & Researchers",d:"Chemistry, biology, physics, materials science, pharmaceutical research.",sal:"€45,000–€72,000",dem:"Stable",bc:"badge-blue",tip:"Max Planck (86 institutes), Fraunhofer (76 institutes), Helmholtz — world-class funded research. Many English-language positions.",visa:"EU Blue Card · Researcher visa (§18d)"},
            {e:"🚛",t:"Transport & Logistics",d:"HGV drivers, freight forwarders, supply chain managers, warehouse operations.",sal:"€30,000–€52,000",dem:"Growing",bc:"badge-teal",tip:"EU driving licence equivalency rules vary. Pakistani Category C licence: usually requires a theory test in Germany.",visa:"Skilled Worker · §18c experience route"},
            {e:"🎓",t:"Ausbildung (Apprenticeship)",d:"3,500+ nationally recognised training professions — earn while you learn.",sal:"€620–€1,100/mo",dem:"Open now",bc:"badge-gold",tip:"Search ausbildung.de, apprentissimo.de. Most companies want B1 German minimum. Housing often supported by employer or Berufsschule.",visa:"§16a Ausbildung Visa"},
          ].map(j=>(
            <div key={j.t} style={{background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:"20px",padding:"1.4rem",transition:"all .22s",cursor:"pointer"}}
              onMouseOver={e=>{e.currentTarget.style.borderColor="#FCA5A5";e.currentTarget.style.boxShadow="0 12px 36px rgba(220,38,38,.1)";e.currentTarget.style.transform="translateY(-3px)";}}
              onMouseOut={e=>{e.currentTarget.style.borderColor="#E5E7EB";e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="none";}}>
              <div style={{display:"flex",gap:"14px",alignItems:"flex-start",marginBottom:"12px"}}>
                <div style={{width:"50px",height:"50px",borderRadius:"14px",background:"#F9FAFB",border:"1px solid #E5E7EB",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",flexShrink:0}}>{j.e}</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"16px",marginBottom:"6px"}}>{j.t}</div>
                  <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
                    <span className={`badge ${j.bc}`}>{j.dem}</span>
                    <span className="badge badge-gray">💶 {j.sal}</span>
                  </div>
                </div>
              </div>
              <p style={{fontSize:"13px",color:"#374151",lineHeight:1.6,marginBottom:"10px"}}>{j.d}</p>
              <div style={{background:"#FFFBEB",borderRadius:"9px",padding:"9px 12px",fontSize:"12px",color:"#374151",lineHeight:1.55,marginBottom:"8px"}}>
                <span style={{fontWeight:700,color:"#D97706"}}>💡 </span>{j.tip}
              </div>
              <div style={{fontSize:"11.5px",color:"#9CA3AF"}}>🛂 Visa: <span style={{fontWeight:600,color:"#374151"}}>{j.visa}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Cities guide */}
      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <span className="eyebrow">Where to work</span>
          <h2 className="h2" style={{marginBottom:"8px"}}>Best German cities for South Asian professionals 2026</h2>
          <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 36px"}}/>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"18px"}}>
            {[
              {city:"Berlin",flag:"🏙️",sal:"€58,000 avg.",rent:"€600–€1,200/mo (1-bed)",best:"Tech, startups, creative",eng:"Very high — many companies English-only",south:"Largest Pakistani community in Germany. Areas: Neukölln, Tempelhof. 80+ mosques.",employers:"Amazon, Siemens, SAP, Zalando, Delivery Hero, N26"},
              {city:"Munich",flag:"🏔️",sal:"€56,250 avg.",rent:"€900–€1,500/mo (1-bed)",best:"Engineering, automotive, aerospace",eng:"Moderate — German preferred",south:"Strong Indian IT community. Less Pakistani. High quality of life.",employers:"BMW, Siemens, Allianz, Microsoft, Google, Intel, Airbus"},
              {city:"Frankfurt",flag:"🏦",sal:"€66,000 avg.",rent:"€900–€1,400/mo (1-bed)",best:"Finance, IT, consulting",eng:"High in finance sector",south:"Large Indian finance/IT community. 'Little India' in Sachsenhausen.",employers:"Deutsche Bank, ECB, Deloitte, PwC, Deutsche Börse"},
              {city:"Hamburg",flag:"⚓",sal:"€48,000 avg.",rent:"€600–€1,300/mo (1-bed)",best:"Logistics, aviation, media",eng:"Moderate",south:"Large Pakistani community in Altona/Wandsbek. Active mosque community.",employers:"Airbus, Lufthansa Technik, Gruner+Jahr, Hamburg Port Authority"},
              {city:"Stuttgart",flag:"🚗",sal:"€52,000 avg.",rent:"€700–€1,300/mo (1-bed)",best:"Automotive, engineering, robotics",eng:"Moderate",south:"Strong Indian expat community. Areas: Vaihingen, Bad Cannstatt.",employers:"Mercedes-Benz, Porsche, Bosch, Robert Bosch GmbH"},
              {city:"Düsseldorf",flag:"🌆",sal:"€50,000 avg.",rent:"€700–€1,200/mo (1-bed)",best:"Corporate, consulting, trade",eng:"High — international business hub",south:"Germany's largest Indian community (10,000+). Strong business networks.",employers:"Vodafone DE, Henkel, E.ON, KPMG, McKinsey DE"},
              {city:"Cologne",flag:"🕌",sal:"€45,000 avg.",rent:"€600–€1,100/mo (1-bed)",best:"Media, advertising, gaming",eng:"Moderate",south:"Large Pakistani community. Friendly, social city culture.",employers:"RTL, WDR, Deutsche Telekom, Ford DE, Bayer AG"},
              {city:"Leipzig",flag:"🌱",sal:"€40,000 avg.",rent:"€400–€900/mo (1-bed)",best:"Logistics, IT, renewables, startups",eng:"Lower — German strongly preferred",south:"Small but growing South Asian community. Very affordable.",employers:"DHL, BMW Leipzig, Amazon Logistics, Porsche Leipzig"},
              {city:"Nuremberg",flag:"🏰",sal:"€46,000 avg.",rent:"€550–€1,000/mo (1-bed)",best:"IT, manufacturing, medical devices",eng:"Moderate",south:"Small community. Excellent quality of life. Faster Ausländerbehörde.",employers:"Siemens Energy, GfK, Adidas HQ (nearby Herzogenaurach)"},
            ].map(c=>(
              <div key={c.city} style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"18px",padding:"20px 22px",transition:"all .22s"}}
                onMouseOver={e=>{e.currentTarget.style.borderColor="#FCA5A5";e.currentTarget.style.background="#fff";e.currentTarget.style.boxShadow="0 8px 24px rgba(220,38,38,.08)";}}
                onMouseOut={e=>{e.currentTarget.style.borderColor="#E5E7EB";e.currentTarget.style.background="#F9FAFB";e.currentTarget.style.boxShadow="none";}}>
                <div style={{fontFamily:PD,fontWeight:800,fontSize:"18px",color:"#0B1D3A",marginBottom:"10px"}}>{c.flag} {c.city}</div>
                <div style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:"3px 10px",marginBottom:"12px"}}>
                  {[
                    ["Avg. salary",c.sal],["Rent (1-bed)",c.rent],["Best for",c.best],["English",c.eng],
                  ].map(([k,v])=>(
                    <>
                      <span key={k+"k"} style={{fontSize:"10.5px",fontWeight:700,color:"#9CA3AF",textTransform:"uppercase",paddingTop:"2px"}}>{k}:</span>
                      <span key={k+"v"} style={{fontSize:"12.5px",color:"#374151",fontWeight:k==="Avg. salary"?700:400}}>{v}</span>
                    </>
                  ))}
                </div>
                <div style={{fontSize:"12px",color:"#DC2626",fontWeight:600,marginBottom:"4px"}}>🌍 South Asian community:</div>
                <div style={{fontSize:"12px",color:"#6B7280",lineHeight:1.55,marginBottom:"10px"}}>{c.south}</div>
                <div style={{fontSize:"11px",color:"#9CA3AF"}}>Top employers: {c.employers}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job search strategy */}
      <section className="sec" style={{paddingTop:"3rem"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
          <div>
            <span className="eyebrow">Job search strategy</span>
            <h2 className="h2" style={{marginBottom:"16px"}}>How to land a job from abroad</h2>
            <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"0 0 28px"}}/>
            {[
              {n:"1",t:"Build a German-style CV (Lebenslauf)",d:"2 pages max. Professional photo (headshot, business attire). Personal details (DoB, nationality, address). Reverse chronological. No bullet points — full sentences. Download free German CV templates at europass.eu."},
              {n:"2",t:"Use the right job portals",d:"StepStone.de (largest), Indeed.de, LinkedIn (international firms), Xing.de (German equivalent of LinkedIn), Arbeitsagentur.de (Federal Employment Agency), Make-it-in-Germany.de (official government portal). Set email alerts immediately."},
              {n:"3",t:"Get your degree recognised (Anerkennung)",d:"Check anabin.kmk.org for your degree status. Regulated professions (doctors, nurses, engineers in some states) need formal Anerkennungsbescheid from the relevant state authority. Start 6–12 months before planned move."},
              {n:"4",t:"German language = salary multiplier",d:"Each language level adds significantly to your employability and salary. A2 → basic communication. B1 → permanent residence track. B2 → most professional jobs. C1 → managerial roles. Goethe Institut has centres in PK, IN, BD."},
              {n:"5",t:"LinkedIn + Xing profile",d:"German recruiters use both heavily. Set Open to Work, include desired salary range (in Germany, you can discuss salary openly). Connect with German recruiters and companies directly. 64% of German companies now offer hybrid work."},
              {n:"6",t:"Cover letter (Anschreiben)",d:"German employers expect a personalised Anschreiben — never generic. Max 1 page. Address the hiring manager by name. Explain why THIS company and THIS role. Link your specific experience to their requirements."},
            ].map(tip=>(
              <div key={tip.n} style={{display:"flex",gap:"16px",marginBottom:"22px",alignItems:"flex-start"}}>
                <div style={{width:"34px",height:"34px",borderRadius:"10px",background:"#DC2626",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:PD,fontWeight:800,fontSize:"15px",flexShrink:0}}>{tip.n}</div>
                <div>
                  <div style={{fontWeight:700,fontSize:"15px",color:"#0B1D3A",marginBottom:"5px"}}>{tip.t}</div>
                  <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.65}}>{tip.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div style={{borderRadius:"24px",overflow:"hidden",position:"relative",aspectRatio:"4/3.5",marginBottom:"24px"}}>
              <div style={{position:"absolute",inset:0,backgroundImage:`url(${TEAM})`,backgroundSize:"cover",backgroundPosition:"center"}}/>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(11,29,58,.9) 0%,transparent 55%)"}}/>
              <div style={{position:"absolute",bottom:"24px",left:"22px",right:"22px"}}>
                <div style={{background:"rgba(255,255,255,.12)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,.2)",borderRadius:"14px",padding:"16px 18px"}}>
                  <div style={{fontSize:"11px",fontWeight:700,color:"#FCD34D",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"8px"}}>Average gross salaries 2026</div>
                  {[["IT Engineer (senior)","€78,000"],["Software Developer","€65,000"],["Mechanical Engineer","€58,000"],["Physician (GP)","€85,000"],["Registered Nurse","€42,000"],["Electrician (Meister)","€52,000"],["Ausbildung (IT)","€900/mo"]].map(([r,s])=>(
                    <div key={r} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,.1)"}}>
                      <span style={{fontSize:"12.5px",color:"rgba(255,255,255,.7)"}}>{r}</span>
                      <span style={{fontSize:"12.5px",fontWeight:700,color:"#fff"}}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recognition by country */}
            <div style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"20px",padding:"22px 24px"}}>
              <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"16px",marginBottom:"16px"}}>🎓 Degree recognition by country</div>
              {[
                {flag:"🇵🇰",c:"Pakistan",info:"HEC-recognised degrees: mostly accepted. IBA, LUMS, FAST, NUST, GIKI well-regarded. MOFA Apostille required. APS certificate mandatory for visa applications. Engineering (PEC) and medicine (PMC) regulated — apply to state authority 9+ months early."},
                {flag:"🇮🇳",c:"India",info:"IIT, IIM, AIIMS, NIT: highly respected, often fast-tracked. UGC-accredited universities mostly accepted. MEA Apostille via mea.gov.in. Engineering council (IEI) recognition usually 4–8 weeks. APS not required."},
                {flag:"🇧🇩",c:"Bangladesh",info:"UGC-accredited degrees recognised via ZAB. BUET (engineering) globally regarded. BSMMU (medicine) needs Approbation process (6–12 months). UGC + MoFA attestation chain. APS not required."},
              ].map(c=>(
                <div key={c.c} style={{display:"flex",gap:"12px",marginBottom:"16px",paddingBottom:"16px",borderBottom:"1px solid #E5E7EB"}}>
                  <span style={{fontSize:"26px",flexShrink:0}}>{c.flag}</span>
                  <div>
                    <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"14px",marginBottom:"4px"}}>{c.c}</div>
                    <div style={{fontSize:"12.5px",color:"#6B7280",lineHeight:1.6}}>{c.info}</div>
                  </div>
                </div>
              ))}
              <Link href="/consultancy" className="btn btn-primary btn-sm" style={{width:"100%",justifyContent:"center"}}>Get recognition help →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
