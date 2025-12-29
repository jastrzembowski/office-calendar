"use client";

import dayjs from "dayjs";
import "dayjs/locale/pl";
import utc from "dayjs/plugin/utc";

import { Button, Calendar, SectionWrapper, SlotSelector } from "@/components";
import { Day, Slot } from "@/models";

import styles from "./styles.module.scss";

dayjs.extend(utc);
dayjs.locale("pl");

interface DatesContentProps {
  days: Day[];
  selectedDate: Date | undefined;
  selectedSlot: Slot | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  setSelectedSlot: (slot: Slot | undefined) => void;
  handleNextStep: () => void;
}

export const DatesContent = ({
  days,
  selectedDate,
  selectedSlot,
  setSelectedDate,
  setSelectedSlot,
  handleNextStep,
}: DatesContentProps) => {
  const handleSelectDate = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedSlot(undefined);
  };

  const handleSelectSlot = (slot: Slot) => {
    setSelectedSlot(slot);
  };

  const availableSlots = selectedDate
    ? days.find((day) => dayjs(day.date).isSame(dayjs(selectedDate), "day"))
        ?.slots
    : [];

  return (
    <>
      <Calendar
        days={days}
        selectedDate={selectedDate}
        onSelectDate={handleSelectDate}
      />
      <SectionWrapper title="Wybrana data">
        <p className={styles.selectedDate}>
          {selectedDate
            ? dayjs(selectedDate).utc().format("dddd, DD MMMM YYYY")
            : "Brak wybranej daty"}
        </p>
      </SectionWrapper>
      <SlotSelector
        slots={availableSlots}
        selectedSlot={selectedSlot}
        onSelectSlot={handleSelectSlot}
      />
      <SectionWrapper title="Wybrana godzina">
        <p className={styles.selectedDate}>
          {selectedSlot ? selectedSlot.startTime : "Brak wybranej godziny"}
        </p>
      </SectionWrapper>

      <Button onClick={handleNextStep} disabled={!selectedSlot}>
        Kolejny krok
      </Button>
    </>
  );
};
