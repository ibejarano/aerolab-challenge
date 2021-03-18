import * as React from "react";

import logo from "../../../assets/logo.svg";
import styles from "./Layout.module.scss";

const Layout: React.FC = ({ children, user }) => {
  console.log("Layout");
  console.log(user.points);
  return (
    <main className={styles.container}>
      <nav>
        <img alt="Aerolab" src={logo} />
        <div>
          <p>{user.name}</p>
          <span>{user.points}</span>
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
