"use client";
import { useState } from "react";

const TAX_CLASSES = [
  { id:1, label:"Class 1 — Single", factor:1.0 },
  { id:2, label:"Class 2 — Single parent", factor:0.95 },
  { id:3, label:"Class 3 — Married (higher earner)", factor:0.85 },
  { id:4, label:"Class 4 — Married (equal)", factor:0.92 },
  { id:5, label:"Class 5 — Married (lower earner)", factor:1.05 },
  { id:6, label:"Class 6 — Second job", factor:1.12 },
];

function calcNet(gross: number, taxClass: number, pkv = false): {
  net: number; incomeTax: number; solidarity: number;
  healthIns: number; pension: number; unemployment: number; nursing: number;
} {
  // 2026 German tax approximations
  const health       = pkv ? 0 : gross * 0.073;
  const pension      = gross * 0.093;
  const unemployment = gross * 0.013;
  const nursing      = gross * 0.018;
  const socialTotal  = health + pension + unemployment + nursing;

  const taxable = Math.max(0, gross - socialTotal);
  const factor  = TAX_CLASSES.find(c => c.id === taxClass)?.factor ?? 1.0;

  let incomeTax = 0;
  if (taxable > 1167) {
    const y = (taxable - 1167) / 10000;
    incomeTax = (979.18 * y + 1400) * y;
  }
  if (taxable > 17005) {
    const z = (taxable - 17005) / 10000;
    incomeTax = (192.59 * z + 2397) * z + 966.53;
  }
  if (taxable > 66760) incomeTax = 0.42 * taxable - 9972.98;
  if (taxable > 277826) incomeTax = 0.45 * taxable - 18307.73;

  incomeTax = Math.max(0, incomeTax * factor);
  const solidarity = incomeTax > 18130 ? incomeTax * 0.055 : 0;

  return {
    net: gross - incomeTax - solidarity - socialTotal,
    incomeTax, solidarity, healthIns: health,
    pension, unemployment, nursing,
  };
}

const fmt = (n: number) => `€${Math.round(n).toLocaleString("de-DE")}`;
const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';
const PD = '"Playfair Display",Georgia,serif';

export default function SalaryPage() {
  const [gross, setGross]       = useState(4000);
  const [taxClass, setTaxClass] = useState(1);
  const [pkv, setPkv]           = useState(false);

  const m = calcNet(gross, taxClass, pkv);
  const y = calcNet(gross * 12, taxClass, pkv);
  const pct = (v: number) => `${((v / gross) * 100).toFixed(1)}%`;

  const row = (label: string, val: number, color = "#374151") => (
    <div key={label} style={{display:"flex",justifyContent:"space-between",
      padding:"10px 0",borderBottom:"1px solid #f0f0f0"}}>
      <span style={{fontSize:14,color:"#6b7280"}}>{label}</span>
      <span style={{fontSize:14,fontWeight:700,color}}>{fmt(val)} <span style={{color:"#9ca3af",fontWeight:400}}>({pct(val)})</span></span>
    </div>
  );

  return (
    <div style={{background:"#f9fafb",minHeight:"100vh"}}>
      <div style={{background:"#0B1D3A",padding:"60px 1.5rem 40px"}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2rem,4vw,3rem)",fontWeight:900,color:"#fff",marginBottom:8}}>
            💶 German Salary Calculator 2026
          </h1>
          <p style={{color:"rgba(255,255,255,.6)",fontSize:16}}>
            Calculate your German net (take-home) salary after all deductions.
          </p>
        </div>
      </div>

      <div style={{maxWidth:900,margin:"0 auto",padding:"3rem 1.5rem",display:"grid",
        gridTemplateColumns:"1fr 1fr",gap:32,alignItems:"start"}}>

        <div style={{background:"#fff",borderRadius:20,padding:28,boxShadow:"0 2px 12px rgba(0,0,0,.07)"}}>
          <h2 style={{fontFamily:PD,fontSize:20,fontWeight:800,color:"#0B1D3A",marginBottom:20}}>Your inputs</h2>

          <label style={{display:"block",fontSize:13,fontWeight:700,color:"#374151",marginBottom:6}}>
            Gross monthly salary (€)
          </label>
          <input type="number" min={1} step={100} value={gross}
            onChange={e => setGross(Math.max(1, Number(e.target.value)))}
            style={{width:"100%",padding:"11px 13px",border:"1.5px solid #e5e7eb",borderRadius:10,
              fontSize:16,fontWeight:700,color:"#0B1D3A",fontFamily:IN,outline:"none",marginBottom:16}} />

          <label style={{display:"block",fontSize:13,fontWeight:700,color:"#374151",marginBottom:6}}>Tax class</label>
          <select value={taxClass} onChange={e => setTaxClass(Number(e.target.value))}
            style={{width:"100%",padding:"11px 13px",border:"1.5px solid #e5e7eb",borderRadius:10,
              fontSize:14,fontFamily:IN,outline:"none",marginBottom:16}}>
            {TAX_CLASSES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>

          <label style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer",marginBottom:8}}>
            <input type="checkbox" checked={pkv} onChange={e => setPkv(e.target.checked)}
              style={{width:16,height:16}} />
            <span style={{fontSize:13,fontWeight:600,color:"#374151"}}>
              Private health insurance (PKV) — I pay my own premium
            </span>
          </label>
          <p style={{fontSize:12,color:"#9ca3af",margin:0}}>
            Uncheck for statutory (GKV) health insurance (employee share ≈7.3%).
          </p>
        </div>

        <div style={{background:"#fff",borderRadius:20,padding:28,boxShadow:"0 2px 12px rgba(0,0,0,.07)"}}>
          <h2 style={{fontFamily:PD,fontSize:20,fontWeight:800,color:"#0B1D3A",marginBottom:4}}>Monthly breakdown</h2>
          <p style={{fontSize:13,color:"#9ca3af",marginBottom:16}}>Based on 2026 German tax tables</p>

          <div style={{background:"linear-gradient(135deg,#0B1D3A,#1e3a5f)",borderRadius:14,
            padding:"18px 20px",marginBottom:20}}>
            <div style={{fontSize:13,color:"rgba(255,255,255,.6)",marginBottom:4}}>Take-home pay</div>
            <div style={{fontSize:36,fontWeight:900,color:"#FCD34D"}}>{fmt(m.net)}<span style={{fontSize:16,color:"rgba(255,255,255,.4)"}}>/month</span></div>
            <div style={{fontSize:13,color:"rgba(255,255,255,.5)",marginTop:4}}>{fmt(y.net)} per year</div>
          </div>

          {row("Income tax",         m.incomeTax,   "#dc2626")}
          {row("Solidarity surcharge",m.solidarity,  "#dc2626")}
          {row("Health insurance",   m.healthIns,   "#d97706")}
          {row("Pension",            m.pension,      "#d97706")}
          {row("Unemployment ins.",  m.unemployment, "#d97706")}
          {row("Nursing care ins.",  m.nursing,      "#d97706")}

          <p style={{fontSize:11,color:"#9ca3af",marginTop:16,lineHeight:1.6}}>
            ⚠ Approximate figures based on 2026 tax tables. Actual deductions depend on your 
            specific circumstances, Kirchensteuer (church tax), childcare allowances, and state of residence.
            Consult a Steuerberater for exact calculations.
          </p>
        </div>
      </div>
    </div>
  );
}
