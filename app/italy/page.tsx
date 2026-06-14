"use client";
import { useState } from "react";

const TABS = ["Overview","Visa types","Salaries","Steps","Links"];

export default function ItalyPage() {
  const [tab, setTab] = useState("Overview");
  const color = "#009246";

  return (
    <div style={{background:"#0a0d14",minHeight:"100vh",color:"#f1f5f9",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
      <div style={{background:`linear-gradient(135deg,#0B1D3A,${color}22)`,borderBottom:"1px solid rgba(255,255,255,.07)",padding:"32px 24px"}}>
        <div style={{maxWidth:"960px",margin:"0 auto"}}>
          <a href="/" style={{fontSize:".82rem",color:"#64748b",textDecoration:"none",display:"block",marginBottom:"16px"}}>← VisaVista</a>
          <div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"8px"}}>
            <span style={{fontSize:"2.5rem"}}>🇮🇹</span>
            <h1 style={{fontSize:"clamp(1.5rem,3.5vw,2.2rem)",fontWeight:900,lineHeight:1.1}}>Work &amp; Live in Italy</h1>
          </div>
          <p style={{color:"#94a3b8",fontSize:".95rem"}}>Visa types · Salary guide · Step-by-step process · Official links</p>
        </div>
      </div>

      <div style={{borderBottom:"1px solid rgba(255,255,255,.07)",background:"#111520"}}>
        <div style={{maxWidth:"960px",margin:"0 auto",display:"flex",overflowX:"auto",scrollbarWidth:"none"}}>
          {TABS.map(t=>(
            <button key={t} onClick={()=>setTab(t)}
              style={{padding:"12px 20px",border:"none",background:"transparent",
                color:tab===t?color:"#64748b",fontWeight:700,fontSize:".85rem",
                borderBottom:`2px solid ${tab===t?color:"transparent"}`,cursor:"pointer",whiteSpace:"nowrap"}}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:"960px",margin:"0 auto",padding:"24px 16px"}}>

        {tab==="Overview" && (
          <div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"12px",marginBottom:"20px"}}>
              {[["Currency","EUR"],["Authority","Ministero dell'Interno"],["Visa options","5+"],["Processing","4–16 weeks"]].map(([l,v])=>(
                <div key={l} style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"12px",padding:"16px",textAlign:"center"}}>
                  <div style={{fontSize:"1.1rem",fontWeight:800,color,marginBottom:"4px"}}>{""+v}</div>
                  <div style={{fontSize:".72rem",color:"#64748b",textTransform:"uppercase"}}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"20px"}}>
              <h2 style={{fontWeight:700,fontSize:"1rem",marginBottom:"10px"}}>Why Italy?</h2>
              <p style={{color:"#94a3b8",lineHeight:"1.78",fontSize:".875rem"}}>
                Italy offers excellent opportunities for international professionals and students. Competitive salaries, high quality of life, strong social systems, and a structured immigration pathway make it one of the most popular destinations for skilled immigrants worldwide.
              </p>
            </div>
          </div>
        )}

        {tab==="Visa types" && (
          <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <div style="background:#fff;border:1px solid #E5E7EB;border-radius:14px;padding:16px;border-left:4px solid #009246">
          <div style="font-weight:800;color:#009246;margin-bottom:5px">Decreto Flussi (Work Quota)</div>
          <div style="font-size:.82rem;color:#4B5563;line-height:1.65">Annual quota system for non-EU workers. Very competitive — apply as soon as quotas open (usually January). Check portaleimmigrazione.it for opening dates.</div>
        </div><div style="background:#fff;border:1px solid #E5E7EB;border-radius:14px;padding:16px;border-left:4px solid #009246">
          <div style="font-weight:800;color:#009246;margin-bottom:5px">EU Blue Card Italy</div>
          <div style="font-size:.82rem;color:#4B5563;line-height:1.65">For highly qualified workers. Salary threshold €30,000+/year. Faster processing than Decreto Flussi. Valid up to 2 years, renewable.</div>
        </div><div style="background:#fff;border:1px solid #E5E7EB;border-radius:14px;padding:16px;border-left:4px solid #009246">
          <div style="font-weight:800;color:#009246;margin-bottom:5px">Self-Employment Visa (Lavoro Autonomo)</div>
          <div style="font-size:.82rem;color:#4B5563;line-height:1.65">For freelancers, entrepreneurs, and artists. Requires proof of income, professional qualifications, and a business plan.</div>
        </div><div style="background:#fff;border:1px solid #E5E7EB;border-radius:14px;padding:16px;border-left:4px solid #009246">
          <div style="font-weight:800;color:#009246;margin-bottom:5px">Study Visa</div>
          <div style="font-size:.82rem;color:#4B5563;line-height:1.65">Public university tuition: €150–2,000/year. One of Europe's cheapest university systems. Apply via Italian embassy in your country.</div>
        </div><div style="background:#fff;border:1px solid #E5E7EB;border-radius:14px;padding:16px;border-left:4px solid #009246">
          <div style="font-weight:800;color:#009246;margin-bottom:5px">Digital Nomad Visa (2024)</div>
          <div style="font-size:.82rem;color:#4B5563;line-height:1.65">For remote workers earning €28,000+/year. Must work for a non-Italian employer. Valid 1 year, renewable.</div>
        </div>
          </div>
        )}

        {tab==="Salaries" && (
          <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"20px"}}>
            <h2 style={{fontWeight:700,fontSize:".95rem",marginBottom:"14px"}}>Salary Guide (EUR)</h2>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:".875rem"}}>
              <thead><tr style={{borderBottom:"1px solid rgba(255,255,255,.07)"}}>
                <th style={{padding:"9px 12px",textAlign:"left",color:"#64748b",fontWeight:700,textTransform:"uppercase",fontSize:".72rem"}}>Role</th>
                <th style={{padding:"9px 12px",textAlign:"left",color:"#64748b",fontWeight:700,textTransform:"uppercase",fontSize:".72rem"}}>Avg Annual</th>
              </tr></thead>
              <tbody style={{color:"#f1f5f9"}}><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:9px 12px;font-weight:600">Software Engineer</td><td style="padding:9px 12px;color:#009246;font-weight:700">€62,000</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:9px 12px;font-weight:600">Data Scientist</td><td style="padding:9px 12px;color:#009246;font-weight:700">€58,000</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:9px 12px;font-weight:600">Healthcare Professional</td><td style="padding:9px 12px;color:#009246;font-weight:700">€45,000</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:9px 12px;font-weight:600">Financial Analyst</td><td style="padding:9px 12px;color:#009246;font-weight:700">€55,000</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:9px 12px;font-weight:600">Teacher</td><td style="padding:9px 12px;color:#009246;font-weight:700">€32,000</td></tr></tbody>
            </table>
          </div>
        )}

        {tab==="Steps" && (
          <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            <div style="display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:13px">
          <div style="width:28px;height:28px;border-radius:50%;background:#009246;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;flex-shrink:0">1</div>
          <div style="font-size:.875rem;color:#374151;line-height:1.65">Check Decreto Flussi opening dates at portaleimmigrazione.it — apply the moment quotas open, they fill within minutes</div>
        </div><div style="display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:13px">
          <div style="width:28px;height:28px;border-radius:50%;background:#009246;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;flex-shrink:0">2</div>
          <div style="font-size:.875rem;color:#374151;line-height:1.65">Gather documents: degree, employment contract, criminal record certificate, health certificate, proof of accommodation</div>
        </div><div style="display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:13px">
          <div style="width:28px;height:28px;border-radius:50%;background:#009246;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;flex-shrink:0">3</div>
          <div style="font-size:.875rem;color:#374151;line-height:1.65">Apply at Italian embassy or consulate in your country — submit full application package</div>
        </div><div style="display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:13px">
          <div style="width:28px;height:28px;border-radius:50%;background:#009246;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;flex-shrink:0">4</div>
          <div style="font-size:.875rem;color:#374151;line-height:1.65">Receive entry visa (visto D) — valid for travel to Italy</div>
        </div><div style="display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:13px">
          <div style="width:28px;height:28px;border-radius:50%;background:#009246;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;flex-shrink:0">5</div>
          <div style="font-size:.875rem;color:#374151;line-height:1.65">Within 8 days of arrival in Italy: apply for Permesso di Soggiorno (residence permit) at the local Questura</div>
        </div><div style="display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:13px">
          <div style="width:28px;height:28px;border-radius:50%;background:#009246;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;flex-shrink:0">6</div>
          <div style="font-size:.875rem;color:#374151;line-height:1.65">Register at the Comune (municipality) for official residence — Residenza anagrafica</div>
        </div>
          </div>
        )}

        {tab==="Links" && (
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"10px"}}>
            {[
              {n:"Ministero dell'Interno",d:"Official immigration authority",u:"https://www.interno.gov.it/it/temi/immigrazione-e-asilo"},
              {n:"LinkedIn Jobs",d:"Find jobs in Italy",u:"https://linkedin.com/jobs"},
              {n:"Numbeo",d:"Cost of living comparison",u:"https://numbeo.com"},
              {n:"Duolingo",d:"Learn the local language",u:"https://duolingo.com"},
            ].map(l=>(
              <a key={l.n} href={l.u} target="_blank" rel="noopener"
                style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"12px",padding:"16px",textDecoration:"none",color:"#f1f5f9",display:"block",transition:"all .15s"}}>
                <div style={{fontWeight:700,color,marginBottom:"4px"}}>{""+l.n}</div>
                <div style={{fontSize:".78rem",color:"#64748b"}}>{""+l.d}</div>
              </a>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
