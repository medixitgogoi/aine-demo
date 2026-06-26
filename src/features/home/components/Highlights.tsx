"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const highlights = [
  {
    image: "/images/highlights/h1.png",
    title: "Global Recognition",
    subtitle:
      "Celebrating milestones, international partnerships, and academic excellence.",
  },
  {
    image: "/images/highlights/h2.png",
    title: "Innovation & Student Success",
    subtitle:
      "Empowering students through research, innovation, and industry collaboration.",
  },
];

export default function HighlightsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % highlights.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () =>
    setCurrent((prev) => (prev + 1) % highlights.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? highlights.length - 1 : prev - 1
    );

  return (
    <section className="bg-background pb-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#ff6b35]">
              Highlights
            </span>

            <div className="mt-3 h-1 w-20 rounded-full bg-[#ff6b35]" />
          </div>

          <div className="max-w-4xl">
            <h2 className="text-5xl font-black leading-tight text-[#0d2c63] lg:text-6xl">
              United in Vision.
              <span className="text-[#ff6b35]">
                {" "}
                Unmatched in Excellence
              </span>
            </h2>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mt-20">
          <div className="overflow-hidden rounded-[36px] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-[16/8] w-full">
              <Image
                key={current}
                src={highlights[current].image}
                alt={highlights[current].title}
                fill
                priority
                className="object-cover transition-all duration-700 hover:scale-[1.02]"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-14 left-14 max-w-xl text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
                  Featured Highlight
                </p>

                <h3 className="mt-4 text-5xl font-black leading-tight">
                  {highlights[current].title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-white/90">
                  {highlights[current].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between">
            {/* Indicators */}
            <div className="flex gap-3">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-12 bg-[#0d2c63]"
                      : "w-2 bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-white transition hover:border-[#0d2c63] hover:bg-[#0d2c63] hover:text-white"
              >
                <ArrowLeft />
              </button>

              <button
                onClick={next}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0d2c63] text-white transition hover:bg-[#ff6b35]"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}