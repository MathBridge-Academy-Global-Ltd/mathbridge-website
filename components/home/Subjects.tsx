"use client";

import { Divide, BookOpen, Atom, FlaskConical, Sprout } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

type Subject = {
  icon: LucideIcon;
  accent: string;
  iconBg: string;
  title: string;
  tagline: string;
  tags: string[];
};

const subjects: Subject[] = [
  {
    icon: Divide,
    accent: "#0009af",
    iconBg: "#EAF0FE",
    title: "Mathematics",
    tagline: "From arithmetic to calculus — deep understanding, not just formulas.",
    tags: ["Algebra", "Geometry", "Calculus", "Statistics"],
  },
  {
    icon: BookOpen,
    accent: "#c27c00",
    iconBg: "#FDF3E7",
    title: "English",
    tagline: "Clear writing, confident reading, and powerful communication skills.",
    tags: ["Writing", "Grammar", "Comprehension", "Literature"],
  },
  {
    icon: Atom,
    accent: "#166534",
    iconBg: "#EAF9EF",
    title: "Physics",
    tagline: "Abstract principles made concrete through real-world examples.",
    tags: ["Mechanics", "Waves", "Electricity", "Thermodynamics"],
  },
  {
    icon: FlaskConical,
    accent: "#9f1239",
    iconBg: "#FCEAEE",
    title: "Chemistry",
    tagline: "Complex reactions broken into clear, manageable steps.",
    tags: ["Organic", "Bonding", "Stoichiometry", "Electrochemistry"],
  },
  {
    icon: Sprout,
    accent: "#065f46",
    iconBg: "#D1FAE5",
    title: "Biology",
    tagline: "Genetics, ecology, and physiology — biology made vivid and relevant.",
    tags: ["Cell Biology", "Genetics", "Ecology", "Physiology"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 },
  }),
};

export default function Subjects() {
  return (
    <section className="relative overflow-hidden py-20" style={{ backgroundColor: "#FAFBFF" }}>

      {/* ── Subtle background texture ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Soft glow blobs */}
        <div style={{ position:"absolute", top:"-80px", right:"-80px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle, rgba(0,9,175,0.07) 0%, transparent 70%)", filter:"blur(20px)" }} />
        <div style={{ position:"absolute", bottom:"-60px", left:"-60px", width:"360px", height:"360px", borderRadius:"50%", background:"radial-gradient(circle, rgba(241,170,0,0.08) 0%, transparent 70%)", filter:"blur(20px)" }} />
      </div>

      <div className="relative max-w-[1120px] mx-auto px-6">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-lg mx-auto mb-14"
        >
          <h2 className="text-[2rem] md:text-[2.25rem] font-extrabold tracking-tight text-gray-900">
            <span style={{ fontFamily:"var(--font-kavoon)", color:"#f1aa00", position:"relative", display:"inline-block" }}>
              Subjects
              <svg aria-hidden="true" style={{ position:"absolute", bottom:"-5px", left:0, width:"100%", height:"7px", overflow:"visible" }} viewBox="0 0 200 7" preserveAspectRatio="none">
                <path d="M0 3.5 Q25 0 50 3.5 Q75 7 100 3.5 Q125 0 150 3.5 Q175 7 200 3.5" stroke="#f1aa00" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            <span style={{ color:"#101928" }}>we cover</span>
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Expert tutors across five core subjects — ready to unlock every student&apos;s potential.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subjects.map(({ icon: Icon, accent, iconBg, title, tagline, tags }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "28px",
                boxShadow: "0 2px 16px rgba(16,25,40,0.06)",
                border: "1px solid rgba(16,25,40,0.05)",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  backgroundColor: iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={20} style={{ color: accent }} strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 style={{ marginTop: "16px", fontSize: "1.1rem", fontWeight: 700, color: accent }}>
                {title}
              </h3>

              {/* Tagline */}
              <p style={{ marginTop: "6px", fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(16,25,40,0.55)", flexGrow: 1 }}>
                {tagline}
              </p>

              {/* Tags */}
              <div style={{ marginTop: "16px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 12px",
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      backgroundColor: iconBg,
                      color: accent,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA card — styled like the Royal Blue Testimonial card */}
          <motion.div
            custom={subjects.length}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="relative overflow-hidden rounded-[20px] bg-[#0009af] border border-white/20 shadow-[0_16px_40px_rgba(0,9,175,0.22)] transition-all duration-300 hover:shadow-[0_24px_50px_rgba(0,9,175,0.32)] flex flex-col justify-center cursor-default min-h-[220px]"
          >
            {/* ── BACKGROUND.PNG TEXTURE LAYER (Vivid & Visible Math Equations) ── */}
            <div
              className="absolute inset-0 pointer-events-none select-none z-0"
              style={{
                backgroundImage: "url('/background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                mixBlendMode: "screen",
                opacity: 0.99,
              }}
              aria-hidden="true"
            />

            {/* Subtle Gradient Vignette to keep text extra crisp */}
            <div
              className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-[#0009af]/75 via-transparent to-[#000673]/90"
              aria-hidden="true"
            />

            {/* Card Content */}
            <div className="relative z-10 p-7 flex flex-col justify-center gap-3 text-white">
              <p className="text-[1.15rem] font-bold text-white leading-snug">
                Not sure which subject?
              </p>
              <p className="text-[0.875rem] text-white/85 leading-relaxed">
                Book a free 30-min demo and we&apos;ll match your child with the right tutor.
              </p>
              <Link
                href="/contact"
                className="mt-1 inline-flex self-start items-center gap-1.5 bg-[#f1aa00] text-[#101928] text-[13px] font-bold px-4 py-2 rounded-full no-underline transition-all duration-200 hover:brightness-105 hover:shadow-md"
              >
                Book Free Demo →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}