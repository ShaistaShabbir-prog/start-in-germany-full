"use client";

const WA_NUMBER = "XXXXXXXXXX"; // [CONTACT FORM]
const WA_MESSAGE = "Hello VisaVista! I need help with my European visa application.";

export default function WhatsAppButton() {
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 999,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
          transition: "transform 0.2s, box-shadow 0.2s",
          textDecoration: "none",
        }}
        onMouseOver={e => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(37,211,102,0.6)";
        }}
        onMouseOut={e => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(37,211,102,0.45)";
        }}
      >
        {/* WhatsApp SVG Icon */}
        <svg viewBox="0 0 32 32" width="32" height="32" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.002 3C9.374 3 4 8.373 4 15c0 2.385.68 4.61 1.86 6.5L4 29l7.695-1.835A12.93 12.93 0 0016.002 28C22.628 28 28 22.627 28 16S22.628 3 16.002 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 01-5.03-1.355l-.36-.215-4.57 1.09 1.12-4.455-.23-.375A9.944 9.944 0 016 15c0-5.523 4.478-10 10.002-10zm-3.23 5.5c-.22 0-.57.083-.87.41-.3.328-1.14 1.113-1.14 2.714s1.167 3.147 1.33 3.365c.162.218 2.257 3.594 5.56 4.895 2.752 1.086 3.31.87 3.907.816.596-.055 1.924-.786 2.196-1.544.272-.758.272-1.407.19-1.542-.082-.137-.3-.218-.626-.381-.326-.163-1.924-.95-2.222-1.058-.3-.11-.517-.163-.735.163s-.843 1.058-1.034 1.275c-.19.218-.38.245-.706.082-.326-.163-1.375-.506-2.62-1.616-.97-.864-1.624-1.93-1.815-2.257-.19-.327-.02-.503.143-.665.147-.146.326-.38.49-.57.162-.19.217-.327.326-.544.11-.218.054-.41-.027-.57-.082-.163-.72-1.774-.994-2.43-.245-.6-.5-.52-.68-.53l-.582-.01z"/>
        </svg>
      </a>

      {/* Pulse ring animation */}
      <style>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .wa-pulse-ring {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          z-index: 998;
          animation: wa-pulse 2s ease-out infinite;
        }
      `}</style>
      <div className="wa-pulse-ring" />
    </>
  );
}
