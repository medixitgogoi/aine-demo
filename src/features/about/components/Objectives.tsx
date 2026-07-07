import SectionHeader from "@/components/section/SectionHeader";
import { objectives } from "@/utils/objectives";

export default function Objectives() {
  return (
    <section className="bg-background-dark py-32 px-6 md:px-15">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-20 lg:grid-cols-[420px_1fr]">
          {/* Left Sticky Content */}
          <div className="lg:sticky lg:top-40 h-fit">
            <SectionHeader text="Our Objectives" />

            <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl tracking-tight">
              Guiding Every Student Towards Professional Excellence
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              The objectives of AINE are designed to cultivate competent,
              compassionate, and ethical nursing professionals who contribute
              meaningfully to healthcare, research, and society.
            </p>
          </div>

          {/* Objectives Dark Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {objectives.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-white/10 bg-card-light-bg p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                >
                  {/* Icon Wrapper */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                    <Icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-2xl font-bold text-black tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 leading-6 text-slate-500 font-normal group-hover:text-black transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Bottom Animated Line */}
                  <div className="mt-8 h-px w-full bg-white/10 transition-all duration-300 group-hover:bg-primary" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
