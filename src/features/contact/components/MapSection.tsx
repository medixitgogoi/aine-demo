"use client";

import React from "react";
import { Compass, MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section
      className="w-full py-20 md:py-28"
      style={{ background: "var(--color-section-light)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
        {/* =========================
            HEADER
        ========================= */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
          {/* Icon Badge */}
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "var(--color-primary-soft)",
              color: "var(--color-primary)",
            }}
          >
            <MapPin size={16} />
            <span className="text-xs font-medium tracking-wide">
              Our Location
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-2"
            style={{ color: "var(--color-card-heading)" }}
          >
            <Compass size={22} />
            Find Us on the Map
          </h2>

          {/* Description */}
          <p
            className="text-sm md:text-base flex items-center justify-center gap-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <MapPin size={16} />
            Visit our campus or locate us using the map below.
          </p>
        </div>

        {/* =========================
            MAP CONTAINER
        ========================= */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-md border"
          style={{ borderColor: "var(--color-border)" }}
        >
          {/* Google Map Embed */}
          <iframe
            src="https://maps.google.com/maps?q=Asian%20Institute%20of%20Nursing%20Education&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px] md:h-[500px] border-0"
            loading="lazy"
          />

          {/* Overlay Card */}
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
            <div
              className="flex items-start gap-3 px-4 py-3 rounded-xl backdrop-blur-md"
              style={{
                background: "rgba(255,255,255,0.9)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                className="p-2 rounded-lg"
                style={{
                  background: "var(--color-primary-soft)",
                  color: "var(--color-primary)",
                }}
              >
                <MapPin size={18} />
              </div>

              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Our Location
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--color-text-secondary)" }}
                >
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

export default MapSection;
