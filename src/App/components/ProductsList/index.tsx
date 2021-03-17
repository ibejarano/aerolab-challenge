import * as React from "react";
import styles from "./ProductsList.module.scss";

import axios from "axios";

import Product from "./Product";

const DUMMY_LIST: object[] = [
  {
    name: "Nintendo Switch",
  },
  {
    name: "Playstation 5",
  },
  {
    name: "Playstation 5",
  },
  {
    name: "Playstation 5",
  },
  {
    name: "Playstation 5",
  },
  {
    name: "Playstation 5",
  },
  {
    name: "Playstation 5",
  },
  {
    name: "Playstation 5",
  },
];

const config = {
  headers: { Authorization: `Bearer ${API_KEY}` },
};

const ProductsList: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://coding-challenge-api.aerolab.co/products", config)
      .then(({ data }) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      })
      .catch(console.log);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles.container}>
      {products.map((i) => (
        <Product name={i.name} />
      ))}
    </div>
  );
};

export default ProductsList;
