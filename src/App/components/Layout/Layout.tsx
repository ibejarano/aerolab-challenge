import * as React from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import styles from "./Layout.module.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <main className={styles.container}>
      {children}
      <ToastContainer />
    </main>
  );
};

export default Layout;
