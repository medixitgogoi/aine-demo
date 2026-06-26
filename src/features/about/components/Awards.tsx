import Image from "next/image";
import { Award, ArrowUpRight } from "lucide-react";

const awards = [
  {
    title: "Best Nursing Institution",
    organization: "Government of Assam",
    year: "2024",
    logo: "/images/about/about-1.jpg",
  },
  {
    title: "Excellence in Nursing Education",
    organization: "Indian Nursing Council",
    year: "2023",
    logo: "/images/about/about-1.jpg",
  },
  {
    title: "Outstanding Academic Performance",
    organization: "SSUHS",
    year: "2022",
    logo: "/images/about/about-1.jpg",
  },
  {
    title: "Community Healthcare Excellence",
    organization: "Assam Health Department",
    year: "2021",
    logo: "/images/about/about-1.jpg",
  },
];

export default function Awards() {
  return (
    <section className="bg-white py-32">
      <div className="container-custom">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.35em]">
            Awards & Achievements
          </span>

          <div className="mx-auto mt-5 h-px w-20 bg-primary" />

          <h2 className="mt-8 text-5xl font-bold leading-tight text-slate-900">
            Recognising Our Journey of
            <br />
            Excellence
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Our achievements reflect years of dedication to academic quality,
            professional ethics, and excellence in nursing education.
          </p>
        </div>

        {/* Content */}

        <div className="mt-24 grid gap-20 lg:grid-cols-[520px_1fr]">
          {/* Featured Award */}

          <div className="relative overflow-hidden rounded-[36px] bg-[#FAF8F3] p-12">
            <div className="absolute right-10 top-10 opacity-5">
              <Award className="h-44 w-44" />
            </div>

            <div className="relative mx-auto h-40 w-40">
              <Image
                src={awards[0].logo}
                alt={awards[0].title}
                fill
                className="object-contain"
              />
            </div>

            <p className="mt-10 text-sm uppercase tracking-[0.3em] text-primary">
              Featured Recognition
            </p>

            <h3 className="mt-4 text-3xl font-bold text-slate-900">
              {awards[0].title}
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Awarded by <strong>{awards[0].organization}</strong> in{" "}
              <strong>{awards[0].year}</strong> in recognition of outstanding
              contribution towards nursing education and institutional
              excellence.
            </p>

            <button className="group mt-10 inline-flex items-center gap-2 font-semibold text-primary">
              Learn More

              <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          {/* Timeline */}

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-slate-200" />

            <div className="space-y-12">
              {awards.map((award, index) => (
                <div
                  key={award.title}
                  className="group relative flex gap-8"
                >
                  <div className="relative z-10 mt-4 h-8 w-8 rounded-full border-4 border-[#FAF8F3] bg-primary" />

                  <div className="flex flex-1 items-center justify-between rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-primary">
                        {award.year}
                      </p>

                      <h4 className="mt-3 text-2xl font-semibold text-slate-900">
                        {award.title}
                      </h4>

                      <p className="mt-3 text-slate-600">
                        {award.organization}
                      </p>
                    </div>

                    <div className="relative h-20 w-20 shrink-0">
                      <Image
                        src={award.logo}
                        alt={award.title}
                        fill
                        className="object-contain grayscale transition duration-300 group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote */}

        <div className="mx-auto mt-28 max-w-4xl border-t border-slate-200 pt-10 text-center">
          <p className="text-lg italic leading-9 text-slate-600">
            "Every recognition we receive is a reflection of our unwavering
            commitment to academic excellence, compassionate healthcare
            education, and the success of our students."
          </p>
        </div>
      </div>
    </section>
  );
}