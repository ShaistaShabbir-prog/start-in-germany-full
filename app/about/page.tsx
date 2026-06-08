"use client";
import Link from "next/link";
const PD = '"Playfair Display",Georgia,serif';
const HERO  = "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=1400&q=80&auto=format&fit=crop";
const TEAM  = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop";

export default function AboutPage() {
  return (
    <div>
      <section style={{position:"relative",minHeight:"380px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center 30%",filter:"brightness(0.26)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.8))"}}/>
        <div className="wrap" style={{position:"relative",zIndex:1,padding:"80px 1.5rem"}}>
          <span className="eyebrow" style={{color:"#FCD34D"}}>About VisaVista</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"700px",marginBottom:"18px"}}>Built by immigrants, for immigrants — since 2019</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"580px",lineHeight:1.75}}>VisaVista was founded by Shaista Shabbir, who moved from Lahore to Berlin in 2019. She built the resource she wished had existed — honest, clear, South Asian-focused guidance for moving to Europe.</p>
        </div>
      </section>

      <section className="sec">
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"center",marginBottom:"64px"}}>
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="h2" style={{marginBottom:"16px"}}>From confusion to clarity — for 50,000+ families</h2>
            <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"0 0 24px"}}/>
            <p style={{fontSize:"15px",color:"#374151",lineHeight:1.8,marginBottom:"16px"}}>When Shaista applied for her student visa from Pakistan in 2019, she spent months trying to understand the requirements. The APS certificate, blocked accounts, degree recognition, embassy appointments — the information was scattered, confusing, and almost never written with South Asians in mind.</p>
            <p style={{fontSize:"15px",color:"#374151",lineHeight:1.8,marginBottom:"16px"}}>After successfully navigating the system and moving to Berlin, she started VisaVista as a simple blog answering the questions she had struggled with. Word spread through Pakistani and Indian WhatsApp groups, Telegram channels and Facebook communities.</p>
            <p style={{fontSize:"15px",color:"#374151",lineHeight:1.8,marginBottom:"16px"}}>By 2022, VisaVista was helping thousands of families per month. Today it covers Germany, and soon Italy, Sweden and the UK — always with the same focus: honest, practical guidance for South Asian immigrants that actually works.</p>
            <p style={{fontSize:"15px",color:"#374151",lineHeight:1.8}}>VisaVista is independent and not affiliated with any government, embassy or official body. We earn through affiliate referrals (see our <Link href="/affiliate-disclosure" style={{color:"#DC2626"}}>disclosure</Link>) and consultancy services.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px"}}>
            {[
              {n:"50,000+",l:"Families helped"},
              {n:"98%",l:"Visa success rate"},
              {n:"4",l:"European countries"},
              {n:"3",l:"Languages: Urdu, Hindi, Bengali"},
              {n:"2019",l:"Founded in Berlin"},
              {n:"24h",l:"Email response time"},
              {n:"Free",l:"First consultation"},
              {n:"100%",l:"Independent & unbiased"},
            ].map(s=>(
              <div key={s.l} style={{background:"#fff",borderRadius:"14px",padding:"18px",border:"1px solid #E5E7EB",textAlign:"center",transition:"all .2s"}}
                onMouseOver={e=>{e.currentTarget.style.borderColor="#FCA5A5";e.currentTarget.style.boxShadow="0 6px 20px rgba(220,38,38,.08)";}}
                onMouseOut={e=>{e.currentTarget.style.borderColor="#E5E7EB";e.currentTarget.style.boxShadow="none";}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"26px",color:"#DC2626"}}>{s.n}</div>
                <div style={{fontSize:"12px",color:"#6B7280",marginTop:"4px",lineHeight:1.4}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <span className="eyebrow">Our team</span>
        <h2 className="h2" style={{marginBottom:"8px"}}>Meet the VisaVista experts</h2>
        <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 36px"}}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"22px",marginBottom:"56px"}}>
          {[
            {av:"SS",n:"Shaista Shabbir",role:"Founder & Lead Consultant",origin:"🇵🇰 Lahore → 🇩🇪 Berlin",bio:"Moved from Pakistan to Germany in 2019 on a student visa. Completed her Masters at TU Berlin. Navigated the Blue Card process herself and has since personally helped over 10,000 South Asians with their visa applications.",langs:"Urdu · Punjabi · English · German (B2)",spec:"Pakistan-Germany immigration · EU Blue Card · Degree recognition",c:"#DC2626"},
            {av:"AH",n:"Arjun Hegde",role:"India & Engineering Specialist",origin:"🇮🇳 Bengaluru → 🇩🇪 Munich",bio:"Senior software engineer at a Munich tech company. 6 years in Germany's IT sector. Expert on the EU Blue Card for IT professionals, Indian degree recognition (MEA Apostille), and navigating the Ausländerbehörde in Bavaria.",langs:"Hindi · Kannada · English · German (C1)",spec:"India-Germany IT careers · Blue Card · Munich/Bavaria process",c:"#0D9488"},
            {av:"NK",n:"Nadia Khan",role:"Student Visa & Ausbildung Specialist",origin:"🇵🇰 Karachi → 🇩🇪 Hamburg",bio:"Completed her MSc in Economics at the University of Hamburg. Specialises in student visa applications, APS certificate guidance, blocked accounts, Studienkolleg pathways and Ausbildung applications for South Asians.",langs:"Urdu · Sindhi · English · German (C1)",spec:"Student visas · Ausbildung · APS certificate (Pakistan)",c:"#1D4ED8"},
          ].map(t=>(
            <div key={t.n} style={{background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:"22px",padding:"28px 24px",textAlign:"center",transition:"all .22s"}}
              onMouseOver={e=>{e.currentTarget.style.borderColor="#FCA5A5";e.currentTarget.style.boxShadow="0 12px 36px rgba(220,38,38,.1)";}}
              onMouseOut={e=>{e.currentTarget.style.borderColor="#E5E7EB";e.currentTarget.style.boxShadow="none";}}>
              <div style={{width:"72px",height:"72px",borderRadius:"50%",background:t.c,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",fontWeight:800,color:"#fff",margin:"0 auto 16px",fontFamily:PD,boxShadow:`0 6px 18px ${t.c}44`}}>{t.av}</div>
              <div style={{fontFamily:PD,fontWeight:800,fontSize:"18px",color:"#0B1D3A",marginBottom:"3px"}}>{t.n}</div>
              <div style={{fontSize:"13px",fontWeight:700,color:"#DC2626",marginBottom:"4px"}}>{t.role}</div>
              <div style={{fontSize:"12px",color:"#9CA3AF",marginBottom:"14px"}}>{t.origin}</div>
              <p style={{fontSize:"13px",color:"#6B7280",lineHeight:1.65,marginBottom:"14px",textAlign:"left"}}>{t.bio}</p>
              <div style={{background:"#F9FAFB",borderRadius:"10px",padding:"10px 12px",textAlign:"left"}}>
                <div style={{fontSize:"11px",fontWeight:700,color:"#9CA3AF",textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:"4px"}}>Languages</div>
                <div style={{fontSize:"12.5px",color:"#374151",marginBottom:"8px"}}>{t.langs}</div>
                <div style={{fontSize:"11px",fontWeight:700,color:"#9CA3AF",textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:"4px"}}>Specialisation</div>
                <div style={{fontSize:"12.5px",color:"#374151"}}>{t.spec}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency */}
        <div style={{background:"#FEF2F2",borderRadius:"24px",padding:"40px 44px",border:"1.5px solid #FCA5A5",marginBottom:"32px"}}>
          <h2 className="h2" style={{marginBottom:"8px"}}>Our commitment to transparency</h2>
          <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 24px"}}/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"36px"}}>
            <div>
              <h3 style={{fontWeight:700,color:"#0B1D3A",fontSize:"16px",marginBottom:"12px"}}>🔗 Affiliate links</h3>
              <p style={{fontSize:"14px",color:"#374151",lineHeight:1.75,marginBottom:"12px"}}>VisaVista uses affiliate links for banking products (Wise, Commerzbank, Advanzia). When you open an account through our links, you may receive a bonus AND we earn a small commission — at no extra cost to you whatsoever.</p>
              <p style={{fontSize:"14px",color:"#374151",lineHeight:1.75}}>We only recommend products we genuinely use and trust. Our editorial content is 100% independent — never influenced by any payment.</p>
            </div>
            <div>
              <h3 style={{fontWeight:700,color:"#0B1D3A",fontSize:"16px",marginBottom:"12px"}}>⚖️ What we are (and aren't)</h3>
              <ul style={{listStyle:"none"}}>
                {[
                  ["✅","Independent immigration guidance resource"],
                  ["✅","Personal experience of navigating the German system"],
                  ["✅","Updated regularly with official government sources"],
                  ["❌","Not affiliated with the German government or embassies"],
                  ["❌","Not a registered law firm or legal advisory"],
                  ["❌","Not a replacement for official government websites"],
                ].map(([icon,text])=>(
                  <li key={text} style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"8px"}}>
                    <span style={{flexShrink:0,fontSize:"14px"}}>{icon}</span>
                    <span style={{fontSize:"13.5px",color:"#374151"}}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"18px",padding:"28px 32px"}}>
          <h3 style={{fontWeight:700,color:"#0B1D3A",fontSize:"15px",marginBottom:"10px"}}>📋 Legal disclaimer</h3>
          <p style={{fontSize:"13.5px",color:"#6B7280",lineHeight:1.75}}>All content on VisaVista is provided for informational purposes only. Immigration laws, visa requirements, salary thresholds and processing times change frequently. Always verify the latest requirements directly with the German Embassy, VFS Global, the Federal Foreign Office (Auswärtiges Amt) or a qualified immigration lawyer before making any decisions. VisaVista accepts no liability for decisions made based on the information on this website. Data last verified: June 2026.</p>
        </div>
      </section>
    </div>
  );
}
