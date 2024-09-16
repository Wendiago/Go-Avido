import React from "react";
export const ClockIcon = ({
  height = "16px",
  width = "16px",
  color = "var(--md-sys-color-on-surface-variant)",
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 4.25C8.61522 4.25 4.25 8.61522 4.25 14C4.25 19.3848 8.61522 23.75 14 23.75C19.3848 23.75 23.75 19.3848 23.75 14C23.75 8.61522 19.3848 4.25 14 4.25ZM2.75 14C2.75 7.7868 7.7868 2.75 14 2.75C20.2132 2.75 25.25 7.7868 25.25 14C25.25 20.2132 20.2132 25.25 14 25.25C7.7868 25.25 2.75 20.2132 2.75 14ZM14.75 13.25V8.16667C14.75 7.75245 14.4142 7.41667 14 7.41667C13.5858 7.41667 13.25 7.75245 13.25 8.16667V14C13.25 14.4142 13.5858 14.75 14 14.75H18.0833C18.4975 14.75 18.8333 14.4142 18.8333 14C18.8333 13.5858 18.4975 13.25 18.0833 13.25H14.75Z"
      fill={color}
    />
  </svg>
);
