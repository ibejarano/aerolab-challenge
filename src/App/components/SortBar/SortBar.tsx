import * as React from "react";
import { container } from "./SortBar.module.scss";

const SortBar: React.FC = ({ allProducts, setSort, setCurrPage }) => {
  const sortByAscendingPrice = () => {
    allProducts = allProducts.sort((a, b) => (a.cost > b.cost ? 1 : -1));
    setSort("ascendingPrice");
  };

  const sortByDescendingPrice = () => {
    allProducts = allProducts.sort((a, b) => (a.cost < b.cost ? 1 : -1));
    setSort("descendingPrice");
  };

  const sortByRecent = () => {
    allProducts = allProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
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
          Next Page
        </button>
      </div>
    </div>
  );
};

export default SortBar;
