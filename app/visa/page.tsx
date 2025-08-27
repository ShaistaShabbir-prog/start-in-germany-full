import Banner from "@/components/Banner";

export default function Visa() {
  return (
    <div className="section">
      <Banner src="/images/visa.jpg" alt="Visa & residence documents" height={300} objectPosition="50% 45%" />
      <h1 className="h1 mt-8">Visa & Residence</h1>
      <p className="lead">
        Several routes can lead you to Germany: EU Blue Card, Skilled worker, Opportunity Card, Students & trainees,
        Family reunification, Settlement & naturalisation.
      </p>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card"><h2 className="h2">EU Blue Card</h2><p className="mt-2 text-gray-700">
          For university graduates with a qualifying job offer and minimum salary threshold.</p></div>
        <div className="card"><h2 className="h2">Skilled worker residence</h2><p className="mt-2 text-gray-700">
          For non-academic professions with recognised qualifications and a job offer aligned to your training.</p></div>
        <div className="card"><h2 className="h2">Opportunity Card</h2><p className="mt-2 text-gray-700">
          Points-based option for qualified job seekers to enter Germany and look for work.</p></div>
        <div className="card"><h2 className="h2">Students & trainees</h2><p className="mt-2 text-gray-700">
          Covers the period of your education and can allow limited work alongside your studies.</p></div>
        <div className="card"><h2 className="h2">Family reunification</h2><p className="mt-2 text-gray-700">
          Spouses and children can usually join once income, housing and insurance conditions are met.</p></div>
        <div className="card"><h2 className="h2">Permanent residence & naturalisation</h2><p className="mt-2 text-gray-700">
          After several years, you may qualify for a settlement permit or German citizenship if criteria are fulfilled.</p></div>
      </section>

      <div className="mt-10 card">
        <h2 className="h2">Official links</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
          <li><a className="text-brand-700" target="_blank" rel="noreferrer" href="https://www.make-it-in-germany.com/en/visa-residence">Make it in Germany — Visa & Residence</a></li>
          <li><a className="text-brand-700" target="_blank" rel="noreferrer" href="https://digital.diplo.de/visa">German MFA — Visa portal</a></li>
          <li><a className="text-brand-700" target="_blank" rel="noreferrer" href="https://digital.diplo.de/chancenkarte">Opportunity Card — MFA portal</a></li>
          <li><a className="text-brand-700" target="_blank" rel="noreferrer" href="https://www.bamf.de/EN/Themen/MigrationAufenthalt/ZuwandererDrittstaaten/Migrathek/BlaueKarteEU/blauekarteeu-node.html">BAMF — EU Blue Card</a></li>
        </ul>
      </div>
    </div>
  );
}
