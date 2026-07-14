"use client";

import { stats } from "@/utils/stats";

const StatsSection = () => {
  return (
    <section className="relative bg-background-dark/1 pb-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-full px-6 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-xl border border-white/10 bg-gradient-to-br from-primary to-primary-dark backdrop-blur-xl p-6 text-center transition-all duration-500 hover:scale-105 hover:bg-black"
            >
              <h4 className="text-4xl font-bold text-white">
                {stat.value}
              </h4>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;