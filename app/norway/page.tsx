"use client";
import { useState } from "react";

export default function NorwayPage() {
  const [tab, setTab] = useState("overview");
  const TABS = ["overview","visa","salary","steps","links"];

  return (
    <div style={{background:"#0a0d14",minHeight:"100vh",color:"#f1f5f9",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
      <div style={{background:"linear-gradient(135deg,#111520,#1a1f2e)",borderBottom:"1px solid rgba(255,255,255,.07)",padding:"32px 24px"}}>
        <div style={{maxWidth:"960px",margin:"0 auto"}}>
          <a href="/" style={{fontSize:".82rem",color:"#94a3b8",textDecoration:"none",marginBottom:"12px",display:"block"}}>&#8592; Back to VisaVista</a>
          <h1 style={{fontSize:"2rem",fontWeight:900,marginBottom:"8px"}}>Work &amp; Live in Norway 🇳🇴</h1>
          <p style={{color:"#94a3b8",fontSize:".95rem"}}>Visa types · Salary guide · Step-by-step process · Official links</p>
        </div>
      </div>
      <div style={{borderBottom:"1px solid rgba(255,255,255,.07)",background:"#111520"}}>
        <div style={{maxWidth:"960px",margin:"0 auto",display:"flex",overflowX:"auto"}}>
          {TABS.map(t => (
            <button key={t} onClick={()=>setTab(t)} style={{padding:"12px 20px",border:"none",background:"transparent",
              color:tab===t?"#EF3340":"#64748b",fontWeight:700,fontSize:".85rem",
              borderBottom:`2px solid ${tab===t?"#EF3340":"transparent"}`,cursor:"pointer",whiteSpace:"nowrap"}}>
              {t.charAt(0).toUpperCase()+t.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div style={{maxWidth:"960px",margin:"0 auto",padding:"24px 16px"}}>
        {tab==="overview" && (
          <div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"12px",marginBottom:"20px"}}>
              {[["Currency","NOK"],["Immigration","International"],["Authority","UDI (Norway)"],["Visa options","4+"]].map(([l,v]) => (
                <div key={l} style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"12px",padding:"16px",textAlign:"center"}}>
                  <div style={{fontSize:"1.1rem",fontWeight:800,color:"#EF3340",marginBottom:"4px"}}>{v}</div>
                  <div style={{fontSize:".72rem",color:"#64748b",textTransform:"uppercase"}}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"20px"}}>
              <h2 style={{fontWeight:700,marginBottom:"10px"}}>Why Norway?</h2>
              <p style={{color:"#94a3b8",lineHeight:"1.8",fontSize:".875rem"}}>
                Competitive salaries, high quality of life, and a structured immigration system make
                this an excellent destination for skilled immigrants from South Asia, the Middle East,
                Africa, and beyond. International applicants are welcome with clear pathways to permanent residency.
              </p>
            </div>
          </div>
        )}
        {tab==="visa" && (
          <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"16px",borderLeft:"4px solid #EF3340"}}>
              <div style={{fontWeight:700,color:"#EF3340",marginBottom:"4px"}}>Skilled Worker</div>
              <div style={{fontSize:".8rem",color:"#94a3b8",lineHeight:"1.6"}}>Contact UDI (Norway) for requirements, thresholds, and processing times. Requirements vary by nationality.</div>
            </div>
            <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"16px",borderLeft:"4px solid #EF3340"}}>
              <div style={{fontWeight:700,color:"#EF3340",marginBottom:"4px"}}>Specialist Permit</div>
              <div style={{fontSize:".8rem",color:"#94a3b8",lineHeight:"1.6"}}>Contact UDI (Norway) for requirements, thresholds, and processing times. Requirements vary by nationality.</div>
            </div>
            <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"16px",borderLeft:"4px solid #EF3340"}}>
              <div style={{fontWeight:700,color:"#EF3340",marginBottom:"4px"}}>Self-employed</div>
              <div style={{fontSize:".8rem",color:"#94a3b8",lineHeight:"1.6"}}>Contact UDI (Norway) for requirements, thresholds, and processing times. Requirements vary by nationality.</div>
            </div>
            <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"16px",borderLeft:"4px solid #EF3340"}}>
              <div style={{fontWeight:700,color:"#EF3340",marginBottom:"4px"}}>EEA Registration</div>
              <div style={{fontSize:".8rem",color:"#94a3b8",lineHeight:"1.6"}}>Contact UDI (Norway) for requirements, thresholds, and processing times. Requirements vary by nationality.</div>
            </div>
          </div>
        )}
        {tab==="salary" && (
          <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"20px"}}>
            <h2 style={{fontWeight:700,marginBottom:"14px"}}>Salary Guide (NOK)</h2>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:".875rem"}}>
              <thead><tr style={{borderBottom:"1px solid rgba(255,255,255,.07)"}}>
                <th style={{padding:"9px 12px",textAlign:"left",color:"#64748b",fontWeight:700,textTransform:"uppercase",fontSize:".72rem"}}>Role</th>
                <th style={{padding:"9px 12px",textAlign:"left",color:"#64748b",fontWeight:700,textTransform:"uppercase",fontSize:".72rem"}}>Avg Annual</th>
              </tr></thead>
              <tbody>
                {[["Software Engineer","€90,000"],["Data Scientist","€85,000"],["Product Manager","€95,000"],["Healthcare Professional","€70,000"],["Financial Analyst","€80,000"]].map(([r,s])=>(
                  <tr key={r} style={{borderBottom:"1px solid rgba(255,255,255,.07)"}}>
                    <td style={{padding:"9px 12px",fontWeight:600}}>{""+r}</td>
                    <td style={{padding:"9px 12px",color:"#EF3340",fontWeight:700}}>{""+s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {tab==="steps" && (
          <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            {["Research visa type and eligibility",`Gather documents — degree, employment contract, CV`,`Apply online via UDI (Norway)`,
              "Attend biometric appointment if required","Receive permit decision (4-12 weeks)","Register at local authorities on arrival"
            ].map((s,i)=>(
              <div key={i} style={{display:"flex",gap:"10px",alignItems:"flex-start",background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"12px",padding:"13px"}}>
                <div style={{width:"26px",height:"26px",borderRadius:"50%",background:"#EF3340",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:".78rem",flexShrink:0}}>{""+( i+1)}</div>
                <div style={{fontSize:".875rem",lineHeight:"1.6"}}>{""+s}</div>
              </div>
            ))}
          </div>
        )}
        {tab==="links" && (
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"10px"}}>
            {[{n:"UDI (Norway)",d:"Official immigration authority",u:"https://www.google.com/search?q=UDI+(Norway)+immigration"},
              {n:"LinkedIn Jobs",d:"Find jobs internationally",u:"https://linkedin.com/jobs"},
              {n:"Numbeo",d:"Cost of living comparison",u:"https://numbeo.com"},
              {n:"Duolingo",d:"Learn local language",u:"https://duolingo.com"},
            ].map(l=>(
              <a key={l.n} href={l.u} target="_blank" rel="noopener"
                style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"12px",padding:"16px",textDecoration:"none",color:"#f1f5f9",display:"block"}}>
                <div style={{fontWeight:700,color:"#EF3340",marginBottom:"4px"}}>{""+l.n}</div>
                <div style={{fontSize:".78rem",color:"#64748b"}}>{""+l.d}</div>
              </a>
            ))}
          </div>
        )}
      </div>
    

{/* ── VISIT VISA SECTION ── */}
<section style={{background:"#FFFBF0",borderTop:"3px solid #EF2B2D",padding:"4rem 0"}}>
  <div style={{...sec}}>
    <span style={{...eye,color:"#EF2B2D"}}>🇳🇴 Visit / Tourist Visa</span>
    <h2 style={{fontFamily:PD,fontSize:"clamp(1.6rem,3vw,2.3rem)",fontWeight:800,color:"#0B1D3A",lineHeight:1.2,marginBottom:"8px"}}>Norway / Schengen Tourist Visa (Type C)</h2>
    <div style={{...bar,background:"#EF2B2D"}}/>
    <p style={{fontSize:"15px",color:"#6B7280",marginBottom:"2rem",maxWidth:"640px"}}>Norway is Schengen — apply at Norwegian Embassy Islamabad</p>
    <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"2.5rem"}}>
      {[{label:"Duration",value:"90 days in 180-day period",icon:"📅"},{label:"Visa Fee",value:"€90",icon:"💳"},{label:"Processing",value:"15 calendar days",icon:"⏱️"}].map(function(s){return <div key={s.label} style={{background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:"12px",padding:"1rem 1.5rem",minWidth:"160px",flex:"1"}}><div style={{fontSize:"1.4rem",marginBottom:"4px"}}>{s.icon}</div><div style={{fontSize:"11px",color:"#9CA3AF",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"2px"}}>{s.label}</div><div style={{fontSize:"15px",fontWeight:700,color:"#0B1D3A"}}>{s.value}</div></div>;})}
    </div>
    <div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:"2rem",alignItems:"start"}}>
      <div style={{background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:"16px",padding:"1.5rem"}}>
        <h3 style={{fontFamily:PD,fontWeight:700,fontSize:"1.1rem",color:"#0B1D3A",marginBottom:"1rem"}}>📋 Required Documents (from Pakistan)</h3>
        <ul style={{padding:0,margin:0}}>
              <CI key="0">Schengen visa application form</CI>
              <CI key="1">Valid Pakistani passport</CI>
              <CI key="2">Two biometric photos</CI>
              <CI key="3">Schengen travel insurance</CI>
              <CI key="4">Return flights and accommodation bookings</CI>
              <CI key="5">Bank statements (3 months)</CI>
              <CI key="6">Employment letter + NOC</CI>
              <CI key="7">Purpose of visit explanation letter</CI>
        </ul>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        <div style={{background:"#FEF3C7",border:"1.5px solid #FCD34D",borderRadius:"16px",padding:"1.5rem"}}>
          <div style={{fontWeight:700,fontSize:"13px",color:"#92400E",marginBottom:"8px"}}>💡 Important Tip for Pakistanis</div>
          <p style={{fontSize:"13px",color:"#78350F",lineHeight:1.6,margin:0}}>Norway is Schengen but not EU. VFS Global Pakistan handles appointments for Norwegian visas. Apply minimum 3 weeks in advance.</p>
        </div>
        <a href="https://www.norway.no/en/pakistan/services-info/visas-residence/" target="_blank" rel="noopener noreferrer"
          style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"14px 24px",
            borderRadius:"12px",background:"#EF2B2D",color:"#fff",fontWeight:700,fontSize:"15px",
            textDecoration:"none",fontFamily:IN}}>🌐 Official 🇳🇴 Visa Application →</a>
        <a href={WA} target="_blank" rel="noopener noreferrer"
          style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"14px 24px",
            borderRadius:"12px",background:"#25D366",color:"#fff",fontWeight:700,fontSize:"15px",
            textDecoration:"none",fontFamily:IN}}>💬 Need visa help? WhatsApp us →</a>
      </div>
    </div>
  </div>
</section>
</div>
  );
}
