"use client";

import { Divide, BookOpen, Atom, FlaskConical, Sprout } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="relative overflow-hidden py-20" style={{ backgroundColor: "#F5F7FE" }}>

      {/* ── Subtle background texture ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Soft glow blobs */}
        <div style={{ position:"absolute", top:"-80px", right:"-80px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle, rgba(0,9,175,0.07) 0%, transparent 70%)", filter:"blur(20px)" }} />
        <div style={{ position:"absolute", bottom:"-60px", left:"-60px", width:"360px", height:"360px", borderRadius:"50%", background:"radial-gradient(circle, rgba(241,170,0,0.08) 0%, transparent 70%)", filter:"blur(20px)" }} />
        {/* Math doodle background */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"url('/background.png')", backgroundSize:"cover", backgroundPosition:"center", opacity:0.1 }} />
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

          {/* CTA card */}
          <motion.div
            custom={subjects.length}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            style={{
              borderRadius: "20px",
              padding: "28px",
              background: "linear-gradient(135deg, #0009af 0%, #0014e0 100%)",
              boxShadow: "0 8px 32px rgba(0,9,175,0.22)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "12px",
              cursor: "default",
            }}
          >
            <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", lineHeight: 1.4 }}>
              Not sure which subject?
            </p>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.70)", lineHeight: 1.6 }}>
              Book a free 30-min demo and we&apos;ll match your child with the right tutor.
            </p>
            <a
              href="/contact"
              style={{
                marginTop: "4px",
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "#f1aa00",
                color: "#101928",
                fontSize: "13px",
                fontWeight: 700,
                padding: "9px 18px",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              Book Free Demo →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}