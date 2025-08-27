import Banner from "@/components/Banner";

export default function Living() {
  return (
    <div className="section">
      <Banner src="/images/living.jpg" alt="Living in Germany" height={300} objectPosition="50% 40%" />
      <h1 className="h1 mt-8">Living in Germany</h1>
      <p className="lead">
        Practical tips on language, housing, mobility, money and insurance to help you settle smoothly.
      </p>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card"><h2 className="h2">Learning German</h2><p className="mt-2 text-gray-700">
          From basic phrases to integration courses—consistent practice pays off. Combine apps, classes and conversation.</p></div>
        <div className="card"><h2 className="h2">Housing & registration</h2><p className="mt-2 text-gray-700">
          Search early, prepare documents, and register your address (Anmeldung) after moving in.</p></div>
        <div className="card"><h2 className="h2">Money & insurance</h2><p className="mt-2 text-gray-700">
          Open a current account, pick the right health insurance and consider helpful optional cover (e.g., liability insurance).</p></div>
        <div className="card"><h2 className="h2">Everyday life</h2><p className="mt-2 text-gray-700">
          Transport tickets, shopping hours, recycling and more useful everyday know-how.</p></div>
      </section>
    </div>
  );
}
