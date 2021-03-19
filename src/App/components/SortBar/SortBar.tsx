import * as React from "react";
import {
  container,
  paginationContainer,
  sortContainer,
} from "./SortBar.module.scss";

import left from "../../../assets/icons/arrow-left.svg";
import right from "../../../assets/icons/arrow-right.svg";

const SortBar: React.FC = ({ allProducts, setSort, currPage, setCurrPage }) => {
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
      <div className={paginationContainer}>
        <span>{(currPage + 1) * 16} products of 32</span>
        <button
          onClick={() => setCurrPage((page: number) => page - 1)}
          disabled={currPage == 0}
        >
          <img src={left} alt="left arrow" />
        </button>
        <button
          onClick={() => setCurrPage((page: number) => page + 1)}
          disabled={currPage == 1}
        >
          <img src={right} alt="right arrow" />
        </button>
      </div>
      <div className={sortContainer}>
        <p>Sort by:</p>
        <button onClick={sortByRecent}>Most Recent</button>
        <button onClick={sortByDescendingPrice}>Highest Price</button>
        <button onClick={sortByAscendingPrice}>Lowest Price</button>
      </div>
    </div>
  );
};

export default SortBar;
