"use client";
import { useState, useEffect } from "react";

const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';

interface NewsItem {
  title: string;
  summary: string;
  date: string;
  source: string;
  url: string;
  tag: string;
}

const TAG_COLORS: Record<string,{bg:string;color:string}> = {
  "Visa Update":  { bg:"#FEF3C7", color:"#92400E" },
  "Law Change":   { bg:"#FEE2E2", color:"#991B1B" },
  "Salary":       { bg:"#ECFDF5", color:"#065F46" },
  "Work Permit":  { bg:"#EFF6FF", color:"#1E40AF" },
  "New Visa":     { bg:"#F3E8FF", color:"#6B21A8" },
  "Processing":   { bg:"#F0F9FF", color:"#0C4A6E" },
  "Embassy":      { bg:"#FFF7ED", color:"#9A3412" },
  "Graduate Visa":{ bg:"#ECFDF5", color:"#065F46" },
  "Express Entry":{ bg:"#EFF6FF", color:"#1E40AF" },
};

export default function NewsWidget({ country }: { country: string }) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<number|null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/news?country=${country}`)
      .then(r => r.json())
      .then(d => { setNews(d.items || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [country]);

  if (loading) return (
    <div style={{padding:"32px",textAlign:"center",color:"#9CA3AF",fontSize:"14px",fontFamily:IN}}>
      <div style={{width:"24px",height:"24px",border:"3px solid #E5E7EB",borderTopColor:"#DC2626",borderRadius:"50%",animation:"spin 0.8s linear infinite",margin:"0 auto 10px"}}/>
      Loading latest updates…
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );

  return (
    <div style={{fontFamily:IN}}>
      {news.map((item, i) => {
        const tagStyle = TAG_COLORS[item.tag] || {bg:"#F3F4F6",color:"#374151"};
        return (
          <div key={i}
            style={{borderBottom:"1px solid #F3F4F6",padding:"16px 0",cursor:"pointer"}}
            onClick={() => setExpanded(expanded===i ? null : i)}>
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"12px"}}>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px",flexWrap:"wrap"}}>
                  <span style={{fontSize:"11px",fontWeight:700,padding:"2px 8px",borderRadius:"4px",background:tagStyle.bg,color:tagStyle.color}}>
                    {item.tag}
                  </span>
                  <span style={{fontSize:"11px",color:"#9CA3AF"}}>{item.date}</span>
                  <span style={{fontSize:"11px",color:"#9CA3AF"}}>· {item.source}</span>
                </div>
                <h4 style={{fontSize:"14px",fontWeight:700,color:"#0B1D3A",lineHeight:1.45,margin:0}}>
                  {item.title}
                </h4>
                {expanded === i && (
                  <div style={{marginTop:"8px"}}>
                    <p style={{fontSize:"13px",color:"#4B5563",lineHeight:1.7,margin:"0 0 8px"}}>{item.summary}</p>
                    <a href={item.url} target="_blank" rel="noopener"
                      style={{fontSize:"12px",fontWeight:700,color:"#DC2626",textDecoration:"none"}}>
                      Official source → {item.source}
                    </a>
                  </div>
                )}
              </div>
              <span style={{fontSize:"18px",color:"#9CA3AF",flexShrink:0,marginTop:"2px"}}>
                {expanded===i ? "▲" : "▼"}
              </span>
            </div>
          </div>
        );
      })}
      {news.length === 0 && (
        <p style={{fontSize:"14px",color:"#9CA3AF",textAlign:"center",padding:"24px 0"}}>No updates found.</p>
      )}
    </div>
  );
}
