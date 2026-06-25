"use client";

const PD = "'Playfair Display',Georgia,serif";
const PS = "'Inter',system-ui,sans-serif";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: "32px" }}>
    <h2 style={{ fontFamily: PD, fontSize: "1.15rem", fontWeight: 800, color: "#FFCC02", marginBottom: "12px", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
      {title}
    </h2>
    {children}
  </div>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: ".875rem", color: "#94a3b8", lineHeight: 1.75, marginBottom: "10px" }}>{children}</p>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li style={{ fontSize: ".875rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "4px" }}>{children}</li>
);

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: "#111520", border: "1px solid rgba(255,255,255,.07)", borderRadius: "12px", padding: "16px 18px", margin: "12px 0", fontSize: ".875rem", color: "#94a3b8", lineHeight: 1.7 }}>
    {children}
  </div>
);

const Tbl = ({ rows }: { rows: string[][] }) => (
  <div style={{ overflowX: "auto", margin: "10px 0" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".82rem" }}>
      <thead>
        <tr style={{ background: "#111520" }}>
          {rows[0].map(h => (
            <th key={h} style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700, color: "#64748b", textTransform: "uppercase", fontSize: ".7rem", letterSpacing: ".05em" }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.slice(1).map((row, i) => (
          <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,.05)" }}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding: "9px 12px", color: "#94a3b8" }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: "#0a0d14", minHeight: "100vh", fontFamily: PS, color: "#f1f5f9" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg,#0B1D3A,#111520)", borderBottom: "1px solid rgba(255,255,255,.07)", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <a href="/" style={{ fontSize: ".82rem", color: "#64748b", textDecoration: "none", marginBottom: "16px", display: "block" }}>← Back to VisaVista</a>
          <h1 style={{ fontFamily: PD, fontSize: "2rem", fontWeight: 900, marginBottom: "8px" }}>🔒 Privacy Policy</h1>
          <p style={{ color: "#64748b", fontSize: ".9rem" }}>VisaVista — <strong style={{ color: "#94a3b8" }}>start-in-germany-full.vercel.app</strong></p>
          <div style={{ display: "inline-block", background: "rgba(255,204,2,.1)", border: "1px solid rgba(255,204,2,.2)", borderRadius: "8px", padding: "4px 12px", fontSize: ".75rem", color: "#FFCC02", marginTop: "12px" }}>
            Last updated: 13 June 2026
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "40px 24px 80px" }}>

        <Box>
          <strong style={{ color: "#f1f5f9" }}>Summary:</strong> VisaVista is a free immigration information platform. We do not sell your personal data. We use Google Analytics for visitor statistics. We display Google AdSense advertisements. We use partner referral links (Commerzbank, Advanzia, Wise) which help fund this free service.
        </Box>

        <Section title="1. Who we are">
          <P>VisaVista ("we", "our", "the platform") is a free immigration guidance service operated by Shaista Shabbir, Research Associate at TU Dortmund University and the Lamarr Institute for Machine Learning and Artificial Intelligence, Germany.</P>
          <P><strong style={{ color: "#f1f5f9" }}>Website:</strong> start-in-germany-full.vercel.app<br />
          <strong style={{ color: "#f1f5f9" }}>Contact:</strong> <a href="https://github.com/ShaistaShabbir-prog" target="_blank" rel="noopener" style={{ color: "#FFCC02" }}>github.com/ShaistaShabbir-prog</a></P>
        </Section>

        <Section title="2. What data we collect">
          <h3 style={{ fontSize: ".9rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "8px" }}>2.1 Data you provide voluntarily</h3>
          <P>VisaVista does not require account creation or login. If you contact us via WhatsApp ([CONTACT FORM]) or GitHub, those platforms' own privacy policies apply to data you share.</P>

          <h3 style={{ fontSize: ".9rem", fontWeight: 700, color: "#f1f5f9", margin: "16px 0 8px" }}>2.2 Data collected automatically</h3>
          <Tbl rows={[
            ["Data type", "Purpose", "Processed by"],
            ["IP address (anonymised)", "Analytics — visitor counts by region", "Google LLC"],
            ["Browser type and OS", "Compatibility improvements", "Google LLC"],
            ["Pages visited and duration", "Identify most useful content", "Google LLC"],
            ["Referral source", "Understand how users find us", "Google LLC"],
            ["Ad interactions", "AdSense advertising effectiveness", "Google LLC"],
          ]} />

          <h3 style={{ fontSize: ".9rem", fontWeight: 700, color: "#f1f5f9", margin: "16px 0 8px" }}>2.3 Browser localStorage (stays on your device)</h3>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "10px" }}>
            <Li><code style={{ background: "rgba(255,255,255,.07)", padding: "1px 5px", borderRadius: "4px", fontSize: ".8rem" }}>vv_saved_schol</code> — scholarships you bookmarked</Li>
            <Li>Chatbot conversation history (session only, cleared on browser close)</Li>
          </ul>
        </Section>

        <Section title="3. Google Analytics">
          <P>We use Google Analytics 4 to understand how many people visit VisaVista and which pages are most helpful. IP anonymisation is enabled. We do not use Analytics to identify individual visitors.</P>
          <P>
            Google Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" style={{ color: "#FFCC02" }}>policies.google.com/privacy</a><br />
            Opt out: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" style={{ color: "#FFCC02" }}>tools.google.com/dlpage/gaoptout</a>
          </P>
        </Section>

        <Section title="4. Google AdSense">
          <P>VisaVista displays advertisements through Google AdSense to help fund this free service. Google may use cookies to show you relevant ads based on your browsing history.</P>
          <P>You can opt out of personalised advertising at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener" style={{ color: "#FFCC02" }}>google.com/settings/ads</a> or via the <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener" style={{ color: "#FFCC02" }}>Your Online Choices</a> platform.</P>
          <P>AdSense Privacy: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener" style={{ color: "#FFCC02" }}>policies.google.com/technologies/ads</a></P>
        </Section>

        <Section title="5. Partner referral links">
          <P>VisaVista contains referral links to financial services we personally use and recommend. If you sign up through our links, we receive a small referral reward. This does not affect the product, price, or service you receive.</P>
          <Tbl rows={[
            ["Partner", "When you click", "Their privacy policy"],
            ["Commerzbank (code: PNGHRA)", "Taken to Commerzbank's secure site. They set cookies per their policy.", "commerzbank.de/datenschutz"],
            ["Advanzia Mastercard Gold", "Taken to Advanzia's secure application. They process your application data.", "advanzia.com/en/privacy-policy"],
            ["Wise", "Taken to Wise's secure platform. Wise processes international transfer data.", "wise.com/privacy-policy"],
          ]} />
        </Section>

        <Section title="6. Cookies">
          <P>VisaVista itself does not set first-party cookies. Cookies may be placed by:</P>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "10px" }}>
            <Li>Google Analytics — anonymised traffic measurement</Li>
            <Li>Google AdSense — personalised advertising</Li>
            <Li>Partner websites — only when you click a referral link</Li>
          </ul>
          <P>You can manage cookies through your browser settings. Refusing cookies will not prevent you from using VisaVista.</P>
        </Section>

        <Section title="7. Your rights (GDPR)">
          <P>If you are in the European Economic Area, you have these rights under GDPR:</P>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "10px" }}>
            <Li><strong style={{ color: "#f1f5f9" }}>Access</strong> — request a copy of personal data we hold about you</Li>
            <Li><strong style={{ color: "#f1f5f9" }}>Erasure</strong> — request deletion of your personal data</Li>
            <Li><strong style={{ color: "#f1f5f9" }}>Objection</strong> — object to processing for direct marketing</Li>
            <Li><strong style={{ color: "#f1f5f9" }}>Portability</strong> — receive your data in a portable format</Li>
            <Li><strong style={{ color: "#f1f5f9" }}>Complaint</strong> — lodge a complaint with a supervisory authority (in Germany: <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener" style={{ color: "#FFCC02" }}>BfDI</a>)</Li>
          </ul>
          <P>Since we do not store personal data on our servers, most GDPR rights apply to Google Analytics data. Contact Google at <a href="https://support.google.com/policies/contact/general_privacy_form" target="_blank" rel="noopener" style={{ color: "#FFCC02" }}>support.google.com</a> to exercise those rights.</P>
        </Section>

        <Section title="8. Children">
          <P>VisaVista is intended for adults (18+) seeking immigration and study abroad information. We do not knowingly collect or process data from children under 13.</P>
        </Section>

        <Section title="9. External links">
          <P>VisaVista links to official government websites (BAMF, embassies, DAAD, German states) and third-party services. We are not responsible for the privacy practices of those external sites.</P>
        </Section>

        <Section title="10. Data security">
          <P>VisaVista is hosted on Vercel, which provides HTTPS encryption and enterprise-grade infrastructure. We do not store form submissions, passwords, or sensitive personal data.</P>
        </Section>

        <Section title="11. Changes to this policy">
          <P>We may update this Privacy Policy as the service evolves. The "Last updated" date above will reflect changes. Continued use of VisaVista after changes constitutes acceptance of the updated policy.</P>
        </Section>

        <Section title="12. Contact us">
          <Box>
            <strong style={{ color: "#f1f5f9" }}>VisaVista</strong><br />
            Operated by: Shaista Shabbir<br />
            Affiliation: TU Dortmund University / Lamarr Institute for ML & AI, Germany<br />
            Website: <a href="https://start-in-germany-full.vercel.app" style={{ color: "#FFCC02" }}>start-in-germany-full.vercel.app</a><br />
            GitHub: <a href="https://github.com/ShaistaShabbir-prog" target="_blank" rel="noopener" style={{ color: "#FFCC02" }}>github.com/ShaistaShabbir-prog</a><br />
            WhatsApp: <a href="https://wa.me/XXXXXXXXXX" target="_blank" rel="noopener" style={{ color: "#FFCC02" }}>[CONTACT FORM]</a>
          </Box>
        </Section>

      </div>

      {/* Footer */}
      <div style={{ background: "#111520", borderTop: "1px solid rgba(255,255,255,.07)", padding: "20px 24px", textAlign: "center", fontSize: ".78rem", color: "#475569" }}>
        <a href="/" style={{ color: "#FFCC02", textDecoration: "none" }}>VisaVista</a>
        &nbsp;·&nbsp;
        <a href="/privacy-policy" style={{ color: "#475569", textDecoration: "none" }}>Privacy Policy</a>
        &nbsp;·&nbsp;
        Free immigration guidance · Not legal advice
      </div>

    </div>
  );
}
