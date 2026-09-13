import Image from "next/image";

const benefits = [
  {
    title: "Personalized Learning Plans",
    description:
      "Each student receives a custom roadmap tailored to their goals and current level.",
  },
  {
    title: "Qualified Tutors",
    description:
      "Every tutor is thoroughly vetted and specialized in their subject area.",
  },
  {
    title: "Continuous Assessments",
    description:
      "Regular evaluations ensure students are always progressing.",
  },
  {
    title: "Progress Tracking & Reports",
    description:
      "Parents stay informed with detailed, structured progress reports.",
  },
  {
    title: "Flexible Online Sessions",
    description:
      "Learn from anywhere at a schedule that works for your family.",
  },
];

export default function WhyMathBridge() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-[2rem] md:text-[2.25rem] font-extrabold tracking-tight text-gray">
            Why{" "}
            <span
              style={{
                fontFamily: "var(--font-kavoon)",
                color: "#0009af",
                position: "relative",
                display: "inline-block",
              }}
            >
              MATHBridge
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
                  stroke="#0009af"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-3 text-[0.9375rem] text-gray/60 leading-relaxed">
            We don&apos;t just teach, we build habits, confidence, and a
            genuine love for learning. Everything your child needs to
            succeed.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 items-center gap-14 md:gap-10">
          {/* Left — image + floating stat mockups */}
          <div className="relative max-w-[420px] mx-auto md:mx-0">
            <div className="relative rounded-3xl bg-primaryGold aspect-[720/640] overflow-hidden">
              <Image
                src="/joshuaimg.png"
                alt="MathBridge tutor"
                fill
                className="object-contain"
                style={{ objectPosition: "center 15%" }}
              />
            </div>

            {/* 94% Grade Improvement — top-left */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-[0_8px_24px_rgba(16,25,40,0.12)] p-3.5 w-[132px]">
              <div className="relative w-14 h-14 mx-auto">
                <svg viewBox="0 0 56 56" className="w-14 h-14 -rotate-90">
                  <circle
                    cx="28"
                    cy="28"
                    r="24"
                    fill="none"
                    stroke="#EAEAF5"
                    strokeWidth="5"
                  />
                  <circle
                    cx="28"
                    cy="28"
                    r="24"
                    fill="none"
                    stroke="#0009AF"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 24}
                    strokeDashoffset={2 * Math.PI * 24 * (1 - 0.94)}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[0.8125rem] font-bold text-gray">
                  94%
                </span>
              </div>
              <p className="mt-2 text-center text-[0.6875rem] font-medium text-gray/60 leading-tight">
                Grade Improvement
              </p>
            </div>

            {/* Student Confidence — right-middle */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-6 bg-white rounded-2xl shadow-[0_8px_24px_rgba(16,25,40,0.12)] p-3.5 w-[128px]">
              <div className="flex items-end gap-1 h-10">
                <span className="w-2 rounded-sm bg-primaryBlue/15 h-[35%]" />
                <span className="w-2 rounded-sm bg-primaryBlue/25 h-[50%]" />
                <span className="w-2 rounded-sm bg-primaryBlue/40 h-[65%]" />
                <span className="w-2 rounded-sm bg-primaryBlue/60 h-[80%]" />
                <span className="w-2 rounded-sm bg-primaryBlue h-full" />
              </div>
              <p className="mt-2 text-[0.6875rem] font-medium text-gray/60 leading-tight">
                Student Confidence
              </p>
            </div>

            {/* Parent Satisfaction — bottom-left */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-[0_8px_24px_rgba(16,25,40,0.12)] p-4 w-[210px]">
              <p className="text-[0.6875rem] font-medium text-gray/60">
                Parent Satisfaction
              </p>
              <p className="mt-1 text-[1.125rem] font-bold text-gray">97 %</p>
              <div className="mt-2 h-1.5 rounded-full bg-primaryBlue/10 overflow-hidden">
                <div className="h-full w-[97%] rounded-full bg-primaryBlue" />
              </div>
            </div>
          </div>

          {/* Right — checklist */}
          <ul className="flex flex-col gap-7 mt-8 md:mt-0">
            {benefits.map(({ title, description }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-primaryGold shrink-0" />
                <div>
                  <h3 className="text-[1.0625rem] font-bold text-gray">
                    {title}
                  </h3>
                  <p className="mt-1 text-[0.9375rem] text-gray/60 leading-relaxed">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}