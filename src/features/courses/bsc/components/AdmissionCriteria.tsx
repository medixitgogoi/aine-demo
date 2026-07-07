"use client";

import {
  CheckCircle2,
  GraduationCap,
  ClipboardCheck,
  Mail,
  Users,
  Stethoscope,
  FileText,
  BadgeCheck,
} from "lucide-react";

const eligibility = [
  "Completion of 16 years of age at the time of admission.",
  "Minimum 50% in Higher Secondary (Science) with Physics, Chemistry, Biology and English.",
  "Minimum 45% in PCB with English for SC/ST/OBC/DT-NT candidates.",
  "Only unmarried girl candidates are eligible for admission.",
  "Medical certificate stating optimum health status.",
  "Certificate of good conduct from the Principal of the last attended institution.",
];

const process = [
  "Admission is based on the Entrance Examination conducted by the institute.",
  "Written examination includes English, Science, Arithmetic and General Knowledge.",
  "Qualified candidates will appear for a Personal Interview.",
  "Final admission is based on overall performance in the Entrance Examination and Interview.",
];

export default function AdmissionCriteria() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Admissions 2026
          </span>

          <h2 className="mt-5 text-4xl font-bold text-card-heading md:text-5xl">
            Admission Criteria for B.Sc. Nursing
          </h2>

          <p className="mt-5 text-lg leading-8 text-card-description">
            Check the eligibility requirements, admission procedure and seat
            availability before applying for the programme.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Eligibility */}
          <div className="rounded-3xl border border-border bg-white p-8 shadow-sm lg:col-span-2">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-primary/10 p-4">
                <GraduationCap className="text-primary" size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-card-heading">
                  Eligibility Criteria
                </h3>

                <p className="text-card-description">
                  Candidates must satisfy the following requirements.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {eligibility.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl bg-section-soft p-5"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-primary"
                    size={20}
                  />
                  <p className="text-card-description">{item}</p>
                </div>
              ))}
            </div>

            {/* Admission Process */}
            <div className="mt-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-2xl bg-primary/10 p-4">
                  <ClipboardCheck className="text-primary" size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-card-heading">
                    Admission Process
                  </h3>

                  <p className="text-card-description">
                    Selection is based on entrance examination performance.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {process.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-5 rounded-2xl border border-border bg-white p-5"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-semibold text-white">
                      {index + 1}
                    </div>

                    <p className="text-card-description">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Seats */}
            <div className="rounded-3xl bg-primary p-8 text-white shadow-lg">
              <Users size={36} />

              <h3 className="mt-6 text-3xl font-bold">
                100 Seats Available
              </h3>

              <p className="mt-4 leading-7 text-white/90">
                Limited seats are available for the B.Sc. Nursing programme.
                Admissions are offered strictly on merit based on the entrance
                examination.
              </p>
            </div>

            {/* Documents */}
            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <FileText className="text-primary" size={26} />

                <h3 className="text-xl font-bold text-card-heading">
                  Required Documents
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <BadgeCheck
                    className="mt-1 text-primary"
                    size={18}
                  />
                  <span className="text-card-description">
                    Higher Secondary Marksheet
                  </span>
                </li>

                <li className="flex gap-3">
                  <BadgeCheck
                    className="mt-1 text-primary"
                    size={18}
                  />
                  <span className="text-card-description">
                    Medical Fitness Certificate
                  </span>
                </li>

                <li className="flex gap-3">
                  <BadgeCheck
                    className="mt-1 text-primary"
                    size={18}
                  />
                  <span className="text-card-description">
                    Good Conduct Certificate
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <Mail className="text-primary" size={28} />

              <h3 className="mt-5 text-xl font-bold text-card-heading">
                Need Help?
              </h3>

              <p className="mt-3 text-card-description">
                For admission-related queries, contact our admission office.
              </p>

              <a
                href="mailto:info@aine.org.in"
                className="mt-5 inline-flex items-center rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-dark"
              >
                info@aine.org.in
              </a>
            </div>

            {/* Health */}
            <div className="rounded-3xl border border-primary/20 bg-primary-soft p-8">
              <Stethoscope className="text-primary" size={28} />

              <h3 className="mt-4 text-lg font-bold text-card-heading">
                Medical Fitness
              </h3>

              <p className="mt-3 text-card-description">
                Candidates should submit a medical fitness certificate
                confirming optimum health status during admission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}