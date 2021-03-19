import * as React from "react";

import logo from "../../../assets/logo.svg";
import styles from "./Layout.module.scss";

import History from "../History/History";

const Layout: React.FC = ({ children, userName, points }) => {
  return (
    <main className={styles.container}>
      <nav>
        <img alt="Aerolab" src={logo} />
        <div>
          <History />
          <p>{userName}</p>
          <span>{points}</span>
        </div>
      </nav>
      <figure>
        <h2>Electronics</h2>
      </figure>
      {children}
    </main>
  );
};

export default Layout;
