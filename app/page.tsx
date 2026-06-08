import Link from "next/link";

const D = '"Syne",ui-sans-serif,system-ui,sans-serif';
const J = '"Plus Jakarta Sans",ui-sans-serif,system-ui,sans-serif';

// Unsplash HD images — free, no API key needed
const HERO_BG = "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1800&q=90&auto=format&fit=crop"; // Berlin Brandenburg Gate
const GERMANY_BG = "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=900&q=85&auto=format&fit=crop"; // Germany skyline
const ITALY_BG   = "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&q=85&auto=format&fit=crop"; // Rome Colosseum
const SWEDEN_BG  = "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=900&q=85&auto=format&fit=crop"; // Stockholm
const UK_BG      = "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=85&auto=format&fit=crop"; // London
const STUDENTS_BG = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85&auto=format&fit=crop"; // diverse students
const CITY_BG    = "https://images.unsplash.com/photo-1554535987-7f7e1e8c4a4b?w=1200&q=85&auto=format&fit=crop"; // Frankfurt skyline

export default function Page() {
  return (
    <div style={{ background: "#f8f8f6" }}>

      {/* ════════════════════ HERO ════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "620px", display: "flex", alignItems: "center" }}>
        {/* HD background image */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover", backgroundPosition: "center 30%",
          filter: "brightness(0.35)"
        }} />
        {/* gradient overlay */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(105deg, rgba(15,31,61,0.95) 0%, rgba(15,31,61,0.7) 55%, rgba(230,57,70,0.25) 100%)" }} />
        {/* decorative circles */}
        <div style={{ position: "absolute", top: "-120px", right: "-80px", width: "500px", height: "500px", borderRadius: "50%", background: "#E63946", opacity: 0.12, zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: "-60px", right: "180px", width: "280px", height: "280px", borderRadius: "50%", background: "#f5c842", opacity: 0.12, zIndex: 1 }} />

        <div className="wrap" style={{ position: "relative", zIndex: 2, width: "100%", padding: "90px 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 370px", gap: "56px", alignItems: "center" }}>

            {/* Left */}
            <div>
              {/* trust badge */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(245,200,66,.15)", border: "1px solid rgba(245,200,66,.4)", color: "#f5c842", fontSize: "12px", fontWeight: 700, padding: "7px 16px", borderRadius: "999px", marginBottom: "24px", letterSpacing: "0.06em" }}>
                <span>🇵🇰 🇮🇳 🇧🇩 🇦🇫</span> Trusted by 50,000+ South Asians
              </div>

              <h1 className="h1" style={{ color: "#fff", marginBottom: "20px" }}>
                Your European<br />
                dream starts<br />
                <span style={{ color: "#f5c842" }}>right here</span>
              </h1>

              <p style={{ color: "rgba(255,255,255,.75)", fontSize: "18px", lineHeight: 1.7, maxWidth: "500px", marginBottom: "32px" }}>
                Complete visa guidance, job search, banking & appointment help for students and professionals from Pakistan, India, Bangladesh & Afghanistan moving to Germany, Italy, Sweden or the UK.
              </p>

              {/* country chips */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
                {[
                  { flag: "🇩🇪", name: "Germany", color: "#e8e8e8" },
                  { flag: "🇮🇹", name: "Italy", color: "#e8e8e8" },
                  { flag: "🇸🇪", name: "Sweden", color: "#e8e8e8" },
                  { flag: "🇬🇧", name: "UK", color: "#e8e8e8" },
                ].map(c => (
                  <div key={c.name} style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", borderRadius: "999px", padding: "6px 14px", fontSize: "13px", fontWeight: 600, color: "#fff" }}>
                    {c.flag} {c.name}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <Link href="/visa" className="btn btn-red">Check my visa options →</Link>
                <Link href="/finances" className="btn btn-outline-light">Open a free bank account</Link>
              </div>
            </div>

            {/* Quick-Check Card */}
            <div style={{ background: "#fff", borderRadius: "24px", padding: "34px", boxShadow: "0 28px 70px rgba(0,0,0,.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg,#E63946,#a81e31)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "16px" }}>🧭</div>
                <div>
                  <p style={{ fontFamily: D, fontWeight: 800, fontSize: "18px", color: "#0f1f3d", lineHeight: 1 }}>Quick-Check</p>
                  <p style={{ fontSize: "12px", color: "#9ca3af" }}>Find your path in 30 seconds</p>
                </div>
              </div>

              <div style={{ height: "1px", background: "#f0f0f0", margin: "16px 0" }} />

              <label style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b7280", display: "block", marginBottom: "7px" }}>I want to…</label>
              <select style={{ width: "100%", padding: "12px 14px", border: "2px solid #e8e8ec", borderRadius: "12px", fontSize: "14px", background: "#f9fafb", marginBottom: "13px", fontFamily: J, cursor: "pointer" }}>
                <option value="">Please select</option>
                <option>Work in Europe</option>
                <option>Study in Europe</option>
                <option>Do vocational training</option>
                <option>Start a business</option>
                <option>Family reunification</option>
                <option>Book a visa appointment</option>
              </select>

              <label style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b7280", display: "block", marginBottom: "7px" }}>Destination country</label>
              <select style={{ width: "100%", padding: "12px 14px", border: "2px solid #e8e8ec", borderRadius: "12px", fontSize: "14px", background: "#f9fafb", marginBottom: "13px", fontFamily: J, cursor: "pointer" }}>
                <option value="">Select country</option>
                <option>🇩🇪 Germany</option>
                <option>🇮🇹 Italy</option>
                <option>🇸🇪 Sweden</option>
                <option>🇬🇧 United Kingdom</option>
              </select>

              <label style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b7280", display: "block", marginBottom: "7px" }}>I'm from…</label>
              <select style={{ width: "100%", padding: "12px 14px", border: "2px solid #e8e8ec", borderRadius: "12px", fontSize: "14px", background: "#f9fafb", marginBottom: "18px", fontFamily: J, cursor: "pointer" }}>
                <option value="">Select country</option>
                <option>🇵🇰 Pakistan</option>
                <option>🇮🇳 India</option>
                <option>🇧🇩 Bangladesh</option>
                <option>🇦🇫 Afghanistan</option>
                <option>🌍 Other country</option>
              </select>

              <Link href="/visa" className="btn btn-red" style={{ width: "100%", display: "flex", justifyContent: "center" }}>Show my options →</Link>

              <div style={{ display: "flex", gap: "7px", marginTop: "12px" }}>
                <Link href="/finances" className="qpill">💳 Banking</Link>
                <Link href="/visa" className="qpill">🛂 Visa</Link>
                <Link href="/work" className="qpill">💼 Jobs</Link>
                <Link href="/service" className="qpill">📋 Appt.</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ STATS BAR ════ */}
      <div style={{ background: "#E63946" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
            {[
              { n: "50K+", l: "Families helped" },
              { n: "4", l: "Countries covered" },
              { n: "98%", l: "Visa success rate" },
              { n: "24h", l: "Support response" },
            ].map((s, i) => (
              <div key={s.l} style={{ textAlign: "center", padding: "22px 16px", borderRight: i < 3 ? "1px solid rgba(255,255,255,.22)" : "none" }}>
                <div style={{ fontFamily: D, fontWeight: 800, fontSize: "clamp(1.6rem,2.5vw,2rem)", color: "#fff" }}>{s.n}</div>
                <div style={{ fontSize: "12.5px", color: "rgba(255,255,255,.72)", marginTop: "3px" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════ DESTINATION COUNTRIES ════ */}
      <section className="sec">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 44px" }}>
          <span className="slabel">Choose your destination</span>
          <h2 className="h2">Where do you want to go?</h2>
          <p style={{ marginTop: "10px", color: "#6b7280", fontSize: "16px", lineHeight: 1.6 }}>
            Complete guidance for 4 of Europe's most popular destinations for South Asian immigrants — all in one place.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
          {[
            { flag: "🇩🇪", name: "Germany", desc: "EU Blue Card · Opportunity Card · Skilled Worker Visa", color: "#1D3557", img: GERMANY_BG, tag: "Most popular", href: "/visa" },
            { flag: "🇮🇹", name: "Italy", desc: "Student Visa · Work Permit · Decreto Flussi", color: "#00684a", img: ITALY_BG, tag: "Coming soon", href: "/" },
            { flag: "🇸🇪", name: "Sweden", desc: "Work Permit · Student Visa · Residence Permit", color: "#003087", img: SWEDEN_BG, tag: "Coming soon", href: "/" },
            { flag: "🇬🇧", name: "United Kingdom", desc: "Skilled Worker · Student · Graduate Route", color: "#012169", img: UK_BG, tag: "Coming soon", href: "/" },
          ].map(c => (
            <Link key={c.name} href={c.href} className="country-card" style={{ minHeight: "320px" }}>
              {/* HD bg image */}
              <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${c.img})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.55)", transition: "filter .3s" }} />
              {/* gradient */}
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${c.color}ee 0%, ${c.color}88 45%, transparent 100%)` }} />
              {/* content */}
              <div style={{ position: "absolute", inset: 0, padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "40px", filter: "drop-shadow(0 2px 4px rgba(0,0,0,.3))" }}>{c.flag}</span>
                  <span style={{ background: c.tag === "Most popular" ? "#f5c842" : "rgba(255,255,255,.25)", color: c.tag === "Most popular" ? "#0f1f3d" : "#fff", fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px", border: c.tag !== "Most popular" ? "1px solid rgba(255,255,255,.3)" : "none", backdropFilter: "blur(4px)" }}>{c.tag}</span>
                </div>
                <div>
                  <div style={{ fontFamily: D, fontWeight: 800, fontSize: "22px", color: "#fff", marginBottom: "6px" }}>{c.name}</div>
                  <div style={{ fontSize: "12.5px", color: "rgba(255,255,255,.72)", lineHeight: 1.5 }}>{c.desc}</div>
                  <div style={{ marginTop: "14px", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 700, color: c.tag === "Most popular" ? "#f5c842" : "rgba(255,255,255,.7)" }}>
                    {c.tag === "Most popular" ? "Explore Germany →" : "Coming soon"}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════ GUIDE CARDS ════ */}
      <div style={{ background: "#fff", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <span className="slabel">Step-by-step</span>
          <h2 className="h2" style={{ marginBottom: "32px" }}>How EuroPathway helps you</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "16px" }}>
            {[
              { e: "🧭", t: "Check your options", d: "Find the right visa path for your profile and destination.", h: "/visa", c: "Start now" },
              { e: "💼", t: "Find a job", d: "Search vacancies in Germany suited for South Asians.", h: "/work", c: "Browse jobs" },
              { e: "🗓️", t: "Book appointments", d: "Embassy & Ausländerbehörde appointment guidance.", h: "/service", c: "Appointment help" },
              { e: "💳", t: "Set up banking", d: "Free EU account & card before you arrive.", h: "/finances", c: "Banking guide" },
              { e: "🏡", t: "Settle in", d: "Housing, German courses, registration & daily life.", h: "/living", c: "Living guide" },
            ].map(c => (
              <Link key={c.t} href={c.h} className="guide-card">
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#fff1f2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>{c.e}</div>
                <div style={{ marginTop: "14px", fontWeight: 700, color: "#0f1f3d", fontSize: "14px", lineHeight: 1.35 }}>{c.t}</div>
                <div style={{ marginTop: "6px", fontSize: "12.5px", color: "#6b7280", lineHeight: 1.55, flex: 1 }}>{c.d}</div>
                <div style={{ marginTop: "12px", fontSize: "12.5px", fontWeight: 700, color: "#E63946" }}>{c.c} →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ════ SOUTH ASIA SECTION ════ */}
      <section style={{ position: "relative", overflow: "hidden", padding: "5rem 1.5rem" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${STUDENTS_BG})`, backgroundSize: "cover", backgroundPosition: "center 40%", filter: "brightness(0.2)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,31,61,0.97) 0%, rgba(15,31,61,0.85) 60%, rgba(230,57,70,0.3) 100%)" }} />

        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <span className="slabel" style={{ color: "#f5c842" }}>Built for you</span>
              <h2 className="h2" style={{ color: "#fff" }}>Made for South Asian students &amp; professionals</h2>
              <p style={{ marginTop: "14px", color: "rgba(255,255,255,.65)", lineHeight: 1.75, fontSize: "16px" }}>
                We understand the specific challenges you face — complex documentation, long embassy wait times, degree recognition, language barriers and finding the right visa path. EuroPathway was built to solve exactly these problems.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "28px" }}>
                {[
                  { e: "🇵🇰", t: "Pakistan", d: "Schengen, student & work visa guidance" },
                  { e: "🇮🇳", t: "India", d: "EU Blue Card & skilled worker support" },
                  { e: "🇧🇩", t: "Bangladesh", d: "Study & vocational training paths" },
                  { e: "🇦🇫", t: "Afghanistan", d: "Special protection & residence routes" },
                ].map(o => (
                  <div key={o.t} style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "16px", padding: "16px" }}>
                    <div style={{ fontSize: "24px", marginBottom: "6px" }}>{o.e}</div>
                    <div style={{ fontWeight: 700, color: "#fff", fontSize: "14px" }}>{o.t}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,.5)", marginTop: "3px", lineHeight: 1.45 }}>{o.d}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { name: "Ayesha K.", origin: "🇵🇰 Lahore, Pakistan", role: "Software Engineer · Berlin", text: "EuroPathway guided me through every step of my EU Blue Card application. I had my visa in 6 weeks!", avatar: "AK", c: "#E63946" },
                { name: "Rahul M.", origin: "🇮🇳 Mumbai, India", role: "Mechanical Engineer · Munich", text: "The appointment booking guide saved me months. I finally got my Ausländerbehörde slot after weeks of trying.", avatar: "RM", c: "#2A9D8F" },
                { name: "Fatima N.", origin: "🇧🇩 Dhaka, Bangladesh", role: "Nursing Student · Hamburg", text: "From finding the right university to opening my Commerzbank account — this site covered everything.", avatar: "FN", c: "#457B9D" },
              ].map(t => (
                <div key={t.name} className="tcard">
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: t.c, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 800, color: "#fff", flexShrink: 0 }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "15px", color: "#0f1f3d" }}>{t.name}</div>
                      <div style={{ fontSize: "12px", color: "#9ca3af" }}>{t.origin} · {t.role}</div>
                    </div>
                    <div style={{ marginLeft: "auto", fontSize: "22px", color: "#f5c842" }}>★★★★★</div>
                  </div>
                  <p style={{ marginTop: "12px", fontSize: "14px", color: "#374151", lineHeight: 1.65, fontStyle: "italic" }}>"{t.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ TOP JOBS ════ */}
      <section className="sec" style={{ paddingTop: "4rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "32px" }}>
          <div>
            <span className="slabel">High demand</span>
            <h2 className="h2">Top jobs for South Asian professionals in Germany</h2>
          </div>
          <Link href="/work" className="btn btn-white">All vacancies →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}>
          {[
            { e: "💻", t: "IT Specialists", d: "Software engineers, data scientists, cloud architects.", b: "🔥 Highest demand", bc: "bdg-red" },
            { e: "⚙️", t: "Engineers", d: "Mechanical, electrical, civil — all branches.", b: "🔥 High demand", bc: "bdg-red" },
            { e: "🏥", t: "Nursing Professionals", d: "Registered nurses, care workers, elderly care.", b: "↑ Growing fast", bc: "bdg-teal" },
            { e: "👩‍⚕️", t: "Physicians & Doctors", d: "GPs, specialists — urgent shortage across Germany.", b: "↑ Growing fast", bc: "bdg-teal" },
            { e: "🔨", t: "Craftspeople", d: "Electricians, plumbers, construction specialists.", b: "🔥 High demand", bc: "bdg-red" },
            { e: "🌱", t: "Green Jobs", d: "Renewable energy, sustainability, enviro engineering.", b: "↑ Growing", bc: "bdg-teal" },
            { e: "🔬", t: "Scientists / Researchers", d: "Chemistry, biology, physics, materials science.", b: "● Stable", bc: "bdg-blue" },
            { e: "🚛", t: "Transport & Logistics", d: "Drivers, freight coordinators, supply chain.", b: "↑ Growing", bc: "bdg-teal" },
            { e: "🎓", t: "Vocational Training (Ausbildung)", d: "Apprenticeship positions open across all sectors.", b: "● Open now", bc: "bdg-gold" },
          ].map(j => (
            <Link key={j.t} href="/work" className="job-card">
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>{j.e}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: "#0f1f3d", fontSize: "15px" }}>{j.t}</div>
                  <div style={{ fontSize: "13px", color: "#6b7280", marginTop: "3px", lineHeight: 1.5 }}>{j.d}</div>
                  <span className={`bdg ${j.bc}`} style={{ marginTop: "10px", display: "inline-block" }}>{j.b}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════ FEATURED TOPICS ════ */}
      <div style={{ background: "#fff", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "start" }}>
            <div>
              <span className="slabel">Trending guides</span>
              <h2 className="h2" style={{ marginBottom: "24px" }}>Most-read articles</h2>
              {[
                { n: "01", tag: "Visa 🇩🇪", t: "Germany Opportunity Card: how to apply from Pakistan & India" },
                { n: "02", tag: "Banking", t: "Best bank accounts for newcomers in Germany (2025)" },
                { n: "03", tag: "Studies 🇩🇪", t: "Study in Germany for free: universities that don't charge tuition" },
                { n: "04", tag: "Appointment", t: "How to get a German embassy appointment from Pakistan in 2025" },
                { n: "05", tag: "IT Career", t: "IT professionals from India in Germany: salary, visa & relocation" },
                { n: "06", tag: "Ausbildung", t: "Vocational training (Ausbildung) — is it the right path for you?" },
              ].map(item => (
                <Link key={item.n} href="/work" className="topic-item">
                  <span style={{ fontFamily: D, fontWeight: 800, fontSize: "13px", color: "#E63946", width: "28px", flexShrink: 0 }}>{item.n}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "10.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#d1d5db", marginBottom: "3px" }}>{item.tag}</div>
                    <div className="t-title" style={{ fontWeight: 600, fontSize: "14.5px", lineHeight: 1.4, color: "#111827" }}>{item.t}</div>
                  </div>
                  <span className="t-arrow">→</span>
                </Link>
              ))}
            </div>

            {/* Feature card */}
            <div style={{ borderRadius: "24px", overflow: "hidden", aspectRatio: "4/5", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "32px", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${CITY_BG})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.45)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,31,61,0.96) 0%, rgba(15,31,61,0.3) 60%, transparent 100%)" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <span style={{ display: "inline-block", background: "#f5c842", color: "#0f1f3d", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", padding: "5px 13px", borderRadius: "999px", marginBottom: "16px" }}>✨ Success Story</span>
                <div style={{ fontFamily: D, fontWeight: 800, fontSize: "24px", color: "#fff", lineHeight: 1.25, marginBottom: "10px" }}>
                  "I moved from Karachi to Berlin — here's everything I wish I knew"
                </div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,.6)", lineHeight: 1.65, marginBottom: "20px" }}>
                  Zainab shares her complete journey: visa application, job search, Anmeldung and settling in Germany as a Pakistani software engineer.
                </div>
                <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", color: "#0f1f3d", textDecoration: "none", fontSize: "13px", fontWeight: 800, padding: "10px 20px", borderRadius: "999px" }}>Read Zainab's story →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════ BANKING TEASER ════ */}
      <section className="sec">
        <div style={{ background: "linear-gradient(135deg,#1c5fe6,#0d3586)", borderRadius: "28px", padding: "56px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", width: "300px", height: "300px", top: "-80px", right: "-50px", borderRadius: "50%", background: "rgba(255,255,255,.07)" }} />
          <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <div>
              <span style={{ display: "block", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,.5)", marginBottom: "10px" }}>💳 Banking & Money</span>
              <h2 className="h2" style={{ color: "#fff" }}>Set up your money before you land</h2>
              <p style={{ marginTop: "14px", color: "rgba(255,255,255,.68)", lineHeight: 1.75, fontSize: "16px" }}>
                Open a free German IBAN with Wise or Commerzbank (50€ bonus), send money home for free, and get a fee-free Mastercard Gold with Advanzia.
              </p>
              <Link href="/finances" style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", color: "#1c5fe6", textDecoration: "none", padding: "13px 26px", borderRadius: "14px", fontWeight: 800, fontSize: "15px" }}>See all banking options →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }}>
              {[
                { n: "Wise", d: "Send money to Pakistan/India for free", e: "🌐", badge: "Best for transfers" },
                { n: "Commerzbank", d: "German IBAN + 50€ starting bonus", e: "🏦", badge: "50€ bonus" },
                { n: "Advanzia", d: "No annual fee Mastercard Gold", e: "💳", badge: "0€ annual fee" },
              ].map(b => (
                <div key={b.n} style={{ background: "rgba(255,255,255,.1)", borderRadius: "16px", padding: "18px 12px", textAlign: "center", border: "1px solid rgba(255,255,255,.15)" }}>
                  <div style={{ fontSize: "1.8rem" }}>{b.e}</div>
                  <div style={{ margin: "8px 0 3px", fontSize: "13px", fontWeight: 800, color: "#fff" }}>{b.n}</div>
                  <div style={{ fontSize: "10.5px", color: "rgba(255,255,255,.55)", lineHeight: 1.4, marginBottom: "8px" }}>{b.d}</div>
                  <div style={{ background: "rgba(245,200,66,.25)", color: "#f5c842", fontSize: "10px", fontWeight: 700, padding: "3px 8px", borderRadius: "999px", display: "inline-block" }}>{b.badge}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ CONTACT CTA ════ */}
      <div style={{ padding: "0 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", background: "linear-gradient(135deg,#E63946,#a81e31)", borderRadius: "28px", padding: "56px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", width: "350px", height: "350px", top: "-80px", right: "-60px", borderRadius: "50%", background: "rgba(255,255,255,.07)" }} />
          <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: D, fontWeight: 800, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", color: "#fff", marginBottom: "10px" }}>
                Need personalised help?
              </h2>
              <p style={{ fontSize: "17px", color: "rgba(255,255,255,.75)", lineHeight: 1.65 }}>
                Book a 1-on-1 consultation with our immigration experts. We speak Urdu, Hindi, Bengali &amp; English.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                { label: "📅 Book consultation", href: "/service" },
                { label: "✉️ Email us", href: "/service" },
                { label: "💬 WhatsApp", href: "/service" },
                { label: "❓ FAQ", href: "/service" },
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
