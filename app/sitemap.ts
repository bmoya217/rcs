import type { MetadataRoute } from "next";
import { serviceSlugs, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/gallery", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
    ...serviceSlugs.map((slug) => ({
      path: `/services/${slug}`,
      priority: 0.8,
    })),
  ];

  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
