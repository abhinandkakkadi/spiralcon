import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "15+ years of field experience across India",
  "ISO-certified quality management systems",
  "Modern fleet of drilling rigs and survey equipment",
  "In-house HSE management and trained field teams",
];

export default function AboutBanner() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — image placeholder */}
          <div className="relative">
            {/* IMAGE INSTRUCTION: Add a team/site photo here */}
            {/* File: /public/images/about/about-banner.jpg */}
            {/* Recommended: 800x600px, showing team in field or company HQ */}
            <div className="relative aspect-[4/3] bg-[#002B5C] overflow-hidden">
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
                style={{ backgroundImage: "url(/images/team/define-us.jpg)" }}
              />
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0055A5] p-6 grid grid-cols-2 gap-4">
                {[
                  { value: "100+", label: "Projects" },
                  { value: "3+", label: "Years" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-white font-black text-2xl">{s.value}</div>
                    <div className="text-white/70 text-xs uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent block */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#E8F4FD] -z-10 hidden lg:block" />
          </div>

          {/* Right — content */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-0.5 bg-[#0055A5]" />
              <span className="text-[#0055A5] text-sm font-semibold uppercase tracking-widest">
                About Spiral Constructions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#002B5C] leading-tight mb-6">
              Precision Below the Surface.
              <br />
              <span className="text-[#0055A5]">Confidence Above Ground.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Spiral constructions is a leading environmental contracting company in India deals with Ground Investigation, contaminated land remediation, environmental sampling and environmental drilling.  We work for Environmental consultants, manufacturing industries, municipal waste, Corporate developers, housebuilders and public sectors across India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Spiral constructions is proud to be part of an established India based drilling company, allowing us unrivalled access to modern drilling and sampling equipment with suitably qualified and experienced operators. This close working relationship results in reduced timescales and cost savings for our clients.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#0055A5] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#002B5C] text-white font-semibold px-7 py-3.5 hover:bg-[#0055A5] transition-colors"
            >
              More About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
