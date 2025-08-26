import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Arriving in Germany"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container-narrow py-20 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Start your journey in Germany
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/90">
          Friendly guidance on visas, jobs, study, and living.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/visa" className="btn btn-primary">Visa options</Link>
          <Link href="/finances" className="btn btn-ghost bg-white/80 text-brand-700">
            Free bank & card
          </Link>
        </div>
      </div>
    </section>
  );
}
