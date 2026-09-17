import React from "react";

export interface WavyTextProps {
  /** The text content to display */
  text?: React.ReactNode;
  /** Children can also be used instead of text */
  children?: React.ReactNode;
  /** Text color: e.g. "text-primaryGold", "text-primaryBlue", "primaryGold", "primaryBlue", or any hex code */
  fontColor?: string;
  /** Underline stroke color: e.g. "text-primaryGold", "text-primaryBlue", "primaryGold", "primaryBlue", or any hex code */
  lineColor?: string;
  /** Additional CSS class names */
  className?: string;
}

function resolveFontClassAndStyle(color?: string) {
  if (!color || color === "primaryGold" || color === "text-primaryGold") {
    return { fontClass: "text-primaryGold", fontStyle: undefined };
  }
  if (color === "primaryBlue" || color === "text-primaryBlue") {
    return { fontClass: "text-primaryBlue", fontStyle: undefined };
  }
  if (color.startsWith("text-")) {
    return { fontClass: color, fontStyle: undefined };
  }
  return { fontClass: "", fontStyle: { color } };
}

function resolveStrokeColor(lineColor?: string, fontColor?: string): string {
  const color = lineColor || fontColor || "primaryGold";
  if (color === "primaryGold" || color === "text-primaryGold" || color === "stroke-primaryGold") {
    return "#f1aa00";
  }
  if (color === "primaryBlue" || color === "text-primaryBlue" || color === "stroke-primaryBlue") {
    return "#0009af";
  }
  return color;
}

export default function WavyText({
  text,
  children,
  fontColor = "text-primaryGold",
  lineColor,
  className = "",
}: WavyTextProps) {
  const content = text ?? children;
  const { fontClass, fontStyle } = resolveFontClassAndStyle(fontColor);
  const strokeColor = resolveStrokeColor(lineColor, fontColor);

  return (
    <span
      className={`font-kavoon relative inline-block ${fontClass} ${className}`.trim()}
      style={{
        fontFamily: "var(--font-kavoon)",
        ...fontStyle,
      }}
    >
      {content}
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
          stroke={strokeColor}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
