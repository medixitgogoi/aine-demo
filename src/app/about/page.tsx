import ApprovalAccreditation from "@/features/about/components/Accreditation";
import Awards from "@/features/about/components/Awards";
import Hero from "@/features/about/components/Hero";
import Introduction from "@/features/about/components/Intro";
import MessageDesk from "@/features/about/components/MesssageDesk";
import Mission from "@/features/about/components/Mission";
import Objectives from "@/features/about/components/Objectives";
import Rules from "@/features/about/components/Rules";

export default function AboutPage() {
  return (
    <main className="">
      <Hero />
      <Introduction />

      <div className="container-custom">
        <div className="h-px bg-slate-200" />
      </div>

      <Objectives />
      <Mission />
      <MessageDesk />
      <ApprovalAccreditation />
      <Awards />
      <Rules />
    </main>
  );
}
