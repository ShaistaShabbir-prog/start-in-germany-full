"use client";
import { useState } from "react";

const SCHOLARSHIPS = [
  {
    name: "DAAD — Deutscher Akademischer Austauschdienst",
    country: "🇩🇪 Germany",
    amount: "€934/month + travel + health insurance",
    level: ["Masters","PhD","Postdoc","Research"],
    deadline: "October–November (varies by program)",
    gpa: "Above average",
    fields: "All fields",
    link: "https://www.daad.de/en/study-and-research-in-germany/scholarships/",
    description: "Germany's largest scholarship programme. Fully funded with stipend, health insurance, language course allowance, and travel subsidy. Open to all nationalities.",
    tag: "⭐ Fully Funded",
    tagColor: "#16a34a"
  },
  {
    name: "KAAD — Catholic Academic Exchange Service",
    country: "🇩🇪 Germany",
    amount: "Full scholarship",
    level: ["Masters","PhD"],
    deadline: "Varies by program",
    gpa: "Excellent",
    fields: "All fields (preference: developing countries)",
    link: "https://www.kaad.de/en/",
    description: "Full scholarship for students from developing countries. Includes stipend, health insurance, and integration support.",
    tag: "🌍 Developing Countries",
    tagColor: "#0d9488"
  },
  {
    name: "Konrad-Adenauer-Stiftung (KAS)",
    country: "🇩🇪 Germany",
    amount: "€1,200/month",
    level: ["Bachelor","Masters","PhD"],
    deadline: "January 15 / July 15",
    gpa: "Top academic performance",
    fields: "All fields",
    link: "https://www.kas.de/en/web/guest/scholarships",
    description: "Conservative political foundation scholarship. Strong community, mentoring network, and political education seminars.",
    tag: "💼 With Network",
    tagColor: "#7c3aed"
  },
  {
    name: "Friedrich Ebert Stiftung (FES)",
    country: "🇩🇪 Germany",
    amount: "€1,200/month",
    level: ["Bachelor","Masters","PhD"],
    deadline: "January / July",
    gpa: "Above average",
    fields: "All fields (preference: social sciences, law, economics)",
    link: "https://www.fes.de/en/scholarships",
    description: "Social-democratic foundation. Supports socially engaged students. Strong international alumni network.",
    tag: "🤝 Social Focus",
    tagColor: "#dc2626"
  },
  {
    name: "Heinrich Böll Stiftung",
    country: "🇩🇪 Germany",
    amount: "€1,200/month",
    level: ["Bachelor","Masters","PhD"],
    deadline: "March 1 / September 1",
    gpa: "Good",
    fields: "All fields (preference: green/environmental, human rights)",
    link: "https://www.boell.de/en/scholarships",
    description: "Green-aligned foundation. Actively supports international students, women, and underrepresented groups.",
    tag: "🌱 Green Focus",
    tagColor: "#16a34a"
  },
  {
    name: "Alexander von Humboldt Foundation",
    country: "🇩🇪 Germany",
    amount: "€2,670–3,170/month",
    level: ["Postdoc","Research","Experienced Researcher"],
    deadline: "Rolling (anytime)",
    gpa: "PhD required",
    fields: "All disciplines",
    link: "https://www.humboldt-foundation.de/en/",
    description: "Prestigious research fellowship for outstanding international researchers. Up to 24 months in Germany. Strong alumni network of Nobel laureates.",
    tag: "🔬 Research Excellence",
    tagColor: "#4f46e5"
  },
  {
    name: "Erasmus+ (European Union)",
    country: "🇪🇺 European Union",
    amount: "€800–1,200/month",
    level: ["Bachelor","Masters","PhD","Staff"],
    deadline: "Varies by sending institution",
    gpa: "Good standing",
    fields: "All fields",
    link: "https://erasmus-plus.ec.europa.eu/",
    description: "EU exchange and study programme. Covers tuition at partner universities, monthly stipend, travel grant. Available to students from EU and many partner countries.",
    tag: "🇪🇺 EU Programme",
    tagColor: "#003399"
  },
  {
    name: "Chevening Scholarship (UK)",
    country: "🇬🇧 United Kingdom",
    amount: "Full — tuition + £1,200/month",
    level: ["Masters"],
    deadline: "November (annual)",
    gpa: "Good",
    fields: "All fields",
    link: "https://www.chevening.org/",
    description: "UK government's global scholarship programme. 1-year Masters at any UK university. Requires 2+ years work experience. Leadership focus.",
    tag: "⭐ Fully Funded",
    tagColor: "#16a34a"
  },
  {
    name: "Commonwealth Scholarship",
    country: "🇬🇧 United Kingdom",
    amount: "Full — tuition + stipend + travel",
    level: ["Masters","PhD"],
    deadline: "December (varies by country)",
    gpa: "Good",
    fields: "All fields (priority: STEM, health, education)",
    link: "https://cscuk.fcdo.gov.uk/",
    description: "For students from Commonwealth countries. Covers tuition, living allowance, flights, and thesis allowance.",
    tag: "🌍 Commonwealth",
    tagColor: "#0d9488"
  },
  {
    name: "Swiss Government Excellence Scholarship",
    country: "🇨🇭 Switzerland",
    amount: "CHF 1,920/month + accommodation + insurance",
    level: ["Masters","PhD","Postdoc","Research"],
    deadline: "December–January",
    gpa: "Above average",
    fields: "All fields",
    link: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html",
    description: "Swiss federal government scholarship for international students. Covers tuition, living costs, and health insurance at Swiss universities.",
    tag: "⭐ Government Funded",
    tagColor: "#16a34a"
  },
  {
    name: "Sweden — SI Scholarships for Global Professionals",
    country: "🇸🇪 Sweden",
    amount: "SEK 10,000/month + tuition",
    level: ["Masters"],
    deadline: "February",
    gpa: "Good",
    fields: "All fields",
    link: "https://si.se/en/apply/scholarships/",
    description: "Swedish Institute scholarship for professionals from selected countries. Covers tuition and living costs. Strong network programme.",
    tag: "💼 Professionals Focus",
    tagColor: "#0d9488"
  },
  {
    name: "Dutch Government — Holland Scholarship",
    country: "🇳🇱 Netherlands",
    amount: "€5,000 (one-time)",
    level: ["Bachelor","Masters"],
    deadline: "February–May (varies per university)",
    gpa: "Good",
    fields: "All fields",
    link: "https://www.studyinholland.nl/scholarships/holland-scholarship",
    description: "For students from outside the EEA. Partial scholarship offered by Dutch universities and Ministry of Education. Good supplement to other funding.",
    tag: "🌷 Netherlands",
    tagColor: "#FF6B35"
  },
  {
    name: "HEC Overseas Scholarship (Pakistan)",
    country: "🇵🇰 → Worldwide",
    amount: "Full — tuition + stipend + travel",
    level: ["Masters","PhD"],
    deadline: "January–March (varies)",
    gpa: "Good (18+ years, 3.0+ GPA)",
    fields: "All fields (STEM priority)",
    link: "https://hec.gov.pk/english/scholarships/Pages/Overseas-Scholarships.aspx",
    description: "Pakistani government fully-funded scholarships to top universities worldwide. Requires return commitment to Pakistan. Highly competitive.",
    tag: "🇵🇰 HEC Pakistan",
    tagColor: "#16a34a"
  },
  {
    name: "UGC Scholarship (India) — ICCR",
    country: "🇮🇳 → Worldwide",
    amount: "Full — varies by destination",
    level: ["Masters","PhD"],
    deadline: "Varies",
    gpa: "Good",
    fields: "All fields",
    link: "https://www.iccr.gov.in/scholarships",
    description: "Indian Council for Cultural Relations scholarship for Indian students to study abroad and for international students to study in India.",
    tag: "🇮🇳 India",
    tagColor: "#FF6B35"
  },
  {
    name: "AAUW International Fellowships (Women)",
    country: "🌍 USA → International",
    amount: "$20,000–35,000/year",
    level: ["Masters","PhD","Postdoc"],
    deadline: "November 15",
    gpa: "Good",
    fields: "All fields",
    link: "https://www.aauw.org/resources/programs/fellowships-grants/current-named-gift-fellowships/international-fellowships/",
    description: "For women who are NOT US citizens or permanent residents. Study at any accredited US institution. One of the most prestigious international women's scholarships.",
    tag: "👩 Women Only",
    tagColor: "#7c3aed"
  },
  {
    name: "Fulbright Foreign Student Program (USA)",
    country: "🌍 → 🇺🇸 USA",
    amount: "Full — tuition + stipend + insurance",
    level: ["Masters","PhD","Research"],
    deadline: "Varies by country (apply via home country)",
    gpa: "Excellent",
    fields: "All fields",
    link: "https://foreign.fulbrightonline.org/",
    description: "US government's flagship scholarship. Covers full study at US universities. Apply through Fulbright Commission in your home country. Extremely prestigious.",
    tag: "⭐ Fully Funded",
    tagColor: "#16a34a"
  },
  {
    name: "Gates Cambridge Scholarship (UK)",
    country: "🌍 → 🇬🇧 Cambridge",
    amount: "Full — tuition + £18,840/year",
    level: ["Masters","PhD"],
    deadline: "October / December",
    gpa: "Outstanding",
    fields: "All fields",
    link: "https://www.gatescambridge.org/",
    description: "One of the most competitive scholarships globally. Full funding at University of Cambridge. Requires outstanding academic record and leadership potential.",
    tag: "🏆 Elite",
    tagColor: "#4f46e5"
  },
  {
    name: "Aga Khan Foundation International Scholarship",
    country: "🌍 International",
    amount: "50% grant + 50% loan",
    level: ["Masters"],
    deadline: "March 31",
    gpa: "Good",
    fields: "All fields",
    link: "https://the.akdn/en/how-we-work/our-agencies/aga-khan-foundation/international-scholarships",
    description: "For students from developing countries (Pakistan, Bangladesh, Afghanistan, Tajikistan, etc.) with financial need and academic merit.",
    tag: "🌍 Developing World",
    tagColor: "#0d9488"
  },
];

const LEVELS = ["All","Masters","PhD","Postdoc","Bachelor","Research"];
const COUNTRIES_FILTER = ["All","Germany","UK","USA","Switzerland","Sweden","Netherlands","EU","International"];

export default function ScholarshipsPage() {
  const [level, setLevel] = useState("All");
  const [country, setCountry] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = SCHOLARSHIPS.filter(s => {
    const levelOk = level === "All" || s.level.includes(level);
    const countryOk = country === "All" || s.country.includes(country);
    const searchOk = !search || s.name.toLowerCase().includes(search.toLowerCase()) || 
                     s.description.toLowerCase().includes(search.toLowerCase()) ||
                     s.fields.toLowerCase().includes(search.toLowerCase());
    return levelOk && countryOk && searchOk;
  });

  const cardStyle = {background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"16px",padding:"20px",display:"flex",flexDirection:"column" as const,gap:"10px"};
  const btnActive = {padding:"6px 16px",borderRadius:"20px",border:"none",cursor:"pointer",fontWeight:700,fontSize:".78rem",background:"rgba(255,204,2,.15)",color:"#fbbf24",borderBottom:"2px solid #fbbf24"} as React.CSSProperties;
  const btnInactive = {padding:"6px 16px",borderRadius:"20px",border:"1px solid rgba(255,255,255,.1)",cursor:"pointer",fontWeight:600,fontSize:".78rem",background:"transparent",color:"#64748b"} as React.CSSProperties;

  return (
    <div style={{background:"#0a0d14",minHeight:"100vh",color:"#f1f5f9",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
      <div style={{background:"linear-gradient(135deg,#0a0d14,#1a1f2e)",borderBottom:"1px solid rgba(255,255,255,.07)",padding:"32px 24px"}}>
        <div style={{maxWidth:"1000px",margin:"0 auto"}}>
          <a href="/" style={{fontSize:".82rem",color:"#94a3b8",textDecoration:"none",marginBottom:"12px",display:"block"}}>&#8592; Back to VisaVista</a>
          <h1 style={{fontSize:"2rem",fontWeight:900,marginBottom:"8px"}}>🏆 International Scholarships</h1>
          <p style={{color:"#94a3b8",fontSize:".95rem",marginBottom:"16px"}}>
            {SCHOLARSHIPS.length} high-value scholarships for international students and researchers — Germany, UK, USA, Switzerland, EU and beyond
          </p>
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap" as const}}>
            {[
              {l:"Fully Funded",c:"#16a34a",bg:"rgba(22,163,74,.12)"},
              {l:"Germany Available",c:"#FFCC02",bg:"rgba(255,204,2,.08)"},
              {l:"No GRE/IELTS",c:"#3b82f6",bg:"rgba(59,130,246,.08)"},
              {l:"All Nationalities",c:"#0d9488",bg:"rgba(13,148,136,.08)"},
            ].map(b => (
              <span key={b.l} style={{padding:"4px 12px",borderRadius:"20px",fontSize:".75rem",fontWeight:700,color:b.c,background:b.bg,border:`1px solid ${b.c}40`}}>{b.l}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:"1000px",margin:"0 auto",padding:"20px 16px"}}>
        <div style={{display:"flex",gap:"10px",marginBottom:"16px",flexWrap:"wrap" as const,alignItems:"center"}}>
          <input
            type="text" placeholder="Search scholarships, fields, descriptions..."
            value={search} onChange={e=>setSearch(e.target.value)}
            style={{flex:1,minWidth:"200px",padding:"10px 14px",background:"#111520",border:"1px solid rgba(255,255,255,.1)",borderRadius:"10px",color:"#f1f5f9",fontSize:".875rem",outline:"none"}}
          />
        </div>
        <div style={{display:"flex",gap:"6px",flexWrap:"wrap" as const,marginBottom:"12px"}}>
          {LEVELS.map(l => <button key={l} onClick={()=>setLevel(l)} style={level===l ? btnActive : btnInactive}>{l}</button>)}
        </div>
        <div style={{display:"flex",gap:"6px",flexWrap:"wrap" as const,marginBottom:"20px"}}>
          {COUNTRIES_FILTER.map(c => <button key={c} onClick={()=>setCountry(c)} style={country===c ? btnActive : btnInactive}>{c}</button>)}
        </div>

        <div style={{marginBottom:"12px",fontSize:".82rem",color:"#64748b"}}>
          Showing <strong style={{color:"#f1f5f9"}}>{filtered.length}</strong> of {SCHOLARSHIPS.length} scholarships
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"14px"}}>
          {filtered.map((s,i) => (
            <div key={i} style={cardStyle}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"8px"}}>
                <div style={{fontWeight:800,fontSize:".95rem",lineHeight:1.3}}>{s.name}</div>
                <span style={{background:s.tagColor+"22",color:s.tagColor,padding:"2px 9px",borderRadius:"6px",fontSize:".7rem",fontWeight:700,whiteSpace:"nowrap" as const,flexShrink:0}}>{s.tag}</span>
              </div>
              <div style={{display:"flex",gap:"6px",flexWrap:"wrap" as const}}>
                <span style={{fontSize:".78rem",color:"#94a3b8"}}>{s.country}</span>
                <span style={{fontSize:".78rem",color:"rgba(255,255,255,.2)"}}>·</span>
                <span style={{fontSize:".78rem",color:"#22c55e",fontWeight:700}}>{s.amount}</span>
              </div>
              <div style={{display:"flex",gap:"5px",flexWrap:"wrap" as const}}>
                {s.level.map(l => <span key={l} style={{background:"rgba(124,58,237,.12)",color:"#a78bfa",padding:"2px 8px",borderRadius:"5px",fontSize:".7rem",fontWeight:600}}>{l}</span>)}
              </div>
              <p style={{fontSize:".82rem",color:"#94a3b8",lineHeight:1.7,margin:0}}>{s.description}</p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px",fontSize:".75rem"}}>
                <div style={{color:"#64748b"}}>📅 Deadline<br/><span style={{color:"#f1f5f9",fontWeight:600}}>{s.deadline}</span></div>
                <div style={{color:"#64748b"}}>📚 Fields<br/><span style={{color:"#f1f5f9",fontWeight:600}}>{s.fields.length > 30 ? s.fields.slice(0,28)+"..." : s.fields}</span></div>
              </div>
              <a href={s.link} target="_blank" rel="noopener"
                style={{display:"block",textAlign:"center" as const,padding:"9px",background:"rgba(255,204,2,.1)",border:"1px solid rgba(255,204,2,.3)",borderRadius:"8px",color:"#fbbf24",fontWeight:700,fontSize:".82rem",textDecoration:"none"}}>
                Apply / Learn More →
              </a>
            </div>
          ))}
        </div>

        <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"20px",marginTop:"28px"}}>
          <h2 style={{fontSize:"1rem",fontWeight:700,marginBottom:"12px"}}>📋 Tips for scholarship applications</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"12px",fontSize:".82rem",color:"#94a3b8",lineHeight:1.8}}>
            {[
              ["Start early","Most fully funded scholarships require 6–12 months of preparation. Begin your statement of purpose, CV, and references well in advance."],
              ["Language certificates","DAAD, Erasmus, and most EU scholarships require B2/C1 German or IELTS/TOEFL. Get certified before applying."],
              ["Letter of motivation","The most important document. Be specific: why this scholarship, why this country, what will you contribute."],
              ["Academic references","Strong references from professors who know your work personally make the biggest difference."],
              ["Contact supervisors","For research scholarships (Humboldt, DAAD, Gates), contact potential supervisors BEFORE applying."],
              ["Stack scholarships","Many scholarships can be combined — e.g. DAAD + university scholarship + state grants."],
            ].map(([title, text]) => (
              <div key={title} style={{background:"rgba(255,255,255,.03)",borderRadius:"10px",padding:"12px"}}>
                <div style={{fontWeight:700,color:"#f1f5f9",marginBottom:"4px"}}>💡 {title}</div>
                <div>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
