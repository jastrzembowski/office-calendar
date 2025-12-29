import { DatesContent, ServiceSelector } from "@/components";
import { Day, Slot } from "@/models";

import styles from "./styles.module.scss";

interface BookingInfoPageProps {
  days: Day[];
  selectedDate: Date | undefined;
  selectedSlot: Slot | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  setSelectedSlot: (slot: Slot | undefined) => void;
  handleNextStep: () => void;
}

export const BookingInfoPage = ({
  days,
  selectedDate,
  selectedSlot,
  setSelectedDate,
  setSelectedSlot,
  handleNextStep,
}: BookingInfoPageProps) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Informacje o rezerwacji</h2>
      <ServiceSelector />
      <DatesContent
        days={days}
        selectedDate={selectedDate}
        selectedSlot={selectedSlot}
        setSelectedDate={setSelectedDate}
        setSelectedSlot={setSelectedSlot}
        handleNextStep={handleNextStep}
      />
    </div>
  );
};
