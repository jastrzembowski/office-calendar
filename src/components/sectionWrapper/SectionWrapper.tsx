import clsx from "clsx";
import styles from "./styles.module.scss";

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
}

export const SectionWrapper = ({ children, title}: SectionWrapperProps) => {
  return (
    <div className={clsx(styles.wrapper)}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};