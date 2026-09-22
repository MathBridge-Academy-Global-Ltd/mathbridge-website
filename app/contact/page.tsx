import type { Metadata } from "next";
import { CreativeBackgroundFlare } from "@/components/backgrounds";
import AboutFAQ from "@/components/about/AboutFAQ";
import JambBanner from "@/components/home/JambBanner";
import ReferEarnBanner from "@/components/contact/ReferEarnBanner";
import ContactHero from "@/components/contact/ContactHero";

export const metadata: Metadata = {
  title: "Contact Us - MathBridge",
  description: "Get in touch with MathBridge for personalized tutoring in Mathematics, Science, and more.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
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
