import Link from "next/link";
const PD = '"Playfair Display",Georgia,serif';
const HERO_STUDY  = "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1400&q=80&auto=format&fit=crop";
const HERO_LIVING = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1400&q=80&auto=format&fit=crop";

export default function StudyPage() {
  return (
    <div>
      <section style={{position:"relative",minHeight:"340px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO_STUDY})`,backgroundSize:"cover",backgroundPosition:"center 30%",filter:"brightness(0.28)"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.96),rgba(11,29,58,.75))"}} />
        <div className="wrap" style={{position:"relative",zIndex:1,padding:"72px 1.5rem"}}>
          <span className="eyebrow" style={{color:"#FCD34D"}}>🎓 Study & Ausbildung</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"680px",marginBottom:"16px"}}>Study in Germany — often free, always excellent</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"560px",lineHeight:1.7}}>Most German public universities charge only a semester fee (€100–€400). Here's how to get in — and stay permanently after graduation.</p>
          <Link href="/visa" className="btn btn-primary" style={{marginTop:"24px",display:"inline-flex"}}>Check student visa requirements →</Link>
        </div>
      </section>

      <section className="sec">
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"20px",marginBottom:"48px"}}>
          {[
            {icon:"🏛️",title:"Public Universities",desc:"Most charge only €100–€400/semester admin fee. No tuition. Apply directly or via uni-assist.de. Admission requires Abitur equivalent."},
            {icon:"🔧",title:"Ausbildung (Dual Training)",desc:"Germany's famous vocational training. Paid (€600–€1,100/month), 2–3 years, leads to a permanent residence permit and a world-class qualification."},
            {icon:"📐",title:"Technical Universities (TU)",desc:"RWTH Aachen, TU Munich, TU Berlin — world top-100. Strong for engineering, CS, sciences. Huge demand for South Asian graduates."},
            {icon:"💼",title:"18-Month Job Seeker Visa",desc:"After graduation from a German university, you automatically get an 18-month visa to find work. Most stay on a Blue Card."},
          ].map(c=>(
            <div key={c.title} className="card card-hover-red">
              <div style={{fontSize:"36px",marginBottom:"12px"}}>{c.icon}</div>
              <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"17px",marginBottom:"8px"}}>{c.title}</div>
              <div style={{fontSize:"14px",color:"#6B7280",lineHeight:1.65}}>{c.desc}</div>
            </div>
          ))}
        </div>

        <div style={{background:"#FEF2F2",border:"1px solid #FCA5A5",borderRadius:"24px",padding:"36px 40px"}}>
          <h2 className="h2" style={{marginBottom:"20px"}}>🇵🇰🇮🇳🇧🇩 South Asian student checklist</h2>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            {[
              "Check admission requirements on uni-assist.de or the university website",
              "Get your degree/A-levels/F.Sc/HSC evaluated (often via APS for Pakistan/India)",
              "Apply for a Sperrkonto (blocked account) — €934/month = €11,208 needed",
              "Get German health insurance (TK, AOK, Barmer accept international students)",
              "Apply for student visa at embassy with admission letter + blocked account",
              "Book accommodation early — student dorms fill up months in advance",
              "Enrol in a German language course (B2 for German-taught programmes)",
              "Register your address (Anmeldung) within 14 days of arrival",
            ].map((item,i)=>(
              <div key={i} className="check-item">
                <span className="check-icon">✓</span>
                <span style={{fontSize:"13.5px",color:"#374151"}}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
