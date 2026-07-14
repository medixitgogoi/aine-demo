import Image from "next/image";
import { ArrowRight, MessageSquare } from "lucide-react";
import SectionHeader from "@/components/section/SectionHeader";
import PrimaryCta from "@/components/button/PrimaryCta";
import Link from "next/link";
import StatsSection from "./StatsSection";

const stats = [
  { value: "761+", label: "B.Sc Nursing Graduates" },
  { value: "255+", label: "M.Sc Nursing Graduates" },
  { value: "7+", label: "NPCC Graduates" },
  { value: "307+", label: "Post Basic B.Sc Nursing" },
];

const AboutSection = () => {
  return (
    <section className="bg-background-dark/1 py-28">
      <div className="container-custom px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* ================= LEFT ================= */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute -left-8 -top-8 h-full w-full rounded-[32px] bg-secondary" />

            {/* Main Image */}
            <div className="relative group overflow-hidden rounded-4xl border-4 border-[#fff] shadow-xl transition duration-500 ease-out  bg-card">
              <Image
                src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg"
                alt="AINE Students"
                width={700}
                height={800}
                className="h-[620px] w-full object-cover transition duration-500 group-hover:scale-105"
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
            {/* <span className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About AINE
            </span> */}
            <SectionHeader text="About AINE" />

            {/* Heading */}
            <h2 className="mt-6 max-w-xl text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Empowering future healthcare professionals{" "}
              <span className="text-primary">
                through excellence in nursing education.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Established in 2004, the Asian Institute of Nursing Education
              (AINE) is the first private nursing institute in Northeast India.
              Recognized by the Indian Nursing Council, AINE has consistently
              delivered quality nursing education backed by strong academic
              values and clinical excellence.
            </p>

            {/* <p className="mt-6 text-lg leading-8 text-muted-foreground font-regular">
              With experienced faculty, advanced laboratories, hospital
              partnerships, and a student-first learning environment, AINE
              prepares compassionate and highly skilled nurses ready to serve
              communities across India and around the world.
            </p> */}

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-4">
              <PrimaryCta href="/about" text="Discover AINE" />

              {/* Secondary CTA */}
              {/* Secondary CTA */}
              <Link
                href="/contact"
                className="px-5 py-2.5 cursor-pointer rounded-lg border transition-all duration-300 font-bold tracking-wide text-xs flex items-center justify-center gap-2
  border-gray-300 text-gray-800 bg-gray-50/50
  hover:bg-white/80 hover:text-gray-900 hover:border-gray-300
  active:scale-[0.98]"
              >
                <MessageSquare className="size-3.5 text-gray-500 transition-colors group-hover:text-gray-900" />
                Contact Us
              </Link>
              {/* <a
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
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
