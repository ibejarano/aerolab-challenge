import * as React from "react";

import styles from "./ProductsList.module.scss";
import Product from "./Product";

const ProductsList: React.FC = ({ setPoints, points, products }) => {
  const [redeeming, setRedeeming] = React.useState(false);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Product
          key={product._id}
          {...product}
          points={points}
          setPoints={setPoints}
          redeeming={redeeming}
          setRedeeming={setRedeeming}
        />
      ))}
    </div>
  );
};

export default ProductsList;
