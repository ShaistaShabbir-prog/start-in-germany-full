"use client";
import { useState, useRef, useEffect } from "react";

interface Message { role: "user" | "assistant"; content: string; }

const SUGGESTED = [
  "What visa do I need to work in Germany?",
  "How long does the Chancenkarte take?",
  "Can I bring my family to Germany?",
  "What salary do I need for a Blue Card?",
  "How do I get Krankenversicherung?",
];

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "👋 Hi! I'm VisaVista's immigration assistant. Ask me anything about moving to Germany, visas, work permits, or life in Europe. I answer in Urdu, Hindi, Bengali and English!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const IN = '"Inter",ui-sans-serif,system-ui,sans-serif';

  useEffect(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), [messages]);

  const send = async (text: string) => {
    const q = text.trim();
    if (!q || loading) return;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: q }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q, history: messages.slice(-8) }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.answer || data.error || "Sorry, I couldn't process that." }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Network error. Please try again." }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ display:"flex", flexDirection:"column", height:"calc(100vh - 64px)", background:"#f9fafb" }}>
      {/* Header */}
      <div style={{ background:"#0B1D3A", padding:"16px 20px", display:"flex", alignItems:"center", gap:12 }}>
        <div style={{ width:40, height:40, borderRadius:"50%", background:"linear-gradient(135deg,#DC2626,#7c3aed)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>🤖</div>
        <div>
          <div style={{ color:"#fff", fontWeight:700, fontSize:15, fontFamily:IN }}>VisaVista AI Assistant</div>
          <div style={{ color:"rgba(255,255,255,.5)", fontSize:12 }}>Immigration help · Urdu · Hindi · Bengali · English</div>
        </div>
        <div style={{ marginLeft:"auto", width:8, height:8, borderRadius:"50%", background:"#22c55e" }} />
      </div>

      {/* Messages */}
      <div style={{ flex:1, overflowY:"auto", padding:"20px 16px", display:"flex", flexDirection:"column", gap:12 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display:"flex", justifyContent: m.role==="user"?"flex-end":"flex-start" }}>
            <div style={{
              maxWidth:"78%", padding:"12px 16px", borderRadius: m.role==="user"?"18px 18px 4px 18px":"18px 18px 18px 4px",
              background: m.role==="user"?"#DC2626":"#fff",
              color: m.role==="user"?"#fff":"#1f2937",
              fontSize:14, lineHeight:1.65, fontFamily:IN,
              boxShadow:"0 1px 4px rgba(0,0,0,.08)"
            }}>{m.content}</div>
          </div>
        ))}
        {loading && (
          <div style={{ display:"flex" }}>
            <div style={{ background:"#fff", borderRadius:"18px 18px 18px 4px", padding:"12px 16px", boxShadow:"0 1px 4px rgba(0,0,0,.08)" }}>
              <span style={{ display:"inline-flex", gap:4 }}>
                {[0,1,2].map(j => <span key={j} style={{ width:7, height:7, borderRadius:"50%", background:"#dc2626", display:"inline-block", animation:`bounce 1s ${j*0.15}s infinite` }} />)}
              </span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      {messages.length < 3 && (
        <div style={{ padding:"0 16px 8px", display:"flex", gap:8, flexWrap:"wrap" }}>
          {SUGGESTED.map(s => (
            <button key={s} onClick={() => send(s)} style={{ padding:"6px 12px", borderRadius:20, border:"1px solid #DC2626", background:"#fff", color:"#DC2626", fontSize:12, cursor:"pointer", fontFamily:IN }}>{s}</button>
          ))}
        </div>
      )}

      {/* Input */}
      <div style={{ padding:"12px 16px", background:"#fff", borderTop:"1px solid #e5e7eb", display:"flex", gap:10 }}>
        <input
          value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key==="Enter" && !e.shiftKey && (e.preventDefault(), send(input))}
          placeholder="Ask about visas, work permits, life in Germany..."
          style={{ flex:1, padding:"10px 14px", border:"1.5px solid #e5e7eb", borderRadius:12, fontSize:14, fontFamily:IN, outline:"none" }}
        />
        <button onClick={() => send(input)} disabled={loading || !input.trim()}
          style={{ padding:"10px 20px", borderRadius:12, background:"#DC2626", color:"#fff", border:"none", fontWeight:700, fontSize:14, cursor:"pointer", fontFamily:IN, opacity: loading||!input.trim()?0.6:1 }}>
          Send
        </button>
      </div>
      <style>{`@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}`}</style>
    </div>
  );
}
