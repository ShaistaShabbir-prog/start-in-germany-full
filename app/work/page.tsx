import Banner from "@/components/Banner";
import Link from "next/link";

export default function Work() {
  return (
    <div className="container-narrow py-12">
      <Banner src="/images/work.jpg" alt="Working in Germany" height={260} />
      <h1 className="mt-8 text-4xl font-extrabold tracking-tight">Working in Germany</h1>
      <p className="mt-4 text-lg text-gray-700">
        Germany actively welcomes skilled professionals. Below you’ll find a friendly
        overview of shortage occupations, job search strategies, the application process,
        and how foreign qualifications are recognised.
      </p>
      {/* … rest unchanged … */}
      <div className="mt-10">
        <Link className="btn btn-ghost" href="/visa">See visas for qualified work</Link>
      </div>
      {/* official links block */}
    </div>
  );
}
