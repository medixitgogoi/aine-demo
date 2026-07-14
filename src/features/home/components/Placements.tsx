"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; // Optional premium micro-interaction icon
import SectionHeader from "@/components/section/SectionHeader";

const placementsData = [
  {
    name: "Ms. Barasa Das",
    role: "Registered Nurse, Northwick Park,",
    location: "London Hospital, UK",
    image: "/images/placements/p-1.jpg", // Replace with your actual paths
  },
  {
    name: "Captain Prasthi Gurung",
    role: "Nursing Officer, Military Nursing",
    location: "Service",
    image: "/images/placements/p-1.jpg",
  },
  {
    name: "Ms. Rojibala Thongbam",
    role: "Nursing Officer, All India Institute of",
    location: "Medical Sciences (AIIMS), New Delhi",
    image: "/images/placements/p-1.jpg",
  },
  {
    name: "Ms. Upasana Rajkhowa", // Note: Adjust name if known fully, from screenshot cut-off
    role: "Nurse Executive, P.D Hinduja National",
    location: "Hospital & Medical Research Centre",
    image: "/images/placements/p-1.jpg",
  },
];

const Placements = () => {
  return (
    <section className="relative w-full bg-background-dark pb-24 pt-15 overflow-hidden">
      {/* Background radial highlight depth */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-primary/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center justify-center">
          <SectionHeader text="Student Placements" />
          <h2 className="mt-8 text-4xl md:text-5xl font-bold pb-2 max-w-6xl tracking-tight bg-linear-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Setting The Standard In Professional Nursing
          </h2>
          <p className="text-white/60 text-lg mt-2 max-w-4xl">
            Empowering nurses with excellence and real-world experience where skilled professionals begin their journey.
          </p>
        </div>

        {/* Profile Grid Layout */}
        <div className="grid w-full gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between">
          {placementsData.map((student, index) => (
            <div
              key={index}
              className="group relative w-full rounded-3xl border border-white/5 bg-linear-to-br from-card-light-bg to-white backdrop-blur-xl p-5 flex flex-col items-center text-center transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]"
            >
              {/* Card Hover Top Light Effect */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Circular Image Container with Modern Ring Gradient */}
              <div className="relative w-44 h-44 rounded-full p-1 bg-linear-to-b from-white/20 to-transparent group-hover:from-white/40 transition-all duration-500 mb-8 overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-white">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-w-7xl) 25vw"
                  />
                </div>
              </div>

              {/* Text Hierarchy Content */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="text-lg font-bold text-primary-dark tracking-wide transition-colors duration-300 group-hover:text-primary">
                    {student.name}
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[240px] mx-auto">
                    {student.role}
                    <span className="block opacity-90">{student.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/placements"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
          >
            Read More
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Placements;
