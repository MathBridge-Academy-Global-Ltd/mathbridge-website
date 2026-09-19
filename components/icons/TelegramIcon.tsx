import type React from "react";
import type { IconProps } from "./types";

export default function TelegramIcon({
  size = 18,
  className = "",
  style,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-1.97 9.28c-.15.67-.54.83-1.1.52l-3.02-2.22-1.46 1.41c-.16.16-.3.3-.61.3l.21-3.04 5.55-5.02c.24-.22-.05-.34-.37-.13l-6.86 4.31-2.95-.92c-.64-.2-.65-.64.13-.95l11.53-4.44c.53-.2 1 .13.82.88z" />
    </svg>
  );
}
