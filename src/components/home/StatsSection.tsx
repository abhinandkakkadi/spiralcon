"use client";

import React from "react";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "20+", label: "States Across India" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#0055A5] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0055A5] px-8 py-10 text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
