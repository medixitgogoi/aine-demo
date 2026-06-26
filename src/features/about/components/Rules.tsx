"use client";

import { useState } from "react";
import {
  ChevronDown,
  ShieldCheck,
  BookOpen,
  BadgeCheck,
  HeartPulse,
  Users,
  CalendarDays,
  ClipboardCheck,
  School,
} from "lucide-react";

const rules = [
  {
    title: "Admission & Enrollment",
    icon: School,
    items: [
      "Admission is confirmed only after successful verification of all required documents.",
      "Students are expected to comply with all institutional regulations from the date of enrollment.",
      "Any false declaration or misrepresentation may result in cancellation of admission.",
    ],
  },
  {
    title: "Attendance",
    icon: ClipboardCheck,
    items: [
      "Students should maintain the minimum attendance prescribed by the institution and regulatory authorities.",
      "Attendance is mandatory for lectures, laboratory sessions, clinical postings, and examinations.",
      "Repeated absenteeism without prior approval may lead to disciplinary action.",
    ],
  },
  {
    title: "Uniform & Identity Card",
    icon: BadgeCheck,
    items: [
      "Students should wear the prescribed uniform during academic and clinical activities.",
      "Identity cards must be carried at all times while on campus.",
      "Replacement of lost identity cards should be requested through the administration office.",
    ],
  },
  {
    title: "Code of Conduct",
    icon: ShieldCheck,
    items: [
      "Students are expected to uphold discipline, professionalism, and mutual respect.",
      "Any form of ragging, discrimination, harassment, or misconduct is strictly prohibited.",
      "The institution reserves the right to initiate disciplinary proceedings for violations.",
    ],
  },
  {
    title: "Academic Responsibilities",
    icon: BookOpen,
    items: [
      "Assignments, practical records, and projects should be submitted within the prescribed deadlines.",
      "Students should actively participate in seminars, workshops, and academic activities.",
      "Academic integrity must be maintained at all times.",
    ],
  },
  {
    title: "Health & Wellbeing",
    icon: HeartPulse,
    items: [
      "Students should maintain personal health and hygiene.",
      "Medical emergencies should be immediately reported to the institution.",
      "Participation in health awareness and wellness programmes is encouraged.",
    ],
  },
  {
    title: "Campus Life",
    icon: Users,
    items: [
      "Students are encouraged to participate in cultural, sports, and community outreach activities.",
      "Campus facilities should be used responsibly and respectfully.",
      "Damage to institutional property may attract penalties.",
    ],
  },
  {
    title: "Leave & Holidays",
    icon: CalendarDays,
    items: [
      "Leave applications should be submitted in advance whenever possible.",
      "Medical leave should be supported by appropriate documentation.",
      "Vacation schedules shall follow the academic calendar notified by the institute.",
    ],
  },
];

export default function Rules() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#FAF8F3] py-32">
      <div className="container-custom">
        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.35em]">
            Institutional Rules
          </span>

          <div className="mx-auto mt-5 h-px w-20 bg-primary" />

          <h2 className="mt-8 text-5xl font-bold leading-tight text-slate-900">
            Building a Culture of
            Responsibility & Professionalism
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            These institutional guidelines are designed to promote academic
            excellence, professional ethics, discipline, and a safe learning
            environment for every student at AINE.
          </p>
        </div>

        {/* Rules */}

        <div className="mx-auto mt-24 max-w-5xl">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            const active = open === index;

            return (
              <div
                key={rule.title}
                className="border-b border-slate-200 py-8"
              >
                <button
                  onClick={() => setOpen(active ? -1 : index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                        {rule.title}
                      </h3>
                    </div>
                  </div>

                  <ChevronDown
                    className={`h-6 w-6 text-slate-500 transition-transform duration-300 ${
                      active ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    active
                      ? "grid-rows-[1fr] opacity-100 mt-8"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-4 pl-20">
                      {rule.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-4 text-lg leading-8 text-slate-600"
                        >
                          <span className="mt-3 h-2 w-2 rounded-full bg-primary shrink-0" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}

        <div className="mx-auto mt-24 max-w-4xl rounded-[32px] border border-primary/10 bg-primary/5 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-900">
            Commitment to Professional Excellence
          </h3>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            Every student is expected to uphold the values of integrity,
            compassion, discipline, and respect throughout their academic
            journey. These guidelines are intended to foster a positive,
            inclusive, and professionally enriching environment for all members
            of the AINE community.
          </p>
        </div>
      </div>
    </section>
  );
}