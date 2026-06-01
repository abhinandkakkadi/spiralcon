import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Drill, Leaf, Activity, Radar, Layers, Shield, ArrowLeft } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

const iconMap: Record<string, React.ElementType> = {
  Drill, Leaf, Activity, Radar, Layers, Shield,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Drill;

  // Related projects
  const related = projects
    .filter((p) => p.services.includes(service.slug))
    .slice(0, 3);

  // Other services
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="relative bg-[#002B5C] overflow-hidden">
        {/* IMAGE INSTRUCTION: Add service hero image */}
        {/* File location matches service.heroImage field */}
        {/* e.g. /public/images/services/geotechnical-drilling.jpg */}
        {/* Recommended: 1920x600px */}
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
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${service.heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C] via-[#002B5C]/80 to-[#002B5C]/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-white/50 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-[#0055A5] flex items-center justify-center">
              <Icon size={24} className="text-white" />
            </div>
            <span className="bg-[#0055A5]/30 border border-[#0055A5]/50 text-[#0080CC] text-xs font-semibold px-3 py-1 uppercase tracking-wide">
              {service.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 max-w-2xl leading-tight">
            {service.title}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
            {service.shortDescription}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#002B5C] font-semibold px-7 py-3.5 hover:bg-[#E8F4FD] transition-colors"
          >
            Enquire About This Service <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Left — main content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-0.5 bg-[#0055A5]" />
                <span className="text-[#0055A5] text-sm font-semibold uppercase tracking-widest">
                  Overview
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#002B5C] mb-5">
                About This Service
              </h2>
              <p className="text-gray-600 leading-relaxed text-base mb-10">
                {service.fullDescriptionPara1}
              </p>
              {service.fullDescriptionPara2 && (
                <p className="text-gray-600 leading-relaxed text-base mb-10">
                  {service.fullDescriptionPara2}
                </p>
              )}

              {/* Applications */}
              <div className="mb-10">
                <h3 className="text-lg font-bold text-[#002B5C] mb-5">Applications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.applications.map((app) => (
                    <div key={app} className="flex items-start gap-3 bg-[#F5F7FA] p-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0055A5] shrink-0 mt-1.5" />
                      <span className="text-sm text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment */}
              {service.equipment && service.equipment.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-[#002B5C] mb-5">Equipment & Technology</h3>
                  <ul className="space-y-2">
                    {service.equipment.map((eq) => (
                      <li key={eq} className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-1 h-1 rounded-full bg-[#0055A5] shrink-0" />
                        {eq}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right — sidebar */}
            <div className="space-y-6">
              {/* CTA card */}
              <div className="bg-[#002B5C] p-7 text-white">
                <h3 className="font-bold text-lg mb-3">Enquire About This Service</h3>
                <p className="text-white/70 text-sm mb-5">
                  Get in touch with our technical team to discuss your project requirements and receive a quote.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-white text-[#002B5C] font-semibold py-3 hover:bg-[#E8F4FD] transition-colors text-sm"
                >
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>

              {/* Other services */}
              <div className="border border-gray-100 p-6">
                <h3 className="font-bold text-[#002B5C] text-sm uppercase tracking-wide mb-4">
                  Other Services
                </h3>
                <ul className="space-y-0.5">
                  {otherServices.map((s) => {
                    const OtherIcon = iconMap[s.icon] || Drill;
                    return (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-3 p-3 hover:bg-[#E8F4FD] group transition-colors"
                        >
                          <OtherIcon size={16} className="text-[#0055A5] shrink-0" />
                          <span className="text-sm text-gray-700 group-hover:text-[#0055A5] transition-colors">
                            {s.title}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href="/services"
                  className="flex items-center gap-1.5 text-xs text-[#0055A5] font-semibold mt-3 px-3"
                >
                  View all services <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-[#002B5C]">
                Related Projects
              </h2>
              <Link
                href="/projects"
                className="hidden md:inline-flex items-center gap-2 text-[#0055A5] font-semibold hover:gap-3 transition-all text-sm"
              >
                All Projects <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-200">
              {related.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="group bg-white hover:bg-[#002B5C] transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden bg-[#003F80]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${project.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001A4E]/60 to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-[#0055A5] group-hover:text-[#0080CC] font-semibold uppercase tracking-wide transition-colors">
                      {project.location} · {project.year}
                    </span>
                    <h3 className="font-bold text-[#002B5C] group-hover:text-white text-sm mt-1.5 mb-2 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[#0055A5] group-hover:text-white/80 text-xs font-semibold transition-colors">
                      Read more <ArrowRight size={12} />
                    </div>
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
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0055A5] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
}
