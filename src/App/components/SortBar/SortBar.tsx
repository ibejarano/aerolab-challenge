import * as React from "react";
import { container } from "./SortBar.module.scss";

const SortBar: React.FC = ({ products, setProducts, setSort, setCurrPage }) => {
  const sortByAscendingPrice = () => {
    const sorted = products.sort((a, b) => (a.cost > b.cost ? 1 : -1));
    setProducts(sorted);
    setSort("ascendingPrice");
  };

  const sortByDescendingPrice = () => {
    const sorted = products.sort((a, b) => (a.cost < b.cost ? 1 : -1));
    setProducts(sorted);
    setSort("descendingPrice");
  };

  const sortByRecent = () => {
    const sorted = products.sort((a, b) => (a._id > b._id ? 1 : -1));
    setProducts(sorted);
    setSort("recent");
  };

  return (
    <div className={container}>
      <span>32 products of 32: (hardcoded)</span>
      <div>
        <button onClick={sortByRecent}>Most Recent</button>
        <button onClick={sortByDescendingPrice}>Highest Price</button>
        <button onClick={sortByAscendingPrice}>Lowest Price</button>
      </div>
      <div>
        <button onClick={() => setCurrPage((page) => page + 1)}>
          {" "}
          Next Page{" "}
        </button>
      </div>
    </div>
  );
};

export default SortBar;
