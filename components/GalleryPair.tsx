import { CloudinaryImage } from "@/components/CloudinaryImage";
import type { GalleryItem } from "@/lib/gallery";
import { BeforeAfterSlider } from "./BeforeAndAfterSlider";
import { after } from "node:test";

type GalleryPairProps = {
  item: GalleryItem;
};

export const GalleryPair = ({ item }: GalleryPairProps) => {
  return (
    <article className="card-padded">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="badge">{item.service}</p>
          <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex flex-row justify-evenly">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-muted">
            Before
          </p>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-muted">
            After
          </p>
        </div>
        <div className="image-frame">
          <BeforeAfterSlider
            before={
              <CloudinaryImage
                publicId={item.beforePublicId}
                alt={`${item.title} before`}
                className="aspect-[4/3] w-full object-cover"
              />
            }
            after={
              <CloudinaryImage
                publicId={item.afterPublicId}
                alt={`${item.title} after`}
                className="aspect-[4/3] w-full object-cover"
              />
            }
          />
        </div>
      </div>
    </article>
  );
};
