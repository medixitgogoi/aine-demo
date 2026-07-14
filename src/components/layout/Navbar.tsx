"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown, CreditCard } from "lucide-react";
import { navLinks } from "@/utils/nav-links";
import Link from "next/link";
import PrimaryCta from "../button/PrimaryCta";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setScrolled(false);
      } else if (currentScrollY > lastScrollY.current) {
        setScrolled(true);
      } else if (currentScrollY < lastScrollY.current) {
        setScrolled(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
      className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto w-full max-w-7xl pointer-events-auto rounded-xl flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_15px_30px_-5px_rgba(0,0,0,0.15)] border border-gray-200 py-1.5 px-5 scale-[0.98]"
            : "bg-white backdrop-blur-md shadow-[0_10px_15px_-3px_rgba(0,0,0,0.08),0_20px_40px_-4px_rgba(0,0,0,0.12)] border border-gray-100 py-4 px-6 scale-100"
        }`}
      >
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 active:scale-95 transition-transform shrink-0"
        >
          <Image
            src="/images/logos/client-logo-dark-no-bg.png"
            alt="AINE Logo"
            width={scrolled ? 85 : 100}
            height={scrolled ? 38 : 46}
            priority
            className="object-contain transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          />
        </Link>

        {/* COMPACT FLOATING NAV LINKS */}
        <nav
          className={`hidden lg:flex items-center gap-1 bg-gray-900/5 dark:bg-black/5 p-1 rounded-lg border border-black/[0.02] transition-all duration-500 ${
            scrolled ? "h-8" : "h-10"
          }`}
        >
          {navLinks.map((link) => {
            if (link.dropdownItems) {
              return (
                <div
                  key={link.name}
                  className="relative flex items-center h-full"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1.5 px-4 py-1 rounded-md font-bold tracking-wide transition-all duration-300 cursor-pointer focus:outline-none ${
                      scrolled ? "text-[11px]" : "text-[13px]"
                    } ${
                      dropdownOpen
                        ? scrolled
                          ? "bg-white text-primary shadow-xs"
                          : "bg-gray-900 text-white shadow-sm"
                        : scrolled
                          ? "text-gray-800 hover:text-gray-900 hover:bg-white/50"
                          : "text-gray-900 hover:text-primary hover:bg-gray-900/5"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`transition-transform duration-300 ease-out ${
                        scrolled ? "size-3" : "size-3.5"
                      } ${
                        dropdownOpen
                          ? "rotate-180 " +
                            (scrolled ? "text-primary" : "text-white")
                          : scrolled
                            ? "text-gray-400"
                            : "text-gray-600"
                      }`}
                    />
                  </button>

                  {/* HIGH-END DROPDOWN MENU */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-84 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1.5 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] p-2">
                      <div className="grid gap-1">
                        {link.dropdownItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center gap-3.5 p-2.5 rounded-xl transition-all duration-200 hover:bg-gray-50 group"
                            >
                              <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                                <Icon className="size-4.5 text-gray-600 group-hover:text-primary transition-colors" />
                              </div>
                              <div className="flex flex-col space-y-0.5">
                                <p className="text-[13px] font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                                  {item.name}
                                </p>
                                <p className="text-[11px] text-gray-500 font-normal leading-normal">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold tracking-wide px-4 py-1 rounded-md transition-all duration-300 ${
                  scrolled
                    ? "text-[11px] text-gray-800 hover:text-gray-900 hover:bg-white/40"
                    : "text-[13px] text-gray-900 hover:text-primary hover:bg-gray-900/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* ACTION BLOCKS */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            href="https://eazypay.icicibank.com/eazypayLink?P1=qiWVuBIRRKK+HBil4ZjdBA=="
            target="_blank"
            className={
              "group w-max inline-flex items-center justify-center px-6 py-3 cursor-pointer rounded-full bg-cta text-sm hover:bg-hover-cta text-black font-semibold tracking-wide shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 hover:scale-105"
            }
          >
            <CreditCard
              size={20}
              className="mr-2 transition-all duration-500 group-hover:scale-110"
            />
            Fees Payment
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;