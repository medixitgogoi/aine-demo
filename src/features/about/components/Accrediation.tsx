import Image from "next/image";

const approvals = [
  {
    name: "Indian Nursing Council",
    logo: "/images/about/about-1.jpg",
  },
  {
    name: "Assam Nurses' Midwives' & Health Visitors' Council",
    logo: "/images/about/about-1.jpg",
  },
  {
    name: "Srimanta Sankaradeva University of Health Sciences",
    logo: "/images/about/about-1.jpg",
  },
  {
    name: "Government of Assam",
    logo: "/images/about/about-1.jpg",
  },
  {
    name: "National Assessment and Accreditation Council",
    logo: "/images/about/about-1.jpg",
  },
  {
    name: "University Grants Commission",
    logo: "/images/about/about-1.jpg",
  },
];

export default function Approvals() {
  return (
    <section className="bg-[#FAF8F3] py-32">
      <div className="container-custom">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.35em]">
            Approvals & Accreditation
          </span>

          <div className="mx-auto mt-5 h-px w-20 bg-primary" />

          <h2 className="mt-8 text-5xl font-bold leading-tight text-slate-900">
            Recognised by India's Leading
            <br />
            Regulatory & Academic Bodies
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-slate-600">
            Every programme at AINE is conducted in accordance with the
            regulations and standards prescribed by nationally recognised
            statutory and academic authorities.
          </p>
        </div>

        {/* Logo Ribbon */}

        <div className="mt-24 space-y-20">
          {approvals.map((item) => (
            <div key={item.name} className="group flex flex-col items-center">
              {/* Divider */}

              <div className="mb-10 h-px w-full bg-slate-200 transition-all duration-500 group-hover:bg-primary" />

              {/* Logo */}

              <div className="relative h-28 w-28 transition duration-500 group-hover:scale-110">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  className="object-contain grayscale transition duration-500 group-hover:grayscale-0"
                />
              </div>

              {/* Name */}

              <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                {item.name}
              </h3>

              <p className="mt-3 max-w-xl text-center leading-8 text-slate-500 opacity-0 transition duration-500 group-hover:opacity-100">
                Recognised as one of the statutory and regulatory bodies
                ensuring quality standards in higher and nursing education.
              </p>
            </div>
          ))}

          {/* Bottom Divider */}

          <div className="h-px w-full bg-slate-200" />
        </div>

        {/* Institutional Note */}

        <div className="mx-auto mt-24 max-w-4xl text-center">
          <p className="text-lg leading-9 text-slate-600">
            These recognitions reaffirm the institute's commitment to
            maintaining the highest standards of nursing education, ethical
            practice, clinical competence, and academic excellence, ensuring
            that every graduate is equipped to serve the healthcare profession
            with confidence and integrity.
          </p>
        </div>
      </div>
    </section>
  );
}
