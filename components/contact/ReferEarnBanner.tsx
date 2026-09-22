"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gift, Sparkles } from "lucide-react";
import WavyText from "@/components/WavyText";

const HOW_IT_WORKS = [
  { num: "01", label: "REFER",               desc: "Tell a parent, student, friend or family member about MathBridge." },
  { num: "02", label: "THEY ENROL",          desc: "They sign up for one of our programmes." },
  { num: "03", label: "PAYMENT IS RECEIVED", desc: "MathBridge receives their first successful payment and confirms the enrolment." },
  { num: "04", label: "YOU GET REWARDED",    desc: "You receive your tuition credit or cash reward." },
];

const WHAT_YOU_CAN_REFER = ["GCSE", "A-Levels", "SAT", "JAMB", "KS1–KS3", "11+ & 13+", "Other Subjects"];

const WHY_MATHBRIDGE = [
  "Experienced Tutors",
  "Personalised Learning",
  "Interactive Online Classes",
  "Proven Results",
];

export default function ReferEarnBanner() {
  return (
    <section
      id="refer-and-earn"
      className="relative overflow-hidden w-full text-white bg-[#0009af]"
      aria-label="Refer and Earn Banner"
    >
      {/* ── BACKGROUND.PNG TEXTURE LAYER (Vivid & Visible Math Equations) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
          opacity: 0.80,
        }}
      />

      {/* Subtle Gradient Vignette to keep content extra crisp */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-[#00075c]/70 via-transparent to-[#00075c]/85"
      />

      {/* ── Subtle Ambient Glows ── */}
      <div
        aria-hidden="true"
        className="absolute -top-24 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none z-[1]"
        style={{ background: "rgba(0, 9, 175, 0.35)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-[#f1aa00]/10 blur-3xl pointer-events-none z-[1]"
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-12 sm:py-16">

        {/* ── Eyebrow + Hero Headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            <WavyText text="Refer" fontColor="text-primaryGold" lineColor="text-primaryGold" /> · Enrol ·{" "}
            <WavyText text="Earn" fontColor="text-primaryGold" lineColor="text-primaryGold" />
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto">
            Know a family that needs a great tutor?{" "}
            <strong className="text-white">Refer them to MathBridge</strong> and get rewarded!
          </p>
        </motion.div>

        {/* ── Three-column grid: How It Works + Reward Cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5"
        >

          {/* How It Works — spans 2 cols */}
          <div
            className="lg:col-span-2 rounded-2xl p-6 sm:p-8"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-white/50 mb-5">
              How It Works
            </p>
            <ol className="space-y-5">
              {HOW_IT_WORKS.map((step) => (
                <li key={step.num} className="flex items-start gap-4">
                  <span
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold"
                    style={{ background: "rgba(241,170,0,0.20)", color: "#f1aa00" }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-[#f1aa00] mb-0.5">
                      {step.label}
                    </p>
                    <p className="text-sm text-white/75 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Reward Cards — stacked */}
          <div className="flex flex-col gap-4">
            {/* Existing client */}
            <div
              className="flex-1 rounded-2xl p-5"
              style={{
                background: "rgba(241,170,0,0.12)",
                border: "1px solid rgba(241,170,0,0.30)",
              }}
            >
              <p className="text-xs font-bold tracking-wider uppercase text-[#f1aa00] mb-2">
                Already a MathBridge Client?
              </p>
              <p className="text-sm text-white/75 leading-relaxed">
                Refer a new client who successfully enrols and receive a{" "}
                <strong className="text-white">tuition discount / credit</strong> towards
                your child&apos;s next payment.
              </p>
            </div>

            {/* New referrer */}
            <div
              className="flex-1 rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <p className="text-xs font-bold tracking-wider uppercase text-white/60 mb-2">
                Not Yet a MathBridge Client?
              </p>
              <p className="text-sm text-white/75 leading-relaxed">
                Refer a new client who successfully enrols and receive a{" "}
                <strong className="text-[#f1aa00]">cash reward</strong> after their first
                successful payment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >

          {/* What Can You Refer */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-white/50 mb-4">
              What Can You Refer?
            </p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5">
              {WHAT_YOU_CAN_REFER.map((subject) => (
                <li key={subject} className="flex items-center gap-2 text-sm text-white/75">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#f1aa00" }}
                  />
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/* Why MathBridge */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-white/50 mb-4">
              Why MathBridge?
            </p>
            <ul className="space-y-2.5">
              {WHY_MATHBRIDGE.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/75">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#f1aa00" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + contact strip */}
          <div className="flex flex-col justify-between gap-5 sm:col-span-2 lg:col-span-1">
            {/* CTA button — same style as JambBanner's primary button */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="mailto:mathbridge.ng@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm sm:text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                style={{
                  background: "#f1aa00",
                  color: "#0009af",
                  boxShadow: "0 6px 20px rgba(241,170,0,0.35)",
                }}
              >
                <Gift size={17} />
                <span>Start Referring Now</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Contact strip */}
            <div
              className="rounded-2xl px-5 py-4 flex flex-col gap-2 text-sm"
              style={{
                background: "rgba(0,0,0,0.20)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <a
                href="mailto:mathbridge.ng@gmail.com"
                className="text-white/65 hover:text-white transition-colors duration-150 font-medium"
              >
                mathbridge.ng@gmail.com
              </a>
              <a
                href="tel:+2347048615201"
                className="text-white/65 hover:text-white transition-colors duration-150 font-medium"
              >
                +234-704-861-5201
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
