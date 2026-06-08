import Link from "next/link";

export default function Page() {
  return (
    <div style={{background:"#fafaf8"}}>

      {/* ── HERO ── */}
      <section style={{
        background:"#1D3557", position:"relative", overflow:"hidden",
        padding:"90px 0 80px"
      }}>
        {/* blobs */}
        <div style={{position:"absolute",top:"-150px",right:"-100px",width:"520px",height:"520px",borderRadius:"50%",background:"#E63946",opacity:0.15,pointerEvents:"none"}} />
        <div style={{position:"absolute",bottom:"-80px",right:"200px",width:"300px",height:"300px",borderRadius:"50%",background:"#F7C948",opacity:0.18,pointerEvents:"none"}} />
        <div style={{position:"absolute",top:"40px",left:"-60px",width:"220px",height:"220px",borderRadius:"50%",background:"#2A9D8F",opacity:0.15,pointerEvents:"none"}} />

        <div className="container-narrow" style={{position:"relative",zIndex:1}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 360px",gap:"60px",alignItems:"center"}}>

            {/* left text */}
            <div>
              <div style={{
                display:"inline-flex",alignItems:"center",gap:"8px",
                background:"rgba(247,201,72,0.18)",border:"1px solid rgba(247,201,72,0.4)",
                color:"#F7C948",fontSize:"11px",fontWeight:700,padding:"6px 14px",
                borderRadius:"20px",marginBottom:"20px",letterSpacing:"0.08em",textTransform:"uppercase"
              }}>
                🇩🇪 Official-style guidance portal
              </div>
              <h1 className="h1" style={{color:"#fff"}}>
                Your future<br />
                starts{" "}
                <span style={{color:"#F7C948"}}>here</span>{" "}
                in Germany
              </h1>
              <p className="lead" style={{color:"rgba(255,255,255,0.72)",marginTop:"18px",maxWidth:"520px"}}>
                Independent, friendly guidance for skilled workers, students and
                families moving to Germany — visas, jobs, banking and everyday
                life, all in one place.
              </p>
              <div style={{display:"flex",gap:"14px",flexWrap:"wrap",marginTop:"32px"}}>
                <Link href="/visa" className="btn btn-primary">Start Quick-Check →</Link>
                <Link href="/finances" className="btn btn-outline-light">Open a free bank account</Link>
              </div>
            </div>

            {/* Quick-Check card */}
            <div style={{
              background:"#fff",borderRadius:"24px",padding:"32px",
              boxShadow:"0 24px 60px rgba(0,0,0,0.28)"
            }}>
              <p style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"20px",color:"#1D3557"}}>Quick-Check</p>
              <p style={{fontSize:"13px",color:"#888",marginTop:"4px",marginBottom:"20px"}}>Find your path to Germany in seconds</p>

              <label style={{fontSize:"12px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:"#555",display:"block",marginBottom:"6px"}}>I'd like to…</label>
              <select style={{
                width:"100%",padding:"11px 14px",border:"2px solid #e8e8f0",
                borderRadius:"12px",fontSize:"14px",background:"#f8f8fc",
                marginBottom:"14px",fontFamily:"inherit",cursor:"pointer",
                appearance:"none"
              }}>
                <option value="">Please select</option>
                <option>Work in Germany</option>
                <option>Study in Germany</option>
                <option>Do vocational training</option>
                <option>Start a business</option>
                <option>Do research</option>
              </select>

              <label style={{fontSize:"12px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:"#555",display:"block",marginBottom:"6px"}}>Coming from…</label>
              <select style={{
                width:"100%",padding:"11px 14px",border:"2px solid #e8e8f0",
                borderRadius:"12px",fontSize:"14px",background:"#f8f8fc",
                marginBottom:"18px",fontFamily:"inherit",cursor:"pointer",
                appearance:"none"
              }}>
                <option value="">Select country</option>
                <option>India</option>
                <option>Turkey</option>
                <option>Brazil</option>
                <option>Vietnam</option>
                <option>Mexico</option>
                <option>Other</option>
              </select>

              <Link href="/visa" className="btn btn-primary" style={{width:"100%",justifyContent:"center"}}>
                Check my options →
              </Link>

              <div style={{display:"flex",gap:"8px",marginTop:"16px"}}>
                <Link href="/finances" className="quick-pill">💳 Banking</Link>
                <Link href="/visa" className="quick-pill">🛂 Visa</Link>
                <Link href="/work" className="quick-pill">💼 Jobs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{background:"#E63946"}}>
        <div className="container-narrow" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
          {[
            {n:"1.8M+",l:"Open job positions"},
            {n:"190+", l:"Nations represented"},
            {n:"450+", l:"Advisory centres"},
            {n:"€3,700",l:"Avg. monthly wage"},
          ].map((s,i) => (
            <div key={s.l} style={{
              textAlign:"center",padding:"20px",
              borderRight: i<3 ? "1px solid rgba(255,255,255,0.2)" : "none"
            }}>
              <div style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(1.5rem,2vw,2rem)",color:"#fff"}}>{s.n}</div>
              <div style={{fontSize:"12px",color:"rgba(255,255,255,0.72)",marginTop:"2px"}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── GUIDE CARDS ── */}
      <section className="section">
        <span className="section-label">Your step-by-step guide</span>
        <h2 className="h2">Working &amp; living in Germany — where to start</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"18px",marginTop:"36px"}}>
          {[
            {emoji:"🔍",title:"Check your options",desc:"Discover which visa and recognition pathways apply to you.",href:"/visa",cta:"Start Quick-Check"},
            {emoji:"💼",title:"Find a job",desc:"Search thousands of vacancies across Germany's industries.",href:"/work",cta:"Browse jobs"},
            {emoji:"🛂",title:"Plan visa & entry",desc:"Step-by-step guidance on visa types and applications.",href:"/visa",cta:"Visa info"},
            {emoji:"💳",title:"Set up banking",desc:"Open a free account & card before you land.",href:"/finances",cta:"Banking guide"},
            {emoji:"🏡",title:"Settle in",desc:"Language tips, housing, schools and everyday life.",href:"/living",cta:"Living guide"},
          ].map(c => (
            <Link key={c.title} href={c.href} className="guide-card">
              <div className="guide-card-icon">{c.emoji}</div>
              <div style={{marginTop:"16px",fontWeight:700,color:"#1D3557",fontSize:"14px",lineHeight:1.3}}>{c.title}</div>
              <div style={{marginTop:"6px",fontSize:"12.5px",color:"#666",lineHeight:1.5}}>{c.desc}</div>
              <div style={{marginTop:"14px",fontSize:"12.5px",fontWeight:600,color:"#1c5fe6"}}>{c.cta} →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHY GERMANY ── */}
      <div style={{padding:"0 1.25rem 5rem"}}>
        <div style={{
          background:"#1D3557",borderRadius:"28px",padding:"64px 56px",
          position:"relative",overflow:"hidden"
        }}>
          <div style={{position:"absolute",width:"400px",height:"400px",top:"-100px",right:"-100px",borderRadius:"50%",background:"rgba(255,255,255,0.04)",pointerEvents:"none"}} />
          <div style={{position:"absolute",width:"250px",height:"250px",bottom:"-60px",left:"200px",borderRadius:"50%",background:"rgba(230,57,70,0.08)",pointerEvents:"none"}} />

          <div style={{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"1fr 1fr",gap:"60px",alignItems:"center"}}>
            <div>
              <span className="section-label" style={{color:"#F7C948"}}>Why Germany?!</span>
              <h2 className="h2" style={{color:"#fff"}}>Freedom, diversity &amp; stability</h2>
              <p style={{marginTop:"14px",color:"rgba(255,255,255,0.65)",lineHeight:1.7,fontSize:"16px"}}>
                High living standards, fair working conditions and a strong sense of solidarity.
                Liberal democratic values guarantee a self-determined, safe life for you and your family.
              </p>
              <Link href="/living" className="btn btn-primary" style={{marginTop:"28px",display:"inline-flex"}}>
                Discover why Germany →
              </Link>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
              {[
                {icon:"🌍",title:"International community",desc:"People from 190+ nations shaping the future together with a strong welcome network."},
                {icon:"⚖️",title:"Diversity in the workplace",desc:"German companies lead on equal opportunities, fairness and mutual respect by law."},
                {icon:"🎓",title:"Future-proof education",desc:"World-class German qualifications open doors globally — academic or vocational."},
              ].map(p => (
                <div key={p.title} style={{
                  display:"flex",gap:"16px",alignItems:"flex-start",
                  background:"rgba(255,255,255,0.06)",borderRadius:"16px",padding:"18px 20px",
                  border:"1px solid rgba(255,255,255,0.1)"
                }}>
                  <div style={{
                    width:"44px",height:"44px",borderRadius:"12px",background:"rgba(255,255,255,0.1)",
                    display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",flexShrink:0
                  }}>{p.icon}</div>
                  <div>
                    <div style={{fontWeight:700,color:"#fff",fontSize:"15px"}}>{p.title}</div>
                    <div style={{marginTop:"3px",fontSize:"13px",color:"rgba(255,255,255,0.55)",lineHeight:1.5}}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── TOP JOBS ── */}
      <section className="section" style={{borderTop:"1px solid #ebebf0",paddingTop:"4rem"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"16px",marginBottom:"36px"}}>
          <div>
            <span className="section-label">High demand</span>
            <h2 className="h2">Top in-demand professions in Germany</h2>
          </div>
          <Link href="/work" className="btn btn-ghost">All job listings →</Link>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"18px"}}>
          {[
            {icon:"💻",title:"IT Specialists",desc:"Software engineers, data scientists, cloud architects.",badge:"🔥 High demand",bc:"badge-red"},
            {icon:"⚙️",title:"Engineers",desc:"Mechanical, electrical, civil and automotive.",badge:"🔥 High demand",bc:"badge-red"},
            {icon:"🏥",title:"Nursing Professionals",desc:"Registered nurses, care workers, elderly care.",badge:"↑ Growing",bc:"badge-teal"},
            {icon:"👩‍⚕️",title:"Physicians",desc:"GPs, specialists, hospital doctors.",badge:"↑ Growing",bc:"badge-teal"},
            {icon:"🔨",title:"Craftspeople",desc:"Electricians, plumbers, construction specialists.",badge:"🔥 High demand",bc:"badge-red"},
            {icon:"🌱",title:"Green Jobs",desc:"Renewable energy, sustainability, enviro engineering.",badge:"↑ Growing",bc:"badge-teal"},
            {icon:"🔬",title:"Scientists",desc:"Research in chemistry, biology, physics.",badge:"● Stable",bc:"badge-blue"},
            {icon:"🚛",title:"Transport Professions",desc:"Drivers, logistics coordinators.",badge:"↑ Growing",bc:"badge-teal"},
            {icon:"🎓",title:"Vocational Trainees",desc:"Open apprenticeship placements nationwide.",badge:"● Open now",bc:"badge-blue"},
          ].map(j => (
            <Link key={j.title} href="/work" className="job-card">
              <div style={{display:"flex",gap:"14px",alignItems:"flex-start"}}>
                <div className="job-icon">{j.icon}</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontWeight:700,color:"#1D3557",fontSize:"15px"}}>{j.title}</div>
                  <div style={{fontSize:"13px",color:"#666",marginTop:"3px",lineHeight:1.5}}>{j.desc}</div>
                  <span className={`badge-demand ${j.bc}`} style={{marginTop:"10px",display:"inline-block"}}>{j.badge}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 3 PILLARS ── */}
      <section className="section" style={{background:"#f5f5fa",paddingTop:"4rem",paddingBottom:"4rem",maxWidth:"100%"}}>
        <div className="container-narrow">
          <div style={{textAlign:"center",maxWidth:"560px",margin:"0 auto 44px"}}>
            <span className="section-label">One country, many perspectives</span>
            <h2 className="h2">Germany — a country that works for you</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}}>
            {[
              {n:"01",title:"International community",desc:"Over 190 nationalities collaborate and thrive. A strong expat network means you're never starting alone.",cls:"pillar-card-1"},
              {n:"02",title:"Diversity in work environment",desc:"German employers champion equal opportunities and foster a culture of respect, openness and belonging.",cls:"pillar-card-2"},
              {n:"03",title:"Future-proof education",desc:"Whether academic or vocational, qualifications earned in Germany open doors worldwide.",cls:"pillar-card-3"},
            ].map(p => (
              <div key={p.n} className={`pillar-card ${p.cls}`}>
                <div style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"52px",lineHeight:1,opacity:0.18,color:"#1D3557",marginBottom:"14px"}}>{p.n}</div>
                <div style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"20px",color:"#1D3557",marginBottom:"10px"}}>{p.title}</div>
                <div style={{fontSize:"15px",color:"#555",lineHeight:1.65}}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED TOPICS ── */}
      <section className="section" style={{borderTop:"1px solid #ebebf0"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"56px",alignItems:"start"}}>
          <div>
            <span className="section-label">Trending now</span>
            <h2 className="h2" style={{marginBottom:"28px"}}>Featured topics</h2>
            {[
              {n:"01",tag:"Visa",title:"The Opportunity Card: job searching in Germany"},
              {n:"02",tag:"Studies",title:"Staying in Germany after studying: prospects for international students"},
              {n:"03",tag:"Career",title:"Insights from IT specialists: how to build a career in Germany"},
              {n:"04",tag:"Transport",title:"Skilled workers in transport: working in one of Germany's biggest sectors"},
              {n:"05",tag:"Immigration Act",title:"The Skilled Immigration Act — what changed and what it means for you"},
            ].map(t => (
              <Link key={t.n} href="/work" className="topic-item">
                <span style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"13px",color:"#E63946",width:"28px",flexShrink:0}}>{t.n}</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:"#aaa",marginBottom:"3px"}}>{t.tag}</div>
                  <div style={{fontWeight:600,fontSize:"15px",lineHeight:1.4,color:"#1a1a2e"}}>{t.title}</div>
                </div>
                <span className="topic-arrow">→</span>
              </Link>
            ))}
          </div>

          {/* Feature card */}
          <div style={{
            borderRadius:"24px",overflow:"hidden",background:"#1D3557",
            aspectRatio:"4/5",display:"flex",flexDirection:"column",
            justifyContent:"flex-end",padding:"32px",position:"relative"
          }}>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,#1D3557,#457B9D 50%,#2A9D8F)"}} />
            <div style={{position:"absolute",top:"-60px",right:"-60px",width:"250px",height:"250px",borderRadius:"50%",background:"#F4A261",opacity:0.18}} />
            <div style={{position:"absolute",bottom:"80px",right:"20px",width:"200px",height:"200px",borderRadius:"50%",background:"#E63946",opacity:0.15}} />
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(29,53,87,0.95) 0%, rgba(29,53,87,0.3) 60%, transparent 100%)"}} />
            <div style={{position:"relative",zIndex:1}}>
              <span style={{
                display:"inline-block",background:"#F7C948",color:"#1D3557",
                fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",
                padding:"5px 12px",borderRadius:"20px",marginBottom:"16px"
              }}>Success Story</span>
              <div style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"24px",color:"#fff",lineHeight:1.25,marginBottom:"10px"}}>
                From abroad to a thriving career in Germany
              </div>
              <div style={{fontSize:"14px",color:"rgba(255,255,255,0.62)",lineHeight:1.6}}>
                Discover how skilled workers from around the world are making it — and building the lives they dreamed of.
              </div>
              <Link href="/about" style={{
                marginTop:"20px",display:"inline-flex",alignItems:"center",gap:"8px",
                background:"#fff",color:"#1D3557",textDecoration:"none",
                fontSize:"13px",fontWeight:700,padding:"10px 20px",borderRadius:"30px",transition:"all 0.2s"
              }}>Read their stories →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO STORIES ── */}
      <section className="section" style={{background:"#f5f5fa",maxWidth:"100%",paddingTop:"4rem",paddingBottom:"4rem"}}>
        <div className="container-narrow">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"16px",marginBottom:"36px"}}>
            <div>
              <span className="section-label">Real stories</span>
              <h2 className="h2">Video stories: people who made it</h2>
            </div>
            <Link href="/about" className="btn btn-ghost">Watch all stories →</Link>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"22px"}}>
            {[
              {bg:"linear-gradient(135deg,#457B9D,#1D3557)",cat:"Studies → Career",catColor:"#5a9fc4",title:"From university to energy expert: Sina's career in Germany",name:"Sina — Energy Efficiency Expert",av:"S",avBg:"#457B9D"},
              {bg:"linear-gradient(135deg,#2A9D8F,#1D6B62)",cat:"IT Specialist",catColor:"#2A9D8F",title:"How the fast-track procedure helped Marah land her IT job",name:"Marah — Software Developer",av:"M",avBg:"#2A9D8F"},
              {bg:"linear-gradient(135deg,#F4A261,#E76F51)",cat:"Green Jobs",catColor:"#c0602a",title:"Jamal's career in renewable energy: contributing to Germany's green future",name:"Jamal — Electrical Engineer",av:"J",avBg:"#E76F51"},
            ].map(v => (
              <div key={v.name} className="video-card">
                <div style={{height:"180px",background:v.bg,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
                  <div className="play-btn"><div className="play-icon" /></div>
                </div>
                <div style={{padding:"20px"}}>
                  <div style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:v.catColor,marginBottom:"6px"}}>{v.cat}</div>
                  <div style={{fontWeight:600,fontSize:"15px",lineHeight:1.4,color:"#1D3557"}}>{v.title}</div>
                  <div style={{display:"flex",alignItems:"center",gap:"10px",marginTop:"14px",paddingTop:"14px",borderTop:"1px solid #ebebf0"}}>
                    <div style={{width:"32px",height:"32px",borderRadius:"50%",background:v.avBg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",fontWeight:700,color:"#fff",flexShrink:0}}>{v.av}</div>
                    <div style={{fontSize:"13px",fontWeight:500,color:"#666"}}>{v.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANKING TEASER ── */}
      <section className="section">
        <div style={{
          background:"linear-gradient(135deg,#1c5fe6,#0d3586)",
          borderRadius:"28px",padding:"56px",overflow:"hidden",position:"relative"
        }}>
          <div style={{position:"absolute",width:"300px",height:"300px",top:"-80px",right:"-50px",borderRadius:"50%",background:"rgba(255,255,255,0.07)",pointerEvents:"none"}} />
          <div style={{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px",alignItems:"center"}}>
            <div>
              <span style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(255,255,255,0.5)",marginBottom:"8px",display:"block"}}>Money &amp; Banking</span>
              <h2 className="h2" style={{color:"#fff"}}>Set up your money before you land</h2>
              <p style={{marginTop:"12px",color:"rgba(255,255,255,0.68)",lineHeight:1.7,fontSize:"16px"}}>
                Open a free German IBAN with Wise or Commerzbank, send money internationally for free, and get a fee-free Mastercard Gold with Advanzia.
              </p>
              <Link href="/finances" style={{
                marginTop:"24px",display:"inline-flex",alignItems:"center",gap:"8px",
                background:"#fff",color:"#1c5fe6",textDecoration:"none",padding:"12px 24px",
                borderRadius:"14px",fontWeight:700,fontSize:"15px",transition:"all 0.2s"
              }}>See all banking options →</Link>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"12px"}}>
              {[
                {name:"Wise",desc:"Free international transfers",emoji:"🌐"},
                {name:"Commerzbank",desc:"German current account + 50€",emoji:"🏦"},
                {name:"Advanzia",desc:"Fee-free credit card",emoji:"💳"},
              ].map(b => (
                <div key={b.name} style={{
                  background:"rgba(255,255,255,0.1)",borderRadius:"16px",padding:"20px 14px",
                  textAlign:"center",border:"1px solid rgba(255,255,255,0.15)"
                }}>
                  <div style={{fontSize:"2rem"}}>{b.emoji}</div>
                  <div style={{marginTop:"8px",fontSize:"13px",fontWeight:700,color:"#fff"}}>{b.name}</div>
                  <div style={{marginTop:"4px",fontSize:"11px",color:"rgba(255,255,255,0.55)",lineHeight:1.4}}>{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="section" style={{borderTop:"1px solid #ebebf0",paddingTop:"0",paddingBottom:"5rem"}}>
        <div style={{
          background:"#E63946",borderRadius:"28px",padding:"56px",
          position:"relative",overflow:"hidden"
        }}>
          <div style={{position:"absolute",width:"300px",height:"300px",top:"-80px",right:"-50px",borderRadius:"50%",background:"rgba(255,255,255,0.07)"}} />
          <div style={{position:"absolute",width:"200px",height:"200px",bottom:"-50px",right:"200px",borderRadius:"50%",background:"rgba(255,255,255,0.06)"}} />
          <div style={{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"1fr auto",gap:"40px",alignItems:"center"}}>
            <div>
              <h2 style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(1.5rem,2vw,2rem)",color:"#fff",marginBottom:"8px"}}>Do you have any questions?</h2>
              <p style={{fontSize:"17px",color:"rgba(255,255,255,0.75)"}}>Receive expert advice on jobs, visas, qualification recognition and learning German.</p>
            </div>
            <div style={{display:"flex",gap:"14px",flexWrap:"wrap"}}>
              {[
                {label:"✉️ E-Mail",href:"/service"},
                {label:"📞 Hotline",href:"/service"},
                {label:"💬 Live Chat",href:"/service"},
                {label:"❓ FAQ",href:"/service"},
              ].map(c => (
                <Link key={c.label} href={c.href} className="channel-btn">{c.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
