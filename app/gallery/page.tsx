import type { Metadata } from "next";
import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ImageSlider } from "@/components/ImageSlider";
import { getCarouselImages } from "@/lib/cloudinary";
import { featuredGallery } from "@/lib/gallery";
import { pageMetadata } from "@/lib/seo";
import { services, site } from "@/lib/site";
import { ArrowRight, Camera, CheckCircle2, Phone, Sparkles } from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "Cleaning Results Gallery",
  description:
    "See carpet, upholstery, tile, stairs, and problem-area cleaning results from Royal Carpet Specialists near Upland, CA.",
  path: "/gallery",
});

const GalleryPage = async () => {
  const images = await getCarouselImages("carousel");

  const galleryServices = [
    services["carpet-cleaning"],
    services["tile-cleaning"],
    services["upholstery-cleaning"],
  ];

  return (
    <>
      <section className="page-section section-warm">
        <div className="section-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Gallery</p>
            <h1 className="section-title-xl">
              Before, after, and recent work from local jobs.
            </h1>
            <p className="section-description">
              See examples of carpet, tile, upholstery, stairs, traffic lanes,
              and problem areas cleaned by Royal Carpet Specialists around
              Upland and nearby communities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="button-primary">
                <Phone className="mr-2 size-4" /> Call {site.phone}
              </a>
              <Link href="/services" className="button-secondary">
                View Services <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-padded sm:translate-y-8">
              <Camera className="size-7 text-brand" />
              <h2 className="mt-5 text-2xl font-black">Real job photos.</h2>
              <p className="mt-3 leading-7 text-muted">
                Look for the everyday problems that show up in lived-in homes:
                traffic lanes, stair edges, spots, grout lines, and upholstery.
              </p>
            </div>
            <div className="card-padded">
              <Sparkles className="size-7 text-brand" />
              <h2 className="mt-5 text-2xl font-black">Results you can compare.</h2>
              <p className="mt-3 leading-7 text-muted">
                Before-and-after examples make it easier to judge whether a
                cleaning, repair, or refresh is worth doing before replacement.
              </p>
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
                Compare problem areas side by side, from traffic lanes and tile
                grout to upholstery that needed a careful refresh.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredGallery.map((item) => (
              <ImageSlider key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {images.length > 0 ? (
        <section className="page-section section-warm">
          <div className="mb-10 px-5 sm:px-6 lg:px-8">
            <div className="section-container">
              <p className="section-eyebrow">Recent Work</p>
              <h2 className="section-title">More results from recent jobs.</h2>
              <p className="section-description">
                Browse additional carpets, tile, upholstery, stairs, and
                high-use areas cleaned for local homes and small businesses.
              </p>
            </div>
          </div>
          <ImageCarousel images={images} />
        </section>
      ) : (
        <section className="page-section section-warm">
          <div className="section-container">
            <div className="card-padded">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="section-eyebrow">Recent Work</p>
                  <h2 className="section-title">More results coming soon.</h2>
                  <p className="mt-5 leading-8 text-muted">
                    George regularly handles carpets, stairs, tile, upholstery,
                    and problem-area cleaning around Upland. Call if you want
                    to talk through a similar room, stain, odor, or surface.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    "Traffic lanes and worn walkways",
                    "Pet spots, spills, and odor concerns",
                    "Tile, grout, stairs, and upholstery",
                  ].map((item) => (
                    <p key={item} className="flex gap-3 font-semibold leading-7">
                      <CheckCircle2 className="mt-1 size-5 shrink-0 text-brand" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="page-section section-paper">
        <div className="section-container">
          <div>
            <p className="section-eyebrow">Common Results</p>
            <h2 className="section-title">What customers usually want to see first.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {galleryServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="card-padded group block"
                >
                  <Icon className="size-7 text-brand" />
                  <h3 className="mt-5 text-2xl font-black">{service.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{service.summary}</p>
                  <span className="mt-6 inline-flex items-center text-sm font-black text-brand">
                    View Service
                    <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
};

export default GalleryPage;
