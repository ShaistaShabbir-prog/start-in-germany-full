import Link from "next/link";

const PD = '"Playfair Display",Georgia,serif';

export default function ServicePage() {
  return (
    <div>
      <section style={{background:"#0B1D3A",padding:"72px 1.5rem"}}>
        <div className="wrap">
          <span className="eyebrow" style={{color:"#FCD34D"}}>🛠 Services & Contact</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"700px",marginBottom:"16px"}}>How can we help you today?</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.7)",maxWidth:"560px",lineHeight:1.7}}>Reach out via email, WhatsApp or book a consultation. We speak Urdu, Hindi, Bengali and English.</p>
        </div>
      </section>

      <section className="sec">
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px",marginBottom:"56px"}}>
          {[
            {icon:"📅",title:"Book consultation",desc:"1-on-1 expert call in your language. Free starter session available.",cta:"Book now",href:"/consultancy",color:"#FEF2F2",border:"#FCA5A5"},
            {icon:"✉️",title:"Email us",desc:"Email shaista.s.shabbir@gmail.com and we'll respond within 24 hours.",cta:"Send email",href:"mailto:shaista.s.shabbir@gmail.com",color:"#EFF6FF",border:"#BFDBFE"},
            {icon:"💬",title:"WhatsApp",desc:"For quick questions, message us on WhatsApp — typically responds within 2–4 hours.",cta:"Open WhatsApp",href:"https://wa.me/491234567890",color:"#ECFDF5",border:"#6EE7B7"},
          ].map(c=>(
            <div key={c.title} className="card" style={{background:c.color,borderColor:c.border,textAlign:"center"}}>
              <div style={{fontSize:"48px",marginBottom:"16px"}}>{c.icon}</div>
              <div style={{fontFamily:PD,fontWeight:800,fontSize:"20px",color:"#0B1D3A",marginBottom:"8px"}}>{c.title}</div>
              <p style={{fontSize:"14px",color:"#6B7280",lineHeight:1.65,marginBottom:"20px"}}>{c.desc}</p>
              <a href={c.href} className="btn btn-primary btn-sm" style={{display:"inline-flex"}}>{c.cta} →</a>
            </div>
          ))}
        </div>

        <span className="eyebrow">Common questions</span>
        <h2 className="h2" style={{marginBottom:"32px"}}>Quick answers</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
          {[
            {q:"How do I get a German visa appointment from Pakistan?",a:"Apply through the VFS Global portal or the German Embassy Islamabad/Karachi online portal. Slots fill up fast — we recommend monitoring daily at 8am and 1pm. Our premium clients get real-time alerts."},
            {q:"Do I need German language skills for a work visa?",a:"For the EU Blue Card and most work visas: no German required, but A1–B1 speeds up the process and helps you qualify for permanent residence faster (21 months with B1 vs 33 months without)."},
            {q:"What documents do I need for the Blue Card?",a:"Recognised degree, employment contract (€50,700+/yr), valid passport, health insurance confirmation, passport photos, residence registration (after arrival) and visa application form."},
            {q:"How long does the German visa take from Bangladesh?",a:"From Bangladesh: typically 10–14 weeks for work/Blue Card visas, 6–12 weeks for student visas. Embassy Dhaka is one of the slower processing offices — apply well in advance."},
            {q:"Can I bring my family to Germany?",a:"Yes — once you have a residence permit, your spouse and children can join via the Family Reunification visa. Spouses get an unrestricted work permit. Processing takes 12–24 weeks."},
            {q:"What is Anmeldung and when do I need to do it?",a:"Anmeldung is your German address registration. You must do it within 14 days of arriving at your permanent address. You need a flat (with landlord's Wohnungsgeberbestätigung form) to register."},
          ].map(f=>(
            <div key={f.q} className="card card-hover-red">
              <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"15px",marginBottom:"8px"}}>{f.q}</div>
              <div style={{fontSize:"13.5px",color:"#6B7280",lineHeight:1.65}}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
