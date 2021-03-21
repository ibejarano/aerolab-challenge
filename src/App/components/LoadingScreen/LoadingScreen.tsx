import * as React from "react";

import styles from "./LoadingScreen.module.scss";
import logo from "../../../assets/logo.svg";

const LoadingScreen: React.FC = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>
          <img alt="Aerolab" src={logo} width={128} />
        </h1>
        <h3>Lets get this party started</h3>
      </header>
    </main>
  );
};

export default LoadingScreen;
