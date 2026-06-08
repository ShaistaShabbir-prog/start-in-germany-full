import Link from "next/link";

const PD = '"Playfair Display",Georgia,serif';
const HERO = "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&q=85&auto=format&fit=crop";
const PASS  = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=85&auto=format&fit=crop";

export default function VisaPage() {
  return (
    <div>
      {/* Header */}
      <section style={{position:"relative",minHeight:"380px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center 45%",filter:"brightness(0.28)"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.96) 0%,rgba(11,29,58,.75) 100%)"}} />
        <div className="wrap" style={{position:"relative",zIndex:1,padding:"72px 1.5rem"}}>
          <span className="eyebrow" style={{color:"#FCD34D"}}>🇩🇪 Germany</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"700px",marginBottom:"16px"}}>Germany Visa &amp; Residence Guide 2026</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"600px",lineHeight:1.7,marginBottom:"28px"}}>Complete, up-to-date visa pathways for skilled workers, students and families from Pakistan, India, Bangladesh &amp; Afghanistan. Updated with 2026 salary thresholds.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <Link href="/consultancy" className="btn btn-primary">📅 Get expert help →</Link>
            <Link href="/appointment" className="btn btn-ghost-light">Book embassy appointment</Link>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <div style={{background:"#0B1D3A"}}>
        <div className="wrap">
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
            {[
              {n:"€50,700",l:"Blue Card min. salary 2026"},
              {n:"21 mo",l:"PR with B1 German (Blue Card)"},
              {n:"8–14 wk",l:"Avg. processing time"},
              {n:"1.8M+",l:"Job vacancies in Germany"},
            ].map((s,i)=>(
              <div key={s.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
                <div style={{fontFamily:PD,fontWeight:800,fontSize:"1.75rem",color:"#FCD34D"}}>{s.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.55)",marginTop:"3px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visa types */}
      <section className="sec">
        <span className="eyebrow">Visa pathways</span>
        <h2 className="h2" style={{marginBottom:"8px"}}>Which visa is right for you?</h2>
        <div className="divider" style={{marginBottom:"36px"}} />
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"22px"}}>
          {[
            {
              icon:"💙", color:"#EFF6FF", border:"#BFDBFE",
              title:"EU Blue Card", badge:"Most popular", bc:"badge-blue",
              salary:"Min. €50,700/yr (€45,934 for shortage roles — STEM, healthcare, IT)",
              time:"8–12 weeks",
              points:[
                "University degree recognised in Germany (or equivalent)",
                "Job offer from a German employer for at least 6 months",
                "Salary ≥ €50,700/yr (or €45,934 for shortage occupations)",
                "Valid passport + health insurance",
                "No German language requirement (but helps)",
              ],
              desc:"The EU Blue Card is the fastest route for highly qualified workers. After 21 months (with B1 German) or 33 months, you can apply for permanent residence. Your spouse gets an unrestricted work permit immediately.",
              link:"/visa#blue-card"
            },
            {
              icon:"🎯", color:"#ECFDF5", border:"#6EE7B7",
              title:"Opportunity Card (Chancenkarte)", badge:"No job needed", bc:"badge-green",
              salary:"Need 6 points + €13,092 in blocked account OR valid job",
              time:"6–10 weeks",
              points:[
                "At least 6 points in the point-based system",
                "Blocked account with €13,092 OR existing job/training",
                "Qualified degree recognised by Germany (or 2+ years experience)",
                "A1 German or English skills",
                "Come to Germany to job-hunt for up to 1 year",
              ],
              desc:"New since November 2023! The Chancenkarte lets you enter Germany without a job offer to search for work on-site. Points are awarded for qualifications, language, age, experience and ties to Germany.",
              link:"/visa#opportunity"
            },
            {
              icon:"⚙️", color:"#FEF2F2", border:"#FCA5A5",
              title:"Skilled Worker Visa (§18a AufenthG)", badge:"Stable choice", bc:"badge-hot",
              salary:"Min. €50,700/yr (varies by sector)",
              time:"8–14 weeks",
              points:[
                "Vocational or academic qualification recognised in Germany",
                "Concrete job offer matching your qualification",
                "Salary matching the collective agreement for your sector",
                "Health insurance coverage confirmed",
                "For non-regulated professions: no recognition needed",
              ],
              desc:"The standard work visa for skilled professionals with a recognised degree. Strong job market means good prospects — especially in trades, logistics, engineering and healthcare.",
              link:"/visa#skilled"
            },
            {
              icon:"🎓", color:"#F5F3FF", border:"#C4B5FD",
              title:"Student / Study Visa (§16b AufenthG)", badge:"Free tuition", bc:"badge-blue",
              salary:"€934/month blocked account required · Part-time work allowed (20h/wk)",
              time:"6–12 weeks",
              points:[
                "Admission letter from a German university (Zulassungsbescheid)",
                "Proof of financial means: €934/month (€11,208/year) blocked account",
                "Health insurance — public or private",
                "German language proof (B2 for German-taught programmes)",
                "Secondary school certificate (Abitur or equivalent)",
              ],
              desc:"Study at top German universities, most of which charge only a semester fee (€100–€350). After graduation, you get an 18-month job-seeker visa — and many stay on a Blue Card.",
              link:"/visa#study"
            },
            {
              icon:"🔧", color:"#FFFBEB", border:"#FCD34D",
              title:"Ausbildung Visa (Vocational Training)", badge:"Earn while you learn", bc:"badge-gold",
              salary:"€600–€1,100/month training salary + paid vocational school",
              time:"6–10 weeks",
              points:[
                "Acceptance letter from a German training company",
                "Secondary school certificate (minimum)",
                "German language skills (B1–B2 level)",
                "Health insurance",
                "Proof of accommodation in Germany",
              ],
              desc:"Germany's dual vocational training system is world-class. You earn a monthly salary while training, attend vocational school and get a recognised German qualification after 2–3 years.",
              link:"/visa#ausbildung"
            },
            {
              icon:"👨‍👩‍👧",color:"#F0FDF4", border:"#86EFAC",
              title:"Family Reunification Visa", badge:"Bring your family", bc:"badge-green",
              salary:"Sponsor must earn enough to support family (varies)",
              time:"12–24 weeks",
              points:[
                "Sponsor holds a valid German residence permit",
                "Proof of adequate accommodation for the family",
                "Sponsor has sufficient income to support dependants",
                "Basic German knowledge (A1) for spouse — with exceptions",
                "Marriage certificate / birth certificates (apostilled & translated)",
              ],
              desc:"Once you have a residence permit, you can bring your spouse and children. Spouse gets a work permit. Children can attend German schools — many offer excellent integration programmes.",
              link:"/visa#family"
            },
          ].map(v=>(
            <div key={v.title} className="visa-card" style={{background:v.color,borderColor:v.border}}>
              <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"14px",gap:"12px"}}>
                <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                  <span style={{fontSize:"32px"}}>{v.icon}</span>
                  <div>
                    <div style={{fontFamily:PD,fontWeight:800,fontSize:"18px",color:"#0B1D3A",lineHeight:1.2}}>{v.title}</div>
                    <span className={`badge ${v.bc}`} style={{marginTop:"5px",display:"inline-flex"}}>{v.badge}</span>
                  </div>
                </div>
                <div style={{fontSize:"12px",color:"#6B7280",textAlign:"right",flexShrink:0}}>
                  <div style={{fontWeight:600}}>⏱ {v.time}</div>
                </div>
              </div>
              <div style={{background:"rgba(0,0,0,.04)",borderRadius:"10px",padding:"10px 14px",marginBottom:"14px"}}>
                <div style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#6B7280",marginBottom:"4px"}}>Key requirement</div>
                <div style={{fontSize:"13px",fontWeight:600,color:"#DC2626"}}>{v.salary}</div>
              </div>
              <p style={{fontSize:"13.5px",color:"#374151",lineHeight:1.65,marginBottom:"14px"}}>{v.desc}</p>
              <ul style={{listStyle:"none",marginBottom:"18px"}}>
                {v.points.map((p,i)=>(
                  <li key={i} className="check-item">
                    <span className="check-icon">✓</span>
                    <span style={{fontSize:"13px",color:"#374151",lineHeight:1.5}}>{p}</span>
                  </li>
                ))}
              </ul>
              <div style={{marginTop:"auto"}}>
                <Link href="/consultancy" className="btn btn-primary btn-sm" style={{width:"100%",justifyContent:"center"}}>Get help with this visa →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <div style={{textAlign:"center",maxWidth:"600px",margin:"0 auto 44px"}}>
            <span className="eyebrow">Application process</span>
            <h2 className="h2">Step-by-step: from application to arrival</h2>
            <div className="divider" style={{margin:"14px auto"}} />
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"16px"}}>
            {[
              {n:1,icon:"📋",title:"Check eligibility",desc:"Use our Quick-Check or book a consultation to confirm your visa type."},
              {n:2,icon:"🗂️",title:"Gather documents",desc:"Degree certificate (apostilled), police clearance, CV, job offer, financial proof."},
              {n:3,icon:"🏦",title:"Open blocked account",desc:"Open a Sperrkonto with Deutsche Bank, Coracle or Expatrio (for student visa)."},
              {n:4,icon:"🗓️",title:"Book appointment",desc:"Apply via the German embassy online portal. Wait times: 4–16 weeks."},
              {n:5,icon:"✈️",title:"Attend & submit",desc:"Attend your embassy appointment. Biometrics, documents, visa fee payment."},
              {n:6,icon:"🏠",title:"Arrive & register",desc:"Anmeldung (registration), Ausländerbehörde, health insurance, open bank account."},
            ].map(s=>(
              <div key={s.n} style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"20px",padding:"1.5rem",textAlign:"center",position:"relative"}}>
                <div style={{width:"40px",height:"40px",borderRadius:"50%",background:"#DC2626",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"15px",fontWeight:800,margin:"0 auto 12px",fontFamily:PD}}>{s.n}</div>
                <div style={{fontSize:"28px",marginBottom:"10px"}}>{s.icon}</div>
                <div style={{fontWeight:700,fontSize:"14px",color:"#0B1D3A",marginBottom:"7px",lineHeight:1.3}}>{s.title}</div>
                <div style={{fontSize:"12.5px",color:"#6B7280",lineHeight:1.55}}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",background:"linear-gradient(135deg,#0B1D3A,#1E3A5F)",borderRadius:"28px",padding:"56px",textAlign:"center"}}>
          <h2 style={{fontFamily:PD,fontWeight:800,fontSize:"clamp(1.6rem,2.5vw,2.2rem)",color:"#fff",marginBottom:"12px"}}>Not sure which visa you need?</h2>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.65)",marginBottom:"28px",maxWidth:"520px",margin:"0 auto 28px"}}>Book a free consultation with our certified experts. We speak Urdu, Hindi, Bengali & English.</p>
          <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/consultancy" className="btn btn-primary">📅 Book free consultation</Link>
            <Link href="/appointment" className="btn btn-ghost-light">Embassy appointment help</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
