"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import type { SubjectHeroProps } from "@/types/about";

/* ─────────────────────────── animation helpers ─────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
});

/* ──────────────────── floating math symbols ────────────── */
const eduSymbols = [
  { symbol: "π", x: "4%", y: "12%", size: 32, rotate: -12, color: "rgba(255,255,255,0.10)", delay: 0 },
  { symbol: "∑", x: "10%", y: "70%", size: 28, rotate: 8, color: "rgba(255,255,255,0.08)", delay: 0.3 },
  { symbol: "√", x: "88%", y: "18%", size: 26, rotate: 6, color: "rgba(241,170,0,0.15)", delay: 0.6 },
  { symbol: "∞", x: "84%", y: "75%", size: 32, rotate: -5, color: "rgba(255,255,255,0.07)", delay: 0.2 },
  { symbol: "Δ", x: "52%", y: "5%", size: 24, rotate: 10, color: "rgba(241,170,0,0.12)", delay: 0.5 },
  { symbol: "f(x)", x: "6%", y: "44%", size: 16, rotate: -10, color: "rgba(255,255,255,0.08)", delay: 0.9 },
  { symbol: "÷", x: "78%", y: "52%", size: 20, rotate: -8, color: "rgba(255,255,255,0.06)", delay: 0.4 },
];

export default function SubjectHero({
  bgImage = "/images/about/about-hero.jpg",
  eyebrow = "Our Story",
  headline,
  copy,
  cta = { label: "Book a Free Demo", href: "/contact" },
  ctaSecondary = { label: "Explore Programs", href: "#services" },
}: SubjectHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* ══════ BACKGROUND STACK ══════ */}

      {/* Layer 1 — page photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center",
          pointerEvents: "none",
        }}
      />

      {/* Layer 2 — background.png math texture */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
          mixBlendMode: "overlay",
        }}
      />

      {/* Layer 3 — blue gradient; fades to #0009af at bottom to blend into footer */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, rgba(21, 21, 22, 0.78) 0%, rgba(17, 17, 22, 0.84) 60%)",
        }}
      />

      {/* Ambient gold glow — top-left */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: "-100px", left: "-80px",
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(241,170,0,0.18) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ══════ FLOATING MATH SYMBOLS ══════ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {eduSymbols.map((s, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: s.delay },
              scale: { duration: 0.8, delay: s.delay },
              y: { duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: s.delay },
            }}
            style={{
              position: "absolute",
              left: s.x, top: s.y,
              fontSize: `${s.size}px`,
              fontWeight: 700,
              color: s.color,
              transform: `rotate(${s.rotate}deg)`,
              userSelect: "none",
              lineHeight: 1,
              fontFamily: "Georgia, serif",
            }}
          >
            {s.symbol}
          </motion.span>
        ))}
      </div>

      {/* ══════ CENTERED CONTENT ══════ */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-20 flex flex-col items-center text-center">

        {/* Eyebrow badge */}
        <motion.div {...fadeUp(0.04)} className="mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: "rgba(241,170,0,0.15)",
              border: "1.5px solid rgba(241,170,0,0.40)",
              color: "#f1aa00",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f1aa00] inline-block" />
            {eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.10)}
          className="text-[2.6rem] sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight"
        >
          {headline}
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          {...fadeUp(0.14)}
          className="mt-8 mb-8"
          style={{
            width: "60px", height: "3px",
            background: "linear-gradient(90deg, transparent, #f1aa00, transparent)",
            borderRadius: "999px",
          }}
        />

        {/* Copy */}
        <motion.p
          {...fadeUp(0.18)}
          className="text-[1.1rem] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          {copy}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.26)}
          className="mt-10 flex items-center gap-3 flex-wrap justify-center"
        >
          <Link
            href={cta.href}
            id="subject-hero-cta-primary"
            className="hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(241,170,0,0.45)] active:translate-y-0"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "13px 28px",
              background: "linear-gradient(135deg, #f1aa00 0%, #ffc42e 100%)",
              color: "#101928", fontSize: "15px", fontWeight: 700,
              borderRadius: "999px",
              boxShadow: "0 6px 20px rgba(241,170,0,0.38)",
              transition: "all 0.2s ease", textDecoration: "none",
            }}
          >
            {cta.label} <ArrowRight size={16} />
          </Link>

          <Link
            href={ctaSecondary.href}
            id="subject-hero-cta-secondary"
            className="hover:border-white/60 hover:-translate-y-[2px] active:translate-y-0"
            style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "13px 24px",
              backgroundColor: "transparent",
              color: "white", fontSize: "15px", fontWeight: 600,
              borderRadius: "999px",
              border: "1.5px solid rgba(255,255,255,0.35)",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s ease", textDecoration: "none",
            }}
          >
            <PlayCircle size={16} />
            {ctaSecondary.label}
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
