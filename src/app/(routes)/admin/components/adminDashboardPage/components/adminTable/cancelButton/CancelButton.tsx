"use client";

import { Button, Input, Modal } from "@/components";
import { useState } from "react";
import { cancelVisit } from "../../adminDashboard/utils";
import styles from "./styles.module.scss";
import { showToast } from "@/utils/showToast";

interface CancelButtonProps {
  visitId: string;
  selectedDate: Date | undefined;
  getVisits: (date: Date) => void;
}

export const CancelButton = ({
  visitId,
  selectedDate,
  getVisits,
}: CancelButtonProps) => {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCancelVisit = async (visitId: string, reason: string) => {
    setLoading(true);
    const response = await cancelVisit(visitId, reason);

    if (response.ok) {
      if (selectedDate) {
        getVisits(selectedDate);
      }
      handleCloseModal();
      setLoading(false);
    }
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpenModal} className={styles.cancelButton}>Anuluj</Button>
      <Modal open={open} onClose={handleCloseModal} className={styles.modal}>
          <h3 className={styles.modalTitle}>Uwaga!</h3>
          <p className={styles.modalText}>Dlaczego chcesz anulować tę rezerwację?</p>
          <Input type="text" placeholder="Powód anulowania wizyty" value={reason} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReason(e.target.value)} />
          <div className={styles.modalButtons}>
            <Button onClick={() => handleCancelVisit(visitId, reason)} disabled={loading}>Anuluj rezerwację</Button>
            <Button variant="secondary" onClick={handleCloseModal} disabled={loading}>Powrót</Button>
          </div>
      </Modal>
    </>
  );
};
