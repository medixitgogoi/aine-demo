"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const rankings = [
  {
    image: "/images/the.png",
    title: "Times Higher Education",
    description:
      "Ranked among India's leading universities for academic excellence, research impact, and global outlook.",
  },
  {
    image: "/images/the.png",
    title: "World University Rankings for Innovation",
    description:
      "Ranked 4th among all government and private universities in India for innovation and real-world impact.",
  },
  {
    image: "/images/the.png",
    title: "NAAC Accreditation",
    description:
      "Accredited with the highest standards of quality in teaching, infrastructure, governance, and student outcomes.",
  },
  {
    image: "/images/the.png",
    title: "NIRF Rankings",
    description:
      "Consistently recognized among India's top institutions by the National Institutional Ranking Framework.",
  },
];

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
    <section className="relative overflow-hidden bg-background pb-28">
      {/* Background Accent */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold tracking-wide text-[#0d2c63]">
            Rankings & Recognition
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-[#0d2c63] lg:text-6xl">
            Excellence Recognized
            <span className="text-[#ff6b35]"> Nationally & Globally</span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Our commitment to academic excellence, innovation, and student
            success has earned prestigious recognitions from leading national
            and international ranking organizations.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-20 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div className="relative">
            <div className="absolute -left-12 top-16 h-56 w-56 rounded-full bg-blue-100 opacity-50 blur-3xl" />

            <div className="relative">
              <div className="flex items-start">
                <span className="text-[180px] font-black leading-none text-[#0d2c63]">
                  4
                </span>

                <span className="mt-8 ml-3 text-5xl font-black text-[#ff6b35]">
                  TH
                </span>
              </div>

              <h3 className="mt-8 text-4xl font-bold leading-tight text-slate-900">
                Ranked among the Top Universities in India
              </h3>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Recognized for academic excellence, innovation, industry
                collaboration, and outstanding student outcomes across the
                country.
              </p>

              <div className="mt-10 flex gap-8">
                <div>
                  <p className="text-5xl font-black text-[#0d2c63]">150+</p>
                  <p className="mt-2 text-slate-500">National Awards</p>
                </div>

                <div>
                  <p className="text-5xl font-black text-[#ff6b35]">25+</p>
                  <p className="mt-2 text-slate-500">Global Recognitions</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative border-l border-slate-200 pl-12">
            <div
              key={current}
              className="animate-in fade-in slide-in-from-right-5 duration-500"
            >
              <Image
                src={rankings[current].image}
                alt={rankings[current].title}
                width={220}
                height={120}
                className="h-24 w-auto object-contain"
              />

              <h4 className="mt-10 text-3xl font-bold text-slate-900">
                {rankings[current].title}
              </h4>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {rankings[current].description}
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 transition-all duration-300 hover:border-[#0d2c63] hover:bg-[#0d2c63] hover:text-white"
              >
                <ArrowLeft />
              </button>

              <button
                onClick={nextSlide}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0d2c63] text-white transition-all duration-300 hover:bg-[#ff6b35]"
              >
                <ArrowRight />
              </button>

              {/* Indicators */}

              <div className="ml-6 flex gap-2">
                {rankings.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index
                        ? "w-8 bg-[#0d2c63]"
                        : "w-2 bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
