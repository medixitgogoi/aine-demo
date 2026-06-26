// import Experience from "@/components/sections/Experience";
// import Services from "@/components/sections/Services";
import About from "@/features/home/components/About";
import Hero from "@/features/home/components/Hero";
import HighlightsSection from "@/features/home/components/Highlights";
import RankingsRecognition from "@/features/home/components/RankingsRecognition";
// import Testimonials from "@/features/portfolio/components/Testimonials";

export default function Home() {
  return (
    <div className="flex-col flex-1">
      <Hero />
      <About />
      <RankingsRecognition />
      <HighlightsSection />
      {/* <Experience />
      <Services />
      <Testimonials /> */}
    </div>
  );
}

// this is the home page