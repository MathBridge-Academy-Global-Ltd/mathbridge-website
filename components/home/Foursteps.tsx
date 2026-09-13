const steps = [
  {
    number: 1,
    color: "#0009af",
    title: "Book a Free Trial",
    description:
      "Reach out and schedule a no-obligation introductory session so we can understand your child's needs.",
  },
  {
    number: 2,
    color: "#f1aa00",
    title: "Choose your Plan",
    description:
      "Pick a subscription that fits your goals, schedule, and budget — flexible enough to adjust anytime.",
  },
  {
    number: 3,
    color: "#0009af",
    title: "Get Matched",
    description:
      "We pair your child with a qualified tutor whose teaching style suits how they learn best.",
  },
  {
    number: 4,
    color: "#f1aa00",
    title: "Track Progress",
    description:
      "Follow real improvement through regular assessments and structured progress reports.",
  },
];

export default function FourSteps() {
  return (
    <section className="bg-[#F5F7FE] py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-lg mx-auto mb-16">
          <h2 className="text-[2rem] md:text-[2.25rem] font-extrabold tracking-tight text-gray">
            <span
              style={{
                fontFamily: "var(--font-kavoon)",
                color: "#f1aa00",
                position: "relative",
                display: "inline-block",
              }}
            >
              Four Steps
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
            </span>{" "}
            <span style={{ color: "#101928" }}>to Success</span>
          </h2>
          <p className="mt-3 text-[0.9375rem] text-gray/60 leading-relaxed">
            Every student&apos;s journey with MathBridge follows a clear,
            proven pathway designed for maximum results.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row gap-10 md:gap-0">
          {/* Connector line — desktop only, sits behind circles */}
          <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gray/15 z-0" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex md:flex-1 md:flex-col items-start md:items-center gap-4 md:gap-0"
            >
              <div
                className="w-14 h-14 flex items-center justify-center text-white text-xl font-extrabold rounded-full shrink-0"
                style={{ backgroundColor: step.color }}
              >
                {step.number}
              </div>

              <div className="md:text-center md:mt-5 md:px-4">
                <h3 className="text-[1.0625rem] font-bold text-gray">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[0.875rem] leading-relaxed text-gray/60">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}