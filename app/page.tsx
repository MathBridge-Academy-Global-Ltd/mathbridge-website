import Hero from "@/components/home/Hero";
import ExamMarquee from "@/components/home/ExamMarquee";
import Subjects from "@/components/home/Subjects";
import WhyMathBridge from "@/components/home/WhyMathbridge";
import FourSteps from "@/components/home/FourSteps";

export default function Home() {
  return (
    <>
      <Hero />
      <ExamMarquee />
      <Subjects />
      <WhyMathBridge />
      <FourSteps />
    </>
  );
}