import { Divide, BookOpen, Atom, FlaskConical, Sprout } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Subject = {
  icon: LucideIcon;
  iconBg: string;
  title: string;
  description: string;
  tags: string[];
};

const subjects: Subject[] = [
  {
    icon: Divide,
    iconBg: "bg-[#EAF0FE]",
    title: "Mathematics",
    description:
      "Building strong foundations in arithmetic, algebra, geometry, and problem-solving. Our approach ensures students move from rote calculation to genuine mathematical thinking — equipping them with skills that last a lifetime.",
    tags: ["Arithmetic", "Algebra", "Geometry", "Calculus", "Statistics"],
  },
  {
    icon: BookOpen,
    iconBg: "bg-[#FDF3E7]",
    title: "English",
    description:
      "Improving reading comprehension, writing skills, grammar, and communication. We help students find their voice, express ideas clearly, and develop a deep appreciation for language through engaging, structured lessons.",
    tags: ["Reading", "Writing", "Grammar", "Comprehension", "Literature"],
  },
  {
    icon: Atom,
    iconBg: "bg-[#EAF9EF]",
    title: "Physics",
    description:
      "Developing understanding of core scientific principles — from mechanics and waves to electricity and modern physics. We make abstract concepts tangible through worked examples and real-world connections.",
    tags: ["Mechanics", "Waves", "Electricity", "Thermodynamics", "Optics"],
  },
  {
    icon: FlaskConical,
    iconBg: "bg-[#FCEAEE]",
    title: "Chemistry",
    description:
      "Helping students grasp chemical concepts, equations, and problem-solving strategies. From the periodic table to organic chemistry, we break down complexity into clear, manageable steps.",
    tags: ["Atomic Structure", "Bonding", "Organic", "Stoichiometry", "Electrochemistry"],
  },
  {
    icon: Sprout,
    iconBg: "bg-[#EAF9EF]",
    title: "Biology",
    description:
      "Understanding living systems, ecology, genetics, and physiology — preparing students for academic success and careers in medicine, science, and beyond. We make biology vivid, relevant, and exciting.",
    tags: ["Cell Biology", "Genetics", "Ecology", "Physiology", "Evolution"],
  },
];

export default function Subjects() {
  return (
    <section className="bg-[#F5F7FE] py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-[2rem] md:text-[2.25rem] font-extrabold tracking-tight">
            <span className="text-primaryGold">Subjects</span>{" "}
            <span className="text-gray">we cover</span>
          </h2>
          <p className="mt-3 text-[0.9375rem] text-gray/60 leading-relaxed">
            From core sciences to language mastery — every subject taught by
            passionate, qualified tutors.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {subjects.map(({ icon: Icon, iconBg, title, description, tags }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-[0_2px_16px_rgba(16,25,40,0.06)] p-6 md:p-8"
            >
              <div
                className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${iconBg}`}
              >
                <Icon size={20} className="text-primaryBlue" strokeWidth={2} />
              </div>

              <h3 className="mt-4 text-[1.25rem] font-bold text-primaryBlue">
                {title}
              </h3>

              <p className="mt-2 text-[0.9375rem] leading-[1.7] text-gray/60 max-w-3xl">
                {description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full border border-primaryBlue/25 text-primaryBlue text-[0.8125rem] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}