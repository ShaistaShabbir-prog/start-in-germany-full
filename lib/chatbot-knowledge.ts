export interface Faq {
  question: string;
  answer: string;
  keywords: string[];
  href: string;
  followUps?: string[];
  urgent?: boolean;
  country?: string;
}

export const FAQS: Faq[] = [
  // ── GERMANY VISAS ────────────────────────────────────────────
  {
    question: "What is the EU Blue Card and how do I qualify?",
    answer: "The EU Blue Card is Germany's work permit for qualified non-EU workers. Requirements for 2026: (1) University degree recognised in Germany, (2) Job offer with annual salary ≥ €50,700 (standard) or ≥ €45,934 for shortage occupations — IT, STEM, healthcare, construction, education. IT professionals can qualify without a degree with 3+ years of experience. The Blue Card is valid for 4 years and leads to permanent residence after 21 months with B1 German, or 33 months without.",
    keywords: ["blue card","bluecard","eu blue card","salary","threshold","50700","45934","work permit","qualify","requirements"],
    href: "/visa",
    followUps: ["What is the Chancenkarte?","How do I get permanent residence in Germany?","How do I get my degree recognised?"],
    country: "germany",
  },
  {
    question: "What is the Chancenkarte (Opportunity Card)?",
    answer: "The Chancenkarte is a 1-year job-search visa — you come to Germany WITHOUT a job offer and find work there. You need 6+ points from: qualified worker/degree (+3), German language B2+ (+2) or A2 (+1), English B2+ (+1), work experience 2+ years (+1), under 35 years old (+1), shortage occupation (+1), Germany connection (+1). You also need proof of funds: €1,027/month or a blocked account of €12,324. During the Chancenkarte you may work up to 20 hours/week trial work for 2 weeks per employer.",
    keywords: ["chancenkarte","opportunity card","job search","points","no job offer","come without job","job hunt"],
    href: "/visa",
    followUps: ["What is the EU Blue Card?","How much money do I need for the Chancenkarte?","Can I work on a Chancenkarte?"],
    country: "germany",
  },
  {
    question: "How long does a German visa application take?",
    answer: "Processing times vary: German embassy appointment (in your country): 4–12 weeks. After arrival, Ausländerbehörde appointment for a residence permit: 4–12 weeks. During processing you receive a Fiktionsbescheinigung (legal proof you can stay and work). Tips to speed up: apply early, have all documents ready, use the online appointment booking. Blue Card applications are generally faster than family reunification.",
    keywords: ["how long","processing time","wait","weeks","embassy appointment","ausländerbehörde"],
    href: "/appointment",
    followUps: ["What documents do I need for a German visa?","What is the Fiktionsbescheinigung?"],
    country: "germany",
  },
  {
    question: "What documents do I need for a German work visa?",
    answer: "For most German work permits you need: valid passport (min. 6 months beyond visa), biometric passport photos, completed application form, job contract or offer letter meeting salary threshold, university degree or vocational qualification (often needs official recognition), proof of health insurance, proof of accommodation, APS certificate (for India, China, Vietnam, Mongolia), and the application fee (€75–100). For Blue Card add: proof of degree recognition from anabin.kmk.org or ZAB.",
    keywords: ["documents","what do i need","paperwork","requirements","checklist","aps","anabin"],
    href: "/visa",
    followUps: ["How do I get my degree recognised in Germany?","What is APS certificate?","How long does a German visa take?"],
    country: "germany",
  },
  {
    question: "How do I get my degree recognised in Germany?",
    answer: "Check anabin.kmk.org first — if your university is listed as H+ or your degree as A, it's automatically recognised. If not: apply to ZAB (Zentralstelle für ausländisches Bildungswesen) for a Statement of Comparability (€200, takes 3–4 months). For regulated professions (doctor, nurse, lawyer, teacher, engineer): apply to the relevant Berufskammer or state authority — use anerkennung-in-deutschland.de to find the right authority. Free counselling: IQ Network has offices in every Bundesland.",
    keywords: ["recognition","degree","qualification","anabin","zab","recognised","credential","foreign degree"],
    href: "/work",
    followUps: ["What documents do I need for a German work visa?","What is anabin?"],
    country: "germany",
  },
  // ── STUDY IN GERMANY ─────────────────────────────────────────
  {
    question: "Is university in Germany really free?",
    answer: "Yes — at public universities, tuition is FREE for all students (German, EU, and international) at undergraduate and Masters level. You only pay a semester fee of €100–350 which covers public transport. Exceptions: Baden-Württemberg charges non-EU students €1,500/semester; a few private universities charge full fees. Living costs run €850–1,200/month depending on city. The cheapest cities for students: Leipzig, Dresden, Dortmund, Halle.",
    keywords: ["free","tuition","university","study","cost","fees","public university","studieren"],
    href: "/study",
    followUps: ["What scholarships are available for Germany?","What is a blocked account?","Which city is cheapest to study in Germany?"],
    country: "germany",
  },
  {
    question: "What is a blocked account (Sperrkonto) and how much do I need?",
    answer: "A blocked account proves you can support yourself financially in Germany. For 2024/2025 you need €11,904/year (€992/month). You deposit this before applying for your student visa; it gets released in monthly instalments once you arrive. Providers: Fintiba (recommended, €89 setup fee), Coracle (€49), Deutsche Bank (free for some nationalities). Open it early — some banks take 2–4 weeks to set up.",
    keywords: ["blocked account","sperrkonto","fintiba","coracle","11904","992","financial proof","student visa money"],
    href: "/study",
    followUps: ["Is university in Germany really free?","Which scholarships exist for Germany?"],
    country: "germany",
  },
  // ── SCHOLARSHIPS ────────────────────────────────────────────
  {
    question: "What are the best scholarships for Germany?",
    answer: "Top scholarships for Germany: (1) DAAD — €934/month + travel + health insurance, all nationalities, Masters/PhD/Research, apply Oct–Nov. (2) Konrad-Adenauer-Stiftung — €1,200/month, all fields. (3) Friedrich Ebert Stiftung — €1,200/month, social sciences focus. (4) Heinrich Böll Stiftung — €1,200/month, green/environmental focus, good for international students. (5) Alexander von Humboldt — €2,670–3,170/month for researchers. (6) Erasmus+ for EU exchanges. (7) Fulbright — US government fully funded, all fields. (8) Gates Cambridge — elite, University of Cambridge, all fields. All 18 scholarships are on the Scholarships page.",
    keywords: ["scholarship","daad","stipend","funding","grant","free money","fully funded","germany scholarship","fulbright","gates cambridge","chevening","humboldt","erasmus"],
    href: "/scholarships",
    followUps: ["How do I apply for DAAD?","What is the Humboldt Fellowship?","Are there scholarships for PhD students?"],
  },
  {
    question: "How do I apply for a DAAD scholarship?",
    answer: "DAAD (German Academic Exchange Service) is Germany's largest scholarship. Steps: (1) Find the right programme at daad.de — there are 100+ programmes by country and level. (2) Deadline: usually October–November for the following year. (3) You need: motivation letter (the most important document), academic CV, degree certificates and transcripts, 2 academic references, and a research/study plan. (4) Some programmes require a German language certificate (minimum B2). Apply early — the competition is international.",
    keywords: ["daad","apply","application","daad scholarship","how to apply daad"],
    href: "/scholarships",
    followUps: ["What are the best scholarships for Germany?","What other scholarships exist?"],
  },
  {
    question: "Are there scholarships for students from Pakistan, India, or Bangladesh?",
    answer: "Yes — several scholarships specifically target or heavily fund South Asian students: (1) DAAD — open to all nationalities including Pakistan, India, Bangladesh. (2) HEC Overseas Scholarship (Pakistan) — fully funded, apply Jan–Mar, hec.gov.pk. (3) Aga Khan Foundation — for Pakistan, Bangladesh, Afghanistan students, 50% grant + 50% loan, apply March 31. (4) ICCR India — for Indian students abroad. (5) Chevening (UK) and Commonwealth scholarships are also very accessible. Check the full list at the Scholarships page.",
    keywords: ["pakistan","india","bangladesh","hec","aga khan","south asia","south asian scholarship"],
    href: "/scholarships",
    followUps: ["How do I apply for a DAAD scholarship?","What is HEC overseas scholarship?"],
  },
  // ── OTHER COUNTRIES ──────────────────────────────────────────
  {
    question: "How do I move to the UK as a skilled worker?",
    answer: "The UK Skilled Worker visa requires: a job offer from a UK employer with a sponsor licence, a role on the eligible occupation list, salary meeting the threshold (£26,200/year or job-specific minimum, whichever is higher from April 2024), and English language proof. Application fee: £610–£1,500 depending on length. Processing: 3–8 weeks. With 5 years on Skilled Worker you can apply for Indefinite Leave to Remain (permanent residence).",
    keywords: ["uk","united kingdom","skilled worker","britain","england","british visa"],
    href: "/uk",
    followUps: ["What is the Chevening scholarship for UK?","How does the UK points-based system work?"],
    country: "uk",
  },
  {
    question: "How do I move to Canada through Express Entry?",
    answer: "Canada's Express Entry is the main pathway for skilled workers. Three programmes: Federal Skilled Worker (FSW), Canadian Experience Class (CEC), Federal Skilled Trades (FST). You create a profile and get a Comprehensive Ranking System (CRS) score. Draws happen regularly — minimum score varies (typically 470–530). Required: IELTS 6.0+, education credential assessment (ECA), job offer or provincial nomination adds points. Processing after invitation: 6 months. Popular provinces: Ontario, British Columbia, Alberta.",
    keywords: ["canada","express entry","crs","immigration","canadian visa","permanent residence canada"],
    href: "/canada",
    followUps: ["What is the Provincial Nominee Program (PNP)?","How much CRS score do I need?"],
    country: "canada",
  },
  {
    question: "How do I move to Australia on a skilled visa?",
    answer: "Australia's main skilled pathways: (1) Skilled Independent (189) — points-based, no employer/state sponsorship needed, requires 65+ points and occupation on the SOL list. (2) Skilled Nominated (190) — state nominates you, +5 points. (3) Employer Sponsored (482) — company sponsors you. Points come from: age (max 30 for age 25–32), English, education, work experience, Australia study, partner skills. IELTS minimum 6.0 for most visas. Apply through skillselect.homeaffairs.gov.au.",
    keywords: ["australia","skilled","189","190","points","australian visa","skillselect"],
    href: "/australia",
    followUps: ["What IELTS score do I need for Australia?","How many points do I need for Australia 189 visa?"],
    country: "australia",
  },
  {
    question: "How do I move to Italy?",
    answer: "Italy's main pathways: (1) Decreto Flussi — annual quota for non-EU workers (very competitive, apply immediately when quotes open). (2) EU Blue Card — same as Germany (salary threshold €30,000+/year in Italy). (3) Self-employment visa for entrepreneurs. (4) Study visa — tuition at public universities: €150–2,000/year (much cheaper than UK). Italy also has a Digital Nomad visa (since 2024) for remote workers earning €28,000+/year.",
    keywords: ["italy","italian","decreto flussi","rome","milan","italian visa","work italy"],
    href: "/italy",
    followUps: ["What is the EU Blue Card?","Are there Italian scholarships?"],
    country: "italy",
  },
  {
    question: "How do I move to Sweden?",
    answer: "Sweden's work permit requires a job offer — no points system. Process: employer posts job for 10 days, then applies for your work permit at migrationsverket.se. Processing: 2–4 months. Salary must meet collective agreements (typically SEK 27,360/month). Sweden has no minimum wage law but strong unions. After 4 years on work permit: permanent residence. Sweden is expensive — Stockholm costs SEK 15,000–20,000/month for a single person.",
    keywords: ["sweden","swedish","stockholm","malmö","göteborg","work permit sweden","migrationsverket"],
    href: "/sweden",
    followUps: ["What is the Sweden SI Scholarship?","How much does it cost to live in Sweden?"],
    country: "sweden",
  },
  // ── BANKING & FINANCES ───────────────────────────────────────
  {
    question: "Which bank account should I open in Germany?",
    answer: "Best options for newcomers in Germany: (1) N26 — open in 10 minutes online, no Schufa needed, English app, free basic account. Best for getting started immediately. (2) DKB — free if you deposit your salary, €0 ATM fees worldwide, very popular. (3) Commerzbank — traditional bank with branches, €50-100 new customer bonus via referral. (4) Wise — not a German bank but essential for international transfers at the real exchange rate. Avoid Deutsche Bank for newcomers — Schufa check required.",
    keywords: ["bank","account","open account","n26","dkb","commerzbank","wise","banking","german bank"],
    href: "/finances",
    followUps: ["How do I send money home from Germany?","What is Schufa?"],
    country: "germany",
  },
  {
    question: "How do I send money home cheaply from Germany?",
    answer: "Best options for international transfers: (1) Wise (transferwise.com) — uses the real mid-market exchange rate, typically 5–8× cheaper than banks. Send PKR, BDT, INR, GBP and most currencies. (2) Remitly — often cheaper than Wise for specific corridors (Pakistan, Bangladesh). (3) Western Union / Ria — good for cash pickup. (4) Your German bank — most expensive, avoid for large transfers. Always compare on Monito.com before sending.",
    keywords: ["send money","remittance","transfer","pakistan","india","bangladesh","wise","western union","remitly","cheapest"],
    href: "/finances",
    followUps: ["Which bank should I open in Germany?","What is Wise?"],
  },
  // ── GENERAL ─────────────────────────────────────────────────
  {
    question: "How can I book a free consultation with VisaVista?",
    answer: "You can reach VisaVista in two ways: (1) Click the green WhatsApp button on any page — send a message directly to our immigration advisor at [CONTACT FORM]. (2) Visit the Consultancy page to fill out a free consultation request form. Note: VisaVista provides guidance and information — for complex legal cases involving refusals or deportation, you should also consult a licensed Rechtsanwalt (immigration lawyer).",
    keywords: ["consultation","book","appointment","whatsapp","contact","talk","free","help","advisor","consultant"],
    href: "/consultancy",
    followUps: ["What countries does VisaVista cover?","What is VisaVista?"],
  },
  {
    question: "What countries does VisaVista cover?",
    answer: "VisaVista covers 7 destinations: 🇩🇪 Germany (most detailed — Blue Card, Chancenkarte, Ausbildung, study), 🇮🇹 Italy (Decreto Flussi, EU Blue Card, study), 🇸🇪 Sweden (work permit, study), 🇬🇧 UK (Skilled Worker, Graduate route), 🇨🇦 Canada (Express Entry, PNP), 🇦🇺 Australia (189, 190, employer-sponsored), 🇪🇸 Spain (Digital Nomad visa, work). We also have pages for Switzerland, Netherlands, Norway, Austria, France, and the USA. Plus: a full Scholarships guide with 18 major international scholarships.",
    keywords: ["countries","cover","which country","destinations","where","available"],
    href: "/",
    followUps: ["Which is the easiest country to immigrate to?","What are the best scholarships?"],
  },
];

export const STARTERS = [
  "EU Blue Card — do I qualify?",
  "Best free scholarships for Germany",
  "Which country is easiest to immigrate to?",
  "How do I book a free consultation?",
];

const normalize = (value: string) =>
  value.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();

export function findLocalAnswer(question: string, pageContext = "") {
  const query = normalize(question);
  const tokens = query.split(" ").filter((token) => token.length > 2);

  // Score all FAQs
  const scored = FAQS.map(faq => {
    const searchable = normalize(`${faq.question} ${faq.answer} ${faq.keywords.join(" ")}`);
    const score = tokens.reduce((total, token) =>
      total + (searchable.includes(token) ? 1 : 0), 0
    );
    return { faq, score };
  }).sort((a, b) => b.score - a.score);

  const best = scored[0];
  if (best && best.score > 0) {
    return {
      answer: best.faq.answer,
      sources: [{ label: best.faq.question, href: best.faq.href }],
      followUps: best.faq.followUps || [],
      urgent: best.faq.urgent || false,
    };
  }

  // Fallback: page context extraction
  const sentences = pageContext
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 35 && sentence.length < 320)
    .map((sentence) => ({
      sentence,
      score: tokens.reduce((total, token) =>
        total + (normalize(sentence).includes(token) ? 1 : 0), 0),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);

  if (sentences.length) {
    return {
      answer: `Based on this page: ${sentences.map((item) => item.sentence).join(" ")}`,
      sources: [{ label: "Current page", href: "" }],
      followUps: ["Book a free consultation", "What countries does VisaVista cover?"],
      urgent: false,
    };
  }

  return {
    answer: "I couldn't find a specific answer to that. Try asking about visas, scholarships, specific countries, banking, or book a free consultation via WhatsApp.",
    sources: [],
    followUps: ["EU Blue Card — do I qualify?", "Best free scholarships for Germany", "How do I book a free consultation?"],
    urgent: false,
  };
}
