import Link from "next/link";

export default function Footer() {
  const D = '"Syne",ui-sans-serif,system-ui,sans-serif';
  return (
    <footer style={{ background: "#0f1f3d", color: "#fff" }}>
      <div className="wrap" style={{ padding: "56px 1.5rem 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr", gap: "40px", paddingBottom: "48px", borderBottom: "1px solid rgba(255,255,255,.1)" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "12px", background: "linear-gradient(135deg,#E63946,#a81e31)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "15px", fontWeight: 900, boxShadow: "0 4px 12px rgba(230,57,70,.3)" }}>EP</div>
              <div>
                <div style={{ fontFamily: D, fontWeight: 800, fontSize: "18px" }}>EuroPathway</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,.4)", letterSpacing: "0.05em" }}>DE · IT · SE · UK</div>
              </div>
            </div>
            <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,.5)", lineHeight: 1.7, maxWidth: "280px", marginBottom: "18px" }}>
              Trusted immigration guidance for students and professionals from Pakistan, India, Bangladesh &amp; Afghanistan moving to Europe. Independent — not affiliated with any government.
            </p>
            <div style={{ display: "flex", gap: "6px", marginBottom: "16px" }}>
              {["🇵🇰", "🇮🇳", "🇧🇩", "🇦🇫"].map(f => (
                <span key={f} style={{ fontSize: "22px", filter: "drop-shadow(0 1px 2px rgba(0,0,0,.3))" }}>{f}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {["in", "ig", "yt", "𝕏"].map(s => (
                <div key={s} style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "rgba(255,255,255,.5)", cursor: "pointer" }}>{s}</div>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,.35)", marginBottom: "14px" }}>Destinations</div>
            {[
              { href: "/visa", label: "🇩🇪 Germany" },
              { href: "/", label: "🇮🇹 Italy (soon)" },
              { href: "/", label: "🇸🇪 Sweden (soon)" },
              { href: "/", label: "🇬🇧 UK (soon)" },
            ].map(l => <Link key={l.label} href={l.href} className="flink">{l.label}</Link>)}
          </div>

          {/* Resources */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,.35)", marginBottom: "14px" }}>Resources</div>
            {[
              { href: "/work", label: "Work in Germany" },
              { href: "/study", label: "Study & Ausbildung" },
              { href: "/visa", label: "Visa & Residence" },
              { href: "/living", label: "Living & Settling" },
              { href: "/finances", label: "💳 Banking & Money" },
              { href: "/service", label: "📅 Book Appointment" },
            ].map(l => <Link key={l.href} href={l.href} className="flink">{l.label}</Link>)}
          </div>

          {/* Legal & Contact */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,.35)", marginBottom: "14px" }}>Legal & Contact</div>
            {[
              { href: "/imprint", label: "Imprint" },
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
              { href: "/about", label: "About EuroPathway" },
            ].map(l => <Link key={l.href} href={l.href} className="flink">{l.label}</Link>)}
            <div style={{ marginTop: "14px", fontSize: "13px", color: "rgba(255,255,255,.4)" }}>
              Questions?<br />
              <a href="mailto:shaista.s.shabbir@gmail.com" style={{ color: "#f5c842", textDecoration: "underline" }}>shaista.s.shabbir@gmail.com</a>
            </div>
            <div style={{ marginTop: "10px" }}>
              <Link href="/service" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#E63946", color: "#fff", textDecoration: "none", fontSize: "12px", fontWeight: 700, padding: "8px 14px", borderRadius: "10px" }}>
                📅 Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 0", textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,.25)" }}>
        © {new Date().getFullYear()} EuroPathway — Independent immigration guidance. Not affiliated with any government or embassy.
      </div>
    </footer>
  );
}
