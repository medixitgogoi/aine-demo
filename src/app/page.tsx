// import Experience from "@/components/sections/Experience";
// import Services from "@/components/sections/Services";
import About from "@/features/home/components/About";
import Courses from "@/features/home/components/Courses";
import Hero from "@/features/home/components/Hero";
import HighlightsSection from "@/features/home/components/Highlights";
import Placements from "@/features/home/components/Placements";
import RankingsRecognition from "@/features/home/components/RankingsRecognition";
import StatsSection from "@/features/home/components/StatsSection";
// import Testimonials from "@/features/portfolio/components/Testimonials";

export default function Home() {
  return (
    <div className="flex-col flex-1">
      <Hero />
      <About />
      <StatsSection />
      <Placements />
      <Courses />
      <HighlightsSection />
      <RankingsRecognition />
      {/* <Experience />
      <Services />
      <Testimonials /> */}
    </div>
  );
}

// this is the home page
