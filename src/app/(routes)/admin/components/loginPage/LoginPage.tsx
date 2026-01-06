"use client";

import { Button, Input, SectionWrapper } from "@/components";
import { validateEmail } from "@/hooks";
import { useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import { showToast } from "@/utils/showToast";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateEmail(email)) {
      try {
        const r = await fetch("/api/auth/adminLogin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        if (r.ok) {
          router.refresh();
          showToast("success", "Zalogowano pomyślnie");
        } else {
          setShowErrors(true);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setShowErrors(true);
    }
  };

  return (
    <SectionWrapper title="Panel administracyjny" isStrong>
      <div className={styles.container}>
        <h1>Zaloguj się do panelu administracyjnego</h1>

        <form className={styles.form} onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={"Email jest nieprawidłowy"}
            showErrors={showErrors}
          />

          <Input
            type="password"
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">Login</Button>
        </form>
      </div>
    </SectionWrapper>
  );
};
