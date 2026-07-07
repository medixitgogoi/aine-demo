const Cta = () => {
  return (
    <section
      className="w-full py-10 md:py-24"
      style={{ background: "var(--color-footer-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* INNER CONTAINER */}
        <div
          className="rounded-2xl px-8 py-12 md:px-12 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-10"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(6px)",
          }}
        >

          {/* LEFT CONTENT */}
          <div className="max-w-xl flex flex-col gap-5">

            {/* Label */}
            <div
              className="w-fit px-4 py-1 text-xs font-semibold uppercase tracking-wide rounded-full"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "var(--color-footer-muted)",
              }}
            >
              Get Started
            </div>

            {/* Heading */}
            <h2
              className="text-3xl md:text-4xl font-semibold leading-tight"
              style={{ color: "var(--color-footer-heading)" }}
            >
              Take the Next Step in Your Academic Journey
            </h2>

            {/* Description */}
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--color-footer-text)" }}
            >
              Whether you're exploring programs, attending events, or seeking
              admission, we’re here to guide you every step of the way. Discover
              opportunities that empower your future and shape your success.
            </p>

            {/* HIGHLIGHTS */}
            <div className="flex flex-wrap gap-6 mt-4">
              
              <div>
                <p
                  className="text-lg font-semibold"
                  style={{ color: "var(--color-footer-heading)" }}
                >
                  5000+
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-footer-muted)" }}
                >
                  Students
                </p>
              </div>

              <div>
                <p
                  className="text-lg font-semibold"
                  style={{ color: "var(--color-footer-heading)" }}
                >
                  50+
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-footer-muted)" }}
                >
                  Programs
                </p>
              </div>

              <div>
                <p
                  className="text-lg font-semibold"
                  style={{ color: "var(--color-footer-heading)" }}
                >
                  100+
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-footer-muted)" }}
                >
                  Events
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto">

            <button
              className="px-6 py-3 rounded-md text-sm font-medium transition"
              style={{
                background: "var(--color-button-primary)",
                color: "var(--color-button-primary-text)",
              }}
            >
              Apply Now
            </button>

            <button
              className="px-6 py-3 rounded-md text-sm font-medium transition border"
              style={{
                borderColor: "var(--color-footer-muted)",
                color: "var(--color-footer-heading)",
              }}
            >
              Explore Courses
            </button>

            <button
              className="px-6 py-3 rounded-md text-sm font-medium transition border"
              style={{
                borderColor: "var(--color-footer-muted)",
                color: "var(--color-footer-heading)",
              }}
            >
              Contact Admissions
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Cta;