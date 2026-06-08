"use client";
import Link from "next/link";
const PD='"Playfair Display",Georgia,serif';
const IN='"Inter",ui-sans-serif,system-ui,sans-serif';
const HERO="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1400&q=85&auto=format&fit=crop";
const WA="https://wa.me/4915906171828?text="+encodeURIComponent("Hi VisaVista! I need help with Sweden visa.");
const btnP:React.CSSProperties={display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"none",textDecoration:"none",background:"#DC2626",color:"#fff",boxShadow:"0 4px 18px rgba(220,38,38,.35)"};
const btnG:React.CSSProperties={display:"inline-flex",alignItems:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"1.5px solid rgba(255,255,255,.3)",textDecoration:"none",background:"rgba(255,255,255,.12)",color:"#fff"};
const wrap:React.CSSProperties={maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem"};
const sec:React.CSSProperties={maxWidth:"1200px",margin:"0 auto",padding:"5rem 1.5rem"};
const eye:React.CSSProperties={display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",color:"#DC2626",marginBottom:"10px"};
const bar:React.CSSProperties={width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 24px"};
const tick:React.CSSProperties={width:"20px",height:"20px",borderRadius:"50%",background:"#ECFDF5",border:"1.5px solid #6EE7B7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"10px",color:"#059669",marginTop:"1px"};
function CI({children}:{children:React.ReactNode}){return <li style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"10px",listStyle:"none"}}><span style={tick}>✓</span><span style={{fontSize:"13px",color:"#374151",lineHeight:1.6}}>{children}</span></li>}

export default function SwedenPage(){
  return(
    <div style={{background:"#F9FAFB"}}>
      <section style={{position:"relative",minHeight:"420px",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO})`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(0.28)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,rgba(11,29,58,.97),rgba(11,29,58,.75))"}}/>
        <div style={{...wrap,position:"relative",zIndex:1,width:"100%",padding:"80px 1.5rem"}}>
          <span style={{...eye,color:"#FCD34D"}}>🇸🇪 Sweden Visa Guide 2026</span>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2.4rem,5vw,3.8rem)",fontWeight:900,lineHeight:1.08,letterSpacing:"-0.025em",color:"#fff",maxWidth:"720px",marginBottom:"18px"}}>Move to Sweden — work permits, study &amp; life</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",maxWidth:"600px",lineHeight:1.75,marginBottom:"28px"}}>Sweden has one of the most open work permit systems in Europe — no job quotas, employer-driven applications, and a fast-track for skilled workers. Excellent quality of life, high salaries and strong welfare system.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={btnP}>💬 Get Sweden visa help →</a>
            <Link href="/consultancy" style={btnG}>📅 Book free consultation</Link>
          </div>
        </div>
      </section>

      <div style={{background:"#0B1D3A"}}>
        <div style={wrap}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
            {[{n:"No quota",l:"Work permits — employer driven"},{n:"SEK 13,000",l:"Min. monthly salary (~€1,150)"},{n:"5 yrs",l:"To permanent residence"},{n:"2 wks",l:"Avg. work permit processing"}].map((s,i)=>(
              <div key={s.l} style={{textAlign:"center",padding:"20px 16px",borderRight:i<3?"1px solid rgba(255,255,255,.1)":"none"}}>
                <div style={{fontFamily:PD,fontWeight:900,fontSize:"1.75rem",color:"#FCD34D"}}>{s.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"3px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section style={sec}>
        <span style={eye}>Sweden visa pathways</span>
        <h2 style={{fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A"}}>Your visa options for Sweden</h2>
        <div style={bar}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"22px"}}>
          {[
            {icon:"💼",bg:"#EFF6FF",border:"#BFDBFE",title:"Work Permit (Arbetstillstånd)",badge:"Most popular",
             desc:"Sweden's work permit has NO annual quota — it's purely employer-driven. Any employer can hire a non-EU worker as long as they pay the union-agreed salary. Processing via Migrationsverket.se. One of Europe's most accessible work permit systems.",
             points:["Job offer from a Swedish employer is required","Salary must meet union collective agreement for your sector (min. SEK 13,000/month)","Employer advertises position in Sweden/EU for 10 days first","Employer submits Migrationsverket application online","Processing: typically 2–8 weeks via fast-track, 3–6 months standard","After 4 years: permanent residence eligible"]},
            {icon:"🎓",bg:"#ECFDF5",border:"#6EE7B7",title:"Student Visa (Uppehållstillstånd för studier)",badge:"Free at many unis",
             desc:"Sweden has some tuition-free universities for select programmes. Top universities: KTH, Stockholm University, Chalmers, Uppsala, Lund. Many English-taught Master's programmes.",
             points:["Admission letter from a Swedish university","Proof of financial means: SEK 8,568/month (approx. €760/month)","Health insurance or Swedish Personnummer after arrival","Language: Swedish B1+ for Swedish programmes, IELTS 6.5+ for English","Tuition: Free for some, SEK 80,000–150,000/year for others","After graduation: 1-year job-seeker stay permitted"]},
            {icon:"👨‍💻",bg:"#FEF2F2",border:"#FCA5A5",title:"EU Blue Card Sweden",badge:"Skilled workers",
             desc:"Sweden implemented the EU Blue Card for highly qualified workers. Faster permanent residence and EU mobility rights compared to regular work permit.",
             points:["University degree (min. 3 years) required","Job offer with salary ≥ 1.5× Swedish average (approx. SEK 54,000/month gross)","Contract of minimum 1 year","After 3 years with Blue Card: eligible for long-term EU residence","Family members get work rights immediately"]},
            {icon:"🌍",bg:"#F5F3FF",border:"#C4B5FD",title:"Self-Employment & Startup",badge:"Entrepreneurs",
             desc:"Sweden welcomes entrepreneurs. The Self-Employment permit (Egenföretagare) requires a viable business plan, sufficient capital, and the ability to support yourself financially.",
             points:["Comprehensive business plan in Swedish or English","Proof of sufficient capital (typically SEK 200,000+)","Prior experience in the business area","Application to Migrationsverket + business registration at Bolagsverket","Processing: 3–6 months","Stockholm is Europe's second-largest tech hub per capita"]},
          ].map(v=>(
            <div key={v.title} style={{background:v.bg,border:`1.5px solid ${v.border}`,borderRadius:"20px",padding:"1.75rem"}}>
              <div style={{display:"flex",gap:"12px",alignItems:"flex-start",marginBottom:"14px"}}>
                <span style={{fontSize:"32px",flexShrink:0}}>{v.icon}</span>
                <div>
                  <div style={{fontFamily:PD,fontWeight:800,fontSize:"17px",color:"#0B1D3A",lineHeight:1.25,marginBottom:"7px"}}>{v.title}</div>
                  <span style={{display:"inline-flex",borderRadius:"999px",padding:"3px 10px",fontSize:"11.5px",fontWeight:700,background:"rgba(220,38,38,.1)",color:"#DC2626",border:"1px solid #FCA5A5"}}>{v.badge}</span>
                </div>
              </div>
              <p style={{fontSize:"13.5px",color:"#374151",lineHeight:1.7,marginBottom:"14px"}}>{v.desc}</p>
              <ul style={{listStyle:"none",padding:0}}>
                {v.points.map((p,i)=><CI key={i}>{p}</CI>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div style={{background:"#fff",padding:"5rem 1.5rem"}}>
        <div style={wrap}>
          <span style={eye}>Life in Sweden</span>
          <h2 style={{fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A",marginBottom:"8px"}}>What to expect living in Sweden</h2>
          <div style={bar}/>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
            {[
              {icon:"💰",t:"Salaries & costs",d:"Average salary: SEK 37,000/month (€3,300). Stockholm 1-bed: SEK 9,000–15,000/month. High taxes (30–57%) but excellent public services — healthcare, education, childcare all covered."},
              {icon:"🕌",t:"Muslim community",d:"Sweden has 800,000+ Muslims (~8% of population). Stockholm, Gothenburg, Malmö have large South Asian communities. Mosques, halal restaurants and Islamic schools widely available."},
              {icon:"🌡️",t:"Climate",d:"Winters are cold and dark (Nov–Feb). Summers are beautiful with long days. South Sweden (Malmö, Gothenburg) milder than Stockholm. Swedes are welcoming but reserved at first."},
              {icon:"🗣️",t:"Language",d:"Swedish required for most jobs. SFI (Swedish For Immigrants) is FREE — provided by municipality from day one. English widely spoken — many companies operate in English. Swedish B1 in 1–2 years with SFI."},
              {icon:"🏥",t:"Healthcare & welfare",d:"Universal healthcare after registering (Folkbokföring). Paid parental leave: 480 days per child. Unemployment benefits available after 3 months. Child benefit: SEK 1,250/month per child."},
              {icon:"🎓",t:"Education",d:"Free schooling for children. Some of world's best universities. High quality public transport. Safe country — consistently top 10 globally for quality of life, gender equality and social mobility."},
            ].map(c=>(
              <div key={c.t} style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:"18px",padding:"1.5rem"}}>
                <div style={{fontSize:"32px",marginBottom:"12px"}}>{c.icon}</div>
                <div style={{fontFamily:PD,fontWeight:700,fontSize:"16px",color:"#0B1D3A",marginBottom:"8px"}}>{c.t}</div>
                <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.65}}>{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{...wrap,background:"linear-gradient(135deg,#DC2626,#991B1B)",borderRadius:"28px",padding:"52px",textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:"-60px",right:"-60px",width:"250px",height:"250px",borderRadius:"50%",background:"rgba(255,255,255,.07)"}}/>
          <h2 style={{fontFamily:PD,fontWeight:800,color:"#fff",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",marginBottom:"12px",position:"relative",zIndex:1}}>Ready to move to Sweden?</h2>
          <p style={{color:"rgba(255,255,255,.72)",fontSize:"16px",marginBottom:"26px",position:"relative",zIndex:1}}>Book a free 30-min consultation in Urdu, Hindi, Bengali or English. Our experts know Sweden's Migrationsverket process inside out.</p>
          <div style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",position:"relative",zIndex:1}}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{...btnG,background:"#25D366",border:"none",fontWeight:800}}>💬 WhatsApp now</a>
            <Link href="/consultancy" style={{...btnG,background:"#fff",color:"#DC2626",border:"none",fontWeight:800}}>📅 Book free call</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
