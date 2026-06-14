"use client";
import { useState, useEffect } from "react";

const PS = "'Inter',system-ui,sans-serif";
const PD = "'Playfair Display',Georgia,serif";

const PARTNERS = [
  {
    id: "commerzbank",
    emoji: "🏦",
    name: "Commerzbank",
    category: "Bank Account",
    badge: "€50 Bonus",
    badgeColor: "#16a34a",
    headline: "We use Commerzbank — and we think you should too",
    quote: "Opening a German bank account was one of the most stressful parts of arriving. After trying multiple options, our team settled on Commerzbank. Branches everywhere, real phone support, free account. We arranged a €50 bonus for our users — use code PNGHRA.",
    checks: [
      "Free account — no fees when you deposit salary",
      "Physical branches in every German city",
      "€50 starting credit with our promo code",
      "Accepted for all official German processes",
    ],
    safety: "Germany's 2nd largest bank. BaFin regulated. Deposits protected up to €100,000 by Einlagensicherungsfonds.",
    code: "PNGHRA",
    cta: "Open account + get €50 →",
    url: "https://www.commerzbank.de/girokonto-antrag?path=/pk/de/Abschluss/GD51_Girokonto_DD_MCD_TGK_50Start_KwK&x-werbecode=PNGHRA",
    note: "10 min online · Meldebescheinigung required · Schufa check",
    accent: "#FFD700", bg: "#0a1628", border: "rgba(255,215,0,.2)",
  },
  {
    id: "advanzia",
    emoji: "💳",
    name: "Advanzia Mastercard Gold",
    category: "Credit Card",
    badge: "Always Free",
    badgeColor: "#dc2626",
    headline: "The only credit card we recommend for newcomers in Germany",
    quote: "Most German credit cards have hidden fees. Advanzia is genuinely, permanently free — no annual fee, ever. We have used it for years. The free worldwide travel insurance alone is worth more than most paid cards. It also builds your Schufa score from day one.",
    checks: [
      "Zero annual fee — no hidden costs, ever",
      "Free worldwide travel insurance included",
      "Builds your German Schufa credit score",
      "Instant online application",
    ],
    safety: "Advanzia Bank licensed by Luxembourg CSSF. Cards under Mastercard's global fraud protection. Secure online application.",
    code: null,
    cta: "Get your free credit card →",
    url: "https://refer.gebuhrenfrei.com/shaistas-45",
    note: "No annual fee · No catch · Secure Mastercard application",
    accent: "#f87171", bg: "#1a0505", border: "rgba(248,113,113,.2)",
  },
  {
    id: "wise",
    emoji: "💸",
    name: "Wise",
    category: "Money Transfer",
    badge: "Save up to 8×",
    badgeColor: "#0d9488",
    headline: "How we send money home — Wise saves us hundreds per year",
    quote: "We sent money home through our bank at first and lost €30–40 in hidden fees every time. A colleague showed us Wise. Same amount sent, 5–8× less in fees, arrived the same day. We have recommended it to every immigrant we know.",
    checks: [
      "Real mid-market exchange rate — no markup",
      "Pakistan · India · Bangladesh · 80+ countries",
      "Fee shown upfront before you confirm",
      "Used by 16 million immigrants worldwide",
    ],
    safety: "Regulated by FCA (UK) + BaFin (Germany) + 50+ countries. Money held in tier-1 banks, segregated from company funds.",
    code: null,
    cta: "Send money cheaper →",
    url: "https://wise.com/invite/shaistashabbir",
    note: "Real rate · No hidden fees · First transfer free",
    accent: "#34d399", bg: "#00192b", border: "rgba(52,211,153,.2)",
  },
];

interface RecommendationWidgetProps {
  variant?: "sidebar" | "inline" | "full";
}

export default function RecommendationWidget({ variant = "inline" }: RecommendationWidgetProps) {
  const [idx, setIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i+1) % PARTNERS.length), 15000);
    return () => clearInterval(timer);
  }, []);

  const p = PARTNERS[idx];

  const copyCode = async () => {
    if (!p.code) return;
    await navigator.clipboard?.writeText(p.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  if (variant === "sidebar") {
    // Compact version for sidebars
    return (
      <div style={{fontFamily:PS}}>
        <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"}}>
          <div style={{width:"28px",height:"28px",borderRadius:"50%",background:"linear-gradient(135deg,#FFCC02,#f59e0b)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,color:"#000",fontSize:".72rem",flexShrink:0}}>S</div>
          <div style={{fontSize:".72rem",fontWeight:700,color:"#f1f5f9"}}>Our picks for newcomers</div>
          <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:"4px",background:"rgba(34,197,94,.08)",border:"1px solid rgba(34,197,94,.2)",borderRadius:"20px",padding:"2px 8px"}}>
            <span style={{width:"5px",height:"5px",borderRadius:"50%",background:"#22c55e",display:"inline-block"}}/>
            <span style={{fontSize:".6rem",color:"#86efac",fontWeight:700}}>Verified</span>
          </div>
        </div>
        {PARTNERS.map((partner, i) => (
          <a key={partner.id} href={partner.url} target="_blank" rel="noopener sponsored"
            style={{display:"flex",alignItems:"center",gap:"10px",padding:"11px 13px",background:i===idx?"rgba(255,255,255,.06)":"rgba(255,255,255,.02)",border:`1px solid ${i===idx?partner.border:"rgba(255,255,255,.05)"}`,borderRadius:"12px",marginBottom:"8px",textDecoration:"none",transition:"all .2s",cursor:"pointer"}}
            onMouseOver={e=>{e.currentTarget.style.background="rgba(255,255,255,.07)";}}
            onMouseOut={e=>{e.currentTarget.style.background=i===idx?"rgba(255,255,255,.06)":"rgba(255,255,255,.02)";}}
          >
            <span style={{fontSize:"1.3rem",flexShrink:0}}>{partner.emoji}</span>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:".78rem",fontWeight:700,color:"#f1f5f9",marginBottom:"1px"}}>{partner.name}</div>
              <div style={{fontSize:".68rem",color:"rgba(255,255,255,.4)",lineHeight:1.3}}>{partner.category}</div>
            </div>
            <span style={{background:partner.badgeColor,color:"#fff",padding:"2px 7px",borderRadius:"10px",fontSize:".6rem",fontWeight:800,flexShrink:0}}>{partner.badge}</span>
          </a>
        ))}
      </div>
    );
  }

  // Full / inline version
  return (
    <div style={{fontFamily:PS,background:p.bg,border:`1px solid ${p.border}`,borderRadius:"18px",overflow:"hidden",transition:"all .3s"}}>
      {/* Header */}
      <div style={{display:"flex",alignItems:"center",gap:"8px",padding:"10px 16px",background:"rgba(255,255,255,.03)",borderBottom:"1px solid rgba(255,255,255,.05)"}}>
        <div style={{width:"26px",height:"26px",borderRadius:"50%",background:"linear-gradient(135deg,#FFCC02,#f59e0b)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,color:"#000",fontSize:".72rem",flexShrink:0}}>S</div>
        <span style={{fontSize:".68rem",color:"rgba(255,255,255,.4)"}}>Personal recommendation from our Germany guide team</span>
        <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:"4px"}}>
          <span style={{width:"5px",height:"5px",borderRadius:"50%",background:"#22c55e",display:"inline-block",flexShrink:0}}/>
          <span style={{fontSize:".6rem",color:"#86efac",fontWeight:700,whiteSpace:"nowrap" as const}}>Verified</span>
        </div>
      </div>

      <div style={{padding:"16px 18px"}}>
        {/* Category + title */}
        <div style={{fontSize:".62rem",fontWeight:800,textTransform:"uppercase" as const,letterSpacing:".1em",color:"rgba(255,255,255,.35)",marginBottom:"4px"}}>{p.emoji} {p.category}</div>
        <div style={{fontFamily:PD,fontSize:".95rem",fontWeight:800,color:"#fff",lineHeight:1.3,marginBottom:"10px"}}>{p.headline}</div>

        {/* Personal quote */}
        <div style={{fontSize:".78rem",color:"rgba(255,255,255,.55)",lineHeight:1.7,fontStyle:"italic",borderLeft:`2px solid ${p.accent}40`,paddingLeft:"10px",marginBottom:"12px"}}>
          "{p.quote}"
        </div>

        {/* Checklist */}
        <div style={{display:"flex",flexDirection:"column" as const,gap:"5px",marginBottom:"12px"}}>
          {p.checks.map(c => (
            <div key={c} style={{display:"flex",alignItems:"flex-start",gap:"7px",fontSize:".78rem",color:"rgba(255,255,255,.75)"}}>
              <span style={{color:p.accent,fontSize:".7rem",flexShrink:0,marginTop:"2px"}}>✓</span>
              <span>{c}</span>
            </div>
          ))}
        </div>

        {/* Safety */}
        <div style={{display:"flex",alignItems:"flex-start",gap:"7px",background:"rgba(34,197,94,.05)",border:"1px solid rgba(34,197,94,.12)",borderRadius:"8px",padding:"8px 10px",marginBottom:"12px"}}>
          <span style={{fontSize:".75rem",flexShrink:0,marginTop:"1px"}}>🔒</span>
          <span style={{fontSize:".68rem",color:"rgba(255,255,255,.4)",lineHeight:1.5}}>{p.safety}</span>
        </div>

        {/* Code + CTA */}
        {p.code && (
          <div style={{marginBottom:"10px"}}>
            <div style={{fontSize:".6rem",color:"rgba(255,255,255,.3)",textTransform:"uppercase" as const,letterSpacing:".07em",marginBottom:"4px"}}>Promo code — click to copy</div>
            <div onClick={copyCode} style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(255,204,2,.1)",border:"1px solid rgba(255,204,2,.3)",borderRadius:"8px",padding:"7px 14px",cursor:"pointer",transition:"all .15s"}}
              onMouseOver={e=>(e.currentTarget.style.background="rgba(255,204,2,.18)")}
              onMouseOut={e=>(e.currentTarget.style.background="rgba(255,204,2,.1)")}>
              <span style={{fontSize:".9rem",fontWeight:900,color:"#FFCC02",letterSpacing:".1em"}}>{p.code}</span>
              <span style={{fontSize:".68rem",color:"rgba(255,255,255,.35)"}}>{copied ? "✓ Copied!" : "📋"}</span>
            </div>
          </div>
        )}

        <a href={p.url} target="_blank" rel="noopener sponsored"
          style={{display:"block",textAlign:"center" as const,padding:"11px 18px",borderRadius:"11px",background:p.accent,color:p.id==="advanzia"?"#fff":"#0B1D3A",fontWeight:800,fontSize:".82rem",textDecoration:"none",boxShadow:`0 3px 16px ${p.accent}30`,transition:"all .2s",marginBottom:"6px"}}
          onMouseOver={e=>(e.currentTarget.style.transform="scale(1.03)")}
          onMouseOut={e=>(e.currentTarget.style.transform="scale(1)")}>
          {p.cta}
        </a>
        <div style={{fontSize:".62rem",color:"rgba(255,255,255,.25)",textAlign:"center" as const,lineHeight:1.5}}>
          {p.note}<br/>
          <a href="/affiliate-disclosure" style={{color:"rgba(255,204,2,.4)",textDecoration:"none",fontSize:".58rem"}}>
            Partner/affiliate · Disclosure ↗
          </a>
        </div>
      </div>

      {/* Dots nav */}
      <div style={{display:"flex",justifyContent:"center",gap:"6px",padding:"8px 16px 12px",borderTop:"1px solid rgba(255,255,255,.05)"}}>
        {PARTNERS.map((_,i) => (
          <button key={i} onClick={() => setIdx(i)}
            style={{width:i===idx?"18px":"7px",height:"7px",borderRadius:"4px",border:"none",cursor:"pointer",background:i===idx?p.accent:"rgba(255,255,255,.2)",padding:0,transition:"all .2s"}}/>
        ))}
      </div>
    </div>
  );
}
