"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import WavyText from "@/components/WavyText";
import ContactForm from "@/components/contact/ContactForm";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export default function ContactHero() {
  return (
    <div className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-12 lg:gap-20 items-start">

        {/* ── Left: Hero Text & Contact Info ── */}
        <div className="lg:sticky lg:top-32 space-y-8">

          {/* Headline block */}
          <motion.div {...fadeUp(0)}>
            <h1 className="text-[2.5rem] sm:text-5xl font-extrabold tracking-tight text-[#101928] leading-[1.1] mb-4">
              Let&apos;s make{" "}
              <WavyText
                text="progress"
                fontColor="text-primaryBlue"
                lineColor="text-primaryGold"
              />{" "}
              happen.
            </h1>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-md">
              Tell us what subjects you need help with, and we&apos;ll match you
              with a specialist tutor to turn challenges into competitive
              advantages.
            </p>
          </motion.div>

          {/* Contact info card */}
          <motion.div
            {...fadeUp(0.12)}
            className="rounded-3xl overflow-hidden"
            style={{
              border: "1px solid rgba(0,9,175,0.09)",
              boxShadow:
                "0 4px 28px -8px rgba(0,9,175,0.08), 0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            {/* Card header strip */}
            <div
              className="relative px-6 py-5 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0009af 0%, #0a0fc9 80%)",
              }}
            >
              {/* background.png math texture overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "url('/background.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.99,
                  mixBlendMode: "screen",
                }}
              />
              <p className="relative text-[10px] font-black uppercase tracking-widest text-blue-200">
                Contact Details
              </p>
              <p className="relative text-white font-bold text-sm mt-0.5">
                We&apos;d love to hear from you
              </p>
            </div>

            {/* Contact rows */}
            <div className="bg-white divide-y divide-gray-100">
              {/* Email */}
              <a
                href="mailto:mathbridge.ng@gmail.com"
                className="flex items-center gap-4 px-6 py-5 group transition-colors hover:bg-blue-50/40"
              >
                <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-[#0009af] group-hover:bg-[#0009af] group-hover:text-white group-hover:border-[#0009af] transition-all duration-200 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                    Email Us
                  </p>
                  <span className="text-sm font-bold text-[#101928] group-hover:text-[#0009af] transition-colors truncate block">
                    mathbridge.ng@gmail.com
                  </span>
                </div>
                <svg
                  className="ml-auto w-4 h-4 text-gray-300 group-hover:text-[#0009af] transition-colors shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2347048615201"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-5 group transition-colors hover:bg-green-50/40"
              >
                <div className="w-11 h-11 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0 text-green-600 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-200 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                    Call or WhatsApp
                  </p>
                  <span className="text-sm font-bold text-[#101928] group-hover:text-green-700 transition-colors block">
                    +234 704 861 5201
                  </span>
                </div>
                <svg
                  className="ml-auto w-4 h-4 text-gray-300 group-hover:text-green-600 transition-colors shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 px-6 py-5">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                    Location
                  </p>
                  <p className="text-sm font-bold text-[#101928]">
                    Online Tutoring &middot; Global
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Right: Form ── */}
        <motion.div {...fadeLeft(0.18)}>
          <ContactForm />
        </motion.div>

      </div>
    </div>
  );
}
