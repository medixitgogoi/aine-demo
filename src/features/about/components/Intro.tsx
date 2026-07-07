import React from "react";
import Image from "next/image";
import { Award, GraduationCap, Stethoscope, Users } from "lucide-react";
import SectionHeader from "@/components/section/SectionHeader";

export default function Introduction() {
  return (
    <section className="bg-background-dark/1 pb-28 px-6 md:px-15 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Layout: Images and Text Side-by-Side */}
        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side: Light-Theme 3D Interactive Images Wrapper */}
          <div className="group relative w-full [perspective:1500px] flex justify-center lg:justify-start">
            {/* Soft Ambient Background Glow */}
            <div className="absolute inset-0 max-w-[550px] rounded-[32px] bg-primary/10 blur-3xl opacity-60 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-80 pointer-events-none" />

            {/* Main 3D Container Card with a solid white frame look */}
            <div className="relative h-[480px] w-full max-w-[480px] md:h-[620px] rounded-[32px] bg-white border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] [transform-style:preserve-3d] [transform:translateZ(0px)] transition-all duration-700 ease-out group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.25)] group-hover:[transform:translateZ(40px)]">
              {/* Inner Picture Frame Container - forces border-radius containment during 3D transforms */}
              <div className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden mask-image-fix [transform:translateZ(0px)]">
                <div className="absolute inset-0 w-full h-full [transform:translateZ(0px)_scale(1)] transition-all duration-700 ease-out group-hover:[transform:translateZ(15px)_scale(1.06)]">
                  <Image
                    src="/images/about/about-1.jpg"
                    alt="AINE Campus"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Small Image Layer */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 h-48 w-44 md:h-56 md:w-52 overflow-hidden rounded-3xl border-8 border-white shadow-[0_20px_40px_rgba(0,0,0,0.2)] [transform:translateZ(0px)] transition-all duration-700 ease-out group-hover:[transform:translateZ(80px)_translateY(-10px)_translateX(10px)]">
              <Image
                src="/images/about/about-1.jpg"
                alt="Students"
                fill
                className="object-cover rounded-3xl"
              />
            </div>

            {/* Floating Glassmorphic Milestone Card */}
            <div className="absolute left-4 md:left-8 top-8 rounded-3xl border border-white/60 bg-white/80 p-5 md:p-6 backdrop-blur-xl shadow-xl [transform:translateZ(0px)] transition-all duration-700 ease-out group-hover:[transform:translateZ(100px)_translateY(10px)_translateX(-10px)]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                  <Award className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    2004
                  </p>
                  <p className="mt-0.5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">
                    Established
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Clean High-Contrast Typography */}
          <div className="lg:pl-4">
            <SectionHeader text="Excellence Since 2004" />

            <h3 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
              Building Competent Nurses for an Evolving Healthcare World
            </h3>

            <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-slate-600">
              <p className="font-semibold text-slate-800 border-l-2 border-primary pl-4">
                At AINE, education extends beyond classrooms. Students engage in
                simulation-based learning, community health programmes,
                interdisciplinary collaboration, and real-world clinical
                experiences that cultivate both professional competence and
                compassionate patient care.
              </p>

              <p className="font-normal text-slate-500 text-base">
                Guided by experienced faculty and supported by modern learning
                facilities, our graduates develop critical thinking, leadership,
                and evidence-based practice skills that prepare them to excel in
                diverse healthcare environments.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Layout: Full-Width Horizontal Light Stats Cards Row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Graduates", val: "700+", icon: GraduationCap },
            { label: "Faculty Members", val: "20+", icon: Users },
            { label: "Clinical Exposure", val: "100%", icon: Stethoscope },
            { label: "Years of Excellence", val: "20+", icon: Award },
          ].map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <div
                key={idx}
                className="group/card flex items-stretch gap-4 p-4 rounded-2xl bg-primary hover:bg-primary/90 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center min-w-[56px] rounded-xl bg-white/10">
                  <Icon className="h-6 w-6 text-white transition-transform duration-300 group-hover/card:scale-110" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <p className="text-2xl md:text-3xl font-black text-white transition-transform duration-300 group-hover/card:scale-105">
                    {stat.val}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
