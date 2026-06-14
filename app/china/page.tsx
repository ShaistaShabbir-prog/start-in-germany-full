import type { Metadata } from "next";
import CountryDestinationPage, { type CountryDestinationData } from "@/components/CountryDestinationPage";

export const metadata: Metadata = {
  title: "China Visa Guide | Work, Study and Business",
  description: "Official-link based China guide covering Z work visas, X1/X2 student visas, business travel and family routes.",
};

const data: CountryDestinationData = {
  country: "China",
  flag: "🇨🇳",
  accent: "#DC2626",
  accentDark: "#991B1B",
  eyebrow: "China visa guide",
  title: "Navigate work, study and business routes to China",
  intro: "Understand the usual sequence from sponsor or university documents to the correct visa application and post-arrival formalities, with official visa-centre and immigration links.",
  heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1800&q=88&auto=format&fit=crop",
  pathways: [
    { icon: "💼", title: "Z Visa for work", badge: "Work route", description: "The standard entry visa category for eligible foreign nationals intending to work in China, normally supported by an employer and the required work authorisation documents.", points: ["A qualifying employer or sponsor is required", "Obtain the official work-related approval documents before applying", "Apply through the Chinese mission or authorised visa centre serving your location", "Complete required work and residence formalities after arrival"] },
    { icon: "🎓", title: "X1 and X2 student visas", badge: "Study route", description: "For study at an approved Chinese institution. The appropriate category depends on the programme and intended length of study.", points: ["Secure formal admission from the institution", "Use the admission and study-authorisation documents requested for your category", "Follow medical or residence steps when required", "Observe the work restrictions attached to student status"] },
    { icon: "🤝", title: "M Visa for business", badge: "Commercial visits", description: "For eligible commercial and trade activities such as meetings, fairs, supplier visits, or negotiations. It does not replace a work visa.", points: ["Invitation and trip-purpose evidence may be required", "Your activities must remain within the approved visit purpose", "Local employment is not permitted on a business visa", "Check the visa centre serving your country for the current checklist"] },
    { icon: "👨‍👩‍👧", title: "Family and private affairs", badge: "Family routes", description: "Family-related categories may apply to relatives of Chinese citizens, permanent residents, students, or foreign workers, depending on relationship and intended stay.", points: ["Choose the category matching the sponsor's status", "Prepare accepted relationship evidence", "Longer stays may require post-arrival residence formalities", "Confirm the exact Q or S category with the official visa centre"] },
  ],
  steps: ["Confirm the visa category that matches your real purpose of travel.", "Secure the employer, university, business host, or family sponsor documents.", "Locate the authorised Chinese Visa Application Service Center or mission for your application location.", "Complete the online form and appointment or submission process required by that centre.", "Submit biometrics and supporting documents when requested.", "After entry, complete registration and any required work, study, or residence permit formalities."],
  cities: [{ name: "Beijing", note: "Government, research, education and major headquarters." }, { name: "Shanghai", note: "Finance, trade, technology and international business." }, { name: "Shenzhen", note: "Technology, hardware, manufacturing and startups." }, { name: "Guangzhou", note: "Trade, logistics, manufacturing and major fairs." }],
  officialLinks: [
    { label: "Chinese Visa Application Service Center", href: "https://www.visaforchina.cn/globle/", note: "Choose your application country and city for the current process and checklist." },
    { label: "China National Immigration Administration", href: "https://en.nia.gov.cn/", note: "Official immigration, entry-exit and foreign-national service information." },
    { label: "Visa Center for Pakistan applicants", href: "https://www.visaforchina.cn/ISB3_EN/", note: "Official Islamabad centre with application and appointment access." },
  ],
};

export default function ChinaPage() {
  return <CountryDestinationPage data={data} />;
}
