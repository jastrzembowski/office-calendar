import { useState } from "react";

import dayjs from "dayjs";

import { Button, InfoForm, SectionWrapper } from "@/components";
import { useValidate } from "@/hooks";
import { Slot, User } from "@/models";

import styles from "./styles.module.scss";

interface PersonalDataPageProps {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  selectedDate: Date | undefined;
  selectedSlot: Slot | undefined;
  formData: User;
  setFormData: (user: User) => void;
}

export const PersonalDataPage = ({
  handleNextStep,
  handlePreviousStep,
  selectedSlot,
  selectedDate,
  formData,
  setFormData,
}: PersonalDataPageProps) => {
  const hasSelectedDate = selectedDate && selectedSlot;
  const [showErrors, setShowErrors] = useState(false);

  const { isValid, errors } = useValidate(formData);

  const handleNextStepClick = () => {
    if (isValid) {
      handleNextStep();
    } else {
      setShowErrors(true);
    }
  };

  return (
    <SectionWrapper title="Twoja rezerwacja" isStrong>
      <InfoForm
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        showErrors={showErrors}
      />
      {hasSelectedDate && (
        <SectionWrapper title="Wybrana data">
          <p className={styles.selectedDate}>
            {dayjs(selectedDate).utc().format("dddd, DD MMMM YYYY")}
          </p>
        </SectionWrapper>
      )}
      <Button onClick={handlePreviousStep}>Poprzedni krok</Button>
      {hasSelectedDate && (
        <Button onClick={handleNextStepClick}>Następny krok</Button>
      )}
    </SectionWrapper>
  );
};
