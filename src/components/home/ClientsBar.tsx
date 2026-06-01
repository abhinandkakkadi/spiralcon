import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedClients } from "@/data/clients";

const featured = getFeaturedClients();

export default function ClientsBar() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
            Trusted by Leading Organisations
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-px bg-gray-100">
          {featured.map((client) => (
            <div
              key={client.id}
              className="bg-white flex items-center justify-center p-6 group hover:bg-[#E8F4FD] transition-colors"
              title={client.name}
            >
              {/* IMAGE INSTRUCTION: Client logos go in /public/images/clients/ */}
              {/* Each should be a PNG with transparent background, ~200x80px */}
              {/* File naming: use the filename from clients.ts (e.g. nhai.png) */}
              <div className="relative w-full h-10">
                {/* Fallback text logo when image not found */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-300 group-hover:text-[#0055A5] text-center transition-colors leading-tight">
                    {client.name.split(" ").slice(0, 3).join(" ")}
                  </span>
                </div>
                {/* Actual logo image - uncomment or use Next/Image when files are added */}
                {/* <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
