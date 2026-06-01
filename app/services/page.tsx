import { ContactCta } from "@/components/ContactCta";
import { ServiceCard } from "@/components/ServiceCard";
import { services, serviceSlugs } from "@/lib/site";

export default function ServicesPage() {
  return (
    <>
      <section className="page-section bg-cream">
        <div className="section-container-narrow text-center">
          <p className="section-eyebrow">Our Services</p>
          <h1 className="section-title-xl">One call for cleaner carpets, floors, furniture, and more.</h1>
          <p className="section-description mx-auto">
            Choose a service below to see what it helps with, what images to collect, and how the page should eventually be supported by Cloudinary before/after examples.
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
