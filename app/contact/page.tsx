import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import WavyText from "@/components/WavyText";
import { CreativeBackgroundFlare } from "@/components/backgrounds";
import { Mail, MapPin, Phone } from "lucide-react";
import AboutFAQ from "@/components/about/AboutFAQ";
import JambBanner from "@/components/home/JambBanner";
import ReferEarnBanner from "@/components/contact/ReferEarnBanner";

export const metadata: Metadata = {
  title: "Contact Us - MathBridge",
  description: "Get in touch with MathBridge for personalized tutoring in Mathematics, Science, and more.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 bg-white relative overflow-hidden">
      {/* ── Background layer ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Glow blobs */}
        <div style={{ position: "absolute", top: "-100px", left: "-140px", width: "480px", height: "480px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,9,175,0.09) 0%, transparent 70%)", filter: "blur(24px)" }} />
        <div style={{ position: "absolute", bottom: "-40px", right: "-60px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(241,170,0,0.11) 0%, transparent 70%)", filter: "blur(24px)" }} />
        <div style={{ position: "absolute", top: "35%", right: "8%", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,9,175,0.05) 0%, transparent 70%)", filter: "blur(16px)" }} />

        {/* Creative background flare */}
        <CreativeBackgroundFlare />
      </div>

      <div className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-12 lg:gap-16 items-start">
          
          {/* ── Left Column: Text & Info ── */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div>
              <h1 className="text-[2.5rem] sm:text-5xl font-extrabold tracking-tight text-[#101928] leading-[1.12] mb-5">
                Let's make <WavyText text="progress" fontColor="text-primaryBlue" lineColor="text-primaryGold" /> happen.
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
                Tell us what subjects you need help with, and we'll match you with a specialist tutor to turn challenges into competitive advantages.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-gray-100">
              {/* Contact Item: Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 text-[#0009af] group-hover:bg-[#0009af] group-hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-400">Email Us</p>
                  <a href="mailto:MathBridge.ng@gmail.com" className="text-[15px] font-bold text-[#101928] hover:text-[#0009af] transition-colors">
                    MathBridge.ng@gmail.com
                  </a>
                </div>
              </div>

              {/* Contact Item: Phone / WhatsApp */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 text-[#0009af] group-hover:bg-[#0009af] group-hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-400">Call or WhatsApp</p>
                  <a href="https://wa.me/2347048615201" target="_blank" rel="noopener noreferrer" className="text-[15px] font-bold text-[#101928] hover:text-[#0009af] transition-colors">
                    +234 704 861 5201
                  </a>
                </div>
              </div>

              {/* Contact Item: Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 text-[#0009af] group-hover:bg-[#0009af] group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-400">Location</p>
                  <p className="text-[15px] font-bold text-[#101928]">
                    Online Tutoring (Global)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Form ── */}
          <div className="relative">
            <ContactForm />
          </div>

        </div>
      </div>
      
      {/* ── Additional Sections ── */}
      <ReferEarnBanner />
      <AboutFAQ />
      <JambBanner />
    </main>
  );
}
