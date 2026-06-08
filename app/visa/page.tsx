import Link from "next/link";
const PD = '"Playfair Display",Georgia,serif';
const HERO = "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&q=85&auto=format&fit=crop";
const DOCS = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80&auto=format&fit=crop";

export default function VisaPage() {
  return (
    <div>
      <section style={{position:"relative",minHeight:"420px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center 40%",filter:"brightness(0.26)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97) 0%,rgba(11,29,58,.75) 100%)"}}/>
        <div style={{position:"absolute",top:"-80px",right:"-60px",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(220,38,38,.1)"}}/>
        <div className="wrap" style={{position:"relative",zIndex:1,padding:"80px 1.5rem"}}>
          <span className="eyebrow" style={{color:"#FCD34D"}}>🇩🇪 Germany Visa Guide 2026</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"720px",marginBottom:"18px"}}>Germany visa routes for South Asians — updated 2026</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"600px",lineHeight:1.75,marginBottom:"28px"}}>Complete breakdown of every German visa type with real 2026 requirements, salary thresholds, processing times and country-specific instructions for Pakistan, India, Bangladesh and Afghanistan.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <Link href="/consultancy" className="btn btn-primary">📅 Get expert visa help →</Link>
            <Link href="/appointment" className="btn btn-ghost-light">Book embassy appointment</Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{background:"#0B1D3A"}}>
        <div className="wrap">
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
            {[
              {n:"€50,700",l:"Blue Card min. salary 2026"},
              {n:"21 mo",l:"PR with B1 German (Blue Card)"},
              {n:"€1,091/mo",l:"Opportunity Card finances"},
              {n:"1.8M+",l:"Open jobs in Germany"},
            ].map((s,i)=>(
              <div key={s.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"1.75rem",color:"#FCD34D"}}>{s.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"3px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visa types */}
      <section className="sec">
        <span className="eyebrow">All visa pathways</span>
        <h2 className="h2" style={{marginBottom:"8px"}}>Which visa is right for you?</h2>
        <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 36px"}}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"22px"}}>
          {[
            {
              icon:"💙",color:"#EFF6FF",border:"#BFDBFE",badge:"Most popular",bc:"badge-blue",
              title:"EU Blue Card (§18b AufenthG)",
              salary:"€50,700/yr standard · €45,934/yr for STEM, healthcare, IT (shortage roles)",
              time:"8–14 weeks",
              desc:"Germany's flagship visa for highly qualified workers. Grants fast-track permanent residence, full family reunification with spouse work permit, and EU mobility rights. Updated 2026 salary thresholds now in force.",
              points:[
                "University degree recognised in Germany (or equivalent — use anabin.kmk.org)",
                "Job offer from a German employer for min. 6 months",
                "Salary ≥ €50,700/yr gross (€45,934 for shortage occupations: STEM, healthcare, IT)",
                "Valid passport + health insurance confirmation",
                "No German language requirement (B1 speeds up PR to 21 months)",
                "Fast-track to settlement permit: 21 months (B1 German) or 33 months (without)",
              ],
              extra:"Spouse gets unrestricted German work permit. Can extend and change employer freely within EU Blue Card conditions."
            },
            {
              icon:"🎯",color:"#ECFDF5",border:"#6EE7B7",badge:"No job needed",bc:"badge-green",
              title:"Opportunity Card / Chancenkarte (§20a AufenthG)",
              salary:"€1,091/month in blocked account · OR part-time job contract",
              time:"6–12 weeks",
              desc:"Introduced June 2024. Enter Germany WITHOUT a job offer to search on-site for up to 12 months. Work part-time (20h/week) while searching. If no offer after 12 months but close: 2-year extension possible.",
              points:[
                "Route 1 (Automatic): Fully recognised degree or 2+ year vocational qualification = no points needed",
                "Route 2 (Points): Score min. 6 points from the grid below",
                "German A1 OR English B2 minimum language requirement",
                "Financial proof: €13,092 (blocked account) OR part-time employment contract (min. €1,091/mo)",
                "Degree/training recognised in home country (even if not yet in Germany)",
                "May work part-time up to 20h/week + trial employment (Probebeschäftigung) unlimited",
              ],
              extra:"Points grid: Partial German recognition (+4pts) · 5yrs experience (+3pts) · Under 35 OR 2yrs experience (+2pts) · German B2 (+2pts) · English C1 (+1pt) · Previous Germany ties (+1pt)"
            },
            {
              icon:"⚙️",color:"#FEF2F2",border:"#FCA5A5",badge:"Stable choice",bc:"badge-hot",
              title:"Skilled Worker Visa (§18a / §18b AufenthG)",
              salary:"Min. €50,700/yr · §18c: experienced workers — no formal recognition needed",
              time:"8–16 weeks",
              desc:"For qualified professionals with a recognised degree OR 2+ years experience in non-regulated fields. The 2023 Skilled Immigration Act created a new §18c route for experienced workers without formal recognition — great for Pakistani/Indian IT and engineering talent.",
              points:[
                "§18a: Vocational qualification recognised in Germany (ZAB/IHK)",
                "§18b: University degree equivalent + job offer",
                "§18c (NEW 2023): 5 years experience in last 7 years, no formal recognition needed for non-regulated professions",
                "Job offer matching your qualification level",
                "Salary in line with collective agreements for your sector",
                "Health insurance + financial means",
              ],
              extra:"§18c is a major opportunity for Pakistani and Indian IT professionals who lack a formally recognised degree but have strong experience."
            },
            {
              icon:"🎓",color:"#F5F3FF",border:"#C4B5FD",badge:"Free tuition",bc:"badge-blue",
              title:"Student Visa (§16b AufenthG)",
              salary:"€934/month blocked account (€11,208/year) + €75 visa fee",
              time:"6–14 weeks (Pakistan: wait for CSP slot)",
              desc:"Study at German public universities (mostly free!). After graduation, get an automatic 18-month job-seeker permit. For Pakistan: mandatory APS certificate. Apply through the Consular Services Portal (CSP) — new digital system from 2026.",
              points:[
                "Admission letter (Zulassungsbescheid) from a German university",
                "Blocked account certificate: €934/month × 12 = €11,208",
                "Health insurance (TK, AOK, Barmer — ~€120/month for students)",
                "Language proof: B2 German (DSH-2, TestDaF 4) OR IELTS 6.0+ (English programmes)",
                "🇵🇰 APS Certificate MANDATORY for Pakistani applicants (eservices.hec.gov.pk)",
                "Secondary school certificate equivalent to German Abitur (or Studienkolleg admission)",
              ],
              extra:"Apply via Consular Services Portal (CSP) — pakistan.diplo.de. Queue-based system since 2026. New digital VIDEX form must be completed online and printed."
            },
            {
              icon:"🔧",color:"#FFFBEB",border:"#FCD34D",badge:"Earn while you learn",bc:"badge-gold",
              title:"Ausbildung Visa (§16a AufenthG)",
              salary:"€600–€1,100/month training salary (paid by employer)",
              time:"6–12 weeks",
              desc:"Germany's prestigious dual vocational training system. You work 3–4 days/week at a company and attend vocational school 1–2 days/week. After 2–3 years, you receive a world-class German qualification and can stay permanently.",
              points:[
                "Training contract (Ausbildungsvertrag) from a German company",
                "B1–B2 German language skills (most companies require at least B1)",
                "Secondary school certificate (minimum Mittlere Reife equivalent)",
                "Health insurance",
                "Proof of accommodation in Germany",
                "After completion: §18a visa for permanent stay",
              ],
              extra:"Popular Ausbildung sectors for South Asians: nursing (Pflegehelfer), IT (Fachinformatiker), electrical engineering, chef/restaurant, logistics. Find positions on ausbildung.de"
            },
            {
              icon:"👨‍👩‍👧",color:"#F0FDF4",border:"#86EFAC",badge:"Bring your family",bc:"badge-green",
              title:"Family Reunification Visa (§28/§29 AufenthG)",
              salary:"Sponsor needs adequate income to support family",
              time:"12–24 weeks (often longer for Bangladesh)",
              desc:"Once you hold a German residence permit or settlement permit, your spouse and children can join. Spouse immediately gets an unrestricted German work permit. Children receive free schooling and integrate quickly.",
              points:[
                "Sponsor holds valid German residence or settlement permit",
                "Adequate accommodation for the whole family",
                "Sponsor's income sufficient to support dependants (varies by family size)",
                "A1 German for the spouse (exceptions apply — check with embassy)",
                "Marriage/birth certificates apostilled + officially translated",
                "Child: under 18 + paternal/maternal evidence",
              ],
              extra:"Processing times vary significantly by embassy. Bangladesh (Dhaka) and Pakistan (Islamabad) often take 18–24 months. Start immediately after getting your own permit."
            },
          ].map(v=>(
            <div key={v.title} style={{background:v.color,borderRadius:"20px",border:`1.5px solid ${v.border}`,padding:"1.75rem",display:"flex",flexDirection:"column"}}>
              <div style={{display:"flex",alignItems:"flex-start",gap:"14px",marginBottom:"14px"}}>
                <span style={{fontSize:"32px",flexShrink:0}}>{v.icon}</span>
                <div style={{flex:1}}>
                  <div style={{fontFamily:PD,fontWeight:800,fontSize:"17px",color:"#0B1D3A",lineHeight:1.25,marginBottom:"8px"}}>{v.title}</div>
                  <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
                    <span className={`badge ${v.bc}`}>{v.badge}</span>
                    <span className="badge badge-gray">⏱ {v.time}</span>
                  </div>
                </div>
              </div>
              <div style={{background:"rgba(0,0,0,.04)",borderRadius:"10px",padding:"10px 14px",marginBottom:"14px"}}>
                <div style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#6B7280",marginBottom:"3px"}}>Key salary / financial requirement</div>
                <div style={{fontSize:"13.5px",fontWeight:700,color:"#DC2626"}}>{v.salary}</div>
              </div>
              <p style={{fontSize:"13.5px",color:"#374151",lineHeight:1.7,marginBottom:"14px"}}>{v.desc}</p>
              <ul style={{listStyle:"none",marginBottom:"14px"}}>
                {v.points.map((p,i)=>(
                  <li key={i} className="check-item">
                    <span className="check-icon">✓</span>
                    <span style={{fontSize:"13px",color:"#374151"}}>{p}</span>
                  </li>
                ))}
              </ul>
              <div style={{background:"rgba(220,38,38,.07)",borderRadius:"10px",padding:"10px 14px",marginBottom:"16px",fontSize:"12.5px",color:"#374151",lineHeight:1.6}}>
                <span style={{fontWeight:700,color:"#DC2626"}}>💡 Key info: </span>{v.extra}
              </div>
              <Link href="/consultancy" className="btn btn-primary btn-sm" style={{width:"100%",justifyContent:"center",marginTop:"auto"}}>Get help with this visa →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Opportunity Card points deep-dive */}
      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"56px",alignItems:"start"}}>
            <div>
              <span className="eyebrow">Chancenkarte 2026</span>
              <h2 className="h2" style={{marginBottom:"16px"}}>Opportunity Card points calculator</h2>
              <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"0 0 24px"}}/>
              <p style={{fontSize:"14px",color:"#374151",lineHeight:1.75,marginBottom:"24px"}}>If your degree is NOT fully recognised in Germany, you can still qualify via the points system. Score 6+ points from the grid below. You only need to meet one of the two routes.</p>
              <div style={{border:"1.5px solid #E5E7EB",borderRadius:"16px",overflow:"hidden"}}>
                <div style={{background:"#0B1D3A",padding:"12px 18px"}}>
                  <div style={{color:"#fff",fontWeight:700,fontSize:"13px"}}>Points grid (Route 2 — partial/unrecognised qualification)</div>
                </div>
                {[
                  ["Qualification partially recognised in Germany","4 points"],
                  ["5 years work experience in field (last 7 years)","3 points"],
                  ["Under 35 years of age","2 points"],
                  ["2+ years work experience in field","2 points"],
                  ["German B2 or higher language level","2 points"],
                  ["English C1 or higher language level","1 point"],
                  ["Previous study or work stay in Germany","1 point"],
                  ["Spouse also qualifies for Chancenkarte","1 point"],
                ].map(([crit,pts],i)=>(
                  <div key={crit} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"11px 18px",background:i%2===0?"#F9FAFB":"#fff",borderBottom:"1px solid #E5E7EB"}}>
                    <span style={{fontSize:"13.5px",color:"#374151"}}>{crit}</span>
                    <span style={{fontWeight:800,color:"#DC2626",fontSize:"14px",flexShrink:0,marginLeft:"12px"}}>{pts}</span>
                  </div>
                ))}
              </div>
              <div style={{marginTop:"16px",background:"#ECFDF5",borderRadius:"12px",padding:"14px 16px",border:"1px solid #6EE7B7"}}>
                <div style={{fontWeight:700,color:"#065F46",marginBottom:"4px"}}>✅ Minimum: 6 points needed</div>
                <div style={{fontSize:"13px",color:"#374151"}}>Use the official self-check at <strong>make-it-in-germany.com</strong> — select "Chancenkarte Self-Check"</div>
              </div>
            </div>
            <div>
              <span className="eyebrow">Country-specific process</span>
              <h2 className="h2" style={{marginBottom:"16px"}}>How to apply from your country</h2>
              <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"0 0 24px"}}/>
              {[
                {
                  flag:"🇵🇰",country:"Pakistan",
                  portal:"Consular Services Portal (CSP) — pakistan.diplo.de",
                  vfs:"VFS Global Islamabad + Gerry's VAC Islamabad/Lahore/Karachi",
                  aps:"APS Certificate MANDATORY for all degrees (eservices.hec.gov.pk) — 4–8 weeks",
                  apostille:"MOFA Apostille required since 2023 (Hague Convention)",
                  time:"8–16 weeks after submission",
                  tip:"New 2026: All applications start on CSP (queue-based waitlist, not direct booking). Upload HEC-verified + Apostilled scans. Complete VIDEX form online. Print barcodes clearly."
                },
                {
                  flag:"🇮🇳",country:"India",
                  portal:"VFS Global — multiple consulates: Delhi, Mumbai, Chennai, Kolkata, Bengaluru, Hyderabad",
                  vfs:"VFS Global at all major cities",
                  aps:"APS NOT required for India",
                  apostille:"Apostille via MEA (mea.gov.in/apostille) or state notary + MEA",
                  time:"4–10 weeks",
                  tip:"Degree attestation: get HRD/state attestation then MEA apostille. Multiple consulates means shorter waits than Pakistan. Book online at vfsglobal.com"
                },
                {
                  flag:"🇧🇩",country:"Bangladesh",
                  portal:"German Embassy Dhaka — dhaka.diplo.de (queue waitlist system)",
                  vfs:"Goethe Institut building, Road 11, Dhanmondi",
                  aps:"APS NOT required for Bangladesh",
                  apostille:"UGC + Ministry of Foreign Affairs attestation",
                  time:"10–18 weeks (one of slowest offices — high demand)",
                  tip:"Dhaka processes ALL Bangladeshi applicants through a single embassy — expect long waits. Apply as early as possible. Some applicants wait 6+ months just for an appointment slot."
                },
                {
                  flag:"🇦🇫",country:"Afghanistan",
                  portal:"Apply at nearest third-country German embassy (Türkiye, UAE, Iran) if not in Afghanistan",
                  vfs:"Via third-country VFS or German consulate",
                  aps:"APS NOT required",
                  apostille:"Where possible — consult embassy for alternatives",
                  time:"12–24 weeks",
                  tip:"Afghan applicants face special challenges. Germany has special protection pathways (§23a, §25). Contact VisaVista for personalised guidance on the best route given your situation."
                },
              ].map(c=>(
                <div key={c.country} style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"16px",padding:"18px 20px",marginBottom:"14px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"12px"}}>
                    <span style={{fontSize:"28px"}}>{c.flag}</span>
                    <div style={{fontFamily:PD,fontWeight:800,fontSize:"17px",color:"#0B1D3A"}}>{c.country}</div>
                    <span className="badge badge-gray" style={{marginLeft:"auto"}}>⏱ {c.time}</span>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:"4px 12px",marginBottom:"10px"}}>
                    {[
                      ["Portal",c.portal],
                      ["VFS/VAC",c.vfs],
                      ["APS",c.aps],
                      ["Attestation",c.apostille],
                    ].map(([k,v])=>(
                      <>
                        <span key={k+"k"} style={{fontSize:"11px",fontWeight:700,color:"#9CA3AF",textTransform:"uppercase",paddingTop:"2px"}}>{k}:</span>
                        <span key={k+"v"} style={{fontSize:"12.5px",color:"#374151"}}>{v}</span>
                      </>
                    ))}
                  </div>
                  <div style={{background:"#FEF2F2",borderRadius:"10px",padding:"9px 12px",fontSize:"12px",color:"#374151",lineHeight:1.6}}>
                    <span style={{fontWeight:700,color:"#DC2626"}}>2026 tip: </span>{c.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-step process */}
      <section className="sec" style={{paddingTop:"3rem"}}>
        <div style={{textAlign:"center",maxWidth:"600px",margin:"0 auto 44px"}}>
          <span className="eyebrow">Application process</span>
          <h2 className="h2">Step-by-step: from application to arrival</h2>
          <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px auto"}}/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"14px"}}>
          {[
            {n:1,i:"🧭",t:"Assess eligibility",d:"Use Quick-Check or book a free VisaVista consultation to confirm your visa type."},
            {n:2,i:"📋",t:"Gather documents",d:"Apostilled degree, police clearance, CV, job offer/admission, financial proof, APS (PK only)."},
            {n:3,i:"🏦",t:"Open blocked account",d:"Sperrkonto with Deutsche Bank, Coracle, Expatrio or Fintiba. Takes 3–10 days."},
            {n:4,i:"💻",t:"Register on CSP/VFS",d:"Create account on Consular Services Portal or book VFS appointment online. Queue waitlist."},
            {n:5,i:"🗓️",t:"Attend appointment",d:"Bring originals + copies in specified order. Biometrics + submission. Pay visa fee (€75–€80)."},
            {n:6,i:"✈️",t:"Arrive & register",d:"Anmeldung within 14 days. Ausländerbehörde appointment. Open bank account. Health insurance."},
          ].map(s=>(
            <div key={s.n} style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"18px",padding:"20px 16px",textAlign:"center"}}>
              <div style={{width:"38px",height:"38px",borderRadius:"50%",background:"#DC2626",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:PD,fontWeight:800,fontSize:"15px",margin:"0 auto 12px"}}>{s.n}</div>
              <div style={{fontSize:"26px",marginBottom:"10px"}}>{s.i}</div>
              <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"13.5px",marginBottom:"7px",lineHeight:1.3}}>{s.t}</div>
              <div style={{fontSize:"12px",color:"#6B7280",lineHeight:1.55}}>{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Document checklist */}
      <div style={{background:"#fff",padding:"0 1.5rem 5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <div style={{background:"#FEF2F2",border:"1.5px solid #FCA5A5",borderRadius:"24px",padding:"40px 44px"}}>
            <h2 className="h2" style={{marginBottom:"8px"}}>📋 Master document checklist</h2>
            <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 24px"}}/>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}}>
              {[
                {title:"For ALL visa types",docs:["Valid passport (min. 6 months validity beyond visa)","2 recent biometric passport photos (35×45mm, white background)","Completed visa application form (VIDEX online + printed)","Proof of health insurance","Proof of accommodation in Germany (or intent letter)","Visa fee: €75–€80 (check embassy rate)"]},
                {title:"For work / Blue Card",docs:["Original employment contract (German employer, signed)","Degree certificate (original + certified copy)","Degree APOSTILLE (MOFA/HEC for PK · MEA for India · MoFA for BD)","🇵🇰 APS Certificate (mandatory for Pakistani degrees)","Proof of degree recognition (anabin.kmk.org check OR official Anerkennungsbescheid)","CV (German-style Lebenslauf, max 2 pages)","Bank statements (last 3 months)"]},
                {title:"For student visa",docs:["University admission letter (Zulassungsbescheid)","Blocked account certificate (€11,208 — Coracle/Expatrio/Deutsche Bank)","Proof of German language skills (TestDaF 4, DSH-2, Goethe B2)","OR English test (IELTS 6.0+, TOEFL 80+) for English programmes","🇵🇰 APS Certificate (mandatory)","Secondary school certificate + transcript (apostilled + German-certified translation)","Proof of Studienkolleg admission if needed"]},
              ].map(sec=>(
                <div key={sec.title}>
                  <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"15px",marginBottom:"14px",paddingBottom:"8px",borderBottom:"1px solid #FCA5A5"}}>{sec.title}</div>
                  {sec.docs.map((d,i)=>(
                    <div key={i} className="check-item">
                      <span className="check-icon">✓</span>
                      <span style={{fontSize:"12.5px",color:"#374151",lineHeight:1.55}}>{d}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",background:"linear-gradient(135deg,#DC2626,#991B1B)",borderRadius:"28px",padding:"56px",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:"-60px",right:"-60px",width:"280px",height:"280px",borderRadius:"50%",background:"rgba(255,255,255,.07)"}}/>
          <div style={{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"1fr auto",gap:"40px",alignItems:"center"}}>
            <div>
              <h2 style={{fontFamily:PD,fontWeight:800,color:"#fff",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",marginBottom:"10px"}}>Not sure which visa you qualify for?</h2>
              <p style={{fontSize:"17px",color:"rgba(255,255,255,.75)"}}>Book a free 30-minute consultation. Our experts speak Urdu, Hindi, Bengali and English — and know your embassy inside out.</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",flexShrink:0}}>
              <Link href="/consultancy" className="btn" style={{background:"#fff",color:"#DC2626",fontWeight:800,whiteSpace:"nowrap"}}>📅 Book free consultation</Link>
              <Link href="/appointment" className="btn btn-ghost-light" style={{whiteSpace:"nowrap"}}>Embassy appointment help</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
