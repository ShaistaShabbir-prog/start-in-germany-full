import Banner from "@/components/Banner";

export default function Study() {
  return (
    <div className="container-narrow py-12">
      <Banner src="/images/study.jpg" alt="Study in Germany" height={260} />
      <h1 className="mt-8 text-4xl font-extrabold tracking-tight">Study & Vocational Training</h1>
      <p className="mt-4 text-lg text-gray-700">
        Germany offers world-class universities and a unique dual vocational training system (Ausbildung).
      </p>
      {/* … cards as you had … */}
    </div>
  );
}
