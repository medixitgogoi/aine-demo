import Image from "next/image";
import { CheckCircle2, GraduationCap, HeartHandshake, ShieldCheck } from "lucide-react";

export default function AboutAINEPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* Hero */}
      <section className="relative h-[80vh] overflow-hidden px-5">
        <Image
          src="/images/about/about-1.jpg"
          alt="About AINE"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="container-custom relative z-10 flex h-full flex-col justify-center">
          <p className="text-white/80 text-sm uppercase tracking-[0.3em]">
            Asian Institute of Nursing Education
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-bold text-white">
            About AINE
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Empowering compassionate healthcare professionals through
            excellence in nursing education, ethical values, clinical
            competence, and lifelong learning.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="container-custom grid gap-16 lg:grid-cols-2 items-center">

          <div>
            <span className="text-primary font-semibold uppercase tracking-[0.25em]">
              About the Institute
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Nurturing Excellence in Nursing Education
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Assam Institute of Nursing Education (AINE) is committed to
                preparing highly skilled nursing professionals capable of
                delivering compassionate, ethical, and evidence-based healthcare.
              </p>

              <p>
                Through modern classrooms, simulation laboratories, experienced
                faculty, clinical exposure, and research-oriented learning, the
                institute develops students into confident professionals ready
                to serve society with integrity and competence.
              </p>

              <p>
                Our educational philosophy combines academic excellence,
                practical training, leadership development, and community
                engagement to create nurses who can meet the evolving needs of
                the healthcare industry.
              </p>
            </div>
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about/about-main.jpg"
              alt="Students at AINE"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* Mission Vision */}
      <section className="bg-slate-50 py-24">
        <div className="container-custom grid lg:grid-cols-2 gap-10">

          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <div className="flex items-center gap-4">
              <GraduationCap className="text-primary size-8" />
              <h3 className="text-3xl font-bold">
                Our Mission
              </h3>
            </div>

            <p className="mt-6 text-gray-600 leading-8">
              To provide quality nursing education that nurtures competent,
              compassionate, and ethical healthcare professionals through
              academic excellence, clinical practice, research, and community
              service.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-primary size-8" />
              <h3 className="text-3xl font-bold">
                Our Vision
              </h3>
            </div>

            <p className="mt-6 text-gray-600 leading-8">
              To become a centre of excellence in nursing education, producing
              globally competent professionals who contribute meaningfully to
              healthcare and society.
            </p>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-24">
        <div className="container-custom">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              ["700+", "Graduates"],
              ["20+", "Experienced Faculty"],
              ["100%", "Clinical Exposure"],
              ["15+", "Years of Academic Excellence"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl border p-10 text-center hover:shadow-lg transition"
              >
                <h3 className="text-5xl font-bold text-primary">
                  {number}
                </h3>

                <p className="mt-3 text-gray-600">
                  {label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-24">
        <div className="container-custom">

          <div className="max-w-3xl">
            <span className="text-primary uppercase tracking-[0.25em] font-semibold">
              Our Values
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Principles That Guide Everything We Do
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">

            {[
              {
                title: "Compassionate Care",
                desc: "Providing patient-centred care with empathy and respect.",
              },
              {
                title: "Integrity",
                desc: "Maintaining honesty, professionalism, and ethical conduct.",
              },
              {
                title: "Academic Excellence",
                desc: "Encouraging lifelong learning and continuous improvement.",
              },
              {
                title: "Community Service",
                desc: "Serving society through healthcare education and outreach.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <CheckCircle2 className="text-primary size-8" />

                <h3 className="mt-6 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-custom">

          <div className="rounded-[36px] bg-primary px-10 py-16 text-center">

            <HeartHandshake className="mx-auto mb-6 text-white size-12" />

            <h2 className="text-4xl font-bold text-white">
              Begin Your Journey with AINE
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Join an institution dedicated to academic excellence, professional
              ethics, and compassionate healthcare. Shape your future while
              making a meaningful impact on society.
            </p>

            <button className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-primary transition hover:scale-105">
              Apply for Admission
            </button>

          </div>

        </div>
      </section>

    </main>
  );
}