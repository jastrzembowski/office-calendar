"use client";

import { Button, Calendar, SectionWrapper } from "@/components";
import styles from "./styles.module.scss";
import { Day, Visit } from "@/models";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { AdminTable, RangePicker } from "../";
import {
  handleCloseDay,
  handleOpenDay,
  handleBlockSlots,
  handleUnblockSlots,
  getReservedVisits,
} from "./utils";
import { AdminFilters } from "../adminFilters";
import { useSearchParams } from "next/navigation";

export const AdminDashboard = ({ days }: { days: Day[] }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedDay, setSelectedDay] = useState<Day | undefined>(undefined);
  const [visits, setVisits] = useState<Visit[]>([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") || "ALL";

  const filteredVisits =
    filter === "ALL"
      ? visits
      : visits.filter((visit) => visit.slotStatus === filter);

  const handleSelectDate = async (date: Date | undefined) => {
    setSelectedDate(date);
    const day = days.find((day) => dayjs(day.date).isSame(dayjs(date), "day"));
    if (day) {
      setSelectedDay(day);
    }
  };

  const getVisits = async (date: Date) => {
    const res = await getReservedVisits(date);
    if (res) {
      setVisits(res);
    }
  };

  useEffect(() => {
    const fetchVisits = async () => {
      if (selectedDate) {
        getVisits(selectedDate);
      }
    };
    fetchVisits();
  }, [selectedDate]);

  const handleCloseClick = async (date: Date) => {
    setLoading(true);
    try {
      await handleCloseDay(date);
      if (selectedDay) {
        setSelectedDay({ ...selectedDay, blocked: true });
      }
      if (selectedDate) {
        getVisits(selectedDate);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenClick = async (date: Date) => {
    setLoading(true);
    try {
      await handleOpenDay(date);
      if (selectedDay) {
        setSelectedDay({ ...selectedDay, blocked: false });
      }
      if (selectedDate) {
        getVisits(selectedDate);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleBlockClick = async (
    date: Date,
    slots: { from: string; to: string }
  ) => {
    setLoading(true);
    await handleBlockSlots(date, slots);
    if (selectedDate) {
      getVisits(selectedDate);
    }
    setLoading(false);
  };

  const handleUnblockClick = async (
    date: Date,
    slots: { from: string; to: string }
  ) => {
    setLoading(true);
    await handleUnblockSlots(date, slots);
    if (selectedDate) {
      getVisits(selectedDate);
    }
    setLoading(false);
  };

  return (
    <SectionWrapper title="Panel administracyjny" isStrong>
      <div className={styles.container}>
        <div className={styles.calendarContainer}>
          <Calendar
            days={days}
            selectedDate={selectedDate}
            onSelectDate={handleSelectDate}
            className={styles.calendar}
            isAdmin
          />
          {selectedDate && (
            <div className={styles.buttons}>
              {selectedDay?.blocked && (
                <Button
                  onClick={() => handleOpenClick(selectedDate)}
                  disabled={loading}
                >
                  Otwórz dzień
                </Button>
              )}
              {!selectedDay?.blocked && (
                <Button
                  onClick={() => handleCloseClick(selectedDate)}
                  disabled={loading}
                >
                  Zamknij dzień
                </Button>
              )}
            </div>
          )}
        </div>

        {selectedDate && (
          <SectionWrapper
            title={`Edytuj ${dayjs(selectedDate).format("dddd, DD MMMM YYYY")}`}
            className={styles.editContainer}
          >
            <RangePicker
              date={selectedDate}
              onSave={(slots) => handleBlockClick(selectedDate, slots)}
              title="Zablokuj godziny"
              buttonText="Zablokuj"
              disabled={loading}
            />
            <RangePicker
              date={selectedDate}
              disabled={loading}
              onSave={(slots) => handleUnblockClick(selectedDate, slots)}
              title="Odblokuj godziny"
              buttonText="Otwórz"
            />
          </SectionWrapper>
        )}
      </div>
      {selectedDate && (
        <>
          <AdminFilters />
          <AdminTable
            visits={filteredVisits}
            getVisits={getVisits}
            selectedDate={selectedDate}
          />
        </>
      )}
    </SectionWrapper>
  );
};
