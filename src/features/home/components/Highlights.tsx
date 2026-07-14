"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { highlights } from "@/utils/highlights";
import SectionHeader from "@/components/section/SectionHeader";

export default function HighlightsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % highlights.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % highlights.length);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));

  return (
    <section className="bg-background-dark pb-28 pt-15 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#ff6b35]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* NEW TOP HEADER DESIGN: Balanced, aligned, and structured */}
        <div className="border-b border-white/[0.06] pb-10">
          <div className="flex flex-col gap-4 max-w-5xl">
            <div className="inline-flex items-center gap-3">
              <SectionHeader text="Highlights" />
            </div>

            <h2 className="text-4xl mt-6 sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-[1.1]">
              United in Vision.
              <span className="block sm:inline text-[#ff6b35]">
                {" "}
                Unmatched in Excellence
              </span>
            </h2>

            {/* Added description paragraph with balanced dark-mode text hierarchy */}
            <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-white/70 max-w-3xl">
              Discover the milestones, breakthroughs, and proud moments that
              define our journey towards shaping the future of healthcare and
              professional nursing excellence.
            </p>
          </div>
        </div>

        {/* Carousel Block */}
        <div className="relative mt-16">
          <div className="overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
            <div className="relative aspect-[16/8] w-full min-h-[350px]">
              <Image
                key={current}
                src={highlights[current].image}
                alt={highlights[current].title}
                fill
                priority
                className="object-cover transition-all duration-700 hover:scale-[1.01]"
              />

              {/* Rich Overlay Mask for Dark Mode */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent sm:bg-gradient-to-r sm:from-black/80 sm:via-black/30 sm:to-transparent" />

              {/* Responsive Text Positioning */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-12 sm:left-12 max-w-xl text-white z-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff6b35]/90">
                  Featured Highlight
                </p>

                <h3 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
                  {highlights[current].title}
                </h3>

                <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-white/70 line-clamp-2 sm:line-clamp-none">
                  {highlights[current].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Controls Navigation bar */}
          <div className="mt-10 flex items-center justify-between">
            {/* Indicators */}
            <div className="flex gap-2.5">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-10 bg-[#ff6b35]"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Dark Accent Controls */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] active:scale-95"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b35] text-white transition-all duration-300 hover:bg-[#ff6b35]/80 hover:shadow-[0_4px_20px_rgba(255,107,53,0.3)] active:scale-95"
                aria-label="Next slide"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
