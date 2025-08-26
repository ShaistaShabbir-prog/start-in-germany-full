import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <div className="container-narrow py-12">
      {/* Banner */}
      <div className="relative h-64 mb-8 rounded-2xl overflow-hidden">
        <Image
          src="/images/work.jpg"
          alt="Working in Germany — professionals in healthcare, IT and engineering"
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight">Working in Germany</h1>
      <p className="mt-4 text-lg text-gray-700">
        Germany actively welcomes skilled professionals. Below you’ll find a friendly
        overview of shortage occupations, job search strategies, the application process,
        and how foreign qualifications are recognised.
      </p>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-bold">Professions in demand</h2>
          <p className="mt-2 text-gray-700">
            Healthcare, IT, engineering, skilled trades and transport regularly seek talent.
            Check regional demand and employer requirements.
          </p>
          <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
            <li>IT specialists (developers, admins, security)</li>
            <li>Nurses and other healthcare roles</li>
            <li>Engineers (mechanical, electrical, civil)</li>
            <li>Craftspeople and logistics/transport</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold">Finding a job</h2>
          <p className="mt-2 text-gray-700">
            Search major job boards and company websites. Tailor your CV to German standards and
            write concise cover letters.
          </p>
          <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
            <li>Use English and German keywords.</li>
            <li>Keep your CV to 1–2 pages with clear responsibilities and results.</li>
            <li>Bring diplomas and references to interviews.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold">Recognition of qualifications</h2>
          <p className="mt-2 text-gray-700">
            Many regulated professions require recognition or degree evaluation. Start this early to
            save time during visa processing.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold">Workplace basics</h2>
          <p className="mt-2 text-gray-700">
            Understand your work contract, salary components, taxes and social security
            contributions. Ask for written offers and review probation periods.
          </p>
        </div>
      </section>

      <div className="mt-10">
        <Link className="btn btn-ghost" href="/visa">
          See visas for qualified work
        </Link>
      </div>

      {/* Official links */}
      <div className="mt-10 card">
        <h2 className="text-xl font-bold">Find jobs & recognition</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
          <li>
            <a className="text-brand-700" target="_blank" rel="noreferrer" href="https://www.arbeitsagentur.de/en">
              Federal Employment Agency (BA)
            </a>
          </li>
          <li>
            <a className="text-brand-700" target="_blank" rel="noreferrer" href="https://www.anerkennung-in-deutschland.de/html/en/index.php">
              Recognition of qualifications — official portal
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
