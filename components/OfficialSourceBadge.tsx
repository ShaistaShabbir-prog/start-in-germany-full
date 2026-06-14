interface BadgeProps {
  source: "make-it-in-germany" | "bamf" | "federal-employment" | "anabin" | "aps" | "vfs" | "german-missions";
  label?: string;
  date?: string;
}

const SOURCES = {
  "make-it-in-germany": { label:"Make it in Germany", url:"https://www.make-it-in-germany.com", color:"#0066cc" },
  "bamf":               { label:"BAMF", url:"https://www.bamf.de", color:"#2563eb" },
  "federal-employment": { label:"Federal Employment Agency", url:"https://www.arbeitsagentur.de", color:"#16a34a" },
  "anabin":             { label:"Anabin/KMK", url:"https://anabin.kmk.org", color:"#7c3aed" },
  "aps":                { label:"APS", url:"https://www.aps.org.cn", color:"#dc2626" },
  "vfs":                { label:"VFS Global", url:"https://www.vfsglobal.com", color:"#ea580c" },
  "german-missions":    { label:"German Missions", url:"https://www.auswaertiges-amt.de", color:"#0B1D3A" },
};

export default function OfficialSourceBadge({ source, label, date }: BadgeProps) {
  const s = SOURCES[source];
  if (!s) return null;
  return (
    <a href={s.url} target="_blank" rel="noopener"
      style={{
        display:"inline-flex", alignItems:"center", gap:"5px",
        padding:"3px 9px", borderRadius:"6px",
        background:s.color+"15", border:`1px solid ${s.color}40`,
        fontSize:".65rem", fontWeight:700, color:s.color,
        textDecoration:"none", transition:"all .15s",
        whiteSpace:"nowrap" as const,
      }}
      title={`Source: ${s.label}${date ? " · Last checked: "+date : ""}`}
    >
      <span>✓</span>
      <span>{label || s.label}</span>
      {date && <span style={{opacity:.6}}>· {date}</span>}
      <span style={{opacity:.5}}>↗</span>
    </a>
  );
}
