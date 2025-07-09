import { Outlet } from "react-router";
import styles from "../../App.module.css";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <div className={styles.app}>
      <Outlet />
      <Footer />
    </div>
  );
};
