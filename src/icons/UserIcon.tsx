import { SVGProps } from "react";

export const UserIcon = ({
  height = "16px",
  width = "16px",
  color = "var(--md-sys-color-on-surface-variant)",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.80616 5.33366C5.80616 4.27511 6.66428 3.41699 7.72282 3.41699C8.78137 3.41699 9.63949 4.27511 9.63949 5.33366C9.63949 6.3922 8.78137 7.25033 7.72282 7.25033C6.66428 7.25033 5.80616 6.3922 5.80616 5.33366ZM7.72282 1.91699C5.83585 1.91699 4.30616 3.44669 4.30616 5.33366C4.30616 7.22063 5.83585 8.75033 7.72282 8.75033C9.6098 8.75033 11.1395 7.22063 11.1395 5.33366C11.1395 3.44669 9.6098 1.91699 7.72282 1.91699ZM5.0342 11.2424C5.39365 10.883 5.88116 10.681 6.38949 10.681H9.05616C9.56449 10.681 10.052 10.883 10.4114 11.2424C10.7709 11.6019 10.9728 12.0894 10.9728 12.5977V13.931C10.9728 14.3452 11.3086 14.681 11.7228 14.681C12.137 14.681 12.4728 14.3452 12.4728 13.931V12.5977C12.4728 11.6915 12.1129 10.8225 11.4721 10.1817C10.8314 9.541 9.96231 9.18103 9.05616 9.18103H6.38949C5.48333 9.18103 4.61429 9.541 3.97354 10.1817C3.33279 10.8225 2.97282 11.6915 2.97282 12.5977V13.931C2.97282 14.3452 3.30861 14.681 3.72282 14.681C4.13704 14.681 4.47282 14.3452 4.47282 13.931V12.5977C4.47282 12.0894 4.67476 11.6019 5.0342 11.2424Z"
      fill={color}
    />
  </svg>
);
