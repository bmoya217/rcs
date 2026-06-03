import Link from "next/link";
import { Phone } from "lucide-react";
import { MobileNav } from "@/components/MobileNav";
import { navLinks, site } from "@/lib/site";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group">
          <p className="text-lg font-black tracking-tight text-brand-dark sm:text-xl">
            Royal Carpet Specialists
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Upland, CA
          </p>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="button-primary hidden sm:inline-flex"
        >
          <Phone className="mr-2 size-4" />
          {site.phone}
        </a>

        <MobileNav
          links={navLinks}
          phone={site.phone}
          phoneHref={site.phoneHref}
        />
      </div>
    </header>
  );
};
