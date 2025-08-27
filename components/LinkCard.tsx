import Link from "next/link";
export default function LinkCard({ title, href, children }:{ title:string; href:string; children?:React.ReactNode; }){
  return (
    <div className="card">
      <div className="text-lg font-bold">{title}</div>
      {children && <p className="mt-2 text-gray-700">{children}</p>}
      <Link href={href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-4">Open official site</Link>
    </div>
  );
}
