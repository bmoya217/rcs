import type { Metadata } from "next";
import { services, site, type ServiceSlug } from "@/lib/site";

export const defaultDescription =
  "Owner-operated carpet, tile, and upholstery cleaning serving Upland, CA and surrounding communities.";

export const pageMetadata = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata => ({
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: path,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
});

export const serviceMetadata = (slug: ServiceSlug): Metadata => {
  const service = services[slug];

  return pageMetadata({
    title: `${service.title} in Upland, CA`,
    description: service.summary,
    path: service.href,
  });
};
