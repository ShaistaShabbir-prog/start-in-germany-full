import React from "react";
import Link from "next/link";

const PD = '"Playfair Display",Georgia,serif';
const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';
const HERO  = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85&auto=format&fit=crop";
const TEAM  = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop";

const s = {
  wrap: { maxWidth:"1200px", margin:"0 auto", padding:"0 1.5rem" } as React.CSSProperties,
  sec:  { maxWidth:"1200px", margin:"0 auto", padding:"5rem 1.5rem" } as React.CSSProperties,
  h2:   { fontFamily:PD, fontSize:"clamp(1.75rem,3vw,2.5rem)", fontWeight:800, lineHeight:1.2, color:"#0B1D3A" } as React.CSSProperties,
  eye:  { display:"block", fontSize:"11px", fontWeight:700, textTransform:"uppercase" as const, letterSpacing:"0.15em", color:"#DC2626", marginBottom:"10px" },
  bar:  { width:"60px", height:"4px", background:"#DC2626", borderRadius:"2px", margin:"14px 0 24px" } as React.CSSProperties,
  btnP: { display:"inline-flex", alignItems:"center", gap:"6px", padding:"13px 26px", borderRadius:"12px", fontSize:"15px", fontWeight:700, fontFamily:IN, cursor:"pointer", border:"none", textDecoration:"none", background:"#DC2626", color:"#fff", boxShadow:"0 4px 18px rgba(220,38,38,.35)" } as React.CSSProperties,
  btnG: { display:"inline-flex", alignItems:"center", gap:"6px", padding:"13px 26px", borderRadius:"12px", fontSize:"15px", fontWeight:700, fontFamily:IN, cursor:"pointer", border:"1.5px solid rgba(255,255,255,.3)", textDecoration:"none", background:"rgba(255,255,255,.12)", color:"#fff" } as React.CSSProperties,
  btnW: { display:"inline-flex", alignItems:"center", gap:"8px", padding:"13px 26px", borderRadius:"12px", fontSize:"15px", fontWeight:700, fontFamily:IN, cursor:"pointer", border:"none", textDecoration:"none", background:"#fff", color:"#DC2626" } as React.CSSProperties,
  btnO: { display:"inline-flex", alignItems:"center", gap:"6px", padding:"11px 22px", borderRadius:"10px", fontSize:"14px", fontWeight:700, fontFamily:IN, cursor:"pointer", border:"2px solid #E5E7EB", textDecoration:"none", background:"#fff", color:"#0B1D3A" } as React.CSSProperties,
};

function Badge({ label, color }: { label: string; color: string }) {
  const map: Record<string,{bg:string;text:string;border:string}> = {
    red:  {bg:"#FEF2F2",text:"#B91C1C",border:"#FCA5A5"},
    green:{bg:"#ECFDF5",text:"#065F46",border:"#6EE7B7"},
    blue: {bg:"#EFF6FF",text:"#1D4ED8",border:"#BFDBFE"},
    teal: {bg:"#F0FDFA",text:"#0F766E",border:"#99F6E4"},
    gold: {bg:"#FFFBEB",text:"#92400E",border:"#FCD34D"},
    gray: {bg:"#F9FAFB",text:"#374151",border:"#E5E7EB"},
  };
  const c = map[color] || map.gray;
  return <span style={{display:"inline-flex",alignItems:"center",borderRadius:"999px",padding:"3px 10px",fontSize:"11.5px",fontWeight:700,background:c.bg,color:c.text,border:`1px solid ${c.border}`}}>{label}</span>;
}

export default function WorkPage() {
  const jobs = [
    {e:"💻",t:"IT & Software",d:"Software engineers, DevOps, data scientists, ML engineers, cloud architects, cybersecurity.",sal:"€55K–€95K",dem:"Highest demand",dc:"red",tip:"19% of IT jobs are English-only. Python, Java, AWS most demanded. Berlin, Munich, Frankfurt top cities.",visa:"EU Blue Card"},
    {e:"⚙️",t:"Engineering",d:"Mechanical, electrical, civil, chemical, automotive and embedded systems engineers.",sal:"€50K–€85K",dem:"High demand",dc:"red",tip:"Bavaria (BMW, Bosch, Siemens) and Baden-Württemberg (Porsche, Daimler) have highest vacancy rates.",visa:"EU Blue Card · Skilled Worker"},
    {e:"🏥",t:"Nursing & Care",d:"Registered nurses, care workers, ICU nurses, elderly care — critical shortage nationwide.",sal:"€32K–€52K",dem:"Critical shortage",dc:"teal",tip:"'Triple Win Programme' actively recruits from Pakistan, India, Philippines. Includes language support + relocation.",visa:"Skilled Worker Visa"},
    {e:"👩‍⚕️",t:"Physicians & Dentists",d:"GPs, specialists, surgeons, dentists — 5,000+ positions unfilled across Germany.",sal:"€70K–€130K",dem:"Critical shortage",dc:"teal",tip:"Approbation (licence) takes 3–12 months per state. Start the recognition process 9–12 months before your move.",visa:"EU Blue Card"},
    {e:"🔨",t:"Craftspeople & Trades",d:"Electricians, plumbers, HVAC engineers, roofers, tilers — all in acute shortage.",sal:"€35K–€62K",dem:"High demand",dc:"red",tip:"§18c visa: experienced craftspeople WITHOUT formal recognition can work with 5 years documented experience.",visa:"§18c Skilled Worker"},
    {e:"🌱",t:"Green Energy",d:"Solar, wind, EV infrastructure, energy efficiency, environmental engineering.",sal:"€45K–€82K",dem:"Rapidly growing",dc:"green",tip:"Germany's Energiewende targets 80% renewables by 2030 — thousands of new positions created every year.",visa:"EU Blue Card · Skilled Worker"},
    {e:"🔬",t:"Scientists",d:"Chemistry, biology, physics, materials science, pharmaceutical research.",sal:"€45K–€72K",dem:"Stable",dc:"blue",tip:"Max Planck (86 institutes), Fraunhofer (76 institutes), Helmholtz — many English-language positions.",visa:"EU Blue Card · §18d Researcher"},
    {e:"🚛",t:"Transport & Logistics",d:"HGV drivers, freight forwarders, supply chain managers, warehouse operations.",sal:"€30K–€52K",dem:"Growing",dc:"teal",tip:"Pakistani Category C licence usually requires a theory re-test in Germany. Start the process early.",visa:"Skilled Worker · §18c"},
    {e:"🎓",t:"Ausbildung",d:"3,500+ nationally recognised training professions — earn while you learn.",sal:"€620–€1,100/mo",dem:"Open now",dc:"gold",tip:"Most companies need B1 German. Search ausbildung.de and apprentissimo.de. Housing often supported.",visa:"§16a Ausbildung Visa"},
  ];

  const cities = [
    {city:"Berlin",    flag:"🏙️", sal:"€58K avg.",  rent:"€600–€1,200",  best:"Tech, startups, creative", eng:"Very high",    south:"Largest Pakistani community. Neukölln, Tempelhof. 80+ mosques.", cos:"Amazon, SAP, Zalando, N26"},
    {city:"Munich",    flag:"🏔️", sal:"€56K avg.",  rent:"€900–€1,500",  best:"Engineering, automotive", eng:"Moderate",      south:"Strong Indian IT community. Very high quality of life.", cos:"BMW, Siemens, Allianz, Google"},
    {city:"Frankfurt", flag:"🏦", sal:"€66K avg.",  rent:"€900–€1,400",  best:"Finance, IT, consulting",  eng:"High",          south:"Large Indian community. 'Little India' in Sachsenhausen.", cos:"Deutsche Bank, ECB, Deloitte"},
    {city:"Hamburg",   flag:"⚓", sal:"€48K avg.",  rent:"€600–€1,300",  best:"Logistics, aviation, media",eng:"Moderate",     south:"Large Pakistani community in Altona & Wandsbek.", cos:"Airbus, Lufthansa Technik"},
    {city:"Stuttgart", flag:"🚗", sal:"€52K avg.",  rent:"€700–€1,300",  best:"Automotive, engineering",  eng:"Moderate",      south:"Strong Indian expat community. Vaihingen, Bad Cannstatt.", cos:"Mercedes-Benz, Porsche, Bosch"},
    {city:"Düsseldorf",flag:"🌆", sal:"€50K avg.",  rent:"€700–€1,200",  best:"Corporate, consulting",    eng:"High",          south:"Germany's largest Indian community (10,000+).", cos:"Vodafone DE, Henkel, E.ON"},
    {city:"Cologne",   flag:"🕌", sal:"€45K avg.",  rent:"€600–€1,100",  best:"Media, advertising, gaming",eng:"Moderate",     south:"Large Pakistani community. Very friendly city culture.", cos:"RTL, Deutsche Telekom, Ford DE"},
    {city:"Leipzig",   flag:"🌱", sal:"€40K avg.",  rent:"€400–€900",    best:"Logistics, IT, renewables", eng:"Lower",         south:"Small but growing South Asian community. Very affordable.", cos:"DHL, BMW Leipzig, Amazon Logistics"},
    {city:"Nuremberg", flag:"🏰", sal:"€46K avg.",  rent:"€550–€1,000",  best:"IT, manufacturing",         eng:"Moderate",      south:"Small community. Excellent quality of life.", cos:"Siemens Energy, Adidas (nearby)"},
  ];

  return (
    <div style={{background:"#F9FAFB"}}>

      {/* ── HERO ── */}
      <section style={{position:"relative",minHeight:"400px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(0.26)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.75))"}}/>
        <div style={{...s.wrap,position:"relative",zIndex:1,width:"100%",padding:"80px 1.5rem"}}>
          <span style={{...s.eye,color:"#FCD34D"}}>💼 Work in Germany 2026</span>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2.4rem,5vw,3.8rem)",fontWeight:900,lineHeight:1.08,letterSpacing:"-0.025em",color:"#fff",maxWidth:"720px",marginBottom:"18px"}}>1.7 million open jobs — your opportunities in Germany</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"600px",lineHeight:1.75,marginBottom:"28px"}}>Germany has a critical shortage of skilled workers. As a Pakistani, Indian or Bangladeshi professional, your skills are genuinely in demand. Here's how to find, apply and succeed.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <Link href="/visa" style={s.btnP}>Check your work visa →</Link>
            <Link href="/consultancy" style={s.btnG}>📅 CV & career consultation</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div style={{background:"#0B1D3A"}}>
        <div style={s.wrap}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
            {[{n:"1.7M",l:"Open vacancies 2026"},{n:"€56,250",l:"Avg. Munich salary"},{n:"€78,000",l:"Senior IT avg. salary"},{n:"19%",l:"IT jobs English-only"}].map((st,i)=>(
              <div key={st.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"1.75rem",color:"#FCD34D"}}>{st.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"3px"}}>{st.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── JOBS GRID ── */}
      <section style={s.sec}>
        <span style={s.eye}>In-demand professions 2026</span>
        <h2 style={s.h2}>Top jobs for South Asian professionals</h2>
        <div style={s.bar}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"18px"}}>
          {jobs.map(j=>(
            <div key={j.t} style={{background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:"20px",padding:"1.4rem",boxShadow:"0 2px 8px rgba(0,0,0,.04)",transition:"all .22s",cursor:"default"}}
              onMouseOver={e=>{e.currentTarget.style.borderColor="#FCA5A5";e.currentTarget.style.boxShadow="0 12px 36px rgba(220,38,38,.1)";e.currentTarget.style.transform="translateY(-3px)";}}
              onMouseOut={e=>{e.currentTarget.style.borderColor="#E5E7EB";e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,.04)";e.currentTarget.style.transform="none";}}>
              <div style={{display:"flex",gap:"14px",alignItems:"flex-start",marginBottom:"12px"}}>
                <div style={{width:"50px",height:"50px",borderRadius:"14px",background:"#F9FAFB",border:"1px solid #E5E7EB",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",flexShrink:0}}>{j.e}</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"15px",marginBottom:"7px"}}>{j.t}</div>
                  <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
                    <Badge label={j.dem} color={j.dc}/>
                    <Badge label={`💶 ${j.sal}`} color="gray"/>
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

      {/* ── CITIES ── */}
      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={s.wrap}>
          <span style={s.eye}>Where to work</span>
          <h2 style={s.h2}>Best German cities for South Asian professionals 2026</h2>
          <div style={s.bar}/>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
            {cities.map(c=>(
              <div key={c.city} style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"18px",padding:"20px 22px",transition:"all .22s"}}
                onMouseOver={e=>{e.currentTarget.style.borderColor="#FCA5A5";e.currentTarget.style.background="#fff";e.currentTarget.style.boxShadow="0 8px 24px rgba(220,38,38,.08)";}}
                onMouseOut={e=>{e.currentTarget.style.borderColor="#E5E7EB";e.currentTarget.style.background="#F9FAFB";e.currentTarget.style.boxShadow="none";}}>
                <div style={{fontFamily:PD,fontWeight:800,fontSize:"18px",color:"#0B1D3A",marginBottom:"12px"}}>{c.flag} {c.city}</div>
                <div style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:"3px 10px",marginBottom:"12px"}}>
                  {(["Salary","Rent","Best for","English"] as string[]).map((k,i) => {
                    const v = [c.sal,c.rent,c.best,c.eng][i];
                    return (
                      <React.Fragment key={k}>
                        <span style={{fontSize:"10px",fontWeight:700,color:"#9CA3AF",textTransform:"uppercase",paddingTop:"3px"}}>{k}:</span>
                        <span style={{fontSize:"12.5px",color:"#374151"}}>{v}</span>
                      </React.Fragment>
                    );
                  })}
                </div>
                <div style={{fontSize:"11.5px",color:"#DC2626",fontWeight:600,marginBottom:"3px"}}>🌍 South Asian community:</div>
                <div style={{fontSize:"12px",color:"#6B7280",lineHeight:1.55,marginBottom:"8px"}}>{c.south}</div>
                <div style={{fontSize:"11px",color:"#9CA3AF"}}>Top employers: {c.cos}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── JOB SEARCH STRATEGY ── */}
      <section style={s.sec}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"56px",alignItems:"start"}}>
          <div>
            <span style={s.eye}>Job search strategy</span>
            <h2 style={s.h2}>How to land a job from abroad</h2>
            <div style={s.bar}/>
            {[
              {n:"1",t:"German-style CV (Lebenslauf)",d:"2 pages max. Professional photo (headshot, business attire). Personal details (DoB, nationality). Reverse chronological. Download free templates at europass.eu."},
              {n:"2",t:"Best job portals",d:"StepStone.de (largest), Indeed.de, LinkedIn, Xing.de (Germany's LinkedIn), Arbeitsagentur.de (government), Make-it-in-Germany.de. Set email alerts immediately."},
              {n:"3",t:"Degree recognition (Anerkennung)",d:"Check anabin.kmk.org. Regulated professions need formal Anerkennungsbescheid. Start 6–12 months before your planned move. VisaVista can help."},
              {n:"4",t:"German language = salary boost",d:"B1 → permanent residence. B2 → most professional jobs. C1 → managerial roles. Goethe Institut has centres in Karachi, Lahore, Islamabad, Dhaka, Delhi."},
              {n:"5",t:"LinkedIn & Xing profile",d:"German recruiters use both heavily. Set Open to Work, add desired salary. 64% of German companies now offer hybrid work. Many IT companies are fully English."},
              {n:"6",t:"Cover letter (Anschreiben)",d:"German employers expect a personalised 1-page letter. Address the hiring manager by name. Explain why THIS company and THIS role specifically."},
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

          {/* Salary card + recognition */}
          <div>
            <div style={{borderRadius:"22px",overflow:"hidden",position:"relative",aspectRatio:"4/3",marginBottom:"22px"}}>
              <div style={{position:"absolute",inset:0,backgroundImage:`url(${TEAM})`,backgroundSize:"cover",backgroundPosition:"center"}}/>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(11,29,58,.9) 0%,transparent 55%)"}}/>
              <div style={{position:"absolute",bottom:"20px",left:"20px",right:"20px",zIndex:1}}>
                <div style={{background:"rgba(255,255,255,.12)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,.2)",borderRadius:"14px",padding:"16px 18px"}}>
                  <div style={{fontSize:"11px",fontWeight:700,color:"#FCD34D",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"8px"}}>Average gross salaries 2026</div>
                  {[["IT Engineer (senior)","€78,000"],["Software Developer","€65,000"],["Mechanical Engineer","€58,000"],["Physician (GP)","€85,000"],["Registered Nurse","€42,000"],["Electrician (Meister)","€52,000"],["Ausbildung (IT)","€900/mo"]].map(([r,sv])=>(
                    <div key={r} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,.1)"}}>
                      <span style={{fontSize:"12.5px",color:"rgba(255,255,255,.7)"}}>{r}</span>
                      <span style={{fontSize:"12.5px",fontWeight:700,color:"#fff"}}>{sv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"20px",padding:"22px 24px"}}>
              <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"16px",marginBottom:"16px"}}>🎓 Degree recognition by country</div>
              {[
                {flag:"🇵🇰",c:"Pakistan",i:"HEC degrees mostly accepted. IBA, LUMS, FAST, NUST well-regarded. MOFA Apostille required. APS mandatory for all visa applications. Doctors/engineers: apply to state authority 9+ months early."},
                {flag:"🇮🇳",c:"India",    i:"IIT, IIM, AIIMS, NIT: highly respected. MEA Apostille via mea.gov.in. Engineering (IEI) recognition usually 4–8 weeks. APS not required for India."},
                {flag:"🇧🇩",c:"Bangladesh",i:"UGC-accredited degrees via ZAB. BUET (engineering) globally regarded. Medicine: 6–12 months Approbation. UGC + MoFA attestation chain. APS not required."},
              ].map(rc=>(
                <div key={rc.c} style={{display:"flex",gap:"12px",marginBottom:"14px",paddingBottom:"14px",borderBottom:"1px solid #E5E7EB"}}>
                  <span style={{fontSize:"24px",flexShrink:0}}>{rc.flag}</span>
                  <div>
                    <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"14px",marginBottom:"4px"}}>{rc.c}</div>
                    <div style={{fontSize:"12.5px",color:"#6B7280",lineHeight:1.6}}>{rc.i}</div>
                  </div>
                </div>
              ))}
              <Link href="/consultancy" style={{...s.btnP,width:"100%",justifyContent:"center",fontSize:"13.5px",padding:"11px 20px",display:"flex"}}>Get recognition help →</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
