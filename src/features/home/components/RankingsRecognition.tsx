"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { rankings } from "@/utils/ranks";
import SectionHeader from "@/components/section/SectionHeader";

export default function RankingsRecognition() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % rankings.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % rankings.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? rankings.length - 1 : prev - 1));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50/50 pb-28 pt-20">
      {/* Soft Ambient Background Accents */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-100/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section: Centered & Grounded for Better Balance */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionHeader text="Rankings & Recognition" />
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#0d2c63] sm:text-5xl leading-tight">
            Excellence Recognized
            <span className="text-[#ff6b35]"> Nationally & Globally</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Our commitment to academic excellence, innovation, and student
            success has earned prestigious recognitions from leading national
            and international ranking organizations.
          </p>
        </div>

        {/* Interactive Workspace Layout */}
        <div className="mt-20 grid items-stretch gap-12 lg:grid-cols-12">
          
          {/* LEFT: Quick Stats Grid (Stabilizes Visual Weight) */}
          <div className="flex flex-col justify-center space-y-8 lg:col-span-5 lg:pr-8">
            <div className="border-l-4 border-[#ff6b35] pl-6">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                A Tradition of Excellence
              </h3>
              <p className="mt-2 text-base text-slate-600">
                Consistently evaluated and validated by elite international vetting bodies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md">
                <p className="text-4xl font-black text-[#0d2c63]">150+</p>
                <p className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wider">National Awards</p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md">
                <p className="text-4xl font-black text-[#ff6b35]">25+</p>
                <p className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wider">Global Ranks</p>
              </div>
            </div>
          </div>

          {/* RIGHT: High-Impact Featured Slide Showcase */}
          <div className="relative flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 lg:col-span-7 sm:p-12">
            
            {/* Dynamic Content Frame */}
            <div
              key={current}
              className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col items-start"
            >
              <div className="flex h-20 items-center justify-center rounded-xl bg-slate-50 px-6 py-2">
                <Image
                  src={rankings[current].image}
                  alt={rankings[current].title}
                  width={200}
                  height={80}
                  className="max-h-14 w-auto object-contain mix-blend-multiply"
                />
              </div>

              <h4 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {rankings[current].title}
              </h4>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {rankings[current].description}
              </p>
            </div>

            {/* Custom Integrated Navigation & Progress Bar */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-slate-100 pt-8">
              
              {/* Pagination Indicators */}
              <div className="flex items-center gap-2">
                {rankings.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index
                        ? "w-8 bg-[#0d2c63]"
                        : "w-2 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  aria-label="Previous layout showcase"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-200 hover:border-[#0d2c63] hover:bg-[#0d2c63] hover:text-white active:scale-95"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next layout showcase"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d2c63] text-white transition-all duration-200 hover:bg-[#ff6b35] hover:shadow-lg hover:shadow-orange-500/20 active:scale-95"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}