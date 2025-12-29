import dayjs from "dayjs";

import { bookVisit } from "@/api";
import { Button, SectionWrapper } from "@/components";
import { Slot, User } from "@/models";

import styles from "./styles.module.scss";

interface ConfirmationPageProps {
  data: User;
  slot: Slot;
  date: Date;
  handlePreviousStep: () => void;
}

export const ConfirmationPage = ({
  data,
  slot,
  date,
  handlePreviousStep,
}: ConfirmationPageProps) => {
  const handleConfirm = async () => {
    const response = await bookVisit({
      time: slot.startTime,
      date: date.toISOString(),
      firstName: data.name,
      lastName: data.surname,
      phoneNumber: data.phone,
      email: data.email,
      visitType: data.type,
    });
    console.log(response);
  };
  return (
    <SectionWrapper title="Potwierdzenie rezerwacji" isStrong>
      <div className={styles.dataContainer}>
        <h3 className={styles.title}>Twoje dane rezerwacji</h3>
        <p className={styles.data}>
          {data.name} {data.surname}
        </p>
        <p className={styles.data}>{data.email}</p>
        <p className={styles.data}>{data.phone}</p>
        <p className={styles.data}>{data.type}</p>
        <p className={styles.data}>{slot.startTime}</p>
        <p className={styles.data}>
          {dayjs(date).format("dddd, DD MMMM YYYY")}
        </p>
      </div>
      <Button onClick={handleConfirm}>Potwierdź rezerwację</Button>
      <Button onClick={handlePreviousStep}>Poprzedni krok</Button>
    </SectionWrapper>
  );
};
