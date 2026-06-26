import {
  GraduationCap,
  Microscope,
  HeartHandshake,
  Users,
  ArrowUpRight,
  Stethoscope,
} from "lucide-react";

const objectives = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Deliver comprehensive nursing education through innovative teaching methodologies, rigorous academics, and continuous learning.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Competence",
    description:
      "Develop confident professionals with extensive practical exposure and evidence-based clinical decision-making skills.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Instill empathy, ethics, and professionalism to ensure holistic, patient-centred healthcare services.",
  },
  {
    icon: Microscope,
    title: "Research & Innovation",
    description:
      "Encourage scientific inquiry, critical thinking, and research-driven practices that contribute to modern healthcare.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "Promote social responsibility through outreach programmes, health awareness initiatives, and community partnerships.",
  },
  {
    icon: ArrowUpRight,
    title: "Leadership Development",
    description:
      "Prepare graduates to become responsible healthcare leaders capable of adapting to evolving global healthcare systems.",
  },
];

export default function Objectives() {
  return (
    <section className="bg-white py-32 px-15">
      <div className="container-custom">
        <div className="grid gap-20 lg:grid-cols-[420px_1fr]">
          {/* Left Side */}
          <div className="lg:sticky lg:top-40 h-fit">
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.35em]">
              Our Objectives
            </span>

            <div className="mt-5 h-px w-20 bg-primary" />

            <h2 className="mt-8 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Guiding Every Student Towards Professional Excellence
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              The objectives of AINE are designed to cultivate competent,
              compassionate, and ethical nursing professionals who contribute
              meaningfully to healthcare, research, and society.
            </p>
          </div>

          {/* Objectives Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {objectives.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                    <Icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-8 h-px w-full bg-slate-200 transition-all duration-300 group-hover:bg-primary" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}