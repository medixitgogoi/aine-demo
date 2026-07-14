"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, BriefcaseBusiness, Building2 } from "lucide-react";
import SectionHeader from "@/components/section/SectionHeader";
import PrimaryCta from "@/components/button/PrimaryCta";
import { scrollToSection } from "@/lib/scrollToSection";

const slides = [
  {
    image: "/images/about/about-1.jpg",
    title: "Building Careers.\nCreating Leaders.",
    subtitle:
      "Empowering students with exceptional placement opportunities, industry partnerships, and career guidance to succeed in a competitive global workforce.",
  },
  {
    image: "/images/about/about-1.jpg",
    title: "Industry Ready.\nFuture Focused.",
    subtitle:
      "Connecting talented graduates with leading recruiters through innovation, skill development, internships, and professional excellence.",
  },
  {
    image: "/images/about/about-1.jpg",
    title: "Your Success.\nOur Commitment.",
    subtitle:
      "A strong ecosystem of recruiters, alumni, and faculty mentoring that prepares students for meaningful careers worldwide.",
  },
];

const stats = [
  {
    value: "95%",
    label: "Placement Rate",
  },
  {
    value: "₹18 LPA",
    label: "Highest Package",
  },
  {
    value: "250+",
    label: "Recruiters",
  },
  {
    value: "500+",
    label: "Internships",
  },
];

export default function PlacementsHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-190 w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <SectionHeader text="Career Development & Placements" />

          <h1 className="whitespace-pre-line mt-10 text-5xl font-bold leading-tight text-white md:text-6xl">
            {slides[current].title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/85 md:text-lg">
            {slides[current].subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <div onClick={() => scrollToSection("recent-placements")}>
              <PrimaryCta text="View Recent Placements" />
            </div>

            {/* Secondary CTA */}
            <div
              onClick={() => scrollToSection("recruiting-partners")}
              className="px-6 py-3 cursor-pointer rounded-md border transition-all duration-500 hover:scale-105 border-white/20 text-white font-semibold tracking-wide 
                bg-white/5 backdrop-blur-lg 
                hover:bg-white/10"
            >
              Our Recruiting Partners
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Statistics */}
      <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <h3 className="text-3xl font-bold text-white">{item.value}</h3>
              <p className="mt-2 text-sm uppercase tracking-wider text-white/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-36 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              current === index
                ? "w-12 bg-white"
                : "w-6 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
