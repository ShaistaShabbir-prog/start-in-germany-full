"use client";
import Link from "next/link";
const PD='"Playfair Display",Georgia,serif';
export default function ImprintPage(){
  return(
    <div style={{background:"#F9FAFB"}}>
      <div style={{background:"#0B1D3A",padding:"52px 1.5rem"}}>
        <div style={{maxWidth:"800px",margin:"0 auto"}}>
          <h1 style={{fontFamily:PD,fontWeight:900,fontSize:"clamp(2rem,4vw,3rem)",color:"#fff"}}>Imprint (Impressum)</h1>
        </div>
      </div>
      <section style={{maxWidth:"800px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{background:"#fff",borderRadius:"20px",padding:"36px 40px",border:"1.5px solid #E5E7EB"}}>
          <p style={{fontSize:"13.5px",color:"#6B7280",lineHeight:1.75,marginBottom:"24px"}}>This website is operated as an independent information and consultancy service. It is not affiliated with any government body, embassy, or official immigration authority.</p>
          {[
            ["Responsible for content (§55 RStV / TMG)","VisaVista — Shaista Shabbir"],
            ["Email","shaista.s.shabbir@gmail.com"],
            ["WhatsApp","+49 159 06171828"],
            ["Disclaimer","The content on this website is for informational purposes only and does not constitute legal advice. Immigration laws change frequently — always verify requirements directly with official sources."],
            ["Liability for content","We make every effort to keep information accurate and up to date. However, we accept no liability for the completeness, accuracy, or timeliness of the content provided."],
            ["Affiliate links","This site uses affiliate links for banking products (Wise, Commerzbank, Advanzia). See our Affiliate Disclosure page for full details."],
          ].map(([k,v])=>(
            <div key={k} style={{marginBottom:"20px"}}>
              <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"14px",marginBottom:"5px"}}>{k}</div>
              <div style={{fontSize:"13.5px",color:"#374151",lineHeight:1.7}}>{v}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
