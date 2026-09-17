import type React from "react";
import type { LucideIcon } from "lucide-react";

/* ─────────────────────────── Hero Section ─────────────────────────── */
export interface StatItem {
  value: string;
  label: string;
  star?: boolean;
}

export interface EduSymbol {
  symbol: string;
  x: string;
  y: string;
  size: number;
  rotate: number;
  color: string;
  delay: number;
}

export interface FloatingIcon {
  Icon: React.ComponentType<{ style?: React.CSSProperties }>;
  x: string;
  y: string;
  size: number;
  rotate: number;
  color: string;
  delay: number;
}

/* ─────────────────────────── Subjects Section ─────────────────────────── */
export interface Subject {
  icon: LucideIcon;
  accent: string;
  iconBg: string;
  title: string;
  tagline: string;
  tags: string[];
}

/* ─────────────────────────── How It Works / FourSteps ─────────────────── */
export interface Step {
  number: number;
  color: string;
  textColor: string;
  title: string;
  description: string;
}

/* ─────────────────────────── Why MathBridge ───────────────────────────── */
export interface Benefit {
  title: string;
  description: string;
}

/* ─────────────────────────── Content & Media ─────────────────────────── */
export interface ReelItem {
  embedUrl: string;
  postUrl: string;
  title: string;
  description: string;
}

/* ─────────────────────────── Exam Marquee ─────────────────────────────── */
export interface ExamItem {
  label: string;
  desc: string;
}
