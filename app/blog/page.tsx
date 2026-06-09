"use client";
import Link from "next/link";
const PD='"Playfair Display",Georgia,serif';
const IN='"Inter",ui-sans-serif,system-ui,sans-serif';
const WA="https://wa.me/4915906171828?text="+encodeURIComponent("Hi VisaVista!");

export default function BlogPage(){
  const posts=[
    {slug:"germany-opportunity-card-pakistan-india",cat:"Visa 🇩🇪",title:"Germany Opportunity Card 2026: Complete guide for Pakistan & India",date:"Jun 2026",read:"8 min",desc:"The Chancenkarte lets you enter Germany WITHOUT a job offer. Here's exactly how to apply from Pakistan and India, what documents you need, and how the points system works.",img:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=70&auto=format&fit=crop",hot:true},
    {slug:"commerzbank-wise-banking-germany-newcomers",cat:"Banking 💳",title:"Best bank accounts for Germany newcomers 2026 — Wise vs Commerzbank vs Advanzia",date:"Jun 2026",read:"6 min",desc:"You need a German IBAN before you arrive. We compare Wise, Commerzbank (50€ bonus) and Advanzia Mastercard Gold — which you need and which to open first.",img:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=70&auto=format&fit=crop",hot:true},
    {slug:"german-embassy-appointment-pakistan-2026",cat:"Appointment 🗓️",title:"How to get a German embassy appointment from Pakistan in 2026",date:"May 2026",read:"7 min",desc:"The new CSP portal, click-day slots and how to monitor Islamabad & Karachi embassy availability. Everything Pakistani applicants need to know.",img:"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=70&auto=format&fit=crop",hot:true},
    {slug:"study-germany-free-south-asian-guide",cat:"Study 🎓",title:"Study in Germany for free: complete guide for Pakistani, Indian & Bangladeshi students",date:"May 2026",read:"10 min",desc:"Most German public universities are tuition-free. APS certificate, blocked accounts, language requirements — everything you need step by step.",img:"https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=70&auto=format&fit=crop",hot:false},
    {slug:"eu-blue-card-salary-2026",cat:"Visa 🇩🇪",title:"EU Blue Card 2026: new €50,700 salary threshold explained",date:"Apr 2026",read:"5 min",desc:"Germany raised the Blue Card minimum salary threshold in 2026. Here's what changed, which shortage roles qualify for the lower €45,934 threshold, and how to apply.",img:"https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&q=70&auto=format&fit=crop",hot:false},
    {slug:"it-professionals-india-germany-salary-visa",cat:"Career 💻",title:"IT professionals from India in Germany: salary, visa & relocation guide 2026",date:"Apr 2026",read:"9 min",desc:"Indian software engineers are Germany's most recruited professionals. We cover the EU Blue Card, degree recognition, average salaries and the best IT cities.",img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=70&auto=format&fit=crop",hot:false},
    {slug:"ausbildung-guide-foreigners-2026",cat:"Study 🔧",title:"Ausbildung in Germany 2026: the complete guide for foreigners",date:"Mar 2026",read:"8 min",desc:"Germany's vocational training pays you €620–€1,100/month while you earn a world-class qualification. Everything about the application, visa, and life as an Azubi.",img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=70&auto=format&fit=crop",hot:false},
    {slug:"anmeldung-guide-germany-newcomers",cat:"Living 🏡",title:"Anmeldung: how to register your address in Germany — step by step",date:"Mar 2026",read:"5 min",desc:"Anmeldung is your most important first task in Germany. You must do it within 14 days. Here's exactly what to bring, where to go, and what happens next.",img:"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=70&auto=format&fit=crop",hot:false},
    {slug:"italy-decreto-flussi-2026-pakistan",cat:"Italy 🇮🇹",title:"Decreto Flussi 2026: how to get an Italian work permit from Pakistan",date:"Feb 2026",read:"7 min",desc:"Italy opened 452,000 work permit slots in 2026. Pakistan is a priority country. Here's how the click-day works and how to get your employer to apply for you.",img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=70&auto=format&fit=crop",hot:false},
    {slug:"canada-express-entry-south-asian-guide",cat:"Canada 🇨🇦",title:"Canada Express Entry 2026: complete guide for Pakistan, India & Bangladesh",date:"Jan 2026",read:"9 min",desc:"Express Entry, PNP, Study+PGWP — Canada's PR pathways explained for South Asians. Current CRS scores, processing times, and which route suits your profile.",img:"https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&q=70&auto=format&fit=crop",hot:false},
    {slug:"australia-skilled-visa-189-190-guide",cat:"Australia 🇦🇺",title:"Australia Skilled Visa (189/190) for South Asians: points, occupations & process 2026",date:"Jan 2026",read:"8 min",desc:"Australia's points-based SkillSelect system for Pakistani, Indian and Bangladeshi professionals. How to calculate your score, which occupation list to check, and how to apply.",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70&auto=format&fit=crop",hot:false},
    {slug:"spain-digital-nomad-visa-south-asia",cat:"Spain 🇪🇸",title:"Spain Digital Nomad Visa 2026: the guide for remote workers from South Asia",date:"Dec 2025",read:"6 min",desc:"Spain's Digital Nomad Visa requires €2,334/month income and lets you live in Spain for up to 5 years. The Beckham Law gives you 24% flat tax rate. Full guide for Pakistanis and Indians.",img:"https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=70&auto=format&fit=crop",hot:false},
  ];

  return(
    <div style={{background:"#F9FAFB"}}>
      {/* Header */}
      <div style={{background:"#0B1D3A",padding:"72px 1.5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <span style={{display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",color:"#FCD34D",marginBottom:"10px"}}>📖 VisaVista Blog</span>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2.4rem,5vw,3.5rem)",fontWeight:900,lineHeight:1.08,letterSpacing:"-0.025em",color:"#fff",maxWidth:"700px",marginBottom:"16px"}}>Guides, tips &amp; visa updates for South Asians moving to Europe</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.7)",maxWidth:"580px",lineHeight:1.75}}>Real, practical advice — updated regularly with the latest 2026 visa rules, salary thresholds and embassy processes.</p>
        </div>
      </div>

      <section style={{maxWidth:"1200px",margin:"0 auto",padding:"5rem 1.5rem"}}>
        {/* Featured / Hot posts */}
        <span style={{display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",color:"#DC2626",marginBottom:"10px"}}>🔥 Most read</span>
        <h2 style={{fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A",marginBottom:"8px"}}>Trending guides</h2>
        <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 32px"}}/>

        {/* Featured 3 */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"22px",marginBottom:"48px"}}>
          {posts.filter(p=>p.hot).map(p=>(
            <div key={p.slug} style={{background:"#fff",borderRadius:"20px",border:"1.5px solid #E5E7EB",overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,.04)"}}>
              <div style={{height:"180px",backgroundImage:`url(${p.img})`,backgroundSize:"cover",backgroundPosition:"center",position:"relative"}}>
                <span style={{position:"absolute",top:"14px",left:"14px",background:"#DC2626",color:"#fff",fontSize:"10px",fontWeight:700,padding:"4px 10px",borderRadius:"999px",textTransform:"uppercase",letterSpacing:"0.06em"}}>{p.cat}</span>
                <span style={{position:"absolute",top:"14px",right:"14px",background:"rgba(0,0,0,.5)",color:"#fff",fontSize:"10px",fontWeight:600,padding:"4px 10px",borderRadius:"999px"}}>🔥 Hot</span>
              </div>
              <div style={{padding:"20px"}}>
                <div style={{display:"flex",gap:"10px",alignItems:"center",marginBottom:"10px"}}>
                  <span style={{fontSize:"11.5px",color:"#9CA3AF"}}>{p.date}</span>
                  <span style={{fontSize:"11.5px",color:"#9CA3AF"}}>· {p.read} read</span>
                </div>
                <h3 style={{fontFamily:PD,fontWeight:700,fontSize:"16px",color:"#0B1D3A",lineHeight:1.35,marginBottom:"10px"}}>{p.title}</h3>
                <p style={{fontSize:"13px",color:"#6B7280",lineHeight:1.6,marginBottom:"16px"}}>{p.desc}</p>
                <a href={WA} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:"5px",fontSize:"13px",fontWeight:700,color:"#DC2626",textDecoration:"none"}}>Read guide →</a>
              </div>
            </div>
          ))}
        </div>

        {/* All posts */}
        <span style={{display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",color:"#DC2626",marginBottom:"10px"}}>All articles</span>
        <h2 style={{fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A",marginBottom:"8px"}}>All guides &amp; articles</h2>
        <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 32px"}}/>
        <div style={{display:"flex",flexDirection:"column",gap:"1px"}}>
          {posts.map(p=>(
            <div key={p.slug} style={{display:"flex",gap:"20px",alignItems:"flex-start",padding:"20px 0",borderBottom:"1px solid #E5E7EB"}}>
              <div style={{width:"100px",height:"70px",borderRadius:"12px",backgroundImage:`url(${p.img})`,backgroundSize:"cover",backgroundPosition:"center",flexShrink:0}}/>
              <div style={{flex:1}}>
                <div style={{display:"flex",gap:"8px",alignItems:"center",marginBottom:"7px",flexWrap:"wrap"}}>
                  <span style={{display:"inline-flex",borderRadius:"999px",padding:"2px 9px",fontSize:"11px",fontWeight:700,background:"#FEF2F2",color:"#DC2626",border:"1px solid #FCA5A5"}}>{p.cat}</span>
                  <span style={{fontSize:"11.5px",color:"#9CA3AF"}}>{p.date} · {p.read} read</span>
                </div>
                <h3 style={{fontFamily:PD,fontWeight:700,fontSize:"16px",color:"#0B1D3A",lineHeight:1.35,marginBottom:"6px"}}>{p.title}</h3>
                <p style={{fontSize:"13px",color:"#6B7280",lineHeight:1.55}}>{p.desc}</p>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",fontSize:"13px",fontWeight:700,color:"#DC2626",textDecoration:"none",flexShrink:0,padding:"8px 16px",border:"1.5px solid #FCA5A5",borderRadius:"10px"}}>Read →</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
