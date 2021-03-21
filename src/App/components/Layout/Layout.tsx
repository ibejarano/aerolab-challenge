import * as React from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import styles from "./Layout.module.scss";

import NavBar from "./NavBar";

const Layout: React.FC = ({ children, userName, points, setPoints }) => {
  return (
    <main className={styles.container}>
      <NavBar userName={userName} points={points} setPoints={setPoints} />
      <figure>
        <h2>Electronics</h2>
      </figure>
      {children}
      <ToastContainer />
    </main>
  );
};

export default Layout;
