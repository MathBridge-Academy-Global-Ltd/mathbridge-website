"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  Users,
  Globe2,
  BookOpen,
  TrendingUp,
  Award,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";
import WavyText from "@/components/WavyText";

/* ─────────────────── Count-up hook ─────────────────── */
function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out cubic
      setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

export default function AboutRecords() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  const hoursCount = useCountUp(1000, 1800, inView);
  const staffCount = useCountUp(20, 1400, inView);
  const continentsCount = useCountUp(3, 1200, inView);
  const satisfactionCount = useCountUp(98, 1600, inView);
  const examSuccessCount = useCountUp(95, 1600, inView);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 bg-white">
      {/* Background decorative glows */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#0009af]/10 via-[#0009af]/0 to-transparent blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#f1aa00]/10 to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101928]">
            Our{" "}
            <WavyText text="Records" fontColor="text-primaryGold" lineColor="text-primaryGold" />{" "}
            So Far
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Real impact numbers built on individualized learning, patient mentoring, and proven results.
          </p>
        </motion.div>

        {/* ── Bento Grid Structure (scrollable on mobile, bento grid on md+) ── */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:grid md:grid-cols-12 md:gap-5 lg:gap-6 md:overflow-visible md:pb-0 no-scrollbar">
          {/* 1. Flagship Card: 650+ Hours (Spans 7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="w-[88vw] max-w-[360px] shrink-0 snap-center md:col-span-12 lg:col-span-7 md:w-auto md:max-w-none md:shrink relative overflow-hidden rounded-3xl p-7 sm:p-10 text-white flex flex-col justify-between shadow-xl"
            style={{
              background: "linear-gradient(135deg, #0009af 0%, #000569 100%)",
              boxShadow: "0 20px 40px -15px rgba(0, 9, 175, 0.4)",
            }}
          >
            {/* Ambient inner circle glow */}
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 w-64 h-64 bg-[#f1aa00]/15 rounded-full blur-3xl pointer-events-none"
            />

            {/* /background.png texture overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none select-none opacity-20"
              style={{
                backgroundImage: "url('/background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Completely white app-logo.svg watermark slanted at bottom right */}
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-6 w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 pointer-events-none select-none opacity-25 -rotate-[18deg] flex items-end justify-end"
            >
              <Image
                src="/app-logo.svg"
                alt=""
                width={280}
                height={190}
                className="w-full h-full object-contain [filter:brightness(0)_invert(1)]"
              />
            </div>

            {/* Top header row */}
            <div className="relative z-10 flex items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-100/90">
                  Live Tutoring Hours
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20">
                <span className="w-2 h-2 rounded-full bg-[#f1aa00] animate-pulse" />
                <span className="sm:block hidden">Flagship Milestone</span>
                <span className="sm:hidden block">Milestone</span>
              </span>
            </div>

            {/* Big Stat & Headline */}
            <div className="relative z-10 my-auto py-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6 mb-4">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight tabular-nums text-white">
                  {hoursCount}+
                </span>
                <div className="text-xl sm:text-2xl font-bold text-blue-50 leading-snug">
                  Hours of Dedicated <br className="hidden sm:inline" />
                  <span className="text-[#f1aa00]">1-on-1 Tutoring</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-blue-100/85 max-w-xl leading-relaxed mt-2">
                Personalized, curriculum-tailored instruction delivered to students worldwide with proven grade transformation and confidence building.
              </p>
            </div>

            {/* Bottom mini-bar */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-blue-100/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#f1aa00]" />
                Live diagnostic feedback every session
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#f1aa00]" />
                Zero disruption online whiteboard
              </span>
            </div>
          </motion.div>

          {/* 2. Global Reach Card: 3+ Continents (Spans 5 cols on desktop, primaryGold with /background.png) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="w-[88vw] max-w-[360px] shrink-0 snap-center md:col-span-12 lg:col-span-5 md:w-auto md:max-w-none md:shrink relative overflow-hidden rounded-3xl p-7 sm:p-10 flex flex-col justify-between shadow-xl"
            style={{
              backgroundColor: "#101928",
              backgroundImage: "linear-gradient(135deg, #101928 0%, #000000 100%)",
              boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* /background.png texture overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none select-none opacity-20"
              style={{
                backgroundImage: "url('/background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Ambient light glow */}
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"
            />

            {/* Top row */}
            <div className="relative z-10 flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <Globe2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-gray-200">
                  Global Reach
                </span>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white shadow-sm backdrop-blur-sm">
                Worldwide
              </span>
            </div>

            {/* Stat & Description */}
            <div className="relative z-10 my-auto py-2">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-6xl sm:text-7xl font-black text-white tabular-nums tracking-tight">
                  {continentsCount}+
                </span>
                <span className="text-xl sm:text-2xl font-black text-white leading-tight">
                  Continents <br />
                  <span className="text-[#f1aa00] text-lg font-bold">Reached</span>
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-3 font-medium">
                Families across <strong className="text-white font-black">Africa, Europe & North America</strong> trust MathBridge weekly for curriculum-aligned excellence.
              </p>
            </div>

            {/* Tag pills */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-white text-xs font-bold shadow-sm">
                UK / British (GCSE/A-Level)
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-white text-xs font-bold shadow-sm">
                West Africa (WAEC/JAMB)
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-white text-xs font-bold shadow-sm">
                US / International (SAT)
              </span>
            </div>
          </motion.div>

          {/* 3. Small Bento Grid Cards */}
          {/* Card 3A: 10+ Staffs & Tutors */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ y: -4 }}
            className="w-[80vw] max-w-[300px] shrink-0 snap-center md:col-span-6 lg:col-span-3 md:w-auto md:max-w-none md:shrink rounded-3xl p-7 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0009af]">
                  Educators & Staff
                </span>
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Users className="w-4 h-4 text-[#0009af]" />
                </div>
              </div>
              <div className="text-5xl font-black text-[#101928] tabular-nums tracking-tight mb-2">
                {staffCount}+
              </div>
              <p className="text-sm font-bold text-gray-800">Expert Staff & Tutors</p>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Vetted educators, passionate pedagogy coaches & dedicated student success managers.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] font-semibold text-[#0009af] flex items-center gap-1">
              <span>Top 5% tutor selection</span>
            </div>
          </motion.div>

          {/* Card 3B: Numerous Subjects (Infinity) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="w-[80vw] max-w-[300px] shrink-0 snap-center md:col-span-6 lg:col-span-3 md:w-auto md:max-w-none md:shrink rounded-3xl p-7 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0009af]">
                  Subject Breadth
                </span>
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-[#0009af]" />
                </div>
              </div>
              <div className="text-5xl font-black text-[#0009af] tracking-tight mb-2 flex items-center gap-1">
                <span className="text-6xl leading-none">∞</span>
              </div>
              <p className="text-sm font-bold text-gray-800">Numerous Subjects</p>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Mathematics, English, Physics, Chemistry, Biology — and any requested custom subject.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] font-semibold text-[#0009af] flex items-center gap-1">
              <span>Unlimited subject offerings</span>
            </div>
          </motion.div>

          {/* Card 3C: 98% Satisfaction */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            whileHover={{ y: -4 }}
            className="w-[80vw] max-w-[300px] shrink-0 snap-center md:col-span-6 lg:col-span-3 md:w-auto md:max-w-none md:shrink rounded-3xl p-7 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0009af]">
                  Parent & Student Rating
                </span>
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
              <div className="text-5xl font-black text-[#101928] tabular-nums tracking-tight mb-2">
                {satisfactionCount}%
              </div>
              <p className="text-sm font-bold text-gray-800">Satisfaction Score</p>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Parents report noticeable confidence and score improvements within their first term.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
              <span>★ 4.9/5 Average Review</span>
            </div>
          </motion.div>

          {/* Card 3D: 95%+ Exam Pass Rate */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="w-[80vw] max-w-[300px] shrink-0 snap-center md:col-span-6 lg:col-span-3 md:w-auto md:max-w-none md:shrink rounded-3xl p-7 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0009af]">
                  Exam Readiness
                </span>
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Award className="w-4 h-4 text-amber-600" />
                </div>
              </div>
              <div className="text-5xl font-black text-[#101928] tabular-nums tracking-tight mb-2">
                {examSuccessCount}%+
              </div>
              <p className="text-sm font-bold text-gray-800">Exam Pass & Target Reach</p>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Students hitting or exceeding their target grades in WAEC, IGCSE & Entrance Exams.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] font-semibold text-amber-700 flex items-center gap-1">
              <span>Target grade guaranteed</span>
            </div>
          </motion.div>

          {/* Card 4B: 100% Tailored Curriculum (col-span-12 md:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -4 }}
            className="w-[85vw] max-w-[330px] shrink-0 snap-center md:col-span-6 lg:col-span-6 md:w-auto md:max-w-none md:shrink rounded-3xl p-7 bg-white border border-gray-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-4">
                Personalization
              </span>
              <div className="text-4xl sm:text-5xl font-black text-[#0009af] tabular-nums tracking-tight mb-2">
                100%
              </div>
              <p className="text-sm font-bold text-gray-800">Customized Study Plans</p>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Every learner starts with a diagnostic assessment to craft an individualized roadmap.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 text-xs text-gray-500">
              Zero one-size-fits-all teaching
            </div>
          </motion.div>

          {/* Card 4C: The MathBridge Mentor Promise (col-span-12 md:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            whileHover={{ y: -4 }}
            className="w-[85vw] max-w-[330px] shrink-0 snap-center md:col-span-6 lg:col-span-6 md:w-auto md:max-w-none md:shrink rounded-3xl p-7 flex flex-col justify-between"
            style={{
              background: "linear-gradient(135deg, #F8F5FF 0%, #EDE9FE 100%)",
              border: "1px solid #DDD6FE",
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6D28D9]">
                  Academic Mentorship
                </span>
                <HeartHandshake className="w-5 h-5 text-[#6D28D9]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#4C1D95] leading-snug mb-2">
                Help when you need it most
              </h3>
              <p className="text-xs sm:text-sm text-[#5B21B6]/80 leading-relaxed mt-2">
                Real human mentors who encourage, explain step-by-step, and celebrate every breakthrough.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#DDD6FE] text-xs font-semibold text-[#6D28D9]">
              Always student-first • Always supportive
            </div>
          </motion.div>
        </div>

        {/* Mobile swipe cue */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-3 text-xs font-medium text-gray-400">
          <span>← Swipe to explore records →</span>
        </div>
      </div>
    </section>
  );
}
