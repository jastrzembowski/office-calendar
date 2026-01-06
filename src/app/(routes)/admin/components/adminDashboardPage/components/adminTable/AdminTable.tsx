import { Visit } from "@/models/visit";
import styles from "./styles.module.scss";
import { CancelButton } from "./cancelButton/CancelButton";

interface AdminTableProps {
  visits: Visit[];
  getVisits: (date: Date) => void;
  selectedDate: Date | undefined;
}

export const AdminTable = ({
  visits,
  getVisits,
  selectedDate,
}: AdminTableProps) => {


  if (!visits || visits.length === 0) {
    return (
      <div className={styles.noVisits}>Brak rezerwacji w wybranym dniu</div>
    );
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Godzina</th>
          <th>Imię i nazwisko</th>
          <th>Email</th>
          <th>Telefon</th>
          <th>Typ wizyty</th>
          <th>Status</th>
          <th>Akcje</th>
        </tr>
      </thead>
      <tbody>
        {visits.map((visit) => (
          <tr key={visit.slotId}>
            <td>{visit.startTime}</td>
            <td>
              {visit.firstName} {visit.lastName}
            </td>
            <td>{visit.email}</td>
            <td>{visit.phoneNumber}</td>
            <td>{visit.visitType}</td>
            <td>
              {visit.slotStatus === "BLOCKED"
                ? "Zablokowane"
                : visit.slotStatus === "AVAILABLE"
                ? "Dostępne"
                : "Zarezerwowane"}
            </td>
            <td>
              {visit.visitId && (
                <CancelButton
                  visitId={visit.visitId}
                  selectedDate={selectedDate}
                  getVisits={getVisits}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
