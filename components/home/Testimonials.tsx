"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Quote,
  BadgeCheck,
  Star,
  Sparkles,
  ZoomIn,
  X,
  FileCheck2,
  GraduationCap,
  MessageCircleHeart,
  TrendingUp,
} from "lucide-react";
import WavyText from "@/components/WavyText";

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Lock body scroll and close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  // Auto-scroll horizontally on mobile and tablet
  useEffect(() => {
    if (isInteracting || modalOpen) return;

    const timer = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;

      // Only auto-scroll when container is horizontally scrollable (mobile/tablet)
      if (container.scrollWidth <= container.clientWidth + 10) return;

      const nextIndex = (activeIndex + 1) % 3;
      const targetCard = container.children[nextIndex] as HTMLElement;
      if (targetCard) {
        const targetLeft =
          targetCard.offsetLeft - (container.clientWidth - targetCard.clientWidth) / 2;
        container.scrollTo({
          left: Math.max(0, targetLeft),
          behavior: "smooth",
        });
        setActiveIndex(nextIndex);
      }
    }, 4500);

    return () => clearInterval(timer);
  }, [activeIndex, isInteracting, modalOpen]);

  // Track manual scroll position to sync active dot indicator
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = Array.from(container.children) as HTMLElement[];
    if (!cards.length) return;

    let closestIndex = 0;
    let minDistance = Infinity;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const targetCard = container.children[index] as HTMLElement;
    if (targetCard) {
      const targetLeft =
        targetCard.offsetLeft - (container.clientWidth - targetCard.clientWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="relative bg-[#fbfbfe] py-24 overflow-hidden">
      {/* ═══════════════ CREATIVE BACKGROUND FLARE ═══════════════ */}

      {/* Layer 1: Geometric Math Grid / Dot Matrix */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(#0009af 0.9px, transparent 0.9px), radial-gradient(#f1aa00 0.6px, transparent 0.6px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "0 0, 14px 14px",
        }}
        aria-hidden="true"
      />

      {/* Layer 2: Warm ambient amber/gold glow (top-left) */}
      <div
        className="absolute -top-24 -left-20 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(241,170,0,0.14) 0%, transparent 68%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />

      {/* Layer 3: Deep royal blue atmospheric glow (bottom-right) */}
      <div
        className="absolute -bottom-28 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,9,175,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      {/* Layer 4: Subtle floating chalk doodles in the background */}
      <div
        className="absolute top-12 left-[8%] text-[#0009af]/10 text-6xl font-serif select-none pointer-events-none -rotate-12 hidden md:block"
        aria-hidden="true"
      >
        ∫
      </div>
      <div
        className="absolute bottom-16 left-[6%] text-[#f1aa00]/15 text-5xl font-mono select-none pointer-events-none rotate-6 hidden md:block"
        aria-hidden="true"
      >
        ∑
      </div>
      <div
        className="absolute top-20 right-[7%] text-[#0009af]/10 text-5xl font-mono select-none pointer-events-none -rotate-12 hidden md:block"
        aria-hidden="true"
      >
        f(x)
      </div>
      <div
        className="absolute bottom-12 right-[9%] text-[#f1aa00]/20 text-6xl select-none pointer-events-none -rotate-6 hidden md:block"
        aria-hidden="true"
      >
        √π
      </div>

      {/* ═══════════════ MAIN CONTENT ═══════════════ */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-[2.2rem] md:text-[2.6rem] font-extrabold tracking-tight text-gray-900 leading-tight">
            <WavyText text="Trusted" fontColor="text-primaryGold" lineColor="text-primaryGold" />{" "}
            <span style={{ color: "#101928" }}>by Parents, Proven by</span>{" "}
            <WavyText text="Results" fontColor="text-primaryBlue" lineColor="text-primaryBlue" />
          </h2>
          <p className="mt-3.5 text-base text-gray-600 leading-relaxed max-w-lg mx-auto">
            From real parent reviews to certified examination transcripts — here is what happens when personalized mentoring meets dedicated students.
          </p>
        </div>

        {/* ═══════════════ 3 CARDS CONTAINER ═══════════════ */}
        {/* Horizontal auto-scroll on mobile/tablet, 3-Col grid on desktop */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setTimeout(() => setIsInteracting(false), 3500)}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-6 pb-6 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-7 lg:overflow-visible lg:pb-0"
        >
          {/* ═══════════════ CARD 1: ROYAL BLUE (PARENT REVIEW) ═══════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="w-[88vw] max-w-[390px] shrink-0 snap-center lg:w-auto lg:max-w-none lg:shrink rounded-[28px] relative overflow-hidden flex flex-col justify-between shadow-[0_16px_40px_rgba(0,9,175,0.22)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,9,175,0.32)] border border-white/20 bg-[#0009af]"
          >
            {/* ── BACKGROUND.PNG TEXTURE LAYER (Vivid & Visible Math Equations) ── */}
            <div
              className="absolute inset-0 pointer-events-none select-none z-0"
              style={{
                backgroundImage: "url('/background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                mixBlendMode: "screen",
                opacity: 0.95,
              }}
              aria-hidden="true"
            />

            {/* Subtle Gradient Vignette to keep text extra crisp */}
            <div
              className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-[#0009af]/75 via-transparent to-[#000673]/90"
              aria-hidden="true"
            />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-7 sm:p-8 text-white">
              <div>
                {/* Header: Verified Review Badge + Stars */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-semibold text-white">
                    <MessageCircleHeart size={13} className="text-[#f1aa00]" />
                    <span>Verified Parent Review</span>
                  </div>
                  <Quote size={30} className="text-white/30 fill-white/15 shrink-0" />
                </div>

                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#f1aa00] fill-[#f1aa00] drop-shadow-sm" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-white/80">5.0 Star Rating</span>
                </div>

                {/* Pull-quote headline */}
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-3">
                  &ldquo;Her confidence has soared and she looks forward to learning.&rdquo;
                </h3>

                {/* Review Body */}
                <p className="text-[0.95rem] leading-[1.7] text-white/90 font-normal">
                  Her teachers at school noticed the dramatic turnaround within weeks. MathBridge made all the difference in how she approaches complex algebraic problems now. From dreading class tests to leading group study sessions!
                </p>

                {/* Growth Metric Tag */}
                <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-medium text-white/95">
                  <TrendingUp size={14} className="text-[#f1aa00]" />
                  <span>Year 11 Performance Jump: <strong>Grade 5 → 8</strong></span>
                </div>
              </div>

              {/* Footer: Parent Profile */}
              <div className="mt-8 pt-5 border-t border-white/20 flex items-center justify-between">
                <div>
                  <p className="text-[0.8rem] text-white/70">
                    MathBridge KS4 Parent • London, UK
                  </p>
                </div>
                <BadgeCheck size={24} className="text-[#f1aa00] shrink-0" />
              </div>
            </div>
          </motion.div>

          {/* ═══════════════ CARD 2: BLACK (OFFICIAL STATEMENT OF RESULTS) ═══════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-[88vw] max-w-[390px] shrink-0 snap-center lg:w-auto lg:max-w-none lg:shrink rounded-[28px] relative overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(16,25,40,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(16,25,40,0.45)] border border-[#f1aa00]/30 bg-[#0d131f]"
          >
            {/* ── BACKGROUND.PNG TEXTURE LAYER (Clear Blackboard Math Equations) ── */}
            <div
              className="absolute inset-0 pointer-events-none select-none z-0"
              style={{
                backgroundImage: "url('/background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                mixBlendMode: "screen",
                opacity: 0.95,
              }}
              aria-hidden="true"
            />

            {/* Dark Studio Edge Vignette */}
            <div
              className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-[#0d131f]/70 via-transparent to-[#080d16]/90"
              aria-hidden="true"
            />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-7 sm:p-8 text-white">
              <div>
                {/* Header: Official Stamp */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1aa00]/20 border border-[#f1aa00]/40 text-xs font-bold text-[#f1aa00] uppercase tracking-wider">
                    <FileCheck2 size={13} /> Official Exam Result
                  </span>
                </div>

                <div className="mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    A-Level Statement of Results
                  </h3>
                </div>

                {/* Certificate Preview Card with Tap to Zoom */}
                <div
                  onClick={() => setModalOpen(true)}
                  className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden border-2 border-white/20 bg-white/5 cursor-pointer group shadow-2xl transition-all duration-200 hover:border-[#f1aa00]/60"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setModalOpen(true)}
                  aria-label="Click to enlarge official A-Level Statement of Results"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/a-level-result.jpeg"
                    alt="Official A-Level Statement of Results showing Grade A in all subjects"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105 filter brightness-95 contrast-105"
                  />

                  {/* Clean Tap to show transcript badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end justify-center p-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 group-hover:bg-[#0009af] transition-colors shadow-md">
                      <ZoomIn size={13} className="text-[#f1aa00]" />
                      Tap to show transcript
                    </span>
                  </div>
                </div>

                {/* Subtle Student Appreciation to Tutor */}
                <div className="mt-4 p-4 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-sm">
                  <p className="text-[0.875rem] text-white/90 leading-relaxed italic">
                    &ldquo;Thank you so much to my MathBridge tutors for the patience, weekly strategy sessions, and for always pushing me to aim for top grades. Couldn&apos;t have done this without you!&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-semibold text-[#f1aa00] flex items-center gap-1.5">
                    <Sparkles size={12} /> Student message to MathBridge team
                  </p>
                </div>
              </div>

              {/* Footer: Candidate Details */}
              <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between">
                <div>
                  <p className="text-[0.95rem] font-bold text-white tracking-wide flex items-center gap-1.5">
                    <GraduationCap size={16} className="text-[#f1aa00]" />
                    MathBridge Student
                  </p>
                  <p className="text-[0.8rem] text-white/60">
                    Candidate #2348 • OCR &amp; AQA Exam Boards
                  </p>
                </div>
                <BadgeCheck size={24} className="text-[#f1aa00] shrink-0" />
              </div>
            </div>
          </motion.div>

          {/* ═══════════════ CARD 3: ROYAL BLUE (GCSE SUCCESS STORY) ═══════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-[88vw] max-w-[390px] shrink-0 snap-center lg:w-auto lg:max-w-none lg:shrink rounded-[28px] relative overflow-hidden flex flex-col justify-between shadow-[0_16px_40px_rgba(0,9,175,0.22)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,9,175,0.32)] border border-white/20 bg-[#0009af]"
          >
            {/* ── BACKGROUND.PNG TEXTURE LAYER (Vivid & Visible Math Equations) ── */}
            <div
              className="absolute inset-0 pointer-events-none select-none z-0"
              style={{
                backgroundImage: "url('/background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                mixBlendMode: "screen",
                opacity: 0.95,
              }}
              aria-hidden="true"
            />

            {/* Subtle Gradient Vignette to keep text extra crisp */}
            <div
              className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-[#0009af]/75 via-transparent to-[#000673]/90"
              aria-hidden="true"
            />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-7 sm:p-8 text-white">
              <div>
                {/* Header: Verified Review Badge + Stars */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-semibold text-white">
                    <Sparkles size={13} className="text-[#f1aa00]" />
                    <span>GCSE Milestone Story</span>
                  </div>
                  <Quote size={30} className="text-white/30 fill-white/15 shrink-0" />
                </div>

                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#f1aa00] fill-[#f1aa00] drop-shadow-sm" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-white/80">5.0 Star Rating</span>
                </div>

                {/* Pull-quote headline */}
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-3">
                  &ldquo;She walked into her GCSEs confident — and it showed in her grades!&rdquo;
                </h3>

                {/* Review Body */}
                <p className="text-[0.95rem] leading-[1.7] text-white/90 font-normal">
                  Science and Maths used to be her biggest sources of anxiety. After a dedicated year with MathBridge, she unlocked complete clarity. The weekly progress breakdown and 1-on-1 pacing gave our daughter her confidence back!
                </p>

                {/* Growth Metric Tag */}
                <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-medium text-white/95">
                  <TrendingUp size={14} className="text-[#f1aa00]" />
                  <span>Sciences Mastery: <strong>Top 5% of Exam Cohort</strong></span>
                </div>
              </div>

              {/* Footer: Parent Profile */}
              <div className="mt-8 pt-5 border-t border-white/20 flex items-center justify-between">
                <div>
                  <p className="text-[0.8rem] text-white/70">
                    MathBridge GCSE Parent • Cambridge, UK
                  </p>
                </div>
                <BadgeCheck size={24} className="text-[#f1aa00] shrink-0" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile & Tablet Interactive Indicator Dots */}
        <div className="flex lg:hidden items-center justify-center gap-2.5 mt-6">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              aria-label={`Jump to review card ${i + 1}`}
              className={[
                "h-2.5 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-8 bg-[#0009af] shadow-sm"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400",
              ].join(" ")}
            />
          ))}
        </div>
      </div>

      {/* ═══════════════ FULL-SCREEN LIGHTBOX MODAL (Z-[99999] above navbar) ═══════════════ */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-xl w-full my-auto bg-[#0d131f] rounded-3xl overflow-hidden border border-[#f1aa00]/30 shadow-2xl p-5 sm:p-6 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3.5 border-b border-white/15 mb-4 shrink-0">
              <div>
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <FileCheck2 size={18} className="text-[#f1aa00]" />
                  Official Statement of Results
                </h3>
                <p className="text-white/60 text-xs mt-0.5">
                  Original student copy achieved through MathBridge 1-on-1 tutoring
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Certificate Image View */}
            <div className="flex-1 overflow-y-auto rounded-2xl border border-white/15 bg-black/40 min-h-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/a-level-result.jpeg"
                alt="Original Candidate Statement of Results showing Straight A grades"
                className="w-full h-auto rounded-xl"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/70 shrink-0">
              <span>Candidate Registration: 13 Phoenix • #2348</span>
              <span className="font-bold text-[#f1aa00]">Straight A Grades in STEM</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}