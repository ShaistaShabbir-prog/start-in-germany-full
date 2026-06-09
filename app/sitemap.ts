import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://start-in-germany-full.vercel.app"; // change later if you add a custom domain

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
    { url: `${base}/affiliate-disclosure`, lastModified: new Date() },
    { url: `${base}/italy`, lastModified: new Date() },
    { url: `${base}/sweden`, lastModified: new Date() },
    { url: `${base}/uk`, lastModified: new Date() },
    { url: `${base}/canada`, lastModified: new Date() },
    { url: `${base}/australia`, lastModified: new Date() },
    { url: `${base}/spain`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/appointment`, lastModified: new Date() },
    { url: `${base}/consultancy`, lastModified: new Date() },
  ];
}
