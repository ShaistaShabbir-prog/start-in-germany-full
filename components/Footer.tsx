"use client";
import Link from "next/link";

const PD = '"Playfair Display",Georgia,serif';

export default function Footer() {
  return (
    <footer style={{background:"#0B1D3A",color:"#fff"}}>
      <div className="wrap" style={{padding:"64px 1.5rem 0"}}>
        <div style={{display:"grid",gridTemplateColumns:"2.5fr 1fr 1fr 1.2fr",gap:"48px",paddingBottom:"52px",borderBottom:"1px solid rgba(255,255,255,.08)"}}>

          {/* Brand */}
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"}}>
              <div style={{width:"42px",height:"42px",borderRadius:"14px",background:"linear-gradient(135deg,#DC2626,#991B1B)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(220,38,38,.4)"}}>
                <span style={{fontFamily:PD,fontWeight:900,fontSize:"20px",color:"#fff"}}>V</span>
              </div>
              <div>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"22px",letterSpacing:"-0.02em",lineHeight:1}}>VisaVista</div>
                <div style={{fontSize:"10px",color:"rgba(255,255,255,.35)",letterSpacing:"0.1em",textTransform:"uppercase",marginTop:"2px"}}>Europe Immigration Guide</div>
              </div>
            </div>
            <p style={{fontSize:"13.5px",color:"rgba(255,255,255,.45)",lineHeight:1.75,maxWidth:"300px",marginBottom:"20px"}}>
              Trusted, independent immigration guidance for students and professionals from Pakistan, India, Bangladesh &amp; Afghanistan moving to Germany, Italy, Sweden and the UK. Not affiliated with any government or embassy.
            </p>
            <div style={{display:"flex",gap:"8px",marginBottom:"18px"}}>
              {["🇵🇰","🇮🇳","🇧🇩","🇦🇫"].map(f=>(
                <span key={f} style={{fontSize:"22px",filter:"drop-shadow(0 1px 3px rgba(0,0,0,.3))"}}>{f}</span>
              ))}
            </div>
            <div style={{display:"flex",gap:"8px"}}>
              {[
                {l:"in",href:"https://linkedin.com"},
                {l:"ig",href:"https://instagram.com"},
                {l:"yt",href:"https://youtube.com"},
                {l:"𝕏", href:"https://twitter.com"},
              ].map(s=>(
                <a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer" style={{width:"34px",height:"34px",borderRadius:"50%",background:"rgba(255,255,255,.08)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",color:"rgba(255,255,255,.45)",textDecoration:"none",transition:"all .15s"}}
                  onMouseOver={e=>{e.currentTarget.style.background="#DC2626";e.currentTarget.style.color="#fff";}}
                  onMouseOut={e=>{e.currentTarget.style.background="rgba(255,255,255,.08)";e.currentTarget.style.color="rgba(255,255,255,.45)";}}>
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <div style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(255,255,255,.3)",marginBottom:"16px"}}>Destinations</div>
            {[
              {href:"/visa",l:"🇩🇪 Germany"},
              {href:"/",l:"🇮🇹 Italy (soon)"},
              {href:"/",l:"🇸🇪 Sweden (soon)"},
              {href:"/",l:"🇬🇧 UK (soon)"},
            ].map(l=><Link key={l.l} href={l.href} className="flink">{l.l}</Link>)}
          </div>

          {/* Resources */}
          <div>
            <div style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(255,255,255,.3)",marginBottom:"16px"}}>Resources</div>
            {[
              {href:"/work",l:"Work in Germany"},
              {href:"/study",l:"Study & Ausbildung"},
              {href:"/visa",l:"Visa & Residence"},
              {href:"/living",l:"Living in Germany"},
              {href:"/finances",l:"💳 Banking"},
              {href:"/appointment",l:"🗓️ Embassy Appointments"},
              {href:"/consultancy",l:"📅 Consultancy"},
            ].map(l=><Link key={l.href} href={l.href} className="flink">{l.l}</Link>)}
          </div>

          {/* Contact & Legal */}
          <div>
            <div style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(255,255,255,.3)",marginBottom:"16px"}}>Contact & Legal</div>
            {[
              {href:"/about",l:"About VisaVista"},
              {href:"/service",l:"Contact & FAQ"},
              {href:"/consultancy",l:"Book Consultation"},
              {href:"/affiliate-disclosure",l:"Affiliate Disclosure"},
            ].map(l=><Link key={l.href} href={l.href} className="flink">{l.l}</Link>)}

            <div style={{marginTop:"18px",padding:"16px 18px",background:"rgba(220,38,38,.15)",borderRadius:"14px",border:"1px solid rgba(220,38,38,.25)"}}>
              <div style={{fontSize:"12px",fontWeight:700,color:"#FCA5A5",marginBottom:"6px"}}>📅 Free consultation</div>
              <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginBottom:"12px",lineHeight:1.5}}>Urdu · Hindi · Bengali · English</div>
              <a href="mailto:shaista.s.shabbir@gmail.com" style={{display:"block",fontSize:"12px",color:"#FCD34D",textDecoration:"underline",marginBottom:"6px"}}>shaista.s.shabbir@gmail.com</a>
              <Link href="/consultancy" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",background:"#DC2626",color:"#fff",textDecoration:"none",fontSize:"12px",fontWeight:700,padding:"8px",borderRadius:"9px",marginTop:"8px"}}>
                Book free call →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{padding:"20px 1.5rem",borderTop:"1px solid rgba(255,255,255,.06)"}}>
        <div className="wrap" style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
          <div style={{fontSize:"12px",color:"rgba(255,255,255,.25)"}}>
            © {new Date().getFullYear()} VisaVista — Independent immigration guidance. Not affiliated with any government, embassy or official body.
          </div>
          <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
            {[{href:"/about",l:"About"},{href:"/affiliate-disclosure",l:"Affiliate Disclosure"},{href:"/service",l:"Contact"}].map(l=>(
              <Link key={l.href} href={l.href} style={{fontSize:"12px",color:"rgba(255,255,255,.25)",textDecoration:"none",transition:"color .15s"}}
                onMouseOver={e=>{e.currentTarget.style.color="rgba(255,255,255,.6)";}}
                onMouseOut={e=>{e.currentTarget.style.color="rgba(255,255,255,.25)";}}>
                {l.l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
