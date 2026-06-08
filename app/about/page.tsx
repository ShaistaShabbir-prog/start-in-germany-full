import Link from "next/link";
const PD = '"Playfair Display",Georgia,serif';

export default function AboutPage() {
  return (
    <div>
      <section style={{background:"linear-gradient(135deg,#0B1D3A,#1E3A5F)",padding:"72px 1.5rem"}}>
        <div className="wrap">
          <span className="eyebrow" style={{color:"#FCD34D"}}>About VisaVista</span>
          <h1 className="h1" style={{color:"#fff",maxWidth:"700px",marginBottom:"16px"}}>Built by immigrants, for immigrants</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.7)",maxWidth:"580px",lineHeight:1.75}}>VisaVista was founded by Shaista Shabbir, who moved from Lahore to Berlin in 2019 and navigated Germany's immigration system herself. She built the resource she wished had existed.</p>
        </div>
      </section>

      <section className="sec">
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"center",marginBottom:"64px"}}>
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="h2" style={{marginBottom:"16px"}}>From confusion to clarity — for 50,000+ South Asians</h2>
            <div className="divider" />
            <p style={{fontSize:"15px",color:"#374151",lineHeight:1.8,marginBottom:"16px"}}>When Shaista moved from Pakistan to Germany on a student visa in 2019, she spent weeks trying to understand the visa process, blocked accounts, recognition of her degree and embassy appointments. The information was scattered, confusing and rarely written with South Asians in mind.</p>
            <p style={{fontSize:"15px",color:"#374151",lineHeight:1.8,marginBottom:"16px"}}>She created VisaVista to be the single, clear, honest resource she wished had existed. Since then, it has grown into a trusted platform used by over 50,000 South Asian families — from initial visa applications all the way to permanent residence and citizenship.</p>
            <p style={{fontSize:"15px",color:"#374151",lineHeight:1.8}}>VisaVista is independent and not affiliated with any government. We earn through affiliate referrals (see our <Link href="/affiliate-disclosure" style={{color:"#DC2626"}}>disclosure</Link>) and consultancy services.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
            {[
              {n:"50,000+",l:"Families helped"},
              {n:"98%",l:"Visa success rate"},
              {n:"4",l:"Countries covered"},
              {n:"3",l:"Languages spoken"},
              {n:"2019",l:"Founded in Berlin"},
              {n:"24h",l:"Support response"},
            ].map(s=>(
              <div key={s.l} style={{background:"#fff",borderRadius:"16px",padding:"20px",border:"1px solid #E5E7EB",textAlign:"center"}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"28px",color:"#DC2626"}}>{s.n}</div>
                <div style={{fontSize:"13px",color:"#6B7280",marginTop:"4px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{background:"#FEF2F2",borderRadius:"24px",padding:"40px 44px",border:"1px solid #FCA5A5"}}>
          <h2 className="h2" style={{marginBottom:"8px"}}>Transparency & affiliate disclosure</h2>
          <div className="divider" />
          <p style={{fontSize:"15px",color:"#374151",lineHeight:1.75,marginBottom:"14px"}}>VisaVista uses affiliate links for banking products (Wise, Commerzbank, Advanzia). When you open an account through our links, you may receive a bonus and we earn a small commission — at no extra cost to you. This helps fund the free content on this site.</p>
          <p style={{fontSize:"15px",color:"#374151",lineHeight:1.75}}>We only recommend products we genuinely use and trust. Our editorial content is never paid for or influenced by any bank or company. See our full <Link href="/affiliate-disclosure" style={{color:"#DC2626",fontWeight:600}}>Affiliate Disclosure</Link>.</p>
        </div>
      </section>
    </div>
  );
}
