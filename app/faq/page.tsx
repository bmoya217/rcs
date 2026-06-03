import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, HelpCircle, MapPin, Phone } from "lucide-react";
import { appointmentPrep, faqs, serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions about scheduling, water access, drying time, furniture, pet odor, stairs, upholstery, and service areas.",
};

export default function FaqPage() {
  return (
    <>
      <section className="page-section bg-cream">
        <div className="section-container-narrow text-center">
          <p className="section-eyebrow">FAQ</p>
          <h1 className="section-title-xl">Questions before you schedule.</h1>
          <p className="section-description mx-auto">
            A quick call is still the best way to talk through rooms, stains,
            odors, furniture, parking, water access, and whether your address is
            in range.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={site.phoneHref} className="button-primary">
              <Phone className="mr-2 size-4" />
              Call {site.phone}
            </a>
            <Link href="/contact" className="button-secondary">
              Contact Page
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-eyebrow">Before arrival</p>
            <h2 className="section-title">How to prepare.</h2>
            <p className="section-description">
              You do not need to have everything perfect before George arrives.
              These items simply help the job go smoother.
            </p>
          </div>
          <div className="space-y-4">
            {appointmentPrep.map((item) => (
              <div key={item} className="card flex gap-4 p-5">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-brand" />
                <p className="font-semibold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-white">
        <div className="section-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-eyebrow">Common questions</p>
            <h2 className="section-title">Practical answers.</h2>
            <p className="section-description">
              Carpet cleaning, drying time, water access, pet odor, stairs,
              upholstery, and local scheduling.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-padded">
                <div className="flex gap-4">
                  <HelpCircle className="mt-1 size-5 shrink-0 text-brand" />
                  <div>
                    <h3 className="text-xl font-black">{faq.question}</h3>
                    <p className="mt-3 leading-7 text-muted">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-eyebrow">Service area</p>
            <h2 className="section-title">Based in Upland.</h2>
            <p className="section-description">
              These are common nearby areas. If you are outside this list,
              especially for a larger job, call to confirm availability.
            </p>
          </div>
          <div className="card-padded">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-brand-soft p-3 text-brand">
                <MapPin className="size-6" />
              </div>
              <h3 className="text-2xl font-black">Nearby cities</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="badge bg-white">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
