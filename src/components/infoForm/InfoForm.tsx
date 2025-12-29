"use client";

import { Input, SectionWrapper, Select } from "@/components";
import { User, VisitType } from "@/models/user";

import styles from "./styles.module.scss";

const visitTypeOptions = [
  { value: VisitType.ID_CARD, label: "Wyrobienie dowodu osobistego" },
  { value: VisitType.RESIDENTIAL_REGISTRATION, label: "Meldunek" },
  { value: VisitType.VEHICLE_REGISTRATION, label: "Rejestracja Pojazdu" },
  { value: VisitType.VOTING_REGISTRATION, label: "Zapisanie do spisu wyborczego" },
];

interface InfoFormProps {
  formData: User;
  setFormData: (user: User) => void;
  errors: {
    name: string;
    surname: string;
    email: string;
    phone: string;
    emailConfirm: string;
    type: string;
  };
  showErrors: boolean;
}

export const InfoForm = ({
  formData,
  setFormData,
  errors,
  showErrors,
}: InfoFormProps) => {
  return (
    <SectionWrapper title="Dane osobowe">
      <form className={styles.form}>
        <Input
          type="text"
          placeholder="Imię"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
          showErrors={showErrors}
          maxLength={30}
        />
        <Input
          type="text"
          placeholder="Nazwisko"
          value={formData.surname}
          onChange={(e) =>
            setFormData({ ...formData, surname: e.target.value })
          }
          error={errors.surname}
          showErrors={showErrors}
          maxLength={100}
        />

        <Input
          type="number"
          placeholder="Telefon"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          error={errors.phone}
          showErrors={showErrors}
          maxLength={9}
        />
        <Input
          type="email"
          placeholder="Adres email"
          value={formData.email}
          maxLength={100}
          error={errors.email}
          showErrors={showErrors}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          type="email"
          error={errors.emailConfirm}
          placeholder="Potwierdź email"
          value={formData.emailConfirm}
          showErrors={showErrors}
          maxLength={100}
          onChange={(e) =>
            setFormData({ ...formData, emailConfirm: e.target.value })
          }
        />
        <Select
          name="type"
          id="gender"
          options={visitTypeOptions}
          value={formData.type}
          error={errors.type || ""}
          showErrors={showErrors}
          onChange={(e) => setFormData({ ...formData, type: e.target.value as VisitType })}
        />
      </form>
    </SectionWrapper>
  );
};
