"use client";

import { motion } from "framer-motion";
import { Compass, Target, Rocket, ShieldCheck } from "lucide-react";

export default function AboutVisionMission() {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      {/* Subtle background decorative shapes */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-[#0009af]/5 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 rounded-full bg-[#f1aa00]/10 blur-3xl pointer-events-none"
      />

      {/* Decorative Vector Patterns */}
      <svg
        aria-hidden="true"
        className="absolute top-12 left-8 w-24 h-24 text-gray-200/50 pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg
        aria-hidden="true"
        className="absolute bottom-12 right-8 w-32 h-32 text-gray-200/40 pointer-events-none"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path d="M10 10 L110 110 M110 10 L10 110" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
      </svg>

      <div className="relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101928]">
            Our{" "}
            <span
              style={{
                fontFamily: "var(--font-kavoon)",
                color: "#f1aa00",
                position: "relative",
                display: "inline-block",
              }}
            >
              Purpose
              <svg
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  left: 0,
                  width: "100%",
                  height: "8px",
                  overflow: "visible",
                }}
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4"
                  stroke="#f1aa00"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            & Direction
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            The foundation of everything we build, teach, and strive for every day.
          </p>
        </motion.div>

        {/* ── Vision & Mission Cards Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-xl"
            style={{
              background: "linear-gradient(145deg, #0009af 0%, #081180 100%)",
            }}
          >
            {/* Ambient vector glow */}
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-2xl pointer-events-none"
            />
            {/* Floating decorative vector */}
            <svg
              className="absolute -bottom-8 -right-8 w-44 h-44 text-white/5 pointer-events-none"
              viewBox="0 0 200 200"
              fill="currentColor"
            >
              <polygon points="100,10 190,190 10,190" />
            </svg>

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-inner">
                  <Compass className="w-7 h-7 text-[#f1aa00]" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-blue-100 border border-white/15">
                  Long-Term Horizon
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 flex items-center gap-3">
                <span>Our Vision</span>
                <Rocket className="w-6 h-6 text-[#f1aa00]" />
              </h3>

              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed font-medium">
                To become one of the world’s most trusted education technology companies, empowering millions of learners through innovative, accessible, and impactful education.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/15 flex items-center gap-2 text-xs text-blue-200">
              <ShieldCheck className="w-4 h-4 text-[#f1aa00]" />
              <span>Transformative global education for the next generation</span>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-[#FFFDF7] via-white to-[#F9F6ED] border border-[#FDE68A] shadow-xl"
          >
            {/* Ambient vector glow */}
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#f1aa00]/15 blur-2xl pointer-events-none"
            />
            {/* Floating decorative vector */}
            <svg
              className="absolute -bottom-8 -right-8 w-44 h-44 text-[#f1aa00]/10 pointer-events-none"
              viewBox="0 0 200 200"
              fill="currentColor"
            >
              <circle cx="100" cy="100" r="90" />
            </svg>

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#f1aa00]/15 border border-[#f1aa00]/30 flex items-center justify-center text-[#c27c00] shadow-inner">
                  <Target className="w-7 h-7 text-[#c27c00]" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#f1aa00]/15 text-[#92400E] border border-[#f1aa00]/30">
                  Everyday Mission
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101928] mb-4 flex items-center gap-3">
                <span>Our Mission</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#f1aa00]" />
              </h3>

              <p className="text-lg sm:text-xl text-[#344054] leading-relaxed font-medium">
                To bridge every learner to academic excellence through exceptional teaching, technology, and personalized support.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-amber-200/60 flex items-center gap-2 text-xs text-amber-900 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#c27c00]" />
              <span>Personalized support at every step of the learning journey</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
