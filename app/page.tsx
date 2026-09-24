import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ExamMarquee from "@/components/home/ExamMarquee";
import Subjects from "@/components/home/Subjects";
import AboutFAQ from "@/components/about/AboutFAQ";
import WhyMathbridge from "@/components/home/WhyMathbridge";
import FourSteps from "@/components/home/FourSteps";
import Testimonials from "@/components/home/Testimonials";
import ContentAndMedia from "@/components/home/ContentAndMedia";
import JambBanner from "@/components/home/JambBanner";
import { getFaqJsonLd } from "@/lib/seo/jsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: "/",
    images: [
      {
        url: "/og-image-mathbridge.png",
        width: 1200,
        height: 630,
        alt: "MathBridge - Expert 1-on-1 Online Tutoring | GCSE, WAEC, SAT & A-Levels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: ["/og-image-mathbridge.png"],
  },
};

export default function Home() {
  const faqJsonLd = getFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <ExamMarquee />
      <Subjects />
      <WhyMathbridge />
      <Testimonials />
      <FourSteps />
      <AboutFAQ />
      <ContentAndMedia />
      <JambBanner />
    </>
  );
}

