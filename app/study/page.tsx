"use client";
import React from "react";
import Link from "next/link";
const PD = '"Playfair Display",Georgia,serif';
const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';
const HERO = "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1400&q=80&auto=format&fit=crop";

const s = {
  wrap:{maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem"} as React.CSSProperties,
  sec: {maxWidth:"1200px",margin:"0 auto",padding:"5rem 1.5rem"} as React.CSSProperties,
  h2:  {fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A"} as React.CSSProperties,
  eye: {display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase" as const,letterSpacing:"0.15em",color:"#DC2626",marginBottom:"10px"},
  bar: {width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 24px"} as React.CSSProperties,
  btnP:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"none",textDecoration:"none",background:"#DC2626",color:"#fff",boxShadow:"0 4px 18px rgba(220,38,38,.35)"} as React.CSSProperties,
  btnG:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"1.5px solid rgba(255,255,255,.3)",textDecoration:"none",background:"rgba(255,255,255,.12)",color:"#fff"} as React.CSSProperties,
  tick:{width:"20px",height:"20px",borderRadius:"50%",background:"#ECFDF5",border:"1.5px solid #6EE7B7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"10px",color:"#059669",marginTop:"1px"} as React.CSSProperties,
};

function CheckItem({children}:{children:React.ReactNode}){
  return <li style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"10px",listStyle:"none"}}>
    <span style={s.tick}>✓</span>
    <span style={{fontSize:"13px",color:"#374151",lineHeight:1.6}}>{children}</span>
  </li>;
}

export default function StudyPage() {
  const studyOptions = [
    {icon:"🏛️",bg:"#FEF2F2",border:"#FCA5A5",title:"Public University",cost:"€0 tuition · €100–€400 semester fee",duration:"3–5 years",lang:"German (B2) or English (IELTS 6.0+)",
     desc:"400+ German public universities charge zero tuition. The semester fee often includes a public transport pass. Apply via uni-assist.de. Top universities: LMU Munich, TU Munich, RWTH Aachen, Heidelberg, Humboldt Berlin.",
     tips:["Apply via uni-assist.de (€75 fee) — deadline: 15 July (winter) / 15 January (summer)","German-taught: need B2 (TestDaF 4, DSH-2, Goethe B2)","English-taught: IELTS 6.0+ or TOEFL 80+","🇵🇰 APS Certificate MANDATORY — apply at eservices.hec.gov.pk (4–8 weeks)","After graduation: automatic 18-month job-seeker visa"]},
    {icon:"🔧",bg:"#ECFDF5",border:"#6EE7B7",title:"Ausbildung (Dual Training)",cost:"Free — you earn €620–€1,100/month",duration:"2–3 years",lang:"German B1–B2 (most companies require B1 min.)",
     desc:"Germany's world-famous dual system — 3–4 days/week at a company, 1–2 days at vocational school. After completion: world-class German qualification and the right to stay permanently in Germany.",
     tips:["Find positions on ausbildung.de, apprentissimo.de, company career sites","Popular for South Asians: nursing, IT (Fachinformatiker), electrical, chef, logistics","Apply 12–18 months before desired start date (usually August/September)","After completion: §18a residence permit to stay in Germany permanently","Some employers offer accommodation — ask when applying"]},
    {icon:"📐",bg:"#EFF6FF",border:"#BFDBFE",title:"Technical University (TU)",cost:"€0 tuition · highly competitive",duration:"3–5 years",lang:"German or English (varies by programme)",
     desc:"German Technical Universities are globally ranked. RWTH Aachen (engineering #1), TU Munich (top 50 world), TU Berlin, KIT Karlsruhe, TU Dresden. Extremely strong for engineering, CS, physics, architecture.",
     tips:["Very competitive — strong grades essential (typically 70%+ equivalent)","NC (Numerus Clausus) applies to some popular programmes","Many co-op programmes: Siemens, BMW, Bosch, SAP, Airbus","German TU degree opens doors globally — highly respected by employers"]},
    {icon:"📚",bg:"#F5F3FF",border:"#C4B5FD",title:"Studienkolleg (Foundation Year)",cost:"Free at public Studienkolleg",duration:"1 year",lang:"German C1 required for entry",
     desc:"If your school-leaving certificate is not directly equivalent to German Abitur (most Pakistani FSc/Matric, some Bangladeshi HSC), you complete a 1-year Studienkolleg, then take the Feststellungsprüfung (FSP) for university entry.",
     tips:["🇵🇰 Required for most Pakistani FSc/Matric applicants — check anabin.kmk.org","Language requirement: DSH-1 or TestDaF 3 for entry, higher for completion","After passing FSP: full eligibility for any German university","Apply to public Studienkolleg — it's free. Private ones cost €5K–€15K/year"]},
  ];

  const unis = [
    {name:"TU Munich (TUM)",rank:"QS #37",fields:"Engineering, CS, Sciences",eng:true},
    {name:"LMU Munich",rank:"QS #54",fields:"Medicine, Law, Sciences",eng:false},
    {name:"RWTH Aachen",rank:"QS #106",fields:"Engineering, IT, Architecture",eng:true},
    {name:"Heidelberg",rank:"QS #87",fields:"Medicine, Sciences, Law",eng:false},
    {name:"Humboldt Berlin",rank:"QS #120",fields:"Humanities, Sciences",eng:false},
    {name:"KIT Karlsruhe",rank:"QS #119",fields:"Engineering, Physics, Maths",eng:true},
    {name:"TU Berlin",rank:"Top 150",fields:"Engineering, IT, Business",eng:true},
    {name:"Freie Uni Berlin",rank:"Top 100",fields:"Social Sciences, Law, Medicine",eng:false},
    {name:"Uni Hamburg",rank:"Top 200",fields:"Sciences, Law, Business",eng:false},
  ];

  return (
    <div style={{background:"#F9FAFB"}}>

      {/* HERO */}
      <section style={{position:"relative",minHeight:"400px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center 30%",filter:"brightness(0.26)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.75))"}}/>
        <div style={{...s.wrap,position:"relative",zIndex:1,width:"100%",padding:"80px 1.5rem"}}>
          <span style={{...s.eye,color:"#FCD34D"}}>🎓 Study & Ausbildung in Germany</span>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2.4rem,5vw,3.8rem)",fontWeight:900,lineHeight:1.08,letterSpacing:"-0.025em",color:"#fff",maxWidth:"700px",marginBottom:"18px"}}>Study in Germany — often free, always world-class</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"580px",lineHeight:1.75,marginBottom:"28px"}}>Most German public universities charge zero tuition. Your complete guide — from university application and APS certificate to graduating and staying permanently.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <Link href="/visa" style={s.btnP}>Check student visa →</Link>
            <Link href="/consultancy" style={s.btnG}>📅 Get admission help</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{background:"#0B1D3A"}}>
        <div style={s.wrap}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
            {[{n:"€0",l:"Tuition at public unis"},{n:"€934/mo",l:"Blocked account needed"},{n:"18 mo",l:"Job-seeker visa after grad"},{n:"450+",l:"English-taught programmes"}].map((st,i)=>(
              <div key={st.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"1.75rem",color:"#FCD34D"}}>{st.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"3px"}}>{st.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STUDY OPTIONS */}
      <section style={s.sec}>
        <span style={s.eye}>Your options</span>
        <h2 style={s.h2}>Ways to study &amp; train in Germany</h2>
        <div style={s.bar}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:"22px",marginBottom:"48px"}}>
          {studyOptions.map(opt=>(
            <div key={opt.title} style={{background:opt.bg,border:`1.5px solid ${opt.border}`,borderRadius:"20px",padding:"1.75rem"}}>
              <div style={{display:"flex",gap:"14px",alignItems:"flex-start",marginBottom:"14px"}}>
                <span style={{fontSize:"32px",flexShrink:0}}>{opt.icon}</span>
                <div>
                  <div style={{fontFamily:PD,fontWeight:800,fontSize:"18px",color:"#0B1D3A",lineHeight:1.2,marginBottom:"8px"}}>{opt.title}</div>
                  <div style={{display:"flex",gap:"7px",flexWrap:"wrap"}}>
                    <span style={{display:"inline-flex",borderRadius:"999px",padding:"3px 10px",fontSize:"11.5px",fontWeight:700,background:"#ECFDF5",color:"#065F46",border:"1px solid #6EE7B7"}}>💶 {opt.cost}</span>
                    <span style={{display:"inline-flex",borderRadius:"999px",padding:"3px 10px",fontSize:"11.5px",fontWeight:700,background:"#EFF6FF",color:"#1D4ED8",border:"1px solid #BFDBFE"}}>⏱ {opt.duration}</span>
                  </div>
                </div>
              </div>
              <div style={{background:"rgba(0,0,0,.04)",borderRadius:"10px",padding:"8px 12px",marginBottom:"12px"}}>
                <span style={{fontSize:"11px",fontWeight:700,color:"#6B7280",textTransform:"uppercase" as const,letterSpacing:"0.07em"}}>Language: </span>
                <span style={{fontSize:"13px",color:"#374151",fontWeight:600}}>{opt.lang}</span>
              </div>
              <p style={{fontSize:"13.5px",color:"#374151",lineHeight:1.7,marginBottom:"14px"}}>{opt.desc}</p>
              <ul style={{listStyle:"none",padding:0}}>
                {opt.tips.map((t,i)=><CheckItem key={i}>{t}</CheckItem>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"24px",padding:"36px 40px",marginBottom:"32px"}}>
          <h2 style={{...s.h2,marginBottom:"8px"}}>🇵🇰🇮🇳🇧🇩🇦🇫 Complete checklist for South Asian applicants</h2>
          <div style={s.bar}/>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"14px"}}>
            {[
              {n:"1",t:"Check certificate equivalency",d:"Use anabin.kmk.org. FSc Pakistan → usually needs Studienkolleg. BSc/BA → usually direct entry. A-levels/HSC → often direct entry."},
              {n:"2",t:"🇵🇰 APS Certificate (Pakistan ONLY)",d:"MANDATORY for all Pakistani degree holders. Apply at eservices.hec.gov.pk. HEC verification + APS processing: 4–8 weeks. Without it, no German university will process you."},
              {n:"3",t:"Language requirements",d:"German-taught: DSH-2, TestDaF 4, or Goethe B2. English-taught: IELTS 6.0–6.5 or TOEFL 80+. Goethe Institut has centres in Karachi, Lahore, Islamabad, Dhaka, Delhi."},
              {n:"4",t:"Apply to universities",d:"Apply via uni-assist.de (€75 fee) or directly. Apply to 5–8 universities. Deadlines: 15 July (winter semester) / 15 January (summer semester)."},
              {n:"5",t:"Open blocked account",d:"Sperrkonto: €934/month × 12 = €11,208. Open with Coracle, Expatrio, Fintiba or Deutsche Bank. Takes 3–10 business days."},
              {n:"6",t:"Health insurance",d:"German public health insurance (TK, AOK, Barmer) ~€120/month for students. Confirm before your visa appointment."},
              {n:"7",t:"Apply for student visa",d:"Pakistan: CSP queue-based system at pakistan.diplo.de. India: VFS Global direct booking. Bangladesh: dhaka.diplo.de queue system. Fee: €75–€80."},
              {n:"8",t:"Arrive & settle in",d:"Anmeldung (address registration) within 14 days. Enrol at university. Get Semesterticket (public transport pass). Open bank account."},
            ].map(item=>(
              <div key={item.n} style={{display:"flex",gap:"12px",padding:"14px 16px",background:"#F9FAFB",borderRadius:"14px",border:"1px solid #E5E7EB"}}>
                <div style={{width:"30px",height:"30px",borderRadius:"9px",background:"#DC2626",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:PD,fontWeight:800,fontSize:"13px",flexShrink:0}}>{item.n}</div>
                <div>
                  <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"14px",marginBottom:"4px"}}>{item.t}</div>
                  <div style={{fontSize:"12.5px",color:"#6B7280",lineHeight:1.6}}>{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top universities */}
        <div style={{background:"#0B1D3A",borderRadius:"24px",padding:"40px 44px"}}>
          <h2 style={{...s.h2,color:"#fff",marginBottom:"8px"}}>🏆 Top German universities for South Asian students</h2>
          <div style={{...s.bar}}/>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"14px"}}>
            {unis.map(u=>(
              <div key={u.name} style={{background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.1)",borderRadius:"14px",padding:"16px 18px"}}>
                <div style={{fontWeight:700,color:"#fff",fontSize:"14px",marginBottom:"4px"}}>{u.name}</div>
                <div style={{fontSize:"11.5px",color:"#FCD34D",marginBottom:"5px",fontWeight:600}}>{u.rank}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",lineHeight:1.5,marginBottom:"8px"}}>{u.fields}</div>
                <span style={{background:u.eng?"rgba(16,185,129,.2)":"rgba(255,255,255,.1)",color:u.eng?"#34D399":"rgba(255,255,255,.5)",fontSize:"10px",fontWeight:700,padding:"3px 8px",borderRadius:"999px"}}>{u.eng?"✓ English programmes":"Mostly German"}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-graduation path */}
      <div style={{background:"#fff",padding:"0 1.5rem 5rem"}}>
        <div style={s.wrap}>
          <div style={{textAlign:"center",maxWidth:"580px",margin:"0 auto 40px"}}>
            <span style={s.eye}>After graduation</span>
            <h2 style={s.h2}>From student to permanent resident</h2>
            <div style={{...s.bar,margin:"14px auto"}}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"16px"}}>
            {[
              {n:"1",i:"🎓",t:"Graduate",d:"Complete degree or Ausbildung. German qualification = globally respected."},
              {n:"2",i:"🔍",t:"18-month visa",d:"Automatic job-seeker extension after graduating from a German university."},
              {n:"3",i:"💼",t:"Get a job",d:"Land a job with salary ≥ €50,700/yr → apply for EU Blue Card immediately."},
              {n:"4",i:"🏠",t:"Permanent residence",d:"21 months with B1 German or 33 months without. Then citizenship after 5 years."},
            ].map(st=>(
              <div key={st.n} style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"20px",padding:"22px 18px",textAlign:"center"}}>
                <div style={{width:"38px",height:"38px",borderRadius:"50%",background:"#DC2626",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:PD,fontWeight:800,fontSize:"15px",margin:"0 auto 12px"}}>{st.n}</div>
                <div style={{fontSize:"28px",marginBottom:"10px"}}>{st.i}</div>
                <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"14px",marginBottom:"7px"}}>{st.t}</div>
                <div style={{fontSize:"12.5px",color:"#6B7280",lineHeight:1.6}}>{st.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{...s.wrap,background:"linear-gradient(135deg,#DC2626,#991B1B)",borderRadius:"28px",padding:"52px",position:"relative",overflow:"hidden",textAlign:"center"}}>
          <div style={{position:"absolute",top:"-60px",right:"-60px",width:"250px",height:"250px",borderRadius:"50%",background:"rgba(255,255,255,.07)"}}/>
          <h2 style={{fontFamily:PD,fontWeight:800,color:"#fff",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",marginBottom:"12px",position:"relative",zIndex:1}}>Need help with university applications or student visa?</h2>
          <p style={{color:"rgba(255,255,255,.72)",fontSize:"16px",marginBottom:"26px",position:"relative",zIndex:1}}>Our consultants have helped hundreds of Pakistani, Indian and Bangladeshi students get into German universities. Book a free call today.</p>
          <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap",position:"relative",zIndex:1}}>
            <Link href="/consultancy" style={{...s.btnG,background:"#fff",color:"#DC2626",border:"none",fontWeight:800}}>📅 Book free consultation</Link>
            <Link href="/visa" style={s.btnG}>Student visa guide →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
