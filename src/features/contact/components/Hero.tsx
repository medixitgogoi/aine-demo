"use client";

import React, { useState } from "react";
import {
  Mail,
  Calendar,
  Clock,
  CheckCircle2,
  MessageCircle,
  X,
  User,
  Phone,
  Send,
} from "lucide-react";
import SectionHeader from "@/components/section/SectionHeader";
import PrimaryCta from "@/components/button/PrimaryCta";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setIsModalOpen(false);
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="relative w-full py-20 lg:py-40 bg-white text-slate-800 overflow-hidden antialiased">
        {/* Soft Ambient Light Glows Adjusted for White Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <div className="flex flex-col items-start gap-6 md:col-span-7">
            <SectionHeader text="Contact Us" />

            {/* Heading - Shifted to deep high-contrast slate-950 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-950">
              Let’s Start a <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Conversation
              </span>{" "}
              That Matters
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg max-w-xl leading-relaxed text-slate-600 font-medium">
              Whether you're exploring admissions, looking for academic
              guidance, or seeking institutional collaboration, our core
              administrative team is listening.
            </p>

            {/* Action Interface Block */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <div
                onClick={() => setIsModalOpen(true)}
                className="focus:outline-none transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <PrimaryCta text="Send a Message" />
              </div>

              {/* Secondary CTA - Light Theme Clean Design */}
              <Link
                href="tel:+918254036679"
                className="px-6 py-3 cursor-pointer rounded-md border transition-all duration-500 hover:scale-105 border-slate-200 text-slate-800 font-semibold tracking-wide bg-slate-50 hover:bg-slate-100 shadow-xs inline-block text-center"
              >
                Direct Call
              </Link>
            </div>

            {/* Trust Matrix Metrics Blocks - Tuned for Light Canvas */}
            <div className="grid grid-cols-3 gap-4 w-full mt-4">
              <div className="p-4 rounded-2xl bg-background-dark border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-card-light-bg" />
                  <span className="text-lg font-bold tracking-tight text-white">
                    24h
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-300 mt-1">
                  Avg. Response Time
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-background-dark border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-card-light-bg" />
                  <span className="text-lg font-bold tracking-tight text-white">
                    1k+
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-300 mt-1">
                  Queries Answered
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-background-dark border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-lg font-bold tracking-tight text-white">
                    7 Days
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-300 mt-1">
                  Continuous Support
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT MEDIA GRAPHIC */}
          <div className="relative md:col-span-5 w-full">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200">
              <Image
                src="/images/hero/hero1.jpg"
                alt="AINE Administration Desk Support Office"
                fill
                priority
                className="object-cover"
                sizes="(max-w-7xl) 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Admissions Open Badge - Lightened for aesthetic balance */}
            <div className="absolute -bottom-4 right-4 left-4 p-4 rounded-xl bg-white/95 backdrop-blur-md ring-1 ring-slate-200 shadow-lg flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-950 flex items-center gap-1.5">
                  Admissions Open
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  Currently processing the 2026 academic session
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL SYSTEM OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blur backdrop backing sheet */}
          <div
            className="absolute inset-0 bg-slate-950/30 backdrop-blur-xl transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Card Container Element - Shifted to dynamic crisp light theme */}
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] z-10 transition-all transform duration-300 scale-100">
            {/* Exit Action Trigger */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Description Stack */}
            <div className="mb-6 mt-8">
              <h2 className="text-2xl font-black text-slate-950 tracking-tight">
                Send a Message
              </h2>
              <p className="text-xs font-semibold text-slate-500 mt-1">
                Fill out the secure ledger below and our administrators will
                reach out.
              </p>
            </div>

            {/* Input Interactive Form Sheet */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-600" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 text-sm transition-all"
                />
              </div>

              {/* Twin Row Grid: Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-indigo-600" /> Email
                    Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 text-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-purple-600" /> Mobile
                    Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 text-sm transition-all"
                  />
                </div>
              </div>

              {/* Custom Message Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-blue-600" /> Your
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can our administration assist you today?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 text-sm transition-all resize-none"
                />
              </div>

              {/* Action Sheet Submissions */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold tracking-wide shadow-md hover:shadow-indigo-500/10 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Dispatch Message</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
