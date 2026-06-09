"use client";
import Link from "next/link";

const PD = '"Playfair Display",Georgia,serif';
const HERO = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&q=85&auto=format&fit=crop";

export default function FinancesPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{position:"relative",minHeight:"340px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(0.25)"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.8))"}} />
        <div className="wrap" style={{position:"relative",zIndex:1,padding:"72px 1.5rem"}}>
          <span className="eyebrow" style={{color:"#FCD34D"}}>💳 Banking & Money</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"700px",marginBottom:"16px"}}>Set up your German finances before you land</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"580px",lineHeight:1.7}}>You need a German IBAN for rent, salary and Anmeldung. Here are the best accounts, cards and money transfer services for newcomers from Pakistan, India and Bangladesh.</p>
        </div>
      </section>

      {/* Why banking matters */}
      <div style={{background:"#0B1D3A",padding:"2rem 1.5rem"}}>
        <div className="wrap">
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"20px"}}>
            {[
              {i:"🏠",t:"Required for Anmeldung",d:"You need a German IBAN to register your address (Anmeldung) — the first thing you must do on arrival."},
              {i:"💼",t:"Salary payments",d:"German employers only pay to a German IBAN. You need one before your first payday — set it up before you arrive."},
              {i:"🌍",t:"Send money home",d:"Use Wise to transfer money to Pakistan, India or Bangladesh at the real exchange rate — no hidden fees."},
            ].map(c=>(
              <div key={c.t} style={{display:"flex",gap:"14px",alignItems:"flex-start",background:"rgba(255,255,255,.07)",borderRadius:"16px",padding:"20px 22px",border:"1px solid rgba(255,255,255,.1)"}}>
                <span style={{fontSize:"26px",flexShrink:0}}>{c.i}</span>
                <div>
                  <div style={{fontWeight:700,color:"#fff",fontSize:"15px",marginBottom:"5px"}}>{c.t}</div>
                  <div style={{fontSize:"13px",color:"rgba(255,255,255,.5)",lineHeight:1.6}}>{c.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main recommendations */}
      <section className="sec">
        <span className="eyebrow">Our top picks</span>
        <h2 className="h2" style={{marginBottom:"8px"}}>Recommended accounts &amp; cards</h2>
        <div className="divider" style={{marginBottom:"36px"}} />
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"24px"}}>

          {/* Wise */}
          <div className="card" style={{border:"2px solid #BFDBFE",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:"4px",background:"linear-gradient(90deg,#3B82F6,#0D9488)"}} />
            <div style={{display:"flex",gap:"14px",alignItems:"flex-start",marginBottom:"16px"}}>
              <div style={{width:"54px",height:"54px",borderRadius:"16px",background:"#EFF6FF",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px",flexShrink:0}}>🌐</div>
              <div>
                <div style={{fontFamily:PD,fontWeight:800,fontSize:"20px",color:"#0B1D3A",lineHeight:1}}>Wise</div>
                <div style={{fontSize:"12px",color:"#9CA3AF",marginTop:"3px"}}>Multi-currency account</div>
                <span className="badge badge-green" style={{marginTop:"6px",display:"inline-flex"}}>🏆 Best for newcomers</span>
              </div>
            </div>
            <div style={{background:"#EFF6FF",borderRadius:"12px",padding:"12px 14px",marginBottom:"16px"}}>
              <div style={{fontSize:"12px",fontWeight:700,color:"#1D4ED8",textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:"4px"}}>🎁 Referral bonus</div>
              <div style={{fontSize:"13.5px",fontWeight:600,color:"#0B1D3A"}}>Fee-free transfer up to £500 with our link</div>
            </div>
            <p style={{fontSize:"13.5px",color:"#374151",lineHeight:1.7,marginBottom:"16px"}}>Wise gives you a real German IBAN, UK sort code, US routing number and 40+ currency accounts in one app. The real exchange rate means you save significantly on money transfers to Pakistan, India or Bangladesh.</p>
            <ul style={{listStyle:"none",marginBottom:"20px",flex:1}}>
              {["Instant German IBAN — accepted almost everywhere","Real exchange rate — no hidden markup","Hold 40+ currencies in one account","Debit card works worldwide with no foreign transaction fees","App available in multiple languages","Ideal for sending money home to South Asia"].map((f,i)=>(
                <li key={i} className="check-item">
                  <span className="check-icon">✓</span>
                  <span style={{fontSize:"13px",color:"#374151"}}>{f}</span>
                </li>
              ))}
            </ul>
            <div style={{background:"#FFFBEB",borderRadius:"10px",padding:"10px 12px",marginBottom:"16px",fontSize:"12px",color:"#92400E"}}>
              ⚠️ Not a full German bank — some landlords or employers may prefer a traditional bank. Pair with Commerzbank for full coverage.
            </div>
            <a href="https://wise.com/invite/in/shaistak5" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{width:"100%",justifyContent:"center"}}>Open Wise account →</a>
            <p style={{fontSize:"11px",color:"#9CA3AF",textAlign:"center",marginTop:"8px"}}>Referral link — you get a bonus, we earn a small commission</p>
          </div>

          {/* Commerzbank */}
          <div className="card" style={{border:"2px solid #FCD34D",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:"4px",background:"linear-gradient(90deg,#D97706,#DC2626)"}} />
            <div style={{display:"flex",gap:"14px",alignItems:"flex-start",marginBottom:"16px"}}>
              <div style={{width:"54px",height:"54px",borderRadius:"16px",background:"#FFFBEB",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px",flexShrink:0}}>🏦</div>
              <div>
                <div style={{fontFamily:PD,fontWeight:800,fontSize:"20px",color:"#0B1D3A",lineHeight:1}}>Commerzbank</div>
                <div style={{fontSize:"12px",color:"#9CA3AF",marginTop:"3px"}}>Traditional German current account</div>
                <span className="badge badge-gold" style={{marginTop:"6px",display:"inline-flex"}}>50€ starting bonus</span>
              </div>
            </div>
            <div style={{background:"#FFFBEB",borderRadius:"12px",padding:"12px 14px",marginBottom:"16px"}}>
              <div style={{fontSize:"12px",fontWeight:700,color:"#92400E",textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:"4px"}}>🎁 Current promotion</div>
              <div style={{fontSize:"13.5px",fontWeight:600,color:"#0B1D3A"}}>50€ starting credit when you open with our link (conditions apply)</div>
            </div>
            <p style={{fontSize:"13.5px",color:"#374151",lineHeight:1.7,marginBottom:"16px"}}>Commerzbank is one of Germany's largest banks — universally accepted by employers, landlords and authorities. If Wise isn't accepted somewhere, Commerzbank will be. Essential for your Anmeldung and first salary.</p>
            <ul style={{listStyle:"none",marginBottom:"20px",flex:1}}>
              {["German IBAN accepted by 100% of employers & landlords","English-language online banking and mobile app","Visa debit card included","Branch network across Germany — helpful if problems arise","50€ promotional starting credit","Transparent fee structure — check conditions"].map((f,i)=>(
                <li key={i} className="check-item">
                  <span className="check-icon">✓</span>
                  <span style={{fontSize:"13px",color:"#374151"}}>{f}</span>
                </li>
              ))}
            </ul>
            <div style={{background:"#F9FAFB",borderRadius:"10px",padding:"10px 12px",marginBottom:"16px",fontSize:"12px",color:"#6B7280"}}>
              ⚠️ Monthly fee waived with regular incoming payments (salary). Check current conditions on Commerzbank's website.
            </div>
            <a href="https://www.commerzbank.de/girokonto-antrag?path=/pk/de/Abschluss/GD51_Girokonto_DD_MCD_TGK_50Start_KwK&x-werbecode=PNGHRA" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{width:"100%",justifyContent:"center"}}>Open Commerzbank account →</a>
            <p style={{fontSize:"11px",color:"#9CA3AF",textAlign:"center",marginTop:"8px"}}>Referral link — you may get 50€ bonus, we earn a small commission</p>
          </div>

          {/* Advanzia */}
          <div className="card" style={{border:"2px solid #C4B5FD",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:"4px",background:"linear-gradient(90deg,#7C3AED,#DC2626)"}} />
            <div style={{display:"flex",gap:"14px",alignItems:"flex-start",marginBottom:"16px"}}>
              <div style={{width:"54px",height:"54px",borderRadius:"16px",background:"#F5F3FF",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px",flexShrink:0}}>💳</div>
              <div>
                <div style={{fontFamily:PD,fontWeight:800,fontSize:"20px",color:"#0B1D3A",lineHeight:1}}>Advanzia Mastercard Gold</div>
                <div style={{fontSize:"12px",color:"#9CA3AF",marginTop:"3px"}}>Fee-free credit card</div>
                <span className="badge badge-blue" style={{marginTop:"6px",display:"inline-flex"}}>0€ annual fee — forever</span>
              </div>
            </div>
            <div style={{background:"#F5F3FF",borderRadius:"12px",padding:"12px 14px",marginBottom:"16px"}}>
              <div style={{fontSize:"12px",fontWeight:700,color:"#5B21B6",textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:"4px"}}>⭐ Why it's special</div>
              <div style={{fontSize:"13.5px",fontWeight:600,color:"#0B1D3A"}}>No annual fee, no foreign transaction fees + free travel insurance</div>
            </div>
            <p style={{fontSize:"13.5px",color:"#374151",lineHeight:1.7,marginBottom:"16px"}}>The Advanzia Gebührenfrei Mastercard Gold is Germany's most popular fee-free credit card. Ideal for online shopping, hotel bookings, travel and any purchase where a credit card is required.</p>
            <ul style={{listStyle:"none",marginBottom:"20px",flex:1}}>
              {["Zero annual fee — genuinely free forever","No foreign transaction fees when travelling or shopping abroad","Mastercard Gold travel insurance included (flights, hotels, baggage)","Fast online application — decision in minutes","Accepted worldwide wherever Mastercard is accepted","Boosts your Schufa (German credit score)"].map((f,i)=>(
                <li key={i} className="check-item">
                  <span className="check-icon">✓</span>
                  <span style={{fontSize:"13px",color:"#374151"}}>{f}</span>
                </li>
              ))}
            </ul>
            <div style={{background:"#FEF2F2",borderRadius:"10px",padding:"10px 12px",marginBottom:"16px",fontSize:"12px",color:"#B91C1C"}}>
              ⚠️ Always pay your balance IN FULL by the due date. Interest applies to unpaid balances — this can be expensive.
            </div>
            <a href="https://refer.gebuhrenfrei.com/shaistas-45" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{width:"100%",justifyContent:"center"}}>Apply for Advanzia card →</a>
            <p style={{fontSize:"11px",color:"#9CA3AF",textAlign:"center",marginTop:"8px"}}>Referral link — we may earn a small commission at no cost to you</p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <div style={{background:"#fff",padding:"0 1.5rem 5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <span className="eyebrow">At a glance</span>
          <h2 className="h2" style={{marginBottom:"24px"}}>Which account do you need?</h2>
          <div style={{overflowX:"auto",borderRadius:"20px",border:"1px solid #E5E7EB"}}>
            <table style={{width:"100%",fontSize:"14px",borderCollapse:"collapse"}}>
              <thead>
                <tr style={{background:"#F9FAFB"}}>
                  <th style={{padding:"14px 20px",textAlign:"left",fontWeight:700,color:"#374151",borderBottom:"1px solid #E5E7EB"}}>Feature</th>
                  <th style={{padding:"14px 20px",textAlign:"left",fontWeight:700,color:"#1D4ED8",borderBottom:"1px solid #E5E7EB"}}>🌐 Wise</th>
                  <th style={{padding:"14px 20px",textAlign:"left",fontWeight:700,color:"#92400E",borderBottom:"1px solid #E5E7EB"}}>🏦 Commerzbank</th>
                  <th style={{padding:"14px 20px",textAlign:"left",fontWeight:700,color:"#5B21B6",borderBottom:"1px solid #E5E7EB"}}>💳 Advanzia</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Account type","Multi-currency","Current account","Credit card"],
                  ["German IBAN","✅ Yes","✅ Yes","❌ No"],
                  ["Accepted by all employers","⚠️ Usually","✅ Always","—"],
                  ["International transfers","✅ Best rates","⚠️ Fees apply","—"],
                  ["Annual fee","Free / small fees","Free (with salary)","✅ Always free"],
                  ["Card type","Debit card","Debit card","Credit card"],
                  ["English app","✅ Excellent","✅ Good","⚠️ Limited"],
                  ["Best for","Transfers + backup IBAN","Primary German account","Online & travel purchases"],
                  ["Open before arrival","✅ Yes","✅ Yes","✅ Yes"],
                ].map(([feat,...vals])=>(
                  <tr key={feat} style={{}}>
                    <td style={{padding:"12px 20px",fontWeight:600,color:"#374151",borderBottom:"1px solid #F3F4F6"}}>{feat}</td>
                    {vals.map((v,i)=>(
                      <td key={i} style={{padding:"12px 20px",color:"#6B7280",borderBottom:"1px solid #F3F4F6"}}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{marginTop:"14px",fontSize:"12px",color:"#9CA3AF"}}>✅ = Yes &nbsp; ⚠️ = Partial / conditions apply &nbsp; ❌ = No &nbsp; — = Not applicable</p>
        </div>
      </div>

      {/* Blocked account */}
      <section className="sec" style={{paddingTop:"2rem"}}>
        <div style={{background:"#EFF6FF",border:"1px solid #BFDBFE",borderRadius:"24px",padding:"40px 44px"}}>
          <span className="eyebrow">For student visa</span>
          <h2 className="h2" style={{marginBottom:"12px"}}>Blocked account (Sperrkonto) — what you need to know</h2>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"36px"}}>
            <div>
              <p style={{fontSize:"15px",color:"#374151",lineHeight:1.7,marginBottom:"18px"}}>A Sperrkonto (blocked account) is required for the student visa. You deposit €11,208 (€934/month × 12) which is released monthly after arrival.</p>
              {[
                "Deutsche Bank (Bildungskonto) — traditional, widely accepted",
                "Coracle — specifically for international students, fast setup",
                "Expatrio — popular with South Asian students, English support",
                "Fintiba — quick online setup, fully digital",
              ].map((p,i)=>(
                <div key={i} className="check-item">
                  <span className="check-icon">✓</span>
                  <span style={{fontSize:"13.5px",color:"#374151"}}>{p}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{background:"#fff",borderRadius:"16px",padding:"22px 24px",border:"1px solid #BFDBFE"}}>
                <div style={{fontWeight:700,color:"#0B1D3A",marginBottom:"14px"}}>Amount required (2026)</div>
                {[
                  ["Monthly amount","€934 / month"],
                  ["Annual total","€11,208"],
                  ["Opening fee","€50–€100 (varies)"],
                  ["Processing time","3–10 business days"],
                  ["Accepted for","Student visa, Opportunity Card"],
                ].map(([k,v])=>(
                  <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:"1px solid #F3F4F6"}}>
                    <span style={{fontSize:"14px",color:"#6B7280"}}>{k}</span>
                    <span style={{fontSize:"14px",fontWeight:700,color:"#0B1D3A"}}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",background:"#F9FAFB",borderRadius:"20px",border:"1px solid #E5E7EB",padding:"28px 32px"}}>
          <h3 className="h3" style={{marginBottom:"12px"}}>📋 Important notes</h3>
          <ul style={{listStyle:"none"}}>
            {[
              "Promotions and conditions change. Always verify the current offer on the provider's website before applying.",
              "This website is independent. Links marked as referral links may earn us a small commission at no extra cost to you.",
              "We are not a bank or regulated financial advisor. This is general guidance based on our own experience.",
              "Credit cards should be paid in full every month to avoid high interest charges.",
              `See our Affiliate Disclosure page for full transparency on how this site is funded.`,
            ].map((n,i)=>(
              <li key={i} style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"10px"}}>
                <span style={{color:"#DC2626",flexShrink:0,marginTop:"2px"}}>•</span>
                <span style={{fontSize:"13.5px",color:"#6B7280",lineHeight:1.6}}>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
