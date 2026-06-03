import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { CloudinaryImage } from "@/components/CloudinaryImage";
import { ContactCta } from "@/components/ContactCta";
import { ImageSlider } from "@/components/ImageSlider";
import { ServiceCard } from "@/components/ServiceCard";
import { featuredGallery } from "@/lib/gallery";
import {
  appointmentPrep,
  faqs,
  highlights,
  serviceAreas,
  services,
  serviceSlugs,
  site,
} from "@/lib/site";
import { FaFacebookF, FaYelp } from "react-icons/fa";
import { images } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <section className="page-section bg-cream">
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

      <section className="page-section bg-cream">
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

      <section className="page-section bg-white">
        <div className="section-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-eyebrow">Before we arrive</p>
            <h2 className="section-title">A little prep helps the job go smoothly.</h2>
            <p className="section-description">
              George uses truck-mounted cleaning equipment for most carpet jobs.
              Please plan for water access, parking, and a clear path from the
              truck to the areas being cleaned.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {appointmentPrep.map((item, index) => (
              <div key={item} className="card flex gap-4 p-5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-black text-white">
                  {index + 1}
                </div>
                <p className="font-semibold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-eyebrow">Service area</p>
            <h2 className="section-title">Based in Upland. Call if you are nearby.</h2>
            <p className="section-description">
              Royal Carpet Specialists regularly works around Upland and nearby
              foothill and Inland Empire communities. Larger jobs farther out
              may be possible, so it is always worth calling to confirm.
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

      <section className="page-section bg-white">
        <div className="section-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-eyebrow">Questions</p>
            <h2 className="section-title">What to know before scheduling.</h2>
            <p className="section-description">
              A quick call is still the best way to talk through rooms, stains,
              pet odor, furniture, parking, and water access.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-padded">
                <div className="flex gap-4">
                  <Droplets className="mt-1 size-5 shrink-0 text-brand" />
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
        <div className="section-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Reviews & profiles</p>
            <h2 className="section-title">
              A small local business people can call directly.
            </h2>
            <p className="section-description">
              Check active profiles for reviews, photos, and recent updates from
              Royal Carpet Specialists.
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
