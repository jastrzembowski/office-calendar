import { VisitType } from "@/models/user";

import styles from "./styles.module.scss";

interface SelectProps {
  name: string;
  id: string;
  options: { value: string; label: string }[];
  value: VisitType | null | undefined;    
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error: string;
  showErrors: boolean;
}

export const Select = ({ name, id, options, value, onChange, error, showErrors }: SelectProps) => {
  return (
    <div className={styles.selectContainer}>
      <select name={name} id={id} className={styles.select} value={value || undefined} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value} className={styles.option}>
            {option.label}
          </option>
        ))}
      </select>
      {showErrors && error ? <p className={styles.error}>{error}</p> : <span className={styles.placeholder}></span>}
    </div>

  );
};
