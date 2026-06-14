const GlobalDisclaimer = () => (
  <div style={{
    background:"rgba(255,193,7,.04)",
    border:"1px solid rgba(255,193,7,.15)",
    borderRadius:"10px",
    padding:"10px 14px",
    marginBottom:"20px",
    display:"flex",
    alignItems:"flex-start",
    gap:"8px",
  }}>
    <span style={{fontSize:".9rem",flexShrink:0,marginTop:"1px"}}>ℹ️</span>
    <p style={{
      fontSize:".72rem",
      color:"rgba(255,255,255,.45)",
      lineHeight:1.6,
      margin:0,
    }}>
      <strong style={{color:"rgba(255,255,255,.65)"}}>General information only.</strong>{" "}
      VisaVista provides guidance based on official sources. We are not a law firm, immigration authority, or embassy.
      Always verify requirements with{" "}
      <a href="https://www.make-it-in-germany.com" target="_blank" rel="noopener"
        style={{color:"#FFCC02",textDecoration:"none"}}>Make it in Germany</a>,{" "}
      <a href="https://www.bamf.de" target="_blank" rel="noopener"
        style={{color:"#FFCC02",textDecoration:"none"}}>BAMF</a>, or your local German embassy.
    </p>
  </div>
);

export default GlobalDisclaimer;
