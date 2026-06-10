"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Lead { email: string; date: string; }

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const subs = JSON.parse(localStorage.getItem("vv_subscribers") || "[]");
      setLeads(subs.reverse());
    } catch {}
  }, []);

  const copyAll = () => {
    const emails = leads.map(l => l.email).join("\n");
    navigator.clipboard.writeText(emails);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    if (confirm("Delete all leads? This cannot be undone.")) {
      localStorage.removeItem("vv_subscribers");
      setLeads([]);
    }
  };

  const exportCSV = () => {
    const csv = "Email,Date\n" + leads.map(l => `${l.email},${l.date}`).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `visavista-leads-${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
  };

  return (
    <div style={{minHeight:"100vh",background:"#F9FAFB",fontFamily:"\"Inter\",sans-serif"}}>
      {/* Header */}
      <div style={{background:"linear-gradient(135deg,#0B1D3A,#1E3A5F)",borderBottom:"3px solid #DC2626",padding:"20px 24px"}}>
        <div style={{maxWidth:"900px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
            <div style={{width:"40px",height:"40px",borderRadius:"12px",background:"linear-gradient(135deg,#DC2626,#991B1B)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:"18px",color:"#fff"}}>V</div>
            <div>
              <div style={{fontWeight:800,fontSize:"18px",color:"#fff"}}>VisaVista Leads</div>
              <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)"}}>Email subscribers from homepage</div>
            </div>
          </div>
          <Link href="/" style={{color:"rgba(255,255,255,.6)",fontSize:"13px",textDecoration:"none"}}>← Back to site</Link>
        </div>
      </div>

      <div style={{maxWidth:"900px",margin:"0 auto",padding:"32px 24px"}}>

        {/* Stats */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:"16px",marginBottom:"28px"}}>
          {[
            { label:"Total subscribers", value:leads.length, color:"#DC2626" },
            { label:"This week", value:leads.filter(l=>new Date(l.date)>new Date(Date.now()-7*86400000)).length, color:"#0D9488" },
            { label:"Today", value:leads.filter(l=>new Date(l.date).toDateString()===new Date().toDateString()).length, color:"#1D4ED8" },
          ].map(s=>(
            <div key={s.label} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"14px",padding:"20px 24px",boxShadow:"0 2px 8px rgba(0,0,0,.06)"}}>
              <div style={{fontSize:"2rem",fontWeight:900,color:s.color,lineHeight:1}}>{s.value}</div>
              <div style={{fontSize:"13px",color:"#6B7280",marginTop:"4px"}}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{display:"flex",gap:"10px",marginBottom:"20px",flexWrap:"wrap"}}>
          <button onClick={copyAll} style={{padding:"10px 20px",background:"#0B1D3A",color:"#fff",border:"none",borderRadius:"10px",fontWeight:700,fontSize:"13px",cursor:"pointer"}}>
            {copied ? "✅ Copied!" : "📋 Copy all emails"}
          </button>
          <button onClick={exportCSV} style={{padding:"10px 20px",background:"#059669",color:"#fff",border:"none",borderRadius:"10px",fontWeight:700,fontSize:"13px",cursor:"pointer"}}>
            ⬇️ Export CSV
          </button>
          <a href={`mailto:?bcc=${leads.map(l=>l.email).join(",")}&subject=VisaVista%20Update`}
            style={{padding:"10px 20px",background:"#DC2626",color:"#fff",borderRadius:"10px",fontWeight:700,fontSize:"13px",textDecoration:"none",display:"inline-flex",alignItems:"center"}}>
            ✉️ Send newsletter
          </a>
          {leads.length > 0 && (
            <button onClick={clearAll} style={{padding:"10px 20px",background:"#fff",color:"#EF4444",border:"1px solid #FCA5A5",borderRadius:"10px",fontWeight:700,fontSize:"13px",cursor:"pointer"}}>
              🗑️ Clear all
            </button>
          )}
        </div>

        {/* Table */}
        {leads.length === 0 ? (
          <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"16px",padding:"60px",textAlign:"center",color:"#9CA3AF"}}>
            <div style={{fontSize:"40px",marginBottom:"12px"}}>📭</div>
            <div style={{fontWeight:700,fontSize:"16px",marginBottom:"6px"}}>No subscribers yet</div>
            <div style={{fontSize:"13px"}}>Email signups from the homepage will appear here.</div>
          </div>
        ) : (
          <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"16px",overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,.06)"}}>
            <table style={{width:"100%",borderCollapse:"collapse"}}>
              <thead>
                <tr style={{background:"#F9FAFB",borderBottom:"1px solid #E5E7EB"}}>
                  <th style={{padding:"12px 20px",textAlign:"left",fontSize:"11px",fontWeight:700,color:"#6B7280",textTransform:"uppercase",letterSpacing:"0.07em"}}>#</th>
                  <th style={{padding:"12px 20px",textAlign:"left",fontSize:"11px",fontWeight:700,color:"#6B7280",textTransform:"uppercase",letterSpacing:"0.07em"}}>Email</th>
                  <th style={{padding:"12px 20px",textAlign:"left",fontSize:"11px",fontWeight:700,color:"#6B7280",textTransform:"uppercase",letterSpacing:"0.07em"}}>Signed up</th>
                  <th style={{padding:"12px 20px",textAlign:"left",fontSize:"11px",fontWeight:700,color:"#6B7280",textTransform:"uppercase",letterSpacing:"0.07em"}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => (
                  <tr key={i} style={{borderBottom:"1px solid #F3F4F6",transition:"background .15s"}}>
                    <td style={{padding:"14px 20px",fontSize:"13px",color:"#9CA3AF",fontWeight:600}}>{leads.length - i}</td>
                    <td style={{padding:"14px 20px"}}>
                      <div style={{fontWeight:600,fontSize:"14px",color:"#0B1D3A"}}>{lead.email}</div>
                    </td>
                    <td style={{padding:"14px 20px",fontSize:"13px",color:"#6B7280"}}>
                      {new Date(lead.date).toLocaleDateString("en-GB", {day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}
                    </td>
                    <td style={{padding:"14px 20px"}}>
                      <a href={`mailto:${lead.email}`}
                        style={{fontSize:"12px",fontWeight:700,color:"#DC2626",textDecoration:"none",padding:"5px 12px",border:"1px solid #FCA5A5",borderRadius:"6px"}}>
                        Email →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p style={{marginTop:"16px",fontSize:"12px",color:"#9CA3AF",textAlign:"center"}}>
          ⚠️ Emails are stored in the visitor&apos;s browser (localStorage). To keep them permanently, export CSV regularly or connect a backend/email service.
        </p>
      </div>
    </div>
  );
}
