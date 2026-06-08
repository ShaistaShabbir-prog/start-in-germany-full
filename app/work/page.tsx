import Link from "next/link";

const PD = '"Playfair Display",Georgia,serif';
const HERO = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85&auto=format&fit=crop";
const OFFICE = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80&auto=format&fit=crop";

export default function WorkPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{position:"relative",minHeight:"360px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(0.28)"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.96),rgba(11,29,58,.75))"}} />
        <div className="wrap" style={{position:"relative",zIndex:1,padding:"72px 1.5rem"}}>
          <span className="eyebrow" style={{color:"#FCD34D"}}>💼 Work in Germany</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"700px",marginBottom:"16px"}}>Find your dream job in Germany — 2026 Guide</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"580px",lineHeight:1.7,marginBottom:"28px"}}>Germany has 1.8 million open vacancies. As a skilled professional from Pakistan, India or Bangladesh, you have real opportunities — here's how to land yours.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <Link href="/visa" className="btn btn-primary">Check your work visa →</Link>
            <Link href="/consultancy" className="btn btn-ghost-light">📅 Career consultation</Link>
          </div>
        </div>
      </section>

      {/* Jobs grid */}
      <section className="sec">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"16px",marginBottom:"36px"}}>
          <div>
            <span className="eyebrow">In-demand professions 2026</span>
            <h2 className="h2">Top jobs for South Asian professionals</h2>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"18px"}}>
          {[
            {e:"💻",t:"IT Specialists",d:"Software engineers, data scientists, DevOps, cloud architects, cyber security.",sal:"€55,000–€95,000",demand:"Highest demand",bc:"badge-hot",tips:"German companies love Python, Java, AWS skills. Strong English is enough — German is a bonus."},
            {e:"⚙️",t:"Engineers",d:"Mechanical, electrical, civil, chemical, automotive — all branches in demand.",sal:"€50,000–€85,000",demand:"High demand",bc:"badge-hot",tips:"Bavaria and Baden-Württemberg have the most engineering jobs (BMW, Siemens, Bosch)."},
            {e:"🏥",t:"Nursing Professionals",d:"Registered nurses, care workers, elderly & pediatric care — critical shortage.",sal:"€32,000–€50,000",demand:"Urgent shortage",bc:"badge-teal",tips:"Germany has a special 'triple win' programme for nurses from Pakistan, India and Philippines."},
            {e:"👩‍⚕️",t:"Physicians & Dentists",d:"GPs, specialists, surgeons — Germany has 5,000+ unfilled doctor positions.",sal:"€65,000–€130,000",demand:"Critical shortage",bc:"badge-teal",tips:"Degree recognition (Approbation) takes 3–12 months. Start early. States vary in speed."},
            {e:"🔨",t:"Craftspeople & Trades",d:"Electricians, plumbers, HVAC, roofers, tilers — every trade is needed.",sal:"€35,000–€60,000",demand:"High demand",bc:"badge-hot",tips:"No German degree required if you can prove 2+ years experience in non-regulated trades."},
            {e:"🌱",t:"Green Energy / Sustainability",d:"Solar, wind, EV infrastructure, energy efficiency — Germany's fastest growing sector.",sal:"€45,000–€80,000",demand:"Rapidly growing",bc:"badge-green",tips:"Germany's Energiewende (energy transition) is creating thousands of new jobs annually."},
            {e:"🔬",t:"Scientists & Researchers",d:"Chemistry, biology, physics, materials science — strong university & industry funding.",sal:"€45,000–€72,000",demand:"Stable",bc:"badge-blue",tips:"Max Planck, Fraunhofer and Helmholtz institutes are world leaders. Many positions in English."},
            {e:"🚛",t:"Transport & Logistics",d:"HGV drivers, freight forwarders, warehouse managers — massive shortage.",sal:"€30,000–€50,000",demand:"Growing",bc:"badge-teal",tips:"EU driving licence equivalency applies. Some countries need a test re-take."},
            {e:"🎓",t:"Ausbildung (Apprenticeship)",d:"3,500+ types of recognised vocational training across all sectors.",sal:"€600–€1,100/mo",demand:"Open now",bc:"badge-gold",tips:"Ausbildung is a paid 2–3 year training contract. After completion, you can stay permanently."},
          ].map(j=>(
            <div key={j.t} className="card card-hover-red">
              <div style={{display:"flex",gap:"14px",alignItems:"flex-start",marginBottom:"12px"}}>
                <div style={{width:"52px",height:"52px",borderRadius:"14px",background:"#F9FAFB",border:"1px solid #E5E7EB",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",flexShrink:0}}>{j.e}</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"16px",marginBottom:"4px"}}>{j.t}</div>
                  <div style={{display:"flex",gap:"7px",flexWrap:"wrap"}}>
                    <span className={`badge ${j.bc}`}>{j.demand}</span>
                    <span className="badge badge-gray">💶 {j.sal}</span>
                  </div>
                </div>
              </div>
              <p style={{fontSize:"13.5px",color:"#374151",lineHeight:1.6,marginBottom:"12px"}}>{j.d}</p>
              <div style={{background:"#FEF2F2",borderRadius:"10px",padding:"10px 12px",fontSize:"12.5px",color:"#374151",lineHeight:1.5}}>
                <span style={{fontWeight:700,color:"#DC2626"}}>💡 Tip: </span>{j.tips}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Job search tips */}
      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"center"}}>
            <div>
              <span className="eyebrow">Job search strategy</span>
              <h2 className="h2" style={{marginBottom:"16px"}}>How to find a job in Germany from abroad</h2>
              <div className="divider" />
              <div style={{display:"flex",flexDirection:"column",gap:"20px",marginTop:"24px"}}>
                {[
                  {n:"1",title:"German-style CV (Lebenslauf)",desc:"A German CV is typically 2 pages, includes a professional photo, personal details and is reverse-chronological. No photo = disadvantage in Germany."},
                  {n:"2",title:"Top job portals",desc:"Use StepStone, Indeed.de, Xing, LinkedIn, Make-it-in-Germany.de, Arbeitsagentur.de and company career pages directly."},
                  {n:"3",title:"Degree recognition",desc:"Get your degree assessed by anabin.kmk.org. For regulated professions (doctors, engineers, nurses), you need formal Anerkennung — start 6–12 months early."},
                  {n:"4",title:"German language",desc:"B2 German significantly improves your chances and salary. Apps like Duolingo, Babbel, Goethe Institut courses and language tandems all help."},
                  {n:"5",title:"LinkedIn & XING",desc:"German employers heavily use XING (like LinkedIn but Germany-specific). Keep your profile updated, set Open-to-Work and apply directly."},
                ].map(tip=>(
                  <div key={tip.n} style={{display:"flex",gap:"16px",alignItems:"flex-start"}}>
                    <div style={{width:"34px",height:"34px",borderRadius:"10px",background:"#DC2626",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:PD,fontWeight:800,fontSize:"15px",flexShrink:0}}>{tip.n}</div>
                    <div>
                      <div style={{fontWeight:700,fontSize:"15px",color:"#0B1D3A",marginBottom:"4px"}}>{tip.title}</div>
                      <div style={{fontSize:"13.5px",color:"#6B7280",lineHeight:1.6}}>{tip.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{borderRadius:"24px",overflow:"hidden",aspectRatio:"4/4.5",position:"relative"}}>
              <div style={{position:"absolute",inset:0,backgroundImage:`url(${OFFICE})`,backgroundSize:"cover",backgroundPosition:"center"}} />
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(11,29,58,.85) 0%,transparent 60%)"}} />
              <div style={{position:"absolute",bottom:"28px",left:"24px",right:"24px"}}>
                <div style={{background:"rgba(255,255,255,.12)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,.2)",borderRadius:"16px",padding:"18px 20px"}}>
                  <div style={{fontSize:"12px",fontWeight:700,color:"#FCD34D",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"8px"}}>Average salaries 2026</div>
                  {[["IT Engineer","€65,000"],["Mechanical Engineer","€58,000"],["Doctor (GP)","€85,000"],["Nurse","€40,000"],["Ausbildung","€850/mo"]].map(([r,s])=>(
                    <div key={r} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:"1px solid rgba(255,255,255,.1)"}}>
                      <span style={{fontSize:"13px",color:"rgba(255,255,255,.7)"}}>{r}</span>
                      <span style={{fontSize:"13px",fontWeight:700,color:"#fff"}}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recognition */}
      <section className="sec" style={{paddingTop:"3.5rem"}}>
        <div style={{background:"#FEF2F2",border:"1px solid #FCA5A5",borderRadius:"24px",padding:"40px 44px"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px",alignItems:"center"}}>
            <div>
              <span className="eyebrow">Important step</span>
              <h2 className="h2" style={{marginBottom:"14px"}}>Get your qualifications recognised</h2>
              <p style={{fontSize:"15px",color:"#374151",lineHeight:1.7,marginBottom:"22px"}}>For most jobs in Germany, you need your foreign degree or vocational qualification formally recognised. This is called Anerkennung. Start this process 6–12 months before your planned move.</p>
              <div style={{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"24px"}}>
                {[
                  "Use anabin.kmk.org to check if your degree is already recognised",
                  "For vocational qualifications: contact ZAB (Zentralstelle für ausländisches Bildungswesen)",
                  "For regulated professions (doctors, nurses, engineers): apply to the relevant state authority",
                  "VisaVista can help coordinate your recognition application",
                ].map((p,i)=>(
                  <div key={i} className="check-item">
                    <span className="check-icon">✓</span>
                    <span style={{fontSize:"13.5px",color:"#374151"}}>{p}</span>
                  </div>
                ))}
              </div>
              <Link href="/consultancy" className="btn btn-primary">Get recognition help →</Link>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
              <div style={{background:"#fff",borderRadius:"16px",padding:"18px 20px",border:"1px solid #E5E7EB"}}>
                <div style={{fontWeight:700,color:"#0B1D3A",marginBottom:"6px"}}>🇵🇰 Pakistan</div>
                <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.6}}>HEC degrees: mostly recognised. Engineering (PEC), Medicine (PMDC) — apply to state Approbationsbehörde. 3–9 months for doctors.</div>
              </div>
              <div style={{background:"#fff",borderRadius:"16px",padding:"18px 20px",border:"1px solid #E5E7EB"}}>
                <div style={{fontWeight:700,color:"#0B1D3A",marginBottom:"6px"}}>🇮🇳 India</div>
                <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.6}}>IIT/IIM/AIIMS degrees: well-recognised. UGC accredited universities mostly accepted. Engineering council recognition usually fast (4–8 weeks).</div>
              </div>
              <div style={{background:"#fff",borderRadius:"16px",padding:"18px 20px",border:"1px solid #E5E7EB"}}>
                <div style={{fontWeight:700,color:"#0B1D3A",marginBottom:"6px"}}>🇧🇩 Bangladesh</div>
                <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.6}}>UGC-accredited degrees recognised via ZAB. BUET (engineering) well-regarded. Medical degrees take longer — 6–12 months Approbation process.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
