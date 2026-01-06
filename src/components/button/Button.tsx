"use client";

import clsx from "clsx";
import styles from "./styles.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;   
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary"
}

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  type = "button",
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
