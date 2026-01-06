"use client";

import { useParams, useSearchParams } from "next/navigation";
import { cancelVisit, getVisitInfo } from "./utils";
import { useEffect, useState } from "react";
import { UserVisit } from "@/models/visit";
import { Button, SectionWrapper } from "@/components";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import { showToast } from "@/utils/showToast";

export const CancelPage = () => {
  const { id } = useParams<{ id: string }>();
  const [visitInfo, setVisitInfo] = useState<UserVisit | null>(null);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
const router = useRouter();
  useEffect(() => {
    if (id && token) {
      try {
        const fetchVisitInfo = async () => {
          const data = await getVisitInfo(id, String(token));
          setVisitInfo(data);
        };
        fetchVisitInfo();
      } catch (error) {
        console.error(error);
        setVisitInfo(null);
      }
    }
  }, [id, token]);

  const handleCancelVisit = async () => {
    try {
      const response = await cancelVisit(id, String(token));
      if (response.ok) {
        showToast("success", "Rezerwacja została anulowana pomyślnie");
        router.push("/");
      } else {
        showToast("error", "Wystąpił błąd podczas anulowania rezerwacji");
      }
    } catch (error) {
      showToast("error", "Wystąpił błąd podczas anulowania rezerwacji");
    }
  };

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <SectionWrapper title="Anuluj rezerwację">
     <h2 className={styles.title}>Czy na pewno chcesz anulować rezerwację?</h2>
      {visitInfo && (
        <div className={styles.visitInfo}>
          <p>Typ wizyty: {visitInfo.visitType}</p>
          <p>Data: {visitInfo.date}</p>
          <p>Godzina: {visitInfo.time}</p>
        </div>
      )}
      <Button onClick={handleCancelVisit}>Anuluj rezerwację</Button>
      <Button onClick={handleGoBack}>Powrót</Button>
    </SectionWrapper>
  );
};
