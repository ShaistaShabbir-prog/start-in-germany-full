import Image from "next/image";
export default function Banner({
  src, alt, height = 280, overlay = true, objectPosition = "50% 50%"
}: { src: string; alt: string; height?: number; overlay?: boolean; objectPosition?: string }) {
  return (
    <div className="banner" style={{ height }}>
      <Image src={src} alt={alt} fill className="object-cover" style={{ objectPosition }} priority />
      {overlay && <div className="banner-overlay" />}
    </div>
  );
}
