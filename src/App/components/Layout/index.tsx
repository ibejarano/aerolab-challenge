import * as React from "react";

import logo from "../../../assets/logo.svg";
import styles from "./Layout.module.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <main className={styles.container}>
      <nav>
        <img alt="Aerolab" src={logo} />
        <p>John Kite</p>
      </nav>
      <figure>
        <h2>Electronics</h2>
      </figure>
      {children}
    </main>
  );
};

export default Layout;
