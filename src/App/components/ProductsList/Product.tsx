import * as React from "react";
import styles from "./Product.module.scss";

const Product: React.FC = ({ name, cost, _id, img, points }) => {
  return (
    <div key={_id} className={styles.container}>
      <img alt={name} src={img.url} />
      {points > cost ? (
        <h3>Cost: {cost}</h3>
      ) : (
        <h3>You need {cost - points} more points</h3>
      )}
      <h3>{name}</h3>
    </div>
  );
};

export default Product;
