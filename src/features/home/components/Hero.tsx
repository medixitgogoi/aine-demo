"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

const images = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Background Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            index === current ? "opacity-100 z-0" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Hero ${index}`}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Left gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl md:pt-12">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
              <span className="text-sm font-medium tracking-wide text-white">
                Excellence in Nursing Education Since 2007
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-6xl">
              Building Compassionate
              <span className="block text-secondary">
                Healthcare Professionals
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/85 md:text-xl">
              AINE empowers future nurses through world-class education,
              advanced clinical training, experienced faculty, and a commitment
              to excellence in healthcare.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/admissions"
                className="group inline-flex items-center gap-2 rounded-full bg-button-primary px-8 py-4 font-semibold text-white hover:bg-button-primary-hover transition hover:scale-105"
              >
                Apply Now
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <PlayCircle size={20} />
                Explore Campus
              </Link>
            </div>

            {/* Stats */}
            {/* <div className="mt-16 flex flex-wrap gap-10">
              <div>
                <h3 className="text-3xl font-bold text-white">20+</h3>
                <p className="mt-1 text-sm uppercase tracking-wider text-white/70">
                  Years of Excellence
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">5000+</h3>
                <p className="mt-1 text-sm uppercase tracking-wider text-white/70">
                  Successful Alumni
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">100%</h3>
                <p className="mt-1 text-sm uppercase tracking-wider text-white/70">
                  Clinical Exposure
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-10 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-10 right-10 z-30 hidden lg:flex flex-col items-center text-white/70">
        <span className="mb-3 rotate-90 text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="h-14 w-[1px] bg-white/50"></div>
      </div> */}
    </section>
  );
};

export default Hero;