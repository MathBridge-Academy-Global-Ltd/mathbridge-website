/**
 * Central site configuration and SEO constants for MathBridge
 */

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mathbridgeacademy-rho.vercel.app";

// Ensure no trailing slash for consistent URL composition
export const siteUrl = rawSiteUrl.replace(/\/+$/, "");

export const siteConfig = {
  name: "MathBridge",
  legalName: "MathBridge Academy Global Ltd",
  shortName: "MathBridge Academy",
  url: siteUrl,
  ogImage: `${siteUrl}/og-image-mathbridge.png`,
  logo: `${siteUrl}/mathbridge-logo.png`,
  email: "mathbridge.ng@gmail.com",
  phone: "+2347048615201",
  displayPhone: "+234 704 861 5201",
  whatsappNumber: "2347048615201",
  whatsappUrl: "https://wa.me/2347048615201",
  telegramUrl: "https://t.me/JAMBRIDGE",
  instagramUrl: "https://www.instagram.com/mathbridge.academy",
  tiktokUrl: "https://www.tiktok.com/@mathbridge",

  defaultTitle: "MathBridge | Expert 1-on-1 Online Tutoring | GCSE, WAEC, SAT & A-Levels",
  titleTemplate: "%s | MathBridge",
  defaultDescription:
    "MathBridge delivers world class personalized 1-on-1 online tutoring in Mathematics, Physics, Chemistry, Biology, and English. Proven exam preparation for GCSE, IGCSE, WAEC, JAMB 2027, SAT, and A-Levels with top vetted tutors.",

  keywords: [
    // Brand keywords
    "MathBridge",
    "MathBridge Academy",
    "MathBridge Online Tutoring",
    "MathBridge Tutors",
    
    // Core Subject Keywords
    "Online Maths Tutor",
    "Online Mathematics Tutoring",
    "GCSE Maths Tutor",
    "A-Level Maths Tutor",
    "Online Physics Tutor",
    "Online Chemistry Tutor",
    "GCSE Biology Tutor",
    "Online English Language Tutor",
    "STEM Tutoring Online",

    // Exam Boards & Qualifications
    "WAEC Online Tutoring",
    "WAEC Mathematics Prep",
    "JAMB 2027 Prep Group",
    "JAMB Online Tutorial",
    "JAMBRIDGE Telegram",
    "GCSE Online Tutoring UK",
    "IGCSE Tutors Online",
    "SAT Prep Tutoring",
    "Digital SAT Prep",
    "A-Levels Private Tutor",
    "KS1 KS2 KS3 Tutoring",
    "11 Plus Tutoring",
    "13 Plus Exam Prep",

    // Value Proposition & Intent
    "1-on-1 Online Tutoring",
    "Private Online Tutor Nigeria UK US",
    "Personalized Learning Program",
    "Affordable Online Tutoring",
    "Live Interactive Whiteboard Tutoring",
    "Best Online Tutors for Math and Science",
  ],

  locale: "en_US",
  creator: "MathBridge Academy Global Ltd",
  publisher: "MathBridge Academy Global Ltd",
};
