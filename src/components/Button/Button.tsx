import React from "react";
import "./Button.scss";

type ButtonProps = {
  color?: "black" | "orange" | "cyan" | "cyan-filled";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  className?: string;
};

export const Button = ({
  color = "black",
  size = "medium",
  disabled = false,
  onClick,
  children,
  className = "",
}: ButtonProps) => {
  const buttonClasses = [
    "btn",
    `btn--${color}`,
    `btn--${size}`,
    disabled ? "btn--disabled" : "",
    className,
  ].join(" ");

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
