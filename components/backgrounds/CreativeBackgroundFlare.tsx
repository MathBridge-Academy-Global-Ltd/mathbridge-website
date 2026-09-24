import type React from "react";

export interface CreativeBackgroundFlareProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function CreativeBackgroundFlare({
  className = "",
  ...props
}: CreativeBackgroundFlareProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Layer 1: Geometric Math Grid / Dot Matrix */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(#0009af 0.9px, transparent 0.9px), radial-gradient(#f1aa00 0.6px, transparent 0.6px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "0 0, 14px 14px",
        }}
      />

      {/* Layer 2: Warm ambient amber/gold glow (top-left) */}
      <div
        className="absolute -top-24 -left-20 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(241,170,0,0.10) 0%, transparent 68%)",
          filter: "blur(70px)",
        }}
      />

      {/* Layer 3: Deep royal blue atmospheric glow (bottom-right) */}
      <div
        className="absolute -bottom-28 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,9,175,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Layer 4: Subtle floating chalk doodles in the background */}
      <div className="absolute top-12 left-[8%] text-[#0009af]/[0.06] text-6xl font-serif select-none pointer-events-none -rotate-12 hidden md:block">
        ∫
      </div>
      <div className="absolute bottom-16 left-[6%] text-[#f1aa00]/[0.08] text-5xl font-mono select-none pointer-events-none rotate-6 hidden md:block">
        ∑
      </div>
      <div className="absolute top-20 right-[7%] text-[#0009af]/[0.06] text-5xl font-mono select-none pointer-events-none -rotate-12 hidden md:block">
        f(x)
      </div>
      <div className="absolute bottom-12 right-[9%] text-[#f1aa00]/[0.10] text-6xl select-none pointer-events-none -rotate-6 hidden md:block">
        √π
      </div>
    </div>
  );
}
