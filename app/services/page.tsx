import type { Metadata } from "next";
import { ContactCta } from "@/components/ContactCta";
import { ServiceCard } from "@/components/ServiceCard";
import { services, serviceSlugs } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cleaning Services",
  description:
    "Explore carpet, tile, upholstery, odor, repair, natural stone, fire restoration, and Scotchgard services near Upland, CA.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="page-section bg-cream">
        <div className="section-container-narrow text-center">
          <p className="section-eyebrow">Our Services</p>
          <h1 className="section-title-xl">
            Carpet, tile, upholstery, odor, and repair work.
          </h1>
          <p className="section-description mx-auto">
            Call George to talk through what needs cleaning, where the problem
            spots are, and what kind of result is realistic for your home,
            rental, office, or small business.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceSlugs.map((slug) => (
            <ServiceCard key={slug} service={services[slug]} />
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
