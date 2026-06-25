"use client";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div style={{maxWidth:"800px",margin:"0 auto",padding:"3rem 1.5rem",fontFamily:"var(--font-inter,sans-serif)"}}>
      <h1 style={{fontSize:"2rem",fontWeight:900,marginBottom:".5rem"}}>Terms of Service</h1>
      <p style={{color:"#6B7280",fontSize:".875rem",marginBottom:"2.5rem"}}>Last updated: June 2026</p>

      <div style={{lineHeight:1.8,color:"#374151",display:"flex",flexDirection:"column",gap:"2rem"}}>

        <section>
          <h2 style={{fontSize:"1.125rem",fontWeight:800,marginBottom:".5rem"}}>1. Ownership</h2>
          <p>VisaVista is proprietary software and content owned exclusively by <strong>Shaista Shabbir</strong>. All visa guidance content, country information, tools, and the VisaVista brand are protected intellectual property. © 2026 All Rights Reserved.</p>
        </section>

        <section>
          <h2 style={{fontSize:"1.125rem",fontWeight:800,marginBottom:".5rem"}}>2. Information Disclaimer</h2>
          <p>VisaVista provides immigration information for educational purposes only. This is not legal advice. Visa requirements change frequently — always verify with official government sources and consult a qualified immigration lawyer for your specific situation.</p>
        </section>

        <section>
          <h2 style={{fontSize:"1.125rem",fontWeight:800,marginBottom:".5rem"}}>3. Permitted Use</h2>
          <p>You may use VisaVista to research immigration options. You may not copy, redistribute, or build competing products using our content or code without written permission.</p>
        </section>

        <section>
          <h2 style={{fontSize:"1.125rem",fontWeight:800,marginBottom:".5rem"}}>4. Referral Links</h2>
          <p>VisaVista may include referral links to third-party services (banking, money transfer, etc.). We may earn a commission. This does not affect our editorial independence or the accuracy of our information.</p>
        </section>

        <section>
          <h2 style={{fontSize:"1.125rem",fontWeight:800,marginBottom:".5rem"}}>5. Contact</h2>
          <p>For inquiries: <a href="mailto:contact@start-in-germany.com" style={{color:"#DC2626"}}>contact@start-in-germany.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/XXXXXXXXXX" style={{color:"#DC2626"}}>[CONTACT FORM]</a></p>
        </section>

      </div>

      <div style={{marginTop:"2rem",paddingTop:"1.5rem",borderTop:"1px solid #E5E7EB",fontSize:".875rem",color:"#9CA3AF"}}>
        <Link href="/" style={{color:"#DC2626"}}>← Back to VisaVista</Link>
      </div>
    </div>
  );
}
