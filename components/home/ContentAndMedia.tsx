"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PlayCircle, ArrowRight } from "lucide-react";

const reels = [
  {
    embedUrl: "https://www.instagram.com/reel/DZ7kw_8SsEB/embed/?autoplay=1",
    postUrl: "https://www.instagram.com/mathbridge.academy/reel/DZ7kw_8SsEB/",
    title: "JAMB Surd Question Solved",
    description:
      "Watch how we break down a tricky JAMB surd question step by step — making complex concepts simple and exam-ready for every student.",
  },
  {
    embedUrl: "https://www.instagram.com/reel/Db3TRUMKH6A/embed/",
    postUrl: "https://www.instagram.com/reel/Db3TRUMKH6A/",
    title: "SAT Registration & Tutorials",
    description:
      "Everything you need to know about SAT registration and how MathBridge prepares students with structured, result-driven tutorial sessions.",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DcZBAM6K1mJ/embed/",
    postUrl: "https://www.instagram.com/mathbridge.academy/reel/DcZBAM6K1mJ/",
    title: "Our Anniversary Celebration",
    description:
      "A look back at the milestones, the students, and the journey — celebrating another year of transforming maths education globally.",
  },
];

export default function ContentAndMedia() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="media"
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-24 bg-[#FAFBFF]"
      aria-label="Instagram content and media"
    >
      {/* Background glow texture */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "450px", height: "450px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,9,175,0.06) 0%, transparent 70%)", filter: "blur(24px)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(241,170,0,0.07) 0%, transparent 70%)", filter: "blur(24px)" }} />
      </div>

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-lg mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-[#0009af] text-xs font-extrabold tracking-wider uppercase mb-3 shadow-xs">
            Media & Tutorials
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#101928]">
            See MathBridge in{" "}
            <span
              style={{
                fontFamily: "var(--font-kavoon)",
                color: "#f1aa00",
                position: "relative",
                display: "inline-block",
              }}
            >
              Action
              <svg
                aria-hidden="true"
                style={{ position: "absolute", bottom: "-5px", left: 0, width: "100%", height: "6px", overflow: "visible" }}
                viewBox="0 0 200 6"
                preserveAspectRatio="none"
              >
                <path d="M0 3.5 Q25 0 50 3.5 Q75 7 100 3.5 Q125 0 150 3.5 Q175 7 200 3.5" stroke="#f1aa00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Real worked exam questions, SAT prep breakdowns, and milestones from our online academy.
          </p>
        </motion.div>

        {/* Scrollable Container on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 pt-1 -mx-4 px-4 sm:-mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:overflow-visible sm:pb-0 no-scrollbar">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.postUrl}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              className="w-[82vw] max-w-[320px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink flex flex-col rounded-2xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(16,25,40,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,9,175,0.12)] hover:border-blue-100"
            >
              {/* Video Frame */}
              <div className="relative w-full aspect-[9/16] bg-[#101928] overflow-hidden">
                <a
                  href={reel.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:scale-110 shadow-md"
                  aria-label={`View ${reel.title} on Instagram`}
                >
                  <ArrowRight size={16} />
                </a>

                <iframe
                  src={reel.embedUrl}
                  title={reel.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  loading={i === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              {/* Info text below */}
              <div className="p-5 flex flex-col justify-between flex-1 gap-3">
                <div>
                  <h3 className="text-base font-extrabold text-[#101928] leading-snug mb-1.5">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {reel.description}
                  </p>
                </div>

                <a
                  href={reel.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0009af] transition-all hover:gap-2 hover:text-[#000780] pt-2 border-t border-gray-100"
                >
                  <PlayCircle size={15} />
                  <span>Watch on Instagram</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Swipe hint on mobile */}
        <div className="flex sm:hidden items-center justify-center mt-3 text-xs font-medium text-gray-400">
          ← Swipe to watch all reels →
        </div>
      </div>
    </section>
  );
}
