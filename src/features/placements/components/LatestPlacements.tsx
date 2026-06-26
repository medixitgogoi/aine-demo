"use client"

import Image from "next/image";
import { ArrowUpRight, MapPin, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const placements = [
  {
    name: "Priya Sharma",
    course: "B.Sc Nursing",
    company: "Apollo Hospitals",
    designation: "Staff Nurse",
    package: "₹5.8 LPA",
    batch: "Batch of 2025",
    type: "Campus Placement",
    location: "New Delhi",
    image: "/images/about/about-1.jpg",
  },
  {
    name: "Rahul Das",
    course: "GNM",
    company: "Fortis Healthcare",
    designation: "Registered Nurse",
    package: "₹4.9 LPA",
    batch: "Batch of 2025",
    type: "Campus Placement",
    location: "Gurugram",
    image: "/images/about/about-1.jpg",
  },
  {
    name: "Ananya Roy",
    course: "B.Sc Nursing",
    company: "Manipal Hospitals",
    designation: "ICU Nurse",
    package: "₹5.4 LPA",
    batch: "Batch of 2025",
    type: "Direct Recruitment",
    location: "Bengaluru",
    image: "/images/about/about-1.jpg",
  },
  {
    name: "Ritika Singh",
    course: "Post Basic B.Sc",
    company: "Max Healthcare",
    designation: "Clinical Nurse",
    package: "₹5.2 LPA",
    batch: "Batch of 2024",
    type: "Campus Placement",
    location: "Noida",
    image: "/images/about/about-1.jpg",
  },
  {
    name: "Sanjay Bora",
    course: "GNM",
    company: "Narayana Health",
    designation: "Ward Nurse",
    package: "₹4.8 LPA",
    batch: "Batch of 2025",
    type: "Campus Placement",
    location: "Kolkata",
    image: "/images/about/about-1.jpg",
  },
  {
    name: "Megha Patel",
    course: "M.Sc Nursing",
    company: "AIIMS",
    designation: "Nursing Officer",
    package: "₹7.2 LPA",
    batch: "Batch of 2024",
    type: "Government Recruitment",
    location: "New Delhi",
    image: "/images/about/about-1.jpg",
  },
  {
    name: "Neha Kalita",
    course: "B.Sc Nursing",
    company: "Medanta",
    designation: "Emergency Nurse",
    package: "₹5.6 LPA",
    batch: "Batch of 2025",
    type: "Campus Placement",
    location: "Lucknow",
    image: "/images/about/about-1.jpg",
  },
  {
    name: "Arjun Verma",
    course: "GNM",
    company: "Care Hospitals",
    designation: "Staff Nurse",
    package: "₹4.7 LPA",
    batch: "Batch of 2025",
    type: "Campus Placement",
    location: "Hyderabad",
    image: "/images/about/about-1.jpg",
  },
];

export default function LatestPlacements() {
  const featured = placements[0];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-background pb-28 px-15">
      <div className="container-custom">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.35em]">
            Latest Placements
          </span>

          <div className="mx-auto mt-5 h-px w-20 bg-primary" />

          <h2 className="mt-8 text-5xl font-bold text-slate-900">
            Our Students,
            <br />
            Our Greatest Achievement
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Every placement reflects our commitment to nurturing compassionate,
            skilled and industry-ready healthcare professionals.
          </p>
        </div>

        {/* Featured */}
        <div className="mt-24 overflow-hidden rounded-[36px] bg-white shadow-sm">
          <div className="grid lg:grid-cols-[340px_1fr]">
            <div className="relative h-full">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-12 lg:p-16">
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-semibold">
                Featured Placement
              </span>

              <h3 className="mt-6 text-4xl font-bold text-slate-900">
                {featured.name}
              </h3>

              <p className="mt-3 text-lg text-slate-500">{featured.course}</p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <Briefcase className="text-primary h-5 w-5" />

                  <span className="text-lg text-slate-700">
                    {featured.company}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-primary h-5 w-5" />

                  <span className="text-lg text-slate-700">
                    {featured.location}
                  </span>
                </div>
              </div>

              <button className="group mt-12 inline-flex items-center gap-2 font-semibold text-primary">
                View Placement Story
                <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Other Placements */}
        <div className="mt-20">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
                More Success Stories
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                Recent Campus Placements
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white transition hover:border-amber-500 hover:bg-amber-500 hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => scroll("right")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white transition hover:border-amber-500 hover:bg-amber-500 hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            {placements.slice(1).map((student) => (
              <div
                key={student.name}
                className="min-w-[320px] max-w-[320px] snap-start group cursor-pointer shrink-0 pb-15"
              >
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur">
                      {student.batch}
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <div>
                      <h4 className="text-xl font-bold">{student.name}</h4>
                      <p className="mt-1 text-sm text-slate-500">
                        {student.course}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-slate-400">Designation</p>
                        <p className="font-semibold">{student.designation}</p>
                      </div>

                      <div>
                        <p className="text-slate-400">Package</p>
                        <p className="font-semibold text-emerald-600">
                          {student.package}
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-slate-200" />

                    <div>
                      <p className="font-semibold">{student.company}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        {student.location}
                      </p>
                    </div>

                    <div className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      {student.type}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
