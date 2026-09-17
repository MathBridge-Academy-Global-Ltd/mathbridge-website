import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

/* ─────────────────────────── About Bridges / Team ─────────────────────────── */
export interface StaffMember {
  name: string;
  role: string;
  supportRole?: string;
  bio: string;
  image: string;
  deptIds: string[];
  deptColor: string;
  isHOD?: boolean;
  pillRole?: string;
}

export interface StaffTab {
  id: string;
  label: string;
  color: string;
}

export type Tab = StaffTab;

/* ─────────────────────────── Subject Hero ─────────────────────────────────── */
export interface SubjectHeroProps {
  /** Optional page-specific background photo (defaults to about-hero.jpg) */
  bgImage?: string;
  /** Eyebrow label */
  eyebrow?: string;
  /** Hero headline (JSX or string) */
  headline: ReactNode;
  /** Short body copy */
  copy: string;
  /** Primary CTA */
  cta?: { label: string; href: string };
  /** Secondary CTA */
  ctaSecondary?: { label: string; href: string };
}

/* ─────────────────────────── About Services ───────────────────────────────── */
export interface AboutService {
  Icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  bg: string;
}

/* ─────────────────────────── About FAQ ────────────────────────────────────── */
export interface FAQItem {
  q: string;
  a: string;
}

export interface AboutFAQProps {
  showNetGrid?: boolean;
}
