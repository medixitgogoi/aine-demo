"use client";

import SectionHeader from "@/components/section/SectionHeader";
import { adminStaff } from "@/utils/admin";
import { GraduationCap, Mail, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Administration = () => {
  return (
    <section className="bg-background-dark min-h-screen w-full pt-45 text-white/90 relative overflow-hidden">
      {/* Background ambient light effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-dark/10 rounded-full blur-[150px]" />
      </div>

      {/* HERO SECTION */}
      <div className="relative z-10 px-6 text-center flex flex-col items-center justify-center max-w-4xl mx-auto">
        <SectionHeader text="Administrative Team" />

        <h1 className="text-4xl mt-10 sm:text-5xl font-black tracking-tight bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
          Administration
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base text-white/60 leading-relaxed font-medium">
          Meet the administrative backbone of AINE, dedicated to ensuring smooth
          operations and a student-first environment.
        </p>
      </div>

      {/* ADMINISTRATIVE STAFF GRID */}
      <div className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {adminStaff.map((staff, index) => (
            <div
              key={index}
              className="group relative w-full rounded-2xl border border-white/20 bg-card-light-bg p-4 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_25px_50px_-12px_rgba(13,27,69,0.4)]"
            >
              {/* Top accent light rail using your primary brand color on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Profile Image Wrap with clean light-theme inset framing */}
                  <div className="relative w-full h-64 bg-slate-900/10 rounded-xl overflow-hidden shadow-inner">
                    <Image
                      src={staff.image}
                      alt={staff.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-w-7xl) 25vw"
                    />

                    {/* Icon Badge - Elegant treatment on the light image area */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-xl border border-white/40 shadow-sm z-10">
                      <UserCheck className="w-4 h-4 text-primary-dark" />
                    </div>
                  </div>

                  {/* Staff Details Card Content */}
                  <div className="pt-5 px-2 text-center">
                    {/* Deep midnight text color to pierce beautifully through light blue */}
                    <h3 className="text-lg font-extrabold text-slate-950 tracking-wide transition-colors duration-300 group-hover:text-primary-dark">
                      {staff.name}
                    </h3>

                    {/* Qualification: Tinted dark slate blue for crisp contrast without muddying */}
                    <p className="text-xs font-semibold text-slate-800/80 mt-1 line-clamp-1">
                      {staff.qualification}
                    </p>

                    {/* Role Badge Container: Using a solid white overlay for stellar definition against #c0cdf5 */}
                    <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-lg bg-white/50 border border-white/40 shadow-xs transition-all duration-500 group-hover:bg-white/80">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-slate-800 group-hover:text-primary-dark transition-colors duration-500" />
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-800 group-hover:text-primary-dark transition-colors duration-500">
                          {staff.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clean Separated Card Meta Footer (Experience & Contact) */}
                {/* Changed border to white/30 to blend perfectly on top of the blue fill */}
                <div className="mt-6 pt-4 border-t border-white/30 flex items-center justify-between text-xs text-slate-800 w-full px-2">
                  <span className="font-bold tracking-wide bg-slate-950/10 text-slate-900 px-2 py-1 rounded-md text-[10px] uppercase">
                    {staff.experience}
                  </span>
                  <Link
                    href={`mailto:${staff.email}`}
                    className="flex items-center gap-1.5 transition-colors duration-300 text-slate-900 hover:text-primary-dark group/email"
                    title={staff.email}
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-800/80 group-hover/email:text-primary-dark transition-colors" />
                    <span className="truncate max-w-[110px] font-bold hidden sm:inline-block">
                      Email
                    </span>
                  </Link>
                </div>
              </div>

              {/* Bottom Interactive Accent Track */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Administration;
