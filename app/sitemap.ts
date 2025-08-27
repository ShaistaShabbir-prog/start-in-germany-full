import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://start-in-germany-full.vercel.app";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/work`, lastModified: new Date() },
    { url: `${base}/study`, lastModified: new Date() },
    { url: `${base}/visa`, lastModified: new Date() },
    { url: `${base}/living`, lastModified: new Date() },
    { url: `${base}/finances`, lastModified: new Date() },
    { url: `${base}/service`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/imprint`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    { url: `${base}/affiliate-disclosure`, lastModified: new Date() }
  ];
}
