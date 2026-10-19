import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: "daily" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/prices", priority: 0.9, changeFrequency: "daily" },
    { path: "/order", priority: 0.9, changeFrequency: "monthly" },
    { path: "/outlets", priority: 0.8, changeFrequency: "monthly" },
    { path: "/safety", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  ];
  return pages.map((p) => ({ url: `${site.url}${p.path}`, changeFrequency: p.changeFrequency, priority: p.priority }));
}
