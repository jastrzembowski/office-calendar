import { useMemo } from "react";

import { User } from "@/models/user";

export const useValidate = (formData: User) => {
  const errors = useMemo(() => {
    const newErrors = {
      name: "",
      surname: "",
      email: "",
      phone: "",
      emailConfirm: "",
      type: "",
    };

    if (!formData.name || formData.name === "") {
      newErrors.name = "Imię jest wymagane";
    } else if (formData.name.length < 3) {
      newErrors.name = "Imię musi mieć co najmniej 3 znaki";
    }

    if (!formData.surname || formData.surname === "") {
      newErrors.surname = "Nazwisko jest wymagane";
    } else if (formData.surname.length < 3) {
      newErrors.surname = "Nazwisko musi mieć co najmniej 3 znaki";
    }

    if (!formData.email || formData.email === "") {
      newErrors.email = "Email jest wymagany";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email jest nieprawidłowy";
    }

    if (!formData.phone || formData.phone === "") {
      newErrors.phone = "Telefon jest wymagany";
    } else if (formData.phone.length < 9) {
      newErrors.phone = "Telefon musi mieć co najmniej 9 cyfr";
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = "Telefon musi zawierać tylko cyfry";
    } else if (formData.phone.length > 9) {
      newErrors.phone = "Telefon musi mieć co najwyżej 9 cyfr";
    }

    if (!formData.emailConfirm || formData.emailConfirm === "") {
      newErrors.emailConfirm = "Potwierdź email";
    } else if (formData.emailConfirm !== formData.email) {
      newErrors.emailConfirm = "Emaily nie są identyczne";
    }

    if (!formData.type) {
      newErrors.type = "Wybierz typ wizyty";
    }

    return newErrors;
  }, [formData]);

  const isValid = useMemo(() => {
    return Object.values(errors).every((error) => error === "");
  }, [errors]);

  return { isValid, errors };
};
