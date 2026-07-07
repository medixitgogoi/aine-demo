import Cta from "@/features/gallery/components/Cta";
import GallerySection from "@/features/gallery/components/GallerySection";
import Hero from "@/features/gallery/components/Hero";

const page = () => {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Hero />
      <GallerySection />
      {/* <Cta /> */}
    </main>
  );
};

export default page;
