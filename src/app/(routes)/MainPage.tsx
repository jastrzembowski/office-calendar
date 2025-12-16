import {  ServiceSelector, Wrapper } from "@/components";

import { Day } from "@/models";
import styles from "./styles.module.scss";
import { DatesContent } from "@/components/datesContent";

interface MainPageProps {
  days: Day[];
}

export const MainPage = ({ days }: MainPageProps) => {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Informacje o rezerwacji</h2>
        <ServiceSelector />
        <DatesContent days={days} />
      </div>
    </Wrapper>
  );
};
