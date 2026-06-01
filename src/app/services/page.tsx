import React from "react";
import Link from "next/link";
import { ArrowRight, Drill, Leaf, Activity, Radar, Layers, Shield } from "lucide-react";
import { services, ServiceCategory } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Spiral Constructions' full range of specialist services: geotechnical drilling, environmental drilling, monitoring well installation, GPR surveys, ground investigation, and contaminated land remediation.",
};

const iconMap: Record<string, React.ElementType> = {
  Drill,
  Leaf,
  Activity,
  Radar,
  Layers,
  Shield,
};

const categories: { label: ServiceCategory; description: string }[] = [
  {
    label: "Geotechnical",
    description: "Subsurface investigation and in-situ testing for construction and infrastructure",
  },
  {
    label: "Environmental",
    description: "Contamination assessment, Phase II ESA, and remediation services",
  },
  {
    label: "Survey",
    description: "Non-invasive GPR surveying and precision datum surveys",
  },
  {
    label: "Monitoring",
    description: "Monitoring well installation and long-term groundwater monitoring",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="bg-[#002B5C] py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#0080CC]" />
            <span className="text-[#0080CC] text-sm font-semibold uppercase tracking-widest">
              Services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 max-w-2xl">
            Specialized Field Support for Environmental Projects
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            From single boreholes to complex multi-site national programmes — we deliver
            the full spectrum of ground investigation and environmental services with
            precision, professionalism, and proven expertise.
          </p>
        </div>
      </section>

      {/* Category overview */}
      <section className="bg-[#F5F7FA] py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {categories.map((cat) => (
              <div key={cat.label} className="bg-white p-6">
                <h3 className="font-bold text-[#002B5C] text-sm uppercase tracking-wide mb-2">
                  {cat.label}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gray-100">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Drill;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group bg-white hover:bg-[#002B5C] transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Image placeholder */}
                  {/* IMAGE INSTRUCTION: Add service images in /public/images/services/ */}
                  {/* Filename from services.ts heroImage field, e.g. geotechnical-drilling.jpg */}
                  <div className="relative h-48 overflow-hidden bg-[#003F80]">
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${service.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001A4E]/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#0055A5]/90 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide">
                        {service.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <span className="text-xs font-bold text-gray-300 group-hover:text-white/30 mb-3 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-[#002B5C] group-hover:text-white text-lg mb-3 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-white/70 leading-relaxed flex-1 transition-colors">
                      {service.shortDescription}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-[#0055A5] group-hover:text-white text-sm font-semibold transition-colors">
                      View service details
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F5F7FA] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#002B5C]">
              Not sure which service you need?
            </h2>
            <p className="text-gray-500 mt-1 text-sm">
              Our technical team is happy to discuss your project and recommend the right approach.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-[#0055A5] text-white font-semibold px-7 py-3.5 hover:bg-[#002B5C] transition-colors"
          >
            Talk to an Expert <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
