"use client";

import { DayPicker } from "react-day-picker";
import { pl } from "react-day-picker/locale";
import "react-day-picker/style.css";
import styles from "./styles.module.scss";
import { Day } from "@/models";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/pl";
import { SectionWrapper } from "../sectionWrapper";
dayjs.extend(utc);
dayjs.locale("pl");
interface CalendarProps {
  days: Day[];
  selectedDate?: Date;
  onSelectDate: (date: Date | undefined) => void;
}

export const Calendar = ({ days, selectedDate, onSelectDate }: CalendarProps) => {

  const availableDates = days.map((day) => dayjs.utc(day.date).toDate());

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
