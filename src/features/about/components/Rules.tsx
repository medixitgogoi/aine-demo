"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { rules } from "@/utils/rules";
import SectionHeader from "@/components/section/SectionHeader";

export default function Rules() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="bg-background-dark/1 pb-24 lg:pb-32 lg:pt-15">
      <div className="container-custom px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto flex flex-col items-center justify-center max-w-3xl text-center">
          <SectionHeader text="Institutional Rules" />

          <h2 className="mt-8 text-4xl lg:text-5xl font-black leading-tight text-slate-900 tracking-tight">
            Building a Culture of Responsibility & Professionalism
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base lg:text-lg leading-relaxed text-slate-600">
            These institutional guidelines are designed to promote academic
            excellence, professional ethics, discipline, and a safe learning
            environment for every student at AINE.
          </p>
        </div>

        {/* Dynamic Side-by-Side Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-22">
          {/* Left Side */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative overflow-hidden rounded-2xl border border-slate-300 bg-white p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)]">
              {/* Elegant Accent Gradient Top Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

              <span className="inline-block border border-slate-200 bg-primary px-3 py-2 text-[10px] font-black uppercase tracking-wider text-white rounded-full">
                Institutional Commitment
              </span>

              <h3 className="mt-6 text-2xl font-black text-slate-900 tracking-tight">
                Commitment to Professional Excellence
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Every student is expected to uphold the values of integrity,
                compassion, discipline, and respect throughout their academic
                journey.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                These guidelines are intended to foster a positive, inclusive,
                and professionally enriching environment for all members of the
                AINE community.
              </p>

              {/* Subtle design sign-off to anchor the card layout */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  AINE Office of Academic Affairs
                </span>
              </div>
            </div>
          </div>

          {/* Right Side*/}
          <div className="lg:col-span-7 space-y-4">
            {rules.map((rule, index) => {
              const Icon = rule.icon;
              const active = open === index;

              return (
                <div
                  key={rule.title}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    active
                      ? "border-primary/30 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.02)]"
                      : "border-slate-200 bg-white/60 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpen(active ? -1 : index)}
                    className="flex w-full items-center justify-between text-left p-6 group cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                          active
                            ? "bg-primary text-white"
                            : "bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                          Section {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3
                          className={`mt-1 text-base lg:text-lg font-bold tracking-tight transition-colors duration-200 ${
                            active
                              ? "text-primary"
                              : "text-slate-800 group-hover:text-primary"
                          }`}
                        >
                          {rule.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                        active
                          ? "border-primary/20 bg-primary/5 text-primary rotate-180"
                          : "border-slate-200 bg-slate-50 text-slate-400 group-hover:text-slate-600 group-hover:border-slate-300"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      active
                        ? "grid-rows-[1fr] opacity-100 px-6 pb-6"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mb-5 h-px w-full bg-slate-100" />
                      <ul className="space-y-3.5 pl-12 pr-4">
                        {rule.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-4 text-sm leading-relaxed text-slate-600"
                          >
                            <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
