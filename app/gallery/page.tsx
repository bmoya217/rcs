import { ContactCta } from "@/components/ContactCta";
import { GalleryPair } from "@/components/GalleryPair";
import { featuredGallery } from "@/lib/gallery";

export default function GalleryPage() {
  return (
    <>
      <section className="page-section bg-cream">
        <div className="section-container-narrow text-center">
          <p className="section-eyebrow">Before & After Gallery</p>
          <h1 className="section-title-xl">Real cleaning results, easy to update.</h1>
          <p className="section-description mx-auto">
            For the MVP, add your dad’s strongest examples to Cloudinary under /gallery/before-after and list the paired public IDs in lib/gallery.ts.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-container grid gap-6 lg:grid-cols-2">
          {featuredGallery.map((item) => (
            <GalleryPair key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="page-section bg-white">
        <div className="section-container">
          <div className="card-padded bg-cream">
            <p className="section-eyebrow">Upload convention</p>
            <h2 className="text-3xl font-black">Recommended Cloudinary folder</h2>
            <p className="mt-4 font-mono text-sm text-muted">/gallery/before-after</p>
            <p className="mt-4 leading-7 text-muted">
              Use paired names like living-room-traffic-lanes-before and living-room-traffic-lanes-after. That keeps the site simple until you decide whether to build a full admin upload workflow.
            </p>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
