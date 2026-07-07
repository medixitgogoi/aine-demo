import React from "react";
import {
  Users,
  GraduationCap,
  Briefcase,
  UserCheck,
} from "lucide-react";

const adminStaff = [
  {
    name: "Dr. Rajiv Sharma",
    role: "Director",
    image: "/staff/director.jpg",
  },
  {
    name: "Ms. Ananya Das",
    role: "Academic Coordinator",
    image: "/staff/coordinator.jpg",
  },
  {
    name: "Mr. Rahul Verma",
    role: "Administrative Officer",
    image: "/staff/admin.jpg",
  },
  {
    name: "Mrs. Pooja Singh",
    role: "Student Services Head",
    image: "/staff/student.jpg",
  },
];

const Administration = () => {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text-primary)]">
      
      {/* HERO */}
      <section className="bg-[var(--color-section-primary)] py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <Users className="w-10 h-10 text-[var(--color-primary)]" />
        </div>
        <h1 className="text-4xl font-bold text-[var(--color-primary)]">
          Administration
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-[var(--color-text-secondary)]">
          Meet the administrative backbone of AINE, dedicated to ensuring smooth
          operations and a student-first environment.
        </p>
      </section>

      {/* ADMINISTRATIVE STAFF */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        
        {/* Heading */}
        {/* <div className="mb-12 text-center">
          <div className="flex justify-center mb-3">
            <Briefcase className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <h2 className="text-3xl font-semibold text-[var(--color-card-heading)]">
            Administrative Staff
          </h2>
          <p className="mt-3 text-[var(--color-text-tertiary)] max-w-xl mx-auto">
            Our leadership and administrative professionals ensure excellence,
            coordination, and institutional growth at AINE.
          </p>
        </div> */}

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {adminStaff.map((staff, index) => (
            <div
              key={index}
              className="bg-[var(--color-card)] rounded-[var(--radius-lg)] shadow-md hover:shadow-lg transition-all duration-300 border border-[var(--color-border)] group"
            >
              
              {/* Image */}
              <div className="relative w-full h-56 bg-[var(--color-card-muted)] rounded-t-[var(--radius-lg)] overflow-hidden">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Icon Badge */}
                <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  <UserCheck className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-[var(--color-card-heading)]">
                  {staff.name}
                </h3>

                <div className="flex items-center justify-center gap-2 mt-2">
                  <GraduationCap className="w-4 h-4 text-[var(--color-primary)]" />
                  <p className="text-sm text-[var(--color-primary)] font-medium">
                    {staff.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Administration;