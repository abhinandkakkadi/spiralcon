"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Drill, Leaf, Activity, Radar, Layers, Shield } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Drill,
  Leaf,
  Activity,
  Radar,
  Layers,
  Shield,
};

export default function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#0055A5]" />
              <span className="text-[#0055A5] text-sm font-semibold uppercase tracking-widest">
                What We Do
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#002B5C] leading-tight">
              Specialized Field Support for 
              <br />
              Environmental Projects
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We bring technical depth, extensive field experience, and modern equipment to every project, enabling us to deliver reliable, efficient, and high-quality environmental services. Our skilled teams support site investigations, environmental monitoring, sampling programs, and remediation activities while maintaining strict compliance with health, safety, and environmental standards. By combining practical expertise with advanced technologies, we help environmental consultancies achieve project objectives safely, accurately, and sustainably.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#0055A5] font-semibold hover:gap-3 transition-all text-sm shrink-0"
          >
            All Services <ArrowRight size={16} />
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gray-100">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Drill;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-white p-8 hover:bg-[#002B5C] transition-all duration-300 flex flex-col"
              >
                {/* Number */}
                <span className="text-xs font-bold text-gray-300 group-hover:text-white/30 mb-6 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 bg-[#E8F4FD] group-hover:bg-white/10 flex items-center justify-center mb-6 transition-colors">
                  <Icon size={22} className="text-[#0055A5] group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#002B5C] group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 group-hover:text-white/70 leading-relaxed flex-1 transition-colors line-clamp-3">
                  {service.shortDescription}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-[#0055A5] group-hover:text-white text-sm font-semibold transition-colors">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
