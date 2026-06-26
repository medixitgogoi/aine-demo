import {
  GraduationCap,
  HeartHandshake,
  Microscope,
  ShieldCheck,
} from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Delivering rigorous nursing education through modern teaching practices and continuous learning.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Instilling empathy, ethics, and patient-centred values in every future healthcare professional.",
  },
  {
    icon: Microscope,
    title: "Innovation & Research",
    description:
      "Encouraging evidence-based practice, scientific inquiry, and lifelong professional growth.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Integrity",
    description:
      "Developing responsible leaders committed to excellence, accountability, and service to society.",
  },
];

export default function Mission() {
  return (
    <section className="bg-[#FAF8F3] py-32 px-15">
      <div className="container-custom">
        <div className="grid gap-20 lg:grid-cols-[420px_1fr]">
          {/* Left */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.35em]">
              Our Mission
            </span>

            <div className="mt-5 h-px w-20 bg-primary" />

            <h2 className="mt-8 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Committed to Excellence in Nursing Education
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Our mission reflects our commitment to developing skilled,
              compassionate, and ethical healthcare professionals capable of
              addressing the evolving needs of individuals, families, and
              communities through quality education and service.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-10">
            {/* Mission Statement */}
            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <blockquote className="text-2xl font-medium leading-relaxed text-slate-900 lg:text-3xl">
                “To provide quality nursing education that nurtures competent,
                compassionate, and ethical healthcare professionals through
                academic excellence, clinical practice, research, innovation,
                and community service.”
              </blockquote>
            </div>

            {/* Pillars */}
            <div className="grid gap-6 md:grid-cols-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.title}
                    className="group rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                      <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-slate-900">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}