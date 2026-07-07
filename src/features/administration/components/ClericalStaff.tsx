import React from "react";
import { FileText, User, Mail } from "lucide-react";

const clericalStaff = [
  {
    name: "Mr. Sandeep Kumar",
    role: "Office Assistant",
    image: "/staff/clerical1.jpg",
    email: "sandeep@aine.edu",
  },
  {
    name: "Ms. Ritu Sharma",
    role: "Clerk",
    image: "/staff/clerical2.jpg",
    email: "ritu@aine.edu",
  },
  {
    name: "Mr. Amit Das",
    role: "Accounts Assistant",
    image: "/staff/clerical3.jpg",
    email: "amit@aine.edu",
  },
  {
    name: "Mrs. Neha Singh",
    role: "Receptionist",
    image: "/staff/clerical4.jpg",
    email: "neha@aine.edu",
  },
];

const ClericalStaff = () => {
  return (
    <section className="py-16 px-6 bg-[var(--color-section-soft)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <FileText className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <h2 className="text-3xl font-semibold text-[var(--color-card-heading)]">
            Clerical Staff
          </h2>
          <p className="mt-3 text-[var(--color-text-tertiary)] max-w-xl mx-auto">
            Our clerical staff ensure the smooth execution of daily operations,
            documentation, and essential support services across the institution.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {clericalStaff.map((staff, index) => (
            <div
              key={index}
              className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-5 flex items-center gap-4 hover:shadow-md transition"
            >
              
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden bg-[var(--color-card-muted)] flex-shrink-0">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[var(--color-card-heading)]">
                  {staff.name}
                </h3>

                <div className="flex items-center gap-1 text-xs text-[var(--color-primary)] mt-1">
                  <User className="w-3 h-3" />
                  <span>{staff.role}</span>
                </div>

                <div className="flex items-center gap-1 text-xs text-[var(--color-text-tertiary)] mt-1">
                  <Mail className="w-3 h-3" />
                  <span className="truncate">{staff.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClericalStaff;