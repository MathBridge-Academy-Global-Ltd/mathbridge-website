import type React from "react";

export interface NetBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "light" for navy grid lines on light bg, "dark" for white grid lines on dark bg */
  variant?: "light" | "dark";
  color?: string;
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export default function NetBackground({
  variant = "light",
  color,
  size = 32,
  className = "",
  style,
  ...props
}: NetBackgroundProps) {
  const isDark = variant === "dark";
  const lineColor = color || (isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(0, 9, 175, 0.07)");
  const defaultOpacityClass = isDark ? "opacity-20" : "opacity-45";
  const sizeValue = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${defaultOpacityClass} ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, ${lineColor} 1px, transparent 1px),
          linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
        `,
        backgroundSize: `${sizeValue} ${sizeValue}`,
        ...style,
      }}
      {...props}
    />
  );
}
