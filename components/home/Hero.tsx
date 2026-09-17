"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

/* ─────────────────────────── animation helpers ─────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
});

/* ────────────────────────────── stats data ─────────────────────────────── */
const stats = [
  { value: "1000+", label: "Hours Taught" },
  { value: "1:1",  label: "Personalised Learning" },
  { value: "5",    label: "Parent Satisfaction", star: true },
  { value: "100%", label: "Progress Report" },
];

/* ─────────────────────────────── trust pills ───────────────────────────── */
const trustItems = [
  "Expert-vetted tutors",
  "Free 30mins demo",
  "Progress tracked weekly",
];

/* ──────────────────── educational background symbols ───────────────────── */
// Each item: { symbol, x, y, size, rotate, color, delay }
const eduSymbols = [
  { symbol: "π",  x: "4%",  y: "12%", size: 28, rotate: -12, color: "rgba(0,9,175,0.10)",  delay: 0 },
  { symbol: "∑",  x: "12%", y: "68%", size: 26, rotate: 8,   color: "rgba(0,9,175,0.08)",  delay: 0.3 },
  { symbol: "√",  x: "88%", y: "22%", size: 24, rotate: 6,   color: "rgba(241,170,0,0.13)", delay: 0.6 },
  { symbol: "∞",  x: "82%", y: "75%", size: 30, rotate: -5,  color: "rgba(0,9,175,0.08)",  delay: 0.2 },
  { symbol: "Δ",  x: "55%", y: "8%",  size: 22, rotate: 10,  color: "rgba(241,170,0,0.10)", delay: 0.5 },
  { symbol: "÷",  x: "70%", y: "55%", size: 22, rotate: -8,  color: "rgba(0,9,175,0.07)",  delay: 0.4 },
  { symbol: "×",  x: "25%", y: "85%", size: 20, rotate: 15,  color: "rgba(241,170,0,0.10)", delay: 0.7 },
  { symbol: "≠",  x: "92%", y: "48%", size: 20, rotate: -6,  color: "rgba(0,9,175,0.07)",  delay: 0.1 },
  { symbol: "²",  x: "42%", y: "90%", size: 18, rotate: 12,  color: "rgba(0,9,175,0.07)",  delay: 0.8 },
  { symbol: "f(x)", x: "6%", y: "45%", size: 14, rotate: -10, color: "rgba(0,9,175,0.08)", delay: 0.9 },
];

/* ─────────────── educational SVG icons (inline, no imports) ────────────── */
function PencilIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  );
}
function AtomIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <circle cx="12" cy="12" r="1" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  );
}
function BookIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
function FlaskIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M9 3h6M9 3v8l-4 9h14l-4-9V3" />
    </svg>
  );
}

const floatingIcons = [
  { Icon: PencilIcon, x: "8%",  y: "30%", size: 28, rotate: 20,  color: "rgba(0,9,175,0.12)",   delay: 0.2 },
  { Icon: AtomIcon,   x: "78%", y: "12%", size: 34, rotate: -15, color: "rgba(0,9,175,0.09)",   delay: 0.5 },
  { Icon: BookIcon,   x: "60%", y: "78%", size: 30, rotate: 8,   color: "rgba(241,170,0,0.14)", delay: 0.3 },
  { Icon: FlaskIcon,  x: "3%",  y: "74%", size: 26, rotate: -10, color: "rgba(241,170,0,0.12)", delay: 0.7 },
];

/* ══════════════════════════════ COMPONENT ══════════════════════════════════ */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* ── Educational background layer ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">

        {/* Glow blobs */}
        <div style={{ position:"absolute", top:"-100px", left:"-140px", width:"480px", height:"480px", borderRadius:"50%", background:"radial-gradient(circle, rgba(0,9,175,0.09) 0%, transparent 70%)", filter:"blur(24px)" }} />
        <div style={{ position:"absolute", bottom:"-40px", right:"-60px",  width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle, rgba(241,170,0,0.11) 0%, transparent 70%)", filter:"blur(24px)" }} />
        <div style={{ position:"absolute", top:"35%", right:"8%", width:"280px", height:"280px", borderRadius:"50%", background:"radial-gradient(circle, rgba(0,9,175,0.05) 0%, transparent 70%)", filter:"blur(16px)" }} />

        {/* Math symbols */}
        {eduSymbols.map((s, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: s.delay },
              scale:   { duration: 0.8, delay: s.delay },
              y: { duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: s.delay },
            }}
            style={{
              position: "absolute",
              left: s.x,
              top: s.y,
              fontSize: `${s.size}px`,
              fontWeight: 700,
              color: s.color,
              transform: `rotate(${s.rotate}deg)`,
              userSelect: "none",
              lineHeight: 1,
              fontFamily: "Georgia, serif",
            }}
          >
            {s.symbol}
          </motion.span>
        ))}

        {/* SVG education icons */}
        {floatingIcons.map(({ Icon, x, y, size, rotate, color, delay }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.9, delay },
              scale:   { duration: 0.9, delay },
              y: { duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay },
            }}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: `${size}px`,
              height: `${size}px`,
              color,
              transform: `rotate(${rotate}deg)`,
            }}
          >
            <Icon style={{ width: "100%", height: "100%" }} />
          </motion.div>
        ))}
      </div>

      {/* ── Main hero grid ── */}
      <div className="relative max-w-[1280px] mx-auto px-6 pt-14 pb-4 grid md:grid-cols-2 items-center gap-10">

        {/* ────────── LEFT — text column ────────── */}
        <div className="w-full md:max-w-xl">

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.08)}
            className="text-[2.6rem] text-center md:text-left sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900"
          >
            <span style={{ fontFamily:"var(--font-kavoon)", color:"#0009af" }}>Personalised</span>{" "}Tutoring
            <br />That Builds{" "}
            <span style={{ fontFamily:"var(--font-kavoon)", color:"#f1aa00", position:"relative", display:"inline-block" }}>
              Confidence
              <svg
                aria-hidden="true"
                style={{ position:"absolute", bottom:"-5px", left:0, width:"100%", height:"7px", overflow:"visible" }}
                viewBox="0 0 200 7"
                preserveAspectRatio="none"
              >
                <path d="M0 3.5 Q25 0 50 3.5 Q75 7 100 3.5 Q125 0 150 3.5 Q175 7 200 3.5" stroke="#f1aa00" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <br />&amp;{" "}
            <span style={{ fontFamily:"var(--font-kavoon)", color:"#0009af" }}>Results</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            {...fadeUp(0.16)}
            className="mt-5 text-base text-center md:text-left md:text-[1.05rem] leading-relaxed text-gray-500 max-w-md"
          >
            Expert tutoring in{" "}
            <strong className="text-gray-800 font-semibold">Mathematics, English, Physics, Chemistry</strong>{" "}and{" "}
            <strong className="text-gray-800 font-semibold">Biology</strong> — tailored to every student&apos;s unique learning journey with live 1-on-1 sessions and weekly progress reports.
          </motion.p>

          {/* Trust micro-pills */}
          <motion.ul
            {...fadeUp(0.22)}
            className="mt-4 flex justify-center md:justify-start flex-wrap gap-3"
            style={{ listStyle:"none", padding:0 }}
          >
            {trustItems.map((item) => (
              <li key={item} style={{ display:"inline-flex", alignItems:"center", gap:"5px", fontSize:"13px", color:"rgba(16,25,40,0.65)", fontWeight:500 }}>
                <CheckCircle size={14} style={{ color:"#0009af", flexShrink:0 }} />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.28)}
            className="mt-7 flex items-center gap-3 flex-wrap"
          >
            <Link
              href="/contact"
              id="hero-cta-book"
              style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"13px 26px", backgroundColor:"#0009af", color:"#fff", fontSize:"15px", fontWeight:700, borderRadius:"999px", boxShadow:"0 6px 20px rgba(0,9,175,0.28)", transition:"all 0.2s ease", textDecoration:"none" }}
              className="hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(0,9,175,0.38)] active:translate-y-0"
            >
              <span className="min-[400px]:hidden">Book Demo</span>
              <span className="hidden min-[400px]:inline">Book Free Demo</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href="#media"
              id="hero-cta-watch"
              style={{ display:"inline-flex", alignItems:"center", gap:"7px", padding:"13px 22px", backgroundColor:"transparent", color:"#0009af", fontSize:"15px", fontWeight:600, borderRadius:"999px", border:"1.5px solid rgba(0,9,175,0.22)", transition:"all 0.2s ease", textDecoration:"none" }}
              className="hover:border-[rgba(0,9,175,0.45)] hover:-translate-y-[2px] hover:bg-[rgba(0,9,175,0.04)] active:translate-y-0"
            >
              <PlayCircle size={16} />
              Watch Tutorials
            </Link>
          </motion.div>
        </div>

        {/* ────────── RIGHT — image collage ────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="w-full flex justify-end"
        >
          {/* Gentle float on the whole collage */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ position:"relative", width:"100%", maxWidth:"520px" }}
          >
            {/* 3-col grid */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1.1fr 1fr", gridTemplateRows:"auto auto", gap:"10px" }}>

              {/* Col A Row 1 – vectors */}
              <div style={{ gridColumn:"1", gridRow:"1", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-end", gap:"8px", paddingBottom:"4px" }}>
                <motion.div
                  initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }}
                  transition={{ duration:0.6, delay:0.2 }}
                >
                  <Image src="/images/hero/hero-vector-2.png" alt="" width={200} height={50} className="object-contain" />
                </motion.div>
                <motion.div
                  initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }}
                  transition={{ duration:0.6, delay:0.3 }}
                >
                  <Image src="/images/hero/hero-vector-1.png" alt="" width={200} height={44} className="object-contain" />
                </motion.div>
                {/* Small decorative circle */}
                <motion.div
                  initial={{ opacity:0 }} animate={{ opacity:1 }}
                  transition={{ duration:0.6, delay:0.4 }}
                  style={{ width:"28px", height:"28px", borderRadius:"50%", background:"rgba(0,9,175,0.13)", border:"1.5px solid rgba(0,9,175,0.18)" }}
                />
              </div>

              {/* Col B Row 1 – hero-2 tall */}
              <motion.div
                initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }}
                transition={{ duration:0.65, delay:0.2 }}
                style={{ gridColumn:"2", gridRow:"1", borderRadius:"20px", overflow:"hidden", aspectRatio:"3/4", boxShadow:"0 10px 36px rgba(0,9,175,0.13)" }}
              >
                <Image src="/images/hero/hero-2.png" alt="Student studying with books" width={200} height={266} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              </motion.div>

              {/* Col C Row 1 – hero-3 tall */}
              <motion.div
                initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }}
                transition={{ duration:0.65, delay:0.28 }}
                style={{ gridColumn:"3", gridRow:"1", borderRadius:"20px", overflow:"hidden", aspectRatio:"3/4", boxShadow:"0 10px 36px rgba(0,0,0,0.09)", marginTop:"28px" }}
              >
                <Image src="/images/hero/hero-3.png" alt="Young student with laptop" width={180} height={240} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              </motion.div>

              {/* Col A Row 2 – hero-1 tall */}
              <motion.div
                initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }}
                transition={{ duration:0.65, delay:0.14 }}
                style={{ gridColumn:"1", gridRow:"2", borderRadius:"20px", overflow:"hidden", aspectRatio:"3/4.2", boxShadow:"0 10px 36px rgba(0,0,0,0.09)", marginTop:"-30px" }}
              >
                <Image src="/images/hero/hero-1.png" alt="Student with headphones learning online" width={160} height={224} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              </motion.div>

              {/* Col B Row 2 – hero-4 short */}
              <motion.div
                initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }}
                transition={{ duration:0.65, delay:0.34 }}
                style={{ gridColumn:"2", gridRow:"2", borderRadius:"20px", overflow:"hidden", aspectRatio:"3/3.5", boxShadow:"0 10px 36px rgba(0,0,0,0.09)" }}
              >
                <Image src="/images/hero/hero-4.png" alt="Student holding books smiling" width={200} height={233} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              </motion.div>

              {/* Col C Row 2 – hero-5 short */}
              <motion.div
                initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }}
                transition={{ duration:0.65, delay:0.40 }}
                style={{ gridColumn:"3", gridRow:"2", borderRadius:"20px", overflow:"hidden", aspectRatio:"3/3.5", boxShadow:"0 10px 36px rgba(0,0,0,0.09)" }}
              >
                <Image src="/images/hero/hero-5.png" alt="Student smiling at laptop" width={180} height={210} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              </motion.div>
            </div>

            {/* Floating badge: Live 1-on-1 */}
            <motion.div
              initial={{ opacity:0, scale:0.75 }}
              animate={{ opacity:1, scale:1 }}
              transition={{ duration:0.5, ease:[0.22,1,0.36,1], delay:0.55 }}
              style={{ position:"absolute", bottom:"16%", left:"-18px", backgroundColor:"white", borderRadius:"14px", padding:"10px 14px", boxShadow:"0 8px 28px rgba(0,0,0,0.12)", display:"flex", alignItems:"center", gap:"8px", zIndex:10, border:"1px solid rgba(0,9,175,0.07)" }}
            >
              <span style={{ width:"8px", height:"8px", borderRadius:"50%", backgroundColor:"#22c55e", boxShadow:"0 0 0 4px rgba(34,197,94,0.18)", flexShrink:0 }} />
              <div>
                <p style={{ fontSize:"11px", fontWeight:700, color:"#101928", margin:0 }}>Live 1-on-1</p>
                <p style={{ fontSize:"10px", color:"rgba(16,25,40,0.5)", margin:0 }}>Sessions Available</p>
              </div>
            </motion.div>

            {/* Floating badge: rating */}
            <motion.div
              initial={{ opacity:0, scale:0.75 }}
              animate={{ opacity:1, scale:1 }}
              transition={{ duration:0.5, ease:[0.22,1,0.36,1], delay:0.65 }}
              style={{ position:"absolute", top:"8px", right:"-14px", backgroundColor:"#0009af", borderRadius:"14px", padding:"10px 14px", boxShadow:"0 8px 28px rgba(0,9,175,0.26)", display:"flex", alignItems:"center", gap:"6px", zIndex:10 }}
            >
              <Star size={14} style={{ color:"#f1aa00", fill:"#f1aa00" }} />
              <div>
                <p style={{ fontSize:"13px", fontWeight:800, color:"white", margin:0 }}>5.0</p>
                <p style={{ fontSize:"9px", color:"rgba(255,255,255,0.65)", margin:0 }}>Parent Rating</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.55, ease:[0.22,1,0.36,1], delay:0.45 }}
        style={{ position:"relative", marginTop:"32px", backgroundImage:"url('/background.png')", backgroundSize:"cover", backgroundPosition:"center" }}
      >
        {/* Blue overlay so white text stays legible */}
        <div style={{ position:"absolute", inset:0, backgroundColor:"rgba(0,9,175,0.85)" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 place-items-center gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity:0, y:14 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.45, delay:0.5 + i * 0.07 }}
              className="text-center md:text-left"
            >
              <p
                className="flex items-center justify-center md:justify-start gap-1.5 leading-none text-[1.75rem] md:text-[2rem] font-extrabold text-white"
                style={{ fontFamily: stat.value === "1:1" || stat.value === "100%" ? "var(--font-kavoon)" : undefined }}
              >
                {stat.value}
                {stat.star && <Star size={20} style={{ color:"#f1aa00", fill:"#f1aa00", flexShrink:0 }} />}
              </p>
              <p className="mt-1.5 text-sm text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}