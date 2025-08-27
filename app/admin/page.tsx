export const dynamic = "force-dynamic";
export default function Admin(){
  return (
    <div className="section">
      <h1 className="h1">Admin Dashboard</h1>
      <p className="lead">This is a minimal protected area. Add your CMS or analytics here.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="card"><div className="h2">Content</div><p className="mt-2 text-gray-700">Edit homepage texts, links and CTAs.</p></div>
        <div className="card"><div className="h2">Analytics</div><p className="mt-2 text-gray-700">Wire up Vercel Analytics or Plausible.</p></div>
      </div>
    </div>
  );
}
