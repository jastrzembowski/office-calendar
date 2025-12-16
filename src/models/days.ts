export enum SlotStatus {
  AVAILABLE = "available",
  BOOKED = "booked",
  CANCELLED = "cancelled",
}

export interface Day {
  id: string;
  date: string;
  full: boolean;
  slots: Slot[];
}

export interface Slot {
  id: string;
  status: SlotStatus;
  startTime: string;
}