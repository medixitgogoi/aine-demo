"use client";

import {
  FileText,
  CreditCard,
  Download,
  PenSquare,
  FolderOpen,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const steps = [
  {
    title: "Obtain the Application Form",
    description:
      "Collect the application form from the Asian Institute of Nursing Education office by paying ₹1,000 through Cash, Bank Draft or Banker's Cheque.",
    icon: <FileText size={22} />,
  },
  {
    title: "Download the Form",
    description:
      "Alternatively, download the application form from the AINE website and submit it along with a Bank Draft/Banker's Cheque of ₹1,000.",
    icon: <Download size={22} />,
  },
  {
    title: "Fill the Form",
    description:
      "Complete every section of the application form carefully in the candidate's own handwriting.",
    icon: <PenSquare size={22} />,
  },
  {
    title: "Attach Required Documents",
    description:
      "Enclose all mandatory certificates and supporting documents before submission.",
    icon: <FolderOpen size={22} />,
  },
  {
    title: "Submit Application",
    description:
      "Submit the completed application form along with the application fee and all required documents within the prescribed deadline.",
    icon: <CheckCircle2 size={22} />,
  },
];

const documents = [
  "Academic Details Certificate signed by the Principal.",
  "Higher Secondary Passing Certificate.",
  "Higher Secondary Mark Sheet.",
  "School Leaving Certificate.",
  "Migration Certificate from Board/University.",
  "Community Certificate (SC/ST/OBC, if applicable).",
];

export default function ApplicationProcedure() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Admissions
          </span>

          <h2 className="mt-5 text-4xl font-bold text-card-heading md:text-5xl">
            Application Procedure
          </h2>

          <p className="mt-5 text-lg text-card-description">
            Follow the application process carefully and ensure all required
            documents are submitted before the deadline.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Left Sidebar */}
          <div className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[32px] border border-border bg-white shadow-xl">
              {/* Header */}
              <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark p-8 text-white">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                    <CreditCard size={28} />
                  </div>

                  <p className="mt-5 text-sm uppercase tracking-[0.25em] text-white/70">
                    Application Fee
                  </p>

                  <h2 className="mt-2 text-5xl font-bold">₹1,000</h2>

                  <p className="mt-4 leading-7 text-white/90">
                    Cash, Bank Draft or Banker's Cheque payable in favour of
                    <span className="font-semibold">
                      {" "}
                      Asian Institute of Nursing Education
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-8 p-8">
                {/* Documents */}
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-2">
                      <FileText className="text-primary" size={20} />
                    </div>

                    <h3 className="text-xl font-semibold text-card-heading">
                      Documents Required
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-xl bg-section-soft px-4 py-3"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-primary"
                        />

                        <span className="text-sm leading-6 text-card-description">
                          {doc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border" />

                {/* Notice */}
                <div className="rounded-2xl bg-amber-50 p-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-amber-100 p-2">
                      <AlertTriangle size={20} className="text-amber-600" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-card-heading">
                        Important Notice
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-card-description">
                        Verify all details before submission. Incomplete,
                        incorrect or late applications will not be accepted.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6 lg:col-span-2">
            <div className="relative pl-16">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 h-full w-px bg-primary/20" />

              {steps.map((step, index) => (
                <div key={index} className="relative mb-12">
                  {/* Timeline Dot */}
                  <div className="absolute -left-16 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-8 ring-primary/10">
                    {step.icon}
                  </div>

                  {/* Floating Card */}
                  <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                      Step {index + 1}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-card-heading">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-card-description">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
