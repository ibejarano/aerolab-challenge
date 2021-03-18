import * as React from "react";
import styles from "./Product.module.scss";

const Product: React.FC = ({ name, cost, _id, img, points }) => {
  if (cost > points) {
    return (
      <div key={_id} className={styles.containerUnavailable}>
        <img alt={name} src={img.url} />
        <h3>Cost: {cost}</h3>
        <h3>You need {cost - points} more</h3>
        <p>{name}</p>
      </div>
    );
  }

  return (
    <div key={_id} className={styles.containerAvailable}>
      <h3>Cost: {cost}</h3>
      <img alt={name} src={img.url} />
      <p>{name}</p>
      <div className={styles.redeem}>
        <button>Redeem now!</button>
      </div>
    </div>
  );
};

export default Product;
