import Image from "next/image";
import { Quote, ArrowUpRight } from "lucide-react";

export default function MessageDesk() {
  return (
    <section className="bg-white py-32 px-15">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.35em]">
            From the Desk
          </span>

          <div className="mt-5 h-px w-20 bg-primary" />

          <h2 className="mt-8 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            A Message from the Principal
          </h2>
        </div>

        {/* Content */}
        <div className="mt-20 grid gap-20 lg:grid-cols-[1fr_360px]">
          {/* Message */}
          <div className="relative">
            {/* Decorative Quote */}
            <Quote className="absolute -top-20 left-0 h-20 w-20 text-primary/10" />

            <div className="relative rounded-[36px] border border-slate-200 bg-[#FAF8F3] p-10 lg:p-14">
              <p className="text-2xl font-medium leading-relaxed text-slate-900 lg:text-3xl">
                At Asian Institute of Nursing Education, we believe that nursing
                is more than a profession—it is a lifelong commitment to
                compassion, excellence, and service to humanity.
              </p>

              <div className="mt-10 space-y-6 text-lg leading-9 text-slate-600">
                <p>
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

          {/* Profile Card */}
          <aside className="self-end">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/about/about-1.jpg"
                  alt="Principal"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <p className="text-2xl font-bold text-slate-900">
                  Dr. ABC XYZ
                </p>

                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-primary">
                  Principal
                </p>

                <div className="my-6 h-px bg-slate-200" />

                <p className="leading-8 text-slate-600">
                  Dedicated to building a culture of academic excellence,
                  innovation, ethical practice, and compassionate nursing
                  education.
                </p>

                <button className="group mt-8 inline-flex items-center gap-2 font-semibold text-primary">
                  View Profile

                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}