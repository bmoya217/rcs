import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { serviceAreas, site } from "@/lib/site";
import { defaultDescription } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: defaultDescription,
  applicationName: site.name,
  openGraph: {
    title: site.name,
    description: defaultDescription,
    url: "/",
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    telephone: site.phoneInternational,
    email: site.email,
    description: defaultDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Upland",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    sameAs: [site.facebook, site.yelp],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
        <div className="site-shell">
          <Header />
          <main className="page-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
