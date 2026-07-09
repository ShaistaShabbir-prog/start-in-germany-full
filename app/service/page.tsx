"use client";
import Link from "next/link";
const PD = '"Playfair Display",Georgia,serif';
const HERO = "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80&auto=format&fit=crop";

export default function ServicePage() {
  return (
    <div>
      <section style={{position:"relative",minHeight:"340px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center 40%",filter:"brightness(0.25)"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.8))"}} />
        <div className="wrap" style={{position:"relative",zIndex:1,padding:"72px 1.5rem"}}>
          <span className="eyebrow" style={{color:"#FCD34D"}}>🛠 Services & Contact</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"680px",marginBottom:"16px"}}>How can we help you today?</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.7)",maxWidth:"560px",lineHeight:1.75}}>Reach out via email, WhatsApp or book a free 1-on-1 consultation. Our team speaks Urdu, Hindi, Bengali and English — and responds within 24 hours.</p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="sec">
        <span className="eyebrow">Get in touch</span>
        <h2 className="h2" style={{marginBottom:"8px"}}>Choose how to reach us</h2>
        <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 36px"}} />
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px",marginBottom:"60px"}}>
          {[
            {icon:"📅",title:"Book a consultation",desc:"Free 30-minute call with a certified immigration expert in your language. No obligation, no cost.",cta:"Book free call",href:"/consultancy",color:"#FEF2F2",border:"#FCA5A5",ctaColor:"btn-primary"},
            {icon:"✉️",title:"Email us",desc:"Email us at vistavisa7@gmail.com — we respond to every email within 24 hours, 7 days a week.",cta:"Send an email",href:"mailto:vistavisa7@gmail.com",color:"#EFF6FF",border:"#BFDBFE",ctaColor:"btn-secondary"},
            {icon:"💬",title:"WhatsApp",desc:"For quick questions, send us a WhatsApp message. We typically respond within 2–4 hours during business hours.",cta:"Message on WhatsApp",href:"https://wa.me/4915901234567",color:"#ECFDF5",border:"#6EE7B7",ctaColor:"btn-secondary"},
          ].map(c=>(
            <div key={c.title} className="card" style={{background:c.color,borderColor:c.border,textAlign:"center",display:"flex",flexDirection:"column"}}>
              <div style={{fontSize:"52px",marginBottom:"16px"}}>{c.icon}</div>
              <div style={{fontFamily:PD,fontWeight:800,fontSize:"21px",color:"#0B1D3A",marginBottom:"10px"}}>{c.title}</div>
              <p style={{fontSize:"14px",color:"#6B7280",lineHeight:1.7,marginBottom:"24px",flex:1}}>{c.desc}</p>
              <a href={c.href} className={`btn ${c.ctaColor}`} style={{width:"100%",justifyContent:"center"}}>{c.cta} →</a>
            </div>
          ))}
        </div>

        {/* All services */}
        <span className="eyebrow">What we offer</span>
        <h2 className="h2" style={{marginBottom:"8px"}}>Our services at a glance</h2>
        <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 36px"}} />
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"18px",marginBottom:"56px"}}>
          {[
            {icon:"🧭",title:"Visa eligibility assessment",desc:"We review your profile (qualifications, experience, country, goal) and tell you exactly which visa you qualify for and what your chances are."},
            {icon:"📋",title:"Document checklist & review",desc:"We give you a personalised document checklist and review your prepared documents before you submit to the embassy — reducing rejection risk."},
            {icon:"🗓️",title:"Embassy appointment guidance",desc:"We guide you through booking your embassy appointment — including how to monitor VFS portals, what times slots appear, and how to prepare."},
            {icon:"💼",title:"Job application support",desc:"CV review (German-style Lebenslauf), cover letter writing, LinkedIn profile optimisation, and interview coaching for German employers."},
            {icon:"🎓",title:"University application help",desc:"We help with university selection, application essays, APS certificate guidance (Pakistan), and student visa applications."},
            {icon:"🏠",title:"Settlement support",desc:"Anmeldung guidance, Ausländerbehörde appointment prep, bank account setup, health insurance registration — your first weeks made easy."},
            {icon:"💳",title:"Banking & finance setup",desc:"We guide you through opening Wise, Commerzbank and Advanzia accounts and setting up your German financial life before arrival."},
            {icon:"🔄",title:"Qualification recognition",desc:"We guide you through the Anerkennung process — getting your degree or vocational qualification recognised in Germany."},
          ].map(s=>(
            <div key={s.title} className="card card-hover-red" style={{display:"flex",gap:"16px",alignItems:"flex-start"}}>
              <div style={{width:"48px",height:"48px",borderRadius:"14px",background:"#FEF2F2",border:"1px solid #FCA5A5",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",flexShrink:0}}>{s.icon}</div>
              <div>
                <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"15px",marginBottom:"6px"}}>{s.title}</div>
                <div style={{fontSize:"13.5px",color:"#6B7280",lineHeight:1.65}}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <span className="eyebrow">Common questions</span>
        <h2 className="h2" style={{marginBottom:"32px"}}>Frequently asked questions</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"18px"}}>
          {[
            {q:"How do I get a German visa appointment from Pakistan?",a:"Apply through the VFS Global portal (Pakistan) or the German Embassy Islamabad/Karachi online system. New slots typically appear at 8am and 1pm — check daily. Our premium clients get WhatsApp alerts the moment new slots open."},
            {q:"Do I need German language skills for a work visa?",a:"For the EU Blue Card and most work visas: no German is required. However, B1 German qualifies you for permanent residence after just 21 months (vs 33 months without). We recommend starting Goethe Institut A1 before you arrive."},
            {q:"What documents do I need for the EU Blue Card?",a:"Recognised university degree, employment contract (min. €50,700/yr gross, or €45,934 for shortage roles), valid passport, health insurance confirmation, Anmeldung (after arrival), biometric photos, and the completed visa application form."},
            {q:"How long does the German visa take from Bangladesh?",a:"Embassy Dhaka typically takes 10–16 weeks for work/Blue Card visas — one of the slower offices due to high demand. Student visas: 6–12 weeks. Apply as early as possible and keep monitoring for cancellation slots."},
            {q:"Can I bring my family to Germany?",a:"Yes — once you hold a German residence permit, your spouse and children can join through the Family Reunification visa. Your spouse immediately receives an unrestricted German work permit. Processing takes 12–24 weeks."},
            {q:"What is Anmeldung and when do I need it?",a:"Anmeldung is your mandatory German address registration. Do it within 14 days of arriving at your permanent flat. Bring: passport, rental contract, Wohnungsgeberbestätigung from your landlord. You'll get a Meldebescheinigung — essential for opening a bank account and visiting the Ausländerbehörde."},
            {q:"What is APS and do I need it as a Pakistani applicant?",a:"Yes — APS (Academic Evaluation Centre) certification is MANDATORY for all Pakistani degree holders applying for German student visas or skilled worker visas. Apply at APS Islamabad or Karachi. Takes 4–8 weeks and costs around PKR 15,000."},
            {q:"How do I get permanent residence in Germany?",a:"EU Blue Card holders: after 21 months with B1 German (or 33 months without). Standard skilled worker visa: after 4 years. Student → job → Blue Card path: typically 5–7 years total. You also need to pass a basic German test and have sufficient income."},
          ].map(f=>(
            <div key={f.q} className="card card-hover-red">
              <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"15px",marginBottom:"8px"}}>{f.q}</div>
              <div style={{fontSize:"13.5px",color:"#6B7280",lineHeight:1.7}}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",background:"linear-gradient(135deg,#0B1D3A,#1E3A5F)",borderRadius:"28px",padding:"56px",textAlign:"center"}}>
          <h2 style={{fontFamily:PD,fontWeight:800,color:"#fff",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",marginBottom:"12px"}}>Still have questions? We're here.</h2>
          <p style={{color:"rgba(255,255,255,.65)",fontSize:"16px",marginBottom:"28px",maxWidth:"520px",margin:"0 auto 28px"}}>Book a free 30-min consultation and get personalised answers in Urdu, Hindi, Bengali or English.</p>
          <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/consultancy" className="btn btn-primary">📅 Book free consultation</Link>
            <a href="mailto:vistavisa7@gmail.com" className="btn btn-ghost-light">✉️ Email us directly</a>
          </div>
        </div>
      </div>
    </div>
  );
}
