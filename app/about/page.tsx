import type { Metadata } from "next";
import SubjectHero from "@/components/about/SubjectHero";
import ExamMarquee from "@/components/home/ExamMarquee";
import AboutRecords from "@/components/about/AboutRecords";
import AboutServices from "@/components/about/AboutServices";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutBridges from "@/components/about/AboutBridges";
import AboutFAQ from "@/components/about/AboutFAQ";
import JambBanner from "@/components/home/JambBanner";
import WavyText from "@/components/WavyText";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/seo/jsonLd";

export const metadata: Metadata = {
  title: "About Us | Our Story, Educators & Mission",
  description:
    "Learn about MathBridge's mission to make world class 1-on-1 tutoring personal and accessible. Meet our passionate educators, HODs, and leadership team delivering results across 3 continents.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About MathBridge | Passion for Teaching & Academic Excellence",
    description:
      "Founded in 2025, MathBridge delivers live 1-on-1 sessions across numerous subjects to students on 3 continents.",
    url: "/about",
    images: [
      {
        url: "/og-image-mathbridge.png",
        width: 1200,
        height: 630,
        alt: "About MathBridge Educators and Leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MathBridge | Passion for Teaching & Academic Excellence",
    description:
      "Founded in 2025, MathBridge delivers live 1-on-1 sessions across numerous subjects to students on 3 continents.",
    images: ["/og-image-mathbridge.png"],
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" },
  ]);
  const faqJsonLd = getFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SubjectHero
        eyebrow="Our Story"
        headline={
          <>
            <span className="text-white">Born From a </span>
            <WavyText text="Passion" fontColor="text-primaryGold" lineColor="text-primaryGold" />
            <br />
            <span className="text-white">for </span>
            <span style={{ fontFamily: "var(--font-kavoon)", color: "#f1aa00" }}>
              Teaching
            </span>
          </>
        }
        copy="Founded in 2025, MathBridge started with one subject and one goal, to make expert tutoring personal. Today we deliver live 1-on-1 sessions across numerous subjects to students on 3 continents."
      />
      <ExamMarquee />
      <AboutVisionMission />
      <AboutRecords />
      <AboutServices />
      <AboutBridges />
      <AboutFAQ />
      <JambBanner />
    </>
  );
}
