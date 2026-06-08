import Link from "next/link";
const PD = '"Playfair Display",Georgia,serif';
const HERO   = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1400&q=80&auto=format&fit=crop";
const CITY   = "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80&auto=format&fit=crop";

export default function LivingPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{position:"relative",minHeight:"400px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(0.28)"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.96),rgba(11,29,58,.75))"}} />
        <div className="wrap" style={{position:"relative",zIndex:1,padding:"80px 1.5rem"}}>
          <span className="eyebrow" style={{color:"#FCD34D"}}>🏡 Living in Germany</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"700px",marginBottom:"18px"}}>Your complete guide to settling in Germany</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"580px",lineHeight:1.75,marginBottom:"28px"}}>From finding your first flat and registering your address, to health insurance, taxes, halal food, language courses and building a life — everything a South Asian newcomer needs to know.</p>
          <Link href="/consultancy" className="btn btn-primary">📅 Get settlement support →</Link>
        </div>
      </section>

      {/* Quick numbers */}
      <div style={{background:"#0B1D3A"}}>
        <div className="wrap">
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
            {[
              {n:"14 days",l:"To register address (Anmeldung)"},
              {n:"€800–€1,500",l:"Average 1-bed rent (city)"},
              {n:"14.6%",l:"Public health insurance rate"},
              {n:"5M+",l:"Muslims living in Germany"},
            ].map((s,i)=>(
              <div key={s.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"1.6rem",color:"#FCD34D"}}>{s.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"3px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main sections */}
      <section className="sec">
        <span className="eyebrow">First steps on arrival</span>
        <h2 className="h2" style={{marginBottom:"8px"}}>Your first 30 days in Germany — checklist</h2>
        <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 36px"}} />
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"18px",marginBottom:"48px"}}>
          {[
            {n:"Day 1–3",icon:"🔑",title:"Find accommodation & get keys",d:"If you don't have housing sorted before arrival, use temporary accommodation (Hostel/Airbnb/student dorm) while you search. Your landlord must give you a Wohnungsgeberbestätigung form — you need this to register."},
            {n:"Day 1–14",icon:"📋",title:"Anmeldung — Register your address",d:"Go to your Bürgeramt (citizen's office) with: passport, rental contract, Wohnungsgeberbestätigung. Get a Meldebescheinigung (registration certificate). This unlocks: bank account, tax ID, Ausländerbehörde. Book online at service.berlin.de or your city's portal."},
            {n:"Week 1–2",icon:"🏦",title:"Open your bank account",d:"Once you have your Meldebescheinigung, open a Commerzbank Girokonto or Wise account. You need an IBAN for your employer to pay your salary and for direct debits (rent, insurance). See our Banking page."},
            {n:"Week 1–2",icon:"🏥",title:"Register for health insurance",d:"Contact TK, AOK or Barmer with your employment contract. They send you a Mitgliedsbescheinigung — give this to your employer before your first day. Without it, you cannot legally work."},
            {n:"Week 2–4",icon:"🛂",title:"Visit Ausländerbehörde",d:"Book an appointment at your local Ausländerbehörde (foreigners' registration office) to convert your entry visa into a residence permit. Bring: passport, Meldebescheinigung, employment contract, health insurance card, photos, visa fee."},
            {n:"Month 1",icon:"💰",title:"Get your Steuer-ID (Tax ID)",d:"Your Steuer-ID (tax identification number) is sent automatically to your registered address within 2–4 weeks of Anmeldung. Give it to your employer. You need it for income tax and your Steuererklärung."},
          ].map(c=>(
            <div key={c.n} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"20px",padding:"22px 24px",display:"flex",gap:"16px",alignItems:"flex-start"}}>
              <div style={{background:"#FEF2F2",border:"1px solid #FCA5A5",borderRadius:"12px",padding:"10px 12px",flexShrink:0,textAlign:"center"}}>
                <div style={{fontSize:"22px"}}>{c.icon}</div>
                <div style={{fontSize:"10px",fontWeight:700,color:"#DC2626",marginTop:"4px",whiteSpace:"nowrap"}}>{c.n}</div>
              </div>
              <div>
                <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"15px",marginBottom:"6px"}}>{c.title}</div>
                <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.65}}>{c.d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Housing deep dive */}
        <div style={{background:"#FEF2F2",border:"1px solid #FCA5A5",borderRadius:"28px",padding:"40px 44px",marginBottom:"32px"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px",alignItems:"start"}}>
            <div>
              <span className="eyebrow">🏠 Housing in Germany</span>
              <h2 className="h2" style={{marginBottom:"16px"}}>Finding a flat as a newcomer</h2>
              <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"0 0 20px"}} />
              <p style={{fontSize:"14px",color:"#374151",lineHeight:1.75,marginBottom:"18px"}}>Germany's rental market is competitive, especially in Berlin, Munich, Hamburg and Frankfurt. Start searching 2–3 months before arrival. Be prepared to move fast — good flats disappear within hours.</p>
              <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
                {[
                  {site:"ImmobilienScout24.de",desc:"Germany's largest property portal. Filter by city, size, price. Set up email alerts."},
                  {site:"WG-Gesucht.de",desc:"For shared flats (WGs). Cheapest option, great for newcomers — €350–€700/mo for a room."},
                  {site:"Immowelt.de",desc:"Second-largest portal. Many listings not on ImmobilienScout24."},
                  {site:"Facebook Groups",desc:"Search 'Wohnungssuche [city]' or '[City] Flats for Rent' — many private landlords post here."},
                  {site:"Student dorms (Studentenwerk)",desc:"Cheapest option for students — €200–€450/mo. Apply immediately on admission — waitlists are long."},
                ].map(s=>(
                  <div key={s.site} className="check-item">
                    <span className="check-icon">✓</span>
                    <div>
                      <span style={{fontWeight:700,color:"#0B1D3A",fontSize:"13.5px"}}>{s.site}: </span>
                      <span style={{fontSize:"13px",color:"#6B7280"}}>{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{fontWeight:700,color:"#0B1D3A",fontSize:"16px",marginBottom:"16px"}}>Average monthly rents 2026 (1-bedroom)</h3>
              {[
                {city:"Munich",rent:"€1,800–€2,400",note:"Most expensive city"},
                {city:"Frankfurt",rent:"€1,400–€1,900",note:"High finance/IT demand"},
                {city:"Hamburg",rent:"€1,300–€1,700",note:"Strong job market"},
                {city:"Berlin",rent:"€1,100–€1,600",note:"Largest South Asian community"},
                {city:"Düsseldorf",rent:"€1,100–€1,500",note:"Large Indian community"},
                {city:"Cologne",rent:"€1,000–€1,400",note:"Good balance cost/jobs"},
                {city:"Stuttgart",rent:"€1,200–€1,600",note:"BMW, Bosch, Daimler HQs"},
                {city:"Leipzig / Dresden",rent:"€700–€1,100",note:"Cheapest major cities"},
              ].map(c=>(
                <div key={c.city} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:"1px solid #FCA5A5"}}>
                  <div>
                    <span style={{fontWeight:700,color:"#0B1D3A",fontSize:"14px"}}>{c.city}</span>
                    <span style={{fontSize:"11.5px",color:"#9CA3AF",marginLeft:"8px"}}>{c.note}</span>
                  </div>
                  <span style={{fontWeight:700,color:"#DC2626",fontSize:"13.5px"}}>{c.rent}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Life topics grid */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",marginBottom:"32px"}}>
          {[
            {icon:"🏥",title:"Health Insurance",color:"#EFF6FF",border:"#BFDBFE",items:[
              "Legally required for everyone living in Germany",
              "Public (gesetzlich): TK, AOK, Barmer, BARMER — ~€120–€400/mo depending on income",
              "Employer pays 50% of public insurance for employed workers",
              "Students: ~€120/month (TK is most popular for international students)",
              "Apply before your first working day — give certificate to employer",
              "Private insurance: only for high earners (>€66,600/yr gross)",
            ]},
            {icon:"🗣️",title:"German Language",color:"#ECFDF5",border:"#6EE7B7",items:[
              "A1/A2: basics — greetings, numbers, shopping",
              "B1: intermediate — required for permanent residence (21-month track)",
              "B2: professional working level — required for many jobs",
              "Free Integrationskurs available after arrival (government-funded)",
              "Goethe Institut: centres in Karachi, Lahore, Islamabad, Dhaka, Delhi, Mumbai",
              "Apps: Duolingo, Babbel, Pimsleur (audio), Anki (flashcards)",
            ]},
            {icon:"💰",title:"Taxes & Finance",color:"#FFFBEB",border:"#FCD34D",items:[
              "Germany's income tax: 14%–45% progressive",
              "Steuerklasse (tax class) 1 = single, class 3/5 = married",
              "Most newcomers overpay tax — Steuererklärung gets you a refund",
              "Use ELSTER (elster.de) or hire a Steuerberater (tax advisor)",
              "Wiso Steuer app: €30 and does your tax return in German",
              "Solidarity surcharge (Soli) abolished for most workers since 2021",
            ]},
            {icon:"🌙",title:"Muslim Life in Germany",color:"#F5F3FF",border:"#C4B5FD",items:[
              "5M+ Muslims in Germany — large and welcoming community",
              "Mosques in every major city: Berlin has 80+, Hamburg 50+",
              "Halal butchers and supermarkets widely available in cities",
              "Lidl, Rewe, Aldi expanding halal product ranges",
              "Pakistani/Indian restaurants in every large city",
              "Eid prayers in major mosques — very well organised",
            ]},
            {icon:"🚌",title:"Transport & Getting Around",color:"#FEF2F2",border:"#FCA5A5",items:[
              "Deutschlandticket: €29/month — unlimited travel on all regional trains & public transport",
              "Students: semester fee usually includes a transport pass for your city",
              "DB (Deutsche Bahn) for intercity trains — book early for cheap tickets",
              "Driving licence: most South Asian licences must be converted within 6 months",
              "FlixBus: cheap intercity buses across Germany and Europe",
              "Cycling: Germany has excellent cycling infrastructure — many commute by bike",
            ]},
            {icon:"👶",title:"Family & Children",color:"#F0FDF4",border:"#86EFAC",items:[
              "Kindergeld (child benefit): €250/month per child — apply at Familienkasse",
              "German schools are free and mostly excellent — international schools also available",
              "Children learn German quickly — usually fluent within 1 year",
              "Kita (daycare): subsidised, apply early — waitlists can be 6–12 months",
              "Elterngeld (parental leave pay): 65%–67% of net salary for 12–14 months",
              "Family health insurance: spouse and children covered under your policy for free",
            ]},
          ].map(s=>(
            <div key={s.title} className="card" style={{background:s.color,borderColor:s.border}}>
              <div style={{fontSize:"36px",marginBottom:"12px"}}>{s.icon}</div>
              <div style={{fontFamily:PD,fontWeight:800,fontSize:"17px",color:"#0B1D3A",marginBottom:"14px"}}>{s.title}</div>
              <ul style={{listStyle:"none"}}>
                {s.items.map((item,i)=>(
                  <li key={i} className="check-item">
                    <span className="check-icon">✓</span>
                    <span style={{fontSize:"12.5px",color:"#374151",lineHeight:1.55}}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* South Asian communities */}
        <div style={{background:"#0B1D3A",borderRadius:"28px",padding:"44px"}}>
          <h2 className="h2" style={{color:"#fff",marginBottom:"8px"}}>🇵🇰🇮🇳🇧🇩 South Asian communities by city</h2>
          <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 28px"}} />
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
            {[
              {city:"Berlin",comm:"Largest Pakistani community in Germany. Strong Bangladeshi presence. Areas: Neukölln, Tempelhof. Mosques, halal shops, desi restaurants everywhere."},
              {city:"Frankfurt",comm:"Very large Indian tech community (IT/finance sector). 'Little India' in Sachsenhausen. Strong Pakistani business community."},
              {city:"Hamburg",comm:"Large Pakistani community, especially in Altona and Wandsbek. Active mosques. Good Bangladeshi community too."},
              {city:"Munich",comm:"Mostly Indian IT/engineering professionals. Smaller Pakistani community. More expensive but very high quality of life."},
              {city:"Düsseldorf",comm:"One of Germany's largest Indian communities — over 10,000 Indians. Active cultural organisations, Indian grocery shops, restaurants."},
              {city:"Cologne",comm:"Mixed South Asian community. Large Pakistani diaspora. Active mosque community. Affordable compared to other big cities."},
            ].map(c=>(
              <div key={c.city} style={{background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.1)",borderRadius:"14px",padding:"18px 20px"}}>
                <div style={{fontFamily:PD,fontWeight:800,color:"#FCD34D",fontSize:"16px",marginBottom:"8px"}}>{c.city}</div>
                <div style={{fontSize:"12.5px",color:"rgba(255,255,255,.55)",lineHeight:1.6}}>{c.comm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",background:"linear-gradient(135deg,#DC2626,#991B1B)",borderRadius:"28px",padding:"56px",position:"relative",overflow:"hidden",textAlign:"center"}}>
          <div style={{position:"absolute",top:"-60px",right:"-60px",width:"280px",height:"280px",borderRadius:"50%",background:"rgba(255,255,255,.07)"}} />
          <h2 style={{fontFamily:PD,fontWeight:800,color:"#fff",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",marginBottom:"12px",position:"relative",zIndex:1}}>Need help with your first weeks in Germany?</h2>
          <p style={{color:"rgba(255,255,255,.72)",fontSize:"16px",marginBottom:"28px",position:"relative",zIndex:1}}>Our Premium Settlement plan covers Anmeldung, banking, health insurance, housing and more — guided in Urdu, Hindi or English.</p>
          <Link href="/consultancy" className="btn" style={{background:"#fff",color:"#DC2626",fontWeight:800,position:"relative",zIndex:1}}>See settlement packages →</Link>
        </div>
      </div>
    </div>
  );
}
