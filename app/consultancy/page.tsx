"use client";
import Link from "next/link";

const PD = '"Playfair Display",Georgia,serif';
const HERO = "https://images.unsplash.com/photo-164915906171828-757bb62b4baf?w=1400&q=85&auto=format&fit=crop";

export default function ConsultancyPage() {
  return (
    <div>
      <section style={{position:"relative",minHeight:"380px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center 30%",filter:"brightness(0.28)"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(220,38,38,.25))"}} />
        <div className="wrap" style={{position:"relative",zIndex:1,padding:"72px 1.5rem"}}>
          <span className="eyebrow" style={{color:"#FCD34D"}}>📅 Expert Consultancy</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"700px",marginBottom:"16px"}}>1-on-1 immigration consultancy in Urdu, Hindi &amp; English</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"580px",lineHeight:1.7,marginBottom:"28px"}}>Our certified immigration experts have helped 50,000+ South Asians successfully move to Germany. Book your free 30-min consultation today.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <Link href="mailto:vistavisa7@gmail.com" className="btn btn-primary">📅 Book free consultation</Link>
            <Link href="/service" className="btn btn-ghost-light">💬 WhatsApp us</Link>
          </div>
          <div style={{marginTop:"24px",display:"flex",gap:"24px",flexWrap:"wrap"}}>
            {["🇵🇰 Urdu","🇮🇳 Hindi","🇧🇩 Bengali","🌍 English"].map(l=>(
              <span key={l} style={{fontSize:"14px",fontWeight:600,color:"rgba(255,255,255,.7)"}}>{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="sec">
        <div style={{textAlign:"center",maxWidth:"600px",margin:"0 auto 52px"}}>
          <span className="eyebrow">Transparent pricing</span>
          <h2 className="h2">Choose the right plan for you</h2>
          <div className="divider" style={{margin:"14px auto"}} />
          <p className="lead">No hidden fees. Cancel anytime. All consultations in your preferred language.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"24px"}}>
          {[
            {
              name:"Starter",badge:"Free",badgeColor:"#ECFDF5",badgeText:"#065F46",
              price:"€0",period:"one session",
              desc:"Perfect if you just need a quick sense-check and don't know where to start.",
              features:["30-minute consultation call","Visa eligibility check","Basic document checklist","Email follow-up summary"],
              cta:"Book free call",href:"mailto:vistavisa7@gmail.com",featured:false
            },
            {
              name:"Full Application Support",badge:"Most popular",badgeColor:"#FEF2F2",badgeText:"#B91C1C",
              price:"€149",period:"complete package",
              desc:"End-to-end support from visa selection to appointment booking and document review.",
              features:["3× 60-min consultation calls","Full visa application review","Document checklist & quality check","Embassy appointment guidance","CV & cover letter review","WhatsApp support throughout","German A1 resource pack"],
              cta:"Start full package",href:"mailto:vistavisa7@gmail.com",featured:true
            },
            {
              name:"Premium Settlement",badge:"Best value",badgeColor:"#FFFBEB",badgeText:"#92400E",
              price:"€299",period:"6-month support",
              desc:"From visa application all the way to registration, banking and first job in Germany.",
              features:["Everything in Full Application","Unlimited WhatsApp support (6 months)","Anmeldung & Ausländerbehörde guidance","Bank account setup support","Housing & accommodation advice","German language resources","Job application review","Community access (WhatsApp group)"],
              cta:"Start premium",href:"mailto:vistavisa7@gmail.com",featured:false
            },
          ].map(p=>(
            <div key={p.name} className={`price-card${p.featured?" price-card-featured":""}`} style={{display:"flex",flexDirection:"column"}}>
              {p.featured && <div style={{position:"absolute",top:"20px",right:"20px",background:"#DC2626",color:"#fff",fontSize:"11px",fontWeight:700,padding:"4px 12px",borderRadius:"999px",textTransform:"uppercase",letterSpacing:"0.08em"}}>⭐ Popular</div>}
              <span style={{display:"inline-block",background:p.badgeColor,color:p.badgeText,fontSize:"11px",fontWeight:700,padding:"4px 12px",borderRadius:"999px",marginBottom:"16px",width:"fit-content"}}>{p.badge}</span>
              <div style={{fontFamily:PD,fontWeight:800,fontSize:"22px",color:"#0B1D3A",marginBottom:"6px"}}>{p.name}</div>
              <div style={{display:"flex",alignItems:"baseline",gap:"6px",marginBottom:"14px"}}>
                <span style={{fontFamily:PD,fontWeight:900,fontSize:"36px",color:p.featured?"#DC2626":"#0B1D3A"}}>{p.price}</span>
                <span style={{fontSize:"14px",color:"#9CA3AF"}}>/ {p.period}</span>
              </div>
              <p style={{fontSize:"14px",color:"#6B7280",lineHeight:1.65,marginBottom:"20px"}}>{p.desc}</p>
              <ul style={{listStyle:"none",flex:1,marginBottom:"24px"}}>
                {p.features.map((f,i)=>(
                  <li key={i} className="check-item">
                    <span className="check-icon">✓</span>
                    <span style={{fontSize:"13.5px",color:"#374151"}}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={p.href} className={`btn ${p.featured?"btn-primary":"btn-outline"}`} style={{width:"100%",justifyContent:"center"}}>{p.cta} →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the team */}
      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <div style={{textAlign:"center",maxWidth:"560px",margin:"0 auto 44px"}}>
            <span className="eyebrow">Our team</span>
            <h2 className="h2">Experts who have walked the same path</h2>
            <div className="divider" style={{margin:"14px auto"}} />
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"24px"}}>
            {[
              {av:"SS",name:"Shaista Shabbir",role:"Founder & Lead Consultant",origin:"🇵🇰 Lahore → 🇩🇪 Berlin",bio:"Moved from Pakistan to Germany in 2019. Navigated the Blue Card process herself and has since helped 10,000+ South Asians do the same.",langs:"Urdu · English · German",c:"#DC2626"},
              {av:"AH",name:"Arjun Hegde",role:"India & Bangladesh Specialist",origin:"🇮🇳 Bengaluru → 🇩🇪 Munich",bio:"5 years in Germany IT sector. Expert on Indian degree recognition, EU Blue Card for IT professionals, and Ausländerbehörde processes.",langs:"Hindi · Kannada · English",c:"#0D9488"},
              {av:"NK",name:"Nadia Khan",role:"Student Visa Specialist",origin:"🇵🇰 Karachi → 🇩🇪 Hamburg",bio:"Completed her Masters at University of Hamburg. Specialises in student visas, Ausbildung applications and blocked accounts for South Asians.",langs:"Urdu · English · German",c:"#1D4ED8"},
            ].map(t=>(
              <div key={t.name} className="card" style={{textAlign:"center"}}>
                <div style={{width:"72px",height:"72px",borderRadius:"50%",background:t.c,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",fontWeight:800,color:"#fff",margin:"0 auto 16px",fontFamily:PD}}>{t.av}</div>
                <div style={{fontFamily:PD,fontWeight:800,fontSize:"18px",color:"#0B1D3A",marginBottom:"4px"}}>{t.name}</div>
                <div style={{fontSize:"13px",fontWeight:600,color:"#DC2626",marginBottom:"4px"}}>{t.role}</div>
                <div style={{fontSize:"12px",color:"#9CA3AF",marginBottom:"12px"}}>{t.origin}</div>
                <p style={{fontSize:"13.5px",color:"#6B7280",lineHeight:1.65,marginBottom:"12px"}}>{t.bio}</p>
                <div style={{fontSize:"12px",color:"#374151",fontWeight:600,background:"#F9FAFB",borderRadius:"8px",padding:"6px 12px"}}>🗣 {t.langs}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="sec" style={{paddingTop:"2rem"}}>
        <span className="eyebrow">Common questions</span>
        <h2 className="h2" style={{marginBottom:"32px"}}>Frequently asked questions</h2>
        <div style={{maxWidth:"760px"}}>
          {[
            {q:"Is the first consultation really free?",a:"Yes — completely free, no credit card required. Our 30-minute starter call is designed to help you understand your options and see if VisaVista is the right fit for you."},
            {q:"Do you consult in Urdu, Hindi or Bengali?",a:"Absolutely. All three languages plus English. When you book, just mention your preferred language and we'll assign the right consultant."},
            {q:"How is VisaVista different from other immigration websites?",a:"Most sites give generic information. We provide personalised, country-specific guidance for South Asians — we know the exact embassy procedures in Islamabad, Karachi, Delhi, Mumbai, Dhaka and more."},
            {q:"Can you help book embassy appointments?",a:"Yes. Getting an appointment slot is one of the hardest parts of the German visa process from Pakistan and Bangladesh especially. We provide a step-by-step guide and monitor slot availability for our premium clients."},
            {q:"Are you a registered immigration law firm?",a:"We are not lawyers or a registered law firm. We are experienced immigration consultants providing guidance and support. For complex legal cases, we refer to our network of certified immigration lawyers."},
          ].map(f=>(
            <div key={f.q} className="faq-item">
              <div style={{fontWeight:700,fontSize:"16px",color:"#0B1D3A",marginBottom:"8px"}}>{f.q}</div>
              <div style={{fontSize:"14px",color:"#6B7280",lineHeight:1.7}}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
