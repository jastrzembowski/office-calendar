import { AdminLogout } from "@/components/adminLogout/AdminLogout";
import styles from "./styles.module.scss";

export const Navbar = async ({ isAdmin }: { isAdmin: boolean }) => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbarTitle}>
        System rezerwacji wizyt w Gdańskim Urzędzie Miasta
      </h1>
      {isAdmin && <AdminLogout />}
    </nav>
  );
};
