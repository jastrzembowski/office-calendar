"use client";

import dayjs from "dayjs";

import { bookVisit } from "@/api";
import { Button, SectionWrapper } from "@/components";
import { Slot, User } from "@/models";

import styles from "./styles.module.scss";
import { showToast } from "@/utils/showToast";

interface ConfirmationPageProps {
  data: User;
  slot: Slot;
  date: Date;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
}

export const ConfirmationPage = ({
  data,
  slot,
  date,
  handlePreviousStep,
  handleNextStep,
}: ConfirmationPageProps) => {
  const handleConfirm = async () => {
    try {
      const response = await bookVisit({
        date: dayjs(date).format("YYYY-MM-DD"),
        time: slot.startTime,
        firstName: data.name,
        lastName: data.surname,
        email: data.email,
        phoneNumber: data.phone,
        visitType: data.type,
      });
      if (response.id) {
        handleNextStep();
        showToast("success", "Rezerwacja została zarejestrowana pomyślnie");
      }
    } catch (error) {
      showToast("error", "Wystąpił błąd podczas rezerwacji");
    }
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
