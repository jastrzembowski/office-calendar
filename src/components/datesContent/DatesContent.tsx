"use client";

import { useState } from "react";
import { Day, Slot } from "@/models";
import { Calendar, SectionWrapper, Button, SlotSelector } from "@/components";
import styles from "./styles.module.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/pl";
dayjs.extend(utc);
dayjs.locale("pl");

export const DatesContent = ({ days }: { days: Day[] }) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState<Slot>();
  const handleSelectDate = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedSlot(undefined);
  };

  const handleSelectSlot = (slot: Slot) => {
    setSelectedSlot(slot);
  };

  const availableSlots = selectedDate
    ? days.find((day) =>
        dayjs.utc(day.date).isSame(dayjs(selectedDate).utc(), "day")
      )?.slots
    : [];

  const handleNext = () => {
    console.log("Rezerwuj");
  };
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

      <Button onClick={handleNext} disabled={!selectedSlot}>
        Kolejny krok
      </Button>
    </>
  );
};
