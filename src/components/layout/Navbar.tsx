"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { navLinks } from "@/utils/nav-links";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md text-gray-800 border-b border-gray-100"
          : "bg-linear-to-b from-white/95 via-white/90 via-white/75 via-white/50 to-transparent pb-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-2 px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logos/client-logo-dark-no-bg.png"
            alt="AINE Logo"
            width={120}
            height={50}
            priority
          />
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            // Check if this link configuration has dropdown items
            if (link.dropdownItems) {
              return (
                <div
                  key={link.name}
                  className="relative h-full py-4"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center gap-1 text-base font-semibold text-gray-800 hover:text-primary transition-colors cursor-pointer focus:outline-none"
                  >
                    {link.name}
                    <ChevronDown
                      className={`size-4 transition-transform duration-300 ${
                        dropdownOpen ? "rotate-180 text-primary" : "text-gray-500"
                      }`}
                    />
                  </button>

                  {/* DROPDOWN MENU */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%-5px)] w-88 bg-white border border-gray-100 rounded-2xl shadow-xl p-3 transition-all duration-300 transform origin-top ${
                      dropdownOpen
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="grid gap-1">
                      {link.dropdownItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-gray-50 group"
                          >
                            <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                              <Icon className="size-5 text-gray-600 group-hover:text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5 whitespace-nowrap">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            // Normal standalone links
            return (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-semibold text-gray-800 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* SEARCH BAR */}
          <div className="hidden md:flex text-black items-center bg-white/60 border border-black/30 rounded-full px-4 py-2 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-muted mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-black text-sm w-40 placeholder:text-black"
            />
          </div>

          {/* APPLY NOW CTA */}
          <a
            href="#apply"
            className="text-base font-semibold flex flex-row items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-yellow-300 text-black shadow-sm transition-all duration-300 hover:bg-primary-light hover:shadow-md active:scale-[0.98]"
          >
            Apply Now
            <ArrowUpRight className="size-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;