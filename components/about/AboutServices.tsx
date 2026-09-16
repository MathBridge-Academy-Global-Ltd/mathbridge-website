"use client";

import { motion } from "framer-motion";
import {
  Video,
  Users,
  FlaskConical,
  Monitor,
  ClipboardList,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    Icon: Video,
    title: "Online One-on-One Tutoring",
    desc: "Live, personalised sessions between a student and a dedicated expert tutor.",
    color: "#0009af",
    bg: "#EAF0FE",
  },
  {
    Icon: Users,
    title: "After School Classes",
    desc: "Structured learning sessions after regular school hours, led by experienced educators.",
    color: "#c27c00",
    bg: "#FDF3E7",
  },
  {
    Icon: FlaskConical,
    title: "STEM Education",
    desc: "Building strong foundations in Science, Technology, Engineering & Maths.",
    color: "#166534",
    bg: "#EAF9EF",
  },
  {
    Icon: Monitor,
    title: "Digital Literacy Training",
    desc: "Equipping learners with the tech skills needed to thrive in a digital world.",
    color: "#6d28d9",
    bg: "#F3F0FF",
  },
  {
    Icon: ClipboardList,
    title: "Exam Preparation",
    desc: "SAT, ACT, GCSE, IGCSE, A-Level and other exam prep with a focus on strategy and confidence.",
    color: "#9f1239",
    bg: "#FCEAEE",
  },
  {
    Icon: GraduationCap,
    title: "Academic Mentoring",
    desc: "Holistic guidance on study habits, motivation and long-term academic goals.",
    color: "#065f46",
    bg: "#D1FAE5",
  },
];

export default function AboutServices() {
  return (
    <section className="relative overflow-hidden py-20 bg-[#FAFBFF]">
      {/* Net grid background pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 9, 175, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 9, 175, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Background texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.07,
          pointerEvents: "none",
        }}
      />
      {/* Glow blobs */}
      <div aria-hidden="true" style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,9,175,0.07) 0%, transparent 70%)", filter: "blur(20px)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(241,170,0,0.08) 0%, transparent 70%)", filter: "blur(20px)", pointerEvents: "none" }} />

      <div className="relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-lg mx-auto mb-14"
        >
          <h2 className="text-[2rem] md:text-[2.25rem] font-extrabold tracking-tight text-gray-900">
            <span style={{ fontFamily: "var(--font-kavoon)", color: "#f1aa00", position: "relative", display: "inline-block" }}>
              Our
              <svg aria-hidden="true" style={{ position: "absolute", bottom: "-5px", left: 0, width: "100%", height: "7px", overflow: "visible" }} viewBox="0 0 200 7" preserveAspectRatio="none">
                <path d="M0 3.5 Q25 0 50 3.5 Q75 7 100 3.5 Q125 0 150 3.5 Q175 7 200 3.5" stroke="#f1aa00" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            <span style={{ color: "#101928" }}>Services</span>
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Everything a student needs to learn, grow and excel — in one place.
          </p>
        </motion.div>

        {/* ── Service cards (scrollable on mobile, grid on md+) ── */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0 no-scrollbar">
          {services.map(({ Icon, title, desc, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,9,175,0.12)" }}
              className="w-[82vw] max-w-[320px] shrink-0 snap-center flex flex-col gap-4 rounded-2xl p-7 bg-white cursor-default md:w-auto md:max-w-none md:shrink"
              style={{
                border: "1px solid rgba(0,9,175,0.07)",
                boxShadow: "0 2px 16px rgba(0,9,175,0.05)",
                transition: "box-shadow 0.25s ease",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: bg }}
              >
                <Icon size={22} style={{ color }} strokeWidth={1.8} />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-bold text-[0.95rem]" style={{ color: "#101928" }}>{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "rgba(16,25,40,0.55)" }}>{desc}</p>
              </div>

              {/* Bottom accent line */}
              <div
                className="mt-auto pt-4"
                style={{ borderTop: `2px solid ${bg}` }}
              >
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color }}>
                  MathBridge Service
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile swipe cue */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-3 text-xs font-medium text-gray-400">
          <span>← Swipe to explore services →</span>
        </div>

      </div>
    </section>
  );
}
