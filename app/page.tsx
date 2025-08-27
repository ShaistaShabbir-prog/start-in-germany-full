import HotspotImage from "@/components/HotspotImage";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <HotspotImage
          src="/images/hero.jpg"
          alt="Start in Germany"
          height={560}
          spots={[ { left: 24, top: 70, href: "/visa", label: "Get Started" } ]}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="container-narrow h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow">Start in Germany</h1>
              <p className="mt-4 text-white/90 text-lg drop-shadow">
                Original, friendly guidance for moving to Germany — visas, residence routes, finding a job,
                study options, banking, tips and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/work", title: "Working in Germany", img: "/images/work.jpg",
              text: "Shortage jobs across fields and tips for your application" },
            { href: "/study", title: "Study in Germany", img: "/images/study.jpg",
              text: "Offerings in English, costs and applying to German programs" },
            { href: "/visa", title: "Visa & Residence", img: "/images/visa.jpg",
              text: "Choose a route based on your background and plans" },
            { href: "/living", title: "Living Essentials", img: "/images/living.jpg",
              text: "Accounts, health insurance, housing, cost of living" }
          ].map(card => (
            <Link key={card.href} href={card.href} className="card hover:no-underline">
              <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="text-lg font-bold">{card.title}</div>
              <p className="mt-1 text-gray-700">{card.text}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/service" className="btn btn-ghost">Get official advice</Link>
        </div>
      </section>
    </div>
  );
}
