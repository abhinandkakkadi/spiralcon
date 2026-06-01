import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Linkedin, Twitter, Facebook } from "lucide-react";
import { services } from "@/data/services";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#001A4E] text-white">
      {/* CTA band */}
      <div className="bg-[#0055A5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 mt-1 text-sm">
              Talk to our experts about your ground investigation or environmental needs.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#0055A5] font-semibold px-7 py-3 hover:bg-[#E8F4FD] transition-colors text-sm"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-white rounded flex items-center justify-center font-black text-lg text-[#002B5C]">
                SC
              </div>
              <span className="font-bold text-xl tracking-tight">SPIRAL CONSTRUCTIONS</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Trusted specialists in geotechnical drilling, environmental
              investigation, and ground characterisation — delivering precision
              subsurface solutions for complex projects.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      size={12}
                      className="text-[#0080CC] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      size={12}
                      className="text-[#0080CC] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#0080CC] mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">
                  Spiral Constructions Pvt. Ltd.
                  <br />
                  123, Industrial Area, Phase II
                  <br />
                  Bengaluru – 560 068, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#0080CC] shrink-0" />
                <a
                  href="tel:+919999999999"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  +91 9810315217
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#0080CC] shrink-0" />
                <a
                  href="mailto:prem.nambiar@spiralcon.com"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  prem.nambiar@spiralcon.com
                </a>
              </li>
            </ul>

            {/* Offices */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
                Offices
              </p>
              <div className="flex flex-wrap gap-2">
                {["Chennai", "Delhi", "Kannur"].map((city) => (
                  <span
                    key={city}
                    className="text-xs text-white/60 border border-white/10 px-2 py-1"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} Spiral Constructions Pvt. Ltd. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
