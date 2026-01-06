"use client";

import { Button, Select } from "@/components";
import { generateSlots } from "@/utils/generateSlots";
import { useState } from "react";
import styles from "./styles.module.scss";

interface RangePickerProps {
  date: Date;
  onSave: (slots: { from: string, to: string }) => void;
  title: string;
  buttonText: string;
  disabled?: boolean;
}

export const RangePicker = ({ date, onSave, title, buttonText, disabled }: RangePickerProps) => {
  const slots = generateSlots(date);
  const [startSlot, setStartSlot] = useState<string | undefined>(
    slots[0].startTime
  );
  const [endSlot, setEndSlot] = useState<string | undefined>(
    slots[slots.length - 1].startTime
  );

  const options = slots.map((slot) => ({
    value: slot.startTime,
    label: slot.startTime,
  }));

  const handleStartSlotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartSlot(e.target.value);
  };

  const handleEndSlotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEndSlot(e.target.value);
  };

  const handleSave = () => {
    if (startSlot && endSlot) {
      onSave({ from: startSlot, to: endSlot });
    }
  };

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.selectContainer}>
        <Select
          name="startDate"
          id="startDate"
          options={options}
          value={startSlot}
          onChange={handleStartSlotChange}
          className={styles.select}
          disabled={disabled}
        />
        <Select
          name="endDate"
          id="endDate"
          options={options}
          value={endSlot}
          onChange={handleEndSlotChange}
          className={styles.select}
          disabled={disabled}
        />
      </div>
      <Button onClick={handleSave} disabled={disabled}>{buttonText}</Button>
    </div>
  );
};
