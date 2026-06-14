import { MetadataRoute } from "next";

const BASE = "https://start-in-germany-full.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/",                priority: 1.0,  freq: "weekly"  },
    { url: "/visa",            priority: 0.95, freq: "monthly" },
    { url: "/scholarships",    priority: 0.95, freq: "monthly" },
    { url: "/work",            priority: 0.9,  freq: "monthly" },
    { url: "/study",           priority: 0.9,  freq: "monthly" },
    { url: "/finances",        priority: 0.85, freq: "monthly" },
    { url: "/consultancy",     priority: 0.85, freq: "monthly" },
    { url: "/appointment",     priority: 0.8,  freq: "monthly" },
    { url: "/germany",         priority: 0.85, freq: "monthly" },
    { url: "/uk",              priority: 0.8,  freq: "monthly" },
    { url: "/canada",          priority: 0.8,  freq: "monthly" },
    { url: "/australia",       priority: 0.8,  freq: "monthly" },
    { url: "/italy",           priority: 0.75, freq: "monthly" },
    { url: "/sweden",          priority: 0.75, freq: "monthly" },
    { url: "/spain",           priority: 0.75, freq: "monthly" },
    { url: "/malaysia",        priority: 0.75, freq: "monthly" },
    { url: "/china",           priority: 0.75, freq: "monthly" },
    { url: "/switzerland",     priority: 0.75, freq: "monthly" },
    { url: "/netherlands",     priority: 0.75, freq: "monthly" },
    { url: "/norway",          priority: 0.7,  freq: "monthly" },
    { url: "/austria",         priority: 0.7,  freq: "monthly" },
    { url: "/france",          priority: 0.7,  freq: "monthly" },
    { url: "/usa",             priority: 0.75, freq: "monthly" },
    { url: "/italy",           priority: 0.8,  freq: "monthly" },
    { url: "/malaysia",        priority: 0.75, freq: "monthly" },
    { url: "/china",           priority: 0.75, freq: "monthly" },
    { url: "/blog",            priority: 0.7,  freq: "weekly"  },
    { url: "/privacy-policy",        priority: 0.3,  freq: "yearly"  },
    { url: "/affiliate-disclosure",  priority: 0.3,  freq: "yearly"  },
  ] as const;

  return pages.map(({ url, priority, freq }) => ({
    url: `${BASE}${url}`,
    lastModified: new Date("2026-06-14"),
    changeFrequency: freq as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority,
  }));
}
