import * as React from "react";

import { toast } from "react-toastify";

import logo from "../../../assets/logo.svg";
import coin from "../../../assets/icons/coin.svg";

import { addPoints } from "../../handlers/userHandler";
import History from "../History/History";

const NavBar: React.FC = ({ userName, points, setPoints }) => {
  const handleAddPoints = async (amount) => {
    const data = await addPoints(amount);
    setPoints(data["New Points"]);
    toast.info(`${amount} points added`, {
      position: "bottom-right",
    });
  };

  return (
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
        <History points={points} />
      </div>
    </nav>
  );
};

export default NavBar;
