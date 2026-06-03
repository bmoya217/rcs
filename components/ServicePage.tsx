import Link from "next/link";
import { CheckCircle2, Droplets, MapPin } from "lucide-react";
import { CloudinaryImage } from "@/components/CloudinaryImage";
import { ContactCta } from "@/components/ContactCta";
import { appointmentPrep, serviceAreas } from "@/lib/site";
import type { Service } from "@/lib/site";

export const ServicePage = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (
    <>
      <section className="page-section bg-cream">
        <div className="section-container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="section-eyebrow">{service.eyebrow}</p>
            <h1 className="section-title-xl">{service.title}</h1>
            <p className="section-description">{service.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Request an Estimate
              </Link>
              <Link href="/gallery" className="button-secondary">
                View Before & After
              </Link>
            </div>
          </div>

          <div className="hero-panel p-3">
            <CloudinaryImage
              publicId={service.imagePublicId}
              alt={`${service.title} service photo`}
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container grid gap-8 lg:grid-cols-3">
          <div className="card-padded lg:col-span-1">
            <div className="mb-6 inline-flex rounded-2xl bg-brand-soft p-4 text-brand">
              <Icon className="size-8" />
            </div>
            <h2 className="text-3xl font-black">
              What this service helps with
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Every job is different, but this is usually a good fit for:
            </p>
          </div>

          <div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">
            {service.bullets.map((bullet) => (
              <div key={bullet} className="card flex gap-4 p-5">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-brand" />
                <p className="font-semibold leading-7">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-white">
        <div className="section-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-eyebrow">Process</p>
            <h2 className="section-title">Simple, careful, and practical.</h2>
            <p className="section-description">
              George will talk through the areas, explain what is realistic, do
              the work cleanly, and keep the job as straightforward as possible.
            </p>
          </div>

          <div className="space-y-4">
            {service.process.map((step, index) => (
              <div key={step} className="card-padded flex gap-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-black text-white">
                  {index + 1}
                </div>
                <p className="pt-2 text-lg font-semibold leading-8">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-eyebrow">Before we arrive</p>
            <h2 className="section-title">Water access and a clear path help.</h2>
            <p className="section-description">
              For most truck-mounted cleaning jobs, please plan for a working
              outdoor hose spigot, nearby parking, and a clear path from the
              truck to the areas being cleaned.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {appointmentPrep.slice(0, 4).map((item) => (
              <div key={item} className="card flex gap-4 p-5">
                <Droplets className="mt-1 size-5 shrink-0 text-brand" />
                <p className="font-semibold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-white">
        <div className="section-container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Service area</p>
            <h2 className="section-title">Based in Upland and nearby.</h2>
            <p className="section-description">
              Larger jobs farther out may be possible. Call George to confirm
              availability for your address.
            </p>
          </div>
          <div className="card-padded">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-brand-soft p-3 text-brand">
                <MapPin className="size-6" />
              </div>
              <h3 className="text-2xl font-black">Common nearby areas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.slice(0, 12).map((area) => (
                <span key={area} className="badge bg-white">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
};
