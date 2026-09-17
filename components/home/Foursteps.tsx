"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type RefObject } from "react";
import type { Step } from "@/types/home";
import WavyText from "@/components/WavyText";

const steps: Step[] = [
  {
    number: 1,
    color: "#0009af",
    textColor: "#fff",
    title: "Book a Free Trial",
    description:
      "Reach out and schedule a no-obligation introductory session so we can understand your child's needs.",
  },
  {
    number: 2,
    color: "#f1aa00",
    textColor: "#fff",
    title: "Choose your Plan",
    description:
      "Pick a subscription that fits your goals, schedule, and budget — flexible enough to adjust anytime.",
  },
  {
    number: 3,
    color: "#0009af",
    textColor: "#fff",
    title: "Get Matched",
    description:
      "We pair your child with a qualified tutor whose teaching style suits how they learn best.",
  },
  {
    number: 4,
    color: "#f1aa00",
    textColor: "#fff",
    title: "Track Progress",
    description:
      "Follow real improvement through regular assessments and structured progress reports.",
  },
];

/** Single step node card */
function StepNode({
  step,
  delay,
}: {
  step: Step;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.78, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className="flex flex-col items-center text-center w-full"
    >
      {/* Number badge */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-extrabold shadow-lg shrink-0"
        style={{ backgroundColor: step.color, boxShadow: `0 6px 24px ${step.color}55` }}
      >
        {step.number}
      </div>

      {/* Stem — connects badge to card */}
      <div
        style={{
          width: 2,
          height: 20,
          backgroundColor: step.color,
          opacity: 0.45,
          borderRadius: 2,
          flexShrink: 0,
        }}
      />

      {/* Card */}
      <div
        className="rounded-2xl bg-white p-5 shadow-[0_4px_24px_rgba(16,25,40,0.09)] border border-gray/5 w-full"
        style={{ maxWidth: 220 }}
      >
        <h3 className="text-[1rem] font-bold text-gray">{step.title}</h3>
        <p className="mt-2 text-[0.8125rem] leading-relaxed text-gray/60">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

/** Animated SVG connector line between two points */
function AnimatedLine({
  x1, y1, x2, y2, delay,
}: {
  x1: number; y1: number; x2: number; y2: number; delay: number;
}) {
  const d = `M ${x1} ${y1} L ${x2} ${y2}`;
  return (
    <motion.path
      d={d}
      stroke="#0009af"
      strokeWidth="2"
      strokeDasharray="6 4"
      strokeLinecap="round"
      fill="none"
      opacity={0.35}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.35 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeInOut", delay }}
    />
  );
}

/**
 * Desktop binary-tree layout using absolute positioning.
 * Every node is placed at a known coordinate inside a fixed-height container,
 * so the SVG connector lines sit exactly between badge edges.
 *
 * Container: 1000 × 680 viewBox units (same as the SVG).
 *
 * Badge centres (badge = 56 × 56 px, h-14):
 *   N1: x=50%,  top=20  → badge centre y=48,  badge bottom y=76
 *   N2: x=18%,  top=250 → badge centre y=278, badge top    y=250
 *   N3: x=82%,  top=250 → badge centre y=278, badge top    y=250, badge bottom y=306
 *   N4: x=82%,  top=460 → badge centre y=488, badge top    y=460
 */

// Node layout constants (px, relative to the container)
const NODES = {
  n1: { leftPct: "50%", top: 20 },
  n2: { leftPct: "18%", top: 250 },
  n3: { leftPct: "82%", top: 250 },
  n4: { leftPct: "82%", top: 530 }, // pushed down to clear N3's card
} as const;

// SVG viewBox dimensions match container
const VB_W = 1000;
const VB_H = 760;
const BADGE_HALF = 28; // h-14 / 2 = 28px

// Badge centre y-values
const n1CY = NODES.n1.top + BADGE_HALF; // 48
const n2CY = NODES.n2.top + BADGE_HALF; // 278
const n3CY = NODES.n3.top + BADGE_HALF; // 278
const n4CY = NODES.n4.top + BADGE_HALF; // 488

// Badge centre x-values (in viewBox units, matching leftPct)
const n1CX = VB_W * 0.50; // 500
const n2CX = VB_W * 0.18; // 180
const n3CX = VB_W * 0.82; // 820
const n4CX = VB_W * 0.82; // 820

function DesktopTree() {
  return (
    <div className="relative hidden lg:block" style={{ height: VB_H }}>
      {/* ── SVG connector layer — rendered first so it's behind nodes ── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100%", height: "100%", zIndex: 0 }}
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
      >
        {/* N1 bottom → N2 top */}
        <AnimatedLine
          x1={n1CX} y1={n1CY + BADGE_HALF}
          x2={n2CX} y2={n2CY - BADGE_HALF}
          delay={0.2}
        />
        {/* N1 bottom → N3 top */}
        <AnimatedLine
          x1={n1CX} y1={n1CY + BADGE_HALF}
          x2={n3CX} y2={n3CY - BADGE_HALF}
          delay={0.35}
        />
        {/* N3 bottom → N4 top */}
        <AnimatedLine
          x1={n3CX} y1={n3CY + BADGE_HALF}
          x2={n4CX} y2={n4CY - BADGE_HALF}
          delay={0.55}
        />
      </svg>

      {/* ── Absolutely positioned nodes — on top of SVG ── */}

      {/* Node 1 — top centre */}
      <div
        style={{
          position: "absolute",
          left: NODES.n1.leftPct,
          top: NODES.n1.top,
          transform: "translateX(-50%)",
          width: 240,
          zIndex: 1,
        }}
      >
        <StepNode step={steps[0]} delay={0} />
      </div>

      {/* Node 2 — bottom left */}
      <div
        style={{
          position: "absolute",
          left: NODES.n2.leftPct,
          top: NODES.n2.top,
          transform: "translateX(-50%)",
          width: 240,
          zIndex: 1,
        }}
      >
        <StepNode step={steps[1]} delay={0.3} />
      </div>

      {/* Node 3 — bottom right */}
      <div
        style={{
          position: "absolute",
          left: NODES.n3.leftPct,
          top: NODES.n3.top,
          transform: "translateX(-50%)",
          width: 240,
          zIndex: 1,
        }}
      >
        <StepNode step={steps[2]} delay={0.45} />
      </div>

      {/* Node 4 — below Node 3 */}
      <div
        style={{
          position: "absolute",
          left: NODES.n4.leftPct,
          top: NODES.n4.top,
          transform: "translateX(-50%)",
          width: 240,
          zIndex: 1,
        }}
      >
        <StepNode step={steps[3]} delay={0.65} />
      </div>
    </div>
  );
}

/** Mobile / Tablet: simple vertical stack with vertical connector line */
function MobileStack() {
  return (
    <div className="flex lg:hidden flex-col items-center gap-0">
      {steps.map((step, i) => (
        <div key={step.number} className="flex flex-col items-center w-full">
          <div className="w-full max-w-[320px]">
            <StepNode step={step} delay={i * 0.15} />
          </div>
          {i < steps.length - 1 && (
            <motion.div
              className="w-px bg-primaryBlue/25 my-4"
              style={{ height: 40 }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function FourSteps() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef as RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[#FAFBFF] py-20 overflow-hidden">
      {/* Background image texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      <div className="relative z-10 max-w-[1120px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          className="text-center max-w-lg mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-[2rem] md:text-[2.25rem] font-extrabold tracking-tight text-gray">
            <WavyText text="Four Steps" fontColor="text-primaryGold" lineColor="text-primaryGold" />{" "}
            <span style={{ color: "#101928" }}>to Success</span>
          </h2>
          <p className="mt-3 text-[0.9375rem] text-gray/60 leading-relaxed">
            Every student&apos;s journey with MathBridge follows a clear, proven
            pathway designed for maximum results.
          </p>
        </motion.div>

        {/* Desktop binary tree */}
        <DesktopTree />

        {/* Mobile vertical stack */}
        <MobileStack />
      </div>
    </section>
  );
}