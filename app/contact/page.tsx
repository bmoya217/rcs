import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { CloudinaryImage } from "@/components/CloudinaryImage";
import { appointmentPrep, serviceAreas, site } from "@/lib/site";
import { FaFacebookF, FaYelp } from "react-icons/fa";
import { images } from "@/lib/images";

export default function ContactPage() {
  return (
    <>
      <section className="page-section bg-cream">
        <div className="section-container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Contact George Moya</p>
            <h1 className="section-title-xl">
              Request a carpet, tile, or upholstery cleaning estimate.
            </h1>
            <p className="section-description">
              Call George for the fastest response. Share what rooms or
              surfaces need cleaning, whether there are stains or pet odors, and
              your preferred scheduling window.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="button-primary">
                <Phone className="mr-2 size-4" /> {site.phone}
              </a>
              <a href={site.emailHref} className="button-secondary">
                <Mail className="mr-2 size-4" /> Email George
              </a>
            </div>
          </div>
          <div className="hero-panel p-3">
            <CloudinaryImage
              publicId={images.contact.van}
              alt="Royal Carpet Specialists service truck or owner photo"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container grid gap-6 lg:grid-cols-3">
          <div className="card-padded">
            <Phone className="size-7 text-brand" />
            <h2 className="mt-5 text-2xl font-black">Phone</h2>
            <a
              href={site.phoneHref}
              className="mt-3 block text-lg font-bold text-brand"
            >
              {site.phone}
            </a>
            <p className="mt-3 text-muted">
              Best for quick quotes and scheduling.
            </p>
          </div>

          <div className="card-padded">
            <MapPin className="size-7 text-brand" />
            <h2 className="mt-5 text-2xl font-black">Service base</h2>
            <p className="mt-3 font-bold">{site.address}</p>
            <p className="mt-3 text-muted">
              Serving Upland, nearby communities, and larger jobs farther out
              when scheduling allows.
            </p>
          </div>

          <div className="card-padded">
            <Mail className="size-7 text-brand" />
            <h2 className="mt-5 text-2xl font-black">Email</h2>
            <a
              href={site.emailHref}
              className="mt-3 block font-bold text-brand"
            >
              {site.email}
            </a>
            <p className="mt-3 text-muted">
              Great for sending photos before the appointment.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section bg-white">
        <div className="section-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-eyebrow">Before your appointment</p>
            <h2 className="section-title">Water access, parking, and prep.</h2>
            <p className="section-description">
              Royal Carpet Specialists uses truck-mounted cleaning equipment for
              most carpet jobs. Please plan for a working outdoor hose spigot
              and a parking spot close enough for the hoses to reach.
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

      <section className="page-section">
        <div className="section-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-eyebrow">Service area</p>
            <h2 className="section-title">Based in Upland, California.</h2>
            <p className="section-description">
              These are common nearby areas. If you are outside this list,
              especially for a larger job, call to confirm availability.
            </p>
          </div>
          <div className="card-padded">
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
            <p className="section-eyebrow">Online profiles</p>
            <h2 className="section-title">Reviews, photos, and updates.</h2>
            <p className="section-description">
              Visit Royal Carpet Specialists on Facebook or Yelp to see recent
              work, photos, and customer reviews.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              className="card-padded"
            >
              <FaFacebookF className="size-7 text-brand" />
              <h3 className="mt-5 text-2xl font-black">Facebook</h3>
              <p className="mt-3 text-muted">Updates and business profile.</p>
            </a>
            <a
              href={site.yelp}
              target="_blank"
              rel="noreferrer"
              className="card-padded"
            >
              <FaYelp className="size-7 text-brand" />
              <h3 className="mt-5 text-2xl font-black">Yelp</h3>
              <p className="mt-3 text-muted">
                Customer reviews and local listing.
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
