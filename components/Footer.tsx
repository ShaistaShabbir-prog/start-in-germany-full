import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{background:"#1D3557",marginTop:"0",color:"#fff"}}>
      <div className="container-narrow" style={{padding:"56px 1.25rem 0"}}>
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"40px",paddingBottom:"48px",borderBottom:"1px solid rgba(255,255,255,0.1)"}}>

          {/* Brand */}
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"10px",fontFamily:"var(--font-display)",fontWeight:800,fontSize:"18px",marginBottom:"14px"}}>
              <div style={{width:"34px",height:"34px",borderRadius:"9px",background:"#E63946",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:900,color:"#fff"}}>S</div>
              <span>StartinGermany</span>
            </div>
            <p style={{fontSize:"13.5px",color:"rgba(255,255,255,0.5)",lineHeight:1.7,maxWidth:"280px",marginBottom:"18px"}}>
              Independent, friendly guidance for moving, working and studying in Germany. Not affiliated with the German government.
            </p>
            <div style={{display:"flex",gap:"8px"}}>
              {["in","ig","yt","𝕏"].map(s => (
                <div key={s} style={{
                  width:"34px",height:"34px",borderRadius:"50%",background:"rgba(255,255,255,0.1)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:"12px",color:"rgba(255,255,255,0.55)",cursor:"pointer",transition:"all 0.2s"
                }}>{s}</div>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <div style={{fontSize:"12px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(255,255,255,0.4)",marginBottom:"14px"}}>Explore</div>
            {[
              {href:"/work",label:"Work in Germany"},
              {href:"/study",label:"Study & Training"},
              {href:"/visa",label:"Visa & Residence"},
              {href:"/living",label:"Living in Germany"},
              {href:"/finances",label:"💳 Banking & Money"},
            ].map(l => (
              <Link key={l.href} href={l.href} style={{display:"block",fontSize:"13.5px",color:"rgba(255,255,255,0.55)",textDecoration:"none",marginBottom:"8px",transition:"color 0.15s"}}>{l.label}</Link>
            ))}
          </div>

          {/* Banking */}
          <div>
            <div style={{fontSize:"12px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(255,255,255,0.4)",marginBottom:"14px"}}>Banking Picks</div>
            {[
              {href:"https://wise.com/invite/in/shaistak5",label:"🌐 Wise Account",ext:true},
              {href:"https://www.commerzbank.de/girokonto-antrag?path=/pk/de/Abschluss/GD51_Girokonto_DD_MCD_TGK_50Start_KwK&x-werbecode=PNGHRA",label:"🏦 Commerzbank (50€)",ext:true},
              {href:"https://refer.gebuhrenfrei.com/shaistas-45",label:"💳 Advanzia Card",ext:true},
              {href:"/affiliate-disclosure",label:"Affiliate Disclosure",ext:false},
            ].map(l => (
              <Link key={l.label} href={l.href} target={l.ext?"_blank":undefined} rel={l.ext?"noopener noreferrer":undefined}
                style={{display:"block",fontSize:"13.5px",color:"rgba(255,255,255,0.55)",textDecoration:"none",marginBottom:"8px"}}>{l.label}</Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <div style={{fontSize:"12px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(255,255,255,0.4)",marginBottom:"14px"}}>Legal & Contact</div>
            {[
              {href:"/imprint",label:"Imprint (Impressum)"},
              {href:"/privacy",label:"Privacy Policy"},
              {href:"/about",label:"About us"},
              {href:"/service",label:"Service & FAQ"},
            ].map(l => (
              <Link key={l.href} href={l.href} style={{display:"block",fontSize:"13.5px",color:"rgba(255,255,255,0.55)",textDecoration:"none",marginBottom:"8px"}}>{l.label}</Link>
            ))}
            <div style={{marginTop:"12px",fontSize:"13px",color:"rgba(255,255,255,0.45)"}}>
              Questions?{" "}
              <a href="mailto:shaista.s.shabbir@gmail.com" style={{color:"#F7C948",textDecoration:"underline"}}>
                shaista.s.shabbir@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{padding:"16px 0",textAlign:"center",fontSize:"12px",color:"rgba(255,255,255,0.28)"}}>
        © {new Date().getFullYear()} Start in Germany — All rights reserved. Independent, not government-affiliated.
      </div>
    </footer>
  );
}
