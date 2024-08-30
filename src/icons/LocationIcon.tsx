import React from "react";

export const LocationIcon = ({
  height = "16px",
  width = "16px",
  color = "var(--text-medium)",
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 9.33301C9.10457 9.33301 10 8.43758 10 7.33301C10 6.22844 9.10457 5.33301 8 5.33301C6.89543 5.33301 6 6.22844 6 7.33301C6 8.43758 6.89543 9.33301 8 9.33301Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.7713 11.1045L8.94267 13.9331C8.69266 14.1829 8.35373 14.3232 8.00034 14.3232C7.64695 14.3232 7.30802 14.1829 7.05801 13.9331L4.22867 11.1045C3.48282 10.3586 2.9749 9.40827 2.76913 8.37371C2.56337 7.33916 2.669 6.26681 3.07268 5.29229C3.47635 4.31777 4.15994 3.48483 5.037 2.89881C5.91405 2.31279 6.94519 2 8.00001 2C9.05483 2 10.086 2.31279 10.963 2.89881C11.8401 3.48483 12.5237 4.31777 12.9273 5.29229C13.331 6.26681 13.4366 7.33916 13.2309 8.37371C13.0251 9.40827 12.5172 10.3586 11.7713 11.1045Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
