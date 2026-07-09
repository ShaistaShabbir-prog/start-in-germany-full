"use client";
const PD='"Playfair Display",Georgia,serif';
export default function PrivacyPage(){
  return(
    <div style={{background:"#F9FAFB"}}>
      <div style={{background:"#0B1D3A",padding:"52px 1.5rem"}}>
        <div style={{maxWidth:"800px",margin:"0 auto"}}>
          <h1 style={{fontFamily:PD,fontWeight:900,fontSize:"clamp(2rem,4vw,3rem)",color:"#fff"}}>Privacy Policy</h1>
          <p style={{color:"rgba(255,255,255,.65)",marginTop:"10px"}}>Last updated: June 2026</p>
        </div>
      </div>
      <section style={{maxWidth:"800px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{background:"#fff",borderRadius:"20px",padding:"36px 40px",border:"1.5px solid #E5E7EB"}}>
          {[
            {t:"1. Data we collect",c:"VisaVista does not collect personal data through automated means. If you contact us via WhatsApp, email, or the contact form, we receive only the information you voluntarily provide (name, email, WhatsApp number, your enquiry)."},
            {t:"2. How we use your data",c:"We use your contact information solely to respond to your enquiry. We do not sell, rent or share your data with third parties. We do not use your data for marketing without your explicit consent."},
            {t:"3. Cookies & analytics",c:"This website uses Google Analytics (GA4) to understand general usage patterns. Analytics data is anonymised and does not personally identify you. You can disable analytics via your browser settings or a cookie manager."},
            {t:"4. Affiliate links",c:"We use affiliate links for Wise, Commerzbank and Advanzia. When you click these links, the respective companies may set cookies. We do not receive any personal data through these affiliate arrangements."},
            {t:"5. Data storage",c:"This website is hosted on Vercel (USA), which is GDPR-compliant under Standard Contractual Clauses. No personal data is stored on VisaVista servers beyond what you send us via WhatsApp or email."},
            {t:"6. Your rights (GDPR)",c:"Under GDPR, you have the right to: access data we hold about you, request deletion of your data, withdraw consent at any time, and lodge a complaint with your national data protection authority."},
            {t:"7. Contact",c:"For privacy enquiries: vistavisa7@gmail.com or WhatsApp [CONTACT FORM]"},
          ].map(s=>(
            <div key={s.t} style={{marginBottom:"24px"}}>
              <h2 style={{fontFamily:PD,fontWeight:700,fontSize:"18px",color:"#0B1D3A",marginBottom:"8px"}}>{s.t}</h2>
              <p style={{fontSize:"14px",color:"#374151",lineHeight:1.75}}>{s.c}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
