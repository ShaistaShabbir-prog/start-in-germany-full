"use client";

export default function AffiliateDisclosurePage() {
  const PS = "'Inter',system-ui,sans-serif";
  const PD = "'Playfair Display',Georgia,serif";
  const s = (styles: object) => styles as React.CSSProperties;

  return (
    <div style={s({background:"#0a0d14",minHeight:"100vh",color:"#f1f5f9",fontFamily:PS})}>
      <div style={s({background:"linear-gradient(135deg,#0B1D3A,#111520)",borderBottom:"1px solid rgba(255,255,255,.07)",padding:"40px 24px"})}>
        <div style={s({maxWidth:"760px",margin:"0 auto"})}>
          <a href="/" style={s({fontSize:".82rem",color:"#64748b",textDecoration:"none",display:"block",marginBottom:"16px"})}>← VisaVista</a>
          <h1 style={s({fontFamily:PD,fontSize:"2rem",fontWeight:900,marginBottom:"8px"})}>🤝 Affiliate Disclosure</h1>
          <p style={s({color:"#64748b",fontSize:".9rem"})}>How VisaVista earns revenue and recommends partner services</p>
          <div style={s({display:"inline-block",background:"rgba(255,204,2,.1)",border:"1px solid rgba(255,204,2,.2)",borderRadius:"8px",padding:"4px 12px",fontSize:".75rem",color:"#FFCC02",marginTop:"12px"})}>
            Last updated: 13 June 2026
          </div>
        </div>
      </div>

      <div style={s({maxWidth:"760px",margin:"0 auto",padding:"36px 24px 80px"})}>

        <div style={s({background:"rgba(255,204,2,.06)",border:"1px solid rgba(255,204,2,.2)",borderRadius:"12px",padding:"16px 18px",marginBottom:"28px"})}>
          <p style={s({fontSize:".875rem",color:"#f1f5f9",lineHeight:1.7})}>
            <strong>In plain language:</strong> VisaVista links to financial services (Commerzbank, Advanzia, Wise). If you sign up through our links, we may earn a referral reward. This does not change the price or product you receive. We only recommend services we have personally used and verified.
          </p>
        </div>

        {[
          {
            title:"What is an affiliate/referral link?",
            body:"When you click a link to Commerzbank, Advanzia, or Wise on VisaVista and complete a sign-up, the partner company may pay us a small commission or referral fee. This is at no cost to you — the product price, features, and terms are identical whether you arrive through our link or visit the site directly."
          },
          {
            title:"Which partners do we work with?",
            body:null,
            partners:[
              {name:"Commerzbank",desc:"German bank account. Code PNGHRA gives you €50 starting credit. We receive a referral reward when you open a qualifying account.",url:"https://www.commerzbank.de"},
              {name:"Advanzia Mastercard Gold",desc:"Free German credit card (no annual fee). We receive a referral reward when you apply through our link.",url:"https://www.advanzia.com"},
              {name:"Wise",desc:"International money transfer. We receive a small referral reward when you complete your first transfer through our invite link.",url:"https://wise.com"},
            ]
          },
          {
            title:"How we select partners",
            body:"We only feature partners that: (1) we have personally used and found useful for immigrants in Germany, (2) offer genuinely good value compared to alternatives, (3) do not charge hidden fees, and (4) are regulated financial institutions. We do not accept payment to review or rank products we have not tested."
          },
          {
            title:"Affiliate income and editorial independence",
            body:"Affiliate income helps fund the free guides, translations, and tools on VisaVista. It does not influence our editorial content. Visa requirements, salary thresholds, scholarship deadlines, and legal information are sourced from official German authorities and presented accurately regardless of any commercial relationships."
          },
          {
            title:"How to identify partner recommendations",
            body:'All affiliate or partner content on VisaVista is labelled with one of: "Partner recommendation", "Our recommendation", "Affiliate" or "Sponsored". The rel="noopener sponsored" attribute is also present on affiliate links in the source code.'
          },
          {
            title:"Your rights",
            body:"You are never obligated to use our affiliate links. You can visit Commerzbank, Advanzia, or Wise directly at their official websites and receive the same products and terms. Using our links is entirely voluntary and helps support free immigration guidance."
          },
        ].map(section => (
          <div key={section.title} style={s({marginBottom:"28px"})}>
            <h2 style={s({fontFamily:PD,fontSize:"1.05rem",fontWeight:800,color:"#FFCC02",marginBottom:"10px",paddingBottom:"8px",borderBottom:"1px solid rgba(255,255,255,.07)"})}>{section.title}</h2>
            {section.body && <p style={s({fontSize:".875rem",color:"#94a3b8",lineHeight:1.75})}>{section.body}</p>}
            {section.partners && (
              <div style={s({display:"flex",flexDirection:"column",gap:"10px",marginTop:"10px"})}>
                {section.partners.map(p => (
                  <div key={p.name} style={s({background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"12px",padding:"14px 16px"})}>
                    <div style={s({fontWeight:800,color:"#f1f5f9",marginBottom:"4px"})}>{p.name}</div>
                    <p style={s({fontSize:".82rem",color:"#64748b",lineHeight:1.65,marginBottom:"8px"})}>{p.desc}</p>
                    <a href={p.url} target="_blank" rel="noopener" style={s({fontSize:".75rem",color:"#FFCC02",textDecoration:"none"})}>{p.url} ↗</a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div style={s({background:"#111520",border:"1px solid rgba(255,255,255,.07)",borderRadius:"12px",padding:"16px 18px"})}>
          <p style={s({fontSize:".82rem",color:"#64748b",lineHeight:1.7})}>
            This disclosure complies with FTC guidelines (USA), ASA guidelines (UK), and EU Directive 2005/29/EC on commercial practices. For questions, contact us via <a href="https://wa.me/XXXXXXXXXX" style={s({color:"#FFCC02",textDecoration:"none"})}>WhatsApp</a> or <a href="https://github.com/ShaistaShabbir-prog" target="_blank" rel="noopener" style={s({color:"#FFCC02",textDecoration:"none"})}>GitHub</a>.
          </p>
        </div>

      </div>
    </div>
  );
}
