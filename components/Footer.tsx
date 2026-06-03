import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, services, serviceSlugs, site } from "@/lib/site";
import { FaFacebookF, FaYelp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark px-5 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-black">{site.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
            Owner-operated carpet, tile, and upholstery cleaning serving Upland
            and nearby Inland Empire communities.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/80">
            <p className="flex gap-3">
              <Phone className="size-4" /> {site.phone}
            </p>
            <p className="flex gap-3">
              <Mail className="size-4" /> {site.email}
            </p>
            <p className="flex gap-3">
              <MapPin className="size-4" /> {site.address}
            </p>
          </div>
        </div>

        <div>
          <p className="font-bold">Explore</p>
          <div className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold">Services</p>
          <div className="mt-4 flex flex-col gap-3">
            {serviceSlugs.slice(0, 5).map((slug) => {
              const service = services[slug];
              return (
                <Link key={slug} href={service.href} className="footer-link">
                  {service.title}
                </Link>
              );
            })}
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href={site.facebook}
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="size-5" />
            </a>
            <a
              href={site.yelp}
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaYelp className="size-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/55">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
};
