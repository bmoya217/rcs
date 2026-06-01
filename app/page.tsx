import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { CloudinaryImage } from "@/components/CloudinaryImage";
import { ContactCta } from "@/components/ContactCta";
import { GalleryPair } from "@/components/GalleryPair";
import { ServiceCard } from "@/components/ServiceCard";
import { featuredGallery } from "@/lib/gallery";
import { highlights, services, serviceSlugs, site } from "@/lib/site";
import { FaFacebookF, FaYelp } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <section className="page-section bg-cream">
        <div className="section-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Royal Carpet Specialists</p>
            <h1 className="section-title-xl">
              Professional carpet cleaning with a family-owned touch.
            </h1>
            <p className="section-description">
              Carpet, tile, upholstery, odor treatment, repairs, natural stone,
              and fabric protection for homes and small businesses Upland and
              surrounding areas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="button-primary">
                <Phone className="mr-2 size-4" /> Call {site.phone}
              </a>
              <Link href="/services" className="button-secondary">
                Explore Services
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="card p-4">
                <p className="text-3xl font-black text-brand">30+</p>
                <p className="mt-1 text-sm font-semibold text-muted">
                  Years cleaning
                </p>
              </div>
              <div className="card p-4">
                <p className="text-3xl font-black text-brand">8</p>
                <p className="mt-1 text-sm font-semibold text-muted">
                  Core services
                </p>
              </div>
              <div className="card p-4">
                <p className="text-3xl font-black text-brand">Local</p>
                <p className="mt-1 text-sm font-semibold text-muted">
                  Upland based
                </p>
              </div>
            </div>
          </div>

          <div className="hero-panel p-3">
            <CloudinaryImage
              publicId="home/hero-professional-carpet-cleaning-living-room"
              alt="Freshly cleaned living room carpet"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/90 p-5 shadow-lg backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-brand p-3 text-white">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <p className="font-black">Brushless rotary steam cleaning</p>
                  <p className="text-sm text-muted">
                    Designed to restore color and resiliency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container">
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div key={highlight.title} className="card-padded">
                  <div className="mb-5 inline-flex rounded-2xl bg-brand-soft p-3 text-brand">
                    <Icon className="size-6" />
                  </div>
                  <h2 className="text-xl font-black">{highlight.title}</h2>
                  <p className="mt-3 leading-7 text-muted">{highlight.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section bg-white">
        <div className="section-container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="section-eyebrow">Services</p>
              <h2 className="section-title">
                Cleaning for carpets, tile, upholstery, and more.
              </h2>
              <p className="section-description">
                Start with carpet cleaning, add upholstery or tile while the
                truck is there, or call about specialty services like odor
                treatment, repair, stretching, and Scotchgard protection.
              </p>
            </div>
            <Link href="/services" className="button-secondary shrink-0">
              View All Services
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceSlugs.slice(0, 4).map((slug) => (
              <ServiceCard key={slug} service={services[slug]} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Why it works</p>
            <h2 className="section-title">
              Truck-mounted cleaning. Low-residue results.
            </h2>
            <p className="section-description">
              Royal Carpet Specialists uses a truck-mounted carpet cleaning
              system that helps remove stains, odors, and allergens while
              leaving little to no cleaning solution behind.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Professional equipment for stronger extraction",
                "A practical clean for real homes, pets, spills, and traffic lanes",
                "Options for carpet, tile, furniture, odors, and protection",
              ].map((item) => (
                <p key={item} className="flex gap-3 font-semibold leading-7">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-brand" />{" "}
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="image-frame sm:translate-y-8">
              <CloudinaryImage
                publicId="home/truck-mounted-cleaning-equipment"
                alt="Truck mounted carpet cleaning equipment"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="image-frame">
              <CloudinaryImage
                publicId="home/carpet-cleaning-stairs-attachment"
                alt="Carpet cleaning stairs attachment"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-cream">
        <div className="section-container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="section-eyebrow">Before & After</p>
              <h2 className="section-title">Show the difference clearly.</h2>
              <p className="section-description">
                Upload finished jobs to Cloudinary and feature the strongest
                before/after examples here and on the gallery page.
              </p>
            </div>
            <Link href="/gallery" className="button-secondary shrink-0">
              See Gallery <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredGallery.map((item) => (
              <GalleryPair key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-white">
        <div className="section-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Reviews & social proof</p>
            <h2 className="section-title">
              A small local business people can call directly.
            </h2>
            <p className="section-description">
              Keep the website simple: phone-first contact, clear services,
              before-and-after photos, and links to active review/social
              profiles.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={site.yelp}
              target="_blank"
              rel="noreferrer"
              className="card-padded group"
            >
              <FaYelp className="size-7 text-brand" />
              <h3 className="mt-5 text-2xl font-black">Yelp</h3>
              <p className="mt-3 text-muted">
                View profile, photos, and customer reviews.
              </p>
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              className="card-padded group"
            >
              <FaFacebookF className="size-7 text-brand" />
              <h3 className="mt-5 text-2xl font-black">Facebook</h3>
              <p className="mt-3 text-muted">
                Follow updates and recent work from Royal Carpet Specialists.
              </p>
            </a>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
