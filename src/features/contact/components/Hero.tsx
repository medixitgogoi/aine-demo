import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full py-16 md:py-38"
      style={{ background: "var(--color-section-light)" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">
          {/* Label */}
          <div
            className="w-fit px-4 py-1 text-xs font-semibold uppercase tracking-wide rounded-full"
            style={{
              background: "var(--color-badge-primary-bg)",
              color: "var(--color-badge-primary-text)",
            }}
          >
            Contact Us
          </div>

          {/* Heading */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
            style={{ color: "var(--color-card-heading)" }}
          >
            Let’s Start a Conversation That Matters
          </h1>

          {/* Description */}
          <p
            className="text-base md:text-lg max-w-xl leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Whether you're exploring admissions, need guidance, or want to
            collaborate, our team is here to help you every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button
              className="px-6 py-2.5 rounded-md text-sm font-medium transition"
              style={{
                background: "var(--color-button-primary)",
                color: "var(--color-button-primary-text)",
              }}
            >
              Send a Message
            </button>

            <button
              className="px-6 py-2.5 rounded-md text-sm font-medium border transition"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-primary)",
              }}
            >
              Call Us
            </button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col gap-2 text-sm mt-2">
            <span style={{ color: "var(--color-text-tertiary)" }}>
              📧 info@aine.org.in
            </span>
            <span style={{ color: "var(--color-text-tertiary)" }}>
              📞 +91 82540 36679
            </span>
          </div>

          {/* Trust / Stats - Card View */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {/* Card 1 */}
            <div
              className="p-4 rounded-lg bg-primary-dark/90"
              style={{
                // background: "var(--primary-dark)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <p
                className="text-lg text-white font-semibold"
                // style={{ color: "var(--color-card-heading)" }}
              >
                24h
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                Avg. Response
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="p-4 rounded-lg bg-primary-dark/90"
              style={{
                // background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <p
                className="text-lg text-white font-semibold"
                // style={{ color: "var(--color-card-heading)" }}
              >
                1000+
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                Queries Solved
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="p-4 rounded-lg bg-primary-dark/90"
              style={{
                // background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <p
                className="text-lg text-white font-semibold"
                // style={{ color: "var(--color-card-heading)" }}
              >
                7 Days
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                Support
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* Main Image */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <img
              src="/images/hero/hero1.jpg"
              alt="Contact"
              className="w-full h-[320px] md:h-[460px] object-cover"
            />
          </div>

          {/* Overlay Card 1 */}
          <div
            className="absolute bottom-4 left-4 px-4 py-2 rounded-md text-xs"
            style={{
              background: "rgba(255,255,255,0.95)",
              color: "var(--color-text-primary)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            We usually respond within 24 hours
          </div>

          {/* Overlay Card 2 */}
          <div
            className="absolute top-4 right-4 px-4 py-3 rounded-lg text-xs"
            style={{
              background: "var(--color-card)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <p style={{ color: "var(--color-text-primary)" }}>
              🎓 Admissions Open
            </p>
            <p style={{ color: "var(--color-text-muted)" }}>
              Apply for 2026 session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
