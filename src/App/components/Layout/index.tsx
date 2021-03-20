import * as React from "react";

import logo from "../../../assets/logo.svg";
import coin from "../../../assets/icons/coin.svg";

import styles from "./Layout.module.scss";

import { addPoints } from "../../handlers/userHandler";
import History from "../History/History";

const Layout: React.FC = ({ children, userName, points, setPoints }) => {
  const handleAddPoints = async (points) => {
    const data = await addPoints(points);
    console.log(data["New Points"]);
    setPoints(data["New Points"]);
  };

  return (
    <main className={styles.container}>
      <nav>
        <img alt="Aerolab" src={logo} />
        <div>
          <div>
            <p>Add more points</p>
            <button onClick={() => handleAddPoints(1000)}>1000</button>
            <button onClick={() => handleAddPoints(5000)}>5000</button>
            <button onClick={() => handleAddPoints(7500)}>7500</button>
          </div>
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
