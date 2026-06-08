import React from "react";
import Link from "next/link";

const PD = '"Playfair Display",Georgia,serif';
const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';

const HERO = "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&q=85&auto=format&fit=crop";

// shared inline style helpers
const s = {
  wrap:  { maxWidth:"1200px", margin:"0 auto", padding:"0 1.5rem" } as React.CSSProperties,
  sec:   { maxWidth:"1200px", margin:"0 auto", padding:"5rem 1.5rem" } as React.CSSProperties,
  h1:    { fontFamily:PD, fontSize:"clamp(2.4rem,5vw,3.8rem)", fontWeight:900, lineHeight:1.08, letterSpacing:"-0.025em" } as React.CSSProperties,
  h2:    { fontFamily:PD, fontSize:"clamp(1.75rem,3vw,2.5rem)", fontWeight:800, lineHeight:1.2, color:"#0B1D3A" } as React.CSSProperties,
  eye:   { display:"block", fontSize:"11px", fontWeight:700, textTransform:"uppercase" as const, letterSpacing:"0.15em", color:"#DC2626", marginBottom:"10px" },
  bar:   { width:"60px", height:"4px", background:"#DC2626", borderRadius:"2px", margin:"14px 0 24px" } as React.CSSProperties,
  btnP:  { display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"6px", padding:"13px 26px", borderRadius:"12px", fontSize:"15px", fontWeight:700, fontFamily:IN, cursor:"pointer", border:"none", textDecoration:"none", background:"#DC2626", color:"#fff", boxShadow:"0 4px 18px rgba(220,38,38,.35)", transition:"all .2s" } as React.CSSProperties,
  btnG:  { display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"6px", padding:"13px 26px", borderRadius:"12px", fontSize:"15px", fontWeight:700, fontFamily:IN, cursor:"pointer", border:"1.5px solid rgba(255,255,255,.3)", textDecoration:"none", background:"rgba(255,255,255,.12)", color:"#fff", transition:"all .2s" } as React.CSSProperties,
  btnO:  { display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"6px", padding:"11px 22px", borderRadius:"10px", fontSize:"14px", fontWeight:700, fontFamily:IN, cursor:"pointer", border:"2px solid #DC2626", textDecoration:"none", background:"transparent", color:"#DC2626", transition:"all .2s" } as React.CSSProperties,
  btnW:  { display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"8px", padding:"13px 26px", borderRadius:"12px", fontSize:"15px", fontWeight:700, fontFamily:IN, cursor:"pointer", border:"none", textDecoration:"none", background:"#fff", color:"#DC2626", transition:"all .2s" } as React.CSSProperties,
  card:  { background:"#fff", borderRadius:"18px", border:"1.5px solid #E5E7EB", padding:"1.5rem", boxShadow:"0 2px 8px rgba(0,0,0,.04)", transition:"all .22s" } as React.CSSProperties,
  tick:  { width:"20px", height:"20px", borderRadius:"50%", background:"#ECFDF5", border:"1.5px solid #6EE7B7", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:"10px", color:"#059669", marginTop:"1px" } as React.CSSProperties,
};

function Badge({ label, color }: { label: string; color: "red"|"green"|"blue"|"teal"|"gold"|"gray" }) {
  const map = {
    red:   { bg:"#FEF2F2", text:"#B91C1C", border:"#FCA5A5" },
    green: { bg:"#ECFDF5", text:"#065F46", border:"#6EE7B7" },
    blue:  { bg:"#EFF6FF", text:"#1D4ED8", border:"#BFDBFE" },
    teal:  { bg:"#F0FDFA", text:"#0F766E", border:"#99F6E4" },
    gold:  { bg:"#FFFBEB", text:"#92400E", border:"#FCD34D" },
    gray:  { bg:"#F9FAFB", text:"#374151", border:"#E5E7EB" },
  };
  const c = map[color];
  return <span style={{ display:"inline-flex", alignItems:"center", borderRadius:"999px", padding:"3px 10px", fontSize:"11.5px", fontWeight:700, background:c.bg, color:c.text, border:`1px solid ${c.border}` }}>{label}</span>;
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ display:"flex", gap:"10px", alignItems:"flex-start", marginBottom:"10px", listStyle:"none" }}>
      <span style={s.tick}>✓</span>
      <span style={{ fontSize:"13px", color:"#374151", lineHeight:1.6 }}>{children}</span>
    </li>
  );
}

function StatBar({ stats }: { stats: { n: string; l: string }[] }) {
  return (
    <div style={{ background:"#0B1D3A" }}>
      <div style={s.wrap}>
        <div style={{ display:"grid", gridTemplateColumns:`repeat(${stats.length},1fr)` }}>
          {stats.map((s2, i) => (
            <div key={s2.l} style={{ textAlign:"center", padding:"20px 16px", borderRight: i < stats.length-1 ? "1px solid rgba(255,255,255,.1)" : "none" }}>
              <div style={{ fontFamily:PD, fontWeight:900, fontSize:"1.75rem", color:"#FCD34D" }}>{s2.n}</div>
              <div style={{ fontSize:"12px", color:"rgba(255,255,255,.5)", marginTop:"3px" }}>{s2.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function VisaPage() {
  const visaTypes = [
    {
      icon:"💙", bg:"#EFF6FF", border:"#BFDBFE", badge:"Most popular" as const, bc:"blue" as const,
      title:"EU Blue Card (§18b AufenthG)",
      salary:"€50,700/yr · €45,934 for STEM, healthcare & IT",
      time:"8–14 weeks",
      desc:"Germany's flagship visa for highly qualified workers. Fast-track permanent residence after just 21 months with B1 German. Spouse gets unrestricted work permit immediately.",
      points:[
        "University degree recognised in Germany (check anabin.kmk.org)",
        "Job offer from a German employer — minimum 6 months contract",
        "Salary ≥ €50,700/yr gross (€45,934 for shortage occupations)",
        "Valid passport + confirmed health insurance",
        "German language NOT required (B1 speeds up PR to 21 months)",
        "Permanent residence: 21 months (B1 German) or 33 months",
      ],
      tip:"Spouse gets unrestricted German work permit from day one. You can change employers within Blue Card rules."
    },
    {
      icon:"🎯", bg:"#ECFDF5", border:"#6EE7B7", badge:"No job needed" as const, bc:"green" as const,
      title:"Opportunity Card / Chancenkarte (§20a AufenthG)",
      salary:"€1,091/month in blocked account (€13,092/year)",
      time:"6–12 weeks",
      desc:"New since June 2024. Enter Germany WITHOUT a job offer and job-hunt on-site for 12 months. Work part-time (20h/week) while searching. 2-year extension possible if close to offer.",
      points:[
        "Route 1 (Auto): Fully recognised German degree or 2+ year vocational qualification",
        "Route 2 (Points): Score min. 6 points — partial recognition (+4), 5yr experience (+3), under 35 (+2), B2 German (+2), C1 English (+1)",
        "German A1 OR English B2 minimum language requirement",
        "Financial proof: €13,092 blocked account OR part-time contract",
        "Work part-time up to 20h/week in any job while searching",
        "Trial employment (Probebeschäftigung) — unlimited 2-week trials",
      ],
      tip:"Check your points at the official Chancenkarte Self-Check on make-it-in-germany.com."
    },
    {
      icon:"⚙️", bg:"#FEF2F2", border:"#FCA5A5", badge:"Stable choice" as const, bc:"red" as const,
      title:"Skilled Worker Visa (§18a / §18b / §18c AufenthG)",
      salary:"€50,700/yr · §18c: experience-based, no formal recognition",
      time:"8–16 weeks",
      desc:"For qualified professionals. The new §18c route (2023 Skilled Immigration Act) allows experienced workers without formal recognition — great for Pakistani/Indian IT & engineering talent with 5 years experience.",
      points:[
        "§18a: Vocational qualification recognised in Germany (ZAB/IHK)",
        "§18b: University degree equivalent + concrete job offer",
        "§18c (NEW): 5 years experience in last 7 years, no formal recognition needed",
        "Job offer matching your qualification level",
        "Salary in line with collective agreements for your sector",
        "Health insurance + passport + financial means",
      ],
      tip:"§18c is a major breakthrough for Pakistani/Indian IT professionals who lack formal German recognition but have strong work experience."
    },
    {
      icon:"🎓", bg:"#F5F3FF", border:"#C4B5FD", badge:"Free tuition" as const, bc:"blue" as const,
      title:"Student Visa (§16b AufenthG)",
      salary:"€934/month blocked account = €11,208/year total",
      time:"6–14 weeks (Pakistan: CSP queue-based)",
      desc:"Study at German public universities — most charge only €100–€400/semester admin fee. After graduation: automatic 18-month job-seeker visa. Most students stay on a Blue Card.",
      points:[
        "University admission letter (Zulassungsbescheid) from a German university",
        "Blocked account (Sperrkonto): €934 × 12 = €11,208 — Coracle, Expatrio, Deutsche Bank",
        "Health insurance: TK, AOK, or Barmer (~€120/month for students)",
        "Language: B2 German (TestDaF 4, DSH-2) OR IELTS 6.0+ for English programmes",
        "🇵🇰 APS Certificate MANDATORY for all Pakistani degree holders",
        "Secondary school equivalent to German Abitur (or Studienkolleg admission)",
      ],
      tip:"Pakistan: Apply via the new Consular Services Portal (CSP) — queue-based waitlist system since 2026. Upload HEC-verified + MOFA-apostilled scans."
    },
    {
      icon:"🔧", bg:"#FFFBEB", border:"#FCD34D", badge:"Earn while you learn" as const, bc:"gold" as const,
      title:"Ausbildung Visa (§16a AufenthG)",
      salary:"€600–€1,100/month salary — paid by the training company",
      time:"6–12 weeks",
      desc:"Germany's world-famous dual vocational training system. Work 3–4 days/week at a company, vocational school 1–2 days/week. After 2–3 years: world-class German qualification and right to stay permanently.",
      points:[
        "Training contract (Ausbildungsvertrag) signed by a German company",
        "B1–B2 German language skills (most companies require B1 minimum)",
        "Secondary school certificate (Mittlere Reife equivalent or higher)",
        "Proof of accommodation in Germany",
        "Health insurance coverage",
        "After completion: §18a visa for permanent settlement",
      ],
      tip:"Popular sectors for South Asians: nursing, IT (Fachinformatiker), electrical engineering, healthcare, logistics. Search: ausbildung.de"
    },
    {
      icon:"👨‍👩‍👧", bg:"#F0FDF4", border:"#86EFAC", badge:"Bring your family" as const, bc:"green" as const,
      title:"Family Reunification Visa (§28/§29 AufenthG)",
      salary:"Sponsor must have adequate income for whole family",
      time:"12–24 weeks (often longer from Bangladesh)",
      desc:"Once you hold a German residence permit, your spouse and children can join. Spouse receives an unrestricted German work permit. Children get free schooling — most are fluent in German within 12 months.",
      points:[
        "Sponsor holds valid German residence or settlement permit",
        "Adequate accommodation for the entire family",
        "Sponsor's income sufficient to support dependants",
        "A1 German for spouse (exceptions apply — verify with embassy)",
        "Marriage & birth certificates: apostilled + officially translated to German",
        "Start immediately after getting your own permit — processing is slow",
      ],
      tip:"Processing from Bangladesh (Dhaka) can take 18–24 months. Pakistan (Islamabad) 12–18 months. Start as early as possible."
    },
  ];

  const countryGuide = [
    {
      flag:"🇵🇰", country:"Pakistan", time:"8–16 wk",
      color:"#B91C1C",
      steps:[
        "Register at pakistan.diplo.de via Consular Services Portal (CSP) — new 2026 queue-based waitlist",
        "Complete VIDEX form online at videx.diplo.de — print barcode pages clearly (do NOT fold)",
        "Get HEC attestation (PKR 1,000/original) + MOFA Apostille (required since 2023)",
        "APS Certificate MANDATORY for all degrees — apply at eservices.hec.gov.pk (4–8 weeks)",
        "Upload high-resolution scans to CSP — quality of uploads affects how fast you get a slot",
        "VFS/Gerry's VAC: Islamabad, Lahore, Karachi. Fee: €80 ≈ PKR 28,000 + VAC service fee",
      ]
    },
    {
      flag:"🇮🇳", country:"India", time:"4–10 wk",
      color:"#065F46",
      steps:[
        "Book directly via VFS Global: vfsglobal.com/germany/india — no queue, direct calendar booking",
        "VFS centres: Delhi, Mumbai, Chennai, Kolkata, Bengaluru, Hyderabad, Ahmedabad, Pune",
        "Degree attestation: state HRD → MEA Apostille (mea.gov.in/apostille)",
        "APS Certificate NOT required for Indian applicants",
        "Multiple consulates = shorter waits than Pakistan or Bangladesh",
        "Visa fee: €80 ≈ ₹7,400",
      ]
    },
    {
      flag:"🇧🇩", country:"Bangladesh", time:"10–18 wk",
      color:"#1D4ED8",
      steps:[
        "Register at dhaka.diplo.de — one embassy for entire Bangladesh, very high demand",
        "Queue-based waitlist — some applicants wait 4–6 months for an appointment slot",
        "UGC attestation + Ministry of Foreign Affairs chain required",
        "APS Certificate NOT required for Bangladeshi applicants",
        "Apply as early as possible — processing starts from submission date, not appointment date",
        "Visa fee: €80 ≈ BDT 9,500",
      ]
    },
    {
      flag:"🇦🇫", country:"Afghanistan", time:"12–24 wk",
      color:"#92400E",
      steps:[
        "Apply at nearest third-country German embassy (Türkiye, UAE) if not in Afghanistan",
        "Germany has special §23a humanitarian and §25 subsidiary protection pathways",
        "Contact VisaVista for personalised guidance — situation varies significantly by case",
        "German NGOs (AWO, Caritas, Diakonie) can assist with complex applications",
      ]
    },
  ];

  return (
    <div style={{ background:"#F9FAFB" }}>

      {/* ── HERO ── */}
      <section style={{ position:"relative", minHeight:"420px", display:"flex", alignItems:"center", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`url(${HERO})`, backgroundSize:"cover", backgroundPosition:"center 40%", filter:"brightness(0.26)" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(110deg,rgba(11,29,58,.97) 0%,rgba(11,29,58,.75) 100%)" }} />
        <div style={{ position:"absolute", top:"-80px", right:"-60px", width:"400px", height:"400px", borderRadius:"50%", background:"rgba(220,38,38,.1)", pointerEvents:"none" }} />
        <div style={{ ...s.wrap, position:"relative", zIndex:1, width:"100%", padding:"80px 1.5rem" }}>
          <span style={{ ...s.eye, color:"#FCD34D" }}>🇩🇪 Germany Visa Guide 2026</span>
          <h1 style={{ ...s.h1, color:"#fff", maxWidth:"720px", marginBottom:"18px" }}>Germany visa routes for South Asians — 2026</h1>
          <p style={{ fontSize:"17px", color:"rgba(255,255,255,.72)", maxWidth:"600px", lineHeight:1.75, marginBottom:"28px" }}>
            Complete breakdown of every German visa type with real 2026 requirements, salary thresholds, processing times and embassy-specific instructions for Pakistan, India, Bangladesh &amp; Afghanistan.
          </p>
          <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
            <Link href="/consultancy" style={s.btnP}>📅 Get expert visa help →</Link>
            <Link href="/appointment" style={s.btnG}>Book embassy appointment</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatBar stats={[
        {n:"€50,700", l:"Blue Card min. salary 2026"},
        {n:"21 mo",   l:"PR with B1 German (Blue Card)"},
        {n:"€1,091",  l:"Chancenkarte monthly finances"},
        {n:"1.8M+",   l:"Open jobs in Germany"},
      ]} />

      {/* ── VISA TYPES ── */}
      <section style={s.sec}>
        <span style={s.eye}>All visa pathways</span>
        <h2 style={s.h2}>Which visa is right for you?</h2>
        <div style={s.bar} />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"22px" }}>
          {visaTypes.map(v => (
            <div key={v.title} style={{ ...s.card, background:v.bg, borderColor:v.border, display:"flex", flexDirection:"column" }}>
              <div style={{ display:"flex", alignItems:"flex-start", gap:"14px", marginBottom:"14px" }}>
                <span style={{ fontSize:"32px", flexShrink:0 }}>{v.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:PD, fontWeight:800, fontSize:"17px", color:"#0B1D3A", lineHeight:1.25, marginBottom:"8px" }}>{v.title}</div>
                  <div style={{ display:"flex", gap:"7px", flexWrap:"wrap" }}>
                    <Badge label={v.badge} color={v.bc} />
                    <Badge label={`⏱ ${v.time}`} color="gray" />
                  </div>
                </div>
              </div>
              <div style={{ background:"rgba(0,0,0,.04)", borderRadius:"10px", padding:"10px 14px", marginBottom:"12px" }}>
                <div style={{ fontSize:"11px", fontWeight:700, textTransform:"uppercase" as const, letterSpacing:"0.08em", color:"#6B7280", marginBottom:"3px" }}>Key requirement</div>
                <div style={{ fontSize:"13.5px", fontWeight:700, color:"#DC2626" }}>{v.salary}</div>
              </div>
              <p style={{ fontSize:"13.5px", color:"#374151", lineHeight:1.7, marginBottom:"14px" }}>{v.desc}</p>
              <ul style={{ listStyle:"none", padding:0, marginBottom:"14px", flex:1 }}>
                {v.points.map((p,i) => <CheckItem key={i}>{p}</CheckItem>)}
              </ul>
              <div style={{ background:"rgba(220,38,38,.07)", borderRadius:"10px", padding:"10px 14px", marginBottom:"16px", fontSize:"12.5px", color:"#374151", lineHeight:1.6 }}>
                <span style={{ fontWeight:700, color:"#DC2626" }}>💡 </span>{v.tip}
              </div>
              <Link href="/consultancy" style={{ ...s.btnP, width:"100%", justifyContent:"center", fontSize:"13.5px", padding:"11px 20px" }}>Get help with this visa →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── OPPORTUNITY CARD POINTS TABLE ── */}
      <div style={{ background:"#fff", padding:"5rem 1.5rem" }}>
        <div style={s.wrap}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"56px", alignItems:"start" }}>
            <div>
              <span style={s.eye}>Chancenkarte 2026</span>
              <h2 style={s.h2}>Opportunity Card points grid</h2>
              <div style={s.bar} />
              <p style={{ fontSize:"14px", color:"#374151", lineHeight:1.75, marginBottom:"22px" }}>
                If your degree is NOT fully recognised in Germany, score 6+ points from the grid below. You only need one route — recognition route OR points route.
              </p>
              <div style={{ border:"1.5px solid #E5E7EB", borderRadius:"16px", overflow:"hidden" }}>
                <div style={{ background:"#0B1D3A", padding:"12px 18px" }}>
                  <div style={{ color:"#fff", fontWeight:700, fontSize:"13px" }}>Points system (Route 2 — partial/unrecognised qualification)</div>
                </div>
                {[
                  ["Qualification partially recognised in Germany", "4 pts", "#FEF2F2"],
                  ["5 years work experience in field (last 7 years)", "3 pts", "#fff"],
                  ["Under 35 years of age", "2 pts", "#FEF2F2"],
                  ["2+ years work experience in your field", "2 pts", "#fff"],
                  ["German B2 language level or higher", "2 pts", "#FEF2F2"],
                  ["English C1 language level or higher", "1 pt", "#fff"],
                  ["Previous study or work stay in Germany", "1 pt", "#FEF2F2"],
                  ["Spouse also qualifies for Chancenkarte", "1 pt", "#fff"],
                ].map(([crit, pts, bg]) => (
                  <div key={crit as string} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"11px 18px", background: bg as string, borderBottom:"1px solid #E5E7EB" }}>
                    <span style={{ fontSize:"13.5px", color:"#374151" }}>{crit}</span>
                    <span style={{ fontWeight:800, color:"#DC2626", fontSize:"14px", flexShrink:0, marginLeft:"12px" }}>{pts}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:"14px", background:"#ECFDF5", borderRadius:"12px", padding:"14px 16px", border:"1px solid #6EE7B7" }}>
                <div style={{ fontWeight:700, color:"#065F46", marginBottom:"4px" }}>✅ Minimum: 6 points needed</div>
                <div style={{ fontSize:"13px", color:"#374151" }}>Use the official self-check at <strong>make-it-in-germany.com → Chancenkarte Self-Check</strong></div>
              </div>
            </div>

            {/* Country guide */}
            <div>
              <span style={s.eye}>Apply from your country</span>
              <h2 style={s.h2}>Embassy guide by country</h2>
              <div style={s.bar} />
              <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
                {countryGuide.map(c => (
                  <div key={c.country} style={{ background:"#F9FAFB", border:"1px solid #E5E7EB", borderRadius:"16px", padding:"18px 20px", borderLeft:`4px solid ${c.color}` }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"12px" }}>
                      <span style={{ fontSize:"26px" }}>{c.flag}</span>
                      <div style={{ fontFamily:PD, fontWeight:800, fontSize:"17px", color:"#0B1D3A", flex:1 }}>{c.country}</div>
                      <Badge label={`⏱ ${c.time}`} color="gray" />
                    </div>
                    <ul style={{ listStyle:"none", padding:0 }}>
                      {c.steps.map((step, i) => <CheckItem key={i}>{step}</CheckItem>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STEP BY STEP ── */}
      <section style={s.sec}>
        <div style={{ textAlign:"center", maxWidth:"600px", margin:"0 auto 44px" }}>
          <span style={s.eye}>Application process</span>
          <h2 style={s.h2}>Step-by-step: from application to arrival</h2>
          <div style={{ width:"60px", height:"4px", background:"#DC2626", borderRadius:"2px", margin:"14px auto" }} />
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:"14px" }}>
          {[
            {n:1, i:"🧭", t:"Check eligibility", d:"Free VisaVista consultation or Quick-Check to confirm your visa type."},
            {n:2, i:"📋", t:"Gather documents",  d:"Apostilled degree, police clearance, CV, job offer/admission, financial proof, APS (PK)."},
            {n:3, i:"🏦", t:"Blocked account",   d:"Open Sperrkonto with Coracle, Expatrio, Fintiba or Deutsche Bank — 3–10 days."},
            {n:4, i:"💻", t:"Register CSP/VFS",  d:"Create account on CSP portal (PK/BD) or book VFS online (India). Queue waitlist."},
            {n:5, i:"🗓️", t:"Attend appointment", d:"Originals + copies in specified order. Biometrics. Pay visa fee (€75–€80)."},
            {n:6, i:"✈️", t:"Arrive & register", d:"Anmeldung within 14 days. Ausländerbehörde. Bank account. Health insurance."},
          ].map(st => (
            <div key={st.n} style={{ background:"#F9FAFB", border:"1px solid #E5E7EB", borderRadius:"18px", padding:"20px 14px", textAlign:"center" }}>
              <div style={{ width:"38px", height:"38px", borderRadius:"50%", background:"#DC2626", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:PD, fontWeight:800, fontSize:"15px", margin:"0 auto 12px" }}>{st.n}</div>
              <div style={{ fontSize:"26px", marginBottom:"10px" }}>{st.i}</div>
              <div style={{ fontWeight:700, color:"#0B1D3A", fontSize:"13px", marginBottom:"7px", lineHeight:1.3 }}>{st.t}</div>
              <div style={{ fontSize:"12px", color:"#6B7280", lineHeight:1.55 }}>{st.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DOCUMENT CHECKLIST ── */}
      <div style={{ background:"#fff", padding:"0 1.5rem 5rem" }}>
        <div style={s.wrap}>
          <div style={{ background:"#FEF2F2", border:"1.5px solid #FCA5A5", borderRadius:"24px", padding:"40px 44px" }}>
            <h2 style={s.h2}>📋 Master document checklist</h2>
            <div style={s.bar} />
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"24px" }}>
              {[
                { title:"All visa types", docs:[
                  "Valid passport (6+ months beyond visa period)",
                  "2 biometric photos (35×45mm, white background)",
                  "Completed VIDEX form (online at videx.diplo.de) + printed",
                  "Confirmed health insurance certificate",
                  "Proof of accommodation / intent letter",
                  "Visa fee: €75–€80 (check exact rate at your embassy)",
                ]},
                { title:"Work / EU Blue Card", docs:[
                  "Original employment contract (German employer, signed)",
                  "Degree certificate — original + certified copy",
                  "Degree APOSTILLE: MOFA (PK) · MEA (India) · MoFA (BD)",
                  "🇵🇰 APS Certificate — MANDATORY for Pakistani degrees",
                  "Degree recognition: anabin check or Anerkennungsbescheid",
                  "German-style CV (Lebenslauf, max 2 pages)",
                  "Bank statements — last 3 months",
                ]},
                { title:"Student visa", docs:[
                  "University admission letter (Zulassungsbescheid)",
                  "Blocked account certificate (€11,208 — Coracle/Expatrio)",
                  "German B2 language proof OR IELTS 6.0+ for English programmes",
                  "🇵🇰 APS Certificate — MANDATORY",
                  "Secondary school certificate + transcript (apostilled + translated)",
                  "Health insurance confirmation (~€120/month for students)",
                  "Proof of Studienkolleg admission (if required for your country)",
                ]},
              ].map(sec => (
                <div key={sec.title}>
                  <div style={{ fontWeight:700, color:"#0B1D3A", fontSize:"15px", marginBottom:"14px", paddingBottom:"8px", borderBottom:"1px solid #FCA5A5" }}>{sec.title}</div>
                  <ul style={{ listStyle:"none", padding:0 }}>
                    {sec.docs.map((d,i) => <CheckItem key={i}>{d}</CheckItem>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ padding:"0 1.5rem 5rem" }}>
        <div style={{ ...s.wrap, background:"linear-gradient(135deg,#DC2626,#991B1B)", borderRadius:"28px", padding:"56px", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:"-60px", right:"-60px", width:"280px", height:"280px", borderRadius:"50%", background:"rgba(255,255,255,.07)" }} />
          <div style={{ position:"relative", zIndex:1, display:"grid", gridTemplateColumns:"1fr auto", gap:"40px", alignItems:"center" }}>
            <div>
              <h2 style={{ fontFamily:PD, fontWeight:800, color:"#fff", fontSize:"clamp(1.6rem,2.5vw,2.2rem)", marginBottom:"10px" }}>Not sure which visa you need?</h2>
              <p style={{ fontSize:"17px", color:"rgba(255,255,255,.75)" }}>Book a free 30-min consultation. Urdu · Hindi · Bengali · English. No cost, no obligation.</p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"10px", flexShrink:0 }}>
              <Link href="/consultancy" style={s.btnW}>📅 Book free consultation</Link>
              <Link href="/appointment" style={{ ...s.btnG, justifyContent:"center" }}>Embassy appointment help</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
