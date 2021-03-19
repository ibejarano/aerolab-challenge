import * as React from "react";

import logo from "../../../assets/logo.svg";
import coin from "../../../assets/icons/coin.svg";

import styles from "./Layout.module.scss";

import History from "../History/History";

const Layout: React.FC = ({ children, userName, points }) => {
  return (
    <main className={styles.container}>
      <nav>
        <img alt="Aerolab" src={logo} />
        <div>
          <p>{userName}</p>
          <span>
            <p>{points}</p>
            <img alt="coin" src={coin} />
          </span>
          <History />
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
