import Link from "next/link";

const S = {
  // reusable style objects
  h1: {fontFamily:'"Syne",ui-sans-serif,system-ui,sans-serif',fontSize:"clamp(2.2rem,4vw,3.5rem)",fontWeight:800,lineHeight:1.1,letterSpacing:"-0.02em"} as React.CSSProperties,
  h2: {fontFamily:'"Syne",ui-sans-serif,system-ui,sans-serif',fontSize:"clamp(1.5rem,2.5vw,2.2rem)",fontWeight:700,lineHeight:1.2,color:"#1D3557"} as React.CSSProperties,
  wrap: {maxWidth:"1100px",marginLeft:"auto",marginRight:"auto",padding:"0 1.5rem"} as React.CSSProperties,
  sec: {maxWidth:"1100px",marginLeft:"auto",marginRight:"auto",padding:"5rem 1.5rem"} as React.CSSProperties,
};

export default function Page() {
  return (
    <div style={{background:"#fafaf8"}}>

      {/* ════ HERO ════ */}
      <section style={{background:"#1D3557",position:"relative",overflow:"hidden",minHeight:"560px",display:"flex",alignItems:"center",padding:"80px 0"}}>
        {/* blobs */}
        <div style={{position:"absolute",top:"-150px",right:"-100px",width:"520px",height:"520px",borderRadius:"50%",background:"#E63946",opacity:0.15,pointerEvents:"none"}} />
        <div style={{position:"absolute",bottom:"-80px",right:"200px",width:"300px",height:"300px",borderRadius:"50%",background:"#F7C948",opacity:0.18,pointerEvents:"none"}} />
        <div style={{position:"absolute",top:"40px",left:"-60px",width:"220px",height:"220px",borderRadius:"50%",background:"#2A9D8F",opacity:0.15,pointerEvents:"none"}} />

        <div style={{...S.wrap,width:"100%",position:"relative",zIndex:1}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 360px",gap:"56px",alignItems:"center"}}>

            {/* Left */}
            <div>
              <div style={{
                display:"inline-flex",alignItems:"center",gap:"8px",
                background:"rgba(247,201,72,0.18)",border:"1px solid rgba(247,201,72,0.4)",
                color:"#F7C948",fontSize:"11px",fontWeight:700,padding:"6px 14px",
                borderRadius:"20px",marginBottom:"22px",letterSpacing:"0.08em",textTransform:"uppercase"
              }}>🇩🇪 Official-style guidance portal</div>

              <h1 style={S.h1}>
                <span style={{color:"#fff"}}>Your future<br />starts </span>
                <span style={{color:"#F7C948"}}>here</span>
                <span style={{color:"#fff"}}> in Germany</span>
              </h1>

              <p style={{color:"rgba(255,255,255,0.72)",marginTop:"18px",fontSize:"17px",lineHeight:1.7,maxWidth:"500px"}}>
                Independent, friendly guidance for skilled workers, students and families moving to Germany — visas, jobs, banking and everyday life.
              </p>

              <div style={{display:"flex",gap:"14px",flexWrap:"wrap",marginTop:"32px"}}>
                <Link href="/visa" className="btn btn-red">Start Quick-Check →</Link>
                <Link href="/finances" className="btn btn-ghost-light">Open a free bank account</Link>
              </div>
            </div>

            {/* Quick-Check Card */}
            <div style={{background:"#fff",borderRadius:"24px",padding:"32px",boxShadow:"0 24px 64px rgba(0,0,0,0.28)"}}>
              <p style={{fontFamily:'"Syne",ui-sans-serif',fontWeight:700,fontSize:"20px",color:"#1D3557",margin:"0 0 4px"}}>Quick-Check</p>
              <p style={{fontSize:"13px",color:"#888",margin:"0 0 22px"}}>Find your path to Germany in seconds</p>

              <label style={{fontSize:"11.5px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:"#666",display:"block",marginBottom:"6px"}}>I'd like to…</label>
              <select style={{width:"100%",padding:"12px 14px",border:"2px solid #e8e8f0",borderRadius:"12px",fontSize:"14px",background:"#f8f8fc",marginBottom:"14px",fontFamily:"inherit",cursor:"pointer"}}>
                <option value="">Please select</option>
                <option>Work in Germany</option>
                <option>Study in Germany</option>
                <option>Do vocational training</option>
                <option>Start a business</option>
                <option>Do research</option>
              </select>

              <label style={{fontSize:"11.5px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:"#666",display:"block",marginBottom:"6px"}}>Coming from…</label>
              <select style={{width:"100%",padding:"12px 14px",border:"2px solid #e8e8f0",borderRadius:"12px",fontSize:"14px",background:"#f8f8fc",marginBottom:"20px",fontFamily:"inherit",cursor:"pointer"}}>
                <option value="">Select country</option>
                <option>India</option>
                <option>Turkey</option>
                <option>Brazil</option>
                <option>Vietnam</option>
                <option>Philippines</option>
                <option>Mexico</option>
                <option>Other</option>
              </select>

              <Link href="/visa" className="btn btn-red" style={{width:"100%",display:"flex",justifyContent:"center"}}>Check my options →</Link>

              <div style={{display:"flex",gap:"8px",marginTop:"14px"}}>
                <Link href="/finances" className="qpill">💳 Banking</Link>
                <Link href="/visa" className="qpill">🛂 Visa</Link>
                <Link href="/work" className="qpill">💼 Jobs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ STATS BAR ════ */}
      <div style={{background:"#E63946"}}>
        <div style={S.wrap}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
            {[
              {n:"1.8M+",l:"Open job positions"},
              {n:"190+", l:"Nations represented"},
              {n:"450+", l:"Advisory centres"},
              {n:"€3,700",l:"Avg. monthly wage"},
            ].map((s,i) => (
              <div key={s.l} style={{textAlign:"center",padding:"22px 16px",borderRight:i<3?"1px solid rgba(255,255,255,0.22)":"none"}}>
                <div style={{fontFamily:'"Syne",ui-sans-serif',fontWeight:800,fontSize:"clamp(1.6rem,2.5vw,2rem)",color:"#fff"}}>{s.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,0.72)",marginTop:"3px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════ GUIDE CARDS ════ */}
      <section style={S.sec}>
        <span className="slabel">Your step-by-step guide</span>
        <h2 style={S.h2}>Working &amp; living in Germany — where to start</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"16px",marginTop:"32px"}}>
          {[
            {e:"🔍",t:"Check your options",d:"Discover which visa and recognition pathways apply to you.",h:"/visa",c:"Start Quick-Check"},
            {e:"💼",t:"Find a job",d:"Search thousands of vacancies across Germany's industries.",h:"/work",c:"Browse jobs"},
            {e:"🛂",t:"Plan visa & entry",d:"Step-by-step guidance on visa types and applications.",h:"/visa",c:"Visa info"},
            {e:"💳",t:"Set up banking",d:"Open a free account & card before you land.",h:"/finances",c:"Banking guide"},
            {e:"🏡",t:"Settle in",d:"Language tips, housing, schools and everyday life.",h:"/living",c:"Living guide"},
          ].map(c => (
            <Link key={c.t} href={c.h} className="guide-card">
              <div style={{width:"48px",height:"48px",borderRadius:"14px",background:"#f0f4ff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px"}}>{c.e}</div>
              <div style={{marginTop:"14px",fontWeight:700,color:"#1D3557",fontSize:"14px",lineHeight:1.35}}>{c.t}</div>
              <div style={{marginTop:"6px",fontSize:"12.5px",color:"#666",lineHeight:1.55,flex:1}}>{c.d}</div>
              <div style={{marginTop:"12px",fontSize:"12.5px",fontWeight:600,color:"#1c5fe6"}}>{c.c} →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════ WHY GERMANY ════ */}
      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{maxWidth:"1100px",margin:"0 auto",background:"#1D3557",borderRadius:"28px",padding:"56px",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",width:"400px",height:"400px",top:"-100px",right:"-80px",borderRadius:"50%",background:"rgba(255,255,255,0.04)",pointerEvents:"none"}} />
          <div style={{position:"absolute",width:"250px",height:"250px",bottom:"-60px",left:"180px",borderRadius:"50%",background:"rgba(230,57,70,0.08)",pointerEvents:"none"}} />

          <div style={{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"1fr 1fr",gap:"56px",alignItems:"center"}}>
            <div>
              <span className="slabel" style={{color:"#F7C948"}}>Why Germany?!</span>
              <h2 style={{...S.h2,color:"#fff"}}>Freedom, diversity &amp; stability</h2>
              <p style={{marginTop:"14px",color:"rgba(255,255,255,0.65)",lineHeight:1.75,fontSize:"16px"}}>
                High living standards, fair working conditions and a strong sense of solidarity. Liberal democratic values guarantee a self-determined, safe life for you and your family.
              </p>
              <Link href="/living" className="btn btn-red" style={{marginTop:"28px",display:"inline-flex"}}>Discover why Germany →</Link>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
              {[
                {i:"🌍",t:"International community",d:"People from 190+ nations shaping the future — a strong welcome network awaits you."},
                {i:"⚖️",t:"Diversity in the workplace",d:"German companies champion equal opportunities, fairness and mutual respect by law."},
                {i:"🎓",t:"Future-proof education",d:"World-class German qualifications open doors globally — academic or vocational."},
              ].map(p => (
                <div key={p.t} style={{display:"flex",gap:"14px",alignItems:"flex-start",background:"rgba(255,255,255,0.07)",borderRadius:"16px",padding:"18px 20px",border:"1px solid rgba(255,255,255,0.1)"}}>
                  <div style={{width:"44px",height:"44px",borderRadius:"12px",background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",flexShrink:0}}>{p.i}</div>
                  <div>
                    <div style={{fontWeight:700,color:"#fff",fontSize:"15px"}}>{p.t}</div>
                    <div style={{marginTop:"3px",fontSize:"13px",color:"rgba(255,255,255,0.55)",lineHeight:1.55}}>{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════ TOP JOBS ════ */}
      <section style={{...S.sec,borderTop:"1px solid #ebebf0",paddingTop:"4rem"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"16px",marginBottom:"32px"}}>
          <div>
            <span className="slabel">High demand</span>
            <h2 style={S.h2}>Top in-demand professions in Germany</h2>
          </div>
          <Link href="/work" className="btn btn-white">All job listings →</Link>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
          {[
            {e:"💻",t:"IT Specialists",d:"Software engineers, data scientists, cloud architects.",b:"🔥 High demand",bc:"bdg-red"},
            {e:"⚙️",t:"Engineers",d:"Mechanical, electrical, civil and automotive.",b:"🔥 High demand",bc:"bdg-red"},
            {e:"🏥",t:"Nursing Professionals",d:"Registered nurses, care workers, elderly care.",b:"↑ Growing",bc:"bdg-teal"},
            {e:"👩‍⚕️",t:"Physicians",d:"GPs, specialists, hospital doctors.",b:"↑ Growing",bc:"bdg-teal"},
            {e:"🔨",t:"Craftspeople",d:"Electricians, plumbers, construction specialists.",b:"🔥 High demand",bc:"bdg-red"},
            {e:"🌱",t:"Green Jobs",d:"Renewable energy, sustainability, enviro engineering.",b:"↑ Growing",bc:"bdg-teal"},
            {e:"🔬",t:"Scientists",d:"Research in chemistry, biology, physics.",b:"● Stable",bc:"bdg-blue"},
            {e:"🚛",t:"Transport Professions",d:"Drivers, logistics coordinators.",b:"↑ Growing",bc:"bdg-teal"},
            {e:"🎓",t:"Vocational Trainees",d:"Open apprenticeship placements nationwide.",b:"● Open now",bc:"bdg-blue"},
          ].map(j => (
            <Link key={j.t} href="/work" className="job-card">
              <div style={{display:"flex",gap:"14px",alignItems:"flex-start"}}>
                <div style={{width:"48px",height:"48px",borderRadius:"14px",background:"#f5f5fa",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",flexShrink:0}}>{j.e}</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,color:"#1D3557",fontSize:"15px"}}>{j.t}</div>
                  <div style={{fontSize:"13px",color:"#666",marginTop:"3px",lineHeight:1.5}}>{j.d}</div>
                  <span className={`bdg ${j.bc}`} style={{marginTop:"10px",display:"inline-block"}}>{j.b}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════ 3 PILLARS ════ */}
      <div style={{background:"#f0f2f7",padding:"5rem 1.5rem"}}>
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div style={{textAlign:"center",maxWidth:"560px",margin:"0 auto 44px"}}>
            <span className="slabel">One country, many perspectives</span>
            <h2 style={S.h2}>Germany — a country that works for you</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"22px"}}>
            {[
              {n:"01",t:"International community",d:"Over 190 nationalities collaborate and thrive. A strong expat network means you're never starting alone.",cls:"pc1"},
              {n:"02",t:"Diversity in work environment",d:"German employers champion equal opportunities and foster a culture of respect, openness and belonging.",cls:"pc2"},
              {n:"03",t:"Future-proof education",d:"Whether academic or vocational, qualifications earned in Germany open doors worldwide.",cls:"pc3"},
            ].map(p => (
              <div key={p.n} className={p.cls}>
                <div style={{fontFamily:'"Syne",ui-sans-serif',fontWeight:800,fontSize:"52px",lineHeight:1,opacity:0.18,color:"#1D3557",marginBottom:"14px"}}>{p.n}</div>
                <div style={{fontFamily:'"Syne",ui-sans-serif',fontWeight:700,fontSize:"20px",color:"#1D3557",marginBottom:"10px"}}>{p.t}</div>
                <div style={{fontSize:"15px",color:"#555",lineHeight:1.65}}>{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════ FEATURED TOPICS ════ */}
      <section style={S.sec}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"56px",alignItems:"start"}}>
          <div>
            <span className="slabel">Trending now</span>
            <h2 style={{...S.h2,marginBottom:"24px"}}>Featured topics</h2>
            {[
              {n:"01",tag:"Visa",t:"The Opportunity Card: job searching in Germany"},
              {n:"02",tag:"Studies",t:"Staying in Germany after studying: prospects for international students"},
              {n:"03",tag:"Career",t:"Insights from IT specialists: how to build a career in Germany"},
              {n:"04",tag:"Transport",t:"Skilled workers in transport: working in one of Germany's biggest sectors"},
              {n:"05",tag:"Immigration Act",t:"The Skilled Immigration Act — what changed and what it means for you"},
            ].map(item => (
              <Link key={item.n} href="/work" className="topic-item">
                <span style={{fontFamily:'"Syne",ui-sans-serif',fontWeight:800,fontSize:"13px",color:"#E63946",width:"28px",flexShrink:0}}>{item.n}</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:"10.5px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:"#bbb",marginBottom:"3px"}}>{item.tag}</div>
                  <div className="t-title" style={{fontWeight:600,fontSize:"15px",lineHeight:1.4,color:"#1a1a2e",transition:"color 0.18s"}}>{item.t}</div>
                </div>
                <span className="t-arrow">→</span>
              </Link>
            ))}
          </div>

          {/* Feature image card */}
          <div style={{borderRadius:"24px",overflow:"hidden",background:"#1D3557",aspectRatio:"4/5",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"32px",position:"relative"}}>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,#1D3557,#457B9D 50%,#2A9D8F)"}} />
            <div style={{position:"absolute",top:"-60px",right:"-60px",width:"260px",height:"260px",borderRadius:"50%",background:"#F4A261",opacity:0.18}} />
            <div style={{position:"absolute",bottom:"60px",right:"10px",width:"200px",height:"200px",borderRadius:"50%",background:"#E63946",opacity:0.15}} />
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(29,53,87,0.95) 0%, rgba(29,53,87,0.25) 60%, transparent 100%)"}} />
            <div style={{position:"relative",zIndex:1}}>
              <span style={{display:"inline-block",background:"#F7C948",color:"#1D3557",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",padding:"5px 13px",borderRadius:"20px",marginBottom:"16px"}}>Success Story</span>
              <div style={{fontFamily:'"Syne",ui-sans-serif',fontWeight:700,fontSize:"24px",color:"#fff",lineHeight:1.25,marginBottom:"10px"}}>From abroad to a thriving career in Germany</div>
              <div style={{fontSize:"14px",color:"rgba(255,255,255,0.62)",lineHeight:1.65}}>Discover how skilled workers from around the world are making it — and building the lives they dreamed of.</div>
              <Link href="/about" style={{marginTop:"20px",display:"inline-flex",alignItems:"center",gap:"8px",background:"#fff",color:"#1D3557",textDecoration:"none",fontSize:"13px",fontWeight:700,padding:"10px 20px",borderRadius:"30px"}}>Read their stories →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════ VIDEO STORIES ════ */}
      <div style={{background:"#f0f2f7",padding:"5rem 1.5rem"}}>
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"16px",marginBottom:"32px"}}>
            <div>
              <span className="slabel">Real stories</span>
              <h2 style={S.h2}>Video stories: people who made it</h2>
            </div>
            <Link href="/about" className="btn btn-white">Watch all stories →</Link>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
            {[
              {bg:"linear-gradient(135deg,#457B9D,#1D3557)",cat:"Studies → Career",cc:"#5a9fc4",t:"From university to energy expert: Sina's career in Germany",name:"Sina — Energy Efficiency Expert",av:"S",ab:"#457B9D"},
              {bg:"linear-gradient(135deg,#2A9D8F,#1D6B62)",cat:"IT Specialist",cc:"#2A9D8F",t:"How the fast-track procedure helped Marah land her IT job",name:"Marah — Software Developer",av:"M",ab:"#2A9D8F"},
              {bg:"linear-gradient(135deg,#F4A261,#E76F51)",cat:"Green Jobs",cc:"#b0522a",t:"Jamal's career in renewable energy: contributing to Germany's green future",name:"Jamal — Electrical Engineer",av:"J",ab:"#E76F51"},
            ].map(v => (
              <div key={v.name} className="video-card">
                <div style={{height:"176px",background:v.bg,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
                  <div className="play-btn">
                    <div style={{width:0,height:0,borderTop:"9px solid transparent",borderBottom:"9px solid transparent",borderLeft:"16px solid #E63946",marginLeft:"3px"}} />
                  </div>
                </div>
                <div style={{padding:"18px 20px"}}>
                  <div style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:v.cc,marginBottom:"6px"}}>{v.cat}</div>
                  <div style={{fontWeight:600,fontSize:"15px",lineHeight:1.4,color:"#1D3557"}}>{v.t}</div>
                  <div style={{display:"flex",alignItems:"center",gap:"10px",marginTop:"14px",paddingTop:"14px",borderTop:"1px solid #ebebf0"}}>
                    <div style={{width:"32px",height:"32px",borderRadius:"50%",background:v.ab,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",fontWeight:700,color:"#fff",flexShrink:0}}>{v.av}</div>
                    <div style={{fontSize:"13px",fontWeight:500,color:"#666"}}>{v.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════ BANKING TEASER ════ */}
      <section style={S.sec}>
        <div style={{background:"linear-gradient(135deg,#1c5fe6,#0d3586)",borderRadius:"28px",padding:"56px",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",width:"300px",height:"300px",top:"-80px",right:"-50px",borderRadius:"50%",background:"rgba(255,255,255,0.07)",pointerEvents:"none"}} />
          <div style={{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px",alignItems:"center"}}>
            <div>
              <span style={{display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(255,255,255,0.5)",marginBottom:"8px"}}>Money &amp; Banking</span>
              <h2 style={{...S.h2,color:"#fff"}}>Set up your money before you land</h2>
              <p style={{marginTop:"12px",color:"rgba(255,255,255,0.68)",lineHeight:1.75,fontSize:"16px"}}>Open a free German IBAN with Wise or Commerzbank (50€ bonus), send money internationally for free, and get a fee-free Mastercard Gold with Advanzia.</p>
              <Link href="/finances" style={{marginTop:"24px",display:"inline-flex",alignItems:"center",gap:"8px",background:"#fff",color:"#1c5fe6",textDecoration:"none",padding:"12px 24px",borderRadius:"14px",fontWeight:700,fontSize:"15px"}}>See all banking options →</Link>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"12px"}}>
              {[
                {n:"Wise",d:"Free intl. transfers",e:"🌐"},
                {n:"Commerzbank",d:"German IBAN + 50€",e:"🏦"},
                {n:"Advanzia",d:"Fee-free credit card",e:"💳"},
              ].map(b => (
                <div key={b.n} style={{background:"rgba(255,255,255,0.1)",borderRadius:"16px",padding:"20px 14px",textAlign:"center",border:"1px solid rgba(255,255,255,0.15)"}}>
                  <div style={{fontSize:"2rem"}}>{b.e}</div>
                  <div style={{marginTop:"8px",fontSize:"13px",fontWeight:700,color:"#fff"}}>{b.n}</div>
                  <div style={{marginTop:"4px",fontSize:"11px",color:"rgba(255,255,255,0.55)",lineHeight:1.4}}>{b.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ CONTACT CTA ════ */}
      <div style={{padding:"0 1.5rem 5rem"}}>
        <div style={{maxWidth:"1100px",margin:"0 auto",background:"#E63946",borderRadius:"28px",padding:"56px",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",width:"300px",height:"300px",top:"-80px",right:"-50px",borderRadius:"50%",background:"rgba(255,255,255,0.07)"}} />
          <div style={{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"1fr auto",gap:"40px",alignItems:"center"}}>
            <div>
              <h2 style={{fontFamily:'"Syne",ui-sans-serif',fontWeight:800,fontSize:"clamp(1.5rem,2vw,2rem)",color:"#fff",marginBottom:"8px"}}>Do you have any questions?</h2>
              <p style={{fontSize:"17px",color:"rgba(255,255,255,0.75)"}}>Receive expert advice on jobs, visas, qualification recognition and learning German.</p>
            </div>
            <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
              {[
                {label:"✉️ E-Mail",href:"/service"},
                {label:"📞 Hotline",href:"/service"},
                {label:"💬 Live Chat",href:"/service"},
                {label:"❓ FAQ",href:"/service"},
              ].map(c => (
                <Link key={c.label} href={c.href} className="ch-btn">{c.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
