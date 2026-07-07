"use client";

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
    <section className="bg-backgroud py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Admission Process
          </span>

          <h2 className="mt-5 text-4xl font-bold text-card-heading md:text-5xl">
            Method of Selection & Admission
          </h2>

          <p className="mt-5 text-lg text-card-description">
            Admission is based on a Common Entrance Test followed by document
            verification and interview.
          </p>
        </div>

        {/* Two Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Written Test */}
          <div className="group rounded-[30px] border border-border bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
              <ClipboardList size={30} />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-card-heading">
              Written Entrance Test
            </h3>

            <p className="mt-4 leading-8 text-card-description">
              All eligible candidates must appear for the Common Entrance
              Examination consisting of multiple-choice questions.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-section-soft p-4">
                <BookOpen className="text-primary" size={20} />
                <span>Physics, Chemistry & Biology</span>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-section-soft p-4">
                <Languages className="text-primary" size={20} />
                <span>English Language</span>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-section-soft p-4">
                <ArrowRight className="text-primary" size={20} />
                <span>General Knowledge & General Ability</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-primary-soft p-5">
              <p className="text-card-description">
                The examination is conducted entirely in
                <strong> English</strong>. Candidates from regional-medium
                schools should prepare accordingly.
              </p>
            </div>
          </div>

          {/* Interview */}
          <div className="group rounded-[30px] border border-border bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
              <FileCheck2 size={30} />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-card-heading">
              Interview & Verification
            </h3>

            <p className="mt-4 leading-8 text-card-description">
              Candidates shortlisted after the written examination will be
              invited for the interview.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-section-soft p-6">
              <h4 className="font-semibold text-card-heading">
                Required During Interview
              </h4>

              <ul className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <ShieldCheck className="mt-1 text-primary" size={18} />
                  Original qualifying examination mark sheet.
                </li>

                <li className="flex gap-3">
                  <ShieldCheck className="mt-1 text-primary" size={18} />
                  Verification of eligibility documents.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}

        <div className="mt-14 overflow-hidden rounded-[30px] bg-gradient-to-r from-primary to-primary-dark p-8 text-white">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <h3 className="text-2xl font-bold">Final Selection</h3>

              <p className="mt-3 max-w-3xl text-white/85 leading-7">
                The decision of the Selection Committee regarding admission
                shall be final and binding on all applicants.
              </p>
            </div>

            <ShieldCheck size={64} className="opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
