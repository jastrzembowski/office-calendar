import { BookVisitData } from "@/models/visit";

import { clientFetch } from "./clientFetch";
import { ADMIN_ENDPOINTS, ENDPOINTS } from "./endpoints";

export const getAllDays = async () => {
  const response = await clientFetch(ENDPOINTS.getAllDays);
  return await response.json();
};

export const bookVisit = async (data: BookVisitData) => {
  const response = await clientFetch(ENDPOINTS.bookVisit, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const adminLogin = async (email: string, password: string) => {
  const response = await clientFetch(ADMIN_ENDPOINTS.login, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (data.accessToken) {
    return { success: true, data: { accessToken: data.accessToken } };
  }
  return { success: false, error: data.error };
};
