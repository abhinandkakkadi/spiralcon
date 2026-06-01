"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services } from "@/data/services";

const offices = [
  {
    city: "Pattuvam",
    address: "kannur, Kerala- 670143\nBengaluru – 560 068, Karnataka",
    phone: "+91 9810315217",
    email: "prem.nambiar@spiralcon.com",
    type: "Headquarters",
  },
  {
    city: "Delhi NCR",
    address: "14/5-B , BLOCK 14,\nTILAK NAGAR, NEW DELHI-110018",
    phone: "+919810315217",
    email: "prem.nambiar@spiralcon.com",
    type: "Regional Office",
  },
  {
    city: "Chennai",
    address: "Selaiyur, Thambaram\nChennai",
    phone: "+919810315217",
    email: "prem.nambiar@spiralcon.com",
    type: "Regional Office",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="bg-[#002B5C] py-20 md:py-24 relative overflow-hidden">
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
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Contact Spiral Constructions
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Whether you have a specific project requirement or want to discuss how we
            can help, our technical team is ready to respond quickly.
          </p>
        </div>
      </section>

      {/* Quick contact bar */}
      <section className="bg-[#0055A5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { icon: Phone, label: "Call Us", value: "+91 9810315217", href: "tel:+919999999999" },
              { icon: Mail, label: "Email Us", value: "prem.nambiar@spiralcon.com", href: "mailto:prem.nambiar@spiralcon.com" },
              { icon: Clock, label: "Office Hours", value: "Mon–Sat: 9am – 6pm", href: null },
            ].map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-center gap-4 py-5">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-wide">{item.label}</div>
                    <div className="text-white font-semibold text-sm mt-0.5">{item.value}</div>
                  </div>
                </div>
              );
              return (
                <div key={item.label} className="px-6">
                  {item.href ? (
                    <a href={item.href} className="hover:opacity-80 transition-opacity block">
                      {inner}
                    </a>
                  ) : inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-0.5 bg-[#0055A5]" />
                <span className="text-[#0055A5] text-sm font-semibold uppercase tracking-widest">
                  Send a Message
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#002B5C] mb-8">
                Tell Us About Your Project
              </h2>

              {submitted ? (
                <div className="bg-[#E8F4FD] border border-[#0055A5]/20 p-8 text-center">
                  <CheckCircle2 size={40} className="text-[#0055A5] mx-auto mb-4" />
                  <h3 className="font-bold text-[#002B5C] text-lg mb-2">Message Received!</h3>
                  <p className="text-gray-600 text-sm">
                    Thank you for contacting Spiral Constructions. Our team will be in touch within 1 business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" }); }}
                    className="mt-6 text-[#0055A5] text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name" className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="border-gray-200 focus-visible:ring-[#0055A5] h-11"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                        Company / Organisation
                      </Label>
                      <Input
                        id="company"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Your organisation"
                        className="border-gray-200 focus-visible:ring-[#0055A5] h-11"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="email" className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="border-gray-200 focus-visible:ring-[#0055A5] h-11"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 9810315217"
                        className="border-gray-200 focus-visible:ring-[#0055A5] h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                      Service of Interest
                    </Label>
                    <Select
                      value={form.service}
                      onValueChange={(v) => setForm({ ...form, service: v ?? "" })}
                    >
                      <SelectTrigger className="w-full border-gray-200 focus:ring-[#0055A5] h-11">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent align="start" className="min-w-(--anchor-width)">
                        {services.map((s) => (
                          <SelectItem key={s.slug} value={s.slug} className="py-2.5 pl-3 pr-10 text-sm cursor-pointer">
                            {s.title}
                          </SelectItem>
                        ))}
                        <SelectSeparator />
                        <SelectItem value="other" className="py-2.5 pl-3 pr-10 text-sm cursor-pointer text-muted-foreground">
                          Other / Not sure
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                      Project Description *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project, site location, scope of works, and any specific requirements..."
                      className="border-gray-200 focus-visible:ring-[#0055A5] resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#0055A5] hover:bg-[#002B5C] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 flex items-center justify-center gap-2 transition-colors"
                  >
                    {submitting ? "Sending…" : <><span>Send Enquiry</span><ArrowRight size={16} /></>}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    We typically respond within 1 business day. Your information is kept confidential.
                  </p>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="font-bold text-[#002B5C] text-base mb-4">
                  Headquarters
                </h3>
                <div className="flex items-start gap-3 p-5 bg-[#F5F7FA]">
                  <MapPin size={18} className="text-[#0055A5] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#002B5C] text-sm">Spiral Constructions Pvt. Ltd.</p>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      Pattuvam, kannur, Kerala- 670143<br />
                      Dwarka, New Delhi - 110075<br />
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-[#002B5C] text-base mb-4">
                  Regional Offices
                </h3>
                <div className="space-y-0.5 bg-gray-100">
                  {offices.slice(1).map((office) => (
                    <div key={office.city} className="bg-white p-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-[#002B5C] text-sm">{office.city}</h4>
                        <span className="text-xs text-[#0055A5] bg-[#E8F4FD] px-2 py-0.5">
                          {office.type}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 whitespace-pre-line leading-relaxed mb-2">
                        {office.address}
                      </p>
                      <div className="flex flex-col gap-1">
                        <a href={`tel:${office.phone}`} className="text-xs text-gray-600 hover:text-[#0055A5] transition-colors flex items-center gap-1.5">
                          <Phone size={11} /> {office.phone}
                        </a>
                        <a href={`mailto:${office.email}`} className="text-xs text-gray-600 hover:text-[#0055A5] transition-colors flex items-center gap-1.5">
                          <Mail size={11} /> {office.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      {/* IMAGE/MAP INSTRUCTION: Replace this section with an embedded Google Maps iframe */}
      {/* Go to maps.google.com → search your address → Share → Embed a map → copy iframe */}
      {/* <section className="bg-[#E8F4FD] h-72 flex items-center justify-center">
        <div className="text-center">
          <MapPin size={32} className="text-[#0055A5] mx-auto mb-3" />
          <p className="text-[#0055A5] font-semibold">Map Placeholder</p>
          <p className="text-gray-500 text-sm mt-1">
            Replace with Google Maps embed for Bengaluru HQ
          </p>
        </div>
      </section> */}
    </div>
  );
}
