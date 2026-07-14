"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  PlayCircle,
  GraduationCap,
  Award,
  Building2,
} from "lucide-react";
import SectionHeader from "@/components/section/SectionHeader";

const stories = [
  {
    name: "Ananya Sharma",
    course: "B.Sc Nursing",
    company: "Apollo Hospitals",
    year: "Batch of 2024",
    video: "/videos/video.mp4",
    quote:
      "AINE transformed my confidence and clinical skills. The dedicated faculty, practical exposure, and placement support helped me secure my dream opportunity immediately after graduation.",
  },
  {
    name: "Riya Das",
    course: "GNM",
    company: "Fortis Healthcare",
    year: "Batch of 2023",
    video: "/videos/video.mp4",
    quote:
      "The learning environment at AINE prepared me for real-world challenges. Every internship and clinical posting contributed to the confidence I carry today.",
  },
  {
    name: "Priyanshu Bora",
    course: "Post Basic B.Sc Nursing",
    company: "AIIMS",
    year: "Batch of 2022",
    video: "/videos/video.mp4",
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
    <section className="bg-background-dark pb-28 pt-15">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center flex flex-col items-center justify-center">
          <SectionHeader text="Student Testimonials" />

          <h2 className="mt-8 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Stories of Success
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Hear directly from our graduates who have transformed their
            education into successful professional careers.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.2fr_.8fr]">
          {/* Left Column: Video & New Sub-Video Stats Element */}
          <div className="flex flex-col justify-center gap-10">
            {/* Video Container */}
            <div className="overflow-hidden rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl bg-white/[0.02]">
              <div className="relative aspect-video w-full">
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

            {/* New UX Feature: Quick Trust Stats Strip */}
            <div className="grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-neutral-200 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3.5 px-2">
                <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    Clinical Ready
                  </p>
                  <p className="text-xs text-slate-500">Hands-on exposure</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 border-x border-white/10 px-4">
                <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    100% Verified
                  </p>
                  <p className="text-xs text-slate-500">Alumni career paths</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 px-2">
                <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    Top Networks
                  </p>
                  <p className="text-xs text-slate-500">Tier-1 hospital ties</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card - Light Mode Background */}
          <div className="flex flex-col justify-between rounded-3xl border border-border bg-card-light-bg p-10 shadow-xl">
            <div>
              <Quote className="h-12 w-12 text-primary/80" />
              <blockquote className="mt-6 text-xl font-medium leading-9 text-card-heading italic">
                "{story.quote}"
              </blockquote>
            </div>

            <div className="mt-10">
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-2xl font-bold tracking-tight text-card-heading">
                  {story.name}
                </h3>
                <p className="mt-1.5 text-base font-medium text-card-subheading">
                  {story.course}
                </p>
                <p className="mt-1 font-semibold text-primary">
                  {story.company}
                </p>
                <p className="mt-4 text-xs font-semibold tracking-wider uppercase text-gray-400">
                  {story.year}
                </p>
              </div>

              {/* Controls */}
              <div className="mt-8 flex items-center justify-between pt-4">
                <div className="flex gap-2.5">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        current === index
                          ? "w-9 bg-primary"
                          : "w-2.5 bg-primary/30 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="rounded-xl border border-gray-200 bg-white p-3 transition-all duration-200 hover:border-primary hover:bg-primary-50 text-card-heading"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    className="rounded-xl border border-gray-200 bg-white p-3 transition-all duration-200 hover:border-primary hover:bg-primary-50 text-card-heading"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
