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
    name: "Rose W.",
    location: "Local customer",
    quote:
      "Placeholder testimonial for carpet and upholstery work. Replace this with a short customer-approved quote before launch.",
    source: "Yelp",
  },
  {
    name: "Carl C.",
    location: "Local customer",
    quote:
      "Placeholder testimonial about careful service, clean carpets, and working directly with George.",
    source: "Yelp",
  },
  {
    name: "Thomas B.",
    location: "Local customer",
    quote:
      "Placeholder testimonial for pet spots or odor treatment. Keep this short so the card stays clean on mobile.",
    source: "Yelp",
  },
  {
    name: "Kevin S.",
    location: "Local customer",
    quote:
      "Placeholder testimonial for carpet and tile cleaning. Replace with approved wording from your dad.",
    source: "Yelp",
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
                      <Star key={star} className="size-3.5 fill-current sm:size-4" />
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
