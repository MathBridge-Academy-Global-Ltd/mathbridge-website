import type { Metadata } from "next";
import { CreativeBackgroundFlare } from "@/components/backgrounds";
import AboutFAQ from "@/components/about/AboutFAQ";
import JambBanner from "@/components/home/JambBanner";
import ReferEarnBanner from "@/components/contact/ReferEarnBanner";
import ContactHero from "@/components/contact/ContactHero";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/seo/jsonLd";

export const metadata: Metadata = {
  title: "Contact Us & Free Consultation",
  description:
    "Get in touch with MathBridge for personalized 1-on-1 tutoring in Mathematics, Sciences, English, GCSE, WAEC, SAT, and JAMB. Book your free consultation today.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact MathBridge | Book Your Free Consultation",
    description:
      "Speak with our academic coordination team to assess your goals and match with an expert 1-on-1 tutor.",
    url: "/contact",
    images: [
      {
        url: "/og-image-mathbridge.png",
        width: 1200,
        height: 630,
        alt: "Contact MathBridge for Expert Online Tutoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MathBridge | Book Your Free Consultation",
    description:
      "Speak with our academic coordination team to assess your goals and match with an expert 1-on-1 tutor.",
    images: ["/og-image-mathbridge.png"],
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", item: "/" },
    { name: "Contact Us", item: "/contact" },
  ]);
  const faqJsonLd = getFaqJsonLd();

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ── Background layer ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Glow blobs */}
        <div style={{ position: "absolute", top: "-100px", left: "-140px", width: "480px", height: "480px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,9,175,0.09) 0%, transparent 70%)", filter: "blur(24px)" }} />
        <div style={{ position: "absolute", bottom: "-40px", right: "-60px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(241,170,0,0.11) 0%, transparent 70%)", filter: "blur(24px)" }} />
        <div style={{ position: "absolute", top: "35%", right: "8%", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,9,175,0.05) 0%, transparent 70%)", filter: "blur(16px)" }} />

        {/* Creative background flare */}
        <CreativeBackgroundFlare />
      </div>

      <ContactHero />

      {/* ── Additional Sections ── */}
      <ReferEarnBanner />
      <AboutFAQ />
      <JambBanner />
    </main>
  );
}
