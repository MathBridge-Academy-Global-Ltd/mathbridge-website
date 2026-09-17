"use client";

import Image from "next/image";
import { ArrowRight, Send, Sparkles } from "lucide-react";

function TelegramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-1.97 9.28c-.15.67-.54.83-1.1.52l-3.02-2.22-1.46 1.41c-.16.16-.3.3-.61.3l.21-3.04 5.55-5.02c.24-.22-.05-.34-.37-.13l-6.86 4.31-2.95-.92c-.64-.2-.65-.64.13-.95l11.53-4.44c.53-.2 1 .13.82.88z" />
    </svg>
  );
}

export default function JambBanner() {
  return (
    <section
      id="jamb-2027"
      className="relative overflow-hidden w-full text-white"
      style={{
        background: "linear-gradient(135deg, #022c22 0%, #065f46 50%, #022c22 100%)",
      }}
      aria-label="JAMB 2027 Preparation Banner"
    >
      {/* ── Net Grid Background Pattern (replaces background.png) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── Subtle Ambient Glows ── */}
      <div
        aria-hidden="true"
        className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-emerald-400/15 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-[#f1aa00]/10 blur-3xl pointer-events-none"
      />

      {/* ── Full-width edge-to-edge container matching footer ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Column: Simplified, high-converting copy */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-200 text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-sm">
              <Sparkles size={13} className="text-[#f1aa00]" />
              <span>JAMB 2027 Trial Class</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Writing   <span
                style={{
                  fontFamily: "var(--font-kavoon)",
                  color: "#f1aa00",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                JAMB IN 2027
                <svg
                  aria-hidden="true"
                  style={{ position: "absolute", bottom: "-5px", left: 0, width: "100%", height: "6px", overflow: "visible" }}
                  viewBox="0 0 200 6"
                  preserveAspectRatio="none"
                >
                  <path d="M0 3.5 Q25 0 50 3.5 Q75 7 100 3.5 Q125 0 150 3.5 Q175 7 200 3.5" stroke="#f1aa00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>? <br /> Join Our Free Student Prep Group
            </h2>

            <p className="mt-3 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Connect with fellow 2027 candidates for a free trial class, live problem-solving sessions, and step-by-step guidance to master your exam early.
            </p>

            {/* CTA Button */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="https://t.me/JAMBRIDGE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0009af] hover:bg-[#0077b5] text-white font-bold text-sm sm:text-[15px] shadow-lg shadow-[#0088cc]/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
              >
                <TelegramIcon size={19} />
                <span>Join Telegram Group (@JAMBRIDGE)</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Clean, compact QR card */}
          <div className="shrink-0">
            <a
              href="https://t.me/JAMBRIDGE"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white p-4 sm:p-5 rounded-2xl shadow-xl transition-transform duration-200 hover:scale-105"
            >
              <div className="w-36 h-36 sm:w-44 sm:h-44 relative bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center border border-gray-100">
                <Image
                  src="/jamb-qr.png"
                  alt="Scan QR code to join JAMBRIDGE on Telegram"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain p-1.5"
                />
              </div>
              <div className="mt-2.5 text-center flex items-center justify-center gap-1.5 text-xs font-bold text-[#0009af] group-hover:underline">
                <Send size={13} />
                <span>t.me/JAMBRIDGE</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
