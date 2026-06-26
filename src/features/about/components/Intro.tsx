import Image from "next/image";
import { ArrowRight, Award, GraduationCap } from "lucide-react";

export default function Introduction() {
  return (
    <section className="bg-[#FAF8F3] py-28 px-15">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.35em]">
            About The Institute
          </span>

          <div className="mx-auto mt-5 h-px w-20 bg-primary" />

          <h2 className="mt-8 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Nurturing Healthcare Professionals with Knowledge, Compassion &
            Excellence
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
            Asian Institute of Nursing Education (AINE) is dedicated to shaping
            future nursing professionals through academic excellence, ethical
            values, practical learning, and compassionate healthcare education.
            Our institution combines rigorous classroom instruction with
            extensive clinical exposure to prepare graduates who are confident,
            skilled, and committed to serving society.
          </p>
        </div>

        {/* Content */}
        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">
          {/* Images */}
          <div className="relative">
            <div className="relative h-[620px] overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/images/about/about-1.jpg"
                alt="AINE Campus"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Small Image */}
            <div className="absolute -bottom-10 right-8 h-56 w-52 overflow-hidden rounded-3xl border-8 border-[#FAF8F3] shadow-2xl">
              <Image
                src="/images/about/about-1.jpg"
                alt="Students"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute left-8 top-8 rounded-3xl border border-white/40 bg-white/90 p-6 backdrop-blur-xl shadow-xl">
              <Award className="text-primary mb-3 h-8 w-8" />

              <p className="text-4xl font-bold text-slate-900">2004</p>

              <p className="mt-1 text-sm uppercase tracking-widest text-slate-500">
                Established
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.35em]">
              Excellence Since 2004
            </span>

            <h3 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
              Building Competent Nurses for an Evolving Healthcare World
            </h3>

            <div className="mt-8 space-y-6 text-lg leading-9 text-slate-600">
              <p>
                At AINE, education extends beyond classrooms. Students engage in
                simulation-based learning, community health programmes,
                interdisciplinary collaboration, and real-world clinical
                experiences that cultivate both professional competence and
                compassionate patient care.
              </p>

              <p>
                Guided by experienced faculty and supported by modern learning
                facilities, our graduates develop critical thinking, leadership,
                and evidence-based practice skills that prepare them to excel in
                diverse healthcare environments.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8 border-y border-slate-200 py-10">
              <div>
                <p className="text-4xl font-bold text-primary">700+</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
                  Graduates
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-primary">20+</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
                  Faculty Members
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-primary">100%</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
                  Clinical Exposure
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
                  Years of Excellence
                </p>
              </div>
            </div>

            {/* CTA */}
            {/* <button className="group mt-12 inline-flex items-center gap-3 font-semibold text-primary transition">
              <GraduationCap className="h-5 w-5" />

              Explore Our Academic Journey

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}