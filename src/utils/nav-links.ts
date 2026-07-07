import {
  GraduationCap,
  HeartPulse,
  Stethoscope,
  Activity,
  ShieldAlert,
} from "lucide-react";

export const navLinks = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Courses",
    href: "#courses",
    dropdownItems: [
      {
        name: "B.Sc Nursing",
        href: "/courses/bsc-nursing",
        desc: "4-Year Undergraduate Degree Program",
        icon: GraduationCap,
      },
      {
        name: "Post Basic B.Sc Nursing",
        // href: "/courses/post-basic-bsc-nursing",
        href: "/courses/bsc-nursing",

        desc: "2-Year Advanced Nursing Education",
        icon: HeartPulse,
      },
      {
        name: "M.Sc Nursing",
        // href: "/courses/msc-nursing",
        href: "/courses/bsc-nursing",
        desc: "Postgraduate Specialization & Research",
        icon: Stethoscope,
      },
      {
        name: "GNM",
        // href: "/courses/gnm",
        href: "/courses/bsc-nursing",
        desc: "General Nursing and Midwifery Diploma",
        icon: Activity,
      },
      {
        name: "Nurse Practitioner In Critical Care",
        // href: "/courses/nurse-practitioner",
        href: "/courses/bsc-nursing",
        desc: "Residency Program in Intensive Care",
        icon: ShieldAlert,
      },
    ],
  },
  { name: "Administration", href: "/administration" },
  { name: "Placements", href: "/placements" },
  // { name: "Achievements", href: "/achievements" },
  // { name: "Events", href: "#events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];
