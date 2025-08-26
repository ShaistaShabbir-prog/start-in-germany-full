import Banner from "@/components/Banner";

export default function Visa() {
  return (
    <div className="container-narrow py-12">
      <Banner src="/images/visa.jpg" alt="Visa & residence documents" height={260} />
      <h1 className="mt-8 text-4xl font-extrabold tracking-tight">Visa & Residence</h1>
      <p className="mt-4 text-lg text-gray-700">
        Several routes can lead you to Germany: EU Blue Card, Skilled worker, Opportunity Card, Students & trainees,
        Family reunification, Settlement & naturalisation.
      </p>
      {/* … your cards … */}
      {/* official links block */}
    </div>
  );
}
