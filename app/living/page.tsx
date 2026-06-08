import Link from "next/link";
const PD = '"Playfair Display",Georgia,serif';
const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';
const HERO = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1400&q=80&auto=format&fit=crop";

const s = {
  wrap:{maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem"} as React.CSSProperties,
  sec: {maxWidth:"1200px",margin:"0 auto",padding:"5rem 1.5rem"} as React.CSSProperties,
  h2:  {fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A"} as React.CSSProperties,
  eye: {display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase" as const,letterSpacing:"0.15em",color:"#DC2626",marginBottom:"10px"},
  bar: {width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 24px"} as React.CSSProperties,
  btnP:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"none",textDecoration:"none",background:"#DC2626",color:"#fff",boxShadow:"0 4px 18px rgba(220,38,38,.35)"} as React.CSSProperties,
  btnG:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"1.5px solid rgba(255,255,255,.3)",textDecoration:"none",background:"rgba(255,255,255,.12)",color:"#fff"} as React.CSSProperties,
  tick:{width:"20px",height:"20px",borderRadius:"50%",background:"#ECFDF5",border:"1.5px solid #6EE7B7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"10px",color:"#059669",marginTop:"1px"} as React.CSSProperties,
};

function CheckItem({children}:{children:React.ReactNode}){
  return <li style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"10px",listStyle:"none"}}>
    <span style={s.tick}>✓</span>
    <span style={{fontSize:"13px",color:"#374151",lineHeight:1.6}}>{children}</span>
  </li>;
}

export default function LivingPage() {
  const firstSteps = [
    {n:"Day 1–3",  i:"🔑",t:"Find accommodation",     d:"Landlord MUST give you a Wohnungsgeberbestätigung form — you need it to register. Without it you cannot do Anmeldung."},
    {n:"Day 1–14", i:"📋",t:"Anmeldung (Registration)", d:"Go to Bürgeramt with: passport + rental contract + Wohnungsgeberbestätigung. Get Meldebescheinigung — keep copies. Needed for: bank account, tax ID, Ausländerbehörde."},
    {n:"Week 1–2", i:"🏦",t:"Open bank account",       d:"Once you have Meldebescheinigung, open Commerzbank or Wise account. You need a German IBAN before your first salary payment."},
    {n:"Week 1–2", i:"🏥",t:"Register health insurance", d:"Contact TK, AOK or Barmer with your employment contract. Get Mitgliedsbescheinigung — give to employer before first day. Legally required."},
    {n:"Week 2–4", i:"🛂",t:"Ausländerbehörde visit",  d:"Book appointment to convert entry visa to residence permit. Bring: passport, Meldebescheinigung, employment contract, health card, photos, fee."},
    {n:"Month 1",  i:"💰",t:"Get your Steuer-ID",      d:"Tax ID arrives automatically by post within 2–4 weeks of Anmeldung. Give immediately to your employer. Needed for income tax and refunds."},
  ];

  const lifeSections = [
    {icon:"🏠",title:"Finding housing",bg:"#FEF2F2",border:"#FCA5A5",items:[
      "Start searching 2–3 months before arrival — good flats go within hours",
      "ImmobilienScout24.de — Germany's largest portal. Set email alerts immediately",
      "WG-Gesucht.de — shared flats (WG). Cheapest option: €350–€700/month for a room",
      "Immowelt.de — second-largest, many listings not on ImmobilienScout24",
      "Facebook groups: 'Wohnungssuche [city]' — many private landlords post here",
      "Students: Studentenwerk dorms €200–€450/mo — apply immediately on admission",
    ]},
    {icon:"🏥",title:"Health Insurance",bg:"#EFF6FF",border:"#BFDBFE",items:[
      "Legally mandatory for ALL residents in Germany from day one",
      "Public (gesetzlich): TK, AOK, Barmer — ~14.6% of salary, employer pays 50%",
      "Students: ~€120/month (TK most popular for international students)",
      "Register BEFORE your first working day — give certificate to HR immediately",
      "Private insurance: only for those earning >€66,600/yr gross",
      "Spouse + children included on your public policy for free (no extra cost)",
    ]},
    {icon:"🗣️",title:"German Language",bg:"#ECFDF5",border:"#6EE7B7",items:[
      "A1/A2: basics — greetings, shopping, numbers. Good for daily life",
      "B1: intermediate — required for fast-track permanent residence (21 months)",
      "B2: professional working level — most professional jobs require this",
      "Free Integrationskurs after arrival — apply at BAMF.de (government-funded)",
      "Goethe Institut: centres in Karachi, Lahore, Islamabad, Dhaka, Delhi, Mumbai",
      "Apps: Duolingo (free), Babbel (paid), Pimsleur (audio), Anki (flashcards)",
    ]},
    {icon:"💰",title:"Taxes & Finance",bg:"#FFFBEB",border:"#FCD34D",items:[
      "German income tax: 14%–45% progressive (most pay 25–35%)",
      "Steuerklasse (tax class): 1 = single, 3/5 = married couple (best combo)",
      "Most immigrants overpay tax in year 1 — file a Steuererklärung for a refund",
      "Use ELSTER (elster.de — free) or Wiso Steuer app (€30) for tax return",
      "Social security (Sozialversicherung): ~20% total, split equally with employer",
      "Solidarity surcharge (Soli) abolished for most workers since 2021",
    ]},
    {icon:"🌙",title:"Muslim & South Asian Life",bg:"#F5F3FF",border:"#C4B5FD",items:[
      "5M+ Muslims in Germany — vibrant, welcoming community across all cities",
      "Mosques in every major city: Berlin 80+, Hamburg 50+, Frankfurt 40+",
      "Halal butchers and South Asian supermarkets widely available",
      "Lidl, Rewe, Aldi expanding halal product ranges significantly",
      "Pakistani/Indian restaurants everywhere — especially Berlin, Frankfurt, Hamburg",
      "Eid prayers organised in major mosques — well-attended and well-organised",
    ]},
    {icon:"🚌",title:"Transport & Getting Around",bg:"#F0FDF4",border:"#86EFAC",items:[
      "Deutschlandticket: €29/month — unlimited travel on ALL regional trains & public transport",
      "Students: semester fee usually includes city transport pass — check your university",
      "DB (Deutsche Bahn) for intercity — book early for cheap fares (Sparpreis from €9.90)",
      "Driving licence: most South Asian licences must be converted within 6 months of arrival",
      "FlixBus: cheap intercity buses across Germany and all of Europe",
      "Cycling: Germany has excellent infrastructure — many professionals cycle to work daily",
    ]},
  ];

  const cities = [
    {city:"Berlin",    south:"Largest Pakistani community in Germany. Neukölln, Tempelhof. 80+ mosques. Strong Bangladeshi community."},
    {city:"Frankfurt", south:"Very large Indian IT & finance community. 'Little India' in Sachsenhausen. Active Pakistani business community."},
    {city:"Hamburg",   south:"Large Pakistani community in Altona & Wandsbek. Active mosque community. Good Bangladeshi presence."},
    {city:"Munich",    south:"Mostly Indian IT/engineering professionals. Smaller Pakistani community. Very high quality of life."},
    {city:"Düsseldorf",south:"Germany's largest Indian community (10,000+). Very active cultural organisations. Indian grocery shops & restaurants."},
    {city:"Cologne",   south:"Mixed South Asian community. Large Pakistani diaspora. Active mosque community. Affordable city."},
  ];

  const rentData = [
    {city:"Munich",    rent:"€1,800–€2,400",note:"Most expensive"},
    {city:"Frankfurt", rent:"€1,400–€1,900",note:"Finance hub"},
    {city:"Hamburg",   rent:"€1,300–€1,700",note:"Good job market"},
    {city:"Berlin",    rent:"€1,100–€1,600",note:"Largest SA community"},
    {city:"Düsseldorf",rent:"€1,100–€1,500",note:"Large Indian community"},
    {city:"Cologne",   rent:"€1,000–€1,400",note:"Most affordable top city"},
    {city:"Stuttgart", rent:"€1,200–€1,600",note:"Engineering hub"},
    {city:"Leipzig",   rent:"€700–€1,100",  note:"Cheapest major city"},
  ];

  return (
    <div style={{background:"#F9FAFB"}}>

      {/* HERO */}
      <section style={{position:"relative",minHeight:"400px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(0.26)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.75))"}}/>
        <div style={{...s.wrap,position:"relative",zIndex:1,width:"100%",padding:"80px 1.5rem"}}>
          <span style={{...s.eye,color:"#FCD34D"}}>🏡 Living in Germany</span>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2.4rem,5vw,3.8rem)",fontWeight:900,lineHeight:1.08,letterSpacing:"-0.025em",color:"#fff",maxWidth:"700px",marginBottom:"18px"}}>Your complete guide to settling in Germany</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"580px",lineHeight:1.75,marginBottom:"28px"}}>From your first flat and Anmeldung, to health insurance, taxes, halal food, language courses and building a South Asian community — everything you need to know.</p>
          <Link href="/consultancy" style={s.btnP}>📅 Get settlement support →</Link>
        </div>
      </section>

      {/* STATS */}
      <div style={{background:"#0B1D3A"}}>
        <div style={s.wrap}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
            {[{n:"14 days",l:"To register (Anmeldung)"},{n:"€934/mo",l:"Student blocked account"},{n:"14.6%",l:"Public health insurance"},{n:"5M+",l:"Muslims in Germany"}].map((st,i)=>(
              <div key={st.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"1.65rem",color:"#FCD34D"}}>{st.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"3px"}}>{st.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FIRST 30 DAYS */}
      <section style={s.sec}>
        <span style={s.eye}>Arrival checklist</span>
        <h2 style={s.h2}>Your first 30 days in Germany</h2>
        <div style={s.bar}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"16px",marginBottom:"52px"}}>
          {firstSteps.map(st=>(
            <div key={st.n} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"18px",padding:"20px 22px",display:"flex",gap:"16px",alignItems:"flex-start",boxShadow:"0 2px 8px rgba(0,0,0,.04)"}}>
              <div style={{background:"#FEF2F2",border:"1px solid #FCA5A5",borderRadius:"12px",padding:"10px 12px",flexShrink:0,textAlign:"center",minWidth:"60px"}}>
                <div style={{fontSize:"20px"}}>{st.i}</div>
                <div style={{fontSize:"10px",fontWeight:700,color:"#DC2626",marginTop:"4px",whiteSpace:"nowrap"}}>{st.n}</div>
              </div>
              <div>
                <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"14.5px",marginBottom:"6px"}}>{st.t}</div>
                <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.65}}>{st.d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Life sections grid */}
        <span style={s.eye}>Settling in</span>
        <h2 style={s.h2}>Everything you need to know</h2>
        <div style={s.bar}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
          {lifeSections.map(ls=>(
            <div key={ls.title} style={{background:ls.bg,border:`1.5px solid ${ls.border}`,borderRadius:"20px",padding:"1.6rem"}}>
              <div style={{fontSize:"32px",marginBottom:"12px"}}>{ls.icon}</div>
              <div style={{fontFamily:PD,fontWeight:800,fontSize:"17px",color:"#0B1D3A",marginBottom:"14px"}}>{ls.title}</div>
              <ul style={{listStyle:"none",padding:0}}>
                {ls.items.map((item,i)=><CheckItem key={i}>{item}</CheckItem>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* HOUSING COSTS + COMMUNITIES */}
      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={s.wrap}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"56px",alignItems:"start"}}>
            {/* Rent table */}
            <div>
              <span style={s.eye}>Housing costs 2026</span>
              <h2 style={s.h2}>Average rents by city</h2>
              <div style={s.bar}/>
              <div style={{border:"1.5px solid #E5E7EB",borderRadius:"16px",overflow:"hidden"}}>
                <div style={{background:"#0B1D3A",padding:"12px 18px",display:"grid",gridTemplateColumns:"1fr auto auto"}}>
                  <span style={{color:"rgba(255,255,255,.5)",fontSize:"11px",fontWeight:700,textTransform:"uppercase"}}>City</span>
                  <span style={{color:"rgba(255,255,255,.5)",fontSize:"11px",fontWeight:700,textTransform:"uppercase"}}>1-bed monthly</span>
                  <span style={{color:"rgba(255,255,255,.5)",fontSize:"11px",fontWeight:700,textTransform:"uppercase",marginLeft:"16px"}}>Note</span>
                </div>
                {rentData.map((r,i)=>(
                  <div key={r.city} style={{display:"grid",gridTemplateColumns:"1fr auto auto",padding:"11px 18px",background:i%2===0?"#F9FAFB":"#fff",borderBottom:"1px solid #E5E7EB",alignItems:"center",gap:"12px"}}>
                    <span style={{fontWeight:600,color:"#0B1D3A",fontSize:"14px"}}>{r.city}</span>
                    <span style={{fontWeight:800,color:"#DC2626",fontSize:"14px"}}>{r.rent}</span>
                    <span style={{fontSize:"11.5px",color:"#9CA3AF",marginLeft:"8px"}}>{r.note}</span>
                  </div>
                ))}
              </div>
              <p style={{marginTop:"12px",fontSize:"12px",color:"#9CA3AF"}}>Prices for 1-bedroom apartment, city centre. Source: Numbeo/Profee 2026.</p>
            </div>

            {/* Communities */}
            <div>
              <span style={s.eye}>South Asian communities</span>
              <h2 style={s.h2}>Where your community is</h2>
              <div style={s.bar}/>
              <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
                {cities.map(c=>(
                  <div key={c.city} style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"16px",padding:"16px 20px",display:"flex",gap:"14px",alignItems:"flex-start"}}>
                    <div style={{fontFamily:PD,fontWeight:800,fontSize:"16px",color:"#DC2626",flexShrink:0,width:"90px"}}>{c.city}</div>
                    <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.6}}>{c.south}</div>
                  </div>
                ))}
                <div style={{background:"#0B1D3A",borderRadius:"16px",padding:"18px 20px"}}>
                  <div style={{fontWeight:700,color:"#FCD34D",fontSize:"14px",marginBottom:"8px"}}>🕌 Mosques & Islamic life</div>
                  <div style={{fontSize:"13px",color:"rgba(255,255,255,.65)",lineHeight:1.65}}>Germany has 2,500+ mosques. Zentralrat der Muslime (ZMD) coordinates Islamic affairs. Friday prayers well-organised in major cities. Most major cities have Pakistani/Bangladeshi-led mosques with Urdu/Bengali khutbah.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Family section */}
      <section style={{...s.sec,paddingTop:"3rem"}}>
        <div style={{background:"linear-gradient(135deg,#0B1D3A,#1E3A5F)",borderRadius:"24px",padding:"44px",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:"-60px",right:"-60px",width:"250px",height:"250px",borderRadius:"50%",background:"rgba(255,255,255,.04)"}}/>
          <div style={{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px",alignItems:"center"}}>
            <div>
              <span style={{...s.eye,color:"#FCD34D"}}>For families</span>
              <h2 style={{...s.h2,color:"#fff",marginBottom:"14px"}}>Bringing your family to Germany</h2>
              <div style={{...s.bar}}/>
              <p style={{color:"rgba(255,255,255,.65)",lineHeight:1.75,fontSize:"15px",marginBottom:"22px"}}>Once you have a German residence permit, your spouse and children can join through Family Reunification. Spouse gets an unrestricted German work permit. Children get free schooling and typically become fluent in German within 12 months.</p>
              <Link href="/visa" style={s.btnP}>Family Reunification visa →</Link>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
              {[
                {i:"👶",t:"Kindergeld (Child benefit)",d:"€250/month per child — apply at Familienkasse. Paid to all legal residents."},
                {i:"🏫",t:"Free schooling",d:"German schools are free and generally excellent. International schools available in major cities."},
                {i:"👩‍👦",t:"Elterngeld (Parental pay)",d:"65–67% of net salary for 12–14 months. Available to both parents."},
                {i:"🏥",t:"Family health insurance",d:"Spouse and children covered under your public insurance at NO extra cost."},
              ].map(f=>(
                <div key={f.t} style={{display:"flex",gap:"12px",alignItems:"flex-start",background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.1)",borderRadius:"14px",padding:"14px 16px"}}>
                  <span style={{fontSize:"22px",flexShrink:0}}>{f.i}</span>
                  <div>
                    <div style={{fontWeight:700,color:"#fff",fontSize:"14px",marginBottom:"3px"}}>{f.t}</div>
                    <div style={{fontSize:"12.5px",color:"rgba(255,255,255,.55)",lineHeight:1.5}}>{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{...s.wrap,background:"linear-gradient(135deg,#DC2626,#991B1B)",borderRadius:"28px",padding:"52px",position:"relative",overflow:"hidden",textAlign:"center"}}>
          <div style={{position:"absolute",top:"-60px",right:"-60px",width:"250px",height:"250px",borderRadius:"50%",background:"rgba(255,255,255,.07)"}}/>
          <h2 style={{fontFamily:PD,fontWeight:800,color:"#fff",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",marginBottom:"12px",position:"relative",zIndex:1}}>Need help settling in Germany?</h2>
          <p style={{color:"rgba(255,255,255,.72)",fontSize:"16px",marginBottom:"26px",position:"relative",zIndex:1}}>Our Premium Settlement package covers Anmeldung, banking, health insurance, housing and more — in Urdu, Hindi or English.</p>
          <Link href="/consultancy" style={{...s.btnG,background:"#fff",color:"#DC2626",border:"none",fontWeight:800,position:"relative",zIndex:1}}>See settlement packages →</Link>
        </div>
      </div>
    </div>
  );
}
