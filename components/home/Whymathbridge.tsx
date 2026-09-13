"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, type RefObject } from "react";

const benefits = [
  {
    title: "Personalized Learning Plans",
    description:
      "Each student receives a custom roadmap tailored to their goals and current level.",
  },
  {
    title: "Qualified Tutors",
    description:
      "Every tutor is thoroughly vetted and specialized in their subject area.",
  },
  {
    title: "Continuous Assessments",
    description:
      "Regular evaluations ensure students are always progressing.",
  },
  {
    title: "Progress Tracking & Reports",
    description:
      "Parents stay informed with detailed, structured progress reports.",
  },
  {
    title: "Flexible Online Sessions",
    description:
      "Learn from anywhere at a schedule that works for your family.",
  },
];

/** Decorative academic SVG illustration layered on the gold background */
function GoldBgIllustration() {
  const rulerTicks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];
  const sparkles: [number, number, number][] = [
    [55, 340, 0.5],
    [440, 200, 0.4],
    [300, 30, 0.55],
    [180, 520, 0.35],
  ];

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 480 560"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background tint shapes */}
      <circle cx="60" cy="80" r="90" fill="rgba(255,255,255,0.08)" />
      <circle cx="420" cy="490" r="110" fill="rgba(0,0,0,0.06)" />
      <circle cx="430" cy="60" r="55" fill="rgba(255,255,255,0.12)" />

      {/* Compass — top-right */}
      <g transform="translate(390,55) rotate(-15)">
        <circle cx="0" cy="0" r="22" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
        <line x1="0" y1="-22" x2="0" y2="-10" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="0" y1="10" x2="0" y2="22" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" />
        <line x1="-22" y1="0" x2="-10" y2="0" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="0" x2="22" y2="0" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="0" cy="0" r="3.5" fill="rgba(255,255,255,0.8)" />
        <polygon points="0,-14 3,2 0,0 -3,2" fill="rgba(255,255,255,0.9)" />
        <polygon points="0,14 3,-2 0,0 -3,-2" fill="rgba(255,255,255,0.35)" />
      </g>

      {/* Ruler — bottom-left */}
      <g transform="translate(18,420) rotate(-35)">
        <rect x="0" y="0" width="140" height="22" rx="4" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" />
        {rulerTicks.map((x, i) => (
          <line
            key={x}
            x1={x} y1="0"
            x2={x} y2={i % 5 === 0 ? 12 : 7}
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1.2"
          />
        ))}
      </g>

      {/* Sigma */}
      <text x="30" y="140" fontSize="72" fontFamily="Georgia, serif" fill="rgba(255,255,255,0.13)" fontWeight="bold">Σ</text>

      {/* Pi */}
      <text x="360" y="540" fontSize="80" fontFamily="Georgia, serif" fill="rgba(0,0,0,0.07)" fontWeight="bold">π</text>

      {/* Sparkles */}
      <g>
        {sparkles.map(([cx, cy, op], i) => (
          <g key={i} transform={`translate(${cx},${cy})`}>
            <line x1="0" y1="-9" x2="0" y2="9" stroke={`rgba(255,255,255,${op})`} strokeWidth="1.8" strokeLinecap="round" />
            <line x1="-9" y1="0" x2="9" y2="0" stroke={`rgba(255,255,255,${op})`} strokeWidth="1.8" strokeLinecap="round" />
            <line x1="-6" y1="-6" x2="6" y2="6" stroke={`rgba(255,255,255,${op * 0.6})`} strokeWidth="1.4" strokeLinecap="round" />
            <line x1="6" y1="-6" x2="-6" y2="6" stroke={`rgba(255,255,255,${op * 0.6})`} strokeWidth="1.4" strokeLinecap="round" />
          </g>
        ))}
      </g>

      {/* Dot grid */}
      <g>
        {[0, 1, 2, 3, 4, 5].flatMap((row) =>
          [0, 1, 2, 3, 4].map((col) => (
            <circle
              key={`dot-${row}-${col}`}
              cx={col * 40 + 240}
              cy={row * 50 + 60}
              r="2"
              fill="rgba(255,255,255,0.18)"
            />
          ))
        )}
      </g>

      {/* Formula snippets */}
      <text x="28" y="52" fontSize="13" fontFamily="monospace" fill="rgba(255,255,255,0.3)" letterSpacing="1">y = mx + c</text>
      <text x="28" y="72" fontSize="13" fontFamily="monospace" fill="rgba(255,255,255,0.2)" letterSpacing="1">a² + b² = c²</text>

      {/* Pencil */}
      <g transform="translate(455,280) rotate(30)">
        <rect x="-5" y="-60" width="10" height="90" rx="2" fill="rgba(255,255,255,0.22)" />
        <polygon points="-5,30 5,30 0,48" fill="rgba(255,220,100,0.35)" />
        <rect x="-5" y="-68" width="10" height="10" rx="1" fill="rgba(255,255,255,0.38)" />
        <line x1="-5" y1="26" x2="5" y2="26" stroke="rgba(255,200,50,0.5)" strokeWidth="1.5" />
      </g>

      {/* Trophy */}
      <g transform="translate(100,490)" opacity="0.18">
        <rect x="-10" y="18" width="20" height="5" rx="2" fill="white" />
        <rect x="-6" y="14" width="12" height="6" rx="1" fill="white" />
        <path d="M-14,-20 Q-18,10 -10,18 Q0,22 10,18 Q18,10 14,-20 Z" fill="white" />
        <path d="M-14,-20 Q-22,-10 -20,5 Q-16,15 -10,18" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
        <path d="M14,-20 Q22,-10 20,5 Q16,15 10,18" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
      </g>
    </svg>
  );
}

/** Animated circular progress ring */
function AnimatedRing({ pct, color, size = 56 }: { pct: number; color: string; size?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef as RefObject<Element>, { once: true, margin: "-80px" });
  const r = (size / 2) * 0.857;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - pct);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#EAEAF5" strokeWidth="5" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={inView ? { strokeDashoffset: offset } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const floatAnim = {
  y: [0, -7, 0],
  transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
};

const floatAnimSlow = {
  y: [0, -5, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
};

const floatAnimMed = {
  y: [0, -6, 0],
  transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
};

export default function WhyMathBridge() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef as RefObject<Element>, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-20" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-[2rem] md:text-[2.25rem] font-extrabold tracking-tight text-gray">
            Why{" "}
            <span
              style={{
                fontFamily: "var(--font-kavoon)",
                color: "#0009af",
                position: "relative",
                display: "inline-block",
              }}
            >
              MATHBridge
              <svg
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: 0,
                  width: "100%",
                  height: "7px",
                  overflow: "visible",
                }}
                viewBox="0 0 200 7"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 3.5 Q25 0 50 3.5 Q75 7 100 3.5 Q125 0 150 3.5 Q175 7 200 3.5"
                  stroke="#0009af"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-3 text-[0.9375rem] text-gray/60 leading-relaxed">
            We don&apos;t just teach, we build habits, confidence, and a
            genuine love for learning. Everything your child needs to succeed.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 items-center gap-16 md:gap-12">
          {/* Left — image + floating stat mockups */}
          <motion.div
            className="relative w-full mx-auto md:mx-0"
            style={{ paddingTop: "64px", paddingBottom: "28px", paddingLeft: "28px" }}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Gold card — no overflow-hidden here so the image can escape above */}
            <div className="relative rounded-3xl bg-primaryGold w-full aspect-[4/5] shadow-[0_20px_60px_rgba(241,170,0,0.3)]">

              {/* Illustration clipped to the card boundary only */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <GoldBgIllustration />
              </div>

              {/* Tutor photo — top:-64px escapes 64px above the gold card top */}
              <div
                className="absolute left-0 right-0 bottom-0 pointer-events-none"
                style={{ top: "-64px", zIndex: 5 }}
              >
                <Image
                  src="/images/favourImage.png"
                  alt="MathBridge tutor"
                  width={520}
                  height={680}
                  priority
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center bottom",
                  }}
                />
              </div>
            </div>

            {/* 94% Grade Improvement — top-left, anchored near gold card top */}
            <motion.div
              className="absolute -left-4 bg-white rounded-2xl shadow-[0_8px_24px_rgba(16,25,40,0.12)] p-3.5 w-[132px] z-20"
              style={{ top: "48px" }}
              animate={floatAnim}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative w-14 h-14 mx-auto">
                <AnimatedRing pct={0.94} color="#0009AF" size={56} />
                <span className="absolute inset-0 flex items-center justify-center text-[0.8125rem] font-bold text-gray">
                  94%
                </span>
              </div>
              <p className="mt-2 text-center text-[0.6875rem] font-medium text-gray/60 leading-tight">
                Grade Improvement
              </p>
            </motion.div>

            {/* Student Confidence — right-middle */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -right-4 bg-white rounded-2xl shadow-[0_8px_24px_rgba(16,25,40,0.12)] p-3.5 w-[128px] z-20"
              animate={floatAnimMed}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <div className="flex items-end gap-1 h-10">
                <span className="w-2 rounded-sm bg-primaryBlue/15 h-[35%]" />
                <span className="w-2 rounded-sm bg-primaryBlue/25 h-[50%]" />
                <span className="w-2 rounded-sm bg-primaryBlue/40 h-[65%]" />
                <span className="w-2 rounded-sm bg-primaryBlue/60 h-[80%]" />
                <span className="w-2 rounded-sm bg-primaryBlue h-full" />
              </div>
              <p className="mt-2 text-[0.6875rem] font-medium text-gray/60 leading-tight">
                Student Confidence
              </p>
            </motion.div>

            {/* Parent Satisfaction — bottom-left */}
            <motion.div
              className="absolute bottom-0 -left-4 bg-white rounded-2xl shadow-[0_8px_24px_rgba(16,25,40,0.12)] p-4 w-[210px] z-20"
              animate={floatAnimSlow}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-[0.6875rem] font-medium text-gray/60">
                Parent Satisfaction
              </p>
              <p className="mt-1 text-[1.125rem] font-bold text-gray">97%</p>
              <div className="mt-2 h-1.5 rounded-full bg-primaryBlue/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primaryBlue"
                  initial={{ width: 0 }}
                  whileInView={{ width: "97%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right — checklist */}
          <motion.ul
            className="flex flex-col gap-7 mt-10 md:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {benefits.map(({ title, description }) => (
              <motion.li key={title} className="flex items-start gap-4" variants={itemVariant}>
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-primaryGold shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray">{title}</h3>
                  <p className="mt-1 text-gray/60 leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}