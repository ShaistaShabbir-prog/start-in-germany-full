"use client";
import { useState, useRef, useEffect } from "react";
import { STARTERS, findLocalAnswer } from "@/lib/chatbot-knowledge";

const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';

interface Message {
  role: "user" | "assistant";
  content: string;
  followUps?: string[];
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm your VisaVista immigration assistant.\n\nI can answer questions about visas, scholarships, jobs, and moving to Germany, UK, Canada, Australia, Sweden, Italy, Spain, Malaysia, China, and more.\n\nWhat would you like to know?",
      followUps: [],
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(0);
  const [showStarters, setShowStarters] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) { setUnread(0); setTimeout(() => inputRef.current?.focus(), 100); }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text?: string) => {
    const userMsg = (text || input).trim();
    if (!userMsg || loading) return;
    setInput("");
    setShowStarters(false);

    const userMessage: Message = { role: "user", content: userMsg };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const pageContext = typeof document !== "undefined"
        ? (document.querySelector("main")?.innerText || "").slice(0, 10000)
        : "";
      const local = findLocalAnswer(userMsg, pageContext);

      // Try API first, fall back to local
      let reply = "";
      let followUps: string[] = local.followUps || [];
      try {
        const res = await fetch("/chatbot-answer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMsg, pageContext }),
        });
        if (res.ok) {
          const data = await res.json();
          reply = data.answer || local.answer;
          if (data.sources?.[0]) {
            reply += `\n\n→ ${data.sources[0].label}${data.sources[0].href ? ` (${data.sources[0].href})` : ""}`;
          }
        } else {
          throw new Error("API unavailable");
        }
      } catch {
        // Use local answer — always works offline
        const source = local.sources?.[0];
        reply = local.answer;
        if (source?.label) reply += `\n\n→ ${source.label}${source.href ? ` (${source.href})` : ""}`;
      }

      setMessages(prev => [...prev, { role: "assistant", content: reply, followUps }]);
      if (!open) setUnread(u => u + 1);
    } catch {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Something went wrong. Please try again or contact us via WhatsApp.",
        followUps: ["How do I book a free consultation?"],
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <>
      {/* ── Floating button ── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close assistant" : "Open immigration assistant"}
        style={{
          position: "fixed", bottom: "24px", left: "24px", zIndex: 9998,
          width: "58px", height: "58px", borderRadius: "50%",
          background: open ? "#374151" : "linear-gradient(135deg,#0B1D3A,#DC2626)",
          border: "none",
          boxShadow: "0 4px 24px rgba(11,29,58,.45)",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all .2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        {open ? (
          <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="rgba(255,255,255,.15)" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="8.5" cy="11" r="1.2" fill="#FDE047"/>
            <circle cx="12" cy="11" r="1.2" fill="#FDE047"/>
            <circle cx="15.5" cy="11" r="1.2" fill="#FDE047"/>
          </svg>
        )}
        {unread > 0 && !open && (
          <span style={{
            position:"absolute",top:"-4px",right:"-4px",
            minWidth:"20px",height:"20px",padding:"0 4px",
            background:"#DC2626",borderRadius:"10px",
            fontSize:"11px",fontWeight:800,color:"#fff",
            display:"flex",alignItems:"center",justifyContent:"center",
          }}>
            {unread}
          </span>
        )}
      </button>

      {/* ── Chat window ── */}
      {open && (
        <div style={{
          position: "fixed", bottom: "92px", left: "24px", zIndex: 9999,
          width: "min(390px, calc(100vw - 32px))",
          height: "min(560px, calc(100vh - 120px))",
          background: "#fff",
          borderRadius: "22px",
          boxShadow: "0 24px 64px rgba(0,0,0,.22), 0 0 0 1px rgba(0,0,0,.05)",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
          animation: "slideUp .22s cubic-bezier(.34,1.56,.64,1)",
          fontFamily: IN,
        }}>

          {/* Header */}
          <div style={{
            background:"linear-gradient(135deg,#0B1D3A 0%,#1a2f52 100%)",
            padding:"14px 16px",
            display:"flex",alignItems:"center",gap:"10px",flexShrink:0,
          }}>
            <div style={{
              width:"38px",height:"38px",borderRadius:"50%",flexShrink:0,
              background:"linear-gradient(135deg,#DC2626,#991B1B)",
              display:"flex",alignItems:"center",justifyContent:"center",
              fontWeight:900,fontSize:"15px",color:"#fff",
            }}>V</div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontWeight:800,fontSize:"14px",color:"#fff",lineHeight:1}}>VisaVista Assistant</div>
              <div style={{fontSize:"11px",color:"rgba(255,255,255,.55)",marginTop:"3px",display:"flex",alignItems:"center",gap:"5px"}}>
                <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#22C55E",display:"inline-block",flexShrink:0}}/>
                Immigration specialist · 9 countries
              </div>
            </div>
            <a href="/contact?text=Hi%20VisaVista!" target="_blank" rel="noopener"
              style={{background:"#25D366",color:"#fff",padding:"6px 11px",borderRadius:"9px",fontSize:"11px",fontWeight:700,textDecoration:"none",flexShrink:0,whiteSpace:"nowrap"}}>
              📱 WhatsApp
            </a>
          </div>

          {/* Messages */}
          <div style={{flex:1,overflowY:"auto",padding:"14px 14px 4px",display:"flex",flexDirection:"column",gap:"10px"}}>
            {messages.map((m, i) => (
              <div key={i}>
                <div style={{display:"flex",flexDirection:m.role==="user"?"row-reverse":"row",gap:"8px",alignItems:"flex-end"}}>
                  {m.role === "assistant" && (
                    <div style={{
                      width:"28px",height:"28px",borderRadius:"50%",flexShrink:0,
                      background:"linear-gradient(135deg,#DC2626,#991B1B)",
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontSize:"11px",fontWeight:900,color:"#fff",
                    }}>V</div>
                  )}
                  <div style={{
                    maxWidth:"78%",
                    padding:"10px 13px",
                    borderRadius:m.role==="user"?"16px 16px 3px 16px":"16px 16px 16px 3px",
                    background:m.role==="user"?"linear-gradient(135deg,#0B1D3A,#1E3A5F)":"#F3F4F6",
                    color:m.role==="user"?"#fff":"#1F2937",
                    fontSize:"13px",lineHeight:1.65,whiteSpace:"pre-wrap",
                    wordBreak:"break-word",
                  }}>
                    {m.content}
                  </div>
                </div>
                {/* Follow-up suggestions */}
                {m.role === "assistant" && m.followUps && m.followUps.length > 0 && i === messages.length - 1 && (
                  <div style={{display:"flex",flexDirection:"column",gap:"5px",marginTop:"8px",marginLeft:"36px"}}>
                    {m.followUps.slice(0,3).map(fu => (
                      <button key={fu} onClick={() => send(fu)}
                        style={{
                          textAlign:"left",padding:"7px 12px",borderRadius:"10px",
                          border:"1.5px solid #E5E7EB",background:"#fff",
                          color:"#374151",fontSize:"12px",fontWeight:600,
                          cursor:"pointer",transition:"all .15s",lineHeight:1.3,
                        }}
                        onMouseOver={e=>{e.currentTarget.style.borderColor="#0B1D3A";e.currentTarget.style.color="#0B1D3A";}}
                        onMouseOut={e=>{e.currentTarget.style.borderColor="#E5E7EB";e.currentTarget.style.color="#374151";}}>
                        {fu} →
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div style={{display:"flex",gap:"8px",alignItems:"flex-end"}}>
                <div style={{
                  width:"28px",height:"28px",borderRadius:"50%",
                  background:"linear-gradient(135deg,#DC2626,#991B1B)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:"11px",fontWeight:900,color:"#fff",flexShrink:0,
                }}>V</div>
                <div style={{background:"#F3F4F6",padding:"12px 14px",borderRadius:"16px 16px 16px 3px",display:"flex",gap:"4px",alignItems:"center"}}>
                  {[0,1,2].map(i=>(
                    <span key={i} style={{
                      width:"7px",height:"7px",borderRadius:"50%",background:"#9CA3AF",
                      animation:`bounce 1.1s ${i*0.18}s infinite`,display:"inline-block",
                    }}/>
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Starter suggestions — only before first user message */}
          {showStarters && messages.length <= 1 && (
            <div style={{padding:"6px 14px 10px",display:"flex",gap:"6px",flexWrap:"wrap"}}>
              {STARTERS.map(s => (
                <button key={s} onClick={() => send(s)}
                  style={{
                    fontSize:"11px",fontWeight:600,padding:"6px 11px",
                    borderRadius:"20px",border:"1.5px solid #E5E7EB",
                    background:"#F9FAFB",color:"#374151",cursor:"pointer",
                    lineHeight:1.3,transition:"all .15s",
                  }}
                  onMouseOver={e=>{e.currentTarget.style.background="#0B1D3A";e.currentTarget.style.color="#FDE047";e.currentTarget.style.borderColor="#0B1D3A";}}
                  onMouseOut={e=>{e.currentTarget.style.background="#F9FAFB";e.currentTarget.style.color="#374151";e.currentTarget.style.borderColor="#E5E7EB";}}>
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{padding:"10px 12px",borderTop:"1px solid #F3F4F6",display:"flex",gap:"8px",alignItems:"center",flexShrink:0}}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about visas, scholarships, countries..."
              disabled={loading}
              style={{
                flex:1,padding:"10px 13px",
                border:"1.5px solid #E5E7EB",borderRadius:"11px",
                fontSize:"13px",fontFamily:IN,outline:"none",
                background:"#F9FAFB",transition:"border-color .15s",
                minWidth:0,
              }}
              onFocus={e=>(e.target.style.borderColor="#0B1D3A")}
              onBlur={e=>(e.target.style.borderColor="#E5E7EB")}
            />
            <button onClick={() => send()} disabled={loading || !input.trim()}
              style={{
                width:"38px",height:"38px",borderRadius:"11px",flexShrink:0,
                background:input.trim()?"linear-gradient(135deg,#0B1D3A,#1E3A5F)":"#F3F4F6",
                border:"none",cursor:input.trim()?"pointer":"default",
                display:"flex",alignItems:"center",justifyContent:"center",
                transition:"all .2s",
              }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={input.trim()?"#FDE047":"#9CA3AF"} strokeWidth="2.5">
                <path d="m22 2-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>
          <p style={{fontSize:"10px",color:"#D1D5DB",textAlign:"center",padding:"0 12px 9px",lineHeight:1.4}}>
            Information only · Not legal advice · Verify with official sources
          </p>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity:0; transform:translateY(16px) scale(.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes bounce {
          0%,80%,100% { transform:translateY(0); }
          40%          { transform:translateY(-6px); }
        }
      `}</style>
    </>
  );
}
