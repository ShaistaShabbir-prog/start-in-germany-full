import Image from "next/image";
import Link from "next/link";

type Spot = { left: number; top: number; href: string; label: string; };

export default function HotspotImage({
  src, alt, height = 520, spots = [], gradient = true
}: { src: string; alt: string; height?: number; spots?: Spot[]; gradient?: boolean }) {
  return (
    <div className="relative" style={{ height }}>
      <Image src={src} alt={alt} fill className="object-cover" priority />
      {gradient && <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 pointer-events-none" />}
      {spots.map((s, i) => (
        <Link key={i} href={s.href} className="btn btn-primary absolute"
          style={{ left: s.left + '%', top: s.top + '%', transform: 'translate(-50%, -50%)' }}>
          {s.label}
        </Link>
      ))}
    </div>
  );
}
