"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { services } from "@/data/services";

const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
      description: s.shortDescription.slice(0, 60) + "...",
    })),
  },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Utility bar */}
      <div className="bg-[#002B5C] text-white/80 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={11} />
              <span>+91 9810315217</span>
            </a>
            <a
              href="mailto:prem.nambiar@spiralcon.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={11} />
              <span>prem.nambiar@spiralcon.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={11} />
            <span>India — Delhi · Chennai · Kannur</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-[#002B5C]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div
                className={`w-9 h-9 rounded flex items-center justify-center font-black text-lg ${
                  scrolled ? "bg-[#002B5C] text-white" : "bg-white text-[#002B5C]"
                }`}
              >
                SC
              </div>
              <span
                className={`font-bold text-xl tracking-tight hidden sm:block ${
                  scrolled ? "text-[#002B5C]" : "text-white"
                }`}
              >
                SPIRAL CONSTRUCTIONS
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0">
              {mainNav.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-5 text-sm font-medium transition-colors border-b-2 ${
                      pathname === item.href || pathname?.startsWith(item.href + "/")
                        ? scrolled
                          ? "border-[#0055A5] text-[#0055A5]"
                          : "border-white text-white"
                        : scrolled
                        ? "border-transparent text-gray-700 hover:text-[#0055A5] hover:border-[#0055A5]"
                        : "border-transparent text-white/80 hover:text-white hover:border-white/60"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 w-80 bg-white shadow-2xl border-t-2 border-[#0055A5] z-50">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-3 hover:bg-[#E8F4FD] group transition-colors"
                          >
                            <div className="text-sm font-semibold text-[#002B5C] group-hover:text-[#0055A5]">
                              {child.label}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                              {child.description}
                            </div>
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 mt-1 pt-1 px-5 py-2">
                          <Link
                            href="/services"
                            className="text-xs font-semibold text-[#0055A5] hover:underline"
                          >
                            View all services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className={`hidden lg:inline-flex items-center px-5 py-2 text-sm font-semibold transition-all ${
                  scrolled
                    ? "bg-[#0055A5] text-white hover:bg-[#002B5C]"
                    : "bg-white text-[#002B5C] hover:bg-white/90"
                }`}
              >
                Get in Touch
              </Link>

              {/* Mobile hamburger */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger
                  className={`lg:hidden p-2 bg-transparent border-0 cursor-pointer ${
                    scrolled ? "text-[#002B5C]" : "text-white"
                  }`}
                >
                  <Menu size={24} />
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-sm p-0">
                  <div className="bg-[#002B5C] text-white h-full overflow-y-auto">
                    <div className="flex items-center justify-between p-5 border-b border-white/10">
                      <span className="font-bold text-xl tracking-tight">SPIRALCON</span>
                      <button onClick={() => setMobileOpen(false)}>
                        <X size={24} />
                      </button>
                    </div>
                    <nav className="py-4">
                      {mainNav.map((item) => (
                        <div key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => !item.children && setMobileOpen(false)}
                            className="flex items-center justify-between px-6 py-3.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/5"
                          >
                            {item.label}
                          </Link>
                          {item.children && (
                            <div className="bg-[#001A4E]">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-8 py-2.5 text-xs text-white/70 hover:text-white hover:bg-white/5 font-medium"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                    <div className="px-6 py-4 border-t border-white/10">
                      <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="block w-full text-center bg-white text-[#002B5C] font-semibold py-3 text-sm hover:bg-white/90 transition-colors"
                      >
                        Get in Touch
                      </Link>
                      <div className="mt-4 space-y-2 text-xs text-white/60">
                        <a href="tel:+919999999999" className="flex items-center gap-2">
                          <Phone size={12} /> +91 9810315217
                        </a>
                        <a href="mailto:prem.nambiar@spiralcon.com" className="flex items-center gap-2">
                          <Mail size={12} /> prem.nambiar@spiralcon.com
                        </a>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
