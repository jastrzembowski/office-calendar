import { BookVisitData } from "@/models/visit";

import { clientFetch } from "./clientFetch";
import { ENDPOINTS } from "./endpoints";

export const getAllDays = async () => {
  const response = await clientFetch(ENDPOINTS.getAllDays);
  return response;
}

export const bookVisit = async (data: BookVisitData) => {
  const response = await clientFetch(ENDPOINTS.bookVisit, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response;
}