export enum SlotStatus {
  AVAILABLE = "AVAILABLE",
  BOOKED = "BOOKED",
  CANCELLED = "CANCELLED",
}

export interface Day {
  id: string;
  date: string;
  full: boolean;
  blocked: boolean;
  slots: Slot[];
}

export interface Slot {
  id: string;
  status: SlotStatus;
  startTime: string;
}