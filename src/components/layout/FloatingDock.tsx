"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  Menu,
  Phone,
  MessageCircle,
  MapPin,
  Video,
  Globe,
  X,
} from "lucide-react";

const items = [
  {
    icon: Globe,
    label: "360° Tour",
    href: "#",
  },
  {
    icon: Phone,
    label: "Call",
    href: "tel:+918254036679",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/918254036679",
  },
  {
    icon: Video,
    label: "Demo",
    href: "#",
  },
  {
    icon: MapPin,
    label: "Location",
    href: "https://www.google.com/maps?cid=12017386506753153596&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-GB&source=embed",
  },
];

export default function FloatingDock() {
  const [open, setOpen] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dockRef.current &&
        !dockRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div
      ref={dockRef}
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center w-14"
    >
      <div className="flex flex-col-reverse items-center gap-3 w-full">
        {/* Toggle Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1d4c9c] text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#16408d]"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        {/* Floating Items */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.9,
              }}
              transition={{
                duration: 0.25,
              }}
              className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-2xl backdrop-blur-md w-full"
            >
              {items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 15,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={item.href}
                      target={
                        item.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      className="group relative flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white transition-all duration-300 hover:scale-110 hover:border-[#0d2c63] hover:bg-[#0d2c63] hover:text-white"
                    >
                      <Icon className="h-5 w-5" />

                      {/* Tooltip */}
                      <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}