import clsx from "clsx";

import styles from "./styles.module.scss";

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
  isStrong?: boolean;
}

export const SectionWrapper = ({ children, title, isStrong = false }: SectionWrapperProps) => {
  return (
    <div className={clsx(styles.wrapper, isStrong && styles.strong)}>
      <h2 className={clsx(styles.title, isStrong && styles.titleStrong)}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};