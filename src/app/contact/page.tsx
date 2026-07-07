import ContactFormSection from "@/features/contact/components/ContactFormSection";
import Hero from "@/features/contact/components/Hero";
import MapSection from "@/features/contact/components/MapSection";
import React from "react";

const page = () => {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Hero />
      <ContactFormSection />
      <MapSection />
    </main>
  );
};

export default page;
