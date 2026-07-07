import Image from "next/image";
import { Award, ArrowUpRight } from "lucide-react";
import { awards } from "@/utils/awards";
import SectionHeader from "@/components/section/SectionHeader";

export default function Awards() {
  return (
    <section className="bg-background-dark py-24 lg:pb-32 border-b border-white/5">
      <div className="container-custom px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto flex flex-col items-center justify-center max-w-3xl text-center">
          <SectionHeader text="Awards & Achievements" />

          <h2 className="mt-8 text-4xl lg:text-5xl font-black leading-tight text-white tracking-tight">
            Our Journey of Excellence
          </h2>

          <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-400">
            Our achievements reflect years of dedication to academic quality,
            professional ethics, and excellence in nursing education.
          </p>
        </div>

        {/* Content - Structural Splitting */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[460px_1fr] items-start">
          {/* Featured Award - Noticeably Lighter Surface */}
          <div className="relative overflow-hidden border border-white/10 bg-slate-800/80 backdrop-blur-md p-10 rounded-2xl group/featured shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:border-primary/40 hover:bg-slate-800 transition-all duration-300">
            <div className="absolute right-6 top-6 text-white/[0.03] pointer-events-none transition-transform duration-700 group-hover/featured:scale-110">
              <Award className="h-40 w-40" />
            </div>

            {/* Logo box with high contrast background */}
            <div className="relative h-32 w-32 border border-slate-700 bg-slate-900/60 p-4 rounded-xl">
              <Image
                src={awards[0].logo}
                alt={awards[0].title}
                fill
                className="object-contain p-2 grayscale contrast-125 group-hover/featured:grayscale-0 transition duration-500"
              />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Featured Recognition
            </p>

            <h3 className="mt-3 text-2xl font-black text-white tracking-tight">
              {awards[0].title}
            </h3>

            {/* Darkened text slightly to slate-300 for crisp readability on the lighter background */}
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Awarded by{" "}
              <strong className="text-white font-semibold">
                {awards[0].organization}
              </strong>{" "}
              in{" "}
              <strong className="text-white font-semibold">
                {awards[0].year}
              </strong>{" "}
              in recognition of outstanding contribution towards nursing
              education and institutional excellence.
            </p>

            <button className="group mt-8 inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-primary-light transition-colors cursor-pointer">
              Learn More
              <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover/featured:translate-x-0.5 group-hover/featured:-translate-y-0.5" />
            </button>
          </div>

          {/* Timeline - With Matching Lighter Surface Layout */}
          <div className="relative border-l border-white/10 pl-6 lg:pl-10 space-y-8">
            {awards.map((award) => (
              <div
                key={award.title}
                className="group relative flex items-start gap-6 max-w-2xl"
              >
                {/* Custom timeline tracking bullet node */}
                <div className="absolute -left-[31px] lg:-left-[45px] top-10 z-10 h-2 w-2 rounded-full bg-background-dark border-2 border-primary group-hover:bg-card-light-bg transition-colors duration-300 scale-125" />

                <div
                  key={award.title}
                  className="group relative flex items-start gap-6 w-full"
                >
                  {/* Replaced generic bullet with an elevated, icon-bearing track node */}
                  <div className="absolute -left-[43px] lg:-left-[59px] top-6 z-10 flex h-8 w-8 items-center justify-center bg-slate-800 border border-white/10 text-slate-400 group-hover:text-card-light-bg group-hover:border-card-light-bg transition-all duration-300 rounded-full scale-110 shadow-md">
                    <Award className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Main Card Body */}
                  <div className="flex flex-1 flex-col sm:flex-row sm:items-center justify-between gap-6 border border-white/10 bg-slate-700 backdrop-blur-md p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:bg-slate-600/50 hover:border-primary/40 shadow-[0_15px_35px_rgba(0,0,0,0.2)]">
                    <div className="relative z-0">
                      <span className="inline-block px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-slate-400 rounded-md">
                        {award.year}
                      </span>

                      {/* Fixed: group-hover target updated to point to a clean color match */}
                      <h4 className="mt-3 text-lg lg:text-xl font-black text-white tracking-tight group-hover:text-card-light-bg transition-colors duration-300">
                        {award.title}
                      </h4>

                      <p className="mt-1 text-sm text-slate-400/80">
                        {award.organization}
                      </p>
                    </div>

                    {/* Elegant Rounded Image Enclosure */}
                    <div className="relative h-16 w-16 shrink-0 border-2 border-slate-600 bg-white rounded-full self-start sm:self-auto overflow-hidden shadow-inner transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={award.logo}
                        alt={award.title}
                        fill
                        className="object-cover p-0.5 rounded-full grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote - Optimized for Light Background Layouts */}
        <div className="mx-auto mt-24 max-w-7xl border border-slate-200 bg-card-light-bg p-8 md:p-12 rounded-full relative overflow-hidden shadow-2xl">
          {/* Right brand accent border strip */}
          {/* <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-primary rounded-full" /> */}

          <div className="md:flex md:items-center md:gap-8 pl-4">
            {/* Badge adjusted to a soft light surface instead of bg-black/40 */}
            <div className="mb-4 md:mb-0 flex-shrink-0">
              <span className="inline-block border border-slate-500 bg-white px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-700 rounded-lg shadow-xs">
                Core Mission
              </span>
            </div>

            {/* Text color deepened from text-slate-300 to text-slate-700 for crisp readability */}
            <div className="max-w-4xl">
              <p className="text-base lg:text-lg leading-relaxed font-semibold text-slate-700 italic">
                "Every recognition we receive is a reflection of our unwavering
                commitment to academic excellence, compassionate healthcare
                education, and the success of our students."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
