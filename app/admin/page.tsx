"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';
const PD = '"Playfair Display",Georgia,serif';

interface Lead { email: string; date: string; source?: string; }
interface PageView { page: string; count: number; }
interface Consult { name: string; email: string; whatsapp: string; purpose: string; destination: string; date: string; status: "new"|"contacted"|"converted"; }

const NAV = [
  { id:"overview",  icon:"📊", label:"Overview" },
  { id:"leads",     icon:"📬", label:"Email Leads" },
  { id:"consults",  icon:"📅", label:"Consultations" },
  { id:"content",   icon:"🗺️", label:"Countries" },
  { id:"settings",  icon:"⚙️", label:"Settings" },
];

const COUNTRIES = [
  { flag:"🇩🇪", name:"Germany",   pages:["/visa","/work","/appointment"],        color:"#DC2626" },
  { flag:"🇮🇹", name:"Italy",     pages:["/italy"],                              color:"#059669" },
  { flag:"🇸🇪", name:"Sweden",    pages:["/sweden"],                             color:"#1D4ED8" },
  { flag:"🇬🇧", name:"UK",        pages:["/uk"],                                 color:"#7C3AED" },
  { flag:"🇨🇦", name:"Canada",    pages:["/canada"],                             color:"#D97706" },
  { flag:"🇦🇺", name:"Australia", pages:["/australia"],                          color:"#0D9488" },
  { flag:"🇪🇸", name:"Spain",     pages:["/spain"],                              color:"#EC4899" },
];

export default function VisaVistaAdmin() {
  const [tab, setTab] = useState("overview");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [consults, setConsults] = useState<Consult[]>([]);
  const [copied, setCopied] = useState(false);
  const [editStatus, setEditStatus] = useState<Record<number,string>>({});

  useEffect(() => {
    try {
      setLeads(JSON.parse(localStorage.getItem("vv_subscribers") || "[]").reverse());
      setConsults(JSON.parse(localStorage.getItem("vv_consults") || "[]").reverse());
    } catch {}
  }, [tab]);

  const today = leads.filter(l => new Date(l.date).toDateString() === new Date().toDateString()).length;
  const week  = leads.filter(l => new Date(l.date) > new Date(Date.now()-7*86400000)).length;

  const updateStatus = (i: number, s: string) => {
    const updated = [...consults];
    (updated[i] as any).status = s;
    localStorage.setItem("vv_consults", JSON.stringify([...updated].reverse()));
    setConsults(updated);
  };

  const copyLeads = () => {
    navigator.clipboard.writeText(leads.map(l=>l.email).join("\n"));
    setCopied(true); setTimeout(()=>setCopied(false), 2000);
  };

  const exportCSV = () => {
    const csv = "Email,Date,Source
" + leads.map(l=>`${l.email},${l.date},${l.source||"homepage"}`).join("
");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv],{type:"text/csv"}));
    a.download = `visavista-leads-${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
  };

  const sidebarStyle = (active: boolean): React.CSSProperties => ({
    display:"flex", alignItems:"center", gap:"10px", padding:"10px 14px",
    borderRadius:"10px", cursor:"pointer", fontSize:"14px", fontWeight:active?700:500,
    background:active?"linear-gradient(135deg,#DC2626,#991B1B)":"transparent",
    color:active?"#fff":"#64748B", border:"none", width:"100%", textAlign:"left",
    transition:"all .15s",
  });

  const statCard = (label:string, value:string|number, sub:string, color:string) => (
    <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"16px",padding:"22px 24px",boxShadow:"0 2px 8px rgba(0,0,0,.05)"}}>
      <div style={{fontSize:"2rem",fontWeight:900,color,lineHeight:1}}>{value}</div>
      <div style={{fontSize:"14px",fontWeight:700,color:"#0B1D3A",marginTop:"6px"}}>{label}</div>
      <div style={{fontSize:"12px",color:"#9CA3AF",marginTop:"2px"}}>{sub}</div>
    </div>
  );

  return (
    <div style={{display:"flex",minHeight:"100vh",background:"#F8FAFC",fontFamily:IN}}>

      {/* ── Sidebar ── */}
      <div style={{width:"220px",flexShrink:0,background:"#fff",borderRight:"1px solid #E5E7EB",display:"flex",flexDirection:"column",padding:"20px 12px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"28px",paddingLeft:"4px"}}>
          <div style={{width:"36px",height:"36px",borderRadius:"10px",background:"linear-gradient(135deg,#DC2626,#991B1B)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:PD,fontWeight:900,fontSize:"18px",color:"#fff"}}>V</div>
          <div>
            <div style={{fontWeight:900,fontSize:"15px",color:"#0B1D3A"}}>VisaVista</div>
            <div style={{fontSize:"11px",color:"#9CA3AF"}}>Admin Panel</div>
          </div>
        </div>
        {NAV.map(n => (
          <button key={n.id} onClick={()=>setTab(n.id)} style={sidebarStyle(tab===n.id)}>
            <span style={{fontSize:"16px"}}>{n.icon}</span>{n.label}
          </button>
        ))}
        <div style={{flex:1}}/>
        <Link href="/" style={{display:"flex",alignItems:"center",gap:"8px",padding:"10px 14px",fontSize:"13px",color:"#9CA3AF",textDecoration:"none",borderTop:"1px solid #F1F5F9",marginTop:"12px",paddingTop:"14px"}}>
          ← Back to site
        </Link>
      </div>

      {/* ── Main ── */}
      <div style={{flex:1,overflow:"auto"}}>
        {/* Top bar */}
        <div style={{background:"#fff",borderBottom:"1px solid #E5E7EB",padding:"16px 28px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <h1 style={{fontFamily:PD,fontSize:"20px",fontWeight:800,color:"#0B1D3A",margin:0}}>
            {NAV.find(n=>n.id===tab)?.icon} {NAV.find(n=>n.id===tab)?.label}
          </h1>
          <div style={{display:"flex",gap:"10px"}}>
            <a href="https://wa.me/4915906171828" target="_blank" rel="noopener"
              style={{padding:"8px 16px",background:"#25D366",color:"#fff",borderRadius:"8px",fontSize:"13px",fontWeight:700,textDecoration:"none"}}>
              WhatsApp →
            </a>
            <a href="/consultancy"
              style={{padding:"8px 16px",background:"#DC2626",color:"#fff",borderRadius:"8px",fontSize:"13px",fontWeight:700,textDecoration:"none"}}>
              + New consult
            </a>
          </div>
        </div>

        <div style={{padding:"28px"}}>

          {/* ── OVERVIEW ── */}
          {tab==="overview" && (
            <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"16px"}}>
                {statCard("Email Subscribers", leads.length, "All time", "#DC2626")}
                {statCard("New This Week",     week,          "Last 7 days", "#D97706")}
                {statCard("Today",             today,         new Date().toLocaleDateString("en-GB"), "#059669")}
                {statCard("Consultations",     consults.length, "Enquiries received", "#7C3AED")}
                {statCard("Countries Covered", 7, "DE·IT·SE·UK·CA·AU·ES", "#1D4ED8")}
                {statCard("New Consults",      consults.filter(c=>c.status==="new").length, "Awaiting contact", "#DC2626")}
              </div>

              {/* Recent leads */}
              <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"16px",overflow:"hidden"}}>
                <div style={{padding:"16px 20px",borderBottom:"1px solid #F1F5F9",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <span style={{fontWeight:700,fontSize:"15px"}}>📬 Recent subscribers</span>
                  <button onClick={()=>setTab("leads")} style={{fontSize:"12px",color:"#DC2626",background:"none",border:"none",cursor:"pointer",fontWeight:600}}>View all →</button>
                </div>
                {leads.length===0 ? (
                  <div style={{padding:"32px",textAlign:"center",color:"#9CA3AF",fontSize:"14px"}}>No subscribers yet.</div>
                ) : leads.slice(0,5).map((l,i)=>(
                  <div key={i} style={{padding:"12px 20px",borderBottom:"1px solid #F9FAFB",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:"14px",fontWeight:600,color:"#0B1D3A"}}>{l.email}</span>
                    <span style={{fontSize:"12px",color:"#9CA3AF"}}>{new Date(l.date).toLocaleDateString()}</span>
                  </div>
                ))}
              </div>

              {/* Quick links */}
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:"12px"}}>
                {[
                  {label:"🛂 Visa page",  href:"/visa"},
                  {label:"💼 Work page",  href:"/work"},
                  {label:"💳 Banking",    href:"/finances"},
                  {label:"📅 Book call",  href:"/consultancy"},
                  {label:"📖 Blog",       href:"/blog"},
                  {label:"📋 Service",    href:"/service"},
                ].map(l=>(
                  <a key={l.href} href={l.href} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"10px",padding:"14px 16px",fontSize:"13px",fontWeight:700,color:"#0B1D3A",textDecoration:"none",textAlign:"center",display:"block"}}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* ── LEADS ── */}
          {tab==="leads" && (
            <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
              <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
                <button onClick={copyLeads} style={{padding:"10px 18px",background:"#0B1D3A",color:"#fff",border:"none",borderRadius:"8px",fontWeight:700,fontSize:"13px",cursor:"pointer"}}>
                  {copied?"✅ Copied!":"📋 Copy all emails"}
                </button>
                <button onClick={exportCSV} style={{padding:"10px 18px",background:"#059669",color:"#fff",border:"none",borderRadius:"8px",fontWeight:700,fontSize:"13px",cursor:"pointer"}}>
                  ⬇️ Export CSV
                </button>
                <a href={`mailto:?bcc=${leads.map(l=>l.email).join(",")}&subject=VisaVista%20Update&body=Hello%20from%20VisaVista!`}
                  style={{padding:"10px 18px",background:"#DC2626",color:"#fff",borderRadius:"8px",fontWeight:700,fontSize:"13px",textDecoration:"none"}}>
                  ✉️ Email all
                </a>
              </div>

              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"12px"}}>
                {statCard("Total",    leads.length, "All subscribers", "#DC2626")}
                {statCard("This week",week,          "Last 7 days",    "#D97706")}
                {statCard("Today",    today,         "New today",      "#059669")}
              </div>

              {leads.length===0 ? (
                <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"16px",padding:"60px",textAlign:"center",color:"#9CA3AF"}}>
                  <div style={{fontSize:"40px",marginBottom:"12px"}}>📭</div>
                  <div style={{fontWeight:700,fontSize:"16px"}}>No subscribers yet</div>
                </div>
              ) : (
                <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"16px",overflow:"hidden"}}>
                  <table style={{width:"100%",borderCollapse:"collapse"}}>
                    <thead>
                      <tr style={{background:"#F8FAFC",borderBottom:"1px solid #E5E7EB"}}>
                        <th style={{padding:"12px 18px",textAlign:"left",fontSize:"11px",fontWeight:700,color:"#6B7280",textTransform:"uppercase",letterSpacing:"0.07em"}}>#</th>
                        <th style={{padding:"12px 18px",textAlign:"left",fontSize:"11px",fontWeight:700,color:"#6B7280",textTransform:"uppercase",letterSpacing:"0.07em"}}>Email</th>
                        <th style={{padding:"12px 18px",textAlign:"left",fontSize:"11px",fontWeight:700,color:"#6B7280",textTransform:"uppercase",letterSpacing:"0.07em"}}>Date</th>
                        <th style={{padding:"12px 18px",textAlign:"left",fontSize:"11px",fontWeight:700,color:"#6B7280",textTransform:"uppercase",letterSpacing:"0.07em"}}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((l,i)=>(
                        <tr key={i} style={{borderBottom:"1px solid #F9FAFB"}}>
                          <td style={{padding:"13px 18px",fontSize:"13px",color:"#9CA3AF",fontWeight:600}}>{leads.length-i}</td>
                          <td style={{padding:"13px 18px",fontWeight:600,fontSize:"14px",color:"#0B1D3A"}}>{l.email}</td>
                          <td style={{padding:"13px 18px",fontSize:"13px",color:"#6B7280"}}>{new Date(l.date).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})}</td>
                          <td style={{padding:"13px 18px"}}>
                            <a href={`mailto:${l.email}`} style={{fontSize:"12px",fontWeight:700,color:"#DC2626",textDecoration:"none",padding:"4px 10px",border:"1px solid #FCA5A5",borderRadius:"6px"}}>Email</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* ── CONSULTATIONS ── */}
          {tab==="consults" && (
            <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"12px"}}>
                {statCard("Total enquiries",consults.length,"All time","#7C3AED")}
                {statCard("New",consults.filter(c=>c.status==="new").length,"Awaiting contact","#DC2626")}
                {statCard("Converted",consults.filter(c=>c.status==="converted").length,"Successful","#059669")}
              </div>

              <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"14px",padding:"18px 20px"}}>
                <p style={{fontWeight:700,marginBottom:"10px",fontSize:"15px"}}>📥 WhatsApp enquiries go to:</p>
                <a href="https://wa.me/4915906171828" target="_blank" rel="noopener"
                  style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"#25D366",color:"#fff",padding:"10px 18px",borderRadius:"8px",fontWeight:700,fontSize:"14px",textDecoration:"none"}}>
                  📱 +49 159 06171828 — Open WhatsApp
                </a>
                <p style={{fontSize:"12px",color:"#9CA3AF",marginTop:"10px"}}>All Free Consultation clicks open WhatsApp. Track conversations there.</p>
              </div>

              {consults.length === 0 ? (
                <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"16px",padding:"48px",textAlign:"center",color:"#9CA3AF"}}>
                  <div style={{fontSize:"36px",marginBottom:"10px"}}>📅</div>
                  <div style={{fontWeight:700,fontSize:"15px"}}>No consultation records yet</div>
                  <div style={{fontSize:"13px",marginTop:"6px"}}>Consultations added from the booking form appear here.</div>
                </div>
              ) : (
                <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                  {consults.map((c,i)=>(
                    <div key={i} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"12px",padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
                      <div>
                        <div style={{fontWeight:700,fontSize:"14px",color:"#0B1D3A"}}>{c.name}</div>
                        <div style={{fontSize:"13px",color:"#6B7280",marginTop:"2px"}}>{c.email} · {c.destination}</div>
                      </div>
                      <div style={{display:"flex",gap:"8px",alignItems:"center"}}>
                        <select value={editStatus[i]??c.status} onChange={e=>updateStatus(i,e.target.value)}
                          style={{padding:"6px 10px",border:"1px solid #E5E7EB",borderRadius:"6px",fontSize:"12px",fontWeight:600,cursor:"pointer",
                            color:c.status==="new"?"#DC2626":c.status==="contacted"?"#D97706":"#059669",background:"#F9FAFB"}}>
                          <option value="new">🔴 New</option>
                          <option value="contacted">🟡 Contacted</option>
                          <option value="converted">🟢 Converted</option>
                        </select>
                        <a href={`https://wa.me/${c.whatsapp?.replace(/\D/g,"")}`} target="_blank" rel="noopener"
                          style={{padding:"6px 12px",background:"#25D366",color:"#fff",borderRadius:"6px",fontSize:"12px",fontWeight:700,textDecoration:"none"}}>WhatsApp</a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── COUNTRIES ── */}
          {tab==="content" && (
            <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
              <p style={{color:"#6B7280",fontSize:"14px"}}>Quick links to all country pages for review and updates.</p>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"14px"}}>
                {COUNTRIES.map(c=>(
                  <div key={c.name} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"14px",padding:"18px 20px",borderLeft:`4px solid ${c.color}`}}>
                    <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"12px"}}>
                      <span style={{fontSize:"26px"}}>{c.flag}</span>
                      <div style={{fontWeight:800,fontSize:"16px",color:"#0B1D3A"}}>{c.name}</div>
                    </div>
                    <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                      {c.pages.map(p=>(
                        <a key={p} href={p} style={{fontSize:"12px",fontWeight:600,color:c.color,background:`${c.color}12`,border:`1px solid ${c.color}30`,borderRadius:"6px",padding:"4px 10px",textDecoration:"none"}}>{p}</a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── SETTINGS ── */}
          {tab==="settings" && (
            <div style={{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"600px"}}>
              {[
                { label:"WhatsApp Number", value:"+49 159 06171828", href:"https://wa.me/4915906171828" },
                { label:"Site URL (Vercel)", value:"start-in-germany-full.vercel.app", href:"https://start-in-germany-full.vercel.app" },
                { label:"GitHub Repo", value:"ShaistaShabbir-prog/start-in-germany-full", href:"https://github.com/ShaistaShabbir-prog/start-in-germany-full" },
              ].map(s=>(
                <div key={s.label} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:"12px",padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <div style={{fontSize:"12px",fontWeight:700,color:"#6B7280",textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:"4px"}}>{s.label}</div>
                    <div style={{fontSize:"14px",fontWeight:600,color:"#0B1D3A",fontFamily:"monospace"}}>{s.value}</div>
                  </div>
                  <a href={s.href} target="_blank" rel="noopener" style={{padding:"7px 14px",background:"#F1F5F9",color:"#0B1D3A",borderRadius:"8px",fontSize:"12px",fontWeight:700,textDecoration:"none"}}>Open →</a>
                </div>
              ))}
              <div style={{background:"#FFF7ED",border:"1px solid #FED7AA",borderRadius:"12px",padding:"16px 20px"}}>
                <p style={{fontWeight:700,color:"#92400E",marginBottom:"6px",fontSize:"14px"}}>⚠️ Data storage note</p>
                <p style={{fontSize:"13px",color:"#78350F",lineHeight:1.6}}>Email leads are currently stored in browser localStorage. To collect leads from all visitors permanently, connect an email service (Mailchimp, Resend, or a simple Google Sheets webhook).</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
