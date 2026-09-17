"use client";

import { motion } from "framer-motion";
import type { ExamItem } from "@/types/home";

const exams: ExamItem[] = [
  { label: "SAT",     desc: "Scholastic Assessment Test" },
  { label: "GCSE",    desc: "General Certificate of Secondary Education" },
  { label: "IGCSE",   desc: "International GCSE" },
  { label: "A-Levels", desc: "Advanced Level Qualifications" },
  { label: "JAMB",    desc: "Joint Admissions & Matriculation Board" },
  { label: "WAEC",    desc: "West African Examinations Council" },
  { label: "GCE",     desc: "General Certificate of Education" },
  { label: "NABTEB",  desc: "National Business & Technical Exams Board" },
];

// Duplicate for seamless infinite scroll
const track = [...exams, ...exams, ...exams];

export default function ExamMarquee() {
  return (
    <div
      className="relative overflow-hidden border-y"
      style={{
        backgroundColor: "#ffffff",
        borderColor: "rgba(0,9,175,0.08)",
        paddingTop: "18px",
        paddingBottom: "18px",
      }}
    >
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{ background: "linear-gradient(to right, white, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{ background: "linear-gradient(to left, white, transparent)" }}
      />

      {/* Eyebrow label */}
      <div
        className="absolute inset-y-0 left-0 z-20 hidden md:flex items-center px-6"
        style={{
          background: "linear-gradient(to right, white 70%, transparent)",
          minWidth: "200px",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(16,25,40,0.4)",
            whiteSpace: "nowrap",
          }}
        >
          We prepare you for
        </span>
      </div>

      {/* Scrolling track */}
      <motion.div
        className="flex items-center gap-8 w-max"
        style={{ paddingLeft: "220px" }}
        animate={{ x: [0, "-33.33%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 28,
          ease: "linear",
        }}
      >
        {track.map((exam, i) => (
          <div
            key={i}
            className="flex items-center gap-3 shrink-0"
          >
            {/* Bullet */}
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: i % 2 === 0 ? "#0009af" : "#f1aa00",
                flexShrink: 0,
              }}
            />

            {/* Exam label */}
            <span
              style={{
                fontFamily: "var(--font-kavoon)",
                fontSize: "1rem",
                fontWeight: 400,
                color: "#0009af",
                whiteSpace: "nowrap",
              }}
            >
              {exam.label}
            </span>

            {/* Full name */}
            <span
              style={{
                fontSize: "12px",
                color: "rgba(16,25,40,0.40)",
                whiteSpace: "nowrap",
                fontWeight: 500,
              }}
            >
              {exam.desc}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
