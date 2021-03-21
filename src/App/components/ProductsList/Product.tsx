import * as React from "react";
import { toast } from "react-toastify";

import styles from "./Product.module.scss";
import coin from "../../../assets/icons/coin.svg";
import buyLogo from "../../../assets/icons/buy-blue.svg";
import { redeemProduct } from "../../handlers/userHandler";

interface Props {
  name: string;
  category: string;
  cost: number;
  _id: string;
  img: {
    url: string;
  };
  points: number;
  redeeming: boolean;
  setPoints: (amount: (prev: number) => number) => void;
  setRedeeming: (redeeming: boolean) => void;
}

const Product: React.FC<Props> = ({
  name,
  category,
  cost,
  _id,
  img,
  points,
  redeeming,
  setPoints,
  setRedeeming,
}) => {
  if (cost > points) {
    return (
      <div
        key={_id}
        className={
          redeeming ? styles.containerRedeeming : styles.containerUnavailable
        }
      >
        <span>
          You need {cost}
          <img alt="coin" src={coin} />
        </span>
        <img className={styles.productImage} alt={name} src={img.url} />
        <p>{category}</p>
        <h1>{name}</h1>
      </div>
    );
  }

  const handleRedeem = async () => {
    setRedeeming(true);
    const { message } = await redeemProduct(_id);
    setRedeeming(false);
    setPoints((prevPoi) => prevPoi - cost);
    toast.info(message, {
      position: "bottom-right",
    });
  };

  return (
    <div
      key={_id}
      className={
        redeeming ? styles.containerRedeeming : styles.containerAvailable
      }
    >
      <img className={styles.buyLogo} alt="buy logo" src={buyLogo} />
      <img className={styles.productImage} alt={name} src={img.url} />
      <p>{category}</p>
      <h1>{name}</h1>
      <div className={styles.redeem}>
        <span>
          {cost}
          <img alt="coin" src={coin} />
        </span>
        <button onClick={handleRedeem} disabled={redeeming}>
          Redeem now!
        </button>
      </div>
    </div>
  );
};

export default Product;
