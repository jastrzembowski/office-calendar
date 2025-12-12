import styles from "./styles.module.scss";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
};