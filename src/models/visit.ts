import {  VisitType } from "./user";

export interface BookVisitData {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  visitType?: VisitType;
  date?: string;
  time?: string;
}

export interface Visit {
  date: string;
  dayId: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  slotId: string;
  slotStatus: "BLOCKED" | "AVAILABLE" | "RESERVED";
  startTime: string;
  visitId: string | null;
  visitStatus: string | null;
  visitType: VisitType | null;
}

export interface UserVisit {
  date: string;
  time: string;
  visitType: VisitType;
  visitId: string;
}
