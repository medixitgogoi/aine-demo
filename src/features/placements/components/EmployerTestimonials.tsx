"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Building2 } from "lucide-react";
import SectionHeader from "@/components/section/SectionHeader";

const testimonials = [
  {
    company: "Apollo Hospitals",
    logo: "/images/about/about-1.jpg",
    person: "Dr. Rajesh Mehta",
    designation: "Director – Human Resources",
    quote:
      "Graduates from AINE consistently demonstrate excellent clinical knowledge, professionalism, and compassion. They integrate seamlessly into our healthcare teams and continue to exceed expectations.",
  },
  {
    company: "Fortis Healthcare",
    logo: "/images/about/about-1.jpg",
    person: "Ms. Priya Kapoor",
    designation: "Senior Recruitment Manager",
    quote:
      "AINE has been one of our trusted academic partners. Their students possess strong practical skills and adapt quickly to demanding healthcare environments.",
  },
  {
    company: "Max Healthcare",
    logo: "/images/about/about-1.jpg",
    person: "Mr. Amit Sharma",
    designation: "Head – Talent Acquisition",
    quote:
      "Every recruitment cycle reinforces our confidence in AINE graduates. Their commitment to patient care and professional ethics makes them valuable additions to our workforce.",
  },
];

export default function EmployerTestimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  const item = testimonials[current];

  return (
    <section className="bg-background-dark/1 pt-15 pb-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center justify-center">
          <SectionHeader text="Employer Testimonials" />

          <h2 className="mt-8 text-4xl font-bold tracking-tight text-card-heading md:text-5xl">
            What Employers Say About Our Graduates
          </h2>

          <p className="mt-5 text-lg leading-8 text-card-description">
            Leading healthcare organizations continue to place their trust in
            AINE graduates for their competence, professionalism, and commitment
            to excellence.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-border bg-white shadow-xl shadow-gray-100/40 transition-all duration-300">
          {/* Decorative Accent */}
          <div className="absolute left-0 top-0 h-full w-2 bg-primary" />

          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[260px_1fr] lg:p-14 items-start">
            {/* Employer Block */}
            <div className="flex flex-col items-center justify-center text-center w-full border-b border-gray-100 pb-8 lg:border-b-0 lg:border-r lg:border-gray-100 lg:pb-0 lg:pr-10">
              <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100/80 p-5 shadow-sm transition-transform duration-300 hover:scale-105">
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-card-heading">
                {item.company}
              </h3>

              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                <Building2 className="h-3.5 w-3.5" />
                <span>Partner Network</span>
              </div>
            </div>

            {/* Quote Block */}
            <div className="flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center justify-between w-full">
                  <Quote className="h-10 w-10 text-primary/40 transform -scale-x-100" />
                </div>
                <blockquote className="mt-4 text-xl font-medium leading-9 text-card-heading italic tracking-wide">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold tracking-tight text-card-heading">
                    {item.person}
                  </h4>
                  <p className="text-sm font-medium text-card-subheading">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Controls Container */}
        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-t border-gray-100 pt-8">
          {/* Interactive Logo Tabs (Left Side) */}
          <div className="w-full lg:max-w-[75%]">
            <div className="flex items-center gap-2 overflow-x-auto pb-3 -mb-3 scrollbar-none snap-x snap-mandatory">
              {testimonials.map((company, index) => {
                const isActive = current === index;
                return (
                  <button
                    key={company.company}
                    onClick={() => setCurrent(index)}
                    className="group relative flex-none snap-start flex flex-col items-start gap-3 p-4 min-w-[140px] rounded-xl transition-all duration-300 cursor-pointer text-left focus:outline-none"
                    aria-current={isActive ? "true" : "false"}
                  >
                    {/* Logo Wrapper */}
                    <div className="h-15 w-15 flex items-center justify-start rounded-full overflow-hidden">
                      <Image
                        src={company.logo}
                        alt={company.company}
                        width={90}
                        height={36}
                        className={`h-full w-full object-cover transition-all duration-300 ${
                          isActive
                            ? "opacity-100 grayscale-0 brightness-100"
                            : "opacity-35 grayscale contrast-125 hover:opacity-70 transition-opacity"
                        }`}
                      />
                    </div>

                    {/* Micro-Label (hidden on tiny screens, clear secondary cue) */}
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                        isActive
                          ? "text-gray-900"
                          : "text-gray-400 group-hover:text-gray-600"
                      }`}
                    >
                      {company.company}
                    </span>

                    {/* Story-Style Progress/Indicator Bar */}
                    <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-primary transition-all duration-500 ease-out ${
                          isActive ? "w-full" : "w-0 group-hover:w-1/3"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sleek Navigation Arrow Dock (Right Side) */}
          <div className="flex items-center gap-2 self-end lg:self-center shrink-0">
            <button
              onClick={prev}
              className="group flex items-center justify-center size-11 rounded-full border border-gray-200 bg-white hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 active:scale-95 shadow-xs cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-5 text-gray-500 group-hover:text-white transition-colors" />
            </button>

            <button
              onClick={next}
              className="group flex items-center justify-center size-11 rounded-full border border-gray-200 bg-white hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 active:scale-95 shadow-xs cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-5 text-gray-500 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
