import { ContactCta } from "@/components/ContactCta";
import { ImageCarousel } from "@/components/ImageCarousel";
import { getCarouselImages } from "@/lib/cloudinary";

const GalleryPage = async () => {
  const images = await getCarouselImages("carousel");
  return (
    <>
      <section className="page-section bg-cream">
        <div className="section-container-narrow text-center">
          <p className="section-eyebrow">Gallery</p>
          <h1 className="section-title-xl">
            Real cleaning results, easy to update.
          </h1>
        </div>
      </section>

      <section className="page-section">
        <div>
          <ImageCarousel images={images} />
        </div>
      </section>

      <ContactCta />
    </>
  );
};

export default GalleryPage;
