import type React from "react";
import type { IconProps } from "./types";

export default function FlaskIcon({
  size,
  className = "",
  style,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      style={style}
      {...props}
    >
      <path d="M9 3h6M9 3v8l-4 9h14l-4-9V3" />
    </svg>
  );
}
