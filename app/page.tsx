import Hero from "@/components/home/Hero";
import ExamMarquee from "@/components/home/ExamMarquee";
import Subjects from "@/components/home/Subjects";
import AboutFAQ from "@/components/about/AboutFAQ";
import WhyMathbridge from "@/components/home/Whymathbridge";
import FourSteps from "@/components/home/Foursteps";
import Testimonials from "@/components/home/Testimonials";
import ContentAndMedia from "@/components/home/ContentAndMedia";
import JambBanner from "@/components/home/JambBanner";

export default function Home() {
  return (
    <>
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
