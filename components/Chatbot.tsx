"use client";
import { useState, useRef, useEffect } from "react";
import { STARTERS, findLocalAnswer } from "@/lib/chatbot-knowledge";

const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';

interface Message { role: "user" | "assistant"; content: string; }

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! 👋 I'm VisaVista's immigration assistant. Ask me anything about moving to Germany, Italy, Sweden, UK, Canada, Australia, or Spain from Pakistan, India, or Bangladesh!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const send = async (text?: string) => {
    const userMsg = (text || input).trim();
    if (!userMsg || loading) return;
    setInput("");
    const newMessages: Message[] = [...messages, { role: "user", content: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const pageContext = document.querySelector("main")?.innerText.slice(0, 12000) || "";
      const local = findLocalAnswer(userMsg, pageContext);
      const res = await fetch("/chatbot-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          pageContext,
        }),
      });
      const data = res.ok ? await res.json() : local;
      const source = data.sources?.[0];
      const reply = `${data.answer || local.answer}${source ? `\n\nSource: ${source.label}${source.href ? ` (${source.href})` : ""}` : ""}`;
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
      if (!open) setUnread(u => u + 1);
    } catch {
      const local = findLocalAnswer(userMsg, document.querySelector("main")?.innerText.slice(0, 12000) || "");
      const source = local.sources[0];
      setMessages(prev => [...prev, { role: "assistant", content: `${local.answer}${source ? `\n\nSource: ${source.label}${source.href ? ` (${source.href})` : ""}` : ""}` }]);
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
        aria-label="Open immigration assistant"
        style={{
          position: "fixed", bottom: "24px", left: "24px", zIndex: 9998,
          width: "58px", height: "58px", borderRadius: "50%",
          background: "linear-gradient(135deg,#0B1D3A,#1E3A5F)",
          border: "2px solid rgba(220,38,38,.6)",
          boxShadow: "0 4px 20px rgba(11,29,58,.5)",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform .2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        {open ? (
          <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="11" r="1" fill="#FCD34D"/><circle cx="12" cy="11" r="1" fill="#FCD34D"/><circle cx="15" cy="11" r="1" fill="#FCD34D"/></svg>
        )}
        {unread > 0 && !open && (
          <span style={{position:"absolute",top:"-4px",right:"-4px",width:"20px",height:"20px",background:"#DC2626",borderRadius:"50%",fontSize:"11px",fontWeight:700,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"}}>
            {unread}
          </span>
        )}
      </button>

      {/* ── Chat window ── */}
      {open && (
        <div style={{
          position: "fixed", bottom: "92px", left: "24px", zIndex: 9999,
          width: "min(380px, calc(100vw - 32px))",
          height: "min(540px, calc(100vh - 120px))",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 20px 60px rgba(0,0,0,.25), 0 0 0 1px rgba(0,0,0,.06)",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
          animation: "slideUp .2s ease-out",
          fontFamily: IN,
        }}>
          {/* Header */}
          <div style={{background:"linear-gradient(135deg,#0B1D3A,#1E3A5F)",padding:"14px 16px",display:"flex",alignItems:"center",gap:"10px",flexShrink:0}}>
            <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"linear-gradient(135deg,#DC2626,#991B1B)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:"14px",color:"#fff",flexShrink:0}}>V</div>
            <div style={{flex:1}}>
              <div style={{fontWeight:800,fontSize:"14px",color:"#fff",lineHeight:1}}>VisaVista Assistant</div>
              <div style={{fontSize:"11px",color:"rgba(255,255,255,.6)",marginTop:"2px",display:"flex",alignItems:"center",gap:"5px"}}>
                <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#22C55E",display:"inline-block"}}/>
                Online · Immigration specialist
              </div>
            </div>
            <a href="https://wa.me/4915906171828?text=Hi%20VisaVista!" target="_blank" rel="noopener"
              style={{background:"#25D366",color:"#fff",padding:"5px 10px",borderRadius:"8px",fontSize:"11px",fontWeight:700,textDecoration:"none",flexShrink:0}}>
              WhatsApp
            </a>
          </div>

          {/* Messages */}
          <div style={{flex:1,overflowY:"auto",padding:"14px",display:"flex",flexDirection:"column",gap:"10px"}}>
            {messages.map((m, i) => (
              <div key={i} style={{display:"flex",flexDirection:m.role==="user"?"row-reverse":"row",gap:"8px",alignItems:"flex-end"}}>
                {m.role === "assistant" && (
                  <div style={{width:"26px",height:"26px",borderRadius:"50%",background:"linear-gradient(135deg,#DC2626,#991B1B)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:900,color:"#fff",flexShrink:0}}>V</div>
                )}
                <div style={{
                  maxWidth:"76%",padding:"10px 12px",borderRadius:m.role==="user"?"14px 14px 2px 14px":"14px 14px 14px 2px",
                  background:m.role==="user"?"linear-gradient(135deg,#DC2626,#991B1B)":"#F3F4F6",
                  color:m.role==="user"?"#fff":"#1F2937",
                  fontSize:"13px",lineHeight:1.6,whiteSpace:"pre-wrap",
                }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{display:"flex",gap:"8px",alignItems:"flex-end"}}>
                <div style={{width:"26px",height:"26px",borderRadius:"50%",background:"linear-gradient(135deg,#DC2626,#991B1B)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:900,color:"#fff"}}>V</div>
                <div style={{background:"#F3F4F6",padding:"10px 14px",borderRadius:"14px 14px 14px 2px",display:"flex",gap:"4px",alignItems:"center"}}>
                  {[0,1,2].map(i=>(
                    <span key={i} style={{width:"6px",height:"6px",borderRadius:"50%",background:"#9CA3AF",animation:`bounce 1s ${i*0.15}s infinite`,display:"inline-block"}}/>
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Starters (only on first message) */}
          {messages.length === 1 && (
            <div style={{padding:"0 12px 10px",display:"flex",gap:"6px",flexWrap:"wrap"}}>
              {STARTERS.map(s => (
                <button key={s} onClick={() => send(s)}
                  style={{fontSize:"11px",fontWeight:600,padding:"5px 10px",borderRadius:"20px",border:"1px solid #E5E7EB",background:"#F9FAFB",color:"#374151",cursor:"pointer",whiteSpace:"nowrap"}}>
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
              placeholder="Ask about visas, jobs, study..."
              disabled={loading}
              style={{flex:1,padding:"10px 12px",border:"1.5px solid #E5E7EB",borderRadius:"10px",fontSize:"13px",fontFamily:IN,outline:"none",background:"#F9FAFB"}}
            />
            <button onClick={() => send()} disabled={loading || !input.trim()}
              style={{width:"36px",height:"36px",borderRadius:"10px",background:input.trim()?"linear-gradient(135deg,#DC2626,#991B1B)":"#E5E7EB",border:"none",cursor:input.trim()?"pointer":"default",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all .15s"}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="m22 2-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </div>
          <p style={{fontSize:"10px",color:"#9CA3AF",textAlign:"center",padding:"0 12px 8px"}}>AI assistant · Not legal advice · Always verify with official sources</p>
        </div>
      )}

      <style>{`
        @keyframes slideUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes bounce { 0%,80%,100% { transform:scale(0); } 40% { transform:scale(1); } }
      `}</style>
    </>
  );
}
