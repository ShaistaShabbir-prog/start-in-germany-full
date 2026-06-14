import type { Metadata } from "next";
import CountryDestinationPage, { type CountryDestinationData } from "@/components/CountryDestinationPage";

export const metadata: Metadata = {
  title: "Malaysia Visa Guide | Work, Study and Family",
  description: "Official-link based Malaysia guide covering Employment Pass, Professional Visit Pass, Student Pass and family routes.",
};

const data: CountryDestinationData = {
  country: "Malaysia",
  flag: "🇲🇾",
  accent: "#DC2626",
  accentDark: "#991B1B",
  eyebrow: "Malaysia visa guide",
  title: "Work, study and build your next chapter in Malaysia",
  intro: "A practical guide to Malaysia's employer-sponsored work routes, international student process, professional visits, and family options, with direct links to official Malaysian services.",
  heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1800&q=88&auto=format&fit=crop",
  pathways: [
    { icon: "💼", title: "Employment Pass", badge: "Employer sponsored", description: "For expatriates taking employment with a Malaysian organisation. The employer applies through its ESD account after the relevant position approval.", points: ["Tied to the company named on the pass", "Duration follows the approved contract and authority decision", "A new application is needed when changing company", "Family pass eligibility depends on the approved category and current rules"] },
    { icon: "🧑‍💻", title: "Professional Visit Pass", badge: "Temporary assignment", description: "For eligible foreign professionals providing services or training in Malaysia for a limited assignment while remaining employed by an overseas organisation.", points: ["Malaysian sponsor or host is normally involved", "Purpose and duration must match the approved assignment", "Not a substitute for ordinary local employment", "Confirm the exact category with ESD before travel"] },
    { icon: "🎓", title: "Student Pass", badge: "International students", description: "For international students accepted by an approved Malaysian institution. Applications and visa-related steps are supported through Education Malaysia Global Services.", points: ["Secure an offer from an eligible institution", "Use the official EMGS student visa channel", "Complete medical and arrival requirements when applicable", "Keep your passport and student pass valid throughout study"] },
    { icon: "👨‍👩‍👧", title: "Dependant and family passes", badge: "Eligible families", description: "Certain Employment Pass holders may apply for dependant or long-term social visit passes for qualifying family members.", points: ["Eligibility depends on the principal pass and current salary/category rules", "Separate documents are required for each family member", "A dependant pass does not automatically grant work rights", "Verify family definitions and documents on ESD"] },
  ],
  steps: ["Choose the correct work, study, visit, or family route.", "Secure the required employer, institution, or Malaysian sponsor.", "Prepare passport, qualifications, relationship records, and route-specific evidence.", "Submit through the official ESD, EMGS, immigration, or mission channel.", "Wait for approval before making non-refundable travel commitments.", "After arrival, complete any endorsement, medical, registration, or pass collection steps."],
  cities: [{ name: "Kuala Lumpur", note: "Corporate, finance, technology and university hub." }, { name: "Cyberjaya", note: "Technology companies, shared services and digital roles." }, { name: "Penang", note: "Electronics, manufacturing, healthcare and education." }, { name: "Johor Bahru", note: "Industry, logistics and Singapore-linked business." }],
  officialLinks: [
    { label: "Malaysia Expatriate Services Division", href: "https://esd.imi.gov.my/portal/expatriates/myxpats/key-services/employment-pass/", note: "Official Employment Pass overview and employer application route." },
    { label: "Education Malaysia Global Services", href: "https://educationmalaysia.gov.my/", note: "Official study planning, institutions, arrival information and student visa links." },
    { label: "Malaysia Immigration Department", href: "https://www.imi.gov.my/", note: "Immigration notices, passes, entry requirements and official updates." },
  ],
};

export default function MalaysiaPage() {
  return <CountryDestinationPage data={data} />;
}
