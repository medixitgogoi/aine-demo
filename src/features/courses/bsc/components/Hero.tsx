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
    <section className="relative pt-10 overflow-hidden bg-slate-950 text-slate-100 antialiased min-w-full">
      {/* Background Ambient Atmosphere Layer */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content - Tuned for Dark Background */}
          <div>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Bachelor of Science (Nursing)
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl tracking-tight">
              Build a Career in{" "}
              <span className="block text-primary">
                Professional Nursing
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Our <strong className="text-white font-semibold">B.Sc. Nursing</strong> programme is a
              <strong className="text-white font-semibold"> 4-year undergraduate degree</strong> designed to prepare
              compassionate, competent and skilled healthcare professionals who
              can serve hospitals, communities and diverse clinical settings.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white shadow-lg transition-all hover:bg-primary-dark active:scale-[0.99]">
                Apply Now
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
                Download Brochure
              </button>
            </div>

            {/* Statistics - Translucent Dark Cards with Micro-Borders */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-5 shadow-xl backdrop-blur-xs">
                <Clock3 className="mb-3 text-primary" size={28} />
                <h4 className="text-2xl font-bold text-white">4 Years</h4>
                <p className="mt-1 text-sm text-slate-400 font-medium">
                  Degree Programme
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-5 shadow-xl backdrop-blur-xs">
                <BriefcaseMedical
                  className="mb-3 text-primary"
                  size={28}
                />
                <h4 className="text-2xl font-bold text-white">
                  1 Year
                </h4>
                <p className="mt-1 text-sm text-slate-400 font-medium">
                  Paid Hospital Placement
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-5 shadow-xl backdrop-blur-xs">
                <GraduationCap
                  className="mb-3 text-primary"
                  size={28}
                />
                <h4 className="text-2xl font-bold text-white">
                  Career Ready
                </h4>
                <p className="mt-1 text-sm text-slate-400 font-medium">
                  Industry Focused Training
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Striking Premium Crisp Light Card for Stark Contrast */}
          <div className="relative">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <HeartHandshake
                    size={28}
                    className="text-primary"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold tracking-wide uppercase text-slate-500">
                    Programme Highlights
                  </p>
                  <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                    Why Choose B.Sc. Nursing?
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "4-year undergraduate nursing programme.",
                  "Develop clinical knowledge with practical learning.",
                  "Prepare for hospitals, community healthcare and professional nursing practice.",
                  "One-year placement in a leading multi-super speciality hospital in North-East.",
                  "Good salary, perks and career opportunities after course completion.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-xl bg-slate-50 p-4 border border-slate-100 items-start"
                  >
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              {/* Aim Section Frame inside light wrapper card */}
              <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary to-primary-dark p-6 text-white shadow-md">
                <h4 className="text-xl font-bold tracking-tight">
                  Aim of the Programme
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-white/90 font-medium">
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