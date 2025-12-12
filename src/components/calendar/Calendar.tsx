'use client';

import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import styles from "./styles.module.scss";

export const Calendar = () => {
  const [selected, setSelected] = useState<Date>();

  return (
    <div className={styles.calendar}>
    <DayPicker
      animate
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
    </div>
  );
}