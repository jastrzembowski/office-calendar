"use client";

import dayjs from "dayjs";
import "dayjs/locale/pl";
import { DayPicker } from "react-day-picker";
import { pl } from "react-day-picker/locale";
import "react-day-picker/style.css";

import { SectionWrapper } from "@/components";
import { Day } from "@/models";

import styles from "./styles.module.scss";

dayjs.locale("pl");
interface CalendarProps {
  days: Day[];
  selectedDate?: Date;
  onSelectDate: (date: Date | undefined) => void;
}

export const Calendar = ({
  days,
  selectedDate,
  onSelectDate,
}: CalendarProps) => {

  const availableDates = days
    .filter((day) => day.full === false)
    .map((day) => dayjs(day.date).toDate());

  return (
    <SectionWrapper title="Wybierz datę">
      <DayPicker
        className={styles.calendarPicker}
        animate
        mode="single"
        required
        selected={selectedDate}
        onSelect={onSelectDate}
        locale={pl}
        modifiers={{
          available: availableDates,
        }}
        modifiersClassNames={{
          available: "available-day",
        }}
        disabled={[
          (date: Date) =>
            !availableDates.some((d) =>
              dayjs.utc(d).isSame(dayjs.utc(date), "day")
            ),
        ]}
      />
    </SectionWrapper>
  );
};
