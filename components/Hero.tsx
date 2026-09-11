import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const stats = [
  { value: "120+", label: "Hours Taught" },
  { value: "1:1", label: "Personalised Learning" },
  { value: "5", label: "Parent Satisfaction", star: true },
  { value: "100%", label: "Progress Report" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ── Main hero content ── */}
      <div className="max-w-[1280px] mx-auto px-6 pt-16 grid md:grid-cols-2 items-center gap-12">
        {/* Left — text column */}
        <div className="max-w-xl">
          <h1 className="text-[2.25rem] md:text-[2.75rem] font-extrabold leading-[1.15] tracking-tight text-gray">
            <span className="text-primaryBlue">Personalized</span> Tutoring
            That Builds{" "}
            <span className="text-primaryGold">Confidence</span> and{" "}
            <span className="text-primaryBlue">Results</span>
          </h1>

          <p className="mt-5 text-[1rem] leading-[1.75] text-gray/60 max-w-md">
            Expert tutoring in Mathematics, English, Physics, Chemistry, and
            Biology — tailored to every student&apos;s unique learning
            journey.
          </p>

          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className={[
                "inline-flex items-center gap-2 px-[26px] py-[13px]",
                "bg-primaryBlue text-white text-[15px] font-semibold rounded-full",
                "shadow-[0_4px_14px_rgba(0,9,175,0.28)]",
                "transition-all duration-200",
                "hover:bg-[#0008d4] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,9,175,0.38)]",
                "active:translate-y-0",
              ].join(" ")}
            >
              Book Free Demo
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/about"
              className={[
                "inline-flex items-center px-[26px] py-[13px]",
                "bg-white text-primaryBlue text-[15px] font-semibold rounded-full",
                "border border-primaryBlue/20",
                "transition-all duration-200",
                "hover:border-primaryBlue/40 hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(0,9,175,0.12)]",
                "active:translate-y-0",
              ].join(" ")}
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right — image collage */}
        <div className="relative w-full flex justify-center md:justify-end">
          <div className="relative w-full max-w-[500px] aspect-[700/1040]">
            <Image
              src="/Group 2.png"
              alt="MathBridge students learning online"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="relative bg-primaryBlue">
        <div className="max-w-[1280px] mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-1.5 text-[1.75rem] md:text-[2rem] font-extrabold text-white leading-none">
                {stat.value}
                {stat.star && (
                  <Star
                    size={20}
                    className="text-primaryGold fill-primaryGold shrink-0"
                  />
                )}
              </p>
              <p className="mt-2 text-[0.875rem] text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}