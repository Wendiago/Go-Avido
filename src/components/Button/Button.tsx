import React from "react";
import "./Button.scss";

type ButtonProps = {
  color?: "black" | "orange" | "cyan" | "cyan-filled" | "teal-filled" | "teal";
  size?: "small" | "medium" | "large";
  borderRadius?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  className?: string;
};

export const Button = ({
  color = "black",
  size = "medium",
  borderRadius = "4px",
  disabled = false,
  onClick,
  children,
  className = "",
}: ButtonProps) => {
  const buttonClasses = [
    className,
    "btn",
    `btn--${color}`,
    `btn--${size}`,
    disabled ? "btn--disabled" : "",
  ].join(" ");

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      style={{ borderRadius }}
    >
      {children}
    </button>
  );
};
