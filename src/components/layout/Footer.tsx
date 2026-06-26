"use client";

import Image from "next/image";
import Link from "next/link";
import {
  //   Facebook,
  //   Instagram,
  //   Youtube,
  MapPin,
  Mail,
  Phone,
  Clock3,
} from "lucide-react";

const quickLinks = [
  { name: "About AINE", href: "/about" },
  { name: "Objectives", href: "/objectives" },
  { name: "Mission & Vision", href: "/mission-vision" },
  { name: "Awards & Achievements", href: "/awards" },
  { name: "Facilities", href: "/facilities" },
  { name: "Fees Payment", href: "/fees-payment" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.8fr_1fr]">
          {/* Left */}
          <div>
            <Image
              src="/images/logos/client-logo-dark-no-bg.png"
              alt="Asian Institute of Nursing Education"
              width={320}
              height={80}
              className="h-auto w-72"
            />

            <p className="mt-6 max-w-md text-[15px] leading-8 text-white/75">
              We at AINE will be accountable for imparting quality education to
              prepare competent nursing professionals for the welfare of the
              society. We will give individualized attention to every student,
              nurturing their holistic growth while constantly striving for
              excellence.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[
                {
                  //   icon: <Youtube size={18} />,
                  href: "#",
                },
                {
                  //   icon: <Instagram size={18} />,
                  href: "#",
                },
                {
                  //   icon: <Facebook size={18} />,
                  href: "#",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="rounded-full border border-white/10 bg-white/5 p-2.5 text-cyan-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  {/* {item.icon} */}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide text-cyan-300">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex text-[15px] text-white/75 transition"
                  >
                    <span className="border-b border-transparent transition-all group-hover:border-white group-hover:text-white">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide text-cyan-300">
              Contact Details
            </h3>

            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />

                <p className="text-[15px] leading-7 text-white/75">
                  IIT Road, Near IIT Sila Grant,
                  <br />
                  Adjacent to GNRC Hospitals,
                  <br />
                  North Guwahati – 781031,
                  <br />
                  Assam
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />

                <div className="space-y-1 text-[15px] text-white/75">
                  <a
                    href="mailto:aine.guwahati@yahoo.com"
                    className="block transition hover:text-white"
                  >
                    aine.guwahati@yahoo.com
                  </a>

                  <a
                    href="mailto:info@aine.org.in"
                    className="block transition hover:text-white"
                  >
                    info@aine.org.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 shrink-0 text-cyan-300" />

                <a
                  href="tel:+918254036679"
                  className="text-[15px] text-white/75 transition hover:text-white"
                >
                  +91 82540 36679
                </a>
              </div>

              <div className="flex items-start gap-4">
                <Clock3 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />

                <div className="text-[15px] leading-7 text-white/75">
                  <p>9 AM – 4 PM, Monday – Friday</p>
                  <p>9 AM – 1 PM, Saturday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row">
            <p className="text-xs tracking-wide text-white/60">
              © 2026 Asian Institute of Nursing Education. All Rights Reserved.
            </p>

            <p className="text-xs tracking-wide text-white/60">
              Designed & Developed by{" "}
              <span className="font-medium text-white/80">Ekok Technocrat</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
