"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((index + projects.length) % projects.length);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const indices = [
    (current - 1 + projects.length) % projects.length,
    current,
    (current + 1) % projects.length,
  ];

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
              Our Work
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">
            How We Deliver Our Projects
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Supporting environmental consultancies across India with site investigations, soil and groundwater sampling, utility clearance surveys, environmental monitoring, and remediation support services. Our projects are delivered with a strong commitment to safety, quality, and technical excellence.
          </p>
        </div>
      </section>

      {/* Slideshow */}
      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-[#0055A5]" />
                <span className="text-[#0055A5] text-sm font-semibold uppercase tracking-widest">
                  All Projects
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
                className="w-11 h-11 border border-gray-300 flex items-center justify-center hover:border-[#0055A5] hover:text-[#0055A5] transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 border border-gray-300 flex items-center justify-center hover:border-[#0055A5] hover:text-[#0055A5] transition-colors"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
              <span className="text-sm text-gray-400 ml-2">
                {current + 1} / {projects.length}
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 bg-gray-200">
            {indices.map((projectIndex, slot) => {
              const project = projects[projectIndex];
              const isActive = slot === 1;
              return (
                <div
                  key={`${projectIndex}-${slot}`}
                  className="group relative overflow-hidden bg-white"
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden transition-all duration-500 ${
                      isActive ? "h-[420px]" : "h-64"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[#002B5C]">
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
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`p-6 transition-colors duration-300 ${
                      isActive ? "bg-[#002B5C]" : "bg-white group-hover:bg-[#002B5C]"
                    }`}
                  >
                    <h3
                      className={`font-bold text-base leading-snug mb-3 transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-[#002B5C] group-hover:text-white"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm line-clamp-3 leading-relaxed transition-colors ${
                        isActive
                          ? "text-white/70"
                          : "text-gray-500 group-hover:text-white/70"
                      }`}
                    >
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`transition-all duration-300 h-1.5 ${
                  index === current
                    ? "w-8 bg-[#0055A5]"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
