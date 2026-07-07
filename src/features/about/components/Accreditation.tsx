import SectionHeader from "@/components/section/SectionHeader";
import { approvals } from "@/utils/approvals";
import Image from "next/image";

export default function Approvals() {
  return (
    <section className="bg-background-dark/1 py-24 lg:pb-32">
      <div className="container-custom px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto flex flex-col items-center justify-center max-w-3xl text-center">
          <SectionHeader text="Approvals & Accreditation" />

          <h2 className="mt-8 text-4xl lg:text-5xl font-black leading-tight text-slate-900 tracking-tight">
            Recognised by India's Leading
            <br />
            Regulatory & Academic Bodies
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base lg:text-lg leading-relaxed text-slate-600">
            Every programme at AINE is conducted in accordance with the
            regulations and standards prescribed by nationally recognised
            statutory and academic authorities.
          </p>
        </div>

        {/* Structural Border Grid Layout */}
        <div className="mt-20 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-slate-400 bg-slate-200/40 gap-px overflow-hidden">
          {approvals.map((item) => (
            <div
              key={item.name}
              className="group relative flex flex-col justify-between bg-white p-10 transition-colors duration-300 hover:bg-primary/[0.01]"
            >
              {/* Clean Active Grid Border Overlay */}
              <div className="absolute inset-0 -mx-[1px] -my-[1px] border border-transparent group-hover:border-slate-400 pointer-events-none z-10 transition-colors duration-200" />

              {/* Subtle top-left structural accent marker */}
              <div className="absolute top-4 left-4 h-1.5 w-1.5 bg-slate-300/60 group-hover:bg-primary/50 transition-colors duration-300 rounded-none" />

              <div className="relative z-0">
                {/* Logo Area Boxed with a clean border */}
                <div className="flex h-24 w-24 items-center justify-center border border-slate-200 bg-white p-4 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-xs rounded-xs">
                  <div className="relative h-full w-full">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain grayscale contrast-125 transition duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="mt-8 text-xl font-black text-slate-900 tracking-tight">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Recognised as one of the statutory and regulatory bodies
                  ensuring quality standards in higher and nursing education.
                </p>
              </div>

              {/* Minimal Action Cue */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-primary transition-colors duration-300 relative z-0">
                <span>Verified Status</span>
                <span className="h-1 w-1 rounded-full bg-slate-300 group-hover:bg-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Note */}
        {/* <div className="mx-auto mt-24 max-w-4xl text-center">
          <p className="text-base lg:text-lg leading-relaxed text-slate-500 font-medium max-w-3xl mx-auto">
            These recognitions reaffirm the institute's commitment to
            maintaining the highest standards of nursing education, ethical
            practice, clinical competence, and academic excellence.
          </p>
        </div> */}
      </div>
    </section>
  );
}
