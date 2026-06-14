"use client";
import { useState } from "react";

const TABS = ["Overview","Visa types","Salaries","Steps","Links"];

export default function ChinaPage() {
  const [tab, setTab] = useState("Overview");
  const color = "#DE2910";

  return (
    <div style={{background:"#0a0d14",minHeight:"100vh",color:"#f1f5f9",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
      <div style={{background:`linear-gradient(135deg,#0B1D3A,${color}22)`,borderBottom:"1px solid rgba(255,255,255,.07)",padding:"32px 24px"}}>
        <div style={{maxWidth:"960px",margin:"0 auto"}}>
          <a href="/" style={{fontSize:".82rem",color:"#64748b",textDecoration:"none",display:"block",marginBottom:"16px"}}>← VisaVista</a>
          <div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"8px"}}>
            <span style={{fontSize:"2.5rem"}}>🇨🇳</span>
            <h1 style={{fontSize:"clamp(1.5rem,3.5vw,2.2rem)",fontWeight:900,lineHeight:1.1}}>Work &amp; Live in China</h1>
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
              {[["Currency","CNY"],["Authority","China NISA (National Immigration)"],["Visa options","6+"],["Processing","4–16 weeks"]].map(([l,v])=>(
                <div key={l} style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"12px",padding:"16px",textAlign:"center"}}>
                  <div style={{fontSize:"1.1rem",fontWeight:800,color,marginBottom:"4px"}}>{""+v}</div>
                  <div style={{fontSize:".72rem",color:"#64748b",textTransform:"uppercase"}}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"20px"}}>
              <h2 style={{fontWeight:700,fontSize:"1rem",marginBottom:"10px"}}>Why China?</h2>
              <p style={{color:"#94a3b8",lineHeight:"1.78",fontSize:".875rem"}}>
                China offers excellent opportunities for international professionals and students. Competitive salaries, high quality of life, strong social systems, and a structured immigration pathway make it one of the most popular destinations for skilled immigrants worldwide.
              </p>
            </div>
          </div>
        )}

        {tab==="Visa types" && (
          <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <div style="background:#fff;border:1px solid #E5E7EB;border-radius:14px;padding:16px;border-left:4px solid #DE2910">
          <div style="font-weight:800;color:#DE2910;margin-bottom:5px">Work Permit for Foreigners (Z Visa)</div>
          <div style="font-size:.82rem;color:#4B5563;line-height:1.65">Main work visa for foreign professionals. Employer must sponsor you. Requires: degree, 2+ years experience, and a job offer from a licensed Chinese company. Processing: 15–30 working days.</div>
        </div><div style="background:#fff;border:1px solid #E5E7EB;border-radius:14px;padding:16px;border-left:4px solid #DE2910">
          <div style="font-weight:800;color:#DE2910;margin-bottom:5px">Talent Work Permit (A Category)</div>
          <div style="font-size:.82rem;color:#4B5563;line-height:1.65">For high-end foreign talents — senior executives, specialists. Faster processing, less documentation. Eligible for Permanent Residency after 3 years.</div>
        </div><div style="background:#fff;border:1px solid #E5E7EB;border-radius:14px;padding:16px;border-left:4px solid #DE2910">
          <div style="font-weight:800;color:#DE2910;margin-bottom:5px">Foreign Expert Certificate</div>
          <div style="font-size:.82rem;color:#4B5563;line-height:1.65">For university teachers, researchers, technical experts. Issued by State Administration of Foreign Experts Affairs (SAFEA).</div>
        </div><div style="background:#fff;border:1px solid #E5E7EB;border-radius:14px;padding:16px;border-left:4px solid #DE2910">
          <div style="font-weight:800;color:#DE2910;margin-bottom:5px">Student Visa (X1/X2)</div>
          <div style="font-size:.82rem;color:#4B5563;line-height:1.65">X1 for 6+ months study, X2 for under 6 months. Chinese universities: RMB 10,000–30,000/year. Many offer English-medium programmes and scholarships (HSK required for Chinese-medium programmes).</div>
        </div><div style="background:#fff;border:1px solid #E5E7EB;border-radius:14px;padding:16px;border-left:4px solid #DE2910">
          <div style="font-weight:800;color:#DE2910;margin-bottom:5px">Business Visa (M Visa)</div>
          <div style="font-size:.82rem;color:#4B5563;line-height:1.65">For commercial and trade activities. Up to 10-year validity for some nationalities. Cannot work on M visa.</div>
        </div><div style="background:#fff;border:1px solid #E5E7EB;border-radius:14px;padding:16px;border-left:4px solid #DE2910">
          <div style="font-weight:800;color:#DE2910;margin-bottom:5px">Permanent Residence (Foreigner's Permanent Residence Card)</div>
          <div style="font-size:.82rem;color:#4B5563;line-height:1.65">After 4–5 years of consecutive work in China with a good record. Very selective — under 10,000 granted per year nationwide.</div>
        </div>
          </div>
        )}

        {tab==="Salaries" && (
          <div style={{background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",padding:"20px"}}>
            <h2 style={{fontWeight:700,fontSize:".95rem",marginBottom:"14px"}}>Salary Guide (CNY)</h2>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:".875rem"}}>
              <thead><tr style={{borderBottom:"1px solid rgba(255,255,255,.07)"}}>
                <th style={{padding:"9px 12px",textAlign:"left",color:"#64748b",fontWeight:700,textTransform:"uppercase",fontSize:".72rem"}}>Role</th>
                <th style={{padding:"9px 12px",textAlign:"left",color:"#64748b",fontWeight:700,textTransform:"uppercase",fontSize:".72rem"}}>Avg Annual</th>
              </tr></thead>
              <tbody style={{color:"#f1f5f9"}}><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:9px 12px;font-weight:600">Software Engineer</td><td style="padding:9px 12px;color:#DE2910;font-weight:700">¥280,000</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:9px 12px;font-weight:600">Data Scientist</td><td style="padding:9px 12px;color:#DE2910;font-weight:700">¥320,000</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:9px 12px;font-weight:600">Financial Analyst</td><td style="padding:9px 12px;color:#DE2910;font-weight:700">¥250,000</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:9px 12px;font-weight:600">University Teacher</td><td style="padding:9px 12px;color:#DE2910;font-weight:700">¥180,000</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:9px 12px;font-weight:600">Senior Manager</td><td style="padding:9px 12px;color:#DE2910;font-weight:700">¥500,000</td></tr></tbody>
            </table>
          </div>
        )}

        {tab==="Steps" && (
          <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            <div style="display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:13px">
          <div style="width:28px;height:28px;border-radius:50%;background:#DE2910;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;flex-shrink:0">1</div>
          <div style="font-size:.875rem;color:#374151;line-height:1.65">Receive job offer from licensed Chinese employer — they file for Work Permit Notice (Gongzuoxuke Tongzhi Shu) on your behalf</div>
        </div><div style="display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:13px">
          <div style="width:28px;height:28px;border-radius:50%;background:#DE2910;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;flex-shrink:0">2</div>
          <div style="font-size:.875rem;color:#374151;line-height:1.65">Collect Work Permit Notice (takes 5–15 working days from China Labour Bureau)</div>
        </div><div style="display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:13px">
          <div style="width:28px;height:28px;border-radius:50%;background:#DE2910;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;flex-shrink:0">3</div>
          <div style="font-size:.875rem;color:#374151;line-height:1.65">Apply for Z Visa at Chinese embassy in your country — submit: Work Permit Notice, degree, health certificate, passport photos</div>
        </div><div style="display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:13px">
          <div style="width:28px;height:28px;border-radius:50%;background:#DE2910;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;flex-shrink:0">4</div>
          <div style="font-size:.875rem;color:#374151;line-height:1.65">Enter China and collect Foreigner Work Permit (Jiuye Zheng) within 30 days</div>
        </div><div style="display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:13px">
          <div style="width:28px;height:28px;border-radius:50%;background:#DE2910;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;flex-shrink:0">5</div>
          <div style="font-size:.875rem;color:#374151;line-height:1.65">Apply for Residence Permit at local PSB (Public Security Bureau) Exit-Entry Administration — bring lease, work permit, passport</div>
        </div><div style="display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:13px">
          <div style="width:28px;height:28px;border-radius:50%;background:#DE2910;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;flex-shrink:0">6</div>
          <div style="font-size:.875rem;color:#374151;line-height:1.65">Register place of residence within 24 hours of arrival at local police station</div>
        </div>
          </div>
        )}

        {tab==="Links" && (
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"10px"}}>
            {[
              {n:"China NISA (National Immigration)",d:"Official immigration authority",u:"https://www.nia.gov.cn"},
              {n:"LinkedIn Jobs",d:"Find jobs in China",u:"https://linkedin.com/jobs"},
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
