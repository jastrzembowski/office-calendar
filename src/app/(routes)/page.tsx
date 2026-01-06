import { getAllDays } from "@/api/api";

import { MainPage } from "./MainPage";

export default async function Home() {
  const days = await getAllDays();
  
  if (!days) {
    return <div>Coś poszło nie tak</div>;
  }
  return (
    <MainPage days={days}/>
  );
}
