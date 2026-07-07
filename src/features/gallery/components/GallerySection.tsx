"use client";

import React, { useCallback, useState } from "react";
import SectionHeader from "@/components/section/SectionHeader";
import { galleryTimelineData } from "@/utils/gallery";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

// =========================
// TYPES & INTERFACES
// =========================
interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description?: string;
  images: string[];
}

interface TimelineData {
  year: string;
  events: TimelineEvent[];
}

// =========================
// EVENT CARD COMPONENT
// =========================
const EventCard = ({ event }: { event: TimelineEvent }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="bg-white border border-primary/40 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group/card relative">
      <div className="mb-4">
        {/* Title and Date Row */}
        <div className="flex items-center justify-between gap-4">
          <h4 className="text-lg md:text-xl font-bold text-slate-800">
            {event.title}
          </h4>
          <span className="inline-block text-xs font-semibold text-primary bg-primary/8 px-3 py-1 rounded-full whitespace-nowrap">
            {event.date}
          </span>
        </div>

        {/* Description */}
        {event.description && (
          <p className="text-slate-600 mt-2 text-sm">{event.description}</p>
        )}
      </div>

      {/* Carousel Section */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3">
            {event.images.map((src, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-0.375rem)] lg:flex-[0_0_calc(33.333%-0.5rem)] min-w-0 relative h-56 sm:h-58 rounded-lg overflow-hidden bg-slate-100 group/img"
              >
                <Image
                  src={src}
                  alt={`${event.title} - highlight ${index + 1}`}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-primary/70 backdrop-blur-sm text-slate-800 rounded-full shadow-md border border-slate-100 opacity-0 group-hover/card:opacity-100 transition-all duration-300 hover:bg-primary hover:scale-105 z-10"
        >
          <ArrowLeft className="size-4 text-white" />
        </button>

        <button
          onClick={scrollNext}
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-primary/70 backdrop-blur-sm text-slate-800 rounded-full shadow-md border border-slate-100 opacity-0 group-hover/card:opacity-100 transition-all duration-300 hover:bg-primary hover:scale-105 z-10"
        >
          <ArrowRight className="size-4 text-white" />
        </button>
      </div>
    </div>
  );
};

// =========================
// YEAR BLOCK COMPONENT
// =========================
const YearBlock = ({
  yearData,
  isLastYear,
}: {
  yearData: TimelineData;
  isLastYear?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  if (!yearData.events || yearData.events.length === 0) {
    return null;
  }

  return (
    <div className="mb-10 relative">
      {/* MASK 1: Hides the extending line perfectly below the big blue dot when the final year is collapsed */}
      {isLastYear && !isExpanded && (
        <div className="absolute -left-[2px] w-[6px] top-5 -bottom-12 bg-slate-50 z-0" />
      )}

      {/* MASK 2: Always masks the remaining bottom margin of the entire section */}
      {isLastYear && (
        <div className="absolute -left-[2px] w-[6px] -bottom-12 h-12 bg-slate-50 z-0" />
      )}

      {/* --- YEAR HEADER NODE --- */}
      <div
        className="relative pl-8 md:pl-10 mb-5 flex items-center gap-3 cursor-pointer select-none group w-fit"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Big Blue Dot for Year (Added z-10 so it rests beautifully above the mask) */}
        <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-primary-dark ring-4 ring-slate-50 z-10" />

        <h3 className="text-2xl md:text-3xl font-black text-primary tracking-tight">
          {yearData.year}
        </h3>

        {/* Toggle Icon */}
        <div className="p-1 rounded-full bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800 transition-colors">
          {isExpanded ? (
            <ChevronUp className="size-4" />
          ) : (
            <ChevronDown className="size-4" />
          )}
        </div>
      </div>

      {/* --- EVENTS LIST FOR THE YEAR --- */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden -ml-4 pl-4">
          <div className="space-y-8 pb-4">
            {yearData.events.map((event, index) => {
              const isLastEvent = index === yearData.events.length - 1;

              return (
                <div key={event.id} className="relative pl-8 md:pl-10">
                  {/* MASK 3: Hides the remaining line extending below the final small grey dot */}
                  {isLastYear && isLastEvent && (
                    <div className="absolute -left-[2px] w-[6px] top-5 -bottom-[200px] bg-slate-50 z-0" />
                  )}

                  {/* Small Gray Dot for Event */}
                  <div className="absolute -left-[7px] top-3 h-3 w-3 rounded-full bg-slate-400 ring-4 ring-slate-50 z-10" />

                  {/* Render Isolated Event Card */}
                  <EventCard event={event} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================
// MAIN SECTION COMPONENT
// =========================
const TimelineGallerySection = () => {
  return (
    <section id="gallery" className="w-full py-12 md:py-16 bg-slate-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
        {/* SECTION TITLE*/}
        <div className="lg:sticky lg:top-32 mx-auto h-full flex flex-col items-center justify-center text-center max-w-2xl">
          <SectionHeader text="Our Journey" />

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 tracking-tight">
            A Glimpse into Our Milestones
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Explore the timeline of our memorable events, key achievements, and
            the vibrant moments that have shaped our campus life over the years.
          </p>
        </div>

        {/* TIMELINE LAYOUT */}
        <div className="relative border-l-2 border-slate-200 ml-2 md:ml-8 mt-4">
          {galleryTimelineData.map((yearData, index) => (
            <YearBlock
              key={yearData.year}
              yearData={yearData as TimelineData}
              isLastYear={index === galleryTimelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineGallerySection;