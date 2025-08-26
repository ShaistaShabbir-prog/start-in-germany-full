import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[520px] md:h-[600px]">
        <Image
          src="/images/hero.jpg"
          alt="Arriving in Germany"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
      </div>

      <div className="container-narrow">
        <div className="-mt-48 md:-mt-60 mb-10">
          <div className="rounded-2xl bg-white/90 backdrop-blur p-8 md:p-10 shadow-md ring-1 ring-black/5">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Start your journey in Germany
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-700">
              Friendly guidance on visas, jobs, study, living and finances.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/visa" className="btn btn-primary">Visa options</Link>
              <Link href="/finances" className="btn btn-ghost">Free bank & card</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
