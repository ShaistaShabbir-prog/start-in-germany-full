import LinkCard from "@/components/LinkCard";
export default function Service() {
  return (
    <div className="section">
      <h1 className="h1">Service & Official Resources</h1>
      <p className="lead">Trusted links from official German portals for visas, residence, recognition and first-contact help.</p>
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <LinkCard title="Make it in Germany — Visa & Residence" href="https://www.make-it-in-germany.com/en/visa-residence">
          Federal Government portal: visa types, residence titles and guidance.
        </LinkCard>
        <LinkCard title="Welcome Centers — Directory & Contacts" href="https://www.make-it-in-germany.com/en/welcome-center-bw-en">
          Find local Welcome Centers that advise skilled workers and employers.
        </LinkCard>
        <LinkCard title="Recognition of Qualifications — Official Portal" href="https://www.anerkennung-in-deutschland.de/html/en/index.php">
          Step-by-step help to get your foreign degree or training recognised.
        </LinkCard>
        <LinkCard title="BAMF — EU Blue Card" href="https://www.bamf.de/EN/Themen/MigrationAufenthalt/ZuwandererDrittstaaten/Migrathek/BlaueKarteEU/blauekarteeu-node.html">
          Requirements and rights for the EU Blue Card route.
        </LinkCard>
        <LinkCard title="Opportunity Card — MFA portal" href="https://digital.diplo.de/chancenkarte">
          Apply for the Chancenkarte (Opportunity Card) and check your points.
        </LinkCard>
        <LinkCard title="Visa — Consular Services Portal (German MFA)" href="https://digital.diplo.de/visa">
          Start your visa application online via the official MFA portal.
        </LinkCard>
        <LinkCard title="Federal Employment Agency (BA)" href="https://www.arbeitsagentur.de/en">
          Jobs, admission to the labour market, recognition & guidance.
        </LinkCard>
      </section>
    </div>
  );
}
