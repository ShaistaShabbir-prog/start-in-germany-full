import Link from "next/link";
const PD = '"Playfair Display",Georgia,serif';
const HERO = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&q=80&auto=format&fit=crop";

export default function AppointmentPage() {
  return (
    <div>
      <section style={{position:"relative",minHeight:"380px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center 30%",filter:"brightness(0.25)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.8))"}}/>
        <div style={{position:"absolute",top:"-80px",right:"-60px",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(220,38,38,.1)"}}/>
        <div className="wrap" style={{position:"relative",zIndex:1,padding:"80px 1.5rem"}}>
          <span className="eyebrow" style={{color:"#FCD34D"}}>🗓️ Embassy Appointment Guide 2026</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"720px",marginBottom:"18px"}}>How to book your German visa appointment — step by step</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"600px",lineHeight:1.75,marginBottom:"28px"}}>Getting a German visa appointment from Pakistan, India or Bangladesh is one of the hardest steps. This guide shows you exactly how the new 2026 system works — and how to secure your slot fast.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <Link href="/consultancy" className="btn btn-primary">📅 Get appointment help →</Link>
            <Link href="/visa" className="btn btn-ghost-light">Check your visa type first</Link>
          </div>
        </div>
      </section>

      {/* Wait times */}
      <div style={{background:"#0B1D3A"}}>
        <div className="wrap">
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))"}}>
            {[
              {n:"8–16 wk",l:"Pakistan (Islamabad/Karachi)"},
              {n:"4–10 wk",l:"India (Delhi/Mumbai)"},
              {n:"10–18 wk",l:"Bangladesh (Dhaka)"},
              {n:"€75–€80",l:"Visa fee (adults)"},
            ].map((s,i)=>(
              <div key={s.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"1.6rem",color:"#FCD34D"}}>{s.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"3px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="sec">
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"clamp(24px,4vw,56px)",alignItems:"start"}}>

          {/* Step-by-step */}
          <div>
            <span className="eyebrow">Step-by-step process</span>
            <h2 className="h2" style={{marginBottom:"16px"}}>How the 2026 appointment system works</h2>
            <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"0 0 28px"}}/>
            <div style={{background:"#FEF2F2",border:"1px solid #FCA5A5",borderRadius:"16px",padding:"16px 20px",marginBottom:"24px"}}>
              <div style={{fontWeight:700,color:"#B91C1C",marginBottom:"6px"}}>⚠️ Important 2026 update</div>
              <div style={{fontSize:"13.5px",color:"#374151",lineHeight:1.65}}>Germany has moved to a <strong>queue-based waitlist system</strong> via the Consular Services Portal (CSP). You no longer book a direct appointment slot — you register on a digital waitlist and get assigned a slot. This applies to Pakistan, Bangladesh and some other countries.</div>
            </div>
            {[
              {n:1,t:"Know your visa category",d:"Before anything else, confirm your exact visa type (Blue Card, Skilled Worker, Student, Ausbildung etc.). Each category has different requirements and sometimes different processing timelines."},
              {n:2,t:"Create CSP account (Pakistan & Bangladesh)",d:"Go to service2.diplo.de — Consular Services Portal. Create an account with email + phone for 2FA. Register on the correct embassy waitlist. For Pakistan: islamabad.diplo.de or karachi.diplo.de (based on residence)."},
              {n:3,t:"Complete VIDEX form online",d:"The VIDEX is Germany's electronic visa application form. Complete it at videx.diplo.de. Print the final PDF — the barcodes on the last pages must be clearly printed and NOT folded. Barcodes sync your data at the embassy."},
              {n:4,t:"Prepare & upload documents",d:"For CSP: upload HEC-verified + MOFA Apostilled scans (Pakistan). Upload in high resolution. The quality of your digital uploads directly affects how quickly you are called for an appointment slot."},
              {n:5,t:"Monitor and respond quickly",d:"When a slot is offered via email, you typically have 24–48 hours to confirm. Check your CSP account and email DAILY. Set notifications. If you miss the email, you go back to the bottom of the queue."},
              {n:6,t:"For India: VFS Direct booking",d:"India uses VFS Global for most visa categories. Book directly at vfsglobal.com/germany/india. Multiple VFS centres: Delhi, Mumbai, Chennai, Kolkata, Bengaluru, Hyderabad, Ahmedabad, Pune. No queue system — direct calendar booking."},
              {n:7,t:"Attend your appointment",d:"Arrive 15 minutes early. Bring ALL documents in the specified order (originals + copies). Biometric data taken. Documents submitted. Pay visa fee. Processing then begins (timeline from submission, not appointment date)."},
              {n:8,t:"Track & collect",d:"Track status on the CSP portal or VFS tracking system. When approved, you receive an SMS/email to collect your passport from VFS or the embassy. Entire process from application to collection."},
            ].map(s=>(
              <div key={s.n} style={{display:"flex",gap:"16px",marginBottom:"20px"}}>
                <div style={{width:"34px",height:"34px",borderRadius:"10px",background:"#DC2626",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:PD,fontWeight:800,fontSize:"14px",flexShrink:0}}>{s.n}</div>
                <div>
                  <div style={{fontWeight:700,fontSize:"14.5px",color:"#0B1D3A",marginBottom:"5px"}}>{s.t}</div>
                  <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.65}}>{s.d}</div>
                </div>
              </div>
            ))}
          </div>

          {/* By country */}
          <div>
            <span className="eyebrow">By country</span>
            <h2 className="h2" style={{marginBottom:"16px"}}>Embassy guide for South Asians</h2>
            <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"0 0 24px"}}/>
            {[
              {
                flag:"🇵🇰",country:"Pakistan",time:"8–16 weeks",
                locations:["German Embassy Islamabad — Block 5, Diplomatic Enclave II (ICT, KPK, AJK, Punjab)","German Consulate Karachi — 92-A/7, Block 5, Clifton (Sindh, Balochistan)","Gerry's Visa Application Centre — Islamabad, Lahore, Karachi (9AM–3PM weekdays)"],
                process:"Register at islamabad.diplo.de via Consular Services Portal (CSP). Queue-based waitlist system. Upload HEC-verified + MOFA-Apostilled degree. Complete VIDEX online. APS Certificate mandatory for all degrees.",
                tips:["New 2026: digital-first process via CSP — no walk-ins accepted","HEC attestation fee: PKR 1,000/original, PKR 700/copy (March 2026 rates)","MOFA Apostille required since Pakistan joined Hague Convention 2023","Visa fee: €80 = approx. PKR 28,000 (fluctuates with exchange rate)","Gerry's VAC charges additional service fee (~PKR 4,000)"]
              },
              {
                flag:"🇮🇳",country:"India",time:"4–10 weeks",
                locations:["VFS Global Delhi — Shadipur Metro Station area","VFS Global Mumbai — BKC area","VFS Global Chennai, Kolkata, Bengaluru, Hyderabad, Ahmedabad, Pune"],
                process:"Direct calendar booking via vfsglobal.com/germany/india. No waitlist queue. Multiple VFS centres available. Book online — slots released on rolling basis. Degree attestation: HRD (state) → MEA Apostille.",
                tips:["Book VFS appointment immediately after collecting all documents","MEA Apostille at mea.gov.in/apostille or state Apostille centres","No APS certificate required for Indian applicants","Multiple consulates = significantly shorter waits than Pakistan","Visa fee: €80 = approx. ₹7,400 (check current rate)"]
              },
              {
                flag:"🇧🇩",country:"Bangladesh",time:"10–18 weeks",
                locations:["German Embassy Dhaka — House 1, Road 10, Baridhara"],
                process:"Register at dhaka.diplo.de. Queue-based waitlist system. Single embassy for entire country = high demand, long waits. UGC + MoFA attestation required. No APS certificate needed.",
                tips:["Dhaka has ONE embassy for all of Bangladesh — start VERY early","Some applicants wait 4–6 months just for an appointment slot","UGC attestation + Ministry of Foreign Affairs chain required","Visa fee: €80 = approx. BDT 9,500 (check current rate)","Consider applying via third-country German embassy if you have ties abroad"]
              },
              {
                flag:"🇦🇫",country:"Afghanistan",time:"12–24 weeks (varies)",
                locations:["Apply at nearest third-country German embassy if not in Afghanistan","Options: Germany Embassy Ankara (Turkey), Germany Consulate Dubai (UAE)"],
                process:"Afghan applicants face unique challenges due to the current situation. Germany has special protection and asylum pathways. For those outside Afghanistan, apply at the nearest German mission.",
                tips:["Contact VisaVista for personalised guidance on your specific situation","Germany §23a humanitarian pathway may apply","§25 subsidiary protection route available","German NGOs (AWO, Caritas, Diakonie) can sometimes assist with applications"]
              },
            ].map(c=>(
              <div key={c.country} style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"18px",padding:"20px 22px",marginBottom:"16px"}}>
                <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"14px"}}>
                  <span style={{fontSize:"28px"}}>{c.flag}</span>
                  <div>
                    <div style={{fontFamily:PD,fontWeight:800,fontSize:"17px",color:"#0B1D3A"}}>{c.country}</div>
                    <span className="badge badge-red" style={{marginTop:"4px",display:"inline-flex"}}>⏱ Avg. {c.time}</span>
                  </div>
                </div>
                <div style={{marginBottom:"10px"}}>
                  <div style={{fontSize:"11px",fontWeight:700,color:"#9CA3AF",textTransform:"uppercase",marginBottom:"6px"}}>Embassy / VAC locations</div>
                  {c.locations.map((l,i)=>(
                    <div key={i} style={{fontSize:"12.5px",color:"#374151",marginBottom:"3px",paddingLeft:"12px",borderLeft:"2px solid #DC2626"}}>• {l}</div>
                  ))}
                </div>
                <div style={{fontSize:"12.5px",color:"#6B7280",lineHeight:1.6,marginBottom:"12px"}}>{c.process}</div>
                <div style={{background:"#FEF2F2",borderRadius:"10px",padding:"10px 14px"}}>
                  <div style={{fontSize:"11px",fontWeight:700,color:"#DC2626",textTransform:"uppercase",marginBottom:"6px"}}>Key tips for {c.country}</div>
                  {c.tips.map((t,i)=>(
                    <div key={i} className="check-item">
                      <span className="check-icon">✓</span>
                      <span style={{fontSize:"12px",color:"#374151"}}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Alert system promo */}
            <div style={{background:"linear-gradient(135deg,#DC2626,#991B1B)",borderRadius:"18px",padding:"22px 24px"}}>
              <div style={{fontWeight:700,color:"#fff",fontSize:"16px",marginBottom:"8px"}}>📱 Get slot alerts via WhatsApp</div>
              <p style={{fontSize:"13.5px",color:"rgba(255,255,255,.75)",lineHeight:1.65,marginBottom:"16px"}}>Our Premium clients receive instant WhatsApp alerts the moment a new appointment slot opens at their preferred embassy. We monitor the CSP system continuously.</p>
              <Link href="/consultancy" className="btn" style={{background:"#fff",color:"#DC2626",fontWeight:800,width:"100%",justifyContent:"center"}}>Get premium access →</Link>
            </div>
          </div>
        </div>
      {/* Other countries */}
      <div style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"20px",padding:"28px 32px",maxWidth:"1200px",margin:"0 auto 2rem"}}>
        <h3 style={{fontWeight:700,color:"#0B1D3A",fontSize:"16px",marginBottom:"12px"}}>🌍 Appointments for other countries</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"14px"}}>
          {[
            {flag:"🇨🇦",c:"Canada",info:"Apply via IRCC (ircc.canada.ca). VFS Global handles biometrics in Pakistan, India & Bangladesh. Processing: 8–16 weeks for Express Entry PR."},
            {flag:"🇦🇺",c:"Australia",info:"Apply via ImmiAccount (immi.homeaffairs.gov.au). VFS Global for biometrics. Processing: 6–18 months depending on visa subclass."},
            {flag:"🇪🇸",c:"Spain",info:"Apply at Spanish Embassy/Consulate. VFS Spain in some countries. Digital Nomad Visa: apply at Spanish Consulate in your home country."},
          ].map(c=>(
            <div key={c.c} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"14px",padding:"16px"}}>
              <div style={{fontSize:"22px",marginBottom:"8px"}}>{c.flag}</div>
              <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"14px",marginBottom:"6px"}}>{c.c}</div>
              <div style={{fontSize:"12.5px",color:"#6B7280",lineHeight:1.6}}>{c.info}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Day of appointment checklist */}}
      <div style={{background:"#fff",padding:"0 1.5rem 5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <div style={{background:"#EFF6FF",border:"1.5px solid #BFDBFE",borderRadius:"24px",padding:"40px 44px"}}>
            <h2 className="h2" style={{marginBottom:"8px"}}>📋 Day-of-appointment checklist</h2>
            <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 24px"}}/>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"24px"}}>
              {[
                {title:"Documents to bring",items:["Valid original passport + 1 photocopy of data page","2 biometric photos (35×45mm, white background, taken in last 6 months)","Printed VIDEX form with barcode pages clearly visible (not folded)","All original documents + 1 certified copy each","APS Certificate (Pakistan only) — original + copy","Apostilled + translated documents","Bank statements (last 3 months, original + copy)"]},
                {title:"Practical tips",items:["Arrive 15 minutes before your appointment","Dress formally — first impressions matter in Germany","Bring all documents in the EXACT ORDER specified in the checklist","Tab/label your document sections for quick access","Bring exact visa fee in cash (or check if card is accepted at your VAC)","Bring a charged phone — you may need to show email confirmations","Do NOT bring extra people unless specifically allowed"]},
                {title:"After submission",items:["Keep your receipt/reference number safe","Track status on CSP/VFS tracking portal","Processing starts from SUBMISSION date, not appointment date","If additional documents requested: respond within the given deadline","If rejected: you'll receive a refusal notice with reason","VisaVista can help appeal or reapply after a refusal","Do NOT book flights or accommodation until visa is in hand"],},
              ].map(s=>(
                <div key={s.title}>
                  <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"15px",marginBottom:"14px",paddingBottom:"8px",borderBottom:"1px solid #BFDBFE"}}>{s.title}</div>
                  {s.items.map((item,i)=>(
                    <div key={i} className="check-item">
                      <span className="check-icon">✓</span>
                      <span style={{fontSize:"12.5px",color:"#374151",lineHeight:1.55}}>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
