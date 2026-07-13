"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GermanyPage() {
  const router = useRouter();
  useEffect(() => { router.replace("/visa"); }, []);
  return (
    <div style={{background:"#0a0d14",minHeight:"100vh",color:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
      <div style={{textAlign:"center"}}>
        <div style={{fontSize:"3rem",marginBottom:"16px"}}>🇩🇪</div>
        <h1 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:"8px"}}>Germany Immigration</h1>
        <p style={{color:"#64748b"}}>Redirecting to visa guide...</p>
      </div>
    

{/* ── VISIT VISA SECTION ── */}
<section style={{background:"#FFFBF0",borderTop:"3px solid #1a1a1a",padding:"4rem 0"}}>
  <div style={{...sec}}>
    <span style={{...eye,color:"#1a1a1a"}}>🇩🇪 Visit / Tourist Visa</span>
    <h2 style={{fontFamily:PD,fontSize:"clamp(1.6rem,3vw,2.3rem)",fontWeight:800,color:"#0B1D3A",lineHeight:1.2,marginBottom:"8px"}}>Germany / Schengen Tourist Visa (Type C)</h2>
    <div style={{...bar,background:"#1a1a1a"}}/>
    <p style={{fontSize:"15px",color:"#6B7280",marginBottom:"2rem",maxWidth:"640px"}}>Visit Germany and 26 Schengen countries — up to 90 days</p>
    <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"2.5rem"}}>
      {[{label:"Duration",value:"90 days in any 180-day period",icon:"📅"},{label:"Visa Fee",value:"€90 adults / €45 children (6–12)",icon:"💳"},{label:"Processing",value:"15 calendar days",icon:"⏱️"}].map(function(s){return <div key={s.label} style={{background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:"12px",padding:"1rem 1.5rem",minWidth:"160px",flex:"1"}}><div style={{fontSize:"1.4rem",marginBottom:"4px"}}>{s.icon}</div><div style={{fontSize:"11px",color:"#9CA3AF",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"2px"}}>{s.label}</div><div style={{fontSize:"15px",fontWeight:700,color:"#0B1D3A"}}>{s.value}</div></div>;})}
    </div>
    <div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:"2rem",alignItems:"start"}}>
      <div style={{background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:"16px",padding:"1.5rem"}}>
        <h3 style={{fontFamily:PD,fontWeight:700,fontSize:"1.1rem",color:"#0B1D3A",marginBottom:"1rem"}}>📋 Required Documents (from Pakistan)</h3>
        <ul style={{padding:0,margin:0}}>
              <CI key="0">Schengen visa application form</CI>
              <CI key="1">Valid Pakistani passport (3+ months beyond travel dates)</CI>
              <CI key="2">Two recent biometric photos</CI>
              <CI key="3">Travel insurance (€30,000 minimum, all Schengen countries)</CI>
              <CI key="4">Return flight itinerary</CI>
              <CI key="5">Hotel / accommodation bookings</CI>
              <CI key="6">Bank statements (last 3 months)</CI>
              <CI key="7">Employment letter + No Objection Certificate (NOC)</CI>
              <CI key="8">Income tax returns (last 3 years)</CI>
              <CI key="9">Invitation letter if visiting family in Germany</CI>
        </ul>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        <div style={{background:"#FEF3C7",border:"1.5px solid #FCD34D",borderRadius:"16px",padding:"1.5rem"}}>
          <div style={{fontWeight:700,fontSize:"13px",color:"#92400E",marginBottom:"8px"}}>💡 Important Tip for Pakistanis</div>
          <p style={{fontSize:"13px",color:"#78350F",lineHeight:1.6,margin:0}}>Apply at German Embassy Islamabad. Show €500+ per day of travel in bank account. Travel insurance with minimum €30,000 coverage is mandatory. Appointment required.</p>
        </div>
        <a href="https://pakistan.diplo.de/pk-en/service/visa" target="_blank" rel="noopener noreferrer"
          style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"14px 24px",
            borderRadius:"12px",background:"#1a1a1a",color:"#fff",fontWeight:700,fontSize:"15px",
            textDecoration:"none",fontFamily:IN}}>🌐 Official 🇩🇪 Visa Application →</a>
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
