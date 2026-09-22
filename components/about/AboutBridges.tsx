"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { StaffMember, Tab } from "@/types/about";
import WavyText from "@/components/WavyText";

/* ─────────────────── Data ─────────────────── */
/* Tabs: All → Support Team → HODs → Subjects */
const tabs: Tab[] = [
  { id: "all", label: "All", color: "#0009af" },
  { id: "hods", label: "HODs", color: "#c27c00" },
  { id: "maths", label: "Mathematics", color: "#0009af" },
  { id: "english", label: "English", color: "#6D28D9" },
  { id: "physics", label: "Physics", color: "#0e7490" },
  { id: "biology", label: "Biology", color: "#166534" },
  { id: "chemistry", label: "Chemistry", color: "#9a3412" },
  { id: "others", label: "Support Team", color: "#374151" },
];

const allStaff: StaffMember[] = [
  {
    name: "Bolaji", role: "Head of Mathematics",
    bio: "Breaks down complex Maths problems into simple, logical steps.",
    image: "/images/about/staffs/maths/bolaji-maths.jpg",
    deptIds: ["maths"], deptColor: "#0009af", isHOD: true,
  },
  {
    name: "Praise", role: "Head of English",
    bio: "Brings English to life through comprehension, essay writing, and critical analysis.",
    image: "/images/about/staffs/english/praise-english.jpg",
    deptIds: ["english"], deptColor: "#6D28D9", isHOD: true,
  },
  {
    name: "Joshua", role: "Head of Physics",
    supportRole: "Technical Support",
    bio: "Makes abstract Physics concepts tangible through vivid derivations, worked examples.",
    image: "/images/about/staffs/physics/joshua-physics.jpg",
    deptIds: ["physics", "others"], deptColor: "#0e7490", isHOD: true, pillRole: "Dev",
  },
  {
    name: "Joy", role: "Head of Biology",
    bio: "Inspires curiosity about living systems with focused WAEC and GCSE prep.",
    image: "/images/about/staffs/biology/joy-biology.jpg",
    deptIds: ["biology"], deptColor: "#166534", isHOD: true,
  },
  {
    name: "Titilope", role: "Head of Chemistry",
    bio: "Guides students through Chemistry concepts with clear, exam focused methods.",
    image: "/images/about/staffs/chemistry/titilope-chemistry.jpg",
    deptIds: ["chemistry"], deptColor: "#9a3412", isHOD: true,
  },
  {
    name: "Grace", role: "Mathematics Tutor",
    supportRole: "Administrator",
    bio: "Builds strong statistical foundations and exam confidence in students.",
    image: "/images/about/staffs/maths/grace-maths.jpg",
    deptIds: ["maths", "others"], deptColor: "#0009af", pillRole: "Admin",
  },
  {
    name: "Tehila", role: "Mathematics Tutor",
    bio: "Makes Maths enjoyable through interactive problem solving and practical examples.",
    image: "/images/about/staffs/maths/tehila-maths.jpg",
    deptIds: ["maths"], deptColor: "#0009af",
  },
  {
    name: "Tomiwa", role: "Mathematics Tutor",
    supportRole: "Technical Support",
    bio: "Helps students hit target grades through structured practice and revision.",
    image: "/images/about/staffs/maths/tomiwa-maths.jpg",
    deptIds: ["maths", "others"], deptColor: "#0009af", pillRole: "Dev",
  },
  {
    name: "Damilola", role: "English Tutor",
    bio: "Strengthens reading comprehension, creative writing, and grammar across all levels.",
    image: "/images/about/staffs/english/damilola-english.jpg",
    deptIds: ["english"], deptColor: "#6D28D9",
  },
  {
    name: "Ibrahim", role: "Chemistry Tutor",
    bio: "Simplifies chemical equations and practical principles for top exam performance.",
    image: "/images/about/staffs/chemistry/ibrahim-chemistry.jpg",
    deptIds: ["chemistry"], deptColor: "#9a3412",
  },
  {
    name: "Gboyega Afolalu", role: "CEO/FOUNDER",
    bio: "Passionate educator committed to building excellence and inspiring student achievement.",
    image: "/images/about/staffs/others/gboye-others.jpg",
    deptIds: ["others"], deptColor: "#374151",
  },
  {
    name: "Nelson", role: "Director",
    bio: "Guides strategic direction and core mission to empower student learning.",
    image: "/images/about/staffs/others/nelson-others.jpg",
    deptIds: ["others"], deptColor: "#374151",
  },
  {
    name: "Enioluwa", role: "Chief Operating Officer",
    bio: "Oversees daily operations to ensure a seamless learning and tutoring experience.",
    image: "/images/about/staffs/others/enioluwa-others.jpg",
    deptIds: ["others"], deptColor: "#374151",
  },
  {
    name: "Favour", role: "Social Media Manager",
    bio: "Shares student stories across digital platforms and grows the learning community.",
    image: "/images/about/staffs/others/favour-others.jpg",
    deptIds: ["others"], deptColor: "#374151",
  },
  {
    name: "Milare", role: "Customer Success and Retention Manager",
    bio: "Supports students and parents from onboarding through every stage of learning.",
    image: "/images/about/staffs/others/milare-others.jpg",
    deptIds: ["others"], deptColor: "#374151",
  },
];

/* ─────────────────── Staff Card ─────────────────── */
function StaffCard({
  member,
  index,
  activeTab,
}: {
  member: StaffMember;
  index: number;
  activeTab: string;
}) {
  const isCEO = member.name === "Gboyega Afolalu";
  const isSupportTab = activeTab === "others";

  // If in Support Team tab, change title to Technical Support / Administrator
  const displayRole =
    isSupportTab && member.supportRole ? member.supportRole : member.role;

  const col = isSupportTab ? "#374151" : member.deptColor;

  // Pill badge:
  // On Support Team tab: show "HOD" or "Tutor" to highlight their dual academic role
  // On Subject or All tabs: show their pillRole ("Dev" or "Admin")
  const pillLabel =
    isSupportTab && member.supportRole
      ? member.isHOD
        ? "HOD"
        : "Tutor"
      : member.pillRole;

  const isHODPill = pillLabel === "HOD";

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.18 } }}
      className={`group relative rounded-2xl overflow-hidden border flex flex-col h-full transition-[border-color,box-shadow] duration-200 hover:shadow-[0_8px_28px_-8px_rgba(0,0,0,0.13)] ${
        isCEO
          ? "bg-[#f1aa00]/[0.02] border-[#f1aa00]/30 hover:border-[#f1aa00]/60"
          : "bg-white border-gray-100 hover:border-gray-200"
      }`}
    >
      {pillLabel && (
        <div
          className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase shadow-sm"
          style={{
            backgroundColor: isHODPill ? "#f1aa00" : "#0009af",
            color: isHODPill ? "#101928" : "#ffffff",
          }}
        >
          {pillLabel}
        </div>
      )}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-50 shrink-0">
        <Image src={member.image} alt={member.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" sizes="(max-width: 768px) 72vw, 260px" />
      </div>
      <div className="p-5 flex flex-col gap-1.5 flex-1">
        <div className="flex items-center gap-2 mb-0.5">
          <div className="w-5 h-[2px] rounded-full shrink-0" style={{ backgroundColor: col }} />
          <span className="text-[11px] font-black uppercase tracking-wider leading-none" style={{ color: col }}>
            {displayRole.trim()}
          </span>
        </div>
        <h3 className="text-base font-black text-[#101928] tracking-tight leading-snug">{member.name}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mt-1 line-clamp-3">{member.bio}</p>
      </div>
      <div className="h-[3px] w-full shrink-0" style={{ backgroundColor: col, opacity: 0.18 }} />
    </motion.div>
  );
}

/* ─────────────────── Main Component ─────────────────── */
export default function AboutBridges() {
  const [activeTab, setActiveTab] = useState("all");
  const tabsRef = useRef<HTMLDivElement>(null);

  const activeTabData = tabs.find((t) => t.id === activeTab)!;
  const visibleStaff =
    activeTab === "all"
      ? allStaff
      : activeTab === "hods"
      ? allStaff.filter((s) => s.isHOD)
      : activeTab === "others"
      ? [
          // 1. Core Support Team first
          ...allStaff.filter((s) => s.deptIds.includes("others") && !s.supportRole),
          // 2. Cross-functional Dev & Admin staff at the end
          ...allStaff.filter((s) => s.deptIds.includes("others") && s.supportRole),
        ]
      : allStaff.filter((s) => s.deptIds.includes(activeTab));

  const scrollTabs = (dir: "left" | "right") => {
    tabsRef.current?.scrollBy({ left: dir === "left" ? -120 : 120, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-24 bg-white">
      <div aria-hidden="true" className="absolute -top-32 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-[#f1aa00]/8 to-transparent blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#0009af]/6 to-transparent blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101928]">
            The{" "}
            <WavyText text="Bridges" fontColor="text-primaryGold" lineColor="text-primaryGold" />{" "}
            Behind <span className="text-primaryBlue">MATHBridge</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
            Meet the passionate educators and support team who make world class learning possible every day.
          </p>
        </motion.div>

        {/* ── Tabs (centered) ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-center justify-center gap-2 mb-10">
          <button onClick={() => scrollTabs("left")} className="shrink-0 md:hidden w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" aria-label="Scroll left">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <div ref={tabsRef} className="flex gap-2 overflow-x-auto no-scrollbar md:flex-wrap md:justify-center py-1 md:px-3">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 border ${isActive ? "text-white scale-[1.03]" : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`}
                  style={isActive ? { backgroundColor: tab.color, borderColor: tab.color } : {}}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <button onClick={() => scrollTabs("right")} className="shrink-0 md:hidden w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" aria-label="Scroll right">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </motion.div>

        {/* ── Label strip (centered) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "-label"}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-1 h-5 rounded-full" style={{ backgroundColor: activeTabData.color }} />
            <span className="text-sm font-black text-[#101928]">
              {activeTab === "all" ? "All Team Members" :
                activeTab === "hods" ? "Heads of Department" :
                  activeTab === "others" ? "Support Team" :
                    activeTabData.label + " Department"}
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-bold" style={{ backgroundColor: activeTabData.color + "18", color: activeTabData.color }}>
              {visibleStaff.length} member{visibleStaff.length !== 1 ? "s" : ""}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* ── Cards ── */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:flex md:flex-wrap md:justify-center md:items-stretch md:gap-5 md:overflow-visible md:pb-0 no-scrollbar">
              {visibleStaff.map((member, i) => (
                <div key={member.name + "-" + activeTab} className="w-[72vw] max-w-[240px] shrink-0 snap-center md:w-[220px] lg:w-[230px] xl:w-[240px] h-full">
                  <StaffCard member={member} index={i} activeTab={activeTab} />
                </div>
              ))}
            </div>
            {visibleStaff.length > 1 && (
              <div className="flex md:hidden items-center justify-center mt-3 text-xs font-medium text-gray-400">
                ← Swipe to explore all →
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
