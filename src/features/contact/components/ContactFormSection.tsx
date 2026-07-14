"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const ContactFormSection = () => {
  return (
    <section
      id="contact-form"
      className="w-full py-20 md:py-28 scroll-mt-20 bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative Dark Atmosphere Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch relative z-10">
        {/* Left Side Content - Premium Light Card Block over Dark BG */}
        <div className="p-8 md:p-10 bg-card-light-bg rounded-2xl flex flex-col gap-8 border border-white/5 shadow-2xl justify-between">
          <div>
            <h3 className="text-2xl font-black text-black tracking-tight mb-1">
              Get in Touch
            </h3>
            <p className="text-sm text-slate-600 font-medium">
              Prefer direct communication? Reach out using the details below.
            </p>
          </div>

          {/* Info Rows Container */}
          <div className="flex flex-col gap-6">
            {/* Phone Entry */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 transition-colors duration-300 group-hover:bg-blue-500/20">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                  Contact No.
                </h4>
                <Link
                  href="tel:+918254036679"
                  className="text-sm font-semibold text-black mt-1.5 transition-colors duration-300 group-hover:text-blue-600"
                >
                  +91 82540 36679
                </Link>
              </div>
            </div>

            {/* Email Entry */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-500/20">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                  Email Address
                </h4>
                <div className="mt-1.5 space-y-0.5">
                  <Link
                    href="mailto:aine.guwahati@yahoo.com"
                    className="block text-sm font-semibold text-black transition-colors duration-300 group-hover:text-indigo-600"
                  >
                    aine.guwahati@yahoo.com
                  </Link>

                  <Link
                    href="mailto:info@aine.org.in"
                    className="block text-sm font-semibold text-black transition-colors duration-300 group-hover:text-indigo-600"
                  >
                    info@aine.org.in
                  </Link>
                </div>
              </div>
            </div>

            {/* Address Entry */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 transition-colors duration-300 group-hover:bg-purple-500/20">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                  Campus Address
                </h4>
                <p className="text-sm font-medium text-slate-800 mt-1.5 leading-relaxed max-w-sm">
                  IIT Road, Near IIT Sila Grant, Adjacent to GNRC Hospitals,
                  North Guwahati - 781031, Assam
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Slot Holder for Map */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl min-h-[400px] h-full group">
          {/* Google Map Embed */}
          <iframe
            src="https://maps.google.com/maps?q=Asian%20Institute%20of%20Nursing%20Education&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full min-h-[400px] border-0 filter invert-[90%] hue-rotate-180 contrast-[100%] transition-all duration-500 group-hover:invert-0 group-hover:hue-rotate-0"
            loading="lazy"
            title="AINE Campus Map"
          />

          {/* Overlay Card - Adapted for Premium Dark Canvas placement */}
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 transition-transform duration-300 group-hover:translate-y-[-4px]">
            <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-xl">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <MapPin size={18} />
              </div>

              <div>
                <p className="text-sm font-bold text-white tracking-wide">
                  Our Campus
                </p>
                <p className="text-xs font-medium text-slate-400 mt-0.5">
                  North Guwahati, Assam, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
