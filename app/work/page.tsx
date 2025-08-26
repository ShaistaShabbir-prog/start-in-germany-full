import Banner from "@/components/Banner";
import Link from "next/link";

export default function Work() {
  return (
    <div className="section">
      <Banner src="/images/work.jpg" alt="Working in Germany" height={300} objectPosition="50% 35%" />
      <h1 className="h1 mt-8">Working in Germany</h1>
      <p className="lead">
        Germany actively welcomes skilled professionals. Below you’ll find a friendly overview of shortage
        occupations, job search strategies, the application process, and how foreign qualifications are recognised.
      </p>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="h2">Professions in demand</h2>
          <p className="mt-2 text-gray-700">
            Healthcare, IT, engineering, skilled trades and transport regularly seek talent. Check regional
            demand and employer requirements.
          </p>
          <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
            <li>IT specialists (developers, admins, security)</li>
            <li>Nurses and other healthcare roles</li>
            <li>Engineers (mechanical, electrical, civil)</li>
            <li>Craftspeople and logistics/transport</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="h2">Finding a job</h2>
          <p className="mt-2 text-gray-700">
            Search major job boards and company websites. Tailor your CV to German standards and write concise cover letters.
          </p>
          <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
            <li>Use English and German keywords.</li>
            <li>Keep your CV to 1–2 pages with clear responsibilities and results.</li>
            <li>Bring diplomas and references to interviews.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="h2">Recognition of qualifications</h2>
          <p className="mt-2 text-gray-700">
            Many regulated professions require recognition or degree evaluation. Start this early to save time during visa processing.
          </p>
        </div>

        <div className="card">
          <h2 className="h2">Workplace basics</h2>
          <p className="mt-2 text-gray-700">
            Understand your work contract, salary components, taxes and social security contributions. Ask for written offers and review probation periods.
          </p>
        </div>
      </section>

      <div className="mt-10">
        <Link className="btn btn-ghost" href="/visa">See visas for qualified work</Link>
      </div>
    </div>
  );
}
