import Link from "next/link";

type CardProps = {
  title: string;
  subtitle: string;
  emoji: string;
  tag: string;
  tagColor: string;
  href: string;
  description: string;
  features: string[];
  bonus?: string;
  warning?: string;
};

function BankCard({ title, subtitle, emoji, tag, tagColor, href, description, features, bonus, warning }: CardProps) {
  return (
    <div className="card flex flex-col">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-3xl">
          {emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-extrabold text-navy text-lg leading-tight">{title}</div>
          <div className="mt-0.5 text-sm text-gray-500">{subtitle}</div>
          <span className={`mt-2 inline-block rounded-full px-3 py-0.5 text-xs font-semibold ${tagColor}`}>
            {tag}
          </span>
        </div>
      </div>

      {bonus && (
        <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 px-4 py-2.5 text-sm font-semibold text-amber-800">
          🎁 {bonus}
        </div>
      )}

      <p className="mt-4 text-sm text-gray-600 leading-relaxed">{description}</p>

      <ul className="mt-4 space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="mt-0.5 text-brand-500 flex-shrink-0">✓</span>
            {f}
          </li>
        ))}
      </ul>

      {warning && (
        <div className="mt-4 rounded-xl bg-gray-50 border border-gray-200 px-4 py-2.5 text-xs text-gray-500">
          ⚠️ {warning}
        </div>
      )}

      <div className="mt-auto pt-5">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary w-full justify-center"
        >
          Apply now →
        </Link>
        <p className="mt-2 text-center text-xs text-gray-400">
          Referral link — you may get a bonus, we may earn a small commission. No extra cost to you.
        </p>
      </div>
    </div>
  );
}

export default function Finances() {
  return (
    <div>
      {/* Header */}
      <div className="bg-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-500 opacity-10" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-amber-400 opacity-10" />
        </div>
        <div className="container-narrow relative z-10 py-14">
          <div className="section-label text-amber-400">Money &amp; Banking</div>
          <h1 className="h1 text-white">Set up your finances in Germany</h1>
          <p className="lead mt-3 text-white/70 max-w-2xl">
            Opening the right bank account and credit card is one of the first things
            you need to do when moving to Germany. Here are our trusted recommendations —
            personally vetted and used by our team.
          </p>
        </div>
      </div>

      {/* Why banking matters */}
      <section className="section">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: "🏠", title: "Rent & registration", desc: "You need a German IBAN (bank account number) for paying rent and registering your address (Anmeldung)." },
            { icon: "💼", title: "Salary payments", desc: "Employers in Germany pay salaries directly to a German IBAN. You need one before your first payday." },
            { icon: "🌍", title: "Send money home", desc: "Use Wise to transfer money internationally at the real exchange rate — no hidden markups." },
          ].map((t) => (
            <div key={t.title} className="rounded-2xl bg-brand-50 p-5">
              <div className="text-2xl">{t.icon}</div>
              <div className="mt-3 font-bold text-navy">{t.title}</div>
              <div className="mt-1.5 text-sm text-gray-600 leading-relaxed">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cards grid */}
      <section className="section border-t border-gray-100">
        <div className="section-label">Our recommendations</div>
        <h2 className="h2">Trusted accounts &amp; cards</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <BankCard
            emoji="🌐"
            title="Wise"
            subtitle="Multi-currency account"
            tag="Best for newcomers"
            tagColor="bg-teal-50 text-teal-700 border border-teal-200"
            href="https://wise.com/invite/in/shaistak5"
            bonus="Fee-free transfer up to £500 with referral link"
            description="Wise gives you a real multi-currency account with your own German IBAN, UK sort code, US routing number and more — ideal when you're moving and need accounts in multiple currencies."
            features={[
              "Real exchange rate — no hidden markups",
              "Receive a German IBAN instantly",
              "Hold 40+ currencies in one account",
              "Debit card works worldwide",
              "App available in English, German and more",
            ]}
            warning="Not a full German bank — some landlords/employers may prefer a traditional bank. Pair with Commerzbank for best coverage."
          />

          <BankCard
            emoji="🏦"
            title="Commerzbank Girokonto"
            subtitle="Traditional German current account"
            tag="50€ starting credit"
            tagColor="bg-amber-50 text-amber-700 border border-amber-200"
            href="https://www.commerzbank.de/girokonto-antrag?path=/pk/de/Abschluss/GD51_Girokonto_DD_MCD_TGK_50Start_KwK&x-werbecode=PNGHRA"
            bonus="50€ starting credit (conditions apply)"
            description="Commerzbank is one of Germany's largest retail banks. A traditional Girokonto is widely accepted by employers, landlords and authorities — essential for your Anmeldung and salary."
            features={[
              "German IBAN accepted everywhere",
              "Online + mobile banking in English",
              "Visa debit card included",
              "Branch network across Germany",
              "50€ promotional starting credit",
            ]}
            warning="Some accounts require monthly income threshold to avoid fees. Check current conditions on Commerzbank's website."
          />

          <BankCard
            emoji="💳"
            title="Advanzia Gebührenfrei Mastercard Gold"
            subtitle="Fee-free credit card"
            tag="No annual fee"
            tagColor="bg-purple-50 text-purple-700 border border-purple-200"
            href="https://refer.gebuhrenfrei.com/shaistas-45"
            description="The Advanzia Mastercard Gold is one of Germany's most popular fee-free credit cards. Great for online shopping, travel bookings and everyday purchases where a credit card is required."
            features={[
              "No annual fee — ever",
              "No foreign transaction fees abroad",
              "Mastercard Gold travel insurance included",
              "Fast online application process",
              "Accepted worldwide",
            ]}
            warning="Interest applies if you don't pay the full balance by the due date. Always pay on time and in full to avoid charges."
          />
        </div>
      </section>

      {/* Comparison table */}
      <section className="section border-t border-gray-100">
        <h2 className="h2">At a glance: which is right for you?</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">Feature</th>
                <th className="px-5 py-3 text-left font-semibold text-teal-700">🌐 Wise</th>
                <th className="px-5 py-3 text-left font-semibold text-amber-700">🏦 Commerzbank</th>
                <th className="px-5 py-3 text-left font-semibold text-purple-700">💳 Advanzia</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Account type", "Multi-currency", "Current account", "Credit card"],
                ["German IBAN", "✅ Yes", "✅ Yes", "❌ No"],
                ["Accepted by employers", "⚠️ Sometimes", "✅ Always", "—"],
                ["International transfers", "✅ Best rates", "⚠️ Fees apply", "—"],
                ["Annual fee", "Free / low fees", "Free (conditions)", "✅ Free"],
                ["Credit card", "Debit card", "Debit card", "✅ Credit card"],
                ["English support", "✅ Yes", "✅ Yes", "⚠️ Limited"],
              ].map(([feat, wise, commerz, advanzia]) => (
                <tr key={feat} className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-800">{feat}</td>
                  <td className="px-5 py-3 text-gray-600">{wise}</td>
                  <td className="px-5 py-3 text-gray-600">{commerz}</td>
                  <td className="px-5 py-3 text-gray-600">{advanzia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          ✅ = Yes &nbsp; ⚠️ = Partial / conditions apply &nbsp; ❌ = No &nbsp; — = Not applicable
        </p>
      </section>

      {/* Important notes */}
      <section className="section border-t border-gray-100">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
          <h2 className="text-lg font-bold text-navy">📋 Important notes</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><span>•</span> Promotions and conditions change. Always verify the current offer on the provider's website before applying.</li>
            <li className="flex gap-2"><span>•</span> This site is independent — we are not a bank or financial advisor. Links are referral links that may earn us a small commission at no extra cost to you.</li>
            <li className="flex gap-2"><span>•</span> Credit cards require responsible use. Avoid interest by paying your balance in full and on time.</li>
            <li className="flex gap-2"><span>•</span> See our <Link href="/affiliate-disclosure" className="text-brand-600 underline">Affiliate Disclosure</Link> for full transparency.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
