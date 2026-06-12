export interface Faq {
  question: string;
  answer: string;
  keywords: string[];
  href: string;
}

export const FAQS: Faq[] = [
  {
    question: "Which Germany visa routes are covered?",
    answer: "VisaVista covers the EU Blue Card, Opportunity Card (Chancenkarte), skilled worker visa, study visa, Ausbildung, and family reunification. Use the visa guide for route requirements and always verify current thresholds with the official German authorities.",
    keywords: ["visa", "blue card", "chancenkarte", "opportunity card", "skilled worker", "ausbildung", "family"],
    href: "/visa",
  },
  {
    question: "Can VisaVista help me find work?",
    answer: "Yes. The work section explains job-search routes, qualification recognition, and preparation for applications in Germany. It is guidance rather than a job-placement guarantee.",
    keywords: ["job", "work", "employment", "career", "recognition", "anabin"],
    href: "/work",
  },
  {
    question: "What study guidance is available?",
    answer: "The study section covers university pathways, common application documents, APS and financing topics. Admission and visa rules vary, so confirm your case with the university and official visa portal.",
    keywords: ["study", "student", "university", "aps", "admission", "blocked account"],
    href: "/study",
  },
  {
    question: "How can I book a consultation?",
    answer: "Open the consultancy page to request guidance, or contact VisaVista through the WhatsApp button. Personal immigration cases should also be checked with a qualified immigration lawyer.",
    keywords: ["consultation", "appointment", "whatsapp", "contact", "help", "book"],
    href: "/consultancy",
  },
  {
    question: "Does VisaVista provide banking guidance?",
    answer: "The finances section introduces banking and money-transfer options for newcomers. Compare fees and eligibility directly with each provider before opening an account.",
    keywords: ["bank", "banking", "wise", "money", "finance", "account"],
    href: "/finances",
  },
];

export const STARTERS = FAQS.slice(0, 4).map((faq) => faq.question);

const normalize = (value: string) =>
  value.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();

export function findLocalAnswer(question: string, pageContext = "") {
  const query = normalize(question);
  const tokens = query.split(" ").filter((token) => token.length > 2);
  let best: { faq: Faq; score: number } | undefined;

  for (const faq of FAQS) {
    const searchable = normalize(`${faq.question} ${faq.answer} ${faq.keywords.join(" ")}`);
    const score = tokens.reduce((total, token) => total + (searchable.includes(token) ? 1 : 0), 0);
    if (!best || score > best.score) best = { faq, score };
  }

  if (best && best.score > 0) {
    return { answer: best.faq.answer, sources: [{ label: best.faq.question, href: best.faq.href }] };
  }

  const sentences = pageContext
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 35 && sentence.length < 320)
    .map((sentence) => ({
      sentence,
      score: tokens.reduce((total, token) => total + (normalize(sentence).includes(token) ? 1 : 0), 0),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);

  if (sentences.length) {
    return {
      answer: `Based on this page: ${sentences.map((item) => item.sentence).join(" ")}`,
      sources: [{ label: "Current website page", href: "" }],
    };
  }

  return {
    answer: "I could not find that in the VisaVista FAQs or on this page. Try asking about visas, work, study, banking, appointments, or consultations.",
    sources: [],
  };
}
