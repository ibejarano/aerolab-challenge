import * as React from "react";
import { container } from "./SortBar.module.scss";

const SortBar: React.FC = ({ products, setProducts, setSort }) => {
  const sortByAscendingPrice = () => {
    const sorted = products.sort((a, b) => (a.cost > b.cost ? 1 : -1));
    setProducts(sorted);
    setSort("AscendingPrice");
  };

  const sortByDescendingPrice = () => {
    const sorted = products.sort((a, b) => (a.cost < b.cost ? 1 : -1));
    setProducts(sorted);
    setSort("DescendingPrice");
  };

  return (
    <div className={container}>
      <span>32 products of 32: (hardcoded)</span>
      <div>
        <button onClick={sortByDescendingPrice}>Highest Price</button>
        <button onClick={sortByAscendingPrice}>Lowest Price</button>
      </div>
    </div>
  );
};

export default SortBar;
