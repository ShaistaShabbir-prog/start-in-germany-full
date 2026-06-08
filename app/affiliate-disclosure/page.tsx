import Link from "next/link";
const PD = '"Playfair Display",Georgia,serif';
export default function AffiliateDisclosure() {
  return (
    <div>
      <section style={{background:"#0B1D3A",padding:"56px 1.5rem"}}>
        <div className="wrap">
          <h1 className="h1" style={{color:"#fff",maxWidth:"700px",marginBottom:"14px"}}>Affiliate Disclosure</h1>
          <p style={{fontSize:"16px",color:"rgba(255,255,255,.65)",lineHeight:1.7}}>Transparency is important to us. Here's exactly how VisaVista earns money and how it affects our recommendations.</p>
        </div>
      </section>
      <section className="sec" style={{maxWidth:"760px"}}>
        {[
          {t:"What are affiliate links?",c:"Some links on VisaVista are affiliate links. This means when you open a bank account, apply for a credit card or use a service through our link, we may earn a small commission — at no additional cost to you. In some cases, you also receive a bonus (e.g. Wise's fee-free first transfer, Commerzbank's 50€ starting credit)."},
          {t:"Which products have affiliate links?",c:"Currently: Wise (multi-currency account), Commerzbank Girokonto, and Advanzia Gebührenfrei Mastercard Gold. These are clearly labelled on our Banking page."},
          {t:"Does this affect our recommendations?",c:"No. We only recommend products we genuinely use and believe are the best options for South Asian newcomers to Germany. Our editorial content is never paid for by any company. If a product stops being the best option, we remove it."},
          {t:"How does VisaVista make money?",c:"Through affiliate commissions (as described above) and through paid consultancy services. The free content on this site is funded by these two revenue streams. We never sell advertising or accept sponsored content."},
          {t:"Questions?",c:"If you have any questions about our affiliates or disclosure, email shaista.s.shabbir@gmail.com."},
        ].map(s=>(
          <div key={s.t} style={{marginBottom:"32px"}}>
            <h2 style={{fontFamily:PD,fontWeight:800,fontSize:"20px",color:"#0B1D3A",marginBottom:"10px"}}>{s.t}</h2>
            <p style={{fontSize:"15px",color:"#374151",lineHeight:1.75}}>{s.c}</p>
          </div>
        ))}
        <Link href="/finances" className="btn btn-outline">View our banking recommendations →</Link>
      </section>
    </div>
  );
}
