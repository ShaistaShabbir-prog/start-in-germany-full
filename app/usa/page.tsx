"use client";
import { useState } from "react";

export default function UsaPage() {
  const [tab, setTab] = useState("overview");
  const TABS = ["overview","visa","salary","steps","links"];

  return (
    <div style={{background:"#0a0d14",minHeight:"100vh",color:"#f1f5f9",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
      <div style={{background:"linear-gradient(135deg,#111520,#1a1f2e)",borderBottom:"1px solid rgba(255,255,255,.07)",padding:"32px 24px"}}>
        <div style={{maxWidth:"960px",margin:"0 auto"}}>
          <a href="/" style={{fontSize:".82rem",color:"#94a3b8",textDecoration:"none",marginBottom:"12px",display:"block"}}>&#8592; Back to VisaVista</a>
          <h1 style={{fontSize:"2rem",fontWeight:900,marginBottom:"8px"}}>Work &amp; Live in United States 🇺🇸</h1>
          <p style={{color:"#94a3b8",fontSize:".95rem"}}>Visa types · Salary guide · Step-by-step process · Official links</p>
        </div>
      </div>
      <div style={{borderBottom:"1px solid rgba(255,255,255,.07)",background:"#111520"}}>
        <div style={{maxWidth:"960px",margin:"0 auto",display:"flex",overflowX:"auto"}}>
          {TABS.map(t => (
            <button key={t} onClick={()=>setTab(t)} style={{padding:"12px 20px",border:"none",background:"transparent",
              color:tab===t?"#3C3B6E":"#64748b",fontWeight:700,fontSize:".85rem",
              borderBottom:`2px solid ${tab===t?"#3C3B6E":"transparent"}`,cursor:"pointer",whiteSpace:"nowrap"}}>
              {t.charAt(0).toUpperCase()+t.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div style={{maxWidth:"960px",margin:"0 auto",padding:"24px 16px"}}>
        {tab==="overview" && (
          <div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"12px",marginBottom:"20px"}}>
              {[["Currency","USD"],["Immigration","International"],["Authority","USCIS"],["Visa options","4+"]].map(([l,v]) => (
                <div key={l} style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"12px",padding:"16px",textAlign:"center"}}>
                  <div style={{fontSize:"1.1rem",fontWeight:800,color:"#3C3B6E",marginBottom:"4px"}}>{v}</div>
                  <div style={{fontSize:".72rem",color:"#64748b",textTransform:"uppercase"}}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"20px"}}>
              <h2 style={{fontWeight:700,marginBottom:"10px"}}>Why United States?</h2>
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
            <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"16px",borderLeft:"4px solid #3C3B6E"}}>
              <div style={{fontWeight:700,color:"#3C3B6E",marginBottom:"4px"}}>H-1B Specialty Worker</div>
              <div style={{fontSize:".8rem",color:"#94a3b8",lineHeight:"1.6"}}>Contact USCIS for requirements, thresholds, and processing times. Requirements vary by nationality.</div>
            </div>
            <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"16px",borderLeft:"4px solid #3C3B6E"}}>
              <div style={{fontWeight:700,color:"#3C3B6E",marginBottom:"4px"}}>O-1 Extraordinary Ability</div>
              <div style={{fontSize:".8rem",color:"#94a3b8",lineHeight:"1.6"}}>Contact USCIS for requirements, thresholds, and processing times. Requirements vary by nationality.</div>
            </div>
            <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"16px",borderLeft:"4px solid #3C3B6E"}}>
              <div style={{fontWeight:700,color:"#3C3B6E",marginBottom:"4px"}}>L-1 Intracompany</div>
              <div style={{fontSize:".8rem",color:"#94a3b8",lineHeight:"1.6"}}>Contact USCIS for requirements, thresholds, and processing times. Requirements vary by nationality.</div>
            </div>
            <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"16px",borderLeft:"4px solid #3C3B6E"}}>
              <div style={{fontWeight:700,color:"#3C3B6E",marginBottom:"4px"}}>EB-1/EB-2 Green Card</div>
              <div style={{fontSize:".8rem",color:"#94a3b8",lineHeight:"1.6"}}>Contact USCIS for requirements, thresholds, and processing times. Requirements vary by nationality.</div>
            </div>
          </div>
        )}
        {tab==="salary" && (
          <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"20px"}}>
            <h2 style={{fontWeight:700,marginBottom:"14px"}}>Salary Guide (USD)</h2>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:".875rem"}}>
              <thead><tr style={{borderBottom:"1px solid rgba(255,255,255,.07)"}}>
                <th style={{padding:"9px 12px",textAlign:"left",color:"#64748b",fontWeight:700,textTransform:"uppercase",fontSize:".72rem"}}>Role</th>
                <th style={{padding:"9px 12px",textAlign:"left",color:"#64748b",fontWeight:700,textTransform:"uppercase",fontSize:".72rem"}}>Avg Annual</th>
              </tr></thead>
              <tbody>
                {[["Software Engineer","$90,000"],["Data Scientist","$85,000"],["Product Manager","$95,000"],["Healthcare Professional","$70,000"],["Financial Analyst","$80,000"]].map(([r,s])=>(
                  <tr key={r} style={{borderBottom:"1px solid rgba(255,255,255,.07)"}}>
                    <td style={{padding:"9px 12px",fontWeight:600}}>{""+r}</td>
                    <td style={{padding:"9px 12px",color:"#3C3B6E",fontWeight:700}}>{""+s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {tab==="steps" && (
          <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            {["Research visa type and eligibility",`Gather documents — degree, employment contract, CV`,`Apply online via USCIS`,
              "Attend biometric appointment if required","Receive permit decision (4-12 weeks)","Register at local authorities on arrival"
            ].map((s,i)=>(
              <div key={i} style={{display:"flex",gap:"10px",alignItems:"flex-start",background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"12px",padding:"13px"}}>
                <div style={{width:"26px",height:"26px",borderRadius:"50%",background:"#3C3B6E",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:".78rem",flexShrink:0}}>{""+( i+1)}</div>
                <div style={{fontSize:".875rem",lineHeight:"1.6"}}>{""+s}</div>
              </div>
            ))}
          </div>
        )}
        {tab==="links" && (
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"10px"}}>
            {[{n:"USCIS",d:"Official immigration authority",u:"https://www.google.com/search?q=USCIS+immigration"},
              {n:"LinkedIn Jobs",d:"Find jobs internationally",u:"https://linkedin.com/jobs"},
              {n:"Numbeo",d:"Cost of living comparison",u:"https://numbeo.com"},
              {n:"Duolingo",d:"Learn local language",u:"https://duolingo.com"},
            ].map(l=>(
              <a key={l.n} href={l.u} target="_blank" rel="noopener"
                style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"12px",padding:"16px",textDecoration:"none",color:"#f1f5f9",display:"block"}}>
                <div style={{fontWeight:700,color:"#3C3B6E",marginBottom:"4px"}}>{""+l.n}</div>
                <div style={{fontSize:".78rem",color:"#64748b"}}>{""+l.d}</div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
