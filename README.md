<div align="center">

<h1>🌍 VisaVista</h1>

<p><strong>Europe's immigration platform for South Asians</strong><br>
Complete visa guidance · Job search · Banking · Appointment booking</p>

[![Live](https://img.shields.io/badge/🌐_Live-start--in--germany--full.vercel.app-4A90E2?style=for-the-badge)](https://start-in-germany-full.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Vercel](https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

</div>

---

## What is VisaVista?

VisaVista is a full-stack immigration consultancy platform targeting students and professionals from **Pakistan, India, Bangladesh, and Afghanistan** moving to Europe and other Western countries.

Covers **7 destinations:** Germany · Italy · Sweden · UK · Canada · Australia · Spain

Reference inspiration: [make-it-in-germany.com](https://www.make-it-in-germany.com)

---

## 🌐 Live

**Production:** [start-in-germany-full.vercel.app](https://start-in-germany-full.vercel.app)

---

## ✨ Features

### 🗺️ Destination Coverage
| Country | Visa Types | Job Search | Banking | Appointment |
|---|---|---|---|---|
| 🇩🇪 Germany | Chancenkarte, Blue Card, Study, Ausbildung | ✅ | ✅ | ✅ |
| 🇮🇹 Italy | Decreto Flussi, Self-employment | ✅ | ✅ | — |
| 🇸🇪 Sweden | Work permit, Study | ✅ | — | — |
| 🇬🇧 UK | Skilled Worker, Graduate | ✅ | — | — |
| 🇨🇦 Canada | Express Entry, PNP | ✅ | — | — |
| 🇦🇺 Australia | Skilled visa, 189/190 | ✅ | — | — |
| 🇪🇸 Spain | Digital Nomad, Work | ✅ | — | — |

### 🤖 AI Features
- **FAQ + website chatbot** — works without an API key and searches the current page
- **Optional Claude enhancement** — server-side only; the API key is never exposed to the browser
- **Quick-Check tool** — find your visa path in 30 seconds
- **Auto-updating news** — live immigration news per country via `/api/news`

### 📬 Lead Generation
- Email capture bar (hero + Quick-Check card)
- Subscribers saved to localStorage `vv_subscribers`
- Admin dashboard at `/admin` with export CSV, email all

### 💳 Monetisation
- Referral integrations: **Wise**, **Commerzbank** (€50 bonus), **Advanzia Mastercard Gold**
- WhatsApp consultation booking: [CONTACT FORM]
- Free Consultation CTA throughout

### 🔒 Admin Dashboard (`/admin`)
Password-protected (env `NEXT_PUBLIC_ADMIN_PASSWORD`, default `visavista2026`)
- Overview stats · Email leads · Consultations · Country pages · Settings

---

## 🏗️ Architecture

```
app/
├── page.tsx              # Homepage — hero, Quick-Check, email capture
├── visa/                 # Germany visa guide
├── work/                 # Job search
├── finances/             # Banking & Wise/Commerzbank referrals
├── appointment/          # Embassy appointment booking
├── blog/                 # Blog with live news sidebar
├── news/                 # News hub — all 7 countries
├── consultancy/          # Free consultation booking
├── admin/                # Admin dashboard (password protected)
│   └── leads/            # Email subscriber management
└── api/
    └── news/             # News API — country-specific immigration updates

components/
├── NavBar.tsx            # Sticky navigation
├── Footer.tsx            # Footer with referral links
├── Chatbot.tsx           # Claude AI immigration assistant
├── NewsWidget.tsx        # Live immigration news per country
└── AdminGuard.tsx        # Password auth HOC for admin pages
```

---

## 🛠️ Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + inline styles |
| AI | Anthropic Claude claude-sonnet-4-20250514 |
| Deployment | Vercel |
| Storage | localStorage (leads), no backend DB |

---

## 🚀 Quick Start

```bash
git clone https://github.com/ShaistaShabbir-prog/start-in-germany-full
cd start-in-germany-full
npm install
cp .env.example .env.local   # add ANTHROPIC_API_KEY
npm run dev                   # http://localhost:3000
```

### Environment Variables (Vercel)
```env
ANTHROPIC_API_KEY=sk-ant-...          # Optional; local FAQ mode works without it
ANTHROPIC_MODEL=claude-sonnet-4-20250514
NEXT_PUBLIC_ADMIN_PASSWORD=your_pass  # Admin dashboard access
```

---

## 📄 License

MIT License - see [LICENSE](./LICENSE).
