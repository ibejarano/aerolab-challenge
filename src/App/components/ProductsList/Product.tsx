import * as React from "react";
import styles from "./Product.module.scss";
import { redeemProduct } from "../../handlers/userHandler";

const Product: React.FC = ({
  name,
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
        <img alt={name} src={img.url} />
        <h3>Cost: {cost}</h3>
        <h3>You need {cost - points} more</h3>
        <p>{name}</p>
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
      <h3>Cost: {cost}</h3>
      <img alt={name} src={img.url} />
      <p>{name}</p>
      <div className={styles.redeem}>
        <button onClick={handleRedeem} disabled={redeeming}>
          Redeem now!
        </button>
      </div>
    </div>
  );
};

export default Product;
