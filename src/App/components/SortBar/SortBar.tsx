import * as React from "react";
import {
  container,
  paginationContainer,
  sortContainer,
} from "./SortBar.module.scss";

import left from "../../../assets/icons/arrow-left.svg";
import right from "../../../assets/icons/arrow-right.svg";

const SortBar: React.FC = ({ allProducts, setSort, currPage, setCurrPage }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const sortByRecent = () => {
    allProducts = allProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
    setSort("recent");
    setSelectedIndex(0);
  };
  const sortByDescendingPrice = () => {
    allProducts = allProducts.sort((a, b) => (a.cost < b.cost ? 1 : -1));
    setSort("descendingPrice");
    setSelectedIndex(1);
  };
  const sortByAscendingPrice = () => {
    allProducts = allProducts.sort((a, b) => (a.cost > b.cost ? 1 : -1));
    setSort("ascendingPrice");
    setSelectedIndex(2);
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
        <button onClick={sortByRecent} disabled={selectedIndex == 0}>
          Most Recent
        </button>
        <button onClick={sortByDescendingPrice} disabled={selectedIndex == 1}>
          Highest Price
        </button>
        <button onClick={sortByAscendingPrice} disabled={selectedIndex == 2}>
          Lowest Price
        </button>
      </div>
    </div>
  );
};

export default SortBar;
