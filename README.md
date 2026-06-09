# VisaVista — European Immigration Guide

**🔗 Live:** [start-in-germany-full.vercel.app](https://start-in-germany-full.vercel.app)

> Trusted, independent immigration guidance for students and professionals from **Pakistan 🇵🇰 · India 🇮🇳 · Bangladesh 🇧🇩 · Afghanistan 🇦🇫** moving to Europe.

---

## About VisaVista

VisaVista is a consultancy and information website covering visa guidance, job search, banking, and settlement help for South Asian immigrants across **7 European and Western destinations**. Independent — not affiliated with any government or embassy.

**Founded by:** Shaista Shabbir (moved from Pakistan to Berlin 2019)
**Languages:** Urdu · Hindi · Bengali · English
**WhatsApp:** +49 159 06171828

---

## Countries Covered

| Country | Status | Key Visa Routes |
|---------|--------|-----------------|
| 🇩🇪 Germany | ✅ Live | EU Blue Card · Opportunity Card · Skilled Worker · Ausbildung · Student |
| 🇮🇹 Italy | ✅ Live | Decreto Flussi 2026 · Student · EU Blue Card · Family |
| 🇸🇪 Sweden | ✅ Live | Work Permit · EU Blue Card · Student · Self-Employment |
| 🇬🇧 United Kingdom | ✅ Live | Skilled Worker · Student · Health & Care · Graduate Route |
| 🇨🇦 Canada | ✅ Live | Express Entry · PNP · Study + PGWP · Healthcare · Family |
| 🇦🇺 Australia | ✅ Live | Skilled 189/190 · TSS 482 · Student 500 · Nursing · Partner |
| 🇪🇸 Spain | ✅ Live | Digital Nomad Visa · EU Blue Card · Student · Family |

---

## Pages

| Route | Content |
|-------|---------|
| `/` | Homepage — Quick-Check, 7 destinations, testimonials, jobs, banking |
| `/visa` | Germany — 6 visa types with 2026 data, Chancenkarte points, country guides |
| `/work` | Jobs — 9 professions, 9 cities, salaries, degree recognition |
| `/study` | Study — universities, APS guide, Ausbildung, 8-step checklist |
| `/living` | Living — 30-day checklist, housing costs, Muslim life, communities |
| `/finances` | Banking — Wise + Commerzbank (50€) + Advanzia referral links |
| `/appointment` | Embassy — CSP portal guide, country-specific wait times |
| `/consultancy` | Consultancy — 3 pricing tiers, team, FAQ |
| `/service` | Services & FAQ — 8 services, 8 questions answered |
| `/contact` | Contact — WhatsApp-integrated form |
| `/blog` | Blog — 9 SEO articles |
| `/italy` | Italy — Decreto Flussi, click day, EU Blue Card, life |
| `/sweden` | Sweden — Work permit, student, SFI, welfare |
| `/uk` | UK — Skilled Worker, Student, Health & Care, Graduate Route |
| `/canada` | Canada — Express Entry, PNP, Study+PGWP, caregivers |
| `/australia` | Australia — 189/190, TSS, Student, nursing |
| `/spain` | Spain — Digital Nomad, Blue Card, student, costs |
| `/about` | About — Founder story, team, transparency |
| `/imprint` | Imprint (Impressum) |
| `/privacy` | Privacy Policy (GDPR) |
| `/affiliate-disclosure` | Affiliate disclosure |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 14** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS v4** + inline React styles |
| Fonts | **Playfair Display** (headings) + **Inter** (body) |
| Images | **Unsplash** (free HD photos, no API key) |
| Deployment | **Vercel** (auto-deploy from `main` branch) |
| Analytics | Google Analytics 4 (GA4) |

---

## Key Features

- **WhatsApp floating button** — `` on every page
- **Quick-Check form** — dropdown: country × destination × purpose
- **7-country destinations dropdown** in navbar
- **Mobile-responsive** — full hamburger menu with all 7 countries
- **Real 2026 data** — Blue Card €50,700, Chancenkarte points grid, CSP portal
- **South Asian focused** — PK/IN/BD/AF embassy guides, community sections
- **Contact form** — pre-fills WhatsApp message, opens WhatsApp automatically
- **SEO optimised** — page titles, descriptions, Open Graph, JSON-LD
- **GDPR compliant** — Privacy policy, Imprint, Affiliate disclosure

---

## Setup & Development

```bash
git clone https://github.com/ShaistaShabbir-prog/start-in-germany-full.git
cd start-in-germany-full
npm install
npm run dev
# → http://localhost:3000
```

### Environment
No environment variables required. All images from Unsplash CDN (no API key).

For Google Analytics, update `G-PLACEHOLDER` in `app/layout.tsx` with your real GA4 Measurement ID.

---

## Deployment

Deployed on **Vercel** — auto-deploys on every push to `main`.

```
Repository: ShaistaShabbir-prog/start-in-germany-full
Branch: main
Framework: Next.js
Live URL: https://start-in-germany-full.vercel.app
```

To add a custom domain (e.g. `visavista.eu`):
1. Go to Vercel Dashboard → Domains
2. Add your domain
3. Update DNS at your registrar

---

## Next Steps / Roadmap

- [ ] Replace `G-PLACEHOLDER` with real Google Analytics ID
- [ ] Add custom domain (visavista.de / visavista.eu)
- [ ] Italy page — expand with regional job guides
- [ ] Sweden page — add Migrationsverket form guides
- [ ] Blog — write full articles (currently topic cards)
- [ ] Calendly integration for consultation booking
- [ ] Newsletter signup
- [ ] N26 / ING / DKB as additional banking options

---

## Contact & Consultancy

**Shaista Shabbir — VisaVista**
- 💬 WhatsApp: +49 159 06171828
- ✉️ shaista.s.shabbir@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/shaista-shabbir-a32a6b210)
- 💻 [GitHub](https://github.com/ShaistaShabbir-prog)

> *VisaVista is independent and not affiliated with any government, embassy, or official immigration authority.*
