"use client";
import Link from "next/link";
import { useState } from "react";
const PD='"Playfair Display",Georgia,serif';
const IN='"Inter",ui-sans-serif,system-ui,sans-serif';
const WA="https://wa.me/4915906171828?text="+encodeURIComponent("Hi VisaVista! I need help with my visa application.");
const btnP:React.CSSProperties={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px",padding:"13px 26px",borderRadius:"12px",fontSize:"15px",fontWeight:700,fontFamily:IN,cursor:"pointer",border:"none",textDecoration:"none",background:"#DC2626",color:"#fff",boxShadow:"0 4px 18px rgba(220,38,38,.35)",width:"100%"};

export default function ContactPage(){
  const [form,setForm]=useState({name:"",email:"",whatsapp:"",country:"",destination:"",message:""});
  const [sent,setSent]=useState(false);

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    const msg=`New VisaVista enquiry!\n\nName: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}\nFrom: ${form.country}\nDestination: ${form.destination}\n\nMessage: ${form.message}`;
    window.open("https://wa.me/4915906171828?text="+encodeURIComponent(msg),"_blank");
    setSent(true);
  };

  const inp:React.CSSProperties={width:"100%",padding:"12px 14px",border:"1.5px solid #E5E7EB",borderRadius:"10px",fontSize:"14px",fontFamily:IN,background:"#F9FAFB",outline:"none"};
  const lbl:React.CSSProperties={display:"block",fontSize:"13px",fontWeight:600,color:"#374151",marginBottom:"6px"};

  return(
    <div style={{background:"#F9FAFB"}}>
      <div style={{background:"#0B1D3A",padding:"72px 1.5rem"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <span style={{display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",color:"#FCD34D",marginBottom:"10px"}}>📩 Get in touch</span>
          <h1 style={{fontFamily:PD,fontSize:"clamp(2.4rem,5vw,3.5rem)",fontWeight:900,lineHeight:1.08,color:"#fff",maxWidth:"700px",marginBottom:"16px"}}>We're here to help — contact VisaVista</h1>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.7)",maxWidth:"580px",lineHeight:1.75}}>Reach us via WhatsApp, email or the contact form below. We respond in Urdu, Hindi, Bengali or English — typically within 24 hours.</p>
        </div>
      </div>

      <section style={{maxWidth:"1200px",margin:"0 auto",padding:"5rem 1.5rem"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1.4fr",gap:"56px",alignItems:"start"}}>

          {/* Contact options */}
          <div>
            <span style={{display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",color:"#DC2626",marginBottom:"10px"}}>Reach us</span>
            <h2 style={{fontFamily:PD,fontSize:"clamp(1.75rem,3vw,2.2rem)",fontWeight:800,lineHeight:1.2,color:"#0B1D3A",marginBottom:"8px"}}>Choose how to contact us</h2>
            <div style={{width:"60px",height:"4px",background:"#DC2626",borderRadius:"2px",margin:"14px 0 28px"}}/>

            {[
              {icon:"💬",title:"WhatsApp (Fastest)",desc:"Typically responds within 2–4 hours. Send us a message in Urdu, Hindi, Bengali or English.",cta:"Open WhatsApp",href:WA,color:"#25D366",bg:"#F0FFF4",border:"#6EE7B7"},
              {icon:"✉️",title:"Email",desc:"For detailed questions or document sharing. Response within 24 hours.",cta:"Email us",href:"mailto:shaista.s.shabbir@gmail.com",color:"#1D4ED8",bg:"#EFF6FF",border:"#BFDBFE"},
              {icon:"📅",title:"Book a free consultation",desc:"30-minute 1-on-1 call with an immigration expert in your language.",cta:"Book free call",href:"/consultancy",color:"#DC2626",bg:"#FEF2F2",border:"#FCA5A5"},
            ].map(c=>(
              <div key={c.title} style={{background:c.bg,border:`1.5px solid ${c.border}`,borderRadius:"16px",padding:"18px 20px",marginBottom:"14px",display:"flex",gap:"14px",alignItems:"flex-start"}}>
                <span style={{fontSize:"28px",flexShrink:0}}>{c.icon}</span>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,color:"#0B1D3A",fontSize:"15px",marginBottom:"4px"}}>{c.title}</div>
                  <div style={{fontSize:"13px",color:"#6B7280",lineHeight:1.6,marginBottom:"12px"}}>{c.desc}</div>
                  <a href={c.href} target={c.href.startsWith("http")?"_blank":undefined} rel={c.href.startsWith("http")?"noopener noreferrer":undefined} style={{display:"inline-flex",alignItems:"center",gap:"6px",padding:"9px 18px",borderRadius:"9px",background:c.color,color:"#fff",textDecoration:"none",fontSize:"13px",fontWeight:700}}>{c.cta} →</a>
                </div>
              </div>
            ))}

            <div style={{background:"#0B1D3A",borderRadius:"16px",padding:"20px 22px",marginTop:"6px"}}>
              <div style={{fontWeight:700,color:"#FCD34D",fontSize:"14px",marginBottom:"10px"}}>🌍 Languages we speak</div>
              <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
                {["🇵🇰 Urdu","🇮🇳 Hindi","🇧🇩 Bengali","🌍 English"].map(l=>(
                  <span key={l} style={{background:"rgba(255,255,255,.1)",color:"#fff",fontSize:"13px",fontWeight:600,padding:"5px 12px",borderRadius:"999px"}}>{l}</span>
                ))}
              </div>
              <div style={{fontSize:"12px",color:"rgba(255,255,255,.5)",marginTop:"12px"}}>⏱ Typical response: WhatsApp 2–4h · Email 24h · Mon–Sun</div>
            </div>
          </div>

          {/* Contact form */}
          <div style={{background:"#fff",borderRadius:"24px",padding:"36px",border:"1.5px solid #E5E7EB",boxShadow:"0 4px 24px rgba(0,0,0,.06)"}}>
            {sent ? (
              <div style={{textAlign:"center",padding:"40px 20px"}}>
                <div style={{fontSize:"56px",marginBottom:"20px"}}>🎉</div>
                <h3 style={{fontFamily:PD,fontWeight:800,fontSize:"22px",color:"#0B1D3A",marginBottom:"10px"}}>Message sent!</h3>
                <p style={{color:"#6B7280",fontSize:"15px",lineHeight:1.65}}>We've received your enquiry via WhatsApp. Our team will respond within 2–4 hours.</p>
                <button onClick={()=>setSent(false)} style={{marginTop:"24px",padding:"12px 24px",borderRadius:"12px",background:"#DC2626",color:"#fff",border:"none",fontWeight:700,cursor:"pointer",fontSize:"14px",fontFamily:IN}}>Send another message</button>
              </div>
            ):(
              <form onSubmit={handleSubmit}>
                <h3 style={{fontFamily:PD,fontWeight:800,fontSize:"20px",color:"#0B1D3A",marginBottom:"6px"}}>Send us a message</h3>
                <p style={{fontSize:"13.5px",color:"#9CA3AF",marginBottom:"24px"}}>Fills out your WhatsApp message — we'll reply in your language.</p>

                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px",marginBottom:"14px"}}>
                  <div>
                    <label style={lbl}>Your name *</label>
                    <input required style={inp} placeholder="Ayesha Khan" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                  </div>
                  <div>
                    <label style={lbl}>Email address *</label>
                    <input required type="email" style={inp} placeholder="ayesha@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
                  </div>
                </div>
                <div style={{marginBottom:"14px"}}>
                  <label style={lbl}>WhatsApp number (with country code)</label>
                  <input style={inp} placeholder="+92 300 1234567" value={form.whatsapp} onChange={e=>setForm({...form,whatsapp:e.target.value})}/>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px",marginBottom:"14px"}}>
                  <div>
                    <label style={lbl}>I'm from *</label>
                    <select required style={inp} value={form.country} onChange={e=>setForm({...form,country:e.target.value})}>
                      <option value="">Select country</option>
                      <option>🇵🇰 Pakistan</option>
                      <option>🇮🇳 India</option>
                      <option>🇧🇩 Bangladesh</option>
                      <option>🇦🇫 Afghanistan</option>
                      <option>🌍 Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={lbl}>I want to move to *</label>
                    <select required style={inp} value={form.destination} onChange={e=>setForm({...form,destination:e.target.value})}>
                      <option value="">Select destination</option>
                      <option>🇩🇪 Germany</option>
                      <option>🇮🇹 Italy</option>
                      <option>🇸🇪 Sweden</option>
                      <option>🇬🇧 United Kingdom</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div style={{marginBottom:"22px"}}>
                  <label style={lbl}>Your question or message *</label>
                  <textarea required rows={4} style={{...inp,resize:"vertical"}} placeholder="Tell us about your situation — visa type, qualifications, timeline..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
                </div>
                <button type="submit" style={btnP}>💬 Send via WhatsApp →</button>
                <p style={{fontSize:"11.5px",color:"#9CA3AF",textAlign:"center",marginTop:"10px"}}>This opens WhatsApp with your message pre-filled. We respond in your preferred language.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
