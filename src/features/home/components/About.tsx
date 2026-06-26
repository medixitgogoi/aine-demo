import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "761+", label: "B.Sc Nursing Graduates" },
  { value: "255+", label: "M.Sc Nursing Graduates" },
  { value: "7+", label: "NPCC Graduates" },
  { value: "307+", label: "Post Basic B.Sc Nursing" },
];

const AboutSection = () => {
  return (
    <section className="bg-background py-28">
      <div className="container-custom px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* ================= LEFT ================= */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute -left-8 -top-8 h-full w-full rounded-[32px] bg-secondary" />

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[32px] border border-border bg-card shadow-xl">
              <Image
                src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg"
                alt="AINE Students"
                width={700}
                height={800}
                className="h-[620px] w-full object-cover"
              />
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute -bottom-8 left-8 rounded-3xl border border-border bg-card px-8 py-6 shadow-xl">
              <p className="text-4xl font-bold text-primary">20+</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div>
            {/* Badge */}
            <span className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About AINE
            </span>

            {/* Heading */}
            <h2 className="mt-6 max-w-xl text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Empowering future{" "}
              <span className="text-primary">healthcare professionals</span>{" "}
              through excellence in nursing education.
            </h2>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Established in 2004, the Asian Institute of Nursing Education
              (AINE) is the first private nursing institute in Northeast India.
              Recognized by the Indian Nursing Council, AINE has consistently
              delivered quality nursing education backed by strong academic
              values and clinical excellence.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              With experienced faculty, advanced laboratories, hospital
              partnerships, and a student-first learning environment, AINE
              prepares compassionate and highly skilled nurses ready to serve
              communities across India and around the world.
            </p>

            {/* Statistics */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                >
                  <h3 className="text-3xl font-bold text-primary">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-xl bg-button-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:bg-button-primary-hover hover:shadow-lg"
              >
                Apply Now
                <ArrowRight size={18} />
              </a>

              <a
                href="#courses"
                className="inline-flex items-center rounded-xl border border-border bg-orange px-7 py-3.5 font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;