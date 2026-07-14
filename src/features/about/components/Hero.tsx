import PrimaryCta from "@/components/button/PrimaryCta";
import SectionHeader from "@/components/section/SectionHeader";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="about" className="bg-background-dark pt-40 pb-28 px-15">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <SectionHeader text="About The Institute" />

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[40px]">
            Nurturing Healthcare Professionals with Knowledge, Compassion &
            Excellence
          </h2>

          <p className="mt-8 max-w-3xl text-[17px] leading-7 text-slate-500 mx-auto lg:mx-0">
            Asian Institute of Nursing Education (AINE) is dedicated to shaping
            future nursing professionals through academic excellence, ethical
            values, practical learning, and compassionate healthcare education.
            Our institution combines rigorous classroom instruction with
            extensive clinical exposure to prepare graduates who are confident,
            skilled, and committed to serving society.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Primary CTA */}
            <PrimaryCta href="/gallery" text="View our gallery" />

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

        {/* Right Image */}
        <div className="relative flex justify-center ml-auto w-max group">
          {/* Glow background */}
          <div className="absolute inset-0 rounded-[32px] bg-primary/20 blur-3xl opacity-30 transition duration-500 group-hover:opacity-60"></div>

          {/* 3D Image Container */}
          <div
            className="relative h-[420px] w-[320px] md:h-[500px] md:w-[380px] lg:h-[600px] lg:w-[450px] 
                rounded-[32px] overflow-hidden 
                border-4 border-[#c0cdf5]
                shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
                transition duration-500 ease-out 
                group-hover:-translate-y-3 group-hover:scale-105"
          >
            <Image
              src="/images/hero/hero2.jpg"
              alt="Nursing Students"
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Depth overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Subtle highlight border */}
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
