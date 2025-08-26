import Banner from "@/components/Banner";

export default function Living() {
  return (
    <div className="container-narrow py-12">
      <Banner src="/images/living.jpg" alt="Living in Germany" height={260} />
      <h1 className="mt-8 text-4xl font-extrabold tracking-tight">Living in Germany</h1>
      <p className="mt-4 text-lg text-gray-700">
        Practical tips on language, housing, mobility, money and insurance to help you settle smoothly.
      </p>
      {/* … your cards … */}
    </div>
  );
}
