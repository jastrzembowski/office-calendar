import styles from "./styles.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string; 
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
