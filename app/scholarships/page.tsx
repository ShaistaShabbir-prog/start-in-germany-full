"use client";
import GlobalDisclaimer from "@/components/GlobalDisclaimer";
// Page-level SEO handled in layout.tsx
import RecommendationWidget from "@/components/RecommendationWidget";
import { useState, useEffect } from "react";

const PD = "'Playfair Display',Georgia,serif";
const PS = "'Inter',system-ui,-apple-system,sans-serif";

const SCHOLARSHIPS = [
  {
    id:1, name:"DAAD", full:"Deutscher Akademischer Austauschdienst",
    country:"Germany", flag:"🇩🇪",
    amount:"€934 / month", extras:"+ travel grant + health insurance + language course",
    level:["Masters","PhD","Postdoc","Research"],
    deadline:"Oct – Nov", gpa:"Above average", fields:"All fields",
    link:"https://www.daad.de/en/study-and-research-in-germany/scholarships/",
    desc:"Germany's largest international scholarship — fully funded with living stipend, health insurance, travel allowance, and a complimentary German language course. Open to all nationalities worldwide.",
    tag:"⭐ Fully Funded", tagColor:"#16a34a", tagBg:"#DCFCE7",
    highlight:true, prestige:5,
  },
  {
    id:2, name:"Humboldt Fellowship", full:"Alexander von Humboldt Foundation",
    country:"Germany", flag:"🇩🇪",
    amount:"€2,670 – €3,170 / month", extras:"up to 24 months",
    level:["Postdoc","Research"],
    deadline:"Rolling (any time)", gpa:"PhD required", fields:"All disciplines",
    link:"https://www.humboldt-foundation.de/en/",
    desc:"One of the world's most prestigious research fellowships. Home to 30+ Nobel laureates. Outstanding international researchers spend up to 2 years in Germany with a generous stipend and strong alumni network.",
    tag:"🏆 Elite Research", tagColor:"#7c3aed", tagBg:"#EDE9FE",
    highlight:true, prestige:5,
  },
  {
    id:3, name:"Gates Cambridge", full:"Gates Cambridge Scholarship",
    country:"UK (Cambridge)", flag:"🇬🇧",
    amount:"Full tuition + £18,840 / year", extras:"+ extras allowance",
    level:["Masters","PhD"],
    deadline:"Oct / Dec", gpa:"Outstanding", fields:"All fields",
    link:"https://www.gatescambridge.org/",
    desc:"One of the most competitive scholarships on earth. Full funding at the University of Cambridge. Requires outstanding academic achievement and evidence of a commitment to improving the lives of others.",
    tag:"🏆 Elite", tagColor:"#1d4ed8", tagBg:"#DBEAFE",
    highlight:true, prestige:5,
  },
  {
    id:4, name:"Chevening", full:"Chevening Scholarship",
    country:"UK", flag:"🇬🇧",
    amount:"Full tuition + £1,200 / month", extras:"+ flights + visa",
    level:["Masters"],
    deadline:"November", gpa:"Good", fields:"All fields",
    link:"https://www.chevening.org/",
    desc:"The UK government's flagship global scholarship. Study a one-year Masters at any UK university. Requires 2+ years of work experience. Highly prestigious with a powerful global network of alumni.",
    tag:"⭐ Fully Funded", tagColor:"#16a34a", tagBg:"#DCFCE7",
    highlight:true, prestige:5,
  },
  {
    id:5, name:"Fulbright", full:"Fulbright Foreign Student Program",
    country:"USA", flag:"🇺🇸",
    amount:"Full tuition + stipend + insurance", extras:"+ travel",
    level:["Masters","PhD","Research"],
    deadline:"Varies by country", gpa:"Excellent", fields:"All fields",
    link:"https://foreign.fulbrightonline.org/",
    desc:"The US government's flagship scholarship — arguably the most recognised academic fellowship in the world. Full funding at US universities. Apply through your home country's Fulbright Commission.",
    tag:"⭐ Fully Funded", tagColor:"#16a34a", tagBg:"#DCFCE7",
    highlight:true, prestige:5,
  },
  {
    id:6, name:"Erasmus+", full:"European Union Exchange Programme",
    country:"European Union", flag:"🇪🇺",
    amount:"€800 – €1,200 / month", extras:"+ tuition waived",
    level:["Bachelor","Masters","PhD","Staff"],
    deadline:"Varies by university", gpa:"Good standing", fields:"All fields",
    link:"https://erasmus-plus.ec.europa.eu/",
    desc:"The EU's flagship mobility programme. Covers tuition at partner universities, a monthly living stipend, and a travel grant. Available to students from EU member states and over 150 partner countries.",
    tag:"🇪🇺 EU Programme", tagColor:"#1d4ed8", tagBg:"#DBEAFE",
    highlight:false, prestige:4,
  },
  {
    id:7, name:"Swiss Govt Excellence", full:"Swiss Government Excellence Scholarship",
    country:"Switzerland", flag:"🇨🇭",
    amount:"CHF 1,920 / month", extras:"+ accommodation + insurance",
    level:["Masters","PhD","Postdoc","Research"],
    deadline:"Dec – Jan", gpa:"Above average", fields:"All fields",
    link:"https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html",
    desc:"The Swiss federal government fully funds international students at Swiss universities — ETH Zurich, EPFL, and all cantonal universities. Covers stipend, housing supplement, and health insurance.",
    tag:"⭐ Govt Funded", tagColor:"#16a34a", tagBg:"#DCFCE7",
    highlight:false, prestige:4,
  },
  {
    id:8, name:"KAS Scholarship", full:"Konrad-Adenauer-Stiftung",
    country:"Germany", flag:"🇩🇪",
    amount:"€1,200 / month", extras:"+ conference & travel allowance",
    level:["Bachelor","Masters","PhD"],
    deadline:"Jan 15 / Jul 15", gpa:"Top academic", fields:"All fields",
    link:"https://www.kas.de/en/web/guest/scholarships",
    desc:"One of Germany's most prestigious political foundation scholarships. Strong community, mentoring network, and political education programme. Known for building lifelong professional connections.",
    tag:"💼 With Network", tagColor:"#7c3aed", tagBg:"#EDE9FE",
    highlight:false, prestige:4,
  },
  {
    id:9, name:"FES Scholarship", full:"Friedrich Ebert Stiftung",
    country:"Germany", flag:"🇩🇪",
    amount:"€1,200 / month", extras:"+ social / cultural events",
    level:["Bachelor","Masters","PhD"],
    deadline:"Jan / Jul", gpa:"Above average", fields:"Social sciences, law, economics",
    link:"https://www.fes.de/en/scholarships",
    desc:"Social-democratic foundation scholarship. Supports socially engaged students who demonstrate commitment to democracy and social justice. Strong global alumni network.",
    tag:"🤝 Social Focus", tagColor:"#dc2626", tagBg:"#FEE2E2",
    highlight:false, prestige:4,
  },
  {
    id:10, name:"Heinrich Böll", full:"Heinrich Böll Stiftung",
    country:"Germany", flag:"🇩🇪",
    amount:"€1,200 / month", extras:"+ supplementary funds",
    level:["Bachelor","Masters","PhD"],
    deadline:"Mar 1 / Sep 1", gpa:"Good", fields:"Preference: environmental, human rights",
    link:"https://www.boell.de/en/scholarships",
    desc:"Green-aligned foundation. Actively supports international students, women, LGBTQ+ individuals, and underrepresented groups. Broad eligibility criteria — one of the more accessible German foundations.",
    tag:"🌱 Green Focus", tagColor:"#16a34a", tagBg:"#DCFCE7",
    highlight:false, prestige:4,
  },
  {
    id:11, name:"KAAD", full:"Catholic Academic Exchange Service",
    country:"Germany", flag:"🇩🇪",
    amount:"Full scholarship", extras:"+ health insurance",
    level:["Masters","PhD"],
    deadline:"Varies", gpa:"Excellent", fields:"All fields (preference: developing countries)",
    link:"https://www.kaad.de/en/",
    desc:"Full scholarship for students from developing countries. Catholic welfare organisation — but open to all faiths. Includes stipend, health insurance, and personalised integration support.",
    tag:"🌍 Developing World", tagColor:"#0d9488", tagBg:"#CCFBF1",
    highlight:false, prestige:3,
  },
  {
    id:12, name:"Commonwealth", full:"Commonwealth Scholarship",
    country:"UK", flag:"🇬🇧",
    amount:"Full tuition + stipend + travel", extras:"+ thesis allowance",
    level:["Masters","PhD"],
    deadline:"December", gpa:"Good", fields:"Priority: STEM, health, education",
    link:"https://cscuk.fcdo.gov.uk/",
    desc:"For students from Commonwealth countries. Covers tuition fees, a living allowance, return airfare, and thesis/study travel grants. Strong focus on development-relevant research.",
    tag:"🌍 Commonwealth", tagColor:"#0d9488", tagBg:"#CCFBF1",
    highlight:false, prestige:4,
  },
  {
    id:13, name:"Sweden SI", full:"Swedish Institute Scholarships for Global Professionals",
    country:"Sweden", flag:"🇸🇪",
    amount:"SEK 10,000 / month", extras:"+ full tuition",
    level:["Masters"],
    deadline:"February", gpa:"Good", fields:"All fields",
    link:"https://si.se/en/apply/scholarships/",
    desc:"The Swedish Institute scholarship for mid-career professionals from selected countries. Covers tuition and living costs. Comes with an intensive network programme connecting scholars globally.",
    tag:"💼 Professionals", tagColor:"#7c3aed", tagBg:"#EDE9FE",
    highlight:false, prestige:4,
  },
  {
    id:14, name:"Holland Scholarship", full:"Dutch Government Holland Scholarship",
    country:"Netherlands", flag:"🇳🇱",
    amount:"€5,000 (one-time)", extras:"+ university discounts",
    level:["Bachelor","Masters"],
    deadline:"Feb – May", gpa:"Good", fields:"All fields",
    link:"https://www.studyinholland.nl/scholarships/holland-scholarship",
    desc:"For non-EEA students studying at Dutch universities. A partial scholarship offered by Dutch universities and the Ministry of Education. Best used in combination with other funding sources.",
    tag:"🌷 Netherlands", tagColor:"#FF6B35", tagBg:"#FFEDD5",
    highlight:false, prestige:3,
  },
  {
    id:15, name:"HEC Overseas", full:"HEC Overseas Scholarship (Pakistan)",
    country:"Pakistan → Worldwide", flag:"🇵🇰",
    amount:"Full tuition + stipend + travel", extras:"+ return obligation",
    level:["Masters","PhD"],
    deadline:"Jan – Mar", gpa:"3.0+ GPA", fields:"STEM priority",
    link:"https://hec.gov.pk/english/scholarships/Pages/Overseas-Scholarships.aspx",
    desc:"Pakistan's flagship fully-funded overseas scholarship programme. Extremely competitive. Sends Pakistani scholars to top universities worldwide. Requires commitment to return and contribute to Pakistan's development.",
    tag:"🇵🇰 Pakistan", tagColor:"#16a34a", tagBg:"#DCFCE7",
    highlight:false, prestige:4,
  },
  {
    id:16, name:"Aga Khan", full:"Aga Khan Foundation International Scholarship",
    country:"International", flag:"🌍",
    amount:"50% grant + 50% loan", extras:"(loan repayable after graduation)",
    level:["Masters"],
    deadline:"March 31", gpa:"Good", fields:"All fields",
    link:"https://the.akdn/en/how-we-work/our-agencies/aga-khan-foundation/international-scholarships",
    desc:"For students from developing countries — Pakistan, Bangladesh, Afghanistan, Tajikistan, and others — with financial need. Combines a grant with an interest-free loan repayable after employment.",
    tag:"🌍 Developing World", tagColor:"#0d9488", tagBg:"#CCFBF1",
    highlight:false, prestige:3,
  },
  {
    id:17, name:"AAUW Fellowship", full:"AAUW International Fellowships (Women)",
    country:"USA", flag:"🇺🇸",
    amount:"$20,000 – $35,000 / year", extras:"non-US women only",
    level:["Masters","PhD","Postdoc"],
    deadline:"November 15", gpa:"Good", fields:"All fields",
    link:"https://www.aauw.org/resources/programs/fellowships-grants/current-named-gift-fellowships/international-fellowships/",
    desc:"One of the most prestigious women-only scholarships globally. For women who are NOT US citizens or permanent residents, to study at any accredited US institution. Transformative network included.",
    tag:"👩 Women Only", tagColor:"#7c3aed", tagBg:"#EDE9FE",
    highlight:false, prestige:4,
  },
  {
    id:18, name:"ICCR India", full:"Indian Council for Cultural Relations Scholarship",
    country:"India → Worldwide", flag:"🇮🇳",
    amount:"Full — varies by destination", extras:"+ accommodation",
    level:["Masters","PhD"],
    deadline:"Varies", gpa:"Good", fields:"All fields",
    link:"https://www.iccr.gov.in/scholarships",
    desc:"Indian government scholarships for Indian students studying abroad, and for international students coming to India. Covers tuition, accommodation, and a monthly stipend.",
    tag:"🇮🇳 India", tagColor:"#FF6B35", tagBg:"#FFEDD5",
    highlight:false, prestige:3,
  },
];

const TIPS = [
  { icon:"⏰", title:"Start 12 months early", body:"Fully funded scholarships need a letter of motivation, CV, 2–3 references, and sometimes a research proposal. Begin a year before the deadline." },
  { icon:"🗣️", title:"Contact supervisors first", body:"For Humboldt, DAAD, and Gates: email potential supervisors before applying. Their support letter transforms your application." },
  { icon:"📜", title:"Language certificates matter", body:"DAAD and EU scholarships often require B2/C1 German or IELTS 6.5+. Get certified 6+ months before applying." },
  { icon:"✍️", title:"Tailor every statement", body:"A generic motivation letter is rejected immediately. Research the scholarship's values — DAAD prizes academic excellence, FES prizes social commitment." },
  { icon:"🔗", title:"Stack scholarships", body:"DAAD can be combined with a university scholarship or state grants. Research what's stackable before applying to one alone." },
  { icon:"🎓", title:"Alumni networks are gold", body:"Gates, Humboldt, Chevening, and Fulbright alumni networks open doors for life. Factor the network into your decision, not just the money." },
];

const LEVELS = ["All","Masters","PhD","Postdoc","Bachelor","Research"];

export default function ScholarshipsPage() {
  const [level, setLevel] = useState("All");
  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState<number[]>([]);
  const [showSaved, setShowSaved] = useState(false);
  const [hovered, setHovered] = useState<number|null>(null);

  useEffect(() => {
    const s = localStorage.getItem("vv_saved_schol");
    if (s) setSaved(JSON.parse(s));
  }, []);

  const toggleSave = (id: number) => {
    const next = saved.includes(id) ? saved.filter(x=>x!==id) : [...saved, id];
    setSaved(next);
    localStorage.setItem("vv_saved_schol", JSON.stringify(next));
  };

  const filtered = SCHOLARSHIPS.filter(s => {
    if (showSaved && !saved.includes(s.id)) return false;
    if (level !== "All" && !s.level.includes(level)) return false;
    if (search) {
      const q = search.toLowerCase();
      return s.name.toLowerCase().includes(q) || s.full.toLowerCase().includes(q) ||
             s.desc.toLowerCase().includes(q) || s.fields.toLowerCase().includes(q) ||
             s.country.toLowerCase().includes(q);
    }
    return true;
  });

  const highlighted = filtered.filter(s => s.highlight);
  const rest = filtered.filter(s => !s.highlight);

  const stars = (n: number) => "★".repeat(n) + "☆".repeat(5-n);

  return (
    <div style={{background:"#F8F7F4", minHeight:"100vh", fontFamily:PS}}>

      {/* ── HERO ── */}
      <div style={{background:"linear-gradient(135deg,#0B1D3A 0%,#1a0533 50%,#0B1D3A 100%)", position:"relative", overflow:"hidden", paddingBottom:"60px"}}>
        {/* Decorative circles */}
        <div style={{position:"absolute",top:"-100px",right:"-100px",width:"500px",height:"500px",borderRadius:"50%",background:"rgba(253,224,71,.04)",pointerEvents:"none"}} />
        <div style={{position:"absolute",bottom:"-50px",left:"10%",width:"300px",height:"300px",borderRadius:"50%",background:"rgba(124,58,237,.06)",pointerEvents:"none"}} />

        {/* Nav back */}
        <div style={{maxWidth:"1100px",margin:"0 auto",padding:"24px 24px 0"}}>
          <a href="/" style={{fontSize:"13px",color:"rgba(255,255,255,.5)",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"6px",transition:"color .15s"}}
            onMouseOver={e=>(e.currentTarget.style.color="#fff")} onMouseOut={e=>(e.currentTarget.style.color="rgba(255,255,255,.5)")}>
            ← Back to VisaVista
          </a>
        </div>

        <div style={{maxWidth:"1100px",margin:"0 auto",padding:"48px 24px 0"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(253,224,71,.1)",border:"1px solid rgba(253,224,71,.2)",borderRadius:"100px",padding:"5px 16px",marginBottom:"20px"}}>
            <span style={{fontSize:"12px",fontWeight:700,color:"#FDE047",textTransform:"uppercase",letterSpacing:".1em"}}>2026 Scholarship Guide</span>
          </div>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2.2rem,5vw,3.4rem)",fontWeight:900,color:"#fff",lineHeight:1.1,marginBottom:"16px",maxWidth:"720px"}}>
            Find funding for your<br/>
            <span style={{background:"linear-gradient(135deg,#FDE047,#FCA5A5)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>international education</span>
          </h1>
          <p style={{fontSize:"16px",color:"rgba(255,255,255,.6)",lineHeight:1.7,maxWidth:"580px",marginBottom:"36px"}}>
            {SCHOLARSHIPS.length} scholarships — from fully funded government programmes to elite research fellowships. Germany, UK, USA, EU, Switzerland and beyond.
          </p>

          {/* Quick stats */}
          <div style={{display:"flex",gap:"32px",flexWrap:"wrap"}}>
            {[
              {n:`${SCHOLARSHIPS.length}`,l:"Total scholarships"},
              {n:`${SCHOLARSHIPS.filter(s=>s.tag.includes("Fully")).length}`,l:"Fully funded"},
              {n:`${SCHOLARSHIPS.filter(s=>s.prestige===5).length}`,l:"Elite (★★★★★)"},
              {n:"€0",l:"This guide costs"},
            ].map(stat=>(
              <div key={stat.l}>
                <div style={{fontFamily:PD,fontSize:"2rem",fontWeight:900,color:"#FDE047",lineHeight:1}}>{stat.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.45)",marginTop:"4px",textTransform:"uppercase",letterSpacing:".06em"}}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:"60px",background:"#F8F7F4",clipPath:"ellipse(55% 100% at 50% 100%)"}} />
      </div>

      {/* ── FILTERS ── */}
      <div style={{maxWidth:"1100px",margin:"0 auto",padding:"40px 24px 0"}}>
        <div style={{display:"flex",gap:"10px",flexWrap:"wrap",alignItems:"center",marginBottom:"20px"}}>
          <div style={{position:"relative",flex:"1 1 260px"}}>
            <span style={{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",fontSize:"16px",pointerEvents:"none"}}>🔍</span>
            <input type="text" placeholder="Search by name, country, field..."
              value={search} onChange={e=>setSearch(e.target.value)}
              style={{width:"100%",padding:"11px 14px 11px 40px",borderRadius:"12px",border:"1.5px solid #E5E7EB",fontSize:"14px",outline:"none",background:"#fff",boxSizing:"border-box" as const,fontFamily:PS}} />
          </div>
          <button onClick={()=>setShowSaved(!showSaved)}
            style={{padding:"11px 18px",borderRadius:"12px",border:`1.5px solid ${showSaved?"#7c3aed":"#E5E7EB"}`,background:showSaved?"#7c3aed":"#fff",color:showSaved?"#fff":"#374151",fontWeight:600,fontSize:"14px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",whiteSpace:"nowrap" as const}}>
            🔖 Saved ({saved.length})
          </button>
        </div>

        {/* Level filter pills */}
        <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"36px"}}>
          {LEVELS.map(l=>(
            <button key={l} onClick={()=>setLevel(l)}
              style={{padding:"7px 18px",borderRadius:"100px",border:"none",cursor:"pointer",fontWeight:600,fontSize:"13px",
                background:level===l?"#0B1D3A":"#fff",
                color:level===l?"#fff":"#6B7280",
                boxShadow:level===l?"0 2px 8px rgba(11,29,58,.2)":"0 1px 3px rgba(0,0,0,.06)",
                transition:"all .15s"}}>
              {l}
            </button>
          ))}
        </div>

        <div style={{fontSize:"13px",color:"#9CA3AF",marginBottom:"24px"}}>
          Showing <strong style={{color:"#0B1D3A"}}>{filtered.length}</strong> of {SCHOLARSHIPS.length} scholarships
          {saved.length > 0 && <span style={{marginLeft:"12px",color:"#7c3aed"}}>· {saved.length} saved</span>}
        </div>

        {/* ── ELITE PICKS ── */}
        {highlighted.length > 0 && level === "All" && !search && !showSaved && (
          <div style={{marginBottom:"48px"}}>
            <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px"}}>
              <span style={{fontFamily:PD,fontSize:"20px",fontWeight:800,color:"#0B1D3A"}}>★ Elite picks</span>
              <div style={{flex:1,height:"1px",background:"#E5E7EB"}} />
              <span style={{fontSize:"12px",color:"#9CA3AF",textTransform:"uppercase",letterSpacing:".08em"}}>★★★★★ prestige</span>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:"16px"}}>
              {highlighted.map(s=>(
                <ScholarCard key={s.id} s={s} hovered={hovered===s.id}
                  onHover={()=>setHovered(s.id)} onLeave={()=>setHovered(null)}
                  saved={saved.includes(s.id)} onSave={()=>toggleSave(s.id)} elite />
              ))}
            </div>
          </div>
        )}

        {/* ── ALL / REST ── */}
        {rest.length > 0 && (
          <div style={{marginBottom:"48px"}}>
            {highlighted.length > 0 && level === "All" && !search && !showSaved && (
              <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px"}}>
                <span style={{fontFamily:PD,fontSize:"20px",fontWeight:800,color:"#0B1D3A"}}>All scholarships</span>
                <div style={{flex:1,height:"1px",background:"#E5E7EB"}} />
              </div>
            )}
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"14px"}}>
              {(highlighted.length === 0 || search || showSaved || level !== "All" ? filtered : rest).map(s=>(
                <ScholarCard key={s.id} s={s} hovered={hovered===s.id}
                  onHover={()=>setHovered(s.id)} onLeave={()=>setHovered(null)}
                  saved={saved.includes(s.id)} onSave={()=>toggleSave(s.id)} elite={false} />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{textAlign:"center",padding:"64px 24px",color:"#9CA3AF"}}>
            <div style={{fontSize:"40px",marginBottom:"12px"}}>🔍</div>
            <div style={{fontSize:"16px",fontWeight:600,color:"#374151",marginBottom:"6px"}}>No scholarships found</div>
            <div style={{fontSize:"14px"}}>Try a different level or search term.</div>
          </div>
        )}

        {/* ── OUR RECOMMENDATIONS ── */}
        <div style={{marginBottom:"32px"}}>
          <div style={{fontSize:".72rem",color:"#9CA3AF",textTransform:"uppercase" as const,letterSpacing:".08em",marginBottom:"12px"}}>
            🤝 While you're planning your move — trusted financial tools
          </div>
          <div style={{fontSize:".65rem",fontWeight:800,textTransform:"uppercase",letterSpacing:".1em",color:"rgba(255,255,255,.3)",marginBottom:"8px"}}>
          🤝 Partner / affiliate — <a href="/affiliate-disclosure" style={{color:"#FFCC02",textDecoration:"none"}}>see disclosure</a>
        </div>
        <RecommendationWidget variant="inline" />
        </div>

        {/* ── TIPS ── */}
        <div style={{background:"#0B1D3A",borderRadius:"24px",padding:"40px 36px",marginBottom:"60px",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:"-60px",right:"-60px",width:"200px",height:"200px",borderRadius:"50%",background:"rgba(253,224,71,.05)"}} />
          <div style={{fontFamily:PD,fontSize:"22px",fontWeight:800,color:"#fff",marginBottom:"6px"}}>How to win a scholarship</div>
          <div style={{fontSize:"14px",color:"rgba(255,255,255,.5)",marginBottom:"28px"}}>Six things that actually move the needle — from applicants who won.</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:"16px"}}>
            {TIPS.map(tip=>(
              <div key={tip.title} style={{background:"rgba(255,255,255,.05)",borderRadius:"14px",padding:"18px",border:"1px solid rgba(255,255,255,.07)"}}>
                <div style={{fontSize:"22px",marginBottom:"8px"}}>{tip.icon}</div>
                <div style={{fontWeight:700,color:"#FDE047",fontSize:"14px",marginBottom:"6px"}}>{tip.title}</div>
                <div style={{fontSize:"13px",color:"rgba(255,255,255,.55)",lineHeight:1.65}}>{tip.body}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Scholarship Card Component ──
function ScholarCard({ s, hovered, onHover, onLeave, saved, onSave, elite }: {
  s: typeof SCHOLARSHIPS[0]; hovered: boolean; onHover: ()=>void; onLeave: ()=>void;
  saved: boolean; onSave: ()=>void; elite: boolean;
}) {
  const PS = "'Inter',system-ui,sans-serif";
  const PD = "'Playfair Display',Georgia,serif";

  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave}
      style={{background:"#fff",borderRadius:"18px",padding:"22px",cursor:"default",
        border:`1.5px solid ${hovered?"#0B1D3A":"#F3F4F6"}`,
        boxShadow:hovered?"0 12px 40px rgba(11,29,58,.1)":"0 2px 8px rgba(0,0,0,.04)",
        transition:"all .2s",display:"flex",flexDirection:"column" as const,gap:"14px",
        position:"relative",overflow:"hidden" as const}}>

      {/* Elite ribbon */}
      {elite && (
        <div style={{position:"absolute",top:"14px",right:"-20px",background:"#FDE047",color:"#0B1D3A",fontSize:"10px",fontWeight:800,padding:"3px 28px",transform:"rotate(35deg)",transformOrigin:"top right",letterSpacing:".08em",textTransform:"uppercase" as const}}>
          ELITE
        </div>
      )}

      {/* Header */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"10px"}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"3px"}}>
            <span style={{fontSize:"18px"}}>{s.flag}</span>
            <span style={{fontFamily:PD,fontWeight:800,fontSize:"16px",color:"#0B1D3A",lineHeight:1.2}}>{s.name}</span>
          </div>
          <div style={{fontSize:"11px",color:"#9CA3AF",fontFamily:PS}}>{s.full}</div>
        </div>
        <button onClick={onSave}
          style={{background:"none",border:"none",cursor:"pointer",fontSize:"18px",padding:"2px",flexShrink:0,opacity:saved?1:.35,transition:"all .15s"}}
          title={saved?"Remove from saved":"Save scholarship"}>
          {saved ? "🔖" : "🏷️"}
        </button>
      </div>

      {/* Tag + prestige */}
      <div style={{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap" as const}}>
        <span style={{background:s.tagBg,color:s.tagColor,padding:"3px 10px",borderRadius:"100px",fontSize:"11px",fontWeight:700}}>
          {s.tag}
        </span>
        <span style={{fontSize:"11px",color:"#F59E0B",letterSpacing:"1px"}}>
          {"★".repeat(s.prestige)}{"☆".repeat(5-s.prestige)}
        </span>
      </div>

      {/* Amount */}
      <div style={{background:"#F0FDF4",borderRadius:"10px",padding:"10px 14px"}}>
        <div style={{fontSize:"15px",fontWeight:800,color:"#16a34a",fontFamily:PD}}>{s.amount}</div>
        <div style={{fontSize:"11px",color:"#6B7280",marginTop:"2px"}}>{s.extras}</div>
      </div>

      {/* Description */}
      <p style={{fontSize:"13px",color:"#4B5563",lineHeight:1.65,margin:0}}>{s.desc}</p>

      {/* Meta grid */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",fontSize:"12px"}}>
        {[
          ["📅 Deadline", s.deadline],
          ["🎓 Level", s.level.join(", ")],
          ["📚 Fields", s.fields.length>36?s.fields.slice(0,34)+"…":s.fields],
          ["🏆 GPA req.", s.gpa],
        ].map(([label,val])=>(
          <div key={label} style={{background:"#F9FAFB",borderRadius:"8px",padding:"8px 10px"}}>
            <div style={{color:"#9CA3AF",fontSize:"11px",marginBottom:"2px"}}>{label}</div>
            <div style={{color:"#111827",fontWeight:600}}>{val as string}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a href={s.link} target="_blank" rel="noopener"
        style={{display:"block",textAlign:"center" as const,padding:"11px",borderRadius:"11px",
          background:hovered?"#0B1D3A":"#F1F5F9",
          color:hovered?"#FDE047":"#374151",
          fontWeight:700,fontSize:"13px",textDecoration:"none",
          transition:"all .2s",border:`1.5px solid ${hovered?"#0B1D3A":"transparent"}`}}>
        Apply / Learn more →
      </a>
    </div>
  );
}
