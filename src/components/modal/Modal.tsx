"use client";

import { ReactNode } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export function Modal({ open, onClose, children, className }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className={styles.modal}
      onClick={onClose}
    >
      <div
        className={clsx(styles.modalContent, className)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
