import * as React from "react";
import styles from "./Product.module.scss";

import coin from "../../../assets/icons/coin.svg";
import buyLogo from "../../../assets/icons/buy-blue.svg";
import { redeemProduct } from "../../handlers/userHandler";

const Product: React.FC = ({
  name,
  category,
  cost,
  _id,
  img,
  points,
  setPoints,
  redeeming,
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
    console.log(message);
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
