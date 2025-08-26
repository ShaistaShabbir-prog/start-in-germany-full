import Banner from "@/components/Banner";

export default function Study() {
  return (
    <div className="section">
      <Banner src="/images/study.jpg" alt="Study in Germany" height={300} objectPosition="50% 40%" />
      <h1 className="h1 mt-8">Study & Vocational Training</h1>
      <p className="lead">
        Germany offers world-class universities and a unique dual vocational training system (Ausbildung).
        Choose the path that matches your background and goals.
      </p>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="h2">University studies</h2>
          <p className="mt-2 text-gray-700">
            Check admission requirements, plan arrival, and explore work options during studies. Many programmes are taught in English.
          </p>
        </div>
        <div className="card">
          <h2 className="h2">Vocational training (Ausbildung)</h2>
          <p className="mt-2 text-gray-700">
            Learn a profession with paid on-the-job training plus school-based modules. Securing a training place is part of the visa process.
          </p>
        </div>
        <div className="card">
          <h2 className="h2">Prospects after graduation</h2>
          <p className="mt-2 text-gray-700">
            Graduates often qualify for a residence permit to search for a job or transition directly into work once an offer is secured.
          </p>
        </div>
      </section>
    </div>
  );
}
