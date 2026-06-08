"use client";
import Link from "next/link";
const PD='"Playfair Display",Georgia,serif';
const IN='"Inter",ui-sans-serif,system-ui,sans-serif';
const HERO="https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1400&q=85&auto=format&fit=crop";
const MADRID="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80&auto=format&fit=crop";
const WA="https://wa.me/4915906171828?text=Hi%20VisaVista!%20I%20need%20help%20with%20Spain%20visa.";

const btnP:React.CSSProperties={display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"none",textDecoration:"none",background:"#DC2626",color:"#fff",boxShadow:"0 4px 18px rgba(220,38,38,.35)"};
const btnG:React.CSSProperties={display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"1.5px solid rgba(255,255,255,.3)",textDecoration:"none",background:"rgba(255,255,255,.12)",color:"#fff"};
const wrap:React.CSSProperties={maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem"};
const sec:React.CSSProperties={maxWidth:"1200px",margin:"0 auto",padding:"5rem 1.5rem"};
const eye:React.CSSProperties={display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",color:"#DC2626",marginBottom:"10px"};
const bar:React.CSSProperties={width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 24px"};
const h2s:React.CSSProperties={fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A"};
const tick:React.CSSProperties={width:"20px",height:"20px",borderRadius:"50%",background:"#ECFDF5",border:"1.5px solid #6EE7B7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"10px",color:"#059669",marginTop:"1px"};
function CI({c}:{c:string}){return <li style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"10px",listStyle:"none"}}><span style={tick}>✓</span><span style={{fontSize:"13px",color:"#374151",lineHeight:1.6}}>{c}</span></li>;}

export default function SpainPage(){
  const visas=[
    {icon:"💻",bg:"#FEF2F2",border:"#FCA5A5",title:"Digital Nomad Visa (Visado para Teletrabajadores)",badge:"Remote workers",
     desc:"Spain's Digital Nomad Visa launched in 2023 for remote workers employed by non-Spanish companies. One of the most popular new visas in Europe — low cost of living, beautiful weather, vibrant culture.",
     pts:["Work remotely for a company/clients based outside Spain","Income: min. €2,334/month (200% of Spanish minimum wage)","Health insurance covering Spain","Criminal background check (apostilled)","Initial 1-year visa → renewable up to 5 years → permanent residence","Tax benefit: Beckham Law — flat 24% income tax for first 6 years"]},
    {icon:"🎓",bg:"#EFF6FF",border:"#BFDBFE",title:"Student Visa (Visado de Estudios)",badge:"Affordable education",
     desc:"Study in Spain at low-cost universities. Spain has multiple top-100 universities and charges €750–€2,000/year tuition at public institutions. Teaching in Spanish or English available.",
     pts:["Admission from a Spanish university or language school","Financial proof: €600/month (€7,200/year minimum)","Health insurance covering Spain","No criminal record certificate (apostilled)","Can work up to 30h/week on student visa","After graduation: 1-year job-seeker visa available"]},
    {icon:"💼",bg:"#ECFDF5",border:"#6EE7B7",title:"Highly Qualified Professional (EU Blue Card Spain)",badge:"Skilled workers",
     desc:"Spain implements the EU Blue Card for highly qualified professionals with a job offer. Lower salary threshold than Germany — easier to qualify for South Asian graduates.",
     pts:["University degree (3+ years) or 5 years relevant experience","Job offer from a Spanish employer for minimum 1 year","Salary: min. 1.5× average annual salary (~€45,000/year)","Health insurance + social security registration","Process through Spanish consulate in your country","After 5 years in Spain: long-term residence permit; 10 years: citizenship"]},
    {icon:"🌍",bg:"#FFFBEB",border:"#FCD34D",title:"Work Permit (Autorización de Trabajo)",badge:"Employer-sponsored",
     desc:"Spanish employers can request an autorización de residencia y trabajo on behalf of non-EU workers. The employer must prove no Spanish/EU worker was available for the role.",
     pts:["Employer applies to Spanish immigration authority (Extranjería)","Labour market test required (job advertised to Spanish/EU workers first)","Job must be on shortage occupations list OR employer proves need","Work permit granted for 1 year, renewable","Path to long-term residence after 5 years","Sectors in demand: IT, healthcare, hospitality, construction, agriculture"]},
    {icon:"🏠",bg:"#F0FDFA",border:"#99F6E4",title:"Non-Lucrative Residence Visa",badge:"Passive income",
     desc:"For those with sufficient passive income (investments, pension, rental income) who don't need to work in Spain. Popular with retirees and investors but also some remote workers.",
     pts:["Prove income from outside Spain: min. €2,400/month (family of 1)","+25% for each additional family member","Health insurance required (private — no public access initially)","Must not work for Spanish companies","Renewable — leads to permanent residence after 5 years","Must spend 6+ months/year in Spain to maintain status"]},
    {icon:"👨‍👩‍👧",bg:"#F5F3FF",border:"#C4B5FD",title:"Family Reunification",badge:"For legal residents",
     desc:"Once you have a valid Spanish residence permit, you can bring your spouse and children. Spain has a large Pakistani community especially in Barcelona and Madrid.",
     pts:["Sponsor must hold valid Spanish residence permit (1 year minimum)","Adequate housing for the whole family","Sufficient income to support dependants (IPREM × 150%)","Spouse gets work authorisation as part of reunification","Children get free schooling in Spanish public schools","Language: Spanish A2 not required for family reunification (unlike Germany)"]},
  ];

  return(
    <div style={{background:"#F9FAFB"}}>
      <section style={{position:"relative",minHeight:"420px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center 40%",filter:"brightness(0.28)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.75))"}}/>
        <div style={{...wrap,position:"relative",zIndex:1,width:"100%",padding:"80px 1.5rem"}}>
          <span style={{...eye,color:"#FCD34D"}}>🇪🇸 Spain Visa Guide 2026</span>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2.4rem,5vw,3.8rem)",fontWeight:900,lineHeight:1.08,letterSpacing:"-0.025em",color:"#fff",maxWidth:"720px",marginBottom:"18px"}}>Move to Spain — Digital Nomad, work permit &amp; student visa 2026</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"600px",lineHeight:1.75,marginBottom:"28px"}}>Spain offers one of Europe's most affordable high-quality lifestyles. The Digital Nomad Visa, EU Blue Card and student pathway make it accessible for Pakistani, Indian and Bangladeshi professionals. Warm climate, vibrant culture, and a path to EU citizenship.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={btnP}>💬 Get Spain visa help →</a>
            <Link href="/consultancy" style={btnG}>📅 Book free consultation</Link>
          </div>
        </div>
      </section>

      <div style={{background:"#0B1D3A"}}><div style={wrap}><div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
        {[{n:"€2,334",l:"Digital Nomad min. income/mo"},{n:"24%",l:"Flat tax rate (Beckham Law)"},{n:"5 yrs",l:"To permanent residence"},{n:"10 yrs",l:"To Spanish/EU citizenship"}].map((s,i)=>(
          <div key={s.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
            <div style={{fontFamily:PD,fontWeight:900,fontSize:"1.75rem",color:"#FCD34D"}}>{s.n}</div>
            <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"3px"}}>{s.l}</div>
          </div>
        ))}
      </div></div></div>

      <section style={sec}>
        <span style={eye}>Spain visa pathways</span>
        <h2 style={h2s}>Which Spain visa is right for you?</h2>
        <div style={bar}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"22px"}}>
          {visas.map(v=>(
            <div key={v.title} style={{background:v.bg,border:`1.5px solid ${v.border}`,borderRadius:"20px",padding:"1.75rem"}}>
              <div style={{display:"flex",gap:"12px",alignItems:"flex-start",marginBottom:"14px"}}>
                <span style={{fontSize:"32px",flexShrink:0}}>{v.icon}</span>
                <div>
                  <div style={{fontFamily:PD,fontWeight:800,fontSize:"17px",color:"#0B1D3A",lineHeight:1.25,marginBottom:"7px"}}>{v.title}</div>
                  <span style={{display:"inline-flex",borderRadius:"999px",padding:"3px 10px",fontSize:"11.5px",fontWeight:700,background:"rgba(220,38,38,.1)",color:"#DC2626",border:"1px solid #FCA5A5"}}>{v.badge}</span>
                </div>
              </div>
              <p style={{fontSize:"13.5px",color:"#374151",lineHeight:1.7,marginBottom:"14px"}}>{v.desc}</p>
              <ul style={{listStyle:"none",padding:0}}>{v.pts.map((p,i)=><CI key={i} c={p}/>)}</ul>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{...btnP,width:"100%",justifyContent:"center",fontSize:"13px",padding:"11px",marginTop:"14px",display:"flex"}}>Get Spain visa help →</a>
            </div>
          ))}
        </div>
      </section>

      <div style={{background:"#fff",padding:"5rem 1.5rem"}}><div style={wrap}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"56px",alignItems:"start"}}>
          <div>
            <span style={eye}>Life in Spain</span>
            <h2 style={h2s}>South Asian community &amp; life in Spain</h2>
            <div style={bar}/>
            {[
              {i:"🇵🇰",t:"Pakistani community (100K+)",d:"Spain has one of Europe's largest Pakistani communities. Barcelona (Raval district), Madrid (Lavapiés), Valencia. Urdu/Punjabi widely spoken. Mosques, halal restaurants and Pakistani grocery stores in major cities."},
              {i:"🕌",t:"Muslim life in Spain",d:"2M+ Muslims in Spain (~4.2% of population). Mosques in every major city. Halal food widely available. Ramadan and Eid increasingly recognised. Culturally tolerant and welcoming society."},
              {i:"💰",t:"Cost of living (very affordable)",d:"Madrid 1-bed: €900–€1,400. Barcelona: €1,000–€1,600. Seville/Valencia: €600–€1,000. Significantly cheaper than Germany, UK or France. High quality of life for the cost."},
              {i:"☀️",t:"Climate & quality of life",d:"Mediterranean climate — hot summers, mild winters. Excellent food, culture, nightlife. Very relaxed work-life balance culture (siesta culture). Ranked top 10 globally for quality of life and safety."},
              {i:"🗣️",t:"Spanish language",d:"Spanish A2 needed for most visa paths. Very similar to Urdu in some vocabulary (Arabic roots). South Asians learn Spanish relatively quickly. Free Spanish classes available through government programmes."},
              {i:"🇪🇺",t:"Path to EU citizenship",d:"After 10 years legal residence → Spanish nationality → EU citizenship and passport. EU citizenship gives right to live and work in all 27 EU countries with no visa. Very valuable long-term goal."},
            ].map(c=>(
              <div key={c.t} style={{display:"flex",gap:"14px",padding:"14px 0",borderBottom:"1px solid #E5E7EB"}}>
                <span style={{fontSize:"24px",flexShrink:0}}>{c.i}</span>
                <div>
                  <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"14px",marginBottom:"4px"}}>{c.t}</div>
                  <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.6}}>{c.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{borderRadius:"22px",overflow:"hidden",position:"relative",aspectRatio:"4/4.5"}}>
            <div style={{position:"absolute",inset:0,backgroundImage:`url(${MADRID})`,backgroundSize:"cover",backgroundPosition:"center"}}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(11,29,58,.92) 0%,transparent 55%)"}}/>
            <div style={{position:"absolute",bottom:"24px",left:"22px",right:"22px",zIndex:1}}>
              <div style={{background:"rgba(255,255,255,.12)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,.2)",borderRadius:"14px",padding:"18px 20px"}}>
                <div style={{fontSize:"11px",fontWeight:700,color:"#FCD34D",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"10px"}}>Average costs 2026</div>
                {[["Madrid 1-bed apt","€900–€1,400/mo"],["Barcelona 1-bed apt","€1,000–€1,600/mo"],["Valencia 1-bed apt","€700–€1,100/mo"],["Avg. IT salary","€35,000–€55,000/yr"],["University tuition","€750–€2,000/yr"],["Spanish language A2","Free (gov. programme)"]].map(([k,v])=>(
                  <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,.1)"}}>
                    <span style={{fontSize:"12.5px",color:"rgba(255,255,255,.7)"}}>{k}</span>
                    <span style={{fontSize:"12.5px",fontWeight:700,color:"#FCD34D"}}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div></div>

      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{...wrap,background:"linear-gradient(135deg,#DC2626,#991B1B)",borderRadius:"28px",padding:"52px",textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:"-60px",right:"-60px",width:"250px",height:"250px",borderRadius:"50%",background:"rgba(255,255,255,.07)"}}/>
          <h2 style={{fontFamily:PD,fontWeight:800,color:"#fff",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",marginBottom:"12px",position:"relative",zIndex:1}}>Ready to move to Spain?</h2>
          <p style={{color:"rgba(255,255,255,.72)",fontSize:"16px",marginBottom:"26px",position:"relative",zIndex:1}}>Spain offers the Digital Nomad Visa, EU Blue Card and affordable living — one of Europe's best kept secrets. Book your free consultation in Urdu, Hindi or English.</p>
          <div style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",position:"relative",zIndex:1}}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{...btnG,background:"#25D366",border:"none",fontWeight:800}}>💬 WhatsApp now</a>
            <Link href="/consultancy" style={{...btnG,background:"#fff",color:"#DC2626",border:"none",fontWeight:800}}>📅 Book free call</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
