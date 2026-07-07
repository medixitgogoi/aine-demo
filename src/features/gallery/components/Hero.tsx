"use client"

import Image from "next/image";
import SectionHeader from "@/components/section/SectionHeader";
import PrimaryCta from "@/components/button/PrimaryCta";
import { scrollToSection } from "@/lib/scrollToSection";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center py-45 bg-background-dark text-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">
          {/* Label */}
          <SectionHeader text="Our Gallery" />

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-50">
            Moments That Define
            <span className="text-card-light-bg"> Our Journey</span>
          </h1>

          {/* Divider */}
          <div className="w-16 h-1 rounded-full bg-blue-500" />

          {/* Description */}
          <p className="text-base max-w-xl leading-relaxed text-slate-400 mb-3">
            Discover snapshots from our academic excellence, events, and vibrant
            campus life. Every frame tells a story of growth, innovation, and
            community spirit.
          </p>

          {/* Optional CTA */}
          <div onClick={()=>scrollToSection("gallery")}>
            <PrimaryCta text="View full gallery" />
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden shadow-md border border-white">
            <Image
              src="/images/hero/hero1.jpg"
              alt="Gallery 1"
              fill
              sizes="(max-w-768px) 50vw, 25vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="relative w-full h-52 md:h-64 rounded-lg overflow-hidden shadow-lg border border-white">
            <Image
              src="/images/hero/hero1.jpg"
              alt="Gallery 2"
              fill
              sizes="(max-w-768px) 50vw, 25vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="relative w-full h-52 md:h-64 rounded-lg overflow-hidden shadow-lg border border-white">
            <Image
              src="/images/hero/hero1.jpg"
              alt="Gallery 3"
              fill
              sizes="(max-w-768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>

          <div className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden shadow-md border border-white">
            <Image
              src="/images/hero/hero1.jpg"
              alt="Gallery 4"
              fill
              sizes="(max-w-768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
