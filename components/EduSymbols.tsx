"use client";

import React from "react";
import { motion } from "framer-motion";
import { PencilIcon, AtomIcon, BookIcon, FlaskIcon } from "@/components/icons";
import type { EduSymbol, FloatingIcon } from "@/types/home";

export interface EduSymbolsProps {
  /**
   * "light" for white/light backgrounds (uses brand navy & gold)
   * "dark" for dark hero backgrounds (uses white & gold)
   */
  variant?: "light" | "dark";
  className?: string;
}

export function getEduSymbols(variant: "light" | "dark" = "light"): EduSymbol[] {
  const isDark = variant === "dark";
  return [
    { symbol: "π",   x: "4%",  y: "12%", size: 28, rotate: -12, color: isDark ? "rgba(255,255,255,0.10)" : "rgba(0,9,175,0.10)",  delay: 0 },
    { symbol: "∑",   x: "12%", y: "68%", size: 26, rotate: 8,   color: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,9,175,0.08)",  delay: 0.3 },
    { symbol: "√",   x: "88%", y: "22%", size: 24, rotate: 6,   color: isDark ? "rgba(241,170,0,0.15)"   : "rgba(241,170,0,0.13)", delay: 0.6 },
    { symbol: "∞",   x: "82%", y: "75%", size: 30, rotate: -5,  color: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,9,175,0.08)",  delay: 0.2 },
    { symbol: "Δ",   x: "55%", y: "8%",  size: 22, rotate: 10,  color: isDark ? "rgba(241,170,0,0.12)"   : "rgba(241,170,0,0.10)", delay: 0.5 },
    { symbol: "÷",   x: "70%", y: "55%", size: 22, rotate: -8,  color: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,9,175,0.07)",  delay: 0.4 },
    { symbol: "×",   x: "25%", y: "85%", size: 20, rotate: 15,  color: isDark ? "rgba(241,170,0,0.12)"   : "rgba(241,170,0,0.10)", delay: 0.7 },
    { symbol: "≠",   x: "92%", y: "48%", size: 20, rotate: -6,  color: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,9,175,0.07)",  delay: 0.1 },
    { symbol: "²",   x: "42%", y: "90%", size: 18, rotate: 12,  color: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,9,175,0.07)",  delay: 0.8 },
    { symbol: "f(x)", x: "6%", y: "45%", size: 14, rotate: -10, color: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,9,175,0.08)", delay: 0.9 },
  ];
}

export function getFloatingIcons(variant: "light" | "dark" = "light"): FloatingIcon[] {
  const isDark = variant === "dark";
  return [
    { Icon: PencilIcon, x: "8%",  y: "30%", size: 28, rotate: 20,  color: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,9,175,0.12)",   delay: 0.2 },
    { Icon: AtomIcon,   x: "78%", y: "12%", size: 34, rotate: -15, color: isDark ? "rgba(255,255,255,0.10)" : "rgba(0,9,175,0.09)",   delay: 0.5 },
    { Icon: BookIcon,   x: "60%", y: "78%", size: 30, rotate: 8,   color: isDark ? "rgba(241,170,0,0.16)"   : "rgba(241,170,0,0.14)", delay: 0.3 },
    { Icon: FlaskIcon,  x: "3%",  y: "74%", size: 26, rotate: -10, color: isDark ? "rgba(241,170,0,0.14)"   : "rgba(241,170,0,0.12)", delay: 0.7 },
  ];
}

export default function EduSymbols({
  variant = "light",
  className = "",
}: EduSymbolsProps) {
  const symbols = getEduSymbols(variant);
  const icons = getFloatingIcons(variant);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Math symbols */}
      {symbols.map((s, i) => (
        <motion.span
          key={`symbol-${i}-${s.symbol}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: s.delay },
            scale: { duration: 0.8, delay: s.delay },
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
      {icons.map(({ Icon, x, y, size, rotate, color, delay }, i) => (
        <motion.div
          key={`icon-${i}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.9, delay },
            scale: { duration: 0.9, delay },
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
  );
}
