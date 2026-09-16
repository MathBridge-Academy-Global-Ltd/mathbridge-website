import Hero from "@/components/home/Hero";
import ExamMarquee from "@/components/home/ExamMarquee";
import Subjects from "@/components/home/Subjects";
import AboutFAQ from "@/components/about/AboutFAQ";
import WhyMathBridge from "@/components/home/Whymathbridge";
import FourSteps from "@/components/home/Foursteps";
import Testimonials from "@/components/home/Testimonials";
import ContentAndMedia from "@/components/home/ContentAndMedia";

export default function Home() {
  return (
    <>
      <Hero />
      <ExamMarquee />
      <Subjects />
      <WhyMathBridge />
      <Testimonials />
      <FourSteps />
      <AboutFAQ />
      <ContentAndMedia />
    </>
  );
}