import SubjectHero from "@/components/about/SubjectHero";
import ExamMarquee from "@/components/home/ExamMarquee";
import AboutRecords from "@/components/about/AboutRecords";
import AboutServices from "@/components/about/AboutServices";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutBridges from "@/components/about/AboutBridges";
import AboutFAQ from "@/components/about/AboutFAQ";
import JambBanner from "@/components/home/JambBanner";
import WavyText from "@/components/WavyText";

export default function AboutPage() {
  return (
    <>
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
        copy="Founded in 2025, MathBridge started with one subject and one goal — to make expert tutoring personal. Today we deliver live 1-on-1 sessions across numerous subjects to students on 3 continents."
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
