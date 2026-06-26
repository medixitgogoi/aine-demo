"use client";

import Image from "next/image";

const recruiters = [
  {
    name: "Apollo Hospitals",
    logo: "/images/about/about-1.jpg",
  },
  {
    name: "Fortis Healthcare",
    logo: "/images/about/about-1.jpg",
  },
  {
    name: "Max Healthcare",
    logo: "/images/about/about-1.jpg",
  },
  {
    name: "Manipal Hospitals",
    logo: "/images/about/about-1.jpg",
  },
  {
    name: "AIIMS",
    logo: "/images/about/about-1.jpg",
  },
  {
    name: "Narayana Health",
    logo: "/images/about/about-1.jpg",
  },
  {
    name: "Medanta",
    logo: "/images/about/about-1.jpg",
  },
  {
    name: "GNRC Hospitals",
    logo: "/images/about/about-1.jpg",
  },
];

export default function PlacementPartners() {
  return (
    <section className="bg-section-soft py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground">
            Placement Partners
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-6 max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-card-heading md:text-5xl">
            Where Our Students Build Their Careers
          </h2>

          <p className="mt-6 text-lg leading-8 text-card-description">
            Our graduates are trusted by leading hospitals, healthcare
            institutions, research organizations, and healthcare providers
            across India.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {recruiters.map((company) => (
            <div
              key={company.name}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-10 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:bg-card-hover hover:shadow-lg"
            >
              {/* Accent */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />

              <div className="flex h-24 items-center justify-center">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="h-16 w-auto object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-lg font-semibold text-card-heading transition-colors duration-300 group-hover:text-primary">
                  {company.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="relative mt-24 overflow-hidden rounded-3xl border border-border bg-card shadow-md">
          {/* Decorative Background */}
          <div className="absolute inset-y-0 left-0 w-2 bg-primary" />
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary-soft blur-3xl opacity-70" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-accent blur-3xl opacity-60" />

          <div className="relative grid gap-12 px-8 py-12 lg:grid-cols-[1.3fr_1fr] lg:px-14 lg:py-14">
            {/* Left Content */}
            <div>
              <span className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                Industry Network
              </span>

              <h3 className="mt-6 text-3xl font-bold leading-tight text-card-heading md:text-4xl">
                Building Careers Through Strong Industry Partnerships
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-card-description">
                AINE has established enduring collaborations with renowned
                hospitals, healthcare institutions, and medical organizations
                across India. These partnerships provide our students with
                outstanding placement opportunities, clinical exposure,
                internships, and pathways to successful professional careers.
              </p>
            </div>

            {/* Right Highlights */}
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl bg-background p-6">
                <p className="text-3xl font-bold text-primary">250+</p>
                <p className="mt-2 text-sm font-medium text-card-subheading">
                  Recruiting Partners
                </p>
              </div>

              <div className="rounded-2xl bg-background p-6">
                <p className="text-3xl font-bold text-primary">95%</p>
                <p className="mt-2 text-sm font-medium text-card-subheading">
                  Placement Rate
                </p>
              </div>

              <div className="rounded-2xl bg-background p-6">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="mt-2 text-sm font-medium text-card-subheading">
                  Internships
                </p>
              </div>

              <div className="rounded-2xl bg-background p-6">
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="mt-2 text-sm font-medium text-card-subheading">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
