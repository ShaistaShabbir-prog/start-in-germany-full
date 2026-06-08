import Link from "next/link";
const PD = '"Playfair Display",Georgia,serif';
const HERO = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1400&q=80&auto=format&fit=crop";

export default function LivingPage() {
  return (
    <div>
      <section style={{position:"relative",minHeight:"340px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(0.28)"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.96),rgba(11,29,58,.75))"}} />
        <div className="wrap" style={{position:"relative",zIndex:1,padding:"72px 1.5rem"}}>
          <span className="eyebrow" style={{color:"#FCD34D"}}>🏡 Living in Germany</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"680px",marginBottom:"16px"}}>Everything you need to settle in Germany</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"560px",lineHeight:1.7}}>From finding a flat and registering your address, to German courses, healthcare and building a community — your complete guide to life in Germany.</p>
        </div>
      </section>

      <section className="sec">
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"22px"}}>
          {[
            {icon:"🏠",title:"Finding housing",items:["Start searching 2–3 months before arrival","Use Immobilienscout24, WG-Gesucht, Immowelt","WG (Wohngemeinschaft) = shared flat — cheapest option","Average rent: €800–€1,500/mo (1-bed, city centre)","You need a Wohnungsgeberbestätigung from landlord for Anmeldung"]},
            {icon:"📋",title:"Anmeldung (Registration)",items:["Must register within 14 days of moving into permanent address","Go to your local Bürgeramt (citizen's office)","Bring: passport, rental contract, Wohnungsgeberbestätigung","You get a Meldebescheinigung — keep multiple copies","Needed for: bank account, tax ID, Ausländerbehörde visit"]},
            {icon:"🏥",title:"Health insurance",items:["All residents in Germany must have health insurance by law","Public (gesetzlich): TK, AOK, Barmer — ~14.6% of salary, split with employer","Private (privat): for those earning >€66,600/yr","Students get cheap public insurance (~€120/month)","Register as soon as you have your job contract"]},
            {icon:"🗣️",title:"German language",items:["A1–B2: Goethe Institut has centres in Pakistan, India, Bangladesh","Free Integrationskurs in Germany after arrival (for visa holders)","Apps: Duolingo, Babbel, Busuu — good for basics","Language tandems: find a German speaker learning your language","B1 German = faster permanent residence (21 months)"]},
            {icon:"💰",title:"Taxes & finances",items:["Germany has progressive income tax: 14%–45%","Tax class depends on marital status — ask HR when you start","File a Steuererklärung (tax return) — most immigrants get a refund","Social security: ~40% split between you and employer","Use ELSTER (elster.de) or a Steuerberater (tax advisor)"]},
            {icon:"🌙",title:"Muslim & South Asian life",items:["Germany has 5M+ Muslims and large Pakistani/Indian communities","Halal supermarkets in most large cities (Rewe, Lidl expanding halal range)","Friday prayers at mosques in all major cities","Pakistani & Indian restaurants everywhere, especially Berlin/Frankfurt/Hamburg","South Asian community groups on WhatsApp and Facebook"]},
          ].map(s=>(
            <div key={s.title} className="card card-hover-red">
              <div style={{fontSize:"36px",marginBottom:"12px"}}>{s.icon}</div>
              <div style={{fontFamily:PD,fontWeight:800,fontSize:"18px",color:"#0B1D3A",marginBottom:"14px"}}>{s.title}</div>
              <ul style={{listStyle:"none"}}>
                {s.items.map((item,i)=>(
                  <li key={i} className="check-item">
                    <span className="check-icon">✓</span>
                    <span style={{fontSize:"13px",color:"#374151",lineHeight:1.5}}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",background:"linear-gradient(135deg,#0B1D3A,#1E3A5F)",borderRadius:"28px",padding:"56px",textAlign:"center"}}>
          <h2 style={{fontFamily:PD,fontWeight:800,color:"#fff",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",marginBottom:"12px"}}>Need help with your first weeks in Germany?</h2>
          <p style={{color:"rgba(255,255,255,.65)",fontSize:"16px",marginBottom:"28px"}}>Our Premium Settlement plan covers Anmeldung, banking, housing and more — in Urdu, Hindi or English.</p>
          <Link href="/consultancy" className="btn btn-primary">See consultancy plans →</Link>
        </div>
      </div>
    </div>
  );
}
