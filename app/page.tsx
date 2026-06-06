import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Sparkles,
} from "lucide-react";
import { CloudinaryImage } from "@/components/CloudinaryImage";
import { ContactCta } from "@/components/ContactCta";
import { ImageSlider } from "@/components/ImageSlider";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { featuredGallery } from "@/lib/gallery";
import {
  highlights,
  reviewLinks,
  services,
  serviceSlugs,
  site,
} from "@/lib/site";
import { FaFacebookF, FaYelp } from "react-icons/fa";
import { images } from "@/lib/images";
import { defaultDescription, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Carpet Cleaning in Upland, CA",
  description: defaultDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="page-section section-warm">
        <div className="section-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Royal Carpet Specialists</p>
            <h1 className="section-title-xl">
              Carpet cleaning from George and his local crew.
            </h1>
            <p className="section-description">
              Owner-operated carpet, tile, upholstery, odor treatment, repair,
              and fabric protection for homes, rentals, and small businesses in
              Upland and nearby communities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="button-primary">
                <Phone className="mr-2 size-4" /> Call {site.phone}
              </a>
              <Link href="/services" className="button-secondary">
                Explore Services
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {serviceSlugs.slice(0, 4).map((slug) => {
                const service = services[slug];
                const Icon = service.icon;

                return (
                  <Link
                    key={slug}
                    href={service.href}
                    className="group flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-sm transition hover:border-gold hover:text-brand"
                  >
                    <span className="shrink-0 rounded-xl bg-brand-soft p-2.5 text-brand">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-black">
                        {service.title}
                      </span>
                      <span className="mt-1 block text-xs font-semibold text-muted group-hover:text-brand">
                        {service.eyebrow}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hero-panel p-3">
            <CloudinaryImage
              publicId={images.home.hero}
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
                    Truck-mounted equipment for lived-in carpets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-warm">
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

      <section className="page-section section-paper">
        <div className="section-container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="section-eyebrow">Services</p>
              <h2 className="section-title">
                Cleaning for real homes, pets, stairs, spills, and traffic.
              </h2>
              <p className="section-description">
                Start with carpet cleaning, add upholstery or tile while George
                is there, or call about pet odor, repair, stretching, natural
                stone, and Scotchgard protection.
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

      <section className="page-section section-warm">
        <div className="section-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Why it works</p>
            <h2 className="section-title">
              Truck-mounted cleaning. Low-residue results.
            </h2>
            <p className="section-description">
              Royal Carpet Specialists uses a truck-mounted carpet cleaning
              system that helps remove stains, odors, and allergens while
              extracting soil and moisture more effectively than small portable
              machines.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Professional equipment for stronger extraction",
                "A practical clean for pets, spills, stairs, and traffic lanes",
                "Access to an outdoor hose spigot is needed for most truck-mounted jobs",
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
                publicId={images.home.truck}
                alt="Truck mounted carpet cleaning equipment"
                className="aspect-[4/5] w-full object-cover"
                gravity="south"
              />
            </div>
            <div className="image-frame">
              <CloudinaryImage
                publicId={images.home.upholstery}
                alt="Carpet cleaning stairs attachment"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-feature">
        <div className="section-container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="section-eyebrow">Before & After</p>
              <h2 className="section-title">See the difference clearly.</h2>
              <p className="section-description">
                Recent work from Royal Carpet Specialists, including carpets,
                stairs, upholstery, tile, and problem areas that needed extra
                attention.
              </p>
            </div>
            <Link href="/gallery" className="button-secondary shrink-0">
              See Gallery <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredGallery.map((item) => (
              <ImageSlider key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-paper">
        <div className="section-container">
          <div>
            <p className="section-eyebrow">Before scheduling</p>
            <h2 className="section-title">A few practical things to know first.</h2>
            <p className="section-description">
              Truck-mounted cleaning works best when George can park close to
              the work area and connect to an outdoor hose spigot. Call if your
              home layout, parking, or service area is unusual.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="card-padded">
              <Droplets className="size-7 text-brand" />
              <h3 className="mt-5 text-xl font-black">Water access</h3>
              <p className="mt-3 leading-7 text-muted">
                Most jobs need a working outdoor hose spigot for the
                truck-mounted cleaning system.
              </p>
            </div>
            <div className="card-padded">
              <MapPin className="size-7 text-brand" />
              <h3 className="mt-5 text-xl font-black">Nearby parking</h3>
              <p className="mt-3 leading-7 text-muted">
                A close parking spot helps the hoses reach safely from the truck
                to the rooms being cleaned.
              </p>
            </div>
            <div className="card-padded">
              <MessageCircle className="size-7 text-brand" />
              <h3 className="mt-5 text-xl font-black">Call to confirm</h3>
              <p className="mt-3 leading-7 text-muted">
                Larger jobs farther out may be possible. George can confirm
                service area, timing, and prep by phone.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/faq" className="button-secondary">
              Read FAQ
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section section-warm">
        <div className="section-container grid min-w-0 gap-8 lg:grid-cols-[0.8fr_minmax(0,1.2fr)] lg:items-center">
          <div className="min-w-0">
            <p className="section-eyebrow">What customers say</p>
            <h2 className="section-title">
              Check real reviews before you call.
            </h2>
            <p className="section-description">
              Royal Carpet Specialists has served local homes and businesses for
              decades. Read recent customer reviews on Yelp, see work photos on
              Facebook, or call George directly with questions about your job.
            </p>
          </div>
          <div className="grid min-w-0 max-w-full gap-4 md:grid-cols-2">
            <div className="min-w-0 max-w-full md:col-span-2">
              <TestimonialCarousel
                fallback={
                  <div className="grid min-w-0 gap-4 md:grid-cols-2">
                    {reviewLinks.map((link) => {
                      const Icon =
                        link.source === "Yelp" ? FaYelp : FaFacebookF;

                      return (
                        <a
                          key={link.source}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="card-padded group flex h-full flex-col"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="rounded-2xl bg-brand-soft p-3 text-brand">
                              <Icon className="size-7" />
                            </div>
                            <ExternalLink className="size-5 text-muted transition group-hover:translate-x-1 group-hover:text-brand" />
                          </div>
                          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-brand">
                            {link.source}
                          </p>
                          <h3 className="mt-2 text-2xl font-black">
                            {link.title}
                          </h3>
                          <p className="mt-4 grow leading-7 text-muted">
                            {link.text}
                          </p>
                          <div className="mt-6 flex items-center gap-1 text-gold">
                            {[0, 1, 2, 3, 4].map((star) => (
                              <Star key={star} className="size-4 fill-current" />
                            ))}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                }
              />
            </div>

            <div className="card-padded md:col-span-2">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-2xl bg-brand-soft p-3 text-brand">
                    <MessageCircle className="size-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">
                      Prefer to talk it through?
                    </h3>
                    <p className="mt-2 leading-7 text-muted">
                      Call George directly and describe the rooms, stains, pet
                      odor, furniture, parking, and water access.
                    </p>
                  </div>
                </div>
                <a href={site.phoneHref} className="button-primary shrink-0">
                  <Phone className="mr-2 size-4" />
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
