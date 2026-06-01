import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export const ContactCta = () => {
  return (
    <section className="page-section">
      <div className="section-container">
        <div className="overflow-hidden rounded-[2rem] bg-brand-dark p-8 text-white shadow-xl sm:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-gold">Ready for cleaner floors?</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Call George for a free estimate.</h2>
              <p className="mt-4 max-w-2xl text-white/75">
                Tell us what rooms or surfaces need attention, what stains or odors you are dealing with, and when you would like the work done.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={site.phoneHref} className="button-primary bg-white text-brand-dark hover:bg-cream">
                <Phone className="mr-2 size-4" /> {site.phone}
              </a>
              <Link href="/contact" className="button-secondary border-white/20 bg-white/10 text-white hover:text-white">
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
