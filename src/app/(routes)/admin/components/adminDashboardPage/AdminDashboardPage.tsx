import { getAllDays } from "@/api/api";
import { AdminDashboard } from "./components";

export const AdminDashboardPage = async () => {
  const days = await getAllDays();

  return <AdminDashboard days={days} />;
};
