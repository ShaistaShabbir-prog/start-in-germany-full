"use client";
import { useState } from "react";

const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';
const PD = '"Playfair Display",Georgia,serif';

type Step = { q: string; opts: {label:string;value:string}[] };

const STEPS: Step[] = [
  { q:"Are you an EU/EEA citizen?",            opts:[{label:"Yes",value:"eu"},{label:"No",value:"non_eu"}] },
  { q:"What is your main purpose?",            opts:[{label:"Work",value:"work"},{label:"Study",value:"study"},{label:"Family reunification",value:"family"},{label:"Job search",value:"job_search"}] },
  { q:"Do you have a job offer in Germany?",   opts:[{label:"Yes — with contract",value:"yes"},{label:"No — still searching",value:"no"}] },
  { q:"Is your degree officially recognised?", opts:[{label:"Yes",value:"yes"},{label:"No / Not yet",value:"no"}] },
  { q:"What is your expected monthly salary?", opts:[{label:"Under €2,500",value:"low"},{label:"€2,500–€4,500",value:"mid"},{label:"Over €4,500",value:"high"}] },
];

interface Visa { name:string; desc:string; minSalary?:number; link:string; color:string; }

function recommend(answers: string[]): Visa {
  const [nationality,purpose,jobOffer,degreeRecog,salary] = answers;
  if(nationality==="eu") return {name:"No visa needed",desc:"As an EU/EEA citizen you have freedom of movement. Just register (Anmeldung) within 3 months.",link:"https://www.bamf.de",color:"#22c55e"};
  if(purpose==="study") return {name:"Student Visa (§16b AufenthG)",desc:"For enrolled students at German universities. Requires: university admission letter + proof of funds (€11,208/year).",link:"https://www.make-it-in-germany.com/en/visa-residence/types/studying",color:"#3b82f6"};
  if(purpose==="family") return {name:"Family Reunification (§27–36 AufenthG)",desc:"To join a spouse, parent, or child in Germany. Requires: proof of relationship + sponsor's residence permit.",link:"https://www.bamf.de/EN/Themen/MigrationAufenthalt/ZuwandererDrittstaaten/Familie/familie-node.html",color:"#ec4899"};
  if(purpose==="job_search") return {name:"Chancenkarte / Job Seeker Visa",desc:"1-year opportunity card to search for work. Requires: degree + German/English B1 + 1yr experience + €12,000 savings.",link:"https://www.make-it-in-germany.com/en/visa-residence/types/opportunity-card",color:"#f59e0b"};
  if(salary==="high" && degreeRecog==="yes") return {name:"EU Blue Card (§18g AufenthG)",desc:"Premium work visa for qualified professionals. Requires: recognised degree + job offer ≥ €45,300/year (2026).",link:"https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card",color:"#7c3aed"};
  return {name:"Skilled Worker Visa (§18a/18b AufenthG)",desc:"For qualified professionals with or without university degree. Requires: job offer + recognised qualifications.",link:"https://www.make-it-in-germany.com/en/visa-residence/skilled-workers",color:"#0d9488"};
}

export default function VisaCheckerPage(){
  const [step,setStep]=useState(-1);
  const [answers,setAnswers]=useState<string[]>([]);
  const [result,setResult]=useState<Visa|null>(null);

  const start=()=>{setStep(0);setAnswers([]);setResult(null);};
  const answer=(val:string)=>{
    const next=[...answers,val];
    if(step+1>=STEPS.length){setResult(recommend(next));setAnswers(next);setStep(-2);}
    else{setAnswers(next);setStep(step+1);}
  };
  const reset=()=>{setStep(-1);setAnswers([]);setResult(null);};

  return(
    <div style={{background:"#f9fafb",minHeight:"100vh"}}>
      <div style={{background:"#0B1D3A",padding:"60px 1.5rem 40px"}}>
        <div style={{maxWidth:680,margin:"0 auto"}}>
          <h1 style={{fontFamily:PD,fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:900,color:"#fff",marginBottom:8}}>🗺️ Visa Eligibility Checker</h1>
          <p style={{color:"rgba(255,255,255,.6)",fontSize:15}}>Answer 5 questions — we recommend the best visa route for you.</p>
        </div>
      </div>
      <div style={{maxWidth:680,margin:"0 auto",padding:"3rem 1.5rem"}}>
        {step===-1&&!result&&(
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:"4rem",marginBottom:16}}>🌍</div>
            <h2 style={{fontFamily:PD,fontSize:24,fontWeight:800,color:"#0B1D3A",marginBottom:8}}>Find your visa route</h2>
            <p style={{color:"#6b7280",fontSize:15,marginBottom:24}}>Takes 30 seconds. Based on official BAMF / Make it in Germany criteria.</p>
            <button onClick={start} style={{padding:"14px 36px",borderRadius:14,background:"#DC2626",color:"#fff",border:"none",fontWeight:800,fontSize:16,cursor:"pointer",fontFamily:IN}}>Start →</button>
          </div>
        )}
        {step>=0&&step<STEPS.length&&(
          <div style={{background:"#fff",borderRadius:24,padding:36,boxShadow:"0 4px 24px rgba(0,0,0,.08)"}}>
            <div style={{display:"flex",gap:6,marginBottom:24}}>
              {STEPS.map((_,i)=><div key={i} style={{flex:1,height:4,borderRadius:4,background:i<=step?"#DC2626":"#e5e7eb"}}/>)}
            </div>
            <div style={{fontSize:12,fontWeight:700,color:"#DC2626",textTransform:"uppercase",letterSpacing:".08em",marginBottom:6}}>Question {step+1} of {STEPS.length}</div>
            <h2 style={{fontFamily:PD,fontSize:22,fontWeight:800,color:"#0B1D3A",marginBottom:20}}>{STEPS[step].q}</h2>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {STEPS[step].opts.map(o=>(
                <button key={o.value} onClick={()=>answer(o.value)}
                  style={{padding:"14px 18px",borderRadius:12,border:"2px solid #e5e7eb",background:"#fff",textAlign:"left",cursor:"pointer",fontSize:15,fontWeight:600,color:"#374151",fontFamily:IN,transition:"all .15s"}}
                  onMouseEnter={e=>{(e.target as any).style.borderColor="#DC2626";(e.target as any).style.color="#DC2626";}}
                  onMouseLeave={e=>{(e.target as any).style.borderColor="#e5e7eb";(e.target as any).style.color="#374151";}}>
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        )}
        {result&&(
          <div style={{background:"#fff",borderRadius:24,padding:36,boxShadow:"0 4px 24px rgba(0,0,0,.08)"}}>
            <div style={{fontSize:12,fontWeight:700,color:result.color,textTransform:"uppercase",letterSpacing:".08em",marginBottom:6}}>Recommended visa</div>
            <h2 style={{fontFamily:PD,fontSize:22,fontWeight:800,color:"#0B1D3A",marginBottom:10}}>{result.name}</h2>
            <p style={{color:"#6b7280",fontSize:15,lineHeight:1.75,marginBottom:20}}>{result.desc}</p>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <a href={result.link} target="_blank" rel="noopener"
                style={{padding:"11px 22px",borderRadius:12,background:result.color,color:"#fff",textDecoration:"none",fontWeight:700,fontSize:14}}>
                Official guide ↗
              </a>
              <button onClick={reset} style={{padding:"11px 22px",borderRadius:12,border:"1.5px solid #e5e7eb",background:"#fff",cursor:"pointer",fontSize:14,fontWeight:600,color:"#374151",fontFamily:IN}}>
                Start again
              </button>
            </div>
            <p style={{fontSize:12,color:"#9ca3af",marginTop:16}}>⚠ This is a guide only. Visa requirements change. Always verify with the German embassy or BAMF.</p>
          </div>
        )}
      </div>
    </div>
  );
}
