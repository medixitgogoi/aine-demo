import EmployerTestimonials from "@/features/placements/components/EmployerTestimonials";
import PlacementsHero from "@/features/placements/components/Hero";
import LatestPlacements from "@/features/placements/components/LatestPlacements";
import PlacementPartners from "@/features/placements/components/PlacementPartners";
import StudentSuccessStories from "@/features/placements/components/StudentSuccessStories";
import React from "react";

const page = () => {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <PlacementsHero />
      <PlacementPartners />
      <StudentSuccessStories />
      <EmployerTestimonials />
      <LatestPlacements />
    </main>
  );
};

export default page;
