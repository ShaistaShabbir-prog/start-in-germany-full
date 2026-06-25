"use client";
import RecommendationWidget from "@/components/RecommendationWidget";
import GlobalDisclaimer from "@/components/GlobalDisclaimer";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PD = '"Playfair Display",Georgia,serif';
const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';

// Unsplash HD images
const IMG = {
  hero:      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=90&auto=format&fit=crop", // Brandenburg Gate night
  students:  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=85&auto=format&fit=crop", // diverse students
  germany:   "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=900&q=80&auto=format&fit=crop",   // Brandenburg Gate Berlin verified
  italy:     "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&q=80&auto=format&fit=crop",   // Rome Colosseum
  sweden:    "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=900&q=80&auto=format&fit=crop",// Stockholm
  uk:        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80&auto=format&fit=crop",// London
  consult:   "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85&auto=format&fit=crop",// consultation
  city2:     "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?w=1200&q=85&auto=format&fit=crop",  // Frankfurt skyline verified
  office:    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85&auto=format&fit=crop",// modern office
  canada:    "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=900&q=80&auto=format&fit=crop",   // Toronto verified
  australia: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80&auto=format&fit=crop",  // Sydney Opera House verified
  switzerland:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80&auto=format&fit=crop", // Swiss Alps verified
  netherlands:"https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=900&q=80&auto=format&fit=crop", // Amsterdam canals verified
  usa:       "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=900&q=80&auto=format&fit=crop",  // New York verified
  france:    "https://images.unsplash.com/photo-1499856871958-5b9357976b82?w=900&q=80&auto=format&fit=crop",  // Paris Eiffel verified
  malaysia:  "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=900&q=80&auto=format&fit=crop",
  china:     "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=900&q=80&auto=format&fit=crop",
};

export default function Home() {
  const router = useRouter();
  const [qcWant, setQcWant] = useState("");
  const [qcDest, setQcDest] = useState("");
  const [email, setEmail] = useState("");
  const [emailSub, setEmailSub] = useState<"idle"|"loading"|"done"|"error">("idle");

  const handleEmailSub = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setEmailSub("loading");
    try {
      const subs = JSON.parse(localStorage.getItem("vv_subscribers") || "[]");
      subs.push({ email, date: new Date().toISOString() });
      localStorage.setItem("vv_subscribers", JSON.stringify(subs));
      setEmailSub("done");
      setEmail("");
    } catch { setEmailSub("error"); }
  };

  const handleQuickCheck = () => {
    const destMap: Record<string,string> = {
      "🌍 Germany":"/visa","🇮🇹 Italy":"/italy","🇸🇪 Sweden":"/sweden",
      "🇬🇧 United Kingdom":"/uk","🇨🇦 Canada":"/canada",
      "🇦🇺 Australia":"/australia","🇪🇸 Spain":"/spain",
      "🇲🇾 Malaysia":"/malaysia","🇨🇳 China":"/china",
    };
    const wantMap: Record<string,string> = {
      "Work in Europe":"/work","Study in Europe":"/study",
      "Vocational training (Ausbildung)":"/study",
      "Start a business":"/consultancy",
      "Family reunification":"/visa",
      "Book visa appointment":"/appointment",
    };
    const destRoute = destMap[qcDest] || "";
    const wantRoute = wantMap[qcWant] || "";
    if (destRoute) router.push(destRoute);
    else if (wantRoute) router.push(wantRoute);
    else router.push("/visa");
  };

  return (
    <div style={{background:"#f9fafb"}}>

      {/* ══════════════ HERO ══════════════ */}
      <section style={{position:"relative",minHeight:"92vh",display:"flex",alignItems:"flex-start",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${IMG.hero})`,backgroundSize:"cover",backgroundPosition:"center 35%",filter:"brightness(0.28)"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,0.97) 0%,rgba(11,29,58,0.75) 50%,rgba(220,38,38,0.2) 100%)"}} />
        {/* Geometric accent */}
        <div style={{position:"absolute",top:"-100px",right:"-60px",width:"500px",height:"500px",borderRadius:"50%",background:"#DC2626",opacity:0.1,zIndex:1}} />
        <div style={{position:"absolute",bottom:"-80px",right:"160px",width:"320px",height:"320px",borderRadius:"50%",background:"#D97706",opacity:0.1,zIndex:1}} />

        <div className="wrap" style={{position:"relative",zIndex:2,width:"100%",padding:"56px 1.5rem 48px"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr minmax(340px,400px)",gap:"clamp(24px, 4vw, 48px)",alignItems:"start"}}>

            <div>
              {/* Trust pill */}
              <div style={{display:"inline-flex",alignItems:"center",gap:"10px",background:"rgba(217,119,6,.15)",border:"1px solid rgba(217,119,6,.4)",padding:"8px 18px",borderRadius:"999px",marginBottom:"28px"}}>
                <span style={{fontSize:"16px"}}>🌍 🇩🇪 🇬🇧 🇨🇦 🇦🇺 🇸🇪 🇮🇹</span>
                <span style={{fontSize:"12.5px",fontWeight:700,color:"#FCD34D",letterSpacing:"0.05em"}}>Trusted by students &amp; professionals worldwide</span>
              </div>

              <h1 className="h1" style={{color:"#fff",marginBottom:"22px"}}>
                Your gateway to<br />
                <span style={{color:"#FCD34D",fontStyle:"italic"}}>Europe</span>{" "}starts here
              </h1>

              <p style={{fontSize:"18px",color:"rgba(255,255,255,.72)",lineHeight:1.75,maxWidth:"520px",marginBottom:"14px"}}>
                Complete visa guidance, job search, banking & appointment booking for international students and professionals moving to Germany, Italy, Sweden, UK, Canada, Australia, Spain and more.
              </p>

              {/* Country chips */}
              <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"34px"}}>
                {[{f:"🇩🇪",n:"Germany"},{f:"🇮🇹",n:"Italy"},{f:"🇸🇪",n:"Sweden"},{f:"🇬🇧",n:"UK"},{f:"🇨🇦",n:"Canada"},{f:"🇦🇺",n:"Australia"},{f:"🇪🇸",n:"Spain"},{f:"🇨🇭",n:"Switzerland"},{f:"🇳🇱",n:"Netherlands"},{f:"🇳🇴",n:"Norway"},{f:"🇦🇹",n:"Austria"},{f:"🇫🇷",n:"France"},{f:"🇺🇸",n:"USA"}].map(c=>(
                  <div key={c.n} style={{display:"flex",alignItems:"center",gap:"6px",background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.2)",borderRadius:"999px",padding:"6px 14px",fontSize:"13px",fontWeight:600,color:"#fff"}}>
                    {c.f} {c.n}
                  </div>
                ))}
              </div>

              <div style={{display:"flex",gap:"14px",flexWrap:"wrap"}}>
                <Link href="/visa" className="btn btn-primary">Check my visa options →</Link>
                <Link href="/consultancy" className="btn btn-ghost-light">📅 Free Consultation</Link>
              </div>

              {/* Social proof */}
              <div style={{display:"flex",alignItems:"center",gap:"16px",marginTop:"36px",paddingTop:"28px",borderTop:"1px solid rgba(255,255,255,.12)"}}>
                <div style={{display:"flex"}}>
                  {["AK","RM","FN","ZS","BH"].map((a,i)=>(
                    <div key={a} style={{width:"36px",height:"36px",borderRadius:"50%",background:["#DC2626","#0D9488","#1D4ED8","#D97706","#7C3AED"][i],border:"2px solid rgba(255,255,255,.3)",marginLeft:i?"-10px":"0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:800,color:"#fff",flexShrink:0}}>{a}</div>
                  ))}
                </div>
                <div>
                  <div style={{color:"#FCD34D",fontSize:"13px",fontWeight:700}}>★★★★★ 4.9/5</div>
                  <div style={{color:"rgba(255,255,255,.5)",fontSize:"12px"}}>from 3,200+ verified reviews</div>
                </div>
              </div>
            </div>

            {/* Quick-Check Card */}
            <div style={{background:"#fff",borderRadius:"28px",padding:"36px",boxShadow:"0 32px 80px rgba(0,0,0,.32)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px",paddingBottom:"18px",borderBottom:"1px solid #F3F4F6"}}>
                <div style={{width:"44px",height:"44px",borderRadius:"14px",background:"linear-gradient(135deg,#DC2626,#991B1B)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(220,38,38,.35)",flexShrink:0}}>
                  <span style={{fontFamily:PD,fontWeight:900,fontSize:"20px",color:"#fff"}}>V</span>
                </div>
                <div>
                  <div style={{fontFamily:PD,fontWeight:800,fontSize:"18px",color:"#0B1D3A",lineHeight:1}}>Quick-Check</div>
                  <div style={{fontSize:"12px",color:"#9CA3AF",marginTop:"2px"}}>Find your path in 30 seconds</div>
                </div>
              </div>

              {/* I want to */}
              <div style={{marginBottom:"14px"}}>
                <label style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.09em",color:"#6B7280",display:"block",marginBottom:"6px"}}>I want to…</label>
                <select value={qcWant} onChange={e=>setQcWant(e.target.value)} style={{width:"100%",padding:"12px 14px",border:`2px solid ${qcWant?"#DC2626":"#E5E7EB"}`,borderRadius:"10px",fontSize:"14px",background:"#F9FAFB",fontFamily:IN,cursor:"pointer",appearance:"none",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center"}}>
                  {["Please select","Work in Europe","Study in Europe","Vocational training (Ausbildung)","Start a business","Family reunification","Book visa appointment"].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              {/* Destination */}
              <div style={{marginBottom:"14px"}}>
                <label style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.09em",color:"#6B7280",display:"block",marginBottom:"6px"}}>Destination</label>
                <select value={qcDest} onChange={e=>setQcDest(e.target.value)} style={{width:"100%",padding:"12px 14px",border:`2px solid ${qcDest?"#DC2626":"#E5E7EB"}`,borderRadius:"10px",fontSize:"14px",background:"#F9FAFB",fontFamily:IN,cursor:"pointer",appearance:"none",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center"}}>
                  {["Select country","🌍 Germany","🇮🇹 Italy","🇸🇪 Sweden","🇬🇧 United Kingdom","🇨🇦 Canada","🇦🇺 Australia","🇪🇸 Spain","🇲🇾 Malaysia","🇨🇳 China"].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              {/* I'm from */}
              <div style={{marginBottom:"14px"}}>
                <label style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.09em",color:"#6B7280",display:"block",marginBottom:"6px"}}>I&apos;m from…</label>
                <select style={{width:"100%",padding:"12px 14px",border:"2px solid #E5E7EB",borderRadius:"10px",fontSize:"14px",background:"#F9FAFB",fontFamily:IN,cursor:"pointer",appearance:"none",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center"}}>
                  {["🌍 Select your country","🇵🇰 Pakistan","🇮🇳 India","🇧🇩 Bangladesh","🇦🇫 Afghanistan","🇺🇦 Ukraine","🇸🇾 Syria","🇮🇷 Iran","🇪🇬 Egypt","🇳🇬 Nigeria","🇰🇪 Kenya","🇬🇭 Ghana","🇪🇹 Ethiopia","🇹🇷 Turkey","🇮🇩 Indonesia","🇵🇭 Philippines","🇻🇳 Vietnam","🇧🇷 Brazil","🇲🇽 Mexico","🇨🇴 Colombia","🇩🇿 Algeria","🇲🇦 Morocco","🇷🇺 Russia","🇺🇿 Uzbekistan","🇷🇴 Romania","🇷🇸 Serbia","🌍 Other country"].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>

              <button onClick={handleQuickCheck} className="btn btn-primary" style={{width:"100%",justifyContent:"center",marginBottom:"14px",cursor:"pointer",border:"none"}}>
                Show my options →
              </button>
              <div style={{display:"flex",gap:"7px"}}>
                <Link href="/finances" className="qpill">💳 Bank</Link>
                <Link href="/visa" className="qpill">🛂 Visa</Link>
                <Link href="/work" className="qpill">💼 Jobs</Link>
                <Link href="/appointment" className="qpill">📅 Appt</Link>
              </div>

              <p style={{fontSize:"11px",color:"#9CA3AF",textAlign:"center",marginTop:"14px"}}>
                🔒 Free · No registration required
              </p>

              {/* ── Email subscribe inside card ── */}
              <div style={{marginTop:"16px",paddingTop:"16px",borderTop:"1px solid #F3F4F6"}}>
                <p style={{fontSize:"11px",fontWeight:700,color:"#6B7280",textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:"8px"}}>📬 Get visa tips & updates</p>
                {emailSub === "done" ? (
                  <div style={{background:"#F0FDF4",border:"1px solid #86EFAC",borderRadius:"8px",padding:"10px 12px",fontSize:"12px",color:"#16A34A",fontWeight:600,textAlign:"center"}}>
                    ✅ Subscribed! Check your inbox.
                  </div>
                ) : (
                  <form onSubmit={handleEmailSub} style={{display:"flex",gap:"6px"}}>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
                      placeholder="your@email.com" required
                      style={{flex:1,padding:"9px 10px",border:"1.5px solid #E5E7EB",borderRadius:"8px",fontSize:"12px",fontFamily:IN,outline:"none",minWidth:0}}
                    />
                    <button type="submit" disabled={emailSub==="loading"}
                      style={{padding:"9px 14px",background:"#DC2626",color:"#fff",border:"none",borderRadius:"8px",fontWeight:700,fontSize:"12px",cursor:"pointer",whiteSpace:"nowrap",flexShrink:0}}>
                      {emailSub==="loading" ? "…" : "Join →"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ EMAIL CAPTURE BAR ══════════════ */}
      <div style={{background:"#0B1D3A",borderBottom:"3px solid #DC2626"}}>
        <div className="wrap" style={{padding:"0"}}>
          <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px",padding:"22px 0"}}> 
            <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
              <span style={{fontSize:"24px"}}>📬</span>
              <div>
                <div style={{fontFamily:PD,fontSize:"16px",fontWeight:800,color:"#fff",lineHeight:1.2}}>Free visa updates & immigration guides</div>
                <div style={{fontSize:"13px",color:"rgba(255,255,255,.5)",marginTop:"2px"}}>Join 50,000+ internationals. Weekly tips. Zero spam.</div>
              </div>
            </div>
            <div>
              {emailSub === "done" ? (
                <div style={{display:"flex",alignItems:"center",gap:"10px",background:"rgba(16,185,129,.15)",border:"1px solid rgba(16,185,129,.4)",borderRadius:"10px",padding:"12px 20px"}}>
                  <span style={{fontSize:"20px"}}>✅</span>
                  <div style={{fontWeight:700,color:"#34D399",fontSize:"14px"}}>You&apos;re subscribed!</div>
                </div>
              ) : (
                <form onSubmit={handleEmailSub} style={{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"}}>
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    style={{padding:"12px 16px",borderRadius:"10px",border:"2px solid rgba(255,255,255,.15)",background:"rgba(255,255,255,.08)",color:"#fff",fontSize:"14px",width:"260px",outline:"none",fontFamily:IN}}
                  />
                  <button type="submit" disabled={emailSub==="loading"}
                    style={{padding:"12px 24px",background:"#DC2626",color:"#fff",border:"none",borderRadius:"10px",fontWeight:700,fontSize:"14px",cursor:"pointer",whiteSpace:"nowrap",fontFamily:IN,boxShadow:"0 4px 14px rgba(220,38,38,.4)"}}>
                    {emailSub==="loading" ? "…" : "Get free updates →"}
                  </button>
                  <div style={{fontSize:"11px",color:"rgba(255,255,255,.35)",whiteSpace:"nowrap"}}>🔒 No spam. Unsubscribe anytime.</div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════ STATS ══════════════ */}
      <div style={{background:"#DC2626"}}>
        <div className="wrap">
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))"}}>
            {[
              {n:"50K+",  l:"Families helped"},
              {n:"98%",   l:"Visa success rate"},
              {n:"9",     l:"Countries covered"},
              {n:"2026",  l:"Data updated"},
            ].map((s,i)=>(
              <div key={s.l} className="stat-box" style={{borderRight:i<3?"1px solid rgba(255,255,255,.22)":"none"}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"clamp(1.8rem,2.5vw,2.2rem)",color:"#fff"}}>{s.n}</div>
                <div style={{fontSize:"13px",color:"rgba(255,255,255,.72)",marginTop:"3px",fontWeight:500}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════ DESTINATIONS ══════════════ */}
      <section className="sec">
        <div style={{textAlign:"center",maxWidth:"620px",margin:"0 auto 52px"}}>
          <span className="eyebrow">Choose your destination</span>
          <h2 className="h2">Where do you want to build your future?</h2>
          <div className="divider" style={{margin:"14px auto"}} />
          <p className="lead">Official-link based guidance for popular immigration destinations in Europe and Asia.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:"22px"}}>
          {[
            {flag:"🇩🇪",name:"Germany",desc:"EU Blue Card · Opportunity Card · Skilled Worker · Ausbildung · Student",img:IMG.germany,color:"#0B1D3A",tag:"✓ Live 2026",tagColor:"#ECFDF5",tagText:"#065F46",href:"/visa"},
            {flag:"🇮🇹",name:"Italy",desc:"Decreto Flussi 452K · EU Blue Card · Student · Family",img:IMG.italy,color:"#1E3A5F",tag:"✓ Live 2026",tagColor:"#ECFDF5",tagText:"#065F46",href:"/italy"},
            {flag:"🇸🇪",name:"Sweden",desc:"Work Permit · EU Blue Card · Student · Self-Employment",img:IMG.sweden,color:"#0B1D3A",tag:"✓ Live 2026",tagColor:"#ECFDF5",tagText:"#065F46",href:"/sweden"},
            {flag:"🇬🇧",name:"United Kingdom",desc:"Skilled Worker · Student · Health & Care · Graduate Route",img:IMG.uk,color:"#1E3A5F",tag:"✓ Live 2026",tagColor:"#ECFDF5",tagText:"#065F46",href:"/uk"},
            {flag:"🇲🇾",name:"Malaysia",desc:"Employment Pass · Student Pass · Professional Visit · Family",img:IMG.malaysia,color:"#991B1B",tag:"✓ Official links",tagColor:"#ECFDF5",tagText:"#065F46",href:"/malaysia"},
            {flag:"🇨🇳",name:"China",desc:"Z Work Visa · X1/X2 Student · Business · Family",img:IMG.china,color:"#991B1B",tag:"✓ Official links",tagColor:"#ECFDF5",tagText:"#065F46",href:"/china"},
          ].map(c=>(
            <Link key={c.name} href={c.href} className="img-card" style={{minHeight:"340px"}}>
              <div style={{position:"absolute",inset:0,backgroundImage:`url(${c.img})`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(0.5)",transition:"filter .35s"}} />
              <div className="cc-overlay" />
              <div style={{position:"absolute",inset:0,padding:"20px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                  <span style={{fontSize:"44px",filter:"drop-shadow(0 3px 6px rgba(0,0,0,.4))"}}>{c.flag}</span>
                  <span style={{background:c.tagColor,color:c.tagText,fontSize:"10px",fontWeight:700,padding:"4px 10px",borderRadius:"999px",backdropFilter:"blur(4px)",border:c.href==="/"?"1px solid rgba(255,255,255,.25)":"none"}}>{c.tag}</span>
                </div>
                <div>
                  <div style={{fontFamily:PD,fontWeight:800,fontSize:"24px",color:"#fff",marginBottom:"7px",textShadow:"0 2px 8px rgba(0,0,0,.4)"}}>{c.name}</div>
                  <div style={{fontSize:"12.5px",color:"rgba(255,255,255,.72)",lineHeight:1.55}}>{c.desc}</div>
                  <div style={{marginTop:"14px",fontSize:"13px",fontWeight:700,color:c.href==="/"?"rgba(255,255,255,.5)":"#FCD34D",display:"flex",alignItems:"center",gap:"5px"}}>
                    Explore {c.name} →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════ HOW IT WORKS ══════════════ */}
      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <div style={{textAlign:"center",maxWidth:"600px",margin:"0 auto 52px"}}>
            <span className="eyebrow">Simple process</span>
            <h2 className="h2">From your home country to Europe — in 5 steps</h2>
            <div className="divider" style={{margin:"14px auto"}} />
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"16px",position:"relative"}}>
            {[
              {n:"01",icon:"🔍",title:"Check eligibility",desc:"Use our Quick-Check to find which visa and path fits your profile and destination.",color:"#FEF2F2",border:"#FCA5A5"},
              {n:"02",icon:"📋",title:"Prepare documents",desc:"Get our free checklist of all required documents — degree, police clearance, financials.",color:"#FFFBEB",border:"#FCD34D"},
              {n:"03",icon:"🗓️",title:"Book appointment",desc:"We guide you through booking your embassy appointment — even when slots are scarce.",color:"#EFF6FF",border:"#BFDBFE"},
              {n:"04",icon:"✈️",title:"Arrive & register",desc:"Anmeldung, blocked account, health insurance — we walk you through every step.",color:"#ECFDF5",border:"#6EE7B7"},
              {n:"05",icon:"💳",title:"Set up your life",desc:"Banking, housing, language courses, job search — everything you need to settle in.",color:"#F5F3FF",border:"#C4B5FD"},
            ].map((s,i)=>(
              <div key={s.n} className="step-card" style={{background:s.color,borderColor:s.border}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"13px",color:s.border,marginBottom:"12px",letterSpacing:"0.05em"}}>{s.n}</div>
                <div style={{fontSize:"32px",marginBottom:"12px"}}>{s.icon}</div>
                <div style={{fontWeight:700,fontSize:"15px",color:"#0B1D3A",marginBottom:"8px",lineHeight:1.3}}>{s.title}</div>
                <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.6}}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════ VISA ROUTES ══════════════ */}
      <section style={{position:"relative",overflow:"hidden",padding:"5rem 0"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${IMG.students})`,backgroundSize:"cover",backgroundPosition:"center 40%",filter:"brightness(0.15)"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(11,29,58,0.98) 0%,rgba(11,29,58,0.88) 55%,rgba(220,38,38,0.25) 100%)"}} />

        <div className="wrap" style={{position:"relative",zIndex:1}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"72px",alignItems:"center"}}>
            <div>
              <span className="eyebrow" style={{color:"#FCD34D"}}>Built for you</span>
              <h2 className="h2" style={{color:"#fff",marginBottom:"16px"}}>Built for international students &amp; professionals worldwide</h2>
              <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",marginBottom:"20px"}} />
              <p style={{color:"rgba(255,255,255,.65)",lineHeight:1.8,fontSize:"16px",marginBottom:"28px"}}>
                We understand your unique challenges — complex embassy paperwork, long appointment wait times, degree recognition (anabin/ZAB), blocked account setup, language barriers and finding the right visa path. VisaVista was built to solve exactly these problems, in a language you understand.
              </p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px",marginBottom:"32px"}}>
                {[
                  {e:"🇵🇰",t:"Pakistan",d:"Embassy Islamabad/Karachi. Approx. 8–12 weeks (indicative)",c:"#DC2626"},
                  {e:"🇮🇳",t:"India",d:"Consulates in Delhi, Mumbai, Chennai. Approx. 6–10 weeks (indicative)",c:"#0D9488"},
                  {e:"🇧🇩",t:"Bangladesh",d:"Embassy Dhaka. Approx. 10–14 weeks (indicative)",c:"#1D4ED8"},
                  {e:"🇦🇫",t:"Afghanistan",d:"Special routes & protection pathways available",c:"#D97706"},
                ].map(o=>(
                  <div key={o.t} style={{background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.1)",borderRadius:"16px",padding:"16px 18px",borderLeft:`3px solid ${o.c}`}}>
                    <div style={{fontSize:"22px",marginBottom:"6px"}}>{o.e}</div>
                    <div style={{fontWeight:700,color:"#fff",fontSize:"14px"}}>{o.t}</div>
                    <div style={{fontSize:"11.5px",color:"rgba(255,255,255,.45)",marginTop:"3px",lineHeight:1.5}}>{o.d}</div>
                  </div>
                ))}
              </div>
              <Link href="/consultancy" className="btn btn-primary">Get personalised guidance →</Link>
            </div>

            {/* Testimonials */}
            <div style={{display:"flex",flexDirection:"column",gap:"18px"}}>
              <h3 style={{fontFamily:PD,fontWeight:700,fontSize:"20px",color:"#fff",marginBottom:"4px"}}>Real success stories</h3>
              {[
                {name:"Ayesha Khalid",origin:"🇵🇰 Lahore, Pakistan",role:"Software Engineer · Berlin",text:"VisaVista guided me through every step of my EU Blue Card application. I had my appointment in 3 weeks and visa in 8 weeks. Highly recommend!",av:"AK",c:"#DC2626",stars:5},
                {name:"Olena Marchenko",origin:"🇺🇦 Kyiv, Ukraine",role:"IT Specialist · Dortmund",text:"VisaVista helped me understand tenant rights and find a Ukrainian-speaking doctor — I felt safe from day one.",av:"OM",c:"#7C3AED",stars:5},
      {name:"Rahul Mehta",origin:"🇮🇳 Mumbai, India",role:"Mechanical Engineer · Munich",text:"The appointment guide was a lifesaver. I finally got my Ausländerbehörde slot after following their step-by-step guide. Got my settlement permit now!",av:"RM",c:"#0D9488",stars:5},
                {name:"Fatima Noor",origin:"🇧🇩 Dhaka, Bangladesh",role:"Nursing Trainee · Hamburg",text:"From university application to opening my Commerzbank account — VisaVista covered everything. The Ausbildung guide is amazing.",av:"FN",c:"#1D4ED8",stars:5},
              ].map(t=>(
                <div key={t.name} className="tcard">
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"10px"}}>
                    <div style={{display:"flex",gap:"12px",alignItems:"center"}}>
                      <div style={{width:"44px",height:"44px",borderRadius:"50%",background:t.c,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:800,color:"#fff",flexShrink:0}}>{t.av}</div>
                      <div>
                        <div style={{fontWeight:700,fontSize:"14px",color:"#0B1D3A"}}>{t.name}</div>
                        <div style={{fontSize:"11.5px",color:"#9CA3AF"}}>{t.origin} · {t.role}</div>
                      </div>
                    </div>
                    <div style={{color:"#D97706",fontSize:"13px",fontWeight:700}}>{"★".repeat(t.stars)}</div>
                  </div>
                  <p style={{fontSize:"13.5px",color:"#374151",lineHeight:1.65,fontStyle:"italic"}}>"{t.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ GERMANY HIGHLIGHT ══════════════ */}
      <section className="sec">
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"center"}}>
          <div>
            <span className="eyebrow">🇩🇪 Focus: Germany</span>
            <h2 className="h2" style={{marginBottom:"16px"}}>Germany's most popular visa routes</h2>
            <div className="divider" />
            <p className="lead" style={{marginBottom:"28px"}}>Germany is the #1 destination for international skilled professionals in Europe. Here are your main pathways:</p>

            {[
              {icon:"💙",title:"EU Blue Card",salary:"€50,700/yr (€45,934 shortage roles)",desc:"For graduates with a job offer. Fast-track to PR after 21 months with B1 German.",badge:"Most popular",bc:"badge-blue"},
              {icon:"🎯",title:"Opportunity Card (Chancenkarte)",salary:"No job offer needed",desc:"Point-based system. Come to Germany to job-hunt for up to 1 year. Min. 6 points.",badge:"No job needed",bc:"badge-green"},
              {icon:"⚙️",title:"Skilled Worker Visa",salary:"€50,700/yr",desc:"For qualified professionals with a recognised degree and a concrete job offer.",badge:"Stable path",bc:"badge-gray"},
              {icon:"🎓",title:"Ausbildung / Study Visa",salary:"Free tuition at most unis",desc:"Study for free at public universities or do vocational training with a monthly salary.",badge:"For students",bc:"badge-teal"},
            ].map(v=>(
              <div key={v.title} style={{display:"flex",gap:"16px",alignItems:"flex-start",padding:"16px",borderRadius:"16px",border:"1px solid #E5E7EB",marginBottom:"12px",background:"#fff",transition:"all .2s",cursor:"pointer"}}
                onMouseOver={e=>{e.currentTarget.style.borderColor="#FCA5A5";e.currentTarget.style.boxShadow="0 8px 24px rgba(220,38,38,.08)";}}
                onMouseOut={e=>{e.currentTarget.style.borderColor="#E5E7EB";e.currentTarget.style.boxShadow="none";}}>
                <div style={{width:"44px",height:"44px",borderRadius:"12px",background:"#FEF2F2",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",flexShrink:0}}>{v.icon}</div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"4px",flexWrap:"wrap"}}>
                    <span style={{fontWeight:700,fontSize:"15px",color:"#0B1D3A"}}>{v.title}</span>
                    <span className={`badge ${v.bc}`}>{v.badge}</span>
                  </div>
                  <div style={{fontSize:"12px",color:"#DC2626",fontWeight:600,marginBottom:"4px"}}>💰 {v.salary}</div>
                  <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.5}}>{v.desc}</div>
                </div>
                <div style={{color:"#D1D5DB",flexShrink:0}}>→</div>
              </div>
            ))}

            <Link href="/visa" className="btn btn-primary" style={{marginTop:"8px"}}>Full Germany visa guide →</Link>
          </div>

          {/* Feature image */}
          <div style={{borderRadius:"28px",overflow:"hidden",position:"relative",aspectRatio:"4/5"}}>
            <div style={{position:"absolute",inset:0,backgroundImage:`url(${IMG.city2})`,backgroundSize:"cover",backgroundPosition:"center"}} />
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(11,29,58,0.9) 0%,rgba(11,29,58,0.2) 55%,transparent 100%)"}} />
            <div style={{position:"absolute",bottom:"32px",left:"28px",right:"28px",zIndex:1}}>
              <div style={{background:"rgba(255,255,255,.1)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,.2)",borderRadius:"18px",padding:"20px 22px"}}>
                <div style={{fontSize:"12px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:"#FCD34D",marginBottom:"8px"}}>2026 Update</div>
                <div style={{fontFamily:PD,fontWeight:700,fontSize:"18px",color:"#fff",lineHeight:1.3,marginBottom:"8px"}}>Germany updated Blue Card salary thresholds</div>
                <div style={{fontSize:"13px",color:"rgba(255,255,255,.65)",lineHeight:1.5}}>€50,700/yr standard · €45,934/yr shortage professions (STEM, healthcare, IT)</div>
                <Link href="/visa" style={{marginTop:"14px",display:"inline-flex",alignItems:"center",gap:"6px",background:"#DC2626",color:"#fff",textDecoration:"none",fontSize:"12px",fontWeight:700,padding:"8px 16px",borderRadius:"9px"}}>Read full update →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ JOBS ══════════════ */}
      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"16px",marginBottom:"36px"}}>
            <div>
              <span className="eyebrow">In demand</span>
              <h2 className="h2">Top jobs for professionals worldwide in Germany</h2>
            </div>
            <Link href="/work" className="btn btn-white">Browse all vacancies →</Link>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
            {[
              {e:"💻",t:"IT Specialists",d:"Software engineers, data scientists, cloud & DevOps architects.",b:"🔥 Highest demand",bc:"badge-hot",sal:"€55K–€90K"},
              {e:"⚙️",t:"Engineers",d:"Mechanical, electrical, civil, chemical and automotive engineers.",b:"🔥 High demand",bc:"badge-hot",sal:"€50K–€80K"},
              {e:"🏥",t:"Nursing Professionals",d:"Registered nurses, care workers, elderly care — urgent shortage.",b:"↑ Growing fast",bc:"badge-teal",sal:"€32K–€48K"},
              {e:"👩‍⚕️",t:"Physicians & Doctors",d:"GPs and specialists — critical shortage across all German states.",b:"↑ Growing fast",bc:"badge-teal",sal:"€60K–€120K"},
              {e:"🔨",t:"Craftspeople / Trades",d:"Electricians, plumbers, HVAC, construction specialists.",b:"🔥 High demand",bc:"badge-hot",sal:"€35K–€58K"},
              {e:"🌱",t:"Green Energy Jobs",d:"Solar, wind, EV, sustainability — Germany's fastest growing sector.",b:"↑ Growing",bc:"badge-green",sal:"€45K–€75K"},
              {e:"🔬",t:"Scientists / Researchers",d:"Chemistry, biology, physics — with strong research funding.",b:"● Stable",bc:"badge-blue",sal:"€45K–€70K"},
              {e:"🚛",t:"Transport & Logistics",d:"Drivers, freight, supply chain — massive shortage.",b:"↑ Growing",bc:"badge-teal",sal:"€30K–€48K"},
              {e:"🎓",t:"Ausbildung (Apprenticeship)",d:"Paid vocational training — earn while you learn in Germany.",b:"● Open now",bc:"badge-gold",sal:"€600–€1,100/mo"},
            ].map(j=>(
              <Link key={j.t} href="/work" style={{textDecoration:"none"}} >
                <div className="card card-hover-red" style={{height:"100%"}}>
                  <div style={{display:"flex",gap:"14px",alignItems:"flex-start"}}>
                    <div style={{width:"50px",height:"50px",borderRadius:"14px",background:"#F9FAFB",border:"1px solid #E5E7EB",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",flexShrink:0}}>{j.e}</div>
                    <div style={{flex:1}}>
                      <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"15px",marginBottom:"4px"}}>{j.t}</div>
                      <div style={{fontSize:"12.5px",color:"#6B7280",lineHeight:1.5,marginBottom:"10px"}}>{j.d}</div>
                      <div style={{display:"flex",gap:"7px",flexWrap:"wrap"}}>
                        <span className={`badge ${j.bc}`}>{j.b}</span>
                        <span className="badge badge-gray">💶 {j.sal}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════ BANKING ══════════════ */}
      <section className="sec" style={{paddingTop:"3.5rem",paddingBottom:"3.5rem"}}>
        <div style={{background:"linear-gradient(135deg,#1E3A5F 0%,#0B1D3A 100%)",borderRadius:"32px",padding:"64px",overflow:"hidden",position:"relative"}}>
          <div style={{position:"absolute",top:"-80px",right:"-60px",width:"380px",height:"380px",borderRadius:"50%",background:"rgba(255,255,255,.04)"}} />
          <div style={{position:"absolute",bottom:"-40px",left:"30%",width:"280px",height:"280px",borderRadius:"50%",background:"rgba(220,38,38,.08)"}} />
          <div style={{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:"56px",alignItems:"center"}}>
            <div>
              <span style={{display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.14em",color:"rgba(255,255,255,.4)",marginBottom:"12px"}}>💳 Money & Banking</span>
              <h2 style={{fontFamily:PD,fontWeight:800,fontSize:"clamp(1.6rem,2.5vw,2.2rem)",color:"#fff",lineHeight:1.25,marginBottom:"14px"}}>Open your German account<br/>before you even land</h2>
              <p style={{color:"rgba(255,255,255,.65)",lineHeight:1.8,fontSize:"16px",marginBottom:"28px"}}>
                You'll need a German IBAN for rent, salary, Anmeldung. Open free accounts with Wise (send money home at real exchange rate), Commerzbank (50€ bonus) or get a fee-free Advanzia Mastercard Gold.
              </p>
              <Link href="/finances" style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"#fff",color:"#0B1D3A",textDecoration:"none",padding:"14px 28px",borderRadius:"14px",fontWeight:800,fontSize:"15px"}}>See all banking options →</Link>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
              {[
                {e:"🌐",n:"Wise",d:"Real exchange rate — send money to 80+ countries for less",badge:"Best for transfers",bc:"#ECFDF5",bt:"#065F46",href:"https://wise.com/invite/in/shaistak5"},
                {e:"🏦",n:"Commerzbank",d:"Traditional German IBAN · 50€ starting bonus · Accepted everywhere",badge:"50€ bonus",bc:"#FFFBEB",bt:"#92400E",href:"https://www.commerzbank.de/girokonto-antrag?path=/pk/de/Abschluss/GD51_Girokonto_DD_MCD_TGK_50Start_KwK&x-werbecode=PNGHRA"},
                {e:"💳",n:"Advanzia Mastercard Gold",d:"No annual fee · No foreign transaction fees · Free travel insurance",badge:"0€ annual fee",bc:"#F5F3FF",bt:"#5B21B6",href:"https://refer.gebuhrenfrei.com/shaistas-45"},
              ].map(b=>(
                <div key={b.n} style={{background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.12)",borderRadius:"16px",padding:"16px 18px",display:"flex",gap:"14px",alignItems:"center"}}>
                  <div style={{fontSize:"28px",flexShrink:0}}>{b.e}</div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,color:"#fff",fontSize:"14px",marginBottom:"3px"}}>{b.n}</div>
                    <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",lineHeight:1.4}}>{b.d}</div>
                  </div>
                  <span style={{background:b.bc,color:b.bt,fontSize:"10px",fontWeight:700,padding:"4px 10px",borderRadius:"999px",flexShrink:0,whiteSpace:"nowrap"}}>{b.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ FEATURED ARTICLES ══════════════ */}
      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span className="eyebrow">Trending guides</span>
              <h2 className="h2" style={{marginBottom:"6px"}}>Most-read articles</h2>
              <div className="divider" style={{marginBottom:"24px"}} />
              {[
                {n:"01",tag:"Visa 🇩🇪 2026",t:"Germany Opportunity Card: complete guide for international applicants 2026"},
                {n:"02",tag:"Banking",t:"Best bank accounts for Germany newcomers in 2026 (compared)"},
                {n:"03",tag:"Study 🇩🇪",t:"Study in Germany for free: complete guide for international students"},
                {n:"04",tag:"Appointment",t:"How to get a German embassy appointment — all countries (2026)"},
                {n:"05",tag:"IT Career",t:"IT professionals in Germany: salary guide, visa, and relocation tips 2026"},
                {n:"06",tag:"Ausbildung",t:"Vocational training (Ausbildung) — the complete guide for foreigners"},
                {n:"07",tag:"Blue Card",t:"EU Blue Card 2026: new €50,700 salary threshold explained"},
              ].map(a=>(
                <Link key={a.n} href="/work" className="topic-row">
                  <span style={{fontFamily:PD,fontWeight:800,fontSize:"13px",color:"#DC2626",width:"28px",flexShrink:0}}>{a.n}</span>
                  <div style={{flex:1}}>
                    <div style={{fontSize:"10.5px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:"#D1D5DB",marginBottom:"3px"}}>{a.tag}</div>
                    <div className="tr-title">{a.t}</div>
                  </div>
                  <span className="tr-arrow">→</span>
                </Link>
              ))}
            </div>

            {/* Feature card */}
            <div style={{borderRadius:"28px",overflow:"hidden",aspectRatio:"4/5.5",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"32px",position:"relative"}}>
              <div style={{position:"absolute",inset:0,backgroundImage:`url(${IMG.consult})`,backgroundSize:"cover",backgroundPosition:"center"}} />
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(11,29,58,0.96) 0%,rgba(11,29,58,0.3) 60%,transparent 100%)"}} />
              <div style={{position:"relative",zIndex:1}}>
                <span style={{display:"inline-block",background:"#DC2626",color:"#fff",fontSize:"11px",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",padding:"6px 14px",borderRadius:"999px",marginBottom:"18px"}}>📅 Consultancy</span>
                <div style={{fontFamily:PD,fontWeight:800,fontSize:"26px",color:"#fff",lineHeight:1.2,marginBottom:"12px"}}>
                  1-on-1 expert consultation in Urdu, Hindi or English
                </div>
                <div style={{fontSize:"14px",color:"rgba(255,255,255,.62)",lineHeight:1.7,marginBottom:"22px"}}>
                  Book a personal consultation with our certified immigration experts. We've helped 50,000+ professionals worldwidens successfully move to Europe.
                </div>
                <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
                  <Link href="/consultancy" style={{display:"inline-flex",alignItems:"center",gap:"6px",background:"#DC2626",color:"#fff",textDecoration:"none",fontSize:"13px",fontWeight:800,padding:"11px 22px",borderRadius:"12px"}}>Book now — It's free →</Link>
                  <Link href="/about" style={{display:"inline-flex",alignItems:"center",gap:"6px",background:"rgba(255,255,255,.15)",color:"#fff",textDecoration:"none",fontSize:"13px",fontWeight:600,padding:"11px 22px",borderRadius:"12px",border:"1px solid rgba(255,255,255,.25)"}}>Meet our team</Link>
                </div>
                <div style={{marginTop:"18px",fontSize:"12px",color:"rgba(255,255,255,.45)",display:"flex",alignItems:"center",gap:"8px"}}>
                  <span>🌍 Urdu</span><span>·</span><span>🌍 Hindi</span><span>·</span><span>🌍 Bengali</span><span>·</span><span>🌍 English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════ FINAL CTA ══════════════ */}
      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",background:"linear-gradient(135deg,#DC2626 0%,#991B1B 100%)",borderRadius:"32px",padding:"64px",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",width:"380px",height:"380px",top:"-100px",right:"-60px",borderRadius:"50%",background:"rgba(255,255,255,.07)"}} />
          <div style={{position:"absolute",width:"240px",height:"240px",bottom:"-50px",right:"220px",borderRadius:"50%",background:"rgba(0,0,0,.08)"}} />
          <div style={{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"1fr auto",gap:"40px",alignItems:"center"}}>
            <div>
              <h2 style={{fontFamily:PD,fontWeight:900,fontSize:"clamp(1.8rem,3vw,2.6rem)",color:"#fff",lineHeight:1.2,marginBottom:"12px"}}>
                Ready to start your European journey?
              </h2>
              <p style={{fontSize:"18px",color:"rgba(255,255,255,.75)",lineHeight:1.65}}>
                Book a free 1-on-1 consultation. We speak Urdu, Hindi, Bengali &amp; English. No obligation, no cost.
              </p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"12px",flexShrink:0}}>
              <Link href="/consultancy" style={{display:"flex",alignItems:"center",gap:"10px",background:"#fff",color:"#DC2626",textDecoration:"none",padding:"16px 28px",borderRadius:"14px",fontWeight:800,fontSize:"16px",whiteSpace:"nowrap",boxShadow:"0 8px 28px rgba(0,0,0,.2)"}}>
                📅 Book free consultation
              </Link>
              <div style={{display:"flex",gap:"10px"}}>
                {[{l:"✉️ Email",h:"/contact"},{l:"💬 WhatsApp",h:"https://wa.me/XXXXXXXXXX?text=Hi%20VisaVista!"},{l:"❓ FAQ",h:"/service"}].map(c=>(
                  <Link key={c.l} href={c.h} className="ch-btn" style={{flex:1,justifyContent:"center",padding:"10px 12px",fontSize:"12.5px"}}>{c.l}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
