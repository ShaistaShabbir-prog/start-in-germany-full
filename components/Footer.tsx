"use client";
import Link from "next/link";
const PD='"Playfair Display",Georgia,serif';
const WA="/contact?text="+encodeURIComponent("Hi VisaVista! I need help with my visa.");

export default function Footer(){
  return(
    <footer style={{background:"#0B1D3A",color:"#fff"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto",padding:"56px 1.5rem 0"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:"28px",paddingBottom:"48px",borderBottom:"1px solid rgba(255,255,255,.08)"}}>

          {/* Brand */}
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"11px",marginBottom:"14px"}}>
              <div style={{width:"40px",height:"40px",borderRadius:"12px",background:"linear-gradient(135deg,#DC2626,#991B1B)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(220,38,38,.4)"}}>
                <span style={{fontFamily:PD,fontWeight:900,fontSize:"18px",color:"#fff"}}>V</span>
              </div>
              <div>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"20px",letterSpacing:"-0.02em",lineHeight:1}}>VisaVista</div>
                <div style={{fontSize:"9.5px",color:"rgba(255,255,255,.35)",letterSpacing:"0.1em",textTransform:"uppercase",marginTop:"2px"}}>DE · IT · SE · UK</div>
              </div>
            </div>
            <p style={{fontSize:"13px",color:"rgba(255,255,255,.45)",lineHeight:1.75,maxWidth:"260px",marginBottom:"16px"}}>Trusted immigration guidance for students and professionals from Pakistan, India, Bangladesh &amp; Afghanistan moving to Europe. Independent — not affiliated with any government.</p>
            <div style={{display:"flex",gap:"6px",marginBottom:"16px"}}>
              {["🇵🇰","🇮🇳","🇧🇩","🇦🇫"].map(f=><span key={f} style={{fontSize:"22px"}}>{f}</span>)}
            </div>
            {/* WhatsApp CTA */}
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"10px 16px",borderRadius:"10px",background:"#25D366",color:"#fff",textDecoration:"none",fontSize:"13px",fontWeight:700,boxShadow:"0 3px 10px rgba(37,211,102,.3)"}}>
              💬 WhatsApp: [CONTACT FORM]
            </a>
          </div>

          {/* Destinations */}
          <div>
            <div style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(255,255,255,.3)",marginBottom:"14px"}}>Destinations</div>
            {[{href:"/visa",l:"🇩🇪 Germany"},{href:"/italy",l:"🇮🇹 Italy"},{href:"/sweden",l:"🇸🇪 Sweden"},{href:"/uk",l:"🇬🇧 United Kingdom"},{href:"/canada",l:"🇨🇦 Canada"},{href:"/australia",l:"🇦🇺 Australia"},{href:"/spain",l:"🇪🇸 Spain"},{href:"/malaysia",l:"🇲🇾 Malaysia"},{href:"/china",l:"🇨🇳 China"}].map(l=>(
              <Link key={l.href} href={l.href} style={{display:"block",fontSize:"13.5px",color:"rgba(255,255,255,.5)",textDecoration:"none",marginBottom:"8px"}}>{l.l}</Link>
            ))}
          </div>

          {/* Resources */}
          <div>
            <div style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(255,255,255,.3)",marginBottom:"14px"}}>Resources</div>
            {[{href:"/work",l:"Work in Germany"},{href:"/study",l:"Study & Ausbildung"},{href:"/living",l:"Living in Germany"},{href:"/finances",l:"💳 Banking"},{href:"/appointment",l:"🗓️ Appointments"},{href:"/blog",l:"📖 Blog & Guides"}].map(l=>(
              <Link key={l.href} href={l.href} style={{display:"block",fontSize:"13.5px",color:"rgba(255,255,255,.5)",textDecoration:"none",marginBottom:"8px"}}>{l.l}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(255,255,255,.3)",marginBottom:"14px"}}>Services</div>
            {[{href:"/consultancy",l:"📅 Consultancy"},{href:"/contact",l:"📩 Contact us"},{href:"/service",l:"FAQ & Help"},{href:"/about",l:"About VisaVista"}].map(l=>(
              <Link key={l.href} href={l.href} style={{display:"block",fontSize:"13.5px",color:"rgba(255,255,255,.5)",textDecoration:"none",marginBottom:"8px"}}>{l.l}</Link>
            ))}
          </div>

          {/* Banking */}
          <div>
            <div style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(255,255,255,.3)",marginBottom:"14px"}}>Banking Picks</div>
            {[
              {href:"https://wise.com/invite/in/shaistak5",l:"🌐 Wise Account",ext:true},
              {href:"https://www.commerzbank.de/girokonto-antrag?path=/pk/de/Abschluss/GD51_Girokonto_DD_MCD_TGK_50Start_KwK&x-werbecode=PNGHRA",l:"🏦 Commerzbank 50€",ext:true},
              {href:"https://refer.gebuhrenfrei.com/shaistas-45",l:"💳 Advanzia Card",ext:true},
              {href:"/affiliate-disclosure",l:"Affiliate Disclosure",ext:false},
            ].map(l=>(
              <a key={l.l} href={l.href} target={l.ext?"_blank":undefined} rel={l.ext?"noopener noreferrer":undefined} style={{display:"block",fontSize:"13.5px",color:"rgba(255,255,255,.5)",textDecoration:"none",marginBottom:"8px"}}>{l.l}</a>
            ))}
            <div style={{marginTop:"12px",fontSize:"12.5px",color:"rgba(255,255,255,.35)"}}>
              ✉️ <a href="mailto:contact@start-in-germany.com" style={{color:"#FCD34D",textDecoration:"none"}}>contact@start-in-germany.com</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{padding:"16px 0",textAlign:"center",fontSize:"12px",color:"rgba(255,255,255,.25)"}}>
        © {new Date().getFullYear()} VisaVista — Independent immigration guidance. Not affiliated with any government or embassy.
        <span style={{margin:"0 12px"}}>·</span>
        <Link href="/imprint" style={{color:"rgba(255,255,255,.25)",textDecoration:"none"}}>Imprint</Link>
        <span style={{margin:"0 8px"}}>·</span>
        <Link href="/privacy" style={{color:"rgba(255,255,255,.25)",textDecoration:"none"}}>Privacy</Link>
        <span style={{margin:"0 8px"}}>·</span>
        <Link href="/affiliate-disclosure" style={{color:"rgba(255,255,255,.25)",textDecoration:"none"}}>Affiliate Disclosure</Link>
      </div>
    
        <p style={{fontSize:"11px",color:"#9CA3AF",textAlign:"center",marginTop:"16px"}}>© 2026 Shaista Shabbir · VisaVista · All Rights Reserved · Proprietary Software</p>
</footer>
  );
}
