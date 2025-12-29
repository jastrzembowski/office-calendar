import { getAllDays } from "@/api/api";

import { MainPage } from "./MainPage";

export default async function Home() {
  const days = await getAllDays();
  
  return (
    <MainPage days={days}/>
  );
}
