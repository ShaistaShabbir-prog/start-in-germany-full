import Link from "next/link";
const PD = '"Playfair Display",Georgia,serif';
const HERO  = "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1400&q=80&auto=format&fit=crop";
const UNI   = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80&auto=format&fit=crop";
const AUSB  = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop";

export default function StudyPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{position:"relative",minHeight:"400px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center 30%",filter:"brightness(0.28)"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.96),rgba(11,29,58,.75))"}} />
        <div style={{position:"absolute",top:"-80px",right:"-60px",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(220,38,38,.1)"}} />
        <div className="wrap" style={{position:"relative",zIndex:1,padding:"80px 1.5rem"}}>
          <span className="eyebrow" style={{color:"#FCD34D"}}>🎓 Study & Ausbildung in Germany</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"700px",marginBottom:"18px"}}>Study in Germany — often free, always world-class</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"580px",lineHeight:1.75,marginBottom:"28px"}}>Most German public universities charge only €100–€400/semester in admin fees. No tuition. Here's your complete guide from application to staying permanently after graduation.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <Link href="/visa" className="btn btn-primary">Check student visa →</Link>
            <Link href="/consultancy" className="btn btn-ghost-light">📅 Get admission help</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div style={{background:"#0B1D3A"}}>
        <div className="wrap">
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
            {[
              {n:"€0",l:"Tuition at public unis"},
              {n:"€934/mo",l:"Blocked account needed"},
              {n:"18 mo",l:"Job-seeker visa after graduation"},
              {n:"450+",l:"English-taught programmes"},
            ].map((s,i)=>(
              <div key={s.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"1.75rem",color:"#FCD34D"}}>{s.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"3px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Study options */}
      <section className="sec">
        <span className="eyebrow">Your options</span>
        <h2 className="h2" style={{marginBottom:"8px"}}>Ways to study &amp; train in Germany</h2>
        <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 36px"}} />
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"24px",marginBottom:"48px"}}>
          {[
            {icon:"🏛️",color:"#FEF2F2",border:"#FCA5A5",title:"Public University (Bachelor / Master / PhD)",lang:"German or English",cost:"€100–€400/semester admin fee only",duration:"3–5 years",desc:"Germany has 400+ public universities. Most offer free tuition — you only pay a semester fee (Semesterbeitrag) which often includes a public transport pass. Top institutions: LMU Munich, TU Munich, RWTH Aachen, Humboldt Berlin, Heidelberg.",tips:["Apply via uni-assist.de for most universities","Deadline: usually 15 July (winter) / 15 January (summer)","German degree = Abitur equivalent (FSc/A-levels/HSC accepted at most unis)","B2 German for German-taught · IELTS/TOEFL for English-taught"]},
            {icon:"🔧",color:"#ECFDF5",border:"#6EE7B7",title:"Ausbildung (Dual Vocational Training)",lang:"German (B1–B2 required)",cost:"Free — you earn €600–€1,100/month",duration:"2–3 years",desc:"Germany's world-famous dual system: you train with a company (3–4 days/week) and attend vocational school (1–2 days/week). After 2–3 years you have a recognised German qualification and can apply for permanent residence.",tips:["Sector examples: IT, nursing, electrician, chef, logistics, banking","Your employer pays you every month during training","After completion: stay permanently with §18a Aufenthaltsgesetz","Apply directly to companies on Ausbildung.de, StepStone, company websites"]},
            {icon:"📐",color:"#EFF6FF",border:"#BFDBFE",title:"Technical University (TU / MINT programmes)",lang:"German or English",cost:"Free tuition at all TU universities",duration:"3–5 years",desc:"Germany's Technical Universities are globally ranked. RWTH Aachen (engineering #1 in Germany), TU Munich (top 50 globally), TU Berlin, KIT Karlsruhe, TU Dresden. Strong for engineering, computer science, physics, and architecture.",tips:["Very competitive — strong grades required","NC (numerus clausus) applies to some programmes","German TU degree opens doors globally","Many co-op programmes with Siemens, BMW, Bosch, SAP"]},
            {icon:"💼",color:"#F5F3FF",border:"#C4B5FD",title:"Studienkolleg (Foundation Year)",lang:"German (B2–C1 required)",cost:"Free at public Studienkolleg",duration:"1 year",desc:"If your school-leaving certificate (FSc, Matric, A-levels, HSC) is not directly equivalent to German Abitur, you complete a Studienkolleg — a one-year foundation course that leads to the Feststellungsprüfung (FSP) and full university admission.",tips:["Required for many Pakistani and Bangladeshi applicants","Apply to a public Studienkolleg — it's free","Language requirement: DSH-1 or TestDaF 4 or equivalent","After passing FSP, you're fully eligible for any German university"]},
          ].map(c=>(
            <div key={c.title} className="card" style={{background:c.color,borderColor:c.border}}>
              <div style={{display:"flex",gap:"14px",alignItems:"flex-start",marginBottom:"14px"}}>
                <span style={{fontSize:"36px",flexShrink:0}}>{c.icon}</span>
                <div>
                  <div style={{fontFamily:PD,fontWeight:800,fontSize:"18px",color:"#0B1D3A",lineHeight:1.25,marginBottom:"8px"}}>{c.title}</div>
                  <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
                    <span className="badge badge-gray">🗣 {c.lang}</span>
                    <span className="badge badge-green">💶 {c.cost}</span>
                    <span className="badge badge-blue">⏱ {c.duration}</span>
                  </div>
                </div>
              </div>
              <p style={{fontSize:"13.5px",color:"#374151",lineHeight:1.7,marginBottom:"14px"}}>{c.desc}</p>
              <ul style={{listStyle:"none"}}>
                {c.tips.map((t,i)=>(
                  <li key={i} className="check-item">
                    <span className="check-icon">✓</span>
                    <span style={{fontSize:"13px",color:"#374151"}}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* South Asian checklist */}
        <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"28px",padding:"40px 44px",marginBottom:"32px"}}>
          <h2 className="h2" style={{marginBottom:"8px"}}>🇵🇰🇮🇳🇧🇩🇦🇫 Complete application checklist for South Asians</h2>
          <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 28px"}} />
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px"}}>
            {[
              {step:"1",t:"Check your certificate equivalency",d:"Use anabin.kmk.org. FSc (Pakistan) → usually needs Studienkolleg. BSc/BA → usually direct entry. A-levels → often direct entry."},
              {step:"2",t:"APS Certificate (Pakistan & China only)",d:"Pakistani applicants MUST get an APS (Academic Evaluation Centre) certificate. Apply at APS Islamabad/Karachi — takes 4–8 weeks. Without it, no German university will admit you."},
              {step:"3",t:"Language requirements",d:"German-taught: DSH-2, TestDaF 4, B2 Goethe. English-taught: IELTS 6.0–6.5 or TOEFL 80+. Goethe Institut has centres in Karachi, Lahore, Islamabad, Dhaka, Delhi."},
              {step:"4",t:"Apply to universities",d:"Apply via uni-assist.de (€75 fee) or directly. Apply to 5–8 universities. Deadline: July 15 (winter semester) or January 15 (summer semester)."},
              {step:"5",t:"Blocked account (Sperrkonto)",d:"Open with Coracle, Expatrio, Fintiba or Deutsche Bank. Deposit €11,208 (€934 × 12). Takes 3–10 days. Certificate needed for visa."},
              {step:"6",t:"Health insurance",d:"German public health insurance: TK, AOK, Barmer — approx €120/month for students. Confirm before your visa appointment."},
              {step:"7",t:"Student visa application",d:"Book appointment at German embassy. Bring: admission letter, blocked account certificate, health insurance, APS certificate (PK), passport photos, visa fee (€75)."},
              {step:"8",t:"Arrive & enrol",d:"Register address (Anmeldung) within 14 days. Enrol at university. Open German bank account (Commerzbank or Wise). Get student transport pass included in semester fee."},
            ].map(item=>(
              <div key={item.step} style={{display:"flex",gap:"14px",padding:"14px 16px",background:"#F9FAFB",borderRadius:"14px",border:"1px solid #E5E7EB"}}>
                <div style={{width:"30px",height:"30px",borderRadius:"9px",background:"#DC2626",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:PD,fontWeight:800,fontSize:"13px",flexShrink:0}}>{item.step}</div>
                <div>
                  <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"14px",marginBottom:"4px"}}>{item.t}</div>
                  <div style={{fontSize:"12.5px",color:"#6B7280",lineHeight:1.6}}>{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top universities */}
        <div style={{background:"#0B1D3A",borderRadius:"28px",padding:"44px"}}>
          <h2 className="h2" style={{color:"#fff",marginBottom:"8px"}}>🏆 Top German universities for South Asian students</h2>
          <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 28px"}} />
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
            {[
              {name:"TU Munich (TUM)",rank:"#37 QS World",fields:"Engineering, CS, Natural Sciences",english:"Yes"},
              {name:"LMU Munich",rank:"#54 QS World",fields:"Medicine, Law, Humanities, Sciences",english:"Partial"},
              {name:"RWTH Aachen",rank:"#106 QS World",fields:"Engineering, IT, Architecture",english:"Yes"},
              {name:"Heidelberg University",rank:"#87 QS World",fields:"Medicine, Sciences, Law",english:"Partial"},
              {name:"Humboldt-Universität Berlin",rank:"#120 QS World",fields:"Social sciences, Humanities, Sciences",english:"Partial"},
              {name:"KIT Karlsruhe",rank:"#119 QS World",fields:"Engineering, Physics, Mathematics",english:"Yes"},
              {name:"TU Berlin",rank:"Top 150",fields:"Engineering, Business Engineering, IT",english:"Yes"},
              {name:"Freie Universität Berlin",rank:"Top 100",fields:"Social Sciences, Law, Medicine",english:"Partial"},
              {name:"University of Hamburg",rank:"Top 200",fields:"Sciences, Law, Business",english:"Partial"},
            ].map(u=>(
              <div key={u.name} style={{background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.1)",borderRadius:"14px",padding:"16px 18px"}}>
                <div style={{fontWeight:700,color:"#fff",fontSize:"14px",marginBottom:"5px"}}>{u.name}</div>
                <div style={{fontSize:"11.5px",color:"#FCD34D",marginBottom:"6px",fontWeight:600}}>{u.rank}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",lineHeight:1.5,marginBottom:"6px"}}>{u.fields}</div>
                <span style={{background:u.english==="Yes"?"rgba(16,185,129,.2)":"rgba(255,255,255,.1)",color:u.english==="Yes"?"#34D399":"rgba(255,255,255,.5)",fontSize:"10px",fontWeight:700,padding:"3px 8px",borderRadius:"999px"}}>
                  {u.english==="Yes"?"✓ English programmes":"Mostly German"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After graduation */}
      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <div style={{textAlign:"center",maxWidth:"600px",margin:"0 auto 44px"}}>
            <span className="eyebrow">After you graduate</span>
            <h2 className="h2">Your path from student to permanent resident</h2>
            <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px auto"}} />
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"18px"}}>
            {[
              {icon:"🎓",step:"Graduate",desc:"Complete your degree or Ausbildung. German qualification = world-respected."},
              {icon:"🔍",step:"Job-seeker visa (18 months)",desc:"Automatic 18-month visa extension after graduating from a German university to find work."},
              {icon:"💼",step:"Get a job",desc:"Land a job with salary ≥ €50,700/yr → apply for EU Blue Card immediately."},
              {icon:"🏠",step:"Permanent residence",desc:"After 21 months with B1 German (or 33 months without), apply for permanent residence."},
            ].map((s,i)=>(
              <div key={s.step} style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"20px",padding:"24px 20px",textAlign:"center",position:"relative"}}>
                <div style={{width:"40px",height:"40px",borderRadius:"50%",background:"#DC2626",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"15px",fontWeight:800,margin:"0 auto 14px",fontFamily:PD}}>{i+1}</div>
                <div style={{fontSize:"32px",marginBottom:"10px"}}>{s.icon}</div>
                <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"15px",marginBottom:"8px"}}>{s.step}</div>
                <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.6}}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",background:"linear-gradient(135deg,#DC2626,#991B1B)",borderRadius:"28px",padding:"56px",textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:"-60px",right:"-60px",width:"280px",height:"280px",borderRadius:"50%",background:"rgba(255,255,255,.07)"}} />
          <h2 style={{fontFamily:PD,fontWeight:800,color:"#fff",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",marginBottom:"12px",position:"relative",zIndex:1}}>Need help with your university application or student visa?</h2>
          <p style={{color:"rgba(255,255,255,.72)",fontSize:"16px",marginBottom:"28px",position:"relative",zIndex:1}}>Our consultants have helped hundreds of Pakistani, Indian and Bangladeshi students get into German universities. Book your free call today.</p>
          <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap",position:"relative",zIndex:1}}>
            <Link href="/consultancy" className="btn" style={{background:"#fff",color:"#DC2626",fontWeight:800}}>📅 Book free consultation</Link>
            <Link href="/visa" className="btn btn-ghost-light">Student visa guide →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
