"use client";

import { Button, SectionWrapper } from "@/components";
import { Slot, User } from "@/models";
import dayjs from "dayjs";

import styles from "./styles.module.scss";

interface SuccessPageProps {
  data: User;
  slot?: Slot;
  date?: Date;
  handleReset: () => void;
}

export const SuccessPage = ({ data, slot, date, handleReset }: SuccessPageProps) => {
  return (
    <SectionWrapper
      title="Rezerwacja zakończona"
      isStrong
      className={styles.successPage}
    >
      <h3 className={styles.successTitle}>
        Dziękujemy za rezerwację. Twoja rezerwacja została zarejestrowana.
      </h3>
      <h4 className={styles.successSubtitle}>Dane rezerwacji:</h4>
      <table>
        <tbody className={styles.successTable}>
          <tr>
            <td>
              <strong>Imię:</strong>
            </td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>
              <strong>Nazwisko:</strong>
            </td>
            <td>{data.surname}</td>
          </tr>
          <tr>
            <td>
              <strong>Email:</strong>
            </td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td>
              <strong>Telefon:</strong>
            </td>
            <td>{data.phone}</td>
          </tr>
          <tr>
            <td>
              <strong>Typ rezerwacji:</strong>
            </td>
            <td>{data.type}</td>
          </tr>
          <tr>
            <td>
              <strong>Data:</strong>
            </td>
            <td>{dayjs(date).format("DD.MM.YYYY")}</td>
          </tr>
          <tr>
            <td>
              <strong>Godzina:</strong>
            </td>
            <td>{slot?.startTime}</td>
          </tr>
        </tbody>
      </table>

      <Button onClick={handleReset}>Powrót do strony głównej</Button>
    </SectionWrapper>
  );
};
