import SubjectHero from "@/components/about/SubjectHero";
import ExamMarquee from "@/components/home/ExamMarquee";
import AboutRecords from "@/components/about/AboutRecords";
import AboutServices from "@/components/about/AboutServices";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutBridges from "@/components/about/AboutBridges";
import AboutFAQ from "@/components/about/AboutFAQ";
import JambBanner from "@/components/home/JambBanner";

export default function AboutPage() {
  return (
    <>
      <SubjectHero
        eyebrow="Our Story"
        headline={
          <>
            <span className="text-white">Born From a </span>
            <span
              style={{
                fontFamily: "var(--font-kavoon)",
                color: "#f1aa00",
                position: "relative",
                display: "inline-block",
              }}
            >
              Passion
              <svg
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: 0,
                  width: "100%",
                  height: "7px",
                  overflow: "visible",
                }}
                viewBox="0 0 200 7"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 3.5 Q25 0 50 3.5 Q75 7 100 3.5 Q125 0 150 3.5 Q175 7 200 3.5"
                  stroke="#f1aa00"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
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
