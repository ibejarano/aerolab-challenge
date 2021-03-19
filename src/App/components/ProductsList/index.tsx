import * as React from "react";

import styles from "./ProductsList.module.scss";
import Product from "./Product";

import { getProducts } from "../../handlers/userHandler";

const ProductsList: React.FC = ({ setPoints, points }) => {
  const [loading, setLoading] = React.useState(true);
  const [redeeming, setRedeeming] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchProducts() {
      if (loading) {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

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
