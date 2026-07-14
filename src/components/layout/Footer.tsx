"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock3, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { scrollToSection } from "@/lib/scrollToSection";

const quickLinks = [
  { name: "About AINE", href: "/about#about" },
  { name: "Objectives", href: "/about#objectives" },
  { name: "Mission & Vision", href: "/about#mission" },
  { name: "Awards & Achievements", href: "/about#awards" },
  { name: "Accreditation", href: "/about#accreditation" },
  {
    name: "Fees Payment",
    href: "https://eazypay.icicibank.com/eazypayLink?P1=qiWVuBIRRKK+HBil4ZjdBA==",
    target: true,
  },
];

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white border-t border-white/10 pt-15 pb-10">
      <div className="container-custom px-4 mx-auto max-w-7xl">
        {/* Main Architectural Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Brand Info & Vision Statement */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo Container */}
            <div className="relative max-w-md border border-white/10 bg-black/20 px-4 py-3 flex items-center gap-4 rounded-md">
              {/* Logo */}
              <div className="shrink-0">
                <Image
                  src="/images/logos/client-logo-light.png"
                  alt="Asian Institute of Nursing Education"
                  width={140}
                  height={60}
                  className="h-12 w-auto object-contain grayscale brightness-200"
                  priority
                />
              </div>

              {/* Text */}
              <span className="text-sm md:text-base font-semibold text-white leading-tight">
                Asian Institute of Nursing Education
              </span>
            </div>

            {/* Description Text */}
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              We at AINE will be accountable for imparting quality education to
              prepare competent nursing professionals for the welfare of the
              society. We will give individualized attention to every student,
              nurturing their holistic growth while constantly striving for
              excellence.
            </p>

            {/* Social Handles using Fa Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  icon: <FaYoutube className="h-4 w-4" />,
                  href: "#",
                  name: "Youtube",
                },
                {
                  icon: <FaInstagram className="h-4 w-4" />,
                  href: "https://www.instagram.com/ainenursinginstitute?igsh=MTIyOTQxdTltbHp4bA%3D%3D&utm_source=qr",
                  name: "Instagram",
                },
                {
                  icon: <FaFacebookF className="h-4 w-4" />,
                  href: "https://www.facebook.com/asianinstituteofnursingeducationaine",
                  name: "Facebook",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  aria-label={item.name}
                  className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.02] text-slate-400 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white rounded-full cursor-pointer"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 lg:pl-8">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 bg-card-light-bg rounded-full" />
              <h3 className="text-sm font-black uppercase tracking-wider text-white">
                Quick Links
              </h3>
            </div>

            <ul className="mt-6 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.target ? "_blank" : undefined}
                    rel={link.target ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between text-sm text-slate-400 transition-colors duration-200 hover:text-card-light-bg cursor-pointer"
                  >
                    <span className="relative py-0.5">
                      {link.name}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-4 lg:pl-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 bg-card-light-bg rounded-full" />
              <h3 className="text-sm font-black uppercase tracking-wider text-white">
                Contact Details
              </h3>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-white/5 bg-white/[0.01] text-slate-400 group-hover:text-card-light-bg group-hover:border-card-light-bg/40 transition-colors rounded-full">
                  <MapPin className="h-4 w-4" />
                </div>
                <Link
                  href="https://www.google.com/maps?cid=12017386506753153596&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-GB&source=embed"
                  target="_blank"
                  className="text-sm leading-relaxed text-slate-400 transition-colors group-hover:text-card-light-bg"
                >
                  IIT Road, Near IIT Sila Grant, Adjacent to GNRC Hospitals,
                  North Guwahati – 781031, Assam
                </Link>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-white/5 bg-white/[0.01] text-slate-400 group-hover:text-card-light-bg group-hover:border-card-light-bg/40 transition-colors rounded-full">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="space-y-1 text-sm text-slate-400">
                  <a
                    href="mailto:aine.guwahati@yahoo.com"
                    className="block transition hover:text-card-light-bg"
                  >
                    aine.guwahati@yahoo.com
                  </a>
                  <a
                    href="mailto:info@aine.org.in"
                    className="block transition hover:text-card-light-bg"
                  >
                    info@aine.org.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-white/5 bg-white/[0.01] text-slate-400 group-hover:text-card-light-bg group-hover:border-card-light-bg/40 transition-colors rounded-full">
                  <Phone className="h-4 w-4" />
                </div>
                <a
                  href="tel:+918254036679"
                  className="text-sm text-slate-400 transition hover:text-card-light-bg self-center"
                >
                  +91 82540 36679
                </a>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-white/5 bg-white/[0.01] text-slate-400 group-hover:text-card-light-bg group-hover:border-card-light-bg/40 transition-colors rounded-full">
                  <Clock3 className="h-4 w-4" />
                </div>
                <div className="text-sm leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300">
                  <p>
                    <span className="text-slate-500 font-medium">
                      Mon – Fri:
                    </span>{" "}
                    9 AM – 4 PM
                  </p>
                  <p>
                    <span className="text-slate-500 font-medium">
                      Saturday:
                    </span>{" "}
                    9 AM – 1 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Utility Grid Block */}
        <div className="mt-10 pt-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="text-xs font-medium tracking-wide text-slate-500">
              © 2026 Asian Institute of Nursing Education. All Rights Reserved.
            </p>

            <div className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-slate-500">
              <span>Designed & Developed by</span>
              <Link
                href="https://ekok.net.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-bold text-slate-400 hover:text-card-light-bg transition-colors cursor-pointer">
                  Ekok Technocrat
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
