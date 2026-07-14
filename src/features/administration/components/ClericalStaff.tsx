"use client";

import React from "react";
import Image from "next/image";
import { FileText, User, Mail } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/section/SectionHeader";
import { clericalStaff } from "@/utils/clericalStaff";

const ClericalStaff = () => {
  return (
    <section className="bg-background-dark/1 pb-24 pt-15 px-6 relative overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-primary-dark/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Upgraded Heading Blocks */}
        <div className="text-center mb-20 flex flex-col items-center">
          <SectionHeader text="Support Staff Team" />

          <h2 className="text-3xl mt-6 sm:text-4xl font-black tracking-tight text-neutral-900">
            Clerical Staff
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Our clerical staff ensure the smooth execution of daily operations,
            documentation, and essential support services across the
            institution.
          </p>
        </div>

        {/* Dense Large-Card Grid for 20-30 Members */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {clericalStaff.map((staff, index) => (
            <div
              key={index}
              className="group relative w-full rounded-2xl border border-neutral-200 bg-white p-5 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)]"
            >
              {/* Premium Top Hover Border Line Accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div>
                {/* Large Profile Image Frame with modern ring treatment */}
                <div className="relative w-full h-64 bg-neutral-100 rounded-xl overflow-hidden shadow-inner mb-5">
                  <Image
                    src={staff.image}
                    alt={staff.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-w-7xl) 25vw"
                  />
                </div>

                {/* Profile Card Information Details */}
                <div className="px-2 pb-2">
                  <h3 className="text-lg font-bold text-neutral-900 tracking-wide transition-colors duration-300 group-hover:text-primary">
                    {staff.name}
                  </h3>

                  {/* Role Meta Block */}
                  <div className="inline-flex items-center gap-1.5 mt-2.5 px-2.5 py-1 rounded-md bg-neutral-50 border border-neutral-200/60 text-neutral-500 transition-colors duration-500 group-hover:bg-primary/5 group-hover:border-primary/10 group-hover:text-primary">
                    <User className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {staff.role}
                    </span>
                  </div>

                  {/* Email Link Contact */}
                  <Link
                    href={`mailto:${staff.email}`}
                    className="flex items-center gap-2 text-xs text-neutral-400 mt-4 transition-colors duration-300 hover:text-primary break-all group/mail"
                  >
                    <Mail className="w-3.5 h-3.5 text-neutral-400 group-hover/mail:text-primary shrink-0" />
                    <span className="truncate underline decoration-transparent group-hover/mail:decoration-primary/30 transition-all font-medium">
                      {staff.email}
                    </span>
                  </Link>
                </div>
              </div>

              {/* Bottom Subtle Interaction Accent Line */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-linear-to-r from-transparent via-primary/30 to-transparent scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClericalStaff;
