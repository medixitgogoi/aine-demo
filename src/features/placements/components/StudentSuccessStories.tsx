"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, PlayCircle } from "lucide-react";

const stories = [
  {
    name: "Ananya Sharma",
    course: "B.Sc Nursing",
    company: "Apollo Hospitals",
    year: "Batch of 2024",
    video: "/videos/success/s1.mp4",
    quote:
      "AINE transformed my confidence and clinical skills. The dedicated faculty, practical exposure, and placement support helped me secure my dream opportunity immediately after graduation.",
  },
  {
    name: "Riya Das",
    course: "GNM",
    company: "Fortis Healthcare",
    year: "Batch of 2023",
    video: "/videos/success/s2.mp4",
    quote:
      "The learning environment at AINE prepared me for real-world challenges. Every internship and clinical posting contributed to the confidence I carry today.",
  },
  {
    name: "Priyanshu Bora",
    course: "Post Basic B.Sc Nursing",
    company: "AIIMS",
    year: "Batch of 2022",
    video: "/videos/success/s3.mp4",
    quote:
      "From academics to personality development, AINE ensured I was industry-ready. The placement cell continuously guided me throughout my recruitment journey.",
  },
];

export default function StudentSuccessStories() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % stories.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const story = stories[current];

  const next = () => setCurrent((prev) => (prev + 1) % stories.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <section className="bg-background pb-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground">
            Student Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-card-heading md:text-5xl">
            Stories of Success
          </h2>

          <p className="mt-6 text-lg leading-8 text-card-description">
            Hear directly from our graduates who have transformed their
            education into successful professional careers.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
          {/* Video */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-md">
            <div className="relative aspect-video">
              <video
                key={story.video}
                controls
                className="h-full w-full object-cover"
                poster="/images/video-placeholder.jpg"
              >
                <source src={story.video} type="video/mp4" />
              </video>

              <div className="absolute left-6 top-6 rounded-full bg-primary p-3 text-primary-foreground shadow-lg">
                <PlayCircle className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-10 shadow-md">
            <Quote className="h-14 w-14 text-primary" />

            <blockquote className="mt-8 text-xl leading-10 text-card-description">
              "{story.quote}"
            </blockquote>

            <div className="mt-12 border-t border-border pt-8">
              <h3 className="text-2xl font-bold text-card-heading">
                {story.name}
              </h3>

              <p className="mt-2 text-card-subheading">{story.course}</p>

              <p className="mt-1 font-medium text-primary">{story.company}</p>

              <p className="mt-4 text-sm text-text-muted">{story.year}</p>
            </div>

            {/* Controls */}

            <div className="mt-12 flex items-center justify-between">
              <div className="flex gap-2">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all ${
                      current === index ? "w-10 bg-primary" : "w-4 bg-border"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="rounded-xl border border-border bg-background p-3 transition hover:border-primary hover:bg-primary-soft"
                >
                  <ChevronLeft className="h-5 w-5 text-card-heading" />
                </button>

                <button
                  onClick={next}
                  className="rounded-xl border border-border bg-background p-3 transition hover:border-primary hover:bg-primary-soft"
                >
                  <ChevronRight className="h-5 w-5 text-card-heading" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
