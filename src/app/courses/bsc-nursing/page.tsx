import AdmissionCriteria from "@/features/courses/bsc/components/AdmissionCriteria";
import ApplicationProcedure from "@/features/courses/bsc/components/ApplicationProcedure";
import Hero from "@/features/courses/bsc/components/Hero";
import SelectionProcess from "@/features/courses/bsc/components/SelectionProcess";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <Hero />
      <AdmissionCriteria />
      <ApplicationProcedure />
      <SelectionProcess />
    </main>
  );
};

export default page;
