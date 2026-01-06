"use client";

import { useState } from "react";

import { Stepper, Wrapper } from "@/components";
import { Day, Slot, User, VisitType } from "@/models";

import { BookingInfoPage, ConfirmationPage, PersonalDataPage, SuccessPage } from "../pages";

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

const initialFormData: User = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  emailConfirm: "",
  type: VisitType.ID_CARD,
};


export const MainPage = ({ days }: MainPageProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState<Slot>();
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState<User>(initialFormData);
  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

const handleReset = () => {
  setSelectedDate(undefined);
  setSelectedSlot(undefined);
  setCurrentStep(0);
  setFormData({
    ...initialFormData,
  });
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
            handleNextStep={handleNextStep}
            data={formData}
            slot={selectedSlot}
            date={selectedDate}
          />
        )}
        {currentStep === 3 && (
          <SuccessPage
            handleReset={handleReset}
            data={formData}
            slot={selectedSlot}
            date={selectedDate}
          />
        )}
    </Wrapper>
  );
};
