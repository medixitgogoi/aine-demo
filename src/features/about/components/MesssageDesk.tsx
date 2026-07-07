import Image from "next/image";
import { Quote, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/section/SectionHeader";

export default function MessageDesk() {
  return (
    <section className="bg-background-dark py-32 px-6 md:px-15 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl">
          <SectionHeader text="From the Desk" />

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl tracking-tight">
            A Message from the Principal
          </h2>

          {/* Sub-headline */}
          <p className="mt-4 text-lg text-slate-400 font-medium leading-relaxed">
            Guiding future nurses with compassion, knowledge, and a commitment
            to excellence in healthcare education.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid gap-16 lg:gap-20 lg:grid-cols-[1fr_360px]">
          {/* Message Area */}
          <div className="relative">
            {/* Decorative Quote Mark */}
            {/* <Quote className="absolute -top-16 left-0 h-20 w-20 text-white pointer-events-none" /> */}

            {/* Light Gradient Message Bubble */}
            <div className="relative rounded-[36px] border border-slate-900/5 bg-gradient-to-b from-indigo-200 to-blue-300/60 p-8 md:p-14 shadow-xl">
              {/* Primary Message (Highest emphasis) */}
              <p className="text-2xl font-extrabold leading-relaxed text-slate-900 lg:text-3xl tracking-tight">
                At Asian Institute of Nursing Education, we believe that nursing
                is more than a profession—it is a lifelong commitment to
                compassion, excellence, and service to humanity.
              </p>

              {/* Supporting Content */}
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-700">
                <p className="font-semibold">
                  Our institution is dedicated to nurturing healthcare
                  professionals who possess not only sound academic knowledge
                  but also the ethical values, leadership qualities, and
                  practical competencies required in today's dynamic healthcare
                  environment.
                </p>

                <p>
                  Through innovative teaching methodologies, advanced clinical
                  training, and meaningful community engagement, we strive to
                  create graduates who are confident, responsible, and prepared
                  to make a positive difference wherever they serve.
                </p>

                <p>
                  We warmly welcome every aspiring student to become a part of
                  the AINE family and embark on a journey of learning,
                  professional growth, and compassionate service.
                </p>
              </div>
            </div>
          </div>

          {/* Upgraded Dark Profile Card */}
          <aside className="self-end lg:sticky lg:top-40 h-fit">
            {/* Changed bg-primary-dark/60 to a solid, elevated bg-slate-900/90 and enhanced border/shadow opacity */}
            <div className="overflow-hidden rounded-4xl border border-white/10 bg-slate-900/80 backdrop-blur-md shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:border-white/20 transition-all duration-300 relative group/card">
              {/* Subtle inner ambient glow to pop out from the dark background */}
              <div className="absolute -inset-px bg-gradient-to-br from-white/5 to-transparent rounded-4xl pointer-events-none z-10" />

              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src="/images/about/about-1.jpg"
                  alt="Principal"
                  fill
                  className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                {/* Darkened gradient overlay slightly for punchier text contrast */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
              </div>

              {/* Increased padding slightly and brightened background area */}
              <div className="p-8 relative z-20 bg-slate-900/50">
                <p className="text-2xl font-black text-white tracking-tight">
                  Dr. ABC XYZ
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-primary-light">
                  Principal
                </p>

                {/* Made the divider slightly more visible */}
                <div className="my-6 h-px bg-white/10" />

                {/* Lightened text color from text-slate-400 to text-slate-300 for readability */}
                <p className="leading-relaxed text-slate-300 text-sm">
                  Dedicated to building a culture of academic excellence,
                  innovation, ethical practice, and compassionate nursing
                  education.
                </p>

                {/* <button className="group mt-8 inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-primary-light transition-colors cursor-pointer">
                  View Profile
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button> */}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
