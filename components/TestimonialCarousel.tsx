"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

type Testimonial = {
  name: string;
  location?: string;
  quote: string;
  source?: string;
};

type TestimonialCarouselProps = {
  fallback?: React.ReactNode;
};

const testimonials: Testimonial[] = [
  {
    name: "Nicole S.",
    location: "Local customer",
    quote:
      "George cleaned our sectional and dining chairs, and I couldn't believe the difference. He took his time, explained what he was doing, and got stains out we thought were permanent.",
  },
  {
    name: "Corbin G.",
    location: "Local customer",
    quote:
      "George did an incredible job on our carpets. We had years of stains from kids and pets, and somehow he got everything looking fresh again. You can tell he really cares about doing the job right.",
  },
  {
    name: "Kyle G.",
    location: "Local customer",
    quote:
      "“I've recommended George to three different family members already. He's honest, hardworking, and the results always exceed expectations. The tile and grout in our kitchen honestly looked brand new after he finished.",
  },
  {
    name: "Eli C.",
    location: "Local customer",
    quote:
      "George is one of the few people I completely trust working in my home. He's professional, friendly, and takes a lot of pride in his work. That kind of service is hard to find nowadays.",
  },
];

export const TestimonialCarousel = ({
  fallback = null,
}: TestimonialCarouselProps) => {
  const reviews = testimonials;
  const intervalRef = useRef<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: reviews.length > 1,
  });

  const updateSelectedIndex = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const clearAutoAdvance = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }

    window.clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const startAutoAdvance = useCallback(() => {
    clearAutoAdvance();

    if (!emblaApi || reviews.length < 2) {
      return;
    }

    intervalRef.current = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 30000);
  }, [clearAutoAdvance, emblaApi, reviews.length]);

  const scrollToReview = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      startAutoAdvance();
    },
    [emblaApi, startAutoAdvance],
  );

  useEffect(() => {
    startAutoAdvance();

    return clearAutoAdvance;
  }, [clearAutoAdvance, startAutoAdvance]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.on("select", updateSelectedIndex);
    emblaApi.on("reInit", updateSelectedIndex);
    emblaApi.on("settle", startAutoAdvance);

    return () => {
      emblaApi.off("select", updateSelectedIndex);
      emblaApi.off("reInit", updateSelectedIndex);
      emblaApi.off("settle", startAutoAdvance);
    };
  }, [emblaApi, startAutoAdvance, updateSelectedIndex]);

  if (reviews.length === 0) {
    return fallback;
  }

  return (
    <div className="w-full min-w-0 max-w-full overflow-hidden">
      <div ref={emblaRef} className="w-full min-w-0 max-w-full overflow-hidden">
        <div className="flex w-full">
          {reviews.map((review) => (
            <div
              key={`${review.name}-${review.quote}`}
              className="min-w-0 max-w-full shrink-0 grow-0 basis-full p-px"
            >
              <figure className="flex min-h-64 w-full min-w-0 max-w-full flex-col justify-center overflow-hidden rounded-2xl border border-line bg-white p-4 sm:p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="rounded-xl bg-brand-soft p-2 text-brand sm:p-2.5">
                    <Quote className="size-4 sm:size-5" />
                  </div>
                  <div className="flex shrink-0 text-gold">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        className="size-3.5 fill-current sm:size-4"
                      />
                    ))}
                  </div>
                </div>

                <blockquote className="break-words text-base font-semibold leading-7 text-foreground [overflow-wrap:anywhere] sm:text-xl sm:leading-9">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-5 flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-muted sm:text-sm">
                  <span className="text-brand-dark">{review.name}</span>
                  {review.location && <span>{review.location}</span>}
                  {review.source && <span>{review.source}</span>}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {reviews.length > 1 && (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => scrollToReview(index)}
              className={
                index === selectedIndex
                  ? "h-2.5 w-7 rounded-full bg-brand transition"
                  : "size-2.5 rounded-full bg-line transition hover:bg-gold"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};
