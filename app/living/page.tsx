import Image from "next/image";

export default function Living() {
  return (
    <div className="container-narrow py-12">
      {/* Banner */}
      <div className="relative h-64 mb-8 rounded-2xl overflow-hidden">
        <Image
          src="/images/living.jpg"
          alt="Cozy German apartment interior with plants and a laptop"
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight">Living in Germany</h1>
      <p className="mt-4 text-lg text-gray-700">
        Practical tips on language, housing, mobility, money and insurance to help you settle
        smoothly.
      </p>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-bold">Learning German</h2>
          <p className="mt-2 text-gray-700">
            From basic phrases to integration courses—consistent practice pays off. Combine apps,
            classes and conversation.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold">Housing & registration</h2>
          <p className="mt-2 text-gray-700">
            Search early, prepare documents, and register your address (Anmeldung) after moving in.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold">Money & insurance</h2>
          <p className="mt-2 text-gray-700">
            Open a current account, pick the right health insurance and consider helpful optional
            cover (e.g., liability insurance).
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold">Everyday life</h2>
          <p className="mt-2 text-gray-700">
            Transport tickets, shopping hours, recycling and more useful everyday know-how.
          </p>
        </div>
      </section>
    </div>
  );
}
