import { SectionWrapper } from "@/components";

import styles from "./styles.module.scss";

export const ServiceSelector = () => {
  return (
    <SectionWrapper title="Wybierz oddział">
      <input type="text" placeholder="Gdański Urząd Miejski - Gdańsk, ul. Kilińskiego 12 80-519"  disabled className={styles.input} />
    </SectionWrapper>
  );
};