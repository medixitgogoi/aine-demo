import { BadgeCheck, BookOpen, CalendarDays, ClipboardCheck, HeartPulse, School, ShieldCheck, Users } from "lucide-react";

export const rules = [
  {
    title: "Admission & Enrollment",
    icon: School,
    items: [
      "Admission is confirmed only after successful verification of all required documents.",
      "Students are expected to comply with all institutional regulations from the date of enrollment.",
      "Any false declaration or misrepresentation may result in cancellation of admission.",
    ],
  },
  {
    title: "Attendance",
    icon: ClipboardCheck,
    items: [
      "Students should maintain the minimum attendance prescribed by the institution and regulatory authorities.",
      "Attendance is mandatory for lectures, laboratory sessions, clinical postings, and examinations.",
      "Repeated absenteeism without prior approval may lead to disciplinary action.",
    ],
  },
  {
    title: "Uniform & Identity Card",
    icon: BadgeCheck,
    items: [
      "Students should wear the prescribed uniform during academic and clinical activities.",
      "Identity cards must be carried at all times while on campus.",
      "Replacement of lost identity cards should be requested through the administration office.",
    ],
  },
  {
    title: "Code of Conduct",
    icon: ShieldCheck,
    items: [
      "Students are expected to uphold discipline, professionalism, and mutual respect.",
      "Any form of ragging, discrimination, harassment, or misconduct is strictly prohibited.",
      "The institution reserves the right to initiate disciplinary proceedings for violations.",
    ],
  },
  {
    title: "Academic Responsibilities",
    icon: BookOpen,
    items: [
      "Assignments, practical records, and projects should be submitted within the prescribed deadlines.",
      "Students should actively participate in seminars, workshops, and academic activities.",
      "Academic integrity must be maintained at all times.",
    ],
  },
  {
    title: "Health & Wellbeing",
    icon: HeartPulse,
    items: [
      "Students should maintain personal health and hygiene.",
      "Medical emergencies should be immediately reported to the institution.",
      "Participation in health awareness and wellness programmes is encouraged.",
    ],
  },
  {
    title: "Campus Life",
    icon: Users,
    items: [
      "Students are encouraged to participate in cultural, sports, and community outreach activities.",
      "Campus facilities should be used responsibly and respectfully.",
      "Damage to institutional property may attract penalties.",
    ],
  },
  {
    title: "Leave & Holidays",
    icon: CalendarDays,
    items: [
      "Leave applications should be submitted in advance whenever possible.",
      "Medical leave should be supported by appropriate documentation.",
      "Vacation schedules shall follow the academic calendar notified by the institute.",
    ],
  },
];