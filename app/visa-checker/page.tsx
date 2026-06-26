"use client";
import { useState } from "react";

const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';
const PD = '"Playfair Display",Georgia,serif';

type VisaResult = { visa: string; desc: string; link: string; color: string };

function recommend(eu: string, purpose: string, offer: string, degree: string, salary: number): VisaResult {
  if (eu === "eu") return { visa: "🇪🇺 No visa needed", desc: "As an EU/EEA citizen you have the right to work and live in Germany without a visa. Register at the local Bürgeramt within 3 months.", link: "https://www.bamf.de", color: "#059669" };
  if (purpose === "study") return { visa: "🎓 Student Visa (§16b AufenthG)", desc: "For studying at a German university. Requires: admission letter, proof of funds (€11,208/year), language certificate, health insurance.", link: "https://www.bamf.de/EN/Themen/MigrationAufenthalt/ZuwandererDrittstaaten/Bildung/Studium/studium-node.html", color: "#1D4ED8" };
  if (purpose === "family") return { visa: "👨‍👩‍👧 Family Reunification Visa", desc: "Join a spouse/parent who is a German resident. Requires: proof of relationship, sponsor's income proof, health insurance, basic German (A1 for spouse).", link: "https://www.bamf.de/EN/Themen/MigrationAufenthalt/ZuwandererDrittstaaten/Familie/familie-node.html", color: "#7C3AED" };
  if (purpose === "jobsearch") return { visa: "🔍 Chancenkarte / Job Seeker Visa", desc: "Search for work in Germany for up to 1 year. Requires: recognised degree + 2 years experience + German/English B1 + €12,000 in savings.", link: "https://www.bamf.de/EN/Themen/MigrationAufenthalt/ZuwandererDrittstaaten/chancenkarte.html", color: "#D97706" };
  if (offer === "yes" && degree === "yes" && salary >= 45300) return { visa: "💎 EU Blue Card", desc: `With your salary of €${salary.toLocaleString()}/yr and a recognised degree + job offer, you qualify for the EU Blue Card — fastest path to permanent residence (21-33 months).`, link: "https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card", color: "#0D9488" };
  if (offer === "yes" && degree === "yes") return { visa: "👷 Skilled Worker Visa", desc: "You have a job offer and recognised degree. Apply for a Skilled Worker Visa (Fachkräftevisum). Recognition of foreign qualifications may be required.", link: "https://www.make-it-in-germany.com/en/visa-residence/types/skilled-workers-with-vocational-training", color: "#7C3AED" };
  return { visa: "📋 Job Seeker Visa / Chancenkarte", desc: "Without a job offer yet, consider the Job Seeker Visa (6 months) to look for work in Germany, or the Chancenkarte if you meet the points threshold.", link: "https://www.bamf.de", color: "#6B7280" };
}

export default function VisaCheckerPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ eu:"", purpose:"", offer:"", degree:"", salary: 45000 });
  const [result, setResult] = useState<VisaResult | null>(null);

  const steps = [
    { q: "Are you an EU/EEA citizen?", key: "eu", opts: [["yes","✅ Yes — EU/EEA citizen"],["no","❌ No — non-EU"]] },
    { q: "What is your main purpose in Germany?", key: "purpose", opts: [["work","💼 Work"],["study","🎓 Study"],["family","👨‍👩‍👧 Join family"],["jobsearch","🔍 Job search"]] },
    { q: "Do you have a German job offer?", key: "offer", opts: [["yes","✅ Yes, I have an offer"],["no","❌ Not yet"]] },
    { q: "Do you have a university degree?", key: "degree", opts: [["yes","✅ Yes"],["no","❌ No"]] },
  ];

  const current = steps[step];
  const isDone = result !== null;

  const choose = (val: string) => {
    const newAns = { ...answers, [current.key]: val };
    setAnswers(newAns);
    if (step < steps.length - 1) {
      setStep(s => s + 1);
    } else {
      setResult(recommend(newAns.eu, newAns.purpose, newAns.offer, newAns.degree, newAns.salary));
    }
  };

  const reset = () => { setStep(0); setAnswers({ eu:"",purpose:"",offer:"",degree:"",salary:45000 }); setResult(null); };

  return (
    <div style={{ background:"#F9FAFB", minHeight:"100vh" }}>
      <div style={{ background:"#0B1D3A", padding:"60px 1.5rem 40px" }}>
        <div style={{ maxWidth:700, margin:"0 auto" }}>
          <h1 style={{ fontFamily:PD, fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, color:"#fff", marginBottom:10 }}>🧭 Visa Eligibility Checker</h1>
          <p style={{ color:"rgba(255,255,255,.6)", fontSize:16 }}>Answer 4 questions → get your recommended German visa type</p>
        </div>
      </div>
      <div style={{ maxWidth:700, margin:"0 auto", padding:"3rem 1.5rem" }}>
        {!isDone ? (
          <div style={{ background:"#fff", borderRadius:20, padding:32, boxShadow:"0 4px 24px rgba(0,0,0,.08)" }}>
            <div style={{ display:"flex", gap:6, marginBottom:24 }}>
              {steps.map((_,i) => <div key={i} style={{ flex:1, height:4, borderRadius:4, background:i<=step?"#DC2626":"#E5E7EB", transition:"background .3s" }} />)}
            </div>
            <h2 style={{ fontFamily:PD, fontSize:"1.4rem", fontWeight:800, color:"#0B1D3A", marginBottom:20 }}>Question {step+1}/{steps.length}: {current.q}</h2>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {current.opts.map(([val,label]) => (
                <button key={val} onClick={() => choose(val)}
                  style={{ padding:"14px 20px", borderRadius:12, border:"1.5px solid #E5E7EB", background:"#fff", textAlign:"left", fontSize:15, cursor:"pointer", fontFamily:IN, fontWeight:600, color:"#0B1D3A", transition:"all .15s" }}
                  onMouseOver={e => { (e.target as HTMLElement).style.borderColor="#DC2626"; (e.target as HTMLElement).style.background="#FEF2F2"; }}
                  onMouseOut={e => { (e.target as HTMLElement).style.borderColor="#E5E7EB"; (e.target as HTMLElement).style.background="#fff"; }}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ background:"#fff", borderRadius:20, padding:32, boxShadow:"0 4px 24px rgba(0,0,0,.08)" }}>
            <div style={{ fontSize:36, marginBottom:12 }}>🎉</div>
            <h2 style={{ fontFamily:PD, fontSize:"1.6rem", fontWeight:900, color:result.color, marginBottom:8 }}>{result.visa}</h2>
            <p style={{ color:"#374151", lineHeight:1.75, marginBottom:20 }}>{result.desc}</p>
            <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
              <a href={result.link} target="_blank" rel="noopener" style={{ padding:"11px 20px", borderRadius:12, background:"#DC2626", color:"#fff", textDecoration:"none", fontWeight:700, fontSize:14 }}>📖 Official guide →</a>
              <button onClick={reset} style={{ padding:"11px 20px", borderRadius:12, border:"1.5px solid #E5E7EB", background:"#fff", cursor:"pointer", fontWeight:700, fontSize:14, color:"#374151", fontFamily:IN }}>↩ Start over</button>
            </div>
            <p style={{ fontSize:12, color:"#9CA3AF", marginTop:16 }}>⚠️ This is indicative guidance only. Always verify with BAMF or an immigration lawyer.</p>
          </div>
        )}
      </div>
    </div>
  );
}
