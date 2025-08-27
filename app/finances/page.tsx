import Link from "next/link";
export default function Finances() {
  return (
    <div className="section">
      <h1 className="h1">Money & Banking</h1>
      <p className="lead">
        Set up your banking quickly with options we like. These are referral links that support the site at no extra cost to you.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="h2">Advanzia — Fee-free Credit Card</h2>
          <p className="mt-2 text-gray-700">No annual fee. Great for online payments and emergencies.</p>
          <Link href="https://refer.gebuhrenfrei.com/shaistas-45" target="_blank" className="btn btn-primary mt-4">Open Advanzia card</Link>
        </div>
        <div className="card">
          <h2 className="h2">Commerzbank — €50 Starting Credit</h2>
          <p className="mt-2 text-gray-700">Solid current account with welcome bonus.</p>
          <Link href="https://www.commerzbank.de/girokonto-antrag?path=/pk/de/Abschluss/GD51_Girokonto_DD_MCD_TGK_50Start_KwK&x-werbecode=PNGHRA" target="_blank" className="btn btn-primary mt-4">
            Open Commerzbank account
          </Link>
        </div>
      </section>
    </div>
  );
}
