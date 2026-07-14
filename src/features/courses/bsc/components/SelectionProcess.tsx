"use client";

import SectionHeader from "@/components/section/SectionHeader";
import {
  FileCheck2,
  ClipboardList,
  Languages,
  BookOpen,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function SelectionProcess() {
  return (
    <section className="bg-background-dark py-20 text-slate-100 antialiased relative overflow-hidden min-w-full">
      {/* Decorative Dark Atmosphere Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Heading - Tuned for Dark Background */}
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center justify-center">
          <SectionHeader text="Admission Process" />

          <h2 className="mt-8 text-4xl font-black text-white tracking-tight md:text-5xl">
            Method of Selection & Admission
          </h2>

          <p className="mt-5 text-lg text-slate-400 font-medium">
            Admission is based on a Common Entrance Test followed by document
            verification and interview.
          </p>
        </div>

        {/* Two Process Cards - Designed in Stark Light Contrast */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Written Test Card */}
          <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-primary/20">
              <ClipboardList size={30} />
            </div>

            <h3 className="mt-8 text-3xl font-black text-slate-950 tracking-tight">
              Written Entrance Test
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600 font-medium">
              All eligible candidates must appear for the Common Entrance
              Examination consisting of multiple-choice questions.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-4 rounded-lg bg-card-light-bg/40 border border-slate-100 p-4 transition-colors">
                <BookOpen className="text-primary shrink-0" size={20} />
                <span className="text-sm font-semibold text-slate-800">
                  Physics, Chemistry & Biology
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-lg bg-card-light-bg/40 border border-slate-100 p-4 transition-colors">
                <Languages className="text-primary shrink-0" size={20} />
                <span className="text-sm font-semibold text-slate-800">
                  English Language
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-lg bg-card-light-bg/40 border border-slate-100 p-4 transition-colors">
                <ArrowRight className="text-primary shrink-0" size={20} />
                <span className="text-sm font-semibold text-slate-800">
                  General Knowledge & General Ability
                </span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-blue-50/70 border border-blue-100 p-5">
              <p className="text-xs font-semibold leading-relaxed text-slate-700">
                The examination is conducted entirely in
                <strong className="text-primary"> English</strong>. Candidates
                from regional-medium schools should prepare accordingly.
              </p>
            </div>
          </div>

          {/* Interview & Verification Card */}
          <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
              <FileCheck2 size={30} />
            </div>

            <h3 className="mt-8 text-3xl font-black text-slate-950 tracking-tight">
              Interview & Verification
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600 font-medium">
              Candidates shortlisted after the written examination will be
              invited for the interview.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-card-light-bg/40 p-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-900">
                Required During Interview
              </h4>

              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                  <ShieldCheck
                    className="mt-0.5 text-emerald-600 shrink-0"
                    size={18}
                  />
                  Original qualifying examination mark sheet.
                </li>

                <li className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                  <ShieldCheck
                    className="mt-0.5 text-emerald-600 shrink-0"
                    size={18}
                  />
                  Verification of eligibility documents.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Banner - Bold Gradient Wrapper */}
        <div className="mt-14 overflow-hidden rounded-[30px] bg-gradient-to-r from-primary to-primary-dark p-8 text-white shadow-xl ring-1 ring-white/10">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <h3 className="text-2xl font-black tracking-tight">
                Final Selection
              </h3>

              <p className="mt-3 max-w-3xl text-white/85 text-sm font-medium leading-relaxed">
                The decision of the Selection Committee regarding admission
                shall be final and binding on all applicants.
              </p>
            </div>

            <ShieldCheck size={64} className="opacity-80 shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
