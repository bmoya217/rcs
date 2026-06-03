"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

type MobileNavLink = {
  href: string;
  label: string;
};

type MobileNavProps = {
  links: MobileNavLink[];
  phone: string;
  phoneHref: string;
};

export const MobileNav = ({ links, phone, phoneHref }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-brand-dark shadow-sm transition hover:border-gold hover:text-brand"
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full border-b border-line bg-background/95 px-5 py-4 shadow-xl backdrop-blur md:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-bold text-foreground transition hover:bg-brand-soft hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={phoneHref}
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-dark"
            >
              <Phone className="mr-2 size-4" />
              {phone}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};
