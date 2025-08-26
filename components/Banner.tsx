import Image from "next/image";

export default function Banner({
  src,
  alt,
  height = 260,
  overlay = true,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  height?: number;       // 220–360 looks good
  overlay?: boolean;     // soft dark layer for readability
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 ${className}`}
      style={{ height }}
    >
      <Image src={src} alt={alt} fill className="object-cover" priority={priority} />
      {overlay && <div className="absolute inset-0 bg-black/10" />}
    </div>
  );
}
