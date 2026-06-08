import Link from "next/link";
const PD = '"Playfair Display",Georgia,serif';

export default function AppointmentPage() {
  return (
    <div>
      <section style={{background:"linear-gradient(135deg,#0B1D3A,#1E3A5F)",padding:"72px 1.5rem",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"-80px",right:"-60px",width:"350px",height:"350px",borderRadius:"50%",background:"rgba(220,38,38,.12)"}} />
        <div className="wrap" style={{position:"relative",zIndex:1}}>
          <span className="eyebrow" style={{color:"#FCD34D"}}>🗓️ Embassy Appointments</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"720px",marginBottom:"16px"}}>How to book a German embassy appointment</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.7)",maxWidth:"580px",lineHeight:1.75}}>Getting a German visa appointment from Pakistan, India or Bangladesh can take weeks. This guide shows you exactly how to monitor, book and prepare — updated for 2026.</p>
        </div>
      </section>

      <section className="sec">
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px",marginBottom:"48px"}}>
          <div>
            <span className="eyebrow">Step-by-step guide</span>
            <h2 className="h2" style={{marginBottom:"20px"}}>Booking your embassy appointment</h2>
            {[
              {n:1,title:"Use the official portal",desc:"German embassy appointments are booked at service2.diplo.de (Pakistan) or the Consular Services Portal. Never use third-party services — it's always free."},
              {n:2,title:"Check early morning & lunch",desc:"New slots are typically released at 8:00am and 1:00pm local time. Refresh the portal at exactly these times. Set a daily alarm."},
              {n:3,title:"Use VisaBot alerts",desc:"Use services like Visa Scheduler or VisaBot.io to receive WhatsApp/email alerts when slots appear. Our premium clients get our own alert system."},
              {n:4,title:"Have all details ready",desc:"When a slot appears, you have 2–3 minutes to complete booking before it's gone. Have passport details, address, and all info pre-filled."},
              {n:5,title:"Book multiple embassies",desc:"For Pakistan: apply at Islamabad or Karachi. Sometimes one city has shorter waits than the other. You can only submit at one, but check both."},
              {n:6,title:"Prepare your documents",desc:"Show up on time with all documents in the exact order specified in the checklist. Missing one document = reschedule. Use our checklist."},
            ].map(s=>(
              <div key={s.n} style={{display:"flex",gap:"16px",marginBottom:"22px"}}>
                <div style={{width:"34px",height:"34px",borderRadius:"10px",background:"#DC2626",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:PD,fontWeight:800,fontSize:"14px",flexShrink:0}}>{s.n}</div>
                <div>
                  <div style={{fontWeight:700,fontSize:"15px",color:"#0B1D3A",marginBottom:"5px"}}>{s.title}</div>
                  <div style={{fontSize:"13.5px",color:"#6B7280",lineHeight:1.65}}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:"18px"}}>
            <h2 className="h2" style={{marginBottom:"8px"}}>Wait times by country (2026)</h2>
            {[
              {flag:"🇵🇰",country:"Pakistan (Islamabad)",time:"8–14 weeks",note:"VFS Global manages appointments. Very high demand — start early."},
              {flag:"🇵🇰",country:"Pakistan (Karachi)",time:"6–12 weeks",note:"Often slightly shorter wait than Islamabad. Worth checking both."},
              {flag:"🇮🇳",country:"India (Delhi)",time:"4–8 weeks",note:"Multiple consulates in India help distribute demand."},
              {flag:"🇮🇳",country:"India (Mumbai / Chennai)",time:"3–6 weeks",note:"Mumbai and Chennai often faster than Delhi for some visa types."},
              {flag:"🇧🇩",country:"Bangladesh (Dhaka)",time:"10–16 weeks",note:"One embassy for the whole country — slots are scarce. Monitor daily."},
              {flag:"🇦🇫",country:"Afghanistan",time:"Varies",note:"Apply via nearest third-country embassy if not in Afghanistan."},
            ].map(c=>(
              <div key={c.country} style={{background:"#fff",borderRadius:"16px",padding:"16px 20px",border:"1px solid #E5E7EB",display:"flex",gap:"14px",alignItems:"flex-start"}}>
                <span style={{fontSize:"24px",flexShrink:0}}>{c.flag}</span>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"14px",marginBottom:"3px"}}>{c.country}</div>
                  <div style={{fontSize:"12px",color:"#DC2626",fontWeight:700,marginBottom:"4px"}}>⏱ Avg. wait: {c.time}</div>
                  <div style={{fontSize:"12.5px",color:"#6B7280",lineHeight:1.5}}>{c.note}</div>
                </div>
              </div>
            ))}

            <div style={{background:"#FEF2F2",border:"1px solid #FCA5A5",borderRadius:"16px",padding:"20px 22px"}}>
              <div style={{fontWeight:700,color:"#B91C1C",marginBottom:"8px"}}>💡 Pro tip</div>
              <p style={{fontSize:"13.5px",color:"#374151",lineHeight:1.65}}>Our Premium Consultancy clients get access to our appointment alert system — we notify you via WhatsApp the moment a slot appears at your preferred embassy.</p>
              <Link href="/consultancy" className="btn btn-primary btn-sm" style={{marginTop:"14px",display:"inline-flex"}}>Get premium access →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
