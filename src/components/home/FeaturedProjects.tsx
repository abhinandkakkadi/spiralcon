"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";

const featured = getFeaturedProjects();

export default function FeaturedProjects() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + featured.length) % featured.length);
  const next = () => setCurrent((c) => (c + 1) % featured.length);

  return (
    <section className="py-20 md:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#0055A5]" />
              <span className="text-[#0055A5] text-sm font-semibold uppercase tracking-widest">
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#002B5C] leading-tight">
              Projects That Define
              <br />
              Our Capability
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#0055A5] hover:text-[#0055A5] transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#0055A5] hover:text-[#0055A5] transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 text-[#0055A5] font-semibold hover:gap-3 transition-all text-sm"
            >
              All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 bg-gray-200">
          {featured.map((project, index) => {
            const isActive = index === current;
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden transition-all duration-500"
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden transition-all duration-500 ${
                    isActive ? "h-80" : "h-64"
                  }`}
                >
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive ? "bg-[#002B5C]" : "bg-[#003F80]"
                    }`}
                  >
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.heroImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001A4E]/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0055A5] text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide">
                      {project.tags[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white p-6 group-hover:bg-[#002B5C] transition-colors duration-300">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-white/50 mb-3 transition-colors">
                    <MapPin size={11} />
                    <span className="mx-1">·</span>
                  </div>
                  <h3 className="font-bold text-[#002B5C] group-hover:text-white text-base leading-snug mb-3 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-white/70 line-clamp-2 transition-colors">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#0055A5] text-white font-semibold px-6 py-3 text-sm"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
