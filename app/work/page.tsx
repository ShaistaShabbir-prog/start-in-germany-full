"use client";
import GlobalDisclaimer from "@/components/GlobalDisclaimer";
import React from "react";
import Link from "next/link";

const PD = '"Playfair Display",Georgia,serif';
const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';
const HERO = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85&auto=format&fit=crop";
const TEAM = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop";

const btnP: React.CSSProperties = {display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"none",textDecoration:"none",background:"#DC2626",color:"#fff",boxShadow:"0 4px 18px rgba(220,38,38,.35)"};
const btnG: React.CSSProperties = {display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"1.5px solid rgba(255,255,255,.3)",textDecoration:"none",background:"rgba(255,255,255,.12)",color:"#fff"};
const wrap: React.CSSProperties = {maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem"};
const sec: React.CSSProperties  = {maxWidth:"1200px",margin:"0 auto",padding:"5rem 1.5rem"};
const h2s: React.CSSProperties  = {fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A"};
const eye: React.CSSProperties  = {display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",color:"#DC2626",marginBottom:"10px"};
const bar: React.CSSProperties  = {width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 24px"};

function Badge({label,color}:{label:string;color:string}){
  const m:{[k:string]:{bg:string;t:string;b:string}} = {
    red:{bg:"#FEF2F2",t:"#B91C1C",b:"#FCA5A5"},
    green:{bg:"#ECFDF5",t:"#065F46",b:"#6EE7B7"},
    blue:{bg:"#EFF6FF",t:"#1D4ED8",b:"#BFDBFE"},
    teal:{bg:"#F0FDFA",t:"#0F766E",b:"#99F6E4"},
    gold:{bg:"#FFFBEB",t:"#92400E",b:"#FCD34D"},
    gray:{bg:"#F9FAFB",t:"#374151",b:"#E5E7EB"},
  };
  const c=m[color]||m.gray;
  return <span style={{display:"inline-flex",alignItems:"center",borderRadius:"999px",padding:"3px 10px",fontSize:"11.5px",fontWeight:700,background:c.bg,color:c.t,border:`1px solid ${c.b}`}}>{label}</span>;
}

export default function WorkPage(){
  const jobs=[
    {e:"💻",t:"IT & Software",d:"Software engineers, DevOps, data scientists, ML engineers, cloud & cybersecurity.",sal:"€55K–€95K",dem:"Highest demand",dc:"red",tip:"19% IT jobs English-only. Python, Java, AWS most demanded. Berlin, Munich, Frankfurt top cities.",visa:"EU Blue Card"},
    {e:"⚙️",t:"Engineering",d:"Mechanical, electrical, civil, chemical, automotive and embedded systems engineers.",sal:"€50K–€85K",dem:"High demand",dc:"red",tip:"Bavaria (BMW, Bosch, Siemens) and Baden-Württemberg (Porsche, Daimler) have highest vacancy rates.",visa:"EU Blue Card · Skilled Worker"},
    {e:"🏥",t:"Nursing & Care",d:"Registered nurses, care workers, ICU nurses, elderly care — critical nationwide shortage.",sal:"€32K–€52K",dem:"Critical shortage",dc:"teal",tip:"'Triple Win' programme recruits from Pakistan, India & Philippines. Includes language support + relocation.",visa:"Skilled Worker Visa"},
    {e:"👩‍⚕️",t:"Physicians",d:"GPs, specialists, surgeons, dentists — 5,000+ unfilled positions across Germany.",sal:"€70K–€130K",dem:"Critical shortage",dc:"teal",tip:"Approbation licence takes 3–12 months per state. Start recognition 9–12 months before your move.",visa:"EU Blue Card"},
    {e:"🔨",t:"Craftspeople",d:"Electricians, plumbers, HVAC engineers, roofers — all in acute shortage.",sal:"€35K–€62K",dem:"High demand",dc:"red",tip:"§18c visa: 5 years documented experience = no formal recognition needed.",visa:"§18c Skilled Worker"},
    {e:"🌱",t:"Green Energy",d:"Solar, wind, EV infrastructure, energy efficiency, environmental engineering.",sal:"€45K–€82K",dem:"Rapidly growing",dc:"green",tip:"Germany's Energiewende targets 80% renewables by 2030 — thousands of new roles annually.",visa:"EU Blue Card · Skilled Worker"},
    {e:"🔬",t:"Scientists",d:"Chemistry, biology, physics, materials science, pharmaceutical research.",sal:"€45K–€72K",dem:"Stable",dc:"blue",tip:"Max Planck (86 institutes), Fraunhofer (76), Helmholtz — many English-language positions.",visa:"EU Blue Card · §18d Researcher"},
    {e:"🚛",t:"Transport & Logistics",d:"HGV drivers, freight forwarders, supply chain, warehouse operations.",sal:"€30K–€52K",dem:"Growing",dc:"teal",tip:"Pakistani Category C licence usually requires a theory re-test in Germany. Start process early.",visa:"Skilled Worker · §18c"},
    {e:"🎓",t:"Ausbildung",d:"3,500+ nationally recognised training professions — earn while you learn.",sal:"€620–€1,100/mo",dem:"Open now",dc:"gold",tip:"Search ausbildung.de and apprentissimo.de. Most companies need B1 German minimum.",visa:"§16a Ausbildung Visa"},
  ];

  const cities=[
    {city:"Berlin",    flag:"🏙️",sal:"€58K avg.",rent:"€600–€1,200",best:"Tech, startups, creative",eng:"Very high",south:"Largest Pakistani community. Neukölln, Tempelhof. 80+ mosques.",cos:"Amazon, SAP, Zalando, N26"},
    {city:"Munich",    flag:"🏔️",sal:"€56K avg.",rent:"€900–€1,500",best:"Engineering, automotive",eng:"Moderate",south:"Strong Indian IT community. Very high quality of life.",cos:"BMW, Siemens, Allianz, Google"},
    {city:"Frankfurt", flag:"🏦",sal:"€66K avg.",rent:"€900–€1,400",best:"Finance, IT, consulting",eng:"High",south:"Large Indian community. 'Little India' in Sachsenhausen.",cos:"Deutsche Bank, ECB, Deloitte"},
    {city:"Hamburg",   flag:"⚓",sal:"€48K avg.",rent:"€600–€1,300",best:"Logistics, aviation, media",eng:"Moderate",south:"Large Pakistani community in Altona & Wandsbek.",cos:"Airbus, Lufthansa Technik"},
    {city:"Stuttgart", flag:"🚗",sal:"€52K avg.",rent:"€700–€1,300",best:"Automotive, engineering",eng:"Moderate",south:"Strong Indian expat community. Vaihingen, Bad Cannstatt.",cos:"Mercedes-Benz, Porsche, Bosch"},
    {city:"Düsseldorf",flag:"🌆",sal:"€50K avg.",rent:"€700–€1,200",best:"Corporate, consulting",eng:"High",south:"Germany's largest Indian community (10,000+).",cos:"Vodafone DE, Henkel, E.ON"},
    {city:"Cologne",   flag:"🕌",sal:"€45K avg.",rent:"€600–€1,100",best:"Media, advertising, gaming",eng:"Moderate",south:"Large Pakistani community. Very friendly city culture.",cos:"RTL, Deutsche Telekom, Ford DE"},
    {city:"Leipzig",   flag:"🌱",sal:"€40K avg.",rent:"€400–€900",best:"Logistics, IT, renewables",eng:"Lower",south:"Small but growing South Asian community. Very affordable.",cos:"DHL, BMW Leipzig, Amazon Logistics"},
    {city:"Nuremberg", flag:"🏰",sal:"€46K avg.",rent:"€550–€1,000",best:"IT, manufacturing",eng:"Moderate",south:"Small community. Excellent quality of life.",cos:"Siemens Energy, Adidas (nearby)"},
  ];

  return(
    <div style={{background:"#F9FAFB"}}>

      {/* HERO */}
      <section style={{position:"relative",minHeight:"400px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(0.26)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.75))"}}/>
        <div style={{...wrap,position:"relative",zIndex:1,width:"100%",padding:"80px 1.5rem"}}>
          <span style={{...eye,color:"#FCD34D"}}>💼 Work in Germany 2026</span>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2.4rem,5vw,3.8rem)",fontWeight:900,lineHeight:1.08,letterSpacing:"-0.025em",color:"#fff",maxWidth:"720px",marginBottom:"18px"}}>1.7 million open jobs — your opportunities in Germany</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"600px",lineHeight:1.75,marginBottom:"28px"}}>Germany has a critical shortage of skilled workers. As a Pakistani, Indian or Bangladeshi professional, your skills are genuinely in demand. Here's how to find, apply and succeed.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <Link href="/visa" style={btnP}>Check your work visa →</Link>
            <Link href="/consultancy" style={btnG}>📅 CV & career consultation</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{background:"#0B1D3A"}}>
        <div style={wrap}>
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

      {/* JOBS */}
      <section style={sec}>
        <span style={eye}>In-demand professions 2026</span>
        <h2 style={h2s}>Top jobs for South Asian professionals</h2>
        <div style={bar}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"18px"}}>
          {jobs.map(j=>(
            <div key={j.t} style={{background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:"20px",padding:"1.4rem",boxShadow:"0 2px 8px rgba(0,0,0,.04)"}}>
              <div style={{display:"flex",gap:"14px",alignItems:"flex-start",marginBottom:"12px"}}>
                <div style={{width:"50px",height:"50px",borderRadius:"14px",background:"#F9FAFB",border:"1px solid #E5E7EB",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",flexShrink:0}}>{j.e}</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"15px",marginBottom:"7px"}}>{j.t}</div>
                  <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
                    <Badge label={j.dem} color={j.dc}/>
                    <Badge label={"💶 "+j.sal} color="gray"/>
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

      {/* CITIES */}
      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={wrap}>
          <span style={eye}>Where to work</span>
          <h2 style={h2s}>Best German cities for South Asian professionals 2026</h2>
          <div style={bar}/>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"16px"}}>
            {cities.map(c=>(
              <div key={c.city} style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"18px",padding:"20px 22px"}}>
                <div style={{fontFamily:PD,fontWeight:800,fontSize:"18px",color:"#0B1D3A",marginBottom:"12px"}}>{c.flag} {c.city}</div>
                <div style={{display:"flex",flexDirection:"column",gap:"3px",marginBottom:"12px"}}>
                  {[["Salary",c.sal],["Rent (1-bed)",c.rent],["Best for",c.best],["English",c.eng]].map(([k,v])=>(
                    <div key={k} style={{display:"flex",gap:"8px",alignItems:"baseline"}}>
                      <span style={{fontSize:"10px",fontWeight:700,color:"#9CA3AF",textTransform:"uppercase",flexShrink:0,minWidth:"70px"}}>{k}:</span>
                      <span style={{fontSize:"12.5px",color:"#374151"}}>{v}</span>
                    </div>
                  ))}
                </div>
                <div style={{fontSize:"11.5px",color:"#DC2626",fontWeight:600,marginBottom:"3px"}}>🌍 South Asian community:</div>
                <div style={{fontSize:"12px",color:"#6B7280",lineHeight:1.55,marginBottom:"8px"}}>{c.south}</div>
                <div style={{fontSize:"11px",color:"#9CA3AF"}}>Top employers: {c.cos}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* JOB SEARCH TIPS */}
      <section style={sec}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"clamp(24px,4vw,56px)",alignItems:"start"}}>
          <div>
            <span style={eye}>Job search strategy</span>
            <h2 style={h2s}>How to land a job from abroad</h2>
            <div style={bar}/>
            {[
              {n:"1",t:"German-style CV (Lebenslauf)",d:"2 pages max. Professional photo required. Personal details (DoB, nationality). Reverse chronological. Download free templates at europass.eu."},
              {n:"2",t:"Best job portals",d:"StepStone.de (largest), Indeed.de, LinkedIn, Xing.de (Germany's LinkedIn), Arbeitsagentur.de (government), Make-it-in-Germany.de. Set email alerts immediately."},
              {n:"3",t:"Degree recognition (Anerkennung)",d:"Check anabin.kmk.org. Regulated professions need formal Anerkennungsbescheid. Start 6–12 months before your planned move."},
              {n:"4",t:"German language = salary boost",d:"B1 → permanent residence track. B2 → most professional jobs. C1 → managerial roles. Goethe Institut has centres in Karachi, Lahore, Islamabad, Dhaka, Delhi."},
              {n:"5",t:"LinkedIn & Xing profile",d:"German recruiters use both heavily. Set Open to Work, add desired salary. 64% of German companies now offer hybrid work. Many IT companies are fully English."},
              {n:"6",t:"Cover letter (Anschreiben)",d:"German employers expect a personalised 1-page letter. Address the hiring manager by name. Link your specific experience to their exact requirements."},
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
                {flag:"🇵🇰",c:"Pakistan",i:"HEC degrees mostly accepted. IBA, LUMS, FAST, NUST well-regarded. MOFA Apostille required. APS certificate mandatory for all visa applications."},
                {flag:"🇮🇳",c:"India",    i:"IIT, IIM, AIIMS, NIT: highly respected. MEA Apostille via mea.gov.in. Engineering recognition usually 4–8 weeks. APS not required."},
                {flag:"🇧🇩",c:"Bangladesh",i:"UGC-accredited degrees via ZAB. BUET (engineering) globally regarded. Medicine: 6–12 months Approbation. APS not required."},
              ].map(rc=>(
                <div key={rc.c} style={{display:"flex",gap:"12px",marginBottom:"14px",paddingBottom:"14px",borderBottom:"1px solid #E5E7EB"}}>
                  <span style={{fontSize:"24px",flexShrink:0}}>{rc.flag}</span>
                  <div>
                    <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"14px",marginBottom:"4px"}}>{rc.c}</div>
                    <div style={{fontSize:"12.5px",color:"#6B7280",lineHeight:1.6}}>{rc.i}</div>
                  </div>
                </div>
              ))}
              <Link href="/consultancy" style={{...btnP,width:"100%",justifyContent:"center",fontSize:"13.5px",padding:"11px 20px",display:"flex"}}>Get recognition help →</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
