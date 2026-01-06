"use client";

import { Button } from "@/components";
import { showToast } from "@/utils/showToast";
import { useRouter } from "next/navigation";
export const AdminLogout = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const response = await fetch("/api/auth/adminLogout", {
      method: "POST",
    });
    if (response.ok) {
      router.replace("/");
      router.refresh();
      showToast("success", "Wylogowano pomyślnie");
    }
  };
  return <Button onClick={handleLogout}>Wyloguj</Button>;
};
