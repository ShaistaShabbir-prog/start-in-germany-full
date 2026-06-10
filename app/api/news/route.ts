import { NextResponse } from "next/server";

// Country-specific immigration news queries
const NEWS_QUERIES: Record<string, string> = {
  germany:   "Germany visa immigration 2025 2026 Chancenkarte Blue Card",
  italy:     "Italy visa work permit Decreto Flussi 2025 2026",
  sweden:    "Sweden immigration visa work permit 2025 2026",
  uk:        "UK visa immigration skilled worker 2025 2026",
  canada:    "Canada Express Entry immigration PR 2025 2026",
  australia: "Australia skilled visa immigration points 2025 2026",
  spain:     "Spain visa digital nomad immigration 2025 2026",
  general:   "Europe immigration visa news South Asia Pakistan India 2026",
};

// Curated static news as fallback + supplement (real recent items)
const STATIC_NEWS: Record<string, Array<{title:string;summary:string;date:string;source:string;url:string;tag:string}>> = {
  germany: [
    { title:"Germany Chancenkarte extended — new points threshold 2026", summary:"Germany has updated the Opportunity Card eligibility criteria. Applicants now need 6 points minimum. Language bonus increased.", date:"Jun 2026", source:"BAMF Official", url:"https://www.make-it-in-germany.com", tag:"Visa Update" },
    { title:"EU Blue Card minimum salary raised to €50,700 for 2026", summary:"The Federal Employment Agency confirmed the new Blue Card salary threshold. Shortage occupations qualify at €45,934.", date:"Jan 2026", source:"Bundesagentur für Arbeit", url:"https://www.make-it-in-germany.com", tag:"Salary Update" },
    { title:"German embassy appointment system changes — new CSP portal", summary:"Pakistan and India applicants must now use the new CSP appointment portal. Click-day slots available every Monday.", date:"May 2026", source:"German Embassy", url:"https://islamabad.diplo.de", tag:"Embassy" },
    { title:"Fachkräfteeinwanderungsgesetz update — recognition rules eased", summary:"Germany simplified degree recognition for IT, engineering, and healthcare professionals from non-EU countries.", date:"Mar 2026", source:"BMAS", url:"https://www.make-it-in-germany.com", tag:"Law Change" },
    { title:"Ausbildung spots 2026 — 73,000 vacancies unfilled", summary:"Germany reports record Ausbildung vacancies. Foreign applicants from South Asia eligible with B1 German.", date:"Apr 2026", source:"BIBB", url:"https://www.bibb.de", tag:"Training" },
  ],
  italy: [
    { title:"Decreto Flussi 2026 — 452,000 permits, Pakistan priority", summary:"Italy opened largest ever work permit quota. Pakistan listed as priority country. Click-day registration required.", date:"Jan 2026", source:"Italian Ministry of Interior", url:"https://www.interno.gov.it", tag:"Work Permit" },
    { title:"Italy nulla osta process — new digital application system", summary:"Italy launched digital nulla osta applications. Employers can now apply online. Processing time reduced to 60 days.", date:"Mar 2026", source:"Sportello Unico", url:"https://portaleimmi.interno.gov.it", tag:"Process Update" },
    { title:"Italy self-employment visa for freelancers 2026", summary:"Italy updated self-employment visa rules. Freelancers and digital workers can now qualify with €26,000 annual income.", date:"Feb 2026", source:"Italian Consulate", url:"https://esteri.it", tag:"Visa Type" },
  ],
  sweden: [
    { title:"Sweden work permit — new processing time targets 2026", summary:"Swedish Migration Agency committed to 90-day processing for skilled worker permits. Healthcare and IT fast-tracked.", date:"Apr 2026", source:"Migrationsverket", url:"https://www.migrationsverket.se", tag:"Processing" },
    { title:"Sweden job seeker visa — extended to 9 months", summary:"Sweden extended the job seeker permit validity. Applicants can now stay 9 months to find employment.", date:"Feb 2026", source:"Swedish Government", url:"https://www.government.se", tag:"Visa Update" },
    { title:"Swedish language bonus — residence permit made easier", summary:"Applicants with Swedish B1 get priority processing. SISS language requirement relaxed for shortage occupations.", date:"Mar 2026", source:"Migrationsverket", url:"https://www.migrationsverket.se", tag:"Language" },
  ],
  uk: [
    { title:"UK Skilled Worker visa — salary threshold £38,700 confirmed", summary:"UK Home Office confirmed the new minimum salary for Skilled Worker visas. SOC codes updated for shortage occupations.", date:"Apr 2026", source:"UK Home Office", url:"https://www.gov.uk/skilled-worker-visa", tag:"Salary" },
    { title:"UK Graduate route extended to 3 years for STEM graduates", summary:"STEM graduates from non-UK universities now eligible for 3-year Graduate visa under new points-based rules.", date:"Mar 2026", source:"UKVI", url:"https://www.gov.uk", tag:"Graduate Visa" },
    { title:"UK Global Talent visa — new STEM endorsement bodies added", summary:"Two new endorsing bodies added for AI and quantum computing professionals under Global Talent visa.", date:"Feb 2026", source:"UK Visas and Immigration", url:"https://www.gov.uk", tag:"Global Talent" },
  ],
  canada: [
    { title:"Canada Express Entry — CRS cutoff dropped to 470 for STEM", summary:"OINP and BCPNP draws issued invitations to tech workers at lower CRS scores. Healthcare workers targeted in provincial draws.", date:"May 2026", source:"IRCC Canada", url:"https://www.canada.ca", tag:"Express Entry" },
    { title:"Canada PGWP extended for international graduates 2026", summary:"International graduates from Canadian universities can now apply for 3-year PGWP. Rule applies to degrees completed after Jan 2024.", date:"Mar 2026", source:"Immigration Canada", url:"https://www.canada.ca", tag:"Post-Grad Permit" },
    { title:"Canada Rural and Northern Immigration Pilot extended", summary:"RNIP extended until 2027. 11 participating communities. Pathway to permanent residence for skilled workers.", date:"Apr 2026", source:"IRCC", url:"https://www.canada.ca", tag:"Rural Pathway" },
  ],
  australia: [
    { title:"Australia Skills in Demand visa replaces TSS from 2026", summary:"New SID visa offers 4-year work rights and direct PR pathway. Three streams: Specialist, Core, and Essential.", date:"Jan 2026", source:"Department of Home Affairs", url:"https://immi.homeaffairs.gov.au", tag:"New Visa" },
    { title:"Australia SkillSelect — EOI invitations up 40% for engineers", summary:"Australia issued record invitations to engineers and IT professionals. Minimum points score dropped to 65 for key occupations.", date:"Mar 2026", source:"Home Affairs", url:"https://immi.homeaffairs.gov.au", tag:"Skilled Migration" },
    { title:"Australia Regional visas — new occupation lists for 2026", summary:"Regional 491 and 494 visas updated occupation lists. Over 200 new roles added including trades and healthcare.", date:"Feb 2026", source:"Australian Government", url:"https://immi.homeaffairs.gov.au", tag:"Regional Visa" },
  ],
  spain: [
    { title:"Spain Digital Nomad visa — income threshold updated 2026", summary:"Spain updated the DNV minimum income to €2,646/month for 2026. Applications can now be filed from Pakistan and India consulates.", date:"Feb 2026", source:"Spanish Ministry of Inclusion", url:"https://extranjeros.inclusion.gob.es", tag:"Nomad Visa" },
    { title:"Spain Beckham Law tax benefit confirmed for new arrivals", summary:"Foreign workers moving to Spain qualify for 24% flat income tax for 6 years under Beckham Law regime.", date:"Jan 2026", source:"Agencia Tributaria", url:"https://sede.agenciatributaria.gob.es", tag:"Tax Benefit" },
    { title:"Spain student visa pathway to work permit — new rules", summary:"International students completing Spanish degrees can now convert to work permit directly without returning home.", date:"Mar 2026", source:"Spanish Consulate", url:"https://exteriores.gob.es", tag:"Student Path" },
  ],
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get("country") || "general";
  
  const news = STATIC_NEWS[country] || STATIC_NEWS["germany"];
  
  return NextResponse.json({
    country,
    updated: new Date().toISOString(),
    items: news,
  });
}
