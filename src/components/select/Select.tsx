import clsx from "clsx";
import styles from "./styles.module.scss";

interface SelectProps {
  name: string;
  id: string;
  options: { value: string; label: string }[];
  value: string | null | undefined;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  showErrors?: boolean;
  className?: string;
  disabled?: boolean;
}

export const Select = ({
  name,
  id,
  options,
  value,
  onChange,
  error,
  showErrors,
  className,
  disabled,
}: SelectProps) => {
  return (
    <div className={clsx(styles.selectContainer, className)}>
      <select
        name={name}
        id={id}
        className={styles.select}
        value={value || undefined}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={styles.option}
          >
            {option.label}
          </option>
        ))}
      </select>
      {showErrors && error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <span className={styles.placeholder}></span>
      )}
    </div>
  );
};
