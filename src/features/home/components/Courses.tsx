"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  Award,
  Stethoscope,
  HeartHandshake,
  Activity,
} from "lucide-react";
import SectionHeader from "@/components/section/SectionHeader";

const coursesData = [
  {
    title: "B. Sc. Nursing",
    description:
      "The B. Sc. Nursing is an undergraduate degree programme of 4 years",
    href: "/courses/bsc-nursing",
    icon: GraduationCap,
    badge: "Undergraduate",
    duration: "4 Years",
  },
  {
    title: "M. Sc. Nursing",
    description:
      "Enrich the knowledge of a professional nurse to fulfill the societal needs and demands.",
    href: "/courses/msc-nursing",
    icon: Award,
    badge: "Postgraduate",
    duration: "2 Years",
  },
  {
    title: "Post Basic B.Sc. Nursing",
    description:
      "An undergraduate programme leading to degree of Science in Nursing.",
    href: "/courses/post-basic-bsc-nursing",
    icon: Stethoscope,
    badge: "Post Basic",
    duration: "2 Years",
  },
  {
    title: "GNM",
    description:
      "Excel in the practice of nursing with comprehensive education.",
    href: "/courses/gnm",
    icon: HeartHandshake,
    badge: "Diploma",
    duration: "3.5 Years",
  },
  {
    title: "Nurse Practitioner In Critical Care",
    description:
      "It prepares registered BSc nurses for advanced practice roles as clinical experts, managers, educators..",
    href: "/courses/npcc",
    icon: Activity,
    badge: "Specialization",
    duration: "2 Years",
  },
];

const Courses = () => {
  return (
    <section className="relative w-full bg-background-dark/1 py-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-12 left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-12 right-[-10%] w-[500px] h-[500px] bg-primary-dark/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Section Header Block */}
          <div className="flex flex-col justify-center p-4">
            <SectionHeader text="Our Courses" />
            <h2 className="mt-8 text-3xl md:text-4xl font-black tracking-tight text-primary-dark leading-tight">
              Nursing knowledge starts here.
            </h2>
            <p className="mt-4 text-sm font-medium text-neutral-600 leading-relaxed max-w-sm">
              Discover specialized programs tailored to build world-class
              nursing skills, leadership, and clinical expertise.
            </p>
          </div>

          {/* Course Cards */}
          {coursesData.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between w-full min-h-[280px] rounded-2xl border border-primary/10 bg-white p-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]"
              >
                {/* Background Large Index Number */}
                <span className="absolute bottom-16 right-6 text-7xl font-black text-neutral-100 select-none pointer-events-none transition-colors duration-500 group-hover:text-primary/5">
                  0{index + 1}
                </span>

                <div>
                  {/* Card Header Elements (Icon + Tag Badge) */}
                  <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                    <div className="flex items-center justify-center p-3 rounded-xl bg-primary/5 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                      <IconComponent className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-wider uppercase bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-md">
                        {course.badge}
                      </span>
                    </div>
                  </div>

                  {/* Course Title */}
                  <h4 className="text-xl font-bold tracking-tight text-primary-dark group-hover:text-primary transition-colors duration-300 relative z-10">
                    {course.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2.5 text-sm leading-relaxed text-neutral-500 line-clamp-3 relative z-10">
                    {course.description}
                  </p>
                </div>

                {/* Bottom Interactive Trigger Area */}
                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between relative z-10">
                  <Link
                    href={course.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-primary-dark transition-colors duration-300 group-hover:text-primary"
                  >
                    Read More
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  {/* Meta Detail Info */}
                  <span className="text-xs font-medium text-neutral-400">
                    {course.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
