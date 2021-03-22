import * as React from "react";

import styles from "./ProductsContainer.module.scss";
import Product from "./Product";

interface IProduct {
  name: string;
  category: string;
  cost: number;
  _id: string;
  img: {
    url: string;
  };
}
interface Props {
  points: number;
  products: IProduct[];
  setPoints: (amount: (prev: number) => number) => void;
}

const ProductsList: React.FC<Props> = ({ setPoints, points, products }) => {
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
