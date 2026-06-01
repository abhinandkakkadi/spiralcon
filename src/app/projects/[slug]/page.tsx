import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, MapPin, Calendar, User, Tag } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Get service names
  const serviceLinks = project.services
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);

  // Related projects (same category, different slug)
  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="relative bg-[#002B5C] min-h-[420px] flex items-end overflow-hidden">
        {/* IMAGE INSTRUCTION: Project hero image */}
        {/* File location matches project.heroImage — e.g. /public/images/projects/metro-rail.jpg */}
        {/* Recommended: 1920x800px */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
              backgroundSize: "30px 30px",
            }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${project.heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001A4E] via-[#001A4E]/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-32 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5 text-white/50 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-white line-clamp-1">{project.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="bg-[#0055A5] text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide">
              {project.category}
            </span>
            {project.featured && (
              <span className="bg-white/10 text-white text-xs font-medium px-3 py-1 uppercase tracking-wide">
                Featured Project
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 max-w-3xl leading-tight">
            {project.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} /> {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> {project.year}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={13} /> {project.client}
            </span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      {project.stats && project.stats.length > 0 && (
        <div className="bg-[#0055A5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-px bg-white/10" style={{ gridTemplateColumns: `repeat(${project.stats.length}, 1fr)` }}>
              {project.stats.map((stat) => (
                <div key={stat.label} className="bg-[#0055A5] px-6 py-6 text-center">
                  <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-white/70 text-xs uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Left — main */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-0.5 bg-[#0055A5]" />
                  <span className="text-[#0055A5] text-sm font-semibold uppercase tracking-widest">
                    Overview
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Challenge */}
              <div className="bg-[#F5F7FA] p-8 border-l-4 border-[#0055A5]">
                <h3 className="font-bold text-[#002B5C] text-base mb-3">The Challenge</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="font-bold text-[#002B5C] text-base mb-3">Our Solution</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.solution}</p>
              </div>

              {/* Outcome */}
              <div className="bg-[#002B5C] p-8">
                <h3 className="font-bold text-white text-base mb-3">Outcome</h3>
                <p className="text-white/70 text-sm leading-relaxed">{project.outcome}</p>
              </div>

              {/* Gallery */}
              {project.galleryImages.length > 0 && (
                <div>
                  <h3 className="font-bold text-[#002B5C] text-base mb-5">Project Gallery</h3>
                  {/* IMAGE INSTRUCTION: Gallery images go in /public/images/projects/ */}
                  {/* Use filenames from project.galleryImages array */}
                  <div className="grid grid-cols-2 gap-2">
                    {project.galleryImages.map((img, i) => (
                      <div key={i} className="aspect-video bg-[#003F80] relative overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${img})` }}
                        />
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
                            backgroundSize: "20px 20px",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right — sidebar */}
            <div className="space-y-5">
              {/* Project info card */}
              <div className="border border-gray-100 divide-y divide-gray-100">
                <div className="p-5">
                  <h3 className="font-bold text-[#002B5C] text-sm uppercase tracking-wide mb-3">
                    Project Details
                  </h3>
                </div>
                {[
                  { label: "Client", value: project.client },
                  { label: "Location", value: project.location },
                  { label: "Year", value: String(project.year) },
                  { label: "Category", value: project.category },
                ].map((item) => (
                  <div key={item.label} className="px-5 py-3.5 flex justify-between">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</span>
                    <span className="text-sm text-gray-700 font-medium text-right">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Services used */}
              {serviceLinks.length > 0 && (
                <div className="border border-gray-100 p-5">
                  <h3 className="font-bold text-[#002B5C] text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                    <Tag size={13} /> Services Involved
                  </h3>
                  <ul className="space-y-2">
                    {serviceLinks.map((s) => s && (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-sm text-[#0055A5] hover:underline"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="p-5 border border-gray-100">
                <h3 className="font-bold text-[#002B5C] text-sm uppercase tracking-wide mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#0055A5] bg-[#E8F4FD] px-2.5 py-1 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#002B5C] p-6 text-white">
                <h3 className="font-bold text-base mb-3">Have a Similar Project?</h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  Tell us about your requirements and we&apos;ll propose the right solution.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-white text-[#002B5C] font-semibold py-2.5 hover:bg-[#E8F4FD] transition-colors text-sm"
                >
                  Get in Touch <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-14 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl md:text-2xl font-black text-[#002B5C]">
                Related Projects
              </h2>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[#0055A5] text-sm font-semibold hover:gap-3 transition-all"
              >
                All Projects <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-200">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group bg-white hover:bg-[#002B5C] transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden bg-[#003F80]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${p.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001A4E]/60 to-transparent" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-400 group-hover:text-white/50 mb-2 transition-colors">
                      {p.location} · {p.year}
                    </p>
                    <h3 className="font-bold text-[#002B5C] group-hover:text-white text-sm transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back nav */}
      <div className="bg-white border-t border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0055A5] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
