import { cookies } from "next/headers";
import { AdminDashboardPage, LoginPage } from "./components";

export const AdminPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("session");

  if (!token) {
    return <LoginPage />;
  }
  
  return <AdminDashboardPage />;
};
