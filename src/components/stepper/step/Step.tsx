import clsx from "clsx";

import LoadingIcon from "@/assets/loading.svg";
import LockIcon from "@/assets/lock.svg";
import TickIcon from "@/assets/tick.svg";

import styles from "./styles.module.scss";

export const Step = ({
  step,
  status,
}: {
  step: string;
  status: "current" | "completed" | "locked";
}) => {
  return (
    <div className={styles.step}>
      <div className={clsx(styles.circle, styles[status])}>
        {status === "current" && (
          <div className={styles.stepIcon}>
            <LoadingIcon />
          </div>
        )}
        {status === "completed" && (
          <div className={styles.stepIcon}>
            <TickIcon />
          </div>
        )}
        {status === "locked" && (
          <div className={styles.stepIcon}>
            <LockIcon />
          </div>
        )}
      </div>

      <div className={styles.stepText}>{step}</div>
    </div>
  );
};
