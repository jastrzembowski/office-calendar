import styles from "./styles.module.scss";

interface InputProps {
  type: string;
  placeholder: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  showErrors: boolean;
  maxLength?: number;
}

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  error,
  showErrors,
  maxLength,
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        value={value || ""}
        onChange={onChange}
        maxLength={maxLength}
      />
      {showErrors && error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <span className={styles.placeholder}></span>
      )}
    </div>
  );
};
