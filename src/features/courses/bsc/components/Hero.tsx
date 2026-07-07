"use client";

import {
  GraduationCap,
  Clock3,
  HeartHandshake,
  BriefcaseMedical,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-10 overflow-hidden bg-gradient-to-br from-section-light via-section-primary to-background">
      {/* Background */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-orange/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Bachelor of Science (Nursing)
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-card-heading md:text-6xl">
              Build a Career in
              <span className="block text-primary">
                Professional Nursing
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-card-description">
              Our <strong>B.Sc. Nursing</strong> programme is a
              <strong> 4-year undergraduate degree</strong> designed to prepare
              compassionate, competent and skilled healthcare professionals who
              can serve hospitals, communities and diverse clinical settings.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white shadow-lg transition-all hover:bg-primary-dark">
                Apply Now
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-xl border border-border bg-white px-7 py-4 font-semibold text-primary transition hover:bg-primary-soft">
                Download Brochure
              </button>
            </div>

            {/* Statistics */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <Clock3 className="mb-3 text-primary" size={28} />
                <h4 className="text-2xl font-bold text-card-heading">4 Years</h4>
                <p className="mt-1 text-sm text-card-description">
                  Degree Programme
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <BriefcaseMedical
                  className="mb-3 text-primary"
                  size={28}
                />
                <h4 className="text-2xl font-bold text-card-heading">
                  1 Year
                </h4>
                <p className="mt-1 text-sm text-card-description">
                  Paid Hospital Placement
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <GraduationCap
                  className="mb-3 text-primary"
                  size={28}
                />
                <h4 className="text-2xl font-bold text-card-heading">
                  Career Ready
                </h4>
                <p className="mt-1 text-sm text-card-description">
                  Industry Focused Training
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="rounded-[32px] border border-border bg-white p-8 shadow-2xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <HeartHandshake
                    size={28}
                    className="text-primary"
                  />
                </div>

                <div>
                  <p className="text-sm text-card-description">
                    Programme Highlights
                  </p>
                  <h3 className="text-2xl font-bold text-card-heading">
                    Why Choose B.Sc. Nursing?
                  </h3>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  "4-year undergraduate nursing programme.",
                  "Develop clinical knowledge with practical learning.",
                  "Prepare for hospitals, community healthcare and professional nursing practice.",
                  "One-year placement in a leading multi-super speciality hospital in North-East.",
                  "Good salary, perks and career opportunities after course completion.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-xl bg-section-soft p-4"
                  >
                    <div className="mt-1 h-3 w-3 rounded-full bg-primary" />
                    <p className="text-card-description">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-primary p-6 text-white">
                <h4 className="text-xl font-semibold">
                  Aim of the Programme
                </h4>

                <p className="mt-3 leading-7 text-white/90">
                  Prepare responsible healthcare professionals with the
                  competencies required for first-level nursing positions in
                  hospitals, communities and diverse healthcare environments,
                  while maintaining the highest standards of professional
                  nursing practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}