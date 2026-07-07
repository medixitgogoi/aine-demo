import SectionHeader from "@/components/section/SectionHeader";
import { pillars } from "@/utils/pillars";

export default function Mission() {
  return (
    <section className="bg-background-dark/1 py-32 px-6 md:px-15 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Content and Cards Side-by-Side */}
        <div className="grid gap-16 lg:gap-20 lg:grid-cols-[420px_1fr] items-start">
          {/* Left Content Column */}
          <div className="lg:sticky lg:top-40 h-full">
            <SectionHeader text="Our Mission" />

            <h2 className="mt-8 text-4xl font-extrabold leading-tight text-slate-900 lg:text-4xl tracking-tight">
              Committed to Excellence in Nursing Education
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Our mission reflects our commitment to developing skilled,
              compassionate, and ethical healthcare professionals capable of
              addressing the evolving needs of individuals, families, and
              communities through quality education and service.
            </p>
          </div>

          {/* Right Column: Pillars Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">
                    <Icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section: Full-Width Mission Statement Quote */}
        <div className="mt-12 relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 md:p-10 shadow-sm border-l-4 border-l-primary">
          <span className="absolute left-2 -top-1 select-none text-[150px] font-black leading-none text-slate-200 pointer-events-none font-serif">
            “
          </span>

          <blockquote className="relative z-10 text-xl font-semibold leading-relaxed text-slate-900 lg:text-2xl max-w-5xl ml-auto text-right">
            To provide quality nursing education that nurtures competent,
            compassionate, and ethical healthcare professionals through academic
            excellence, clinical practice, research, innovation, and community
            service.
          </blockquote>
        </div>
      </div>
    </section>
  );
}