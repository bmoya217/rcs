// components/ImageCarousel.tsx
"use client";

import { CloudinaryImage } from "@/components/CloudinaryImage";
import { CarouselImage } from "@/lib/cloudinary";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

type Props = {
  images: CarouselImage[];
};

export const ImageCarousel = ({ images }: Props) => {
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex">
        {images.map((image) => (
          <div
            key={image.publicId}
            className="min-w-[80%] shrink-0 sm:min-w-[45%] lg:min-w-[30%] ml-6"
          >
            <CloudinaryImage
              publicId={image.publicId}
              alt=""
              width={900}
              height={650}
              className="h-72 w-full rounded-3xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
