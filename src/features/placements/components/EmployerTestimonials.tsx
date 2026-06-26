"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Building2 } from "lucide-react";

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
    <section className="bg-section-soft pb-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground">
            Employer Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-card-heading md:text-5xl">
            What Employers Say About Our Graduates
          </h2>

          <p className="mt-6 text-lg leading-8 text-card-description">
            Leading healthcare organizations continue to place their trust in
            AINE graduates for their competence, professionalism, and commitment
            to excellence.
          </p>
        </div>

        {/* Featured Testimonial */}

        <div className="relative mt-20 overflow-hidden rounded-3xl border border-border bg-card shadow-md">
          {/* Decorative Accent */}

          <div className="absolute left-0 top-0 h-full w-2 bg-primary" />

          <div className="grid gap-10 p-10 lg:grid-cols-[220px_1fr] lg:p-14">
            {/* Employer */}

            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-background shadow-sm">
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-card-heading">
                {item.company}
              </h3>

              <Building2 className="mt-4 h-6 w-6 text-primary" />
            </div>

            {/* Quote */}

            <div className="flex flex-col justify-between">
              <Quote className="h-14 w-14 text-primary" />

              <blockquote className="mt-8 text-2xl leading-10 text-card-description">
                "{item.quote}"
              </blockquote>

              <div className="mt-10 border-t border-border pt-8">
                <h4 className="text-xl font-semibold text-card-heading">
                  {item.person}
                </h4>

                <p className="mt-2 text-card-subheading">{item.designation}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="mt-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Logos */}

          <div className="flex flex-wrap items-center justify-center gap-8">
            {testimonials.map((company, index) => (
              <button
                key={company.company}
                onClick={() => setCurrent(index)}
                className={`rounded-sm border p-2 transition-all duration-300 ${
                  current === index
                    ? "border-primary bg-primary-soft"
                    : "border-border bg-card hover:border-primary"
                }`}
              >
                <Image
                  src={company.logo}
                  alt={company.company}
                  width={70}
                  height={70}
                  className="h-40 w-auto object-contain"
                />
              </button>
            ))}
          </div>

          {/* Navigation */}

          <div className="flex gap-4">
            <button
              onClick={prev}
              className="rounded-xl border border-border bg-card p-3 transition hover:border-primary hover:bg-primary-soft"
            >
              <ChevronLeft className="h-5 w-5 text-card-heading" />
            </button>

            <button
              onClick={next}
              className="rounded-xl border border-border bg-card p-3 transition hover:border-primary hover:bg-primary-soft"
            >
              <ChevronRight className="h-5 w-5 text-card-heading" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
