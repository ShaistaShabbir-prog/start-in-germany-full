import Link from "next/link";

export default function Page() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-navy overflow-hidden">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-red-500 opacity-15" />
          <div className="absolute bottom-[-80px] right-[220px] h-[300px] w-[300px] rounded-full bg-amber-400 opacity-20" />
          <div className="absolute -top-10 -left-16 h-[220px] w-[220px] rounded-full bg-teal-400 opacity-15" />
        </div>

        <div className="container-narrow relative z-10 grid gap-10 py-20 md:grid-cols-[1fr_360px] md:items-center md:py-28">
          {/* left */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300">
              🇩🇪 Official-style guidance portal
            </div>
            <h1 className="h1 text-white">
              Your future<br />starts{" "}
              <span className="text-amber-400">here</span>{" "}
              in Germany
            </h1>
            <p className="lead mt-4 text-white/70">
              Independent, friendly guidance for skilled workers, students and
              families moving to Germany — visas, jobs, banking and everyday
              life, all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/visa" className="btn btn-primary">
                Start Quick-Check →
              </Link>
              <Link href="/finances" className="btn btn-outline-light">
                Open a free bank account
              </Link>
            </div>
          </div>

          {/* Quick-Check card */}
          <div className="rounded-3xl bg-white p-7 shadow-2xl">
            <p className="text-lg font-extrabold text-navy">Quick-Check</p>
            <p className="mt-1 text-sm text-gray-500">
              Find your path to Germany in seconds
            </p>
            <label className="mt-5 block text-xs font-semibold uppercase tracking-wide text-gray-600">
              I'd like to…
            </label>
            <select className="mt-2 w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none">
              <option value="">Please select</option>
              <option>Work in Germany</option>
              <option>Study in Germany</option>
              <option>Do vocational training</option>
              <option>Start a business</option>
              <option>Do research</option>
            </select>
            <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-gray-600">
              Coming from…
            </label>
            <select className="mt-2 w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none">
              <option value="">Select country</option>
              <option>India</option>
              <option>Turkey</option>
              <option>Brazil</option>
              <option>Vietnam</option>
              <option>Mexico</option>
              <option>Other</option>
            </select>
            <Link
              href="/visa"
              className="btn btn-primary mt-5 w-full justify-center"
            >
              Check my options
            </Link>
            <div className="mt-5 flex gap-2">
              <Link href="/finances" className="quick-pill">💳 Banking</Link>
              <Link href="/visa" className="quick-pill">🛂 Visa</Link>
              <Link href="/work" className="quick-pill">💼 Jobs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bg-brand-600">
        <div className="container-narrow grid grid-cols-2 gap-0 md:grid-cols-4">
          {[
            { n: "1.8M+", l: "Open job positions" },
            { n: "190+", l: "Nations represented" },
            { n: "450+", l: "Advisory centres" },
            { n: "€3,700", l: "Avg. monthly wage" },
          ].map((s) => (
            <div
              key={s.l}
              className="border-r border-white/20 px-6 py-5 text-center last:border-r-0"
            >
              <div className="text-2xl font-extrabold text-white md:text-3xl">
                {s.n}
              </div>
              <div className="mt-0.5 text-xs text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── GUIDE CARDS ── */}
      <section className="section">
        <div className="section-label">Your step-by-step guide</div>
        <h2 className="h2">Working &amp; living in Germany — where to start</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-5">
          {[
            { emoji: "🔍", title: "Check your options", desc: "Discover which visa and recognition pathways apply to you.", href: "/visa", cta: "Start Quick-Check" },
            { emoji: "💼", title: "Find a job", desc: "Search thousands of vacancies across Germany's booming industries.", href: "/work", cta: "Browse jobs" },
            { emoji: "🛂", title: "Plan visa & entry", desc: "Step-by-step guidance on visa types, applications and arrival.", href: "/visa", cta: "Visa info" },
            { emoji: "💳", title: "Set up banking", desc: "Open a free account & card before you even land in Germany.", href: "/finances", cta: "Banking guide" },
            { emoji: "🏡", title: "Settle in", desc: "Language tips, housing, schools and everyday life in your new home.", href: "/living", cta: "Living guide" },
          ].map((c) => (
            <Link key={c.title} href={c.href} className="guide-card group">
              <div className="guide-card-icon">{c.emoji}</div>
              <div className="mt-4 font-bold text-navy">{c.title}</div>
              <div className="mt-1.5 text-sm text-gray-500 leading-relaxed">{c.desc}</div>
              <div className="mt-4 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                {c.cta} →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHY GERMANY BANNER ── */}
      <section className="px-4 pb-16 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-14 md:px-14">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white opacity-5" />
            <div className="absolute bottom-[-40px] left-40 h-52 w-52 rounded-full bg-brand-500 opacity-10" />
          </div>
          <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="section-label text-amber-400">Why Germany?!</div>
              <h2 className="h2 text-white">Freedom, diversity &amp; stability</h2>
              <p className="mt-3 text-white/65 leading-relaxed">
                High living standards, fair working conditions, strong solidarity.
                Liberal democratic values guarantee a self-determined, safe life
                for you and your family.
              </p>
              <Link href="/living" className="btn btn-primary mt-6">
                Discover why Germany →
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: "🌍", title: "International community", desc: "People from 190+ nations shaping the future together." },
                { icon: "⚖️", title: "Diverse workplaces", desc: "Equal opportunities, fairness and mutual respect by law." },
                { icon: "🎓", title: "Future-proof education", desc: "World-class qualifications — academic or vocational." },
              ].map((p) => (
                <div key={p.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/6 p-5">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                    {p.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white">{p.title}</div>
                    <div className="mt-0.5 text-sm text-white/55">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TOP JOBS ── */}
      <section className="section border-t border-gray-100">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="section-label">High demand</div>
            <h2 className="h2">Top in-demand professions</h2>
          </div>
          <Link href="/work" className="btn btn-ghost">All job listings →</Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { icon: "💻", title: "IT Specialists", desc: "Software engineers, data scientists, cloud architects.", badge: "🔥 High demand", color: "red" },
            { icon: "⚙️", title: "Engineers", desc: "Mechanical, electrical, civil and automotive.", badge: "🔥 High demand", color: "red" },
            { icon: "🏥", title: "Nursing Professionals", desc: "Registered nurses, care workers, elderly care.", badge: "↑ Growing", color: "teal" },
            { icon: "👩‍⚕️", title: "Physicians", desc: "GPs, specialists, hospital doctors.", badge: "↑ Growing", color: "teal" },
            { icon: "🔨", title: "Craftspeople", desc: "Electricians, plumbers, construction specialists.", badge: "🔥 High demand", color: "red" },
            { icon: "🌱", title: "Green Jobs", desc: "Renewable energy, sustainability, enviro engineering.", badge: "↑ Growing", color: "teal" },
          ].map((j) => (
            <Link key={j.title} href="/work" className="job-card group">
              <div className="flex items-start gap-4">
                <div className="job-icon">{j.icon}</div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-navy">{j.title}</div>
                  <div className="mt-1 text-sm text-gray-500">{j.desc}</div>
                  <span className={`badge-demand badge-${j.color} mt-3`}>{j.badge}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── BANKING TEASER ── */}
      <section className="section">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="section-label text-brand-200">Money &amp; Banking</div>
              <h2 className="h2 text-white">Set up your money before you land</h2>
              <p className="mt-3 text-white/70">
                Open a free German bank account with Commerzbank, send money
                internationally for free with Wise, and get a fee-free credit card
                with Advanzia — all recommended by our team.
              </p>
              <Link href="/finances" className="btn mt-6 bg-white text-brand-700 hover:bg-brand-50">
                See all banking options →
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "Wise", desc: "Free international transfers", emoji: "🌐" },
                { name: "Commerzbank", desc: "German current account", emoji: "🏦" },
                { name: "Advanzia", desc: "Fee-free credit card", emoji: "💳" },
              ].map((b) => (
                <div key={b.name} className="rounded-2xl bg-white/10 p-4 text-center border border-white/15">
                  <div className="text-3xl">{b.emoji}</div>
                  <div className="mt-2 text-sm font-bold text-white">{b.name}</div>
                  <div className="mt-1 text-xs text-white/60">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="section border-t border-gray-100">
        <div className="overflow-hidden rounded-3xl bg-brand-600 px-8 py-12 text-white md:px-12">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="h2 text-white">Have questions?</h2>
              <p className="mt-2 text-white/75">
                Reach out via email, check the FAQ, or explore our service pages for
                expert advice on jobs, visas, and settling in.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "✉️ Email us", href: "/service" },
                { label: "❓ FAQ", href: "/service" },
                { label: "📋 Service overview", href: "/service" },
              ].map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  className="rounded-2xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/25"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
