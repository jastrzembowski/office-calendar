"use client";

import {useRouter, useSearchParams } from "next/navigation";
import styles from "./styles.module.scss";
import { Button } from "@/components";

const FILTERS = [
  { label: "Wszystkie", value: "ALL" },
  { label: "Zablokowane", value: "BLOCKED" },
  { label: "Dostępne", value: "AVAILABLE" },
  { label: "Zarezerwowane", value: "BOOKED" }
];

export const AdminFilters = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const handleChangeFilter = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("filter", value);
        router.push(`?${params.toString()}`);
    };


  return (
    <div className={styles.container}>
      {FILTERS.map((filter) => (
        <div key={filter.value}>
          <Button
           variant="tertiary"
           onClick={() => handleChangeFilter(filter.value)}
           >{filter.label}</Button>
        </div>
      ))}
    </div>
  );
};