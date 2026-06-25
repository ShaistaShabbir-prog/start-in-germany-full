import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are VisaVista's immigration assistant — an expert on moving to Germany and Europe.
You help people from Pakistan, India, Bangladesh and other South Asian countries navigate immigration.

Specialties:
- German visa types: Job Seeker, Skilled Worker, EU Blue Card, Chancenkarte, Student, Family Reunification
- German settlement: Anmeldung, health insurance, bank accounts, Steuer-ID
- Work permits: recognition of qualifications (Anerkennung), BAMF processes
- Life in Germany: housing, schools, cost of living, integration courses
- Other European countries: Italy, Sweden, UK, Canada, Australia

Rules:
- Answer in the same language the user writes in (Urdu, Hindi, Bengali, English)
- Be concise and practical — users need actionable information
- Always mention official sources (BAMF, Make it in Germany, Ausländerbehörde)
- Add ⚠️ disclaimer when giving specific timelines or fees (they change)
- Never guarantee visa approval
- If unsure, say so and direct to official sources`;

export async function POST(req: NextRequest) {
  const { message, history = [] } = await req.json();

  if (!message?.trim()) {
    return NextResponse.json({ error: "Message required" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    // Fallback: simple rule-based response
    return NextResponse.json({
      answer: getFallbackAnswer(message),
      source: "fallback"
    });
  }

  try {
    const messages = [
      ...history.slice(-8).map((h: {role:string;content:string}) => ({
        role: h.role === "user" ? "user" : "assistant",
        content: h.content,
      })),
      { role: "user", content: message },
    ];

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || "claude-haiku-4-5-20251001",
        max_tokens: 600,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!res.ok) throw new Error(`Anthropic API error: ${res.status}`);
    const data = await res.json();
    const answer = data.content?.[0]?.text || "Could not generate response.";
    return NextResponse.json({ answer, source: "claude" });

  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({ answer: getFallbackAnswer(message), source: "fallback" });
  }
}

function getFallbackAnswer(message: string): string {
  const msg = message.toLowerCase();
  if (msg.includes("blue card") || msg.includes("بلو کارڈ"))
    return "The EU Blue Card requires a university degree and a job offer with salary ≥ €45,300/year (2026). Apply at your local Ausländerbehörde. See: make-it-in-germany.com";
  if (msg.includes("chancenkarte") || msg.includes("opportunity card"))
    return "The Chancenkarte (Opportunity Card) lets you come to Germany for 1 year to search for a job. You need: degree + German/English B1 + 1 yr experience + funds (€12,000). See: bamf.de";
  if (msg.includes("student") || msg.includes("university") || msg.includes("studium"))
    return "Germany has ~23,000 Bachelor/Master programmes, many tuition-free for international students. Apply via uni-assist.de. You need: degree certificate, language certificate, proof of funds (€11,208/year). See: studying-in-germany.org";
  if (msg.includes("health") || msg.includes("insurance") || msg.includes("kranken"))
    return "Health insurance is mandatory in Germany. Employed: your employer enrolls you in GKV (e.g. TK, AOK). Self-employed/student: apply directly. Monthly cost: ~€200-400 for GKV. See: krankenkassen.de";
  if (msg.includes("anmeldung") || msg.includes("register") || msg.includes("registration"))
    return "Register at your local Bürgeramt within 2 weeks of arrival. Bring: passport + landlord confirmation (Wohnungsgeberbestätigung). You get a Meldebescheinigung which you need for everything else.";
  return "For accurate immigration information, please visit Make it in Germany (make-it-in-germany.com) or BAMF (bamf.de). Set up your ANTHROPIC_API_KEY environment variable to enable AI-powered responses.";
}
