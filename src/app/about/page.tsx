import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, Award, Globe, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Spiral Constructions — India's leading specialist in geotechnical drilling, environmental site investigation, and ground characterisation services.",
};

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Accurate, reliable data is the foundation of every project. We never compromise on methodology, sampling quality, or reporting rigour.",
  },
  {
    icon: Users,
    title: "Expertise",
    description:
      "Our team of geotechnical engineers, geologists, and environmental scientists brings deep technical knowledge to every challenge.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "ISO-certified quality management systems underpin all our field operations, laboratory coordination, and reporting activities.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "We are committed to environmental responsibility in our own operations and to supporting sustainable development for our clients.",
  },
];

const team = [
  {
    name: "Placeholder Name",
    role: "Managing Director",
    image: "/images/team/md.jpg",
    bio: "20+ years in geotechnical engineering across infrastructure and environmental sectors.",
  },
  {
    name: "Placeholder Name",
    role: "Technical Director — Geotechnical",
    image: "/images/team/td-geo.jpg",
    bio: "Specialist in complex ground investigation programmes for major infrastructure projects.",
  },
  {
    name: "Placeholder Name",
    role: "Technical Director — Environmental",
    image: "/images/team/td-env.jpg",
    bio: "Expert in Phase II ESA, contaminated land assessment, and remediation strategy.",
  },
  {
    name: "Placeholder Name",
    role: "Head of Operations",
    image: "/images/team/ops.jpg",
    bio: "Overseeing nationwide field operations, logistics, and HSE management.",
  },
];

const milestones = [
  { year: "2008", event: "Spiral Constructions founded in Bengaluru, Karnataka" },
  { year: "2011", event: "Expanded operations to Mumbai and Chennai" },
  { year: "2014", event: "ISO 9001 certification achieved" },
  { year: "2016", event: "Launched dedicated environmental drilling division" },
  { year: "2019", event: "Opened Delhi office; 200+ projects milestone reached" },
  { year: "2022", event: "Introduced GPR survey services and expanded fleet" },
  { year: "2024", event: "500+ completed projects across 12 Indian states" },
];

export default function AboutPage() {
  return (
    <div className="pt-[88px]">
      {/* Page Hero */}
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
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">
            Built on Expertise.
            <br />
            <span className="text-[#0080CC]">Driven by Precision.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            For over 15 years, Spiral Constructions has been India&apos;s trusted partner for
            geotechnical and environmental ground investigation — delivering the
            subsurface intelligence that engineers, developers, and organisations need
            to make confident decisions.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className="relative">
              {/* IMAGE INSTRUCTION: Add company headquarters or field work image */}
              {/* File: /public/images/about/company-story.jpg */}
              {/* Recommended: 800x600px */}
              <div className="aspect-[4/3] bg-[#002B5C] relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url(/images/team/about-us.jpg)" }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#E8F4FD] -z-10" />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-[#0055A5]" />
                <span className="text-[#0055A5] text-sm font-semibold uppercase tracking-widest">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#002B5C] mb-6">
                Company History
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Spiral Constructions was founded in 2022 by a group of individuals from contracting and consulting within the environmental consulting and contaminated land industry .The business was developed, initially within the South India and expanded year on year with both project size and scope of works until its eventual opening of a second office in Delhi in 2023. Over the years we have expanded our client base working for Environmental consultants, manufacturing industries, municipal waste, Corporate developers, housebuilders and public sectors across India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We have enjoyed working with a wide range of clients on a variety of development projects across the whole of the India  adopting a professional, enthusiastic and friendly approach, utilising up-to-the minute technical innovation and always demonstrating great attention to detail.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We have completed 25 Ground Investigation, environmental sampling and Soil remediation projects across India.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0055A5] text-white font-semibold px-7 py-3.5 hover:bg-[#002B5C] transition-colors"
              >
                Work With Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#0055A5]" />
              <span className="text-[#0055A5] text-sm font-semibold uppercase tracking-widest">
                Our Values
              </span>
              <div className="w-8 h-0.5 bg-[#0055A5]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#002B5C]">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-gray-200">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white p-8">
                  <div className="w-12 h-12 bg-[#E8F4FD] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#0055A5]" />
                  </div>
                  <h3 className="font-bold text-[#002B5C] text-lg mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-[#0055A5]" />
                <span className="text-[#0055A5] text-sm font-semibold uppercase tracking-widest">
                  Our Journey
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#002B5C] mb-4">
                Milestones That Shaped Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                From a small specialist contractor in Bengaluru to a national
                ground investigation leader — every milestone reflects our
                commitment to excellence and growth.
              </p>
            </div>
            <div className="space-y-0">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#0055A5] group-hover:bg-[#002B5C] flex items-center justify-center shrink-0 transition-colors">
                      <span className="text-white text-xs font-black">{milestone.year.slice(2)}</span>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 my-1" />
                    )}
                  </div>
                  <div className="pb-6">
                    <span className="text-xs font-bold text-[#0055A5] uppercase tracking-wider">
                      {milestone.year}
                    </span>
                    <p className="text-gray-700 text-sm mt-1">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-[#0055A5]" />
                <span className="text-[#0055A5] text-sm font-semibold uppercase tracking-widest">
                  Leadership
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#002B5C]">
                Our Leadership Team
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-gray-200">
            {team.map((member) => (
              <div key={member.role} className="bg-white group">
                {/* IMAGE INSTRUCTION: Team photos go in /public/images/team/ */}
                {/* Use headshots, 400x400px, professional */}
                <div className="aspect-square bg-[#002B5C] relative overflow-hidden">
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
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#002B5C] text-sm">{member.name}</h3>
                  <p className="text-[#0055A5] text-xs font-semibold mt-0.5 mb-2">{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#002B5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            Ready to Work with Spiralcon?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Contact our team to discuss your project requirements and how we can support your next investigation programme.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#002B5C] font-semibold px-7 py-3.5 hover:bg-[#E8F4FD] transition-colors"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-7 py-3.5 hover:border-white hover:bg-white/10 transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
