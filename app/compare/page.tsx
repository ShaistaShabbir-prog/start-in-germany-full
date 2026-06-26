"use client";
const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';
const PD = '"Playfair Display",Georgia,serif';

const COUNTRIES = [
  {flag:"🇩🇪",name:"Germany",color:"#DC2626",
   visaTime:"4–8 wks",minSalary:"€45,300",pr:"21 months",healthcare:"Mandatory GKV",language:"B1 German",jobSectors:"Engineering, IT, Health"},
  {flag:"🇸🇪",name:"Sweden",color:"#1D4ED8",
   visaTime:"2–4 wks",minSalary:"No minimum",pr:"5 years",healthcare:"Free public",language:"English OK",jobSectors:"Tech, Health, Finance"},
  {flag:"🇨🇦",name:"Canada",color:"#d97706",
   visaTime:"6–12 wks",minSalary:"No minimum",pr:"1–3 years",healthcare:"Provincial",language:"English/French",jobSectors:"IT, Health, Trades"},
  {flag:"🇦🇺",name:"Australia",color:"#0D9488",
   visaTime:"4–8 wks",minSalary:"AUD 70,000+",pr:"4 years",healthcare:"Medicare",language:"IELTS 6+",jobSectors:"Mining, IT, Health"},
  {flag:"🇬🇧",name:"UK",color:"#7C3AED",
   visaTime:"3–8 wks",minSalary:"£26,200",pr:"5 years",healthcare:"NHS (free)",language:"English",jobSectors:"Finance, Tech, Health"},
];

const ROWS = [
  {key:"visaTime",   label:"Visa processing"},
  {key:"minSalary",  label:"Min. salary req."},
  {key:"pr",         label:"Path to PR"},
  {key:"healthcare", label:"Healthcare"},
  {key:"language",   label:"Language"},
  {key:"jobSectors", label:"Top job sectors"},
];

export default function ComparePage(){
  return(
    <div style={{background:"#f9fafb",minHeight:"100vh"}}>
      <div style={{background:"#0B1D3A",padding:"60px 1.5rem 40px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <h1 style={{fontFamily:PD,fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:900,color:"#fff",marginBottom:8}}>🌍 Country Comparison</h1>
          <p style={{color:"rgba(255,255,255,.6)",fontSize:15}}>Immigration routes side by side — Germany, Sweden, Canada, Australia, UK.</p>
        </div>
      </div>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"3rem 1.5rem",overflowX:"auto"}}>
        <table style={{width:"100%",borderCollapse:"collapse",minWidth:700,background:"#fff",borderRadius:20,overflow:"hidden",boxShadow:"0 4px 24px rgba(0,0,0,.08)"}}>
          <thead>
            <tr>
              <th style={{padding:"16px 18px",textAlign:"left",fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:".06em",color:"#9ca3af",background:"#f9fafb",borderBottom:"1px solid #e5e7eb"}}>Feature</th>
              {COUNTRIES.map(c=>(
                <th key={c.name} style={{padding:"16px 14px",textAlign:"center",background:"#f9fafb",borderBottom:"1px solid #e5e7eb"}}>
                  <div style={{fontSize:"1.6rem"}}>{c.flag}</div>
                  <div style={{fontSize:13,fontWeight:800,color:c.color,marginTop:3}}>{c.name}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row,ri)=>(
              <tr key={row.key} style={{background:ri%2===0?"#fff":"#f9fafb"}}>
                <td style={{padding:"14px 18px",fontSize:13,fontWeight:700,color:"#374151",borderBottom:"1px solid #f0f0f0",whiteSpace:"nowrap"}}>{row.label}</td>
                {COUNTRIES.map(c=>(
                  <td key={c.name} style={{padding:"14px 14px",fontSize:13,color:"#6b7280",textAlign:"center",borderBottom:"1px solid #f0f0f0",lineHeight:1.5}}>
                    {(c as any)[row.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{fontSize:12,color:"#9ca3af",marginTop:14,textAlign:"center"}}>
          ⚠ Figures are approximate and subject to change. Always verify with official embassy sources.
        </p>
      </div>
    </div>
  );
}
