"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQItem, AboutFAQProps } from "@/types/about";
import WavyText from "@/components/WavyText";

const faqs: FAQItem[] = [
  {
    q: "What subjects does MathBridge tutor?",
    a: "We offer expert 1-on-1 tutoring in Mathematics, English Language, Physics, Biology, and Chemistry across British, Nigerian, and American curricula (WAEC, GCSE, IGCSE, A-Levels, JAMB, and SAT). Have a different subject in mind? We also provide expert instruction in other subjects upon request — simply let us know what you need and we will match you with a dedicated specialist tutor.",
  },
  {
    q: "How does a typical session work?",
    a: "Sessions are held live via our interactive online whiteboard. Your tutor reviews your goals, walks through curriculum concepts with step-by-step worked examples, and guides you through practice problems with real-time feedback — ensuring every minute is active and focused.",
  },
  {
    q: "How do I get started with MathBridge?",
    a: "Getting started is straightforward. Simply reach out via our contact page. We begin with a quick diagnostic session to understand the student's current proficiency, targets, and learning style. Then we pair you with the ideal tutor and construct a personalized study roadmap.",
  },
  {
    q: "Can I switch tutors if it is not a good fit?",
    a: "Absolutely. Student confidence and comfort come first. If you ever feel your assigned tutor is not an optimal match, our academic coordination team will arrange a smooth, seamless transition to another qualified specialist at no additional charge.",
  },
  {
    q: "What makes MathBridge different?",
    a: "Our educators are rigorously vetted (top 5% acceptance rate), every student receives an individualized learning plan rather than a one-size-fits-all lesson, and we provide transparent progress reporting to parents after sessions. We combine academic rigor with supportive mentorship.",
  },
];

export default function AboutFAQ({ showNetGrid = true }: AboutFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const listRef = useRef<HTMLDivElement>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className={`relative overflow-hidden py-20 sm:py-28 ${showNetGrid ? "bg-[#FAFBFF]" : "bg-white"}`}>
      {/* Net grid background pattern */}
      {showNetGrid && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 9, 175, 0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 9, 175, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
      )}

      {/* Decorative ambient background glows */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#0009af]/5 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#f1aa00]/8 blur-3xl pointer-events-none"
      />

      <div className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
          {/* ── Left Column: Sticky Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#101928] leading-[1.12] mb-5">
              Frequently asked{" "}
              <WavyText text="questions" fontColor="text-primaryBlue" lineColor="text-primaryGold" />
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 max-w-md">
              Everything you need to know about our personalized tutoring, flexible schedules, and subject programs. Cannot find what you are looking for? Reach out to our academic team anytime.
            </p>

            {/* Info badge */}
            <div className="flex items-center gap-3.5 bg-black border border-gray-150 rounded-2xl p-4 shadow-sm max-w-sm">
              <div className="w-10 h-10 rounded-xl bg-[#0009af] flex items-center justify-center text-white shrink-0 shadow-sm">
                <span className="text-sm font-black">5+</span>
              </div>
              <div>
                <p className="text-xs font-extrabold text-white">Core & Custom Subjects</p>
                <p className="text-[11px] text-white font-medium">Personalized 1-on-1 programs</p>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: FAQ List ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Standard stacked container with no inner scrollbar */}
            <div ref={listRef} className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;

                return (
                  <motion.div
                    key={i}
                    layout
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className={`rounded-2xl transition-all duration-300 border ${isOpen
                      ? "bg-white border-[#0009af]/30 shadow-[0_0_32px_rgba(0,9,175,0.16)]"
                      : "bg-white/90 border-gray-200/80 hover:border-gray-300 hover:bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.04)]"
                      }`}
                  >
                    {/* FAQ Header button */}
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0009af] rounded-2xl"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-base sm:text-lg font-bold leading-snug transition-colors duration-200 ${isOpen ? "text-[#0009af]" : "text-[#101928] group-hover:text-[#0009af]"
                          }`}
                      >
                        {faq.q}
                      </span>

                      {/* Circular toggle icon matching reference */}
                      <div
                        className={`shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                          ? "bg-primaryGold text-white shadow-md shadow-[#0009af]/25"
                          : "bg-[#0009af]/10 text-[#0009af] group-hover:bg-primaryGold group-hover:text-white"
                          }`}
                      >
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                        >
                          <ChevronDown className="w-5 h-5 stroke-[2.2]" />
                        </motion.div>
                      </div>
                    </button>

                    {/* Collapsible Answer Body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
                              opacity: { duration: 0.25, delay: 0.08 },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                              opacity: { duration: 0.15 },
                            },
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                            <div className="w-full h-px bg-gray-100 mb-4" />
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
