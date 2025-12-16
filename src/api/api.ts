import { clientFetch } from "./clientFetch";
import { ENDPOINTS } from "./endpoints";

export const getAllDays = async () => {
  const response = await clientFetch(ENDPOINTS.getAllDays);
  return response;
}