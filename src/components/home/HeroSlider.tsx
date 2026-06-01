"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    // IMAGE INSTRUCTION: Add a high-res site investigation / drilling image here
    // File location: /public/images/hero/hero-1.jpg
    // Recommended: 1920x1080px, landscape, showing drilling rig in the field
    image: "/images/hero/hero-2b.jpg",
    label: "Geotechnical Excellence",
    title: "Work For Environment Sustainability",
    subtitle:
      "We support some of India's leading environmental consultancies in executing site work while adhering to the highest health, safety, and environmental (HSE) standards. With a zero-tolerance approach to safety violations, we are committed to ensuring safe, compliant, and incident-free operations at every project site.",
    cta: { label: "Explore Services", href: "/services" },
    ctaSecondary: { label: "Our Projects", href: "/projects" },
  },
  {
    id: 2,
    // IMAGE INSTRUCTION: Add an environmental investigation / sampling image here
    // File location: /public/images/hero/hero-2.jpg
    // Recommended: 1920x1080px, showing environmental sampling or monitoring wells
    image: "/images/hero/hero-2c.jpg",
    label: "Environmental Solutions",
    title: "Protecting Land & Water for Future Generations",
    subtitle:
      "We assist clients in remediation site operations with rigorous health and safety compliance, utilizing advanced technologies and proven methodologies to deliver efficient and effective remediation solutions.",
    cta: { label: "Environmental Services", href: "/services/environmental-drilling" },
    ctaSecondary: { label: "View Projects", href: "/projects" },
  },
  {
    id: 3,
    // IMAGE INSTRUCTION: Add a large infrastructure / urban project image here
    // File location: /public/images/hero/hero-3.jpg
    // Recommended: 1920x1080px, showing large-scale infrastructure (metro, highway, airport)
    image: "/images/hero/hero-3.jpg",
    label: "Infrastructure Expertise",
    title: "Committed to Safety Excellence",
    subtitle:
      "We support environmental projects with a strong focus on health, safety, and environmental compliance. Through trained personnel, safe work practices, and a zero-tolerance approach to safety violations, we help ensure efficient and incident-free project execution.",
    cta: { label: "Our Projects", href: "/projects" },
    ctaSecondary: { label: "About Us", href: "/about" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-[#001A4E]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Placeholder bg (replace with Image component when photos added) */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001A4E]/90 via-[#001A4E]/70 to-transparent" />
          {/* Placeholder pattern when no image */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Title */}
            <h1
              key={`title-${current}`}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
              {slides[current].title}
            </h1>

            {/* Subtitle */}
            <p
              key={`sub-${current}`}
              className="text-white/75 text-base sm:text-lg leading-relaxed mb-10 max-w-xl animate-fade-up"
              style={{ animationDelay: "0.35s", animationFillMode: "both" }}
            >
              {slides[current].subtitle}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${current}`}
              className="flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.5s", animationFillMode: "both" }}
            >
              <Link
                href={slides[current].cta.href}
                className="inline-flex items-center gap-2 bg-[#0055A5] text-white font-semibold px-7 py-3.5 hover:bg-[#0080CC] transition-colors"
              >
                {slides[current].cta.label}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={slides[current].ctaSecondary.href}
                className="inline-flex items-center gap-2 border border-white/40 text-white font-medium px-7 py-3.5 hover:border-white hover:bg-white/10 transition-all"
              >
                {slides[current].ctaSecondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`transition-all duration-300 ${
              index === current ? "w-8 h-1.5 bg-white" : "w-3 h-1.5 bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs uppercase tracking-widest rotate-90 origin-center">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
