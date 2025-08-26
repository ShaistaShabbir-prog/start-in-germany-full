import Image from "next/image";

export default function Study() {
  return (
    <div className="container-narrow py-12">
      {/* Banner */}
      <div className="relative h-64 mb-8 rounded-2xl overflow-hidden">
        <Image
          src="/images/study.jpg"
          alt="International students on a German university campus"
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight">Study & Vocational Training</h1>
      <p className="mt-4 text-lg text-gray-700">
        Germany offers world-class universities and a unique dual vocational training system
        (Ausbildung). Choose the path that matches your background and goals.
      </p>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-bold">University studies</h2>
          <p className="mt-2 text-gray-700">
            Check admission requirements, plan arrival, and explore work options during studies.
            Many programmes are taught in English.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold">Vocational training (Ausbildung)</h2>
          <p className="mt-2 text-gray-700">
            Learn a profession with paid on-the-job training plus school-based modules. Securing a
            training place is part of the visa process.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold">Prospects after graduation</h2>
          <p className="mt-2 text-gray-700">
            Graduates often qualify for a residence permit to search for a job or transition directly
            into work once an offer is secured.
          </p>
        </div>
      </section>
    </div>
  );
}
