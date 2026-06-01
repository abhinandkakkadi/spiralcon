"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Search, X } from "lucide-react";
import { projects, projectCategories, ProjectCategory } from "@/data/projects";
import { Input } from "@/components/ui/input";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
        p.shortDescription.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

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

      {/* Filter bar */}
      <section className="bg-white border-b border-gray-200 sticky top-[88px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-9 text-sm border-gray-200 focus-visible:ring-[#0055A5]"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  activeCategory === "All"
                    ? "bg-[#002B5C] text-white"
                    : "border border-gray-200 text-gray-500 hover:border-[#0055A5] hover:text-[#0055A5]"
                }`}
              >
                All
              </button>
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    activeCategory === cat
                      ? "bg-[#002B5C] text-white"
                      : "border border-gray-200 text-gray-500 hover:border-[#0055A5] hover:text-[#0055A5]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results count */}
            <span className="text-xs text-gray-400 ml-auto shrink-0">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-12 md:py-16 bg-[#F5F7FA] min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg font-medium">No projects found</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="mt-4 text-[#0055A5] text-sm font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gray-200">
              {filtered.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="group bg-white hover:bg-[#002B5C] transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  {/* IMAGE INSTRUCTION: Project images go in /public/images/projects/ */}
                  {/* Filenames match project.heroImage field */}
                  {/* Recommended: 800x500px landscape */}
                  <div className="relative h-52 overflow-hidden bg-[#002B5C]">
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
                      style={{ backgroundImage: `url(${project.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001A4E]/70 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#0055A5] text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/30 text-white/80 text-xs font-medium px-2 py-0.5">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-white/50 mb-3 transition-colors">
                      <MapPin size={11} />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-bold text-[#002B5C] group-hover:text-white text-base leading-snug mb-3 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-500 group-hover:text-white/70 line-clamp-2 leading-relaxed flex-1 transition-colors">
                      {project.shortDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-[#0055A5] group-hover:text-white/60 bg-[#E8F4FD] group-hover:bg-white/10 px-2 py-0.5 font-medium transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-1.5 text-[#0055A5] group-hover:text-white text-sm font-semibold transition-colors">
                      Read more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
