"use client";

import { useState } from "react";

import { Stepper, Wrapper } from "@/components";
import { Day, Slot, User, VisitType } from "@/models";

import { BookingInfoPage, ConfirmationPage, PersonalDataPage } from "../pages";

const isCompleteUser = (user: User): boolean => {
  return (
    !!user.name &&
    !!user.surname &&
    !!user.email &&
    !!user.phone &&
    !!user.emailConfirm &&
    !!user.type
  );
};

interface MainPageProps {
  days: Day[];
}

export const MainPage = ({ days }: MainPageProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState<Slot>();
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState<User>({
    name: "",
    surname: "",
    email: "",
    phone: "",
    emailConfirm: "",
    type: VisitType.ID_CARD,
  });
  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <Wrapper>
      <Stepper
        steps={["Rezerwacja", "Dane osobowe", "Potwierdzenie"]}
        currentStep={currentStep}
      />
      {currentStep === 0 && (
        <BookingInfoPage
          days={days}
          setSelectedDate={setSelectedDate}
          setSelectedSlot={setSelectedSlot}
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
          handleNextStep={handleNextStep}
        />
      )}
      {currentStep === 1 && (
        <PersonalDataPage
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          selectedDate={selectedDate}
          formData={formData}
          setFormData={setFormData}
          selectedSlot={selectedSlot}
        />
      )}
      {currentStep === 2 &&
        isCompleteUser(formData) &&
        selectedSlot &&
        selectedDate && (
          <ConfirmationPage
            handlePreviousStep={handlePreviousStep}
            data={formData}
            slot={selectedSlot}
            date={selectedDate}
          />
        )}
    </Wrapper>
  );
};
