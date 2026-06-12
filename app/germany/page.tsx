"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GermanyPage() {
  const router = useRouter();
  useEffect(() => { router.replace("/visa"); }, []);
  return (
    <div style={{background:"#0a0d14",minHeight:"100vh",color:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
      <div style={{textAlign:"center"}}>
        <div style={{fontSize:"3rem",marginBottom:"16px"}}>🇩🇪</div>
        <h1 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:"8px"}}>Germany Immigration</h1>
        <p style={{color:"#64748b"}}>Redirecting to visa guide...</p>
      </div>
    </div>
  );
}
