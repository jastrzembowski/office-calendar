import { showToast } from "@/utils/showToast";
import dayjs from "dayjs";

export const handleCloseDay = async (selectedDate: Date) => {
  if (selectedDate) {
    const response = await fetch("/api/admin/closeDay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: dayjs(selectedDate).format("YYYY-MM-DD"),
      }),
    });

    if (response.ok) {
      showToast("success", "Dzień został zamknięty pomyślnie");
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await response.json();
      }
      return { success: true };
    } else {
      showToast("error", "Wystąpił błąd podczas zamykania dnia");
      return null;
    }
  }
};

export const handleOpenDay = async (selectedDate: Date) => {
  if (selectedDate) {
    const response = await fetch("/api/admin/openDay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: dayjs(selectedDate).format("YYYY-MM-DD"),
      }),
    });
    if (response.ok) {
      showToast("success", "Dzień został otwarty pomyślnie");
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await response.json();
      }
      return { success: true };
    } else {
      showToast("error", "Wystąpił błąd podczas otwierania dnia");
      return null;
    }
  }
};

export const handleBlockSlots = async (
  selectedDate: Date,
  slots: { from: string; to: string }
) => {
  if (selectedDate) {
    const response = await fetch("/api/admin/blockSlots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: dayjs(selectedDate).format("YYYY-MM-DD"),
        slots,
      }),
    });
    if (response.ok) {
      showToast("success", "Godziny zostały zablokowane pomyślnie");
      return await response.json();
    } else {
      showToast("error", "Wystąpił błąd podczas blokowania godzin");
      return null;
    }
  }
};

export const handleUnblockSlots = async (
  selectedDate: Date,
  slots: { from: string; to: string }
) => {
  if (selectedDate) {
    const response = await fetch("/api/admin/unblockSlots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: dayjs(selectedDate).format("YYYY-MM-DD"),
        slots,
      }),
    });
    if (response.ok) {
      showToast("success", "Godziny zostały odblokowane pomyślnie");
      return await response.json();
    } else {
      showToast("error", "Wystąpił błąd podczas odblokowania godzin");
      return null;
    }
  }
};

export const getReservedVisits = async (date: Date) => {
  const response = await fetch(
    `/api/admin/getReservedVisits?day=${dayjs(date).format("YYYY-MM-DD")}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    return await response.json();
  } else {
    showToast("error", "Wystąpił błąd podczas pobierania rezerwacji");
    return null;
  }
};

export const cancelVisit = async (visitId: string, reason: string) => {
  const response = await fetch("/api/admin/cancelVisit", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ visitId, reason }),
  });
  if (response.ok) {
    showToast("success", "Rezerwacja została anulowana pomyślnie");
    return await response.json();
  } else {
    showToast("error", "Wystąpił błąd podczas anulowania rezerwacji");
    return null;
  }
};