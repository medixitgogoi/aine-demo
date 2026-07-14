"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/section/SectionHeader";
import PrimaryCta from "@/components/button/PrimaryCta";

const images = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/highlights/h2.png",
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
          <div className="max-w-2xl md:pt-20">
            {/* Badge */}
            <SectionHeader text="Excellence Since 2007" />

            {/* Heading */}
            <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[52px]">
              Building Compassionate
              <span className="block text-secondary">
                Healthcare Professionals
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65 md:text-[18px]">
              AINE empowers future nurses through world-class education,
              advanced clinical training, experienced faculty, and a commitment
              to excellence in healthcare.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-5">
              <PrimaryCta href="#" text="Apply Now" />

              {/* Secondary CTA */}
              <Link
                href="/contact"
                className="px-6 py-3 cursor-pointer rounded-md border transition-all duration-500 hover:scale-105 border-white/20 text-white font-semibold tracking-wide 
                bg-white/5 backdrop-blur-lg 
                hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
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
    </section>
  );
};

export default Hero;
