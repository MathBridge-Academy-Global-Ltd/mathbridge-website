"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, BadgeCheck, CheckCircle2 } from "lucide-react";

type TestimonialCard = {
  type: "quote";
  theme: "blue";
  quote: string;
  name: string;
  role: string;
};

type ResultCard = {
  type: "result";
  theme: "black";
  grades: { subject: string; grade: string }[];
  label: string;
};

type Card = TestimonialCard | ResultCard;

const cards: Card[] = [
  {
    type: "quote",
    theme: "blue",
    quote:
      "Her teachers at school have noticed the improvement too — MathBridge made all the difference in how she approaches her work now.",
    name: "Parent of Oyin",
    role: "MathBridge Parent",
  },
  {
    type: "quote",
    theme: "blue",
    quote:
      "Science and Maths used to be her biggest worry. After a year with MathBridge, she walked into her GCSEs confident — and it showed in her results.",
    name: "GCSE Parent",
    role: "MathBridge Parent",
  },
  {
    type: "result",
    theme: "black",
    label: "A-Level Statement of Results",
    grades: [
      { subject: "Mathematics", grade: "A" },
      { subject: "Chemistry (Adv.)", grade: "A" },
      { subject: "Computer Science", grade: "A" },
      { subject: "Extended Project", grade: "A" },
    ],
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-lg mx-auto mb-16">
          <p className="text-[0.75rem] font-bold tracking-[0.15em] text-primaryGold uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-[2rem] md:text-[2.25rem] font-extrabold tracking-tight text-gray">
            <span
              style={{
                fontFamily: "var(--font-kavoon)",
                color: "#f1aa00",
                position: "relative",
                display: "inline-block",
              }}
            >
              Trusted
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
                  stroke="#f1aa00"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            <span style={{ color: "#101928" }}>
              by Parents, Proven by    <span
              style={{
                fontFamily: "var(--font-kavoon)",
                color: "#0009af",
                position: "relative",
                display: "inline-block",
              }}
            >
              Results
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
            </span>
          </h2>
          <p className="mt-3 text-[0.9375rem] text-gray/60 leading-relaxed">
            From real messages to real report cards — a look at what
            MathBridge families are saying and seeing.
          </p>
        </div>

        {/* Stacked card deck */}
        <div className="relative max-w-[440px] mx-auto h-[340px] md:h-[320px]">
          {/* Background peeking cards for depth */}
          <div className="absolute inset-0 rounded-2xl bg-white border border-gray/10 shadow-[0_4px_20px_rgba(16,25,40,0.06)] rotate-3 translate-x-3" />
          <div className="absolute inset-0 rounded-2xl bg-white border border-gray/10 shadow-[0_4px_20px_rgba(16,25,40,0.06)] -rotate-2 -translate-x-2" />

          {/* "Tape" accent */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-gray/10 rotate-2 rounded-sm z-20" />

          <AnimatePresence mode="wait">
            {cards.map((card, i) =>
              i === active ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16, rotate: -1 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -16, rotate: 1 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className={[
                    "absolute inset-0 rounded-2xl p-7 flex flex-col justify-between shadow-[0_12px_32px_rgba(16,25,40,0.14)] z-10",
                    card.theme === "blue"
                      ? "bg-primaryBlue text-white"
                      : "bg-[#101928] text-white",
                  ].join(" ")}
                >
                  {card.type === "quote" ? (
                    <>
                      <Quote
                        size={28}
                        className="text-white/30 fill-white/30"
                      />
                      <p className="mt-4 text-[1rem] leading-[1.7] flex-1">
                        {card.quote}
                      </p>
                      <div className="mt-6 flex items-center justify-between">
                        <div>
                          <p className="text-[0.9375rem] font-bold">
                            {card.name}
                          </p>
                          <p className="text-[0.8125rem] text-white/60">
                            {card.role}
                          </p>
                        </div>
                        <BadgeCheck
                          size={18}
                          className="text-white/40"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <p className="text-[0.8125rem] font-semibold text-white/60 uppercase tracking-wide">
                          {card.label}
                        </p>
                        <span className="text-[0.6875rem] font-bold text-primaryGold bg-primaryGold/15 px-2.5 py-1 rounded-full">
                          Private
                        </span>
                      </div>

                      <div className="mt-5 flex flex-col gap-3 flex-1 justify-center">
                        {card.grades.map((g) => (
                          <div
                            key={g.subject}
                            className="flex items-center justify-between border-b border-white/10 pb-2.5"
                          >
                            <span className="text-[0.875rem] text-white/80">
                              {g.subject}
                            </span>
                            <span className="flex items-center gap-1.5 text-[0.9375rem] font-bold text-primaryGold">
                              <CheckCircle2 size={14} />
                              {g.grade}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className="mt-4 text-[0.8125rem] text-white/50">
                        Real MathBridge student — name withheld for privacy.
                      </p>
                    </>
                  )}
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={[
                "h-2 rounded-full transition-all duration-300",
                i === active
                  ? "w-6 bg-primaryBlue"
                  : "w-2 bg-gray/20 hover:bg-gray/30",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}