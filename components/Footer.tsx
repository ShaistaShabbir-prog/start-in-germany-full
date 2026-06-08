import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy mt-16 text-white">
      <div className="container-narrow py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 text-lg font-extrabold">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-black">
                S
              </div>
              <span>StartinGermany</span>
            </div>
            <p className="mt-3 text-sm text-white/55 leading-relaxed">
              Independent, friendly guidance for moving, working and studying in
              Germany. Not affiliated with the German government.
            </p>
            <div className="mt-4 flex gap-2">
              {["in", "ig", "yt", "𝕏"].map((s) => (
                <div
                  key={s}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-white/60 hover:bg-brand-600 hover:text-white cursor-pointer transition"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* explore */}
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-white/50 mb-3">Explore</div>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/work", label: "Work in Germany" },
                { href: "/study", label: "Study & Training" },
                { href: "/visa", label: "Visa & Residence" },
                { href: "/living", label: "Living in Germany" },
                { href: "/finances", label: "💳 Banking & Money" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* banking */}
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-white/50 mb-3">Banking Picks</div>
            <ul className="space-y-2 text-sm">
              {[
                { href: "https://wise.com/invite/in/shaistak5", label: "🌐 Wise Account" },
                { href: "https://www.commerzbank.de/girokonto-antrag?path=/pk/de/Abschluss/GD51_Girokonto_DD_MCD_TGK_50Start_KwK&x-werbecode=PNGHRA", label: "🏦 Commerzbank (50€)" },
                { href: "https://refer.gebuhrenfrei.com/shaistas-45", label: "💳 Advanzia Card" },
                { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white/60 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* legal & contact */}
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-white/50 mb-3">Legal & Contact</div>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/imprint", label: "Imprint (Impressum)" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/about", label: "About us" },
                { href: "/service", label: "Service & FAQ" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-white/55">
              Questions?{" "}
              <a href="mailto:shaista.s.shabbir@gmail.com" className="text-amber-400 hover:underline">
                shaista.s.shabbir@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/30">
        © {new Date().getFullYear()} Start in Germany — All rights reserved. Independent, not government-affiliated.
      </div>
    </footer>
  );
}
