import Link from "next/link";

type Pathway = {
  icon: string;
  title: string;
  badge: string;
  description: string;
  points: string[];
};

type OfficialLink = {
  label: string;
  href: string;
  note: string;
};

export type CountryDestinationData = {
  country: string;
  flag: string;
  accent: string;
  accentDark: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  pathways: Pathway[];
  steps: string[];
  cities: Array<{ name: string; note: string }>;
  officialLinks: OfficialLink[];
};

const PD = '"Playfair Display",Georgia,serif';

export default function CountryDestinationPage({ data }: { data: CountryDestinationData }) {
  const whatsapp = `/contact?text=${encodeURIComponent(`Hi VisaVista! I need help with a ${data.country} visa.`)}`;

  return (
    <div style={{ background: "#F8FAFC", color: "#0F172A" }}>
      <section style={{ position: "relative", minHeight: "520px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${data.heroImage})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(.32) saturate(1.08)" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(110deg,rgba(11,29,58,.98),rgba(11,29,58,.78) 55%,${data.accent}55)` }} />
        <div style={{ width: "min(1200px, calc(100% - 40px))", margin: "0 auto", padding: "84px 0", position: "relative", zIndex: 1 }}>
          <span style={{ color: "#FCD34D", fontSize: "12px", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase" }}>{data.flag} {data.eyebrow}</span>
          <h1 style={{ maxWidth: "820px", margin: "14px 0 18px", color: "#fff", fontFamily: PD, fontSize: "clamp(2.5rem,6vw,4.8rem)", lineHeight: 1.04, letterSpacing: "-.04em" }}>{data.title}</h1>
          <p style={{ maxWidth: "720px", margin: "0 0 28px", color: "rgba(255,255,255,.76)", fontSize: "17px", lineHeight: 1.75 }}>{data.intro}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" style={{ padding: "13px 22px", borderRadius: "12px", background: data.accent, color: "#fff", textDecoration: "none", fontWeight: 800 }}>Get {data.country} visa help →</a>
            <Link href="/consultancy" style={{ padding: "13px 22px", border: "1px solid rgba(255,255,255,.35)", borderRadius: "12px", background: "rgba(255,255,255,.1)", color: "#fff", textDecoration: "none", fontWeight: 800 }}>Book consultation</Link>
          </div>
        </div>
      </section>

      <section style={{ width: "min(1200px, calc(100% - 40px))", margin: "0 auto", padding: "72px 0" }}>
        <span style={{ color: data.accentDark, fontSize: "12px", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase" }}>Visa pathways</span>
        <h2 style={{ margin: "8px 0 12px", fontFamily: PD, fontSize: "clamp(2rem,4vw,3rem)" }}>Choose the right route for {data.country}</h2>
        <p style={{ maxWidth: "760px", margin: "0 0 32px", color: "#64748B", lineHeight: 1.7 }}>Requirements depend on your nationality, purpose, sponsor, and application location. Use these summaries as a starting point, then confirm the current checklist on the linked official portal.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "20px" }}>
          {data.pathways.map((pathway) => (
            <article key={pathway.title} style={{ padding: "24px", border: "1px solid #E2E8F0", borderRadius: "20px", background: "#fff", boxShadow: "0 14px 38px rgba(15,23,42,.07)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "34px" }}>{pathway.icon}</span>
                <span style={{ padding: "4px 9px", borderRadius: "999px", background: `${data.accent}15`, color: data.accentDark, fontSize: "11px", fontWeight: 800 }}>{pathway.badge}</span>
              </div>
              <h3 style={{ margin: "14px 0 8px", fontFamily: PD, fontSize: "1.2rem" }}>{pathway.title}</h3>
              <p style={{ color: "#475569", fontSize: "13.5px", lineHeight: 1.65 }}>{pathway.description}</p>
              <ul style={{ margin: "16px 0 0", padding: 0, listStyle: "none", display: "grid", gap: "9px" }}>
                {pathway.points.map((point) => <li key={point} style={{ display: "flex", gap: "9px", color: "#334155", fontSize: "13px", lineHeight: 1.55 }}><span style={{ color: data.accent, fontWeight: 900 }}>✓</span>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff", borderBlock: "1px solid #E2E8F0" }}>
        <div style={{ width: "min(1200px, calc(100% - 40px))", margin: "0 auto", padding: "72px 0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "38px" }}>
          <div>
            <span style={{ color: data.accentDark, fontSize: "12px", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase" }}>Application flow</span>
            <h2 style={{ margin: "8px 0 22px", fontFamily: PD, fontSize: "2rem" }}>A practical application sequence</h2>
            <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "12px" }}>
              {data.steps.map((step, index) => <li key={step} style={{ display: "grid", gridTemplateColumns: "38px 1fr", gap: "12px", alignItems: "center", padding: "14px", borderRadius: "14px", background: "#F8FAFC", border: "1px solid #E2E8F0" }}><span style={{ width: "38px", height: "38px", display: "grid", placeItems: "center", borderRadius: "11px", background: data.accent, color: "#fff", fontWeight: 900 }}>{index + 1}</span><span style={{ color: "#334155", fontSize: "14px", lineHeight: 1.55 }}>{step}</span></li>)}
            </ol>
          </div>
          <div>
            <span style={{ color: data.accentDark, fontSize: "12px", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase" }}>Major destinations</span>
            <h2 style={{ margin: "8px 0 22px", fontFamily: PD, fontSize: "2rem" }}>Cities to research</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "12px" }}>
              {data.cities.map((city) => <div key={city.name} style={{ padding: "17px", borderRadius: "15px", background: `${data.accent}10`, border: `1px solid ${data.accent}30` }}><strong style={{ display: "block", color: data.accentDark }}>{city.name}</strong><small style={{ display: "block", marginTop: "5px", color: "#64748B", lineHeight: 1.45 }}>{city.note}</small></div>)}
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: "min(1200px, calc(100% - 40px))", margin: "0 auto", padding: "72px 0" }}>
        <span style={{ color: data.accentDark, fontSize: "12px", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase" }}>Verify before applying</span>
        <h2 style={{ margin: "8px 0 22px", fontFamily: PD, fontSize: "2rem" }}>Official {data.country} sources</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "15px" }}>
          {data.officialLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" style={{ padding: "19px", border: "1px solid #CBD5E1", borderRadius: "15px", background: "#fff", color: "#0F172A", textDecoration: "none", boxShadow: "0 9px 24px rgba(15,23,42,.05)" }}><strong style={{ display: "block" }}>{link.label} ↗</strong><small style={{ display: "block", marginTop: "5px", color: "#64748B", lineHeight: 1.5 }}>{link.note}</small></a>)}
        </div>
        <p style={{ marginTop: "22px", padding: "16px 18px", borderRadius: "13px", background: "#FFFBEB", border: "1px solid #FDE68A", color: "#854D0E", fontSize: "13px", lineHeight: 1.6 }}><strong>Important:</strong> VisaVista provides general guidance, not legal advice or a visa guarantee. Fees, document lists, eligibility, and processing rules can change. Always follow the embassy, visa centre, immigration authority, university, or sponsoring employer handling your case.</p>
      </section>
    </div>
  );
}
