"use client";
const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';
const PD = '"Playfair Display",Georgia,serif';

const COUNTRIES = [
  { flag:"🇩🇪", name:"Germany",   color:"#DC2626", data:{ processing:"4-12 weeks", salary:"€45,300/yr (Blue Card)", pr:"21-33 months", healthcare:"GKV ~€200-400/mo", language:"B1 required (most visas)", jobs:"Engineering, IT, Medicine, Skilled trades" } },
  { flag:"🇸🇪", name:"Sweden",    color:"#006AA7", data:{ processing:"3-6 months", salary:"No minimum, market rate", pr:"5 years", healthcare:"Low-cost universal", language:"Not required (English ok)", jobs:"IT, Engineering, Healthcare" } },
  { flag:"🇨🇦", name:"Canada",    color:"#FF0000", data:{ processing:"6-12 months", salary:"CAD 56,000+ (Express Entry)", pr:"3+ years", healthcare:"Provincial — free after waiting period", language:"IELTS 6.0+ required", jobs:"IT, Healthcare, Trades, Business" } },
  { flag:"🇦🇺", name:"Australia", color:"#00008B", data:{ processing:"3-12 months", salary:"AUD 70,000+ (skilled)", pr:"4 years", healthcare:"Medicare (free for residents)", language:"IELTS 6.0+ required", jobs:"IT, Engineering, Nursing, Teaching" } },
  { flag:"🇬🇧", name:"UK",        color:"#012169", data:{ processing:"3-8 weeks", salary:"£38,700/yr (Skilled Worker)", pr:"5 years", healthcare:"NHS (free)", language:"B1 required", jobs:"IT, Finance, Healthcare, Engineering" } },
];

const ROWS = [
  { key:"processing", label:"⏱ Processing time" },
  { key:"salary",     label:"💰 Salary requirement" },
  { key:"pr",         label:"🏠 Path to PR" },
  { key:"healthcare", label:"🏥 Healthcare" },
  { key:"language",   label:"🗣️ Language requirement" },
  { key:"jobs",       label:"💼 Top job sectors" },
];

export default function ComparePage() {
  return (
    <div style={{background:"#F9FAFB",minHeight:"100vh"}}>
      <div style={{background:"#0B1D3A",padding:"60px 1.5rem 40px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <h1 style={{fontFamily:PD,fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:900,color:"#fff",marginBottom:10}}>🌍 Country Comparison</h1>
          <p style={{color:"rgba(255,255,255,.6)",fontSize:16}}>Germany · Sweden · Canada · Australia · United Kingdom — side by side</p>
        </div>
      </div>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"2rem 1rem 5rem",overflowX:"auto"}}>
        <table style={{width:"100%",borderCollapse:"collapse",background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,.07)"}}>
          <thead>
            <tr style={{background:"#0B1D3A"}}>
              <th style={{padding:"14px 16px",textAlign:"left",color:"rgba(255,255,255,.5)",fontSize:13,fontFamily:IN}}>Category</th>
              {COUNTRIES.map(c=>(
                <th key={c.name} style={{padding:"14px 16px",textAlign:"center",color:"#fff",fontSize:15,fontFamily:IN}}>
                  <div style={{fontSize:24}}>{c.flag}</div>
                  <div style={{fontWeight:700,marginTop:4,color:c.color}}>{c.name}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row,ri)=>(
              <tr key={row.key} style={{background:ri%2===0?"#fff":"#F9FAFB"}}>
                <td style={{padding:"14px 16px",fontWeight:700,color:"#374151",fontSize:14,fontFamily:IN,borderBottom:"1px solid #E5E7EB"}}>{row.label}</td>
                {COUNTRIES.map(c=>(
                  <td key={c.name} style={{padding:"14px 16px",textAlign:"center",fontSize:13,color:"#6B7280",fontFamily:IN,borderBottom:"1px solid #E5E7EB",lineHeight:1.5}}>
                    {c.data[row.key as keyof typeof c.data]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{fontSize:12,color:"#9CA3AF",marginTop:16,textAlign:"center"}}>⚠️ Requirements change frequently. Always verify with official sources before applying.</p>
      </div>
    </div>
  );
}
