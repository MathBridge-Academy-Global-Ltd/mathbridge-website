"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import WavyText from "@/components/WavyText";
import { TelegramIcon } from "@/components/icons";
import { NetBackground } from "@/components/backgrounds";

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
      {/* ── Net Grid Background Pattern ── */}
      <NetBackground variant="dark" size={36} />

      {/* ── Subtle Ambient Glows with gentle breathing animation ── */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-emerald-400 blur-3xl pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-[#f1aa00] blur-3xl pointer-events-none"
      />

      {/* ── Full-width edge-to-edge container matching footer ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Column: Simplified, high-converting copy with entrance animation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-2xl text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-200 text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-sm"
            >
              <Sparkles size={13} className="text-[#f1aa00] animate-pulse" />
              <span>JAMB 2027 Trial Class</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Writing <WavyText text="JAMB IN 2027?" fontColor="text-primaryGold" lineColor="text-primaryGold" /> <br /> Join Our Free Student Prep Group
            </h2>

            <p className="mt-3 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Connect with fellow 2027 candidates for a free trial class, live problem solving sessions, and step by step guidance to master your exam early.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://t.me/JAMBRIDGE"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0009af] hover:bg-[#00078a] text-white font-bold text-sm sm:text-[15px] shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
              >
                <TelegramIcon size={19} />
                <span>Join Telegram Group (@JAMBRIDGE)</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean, compact QR card with entrance & hover animation */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0"
          >
            <motion.a
              href="https://t.me/JAMBRIDGE"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group block bg-white p-4 sm:p-5 rounded-2xl shadow-xl transition-shadow duration-200 hover:shadow-2xl"
            >
              <div className="w-36 h-36 sm:w-44 sm:h-44 relative bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center border border-gray-100">
                <Image
                  src="/jamb-qr.png"
                  alt="Scan QR code to join JAMBRIDGE on Telegram"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-2.5 text-center flex items-center justify-center gap-1.5 text-xs font-bold text-[#0009af] group-hover:underline">
                <Send size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                <span>t.me/JAMBRIDGE</span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
