import { VisitType } from "./user";

export interface BookVisitData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  type: VisitType;
  slotId: string;
  date: string;
}