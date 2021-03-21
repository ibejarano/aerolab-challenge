import * as React from "react";
import styles from "./SortBar.module.scss";

import left from "../../../assets/icons/arrow-left.svg";
import right from "../../../assets/icons/arrow-right.svg";

enum SortType {
  Recent = "recent",
  AscendingPrice = "ascendingPrice",
  DescendingPrice = "descendingPrice",
}
interface Props {
  allProducts: any[];
  currPage: number;
  setSort: (sortType: SortType) => void;
  setCurrPage: (page: (prevPagE: number) => number) => void;
}

const SortBar: React.FC<Props> = ({
  allProducts,
  currPage,
  setSort,
  setCurrPage,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const sortByRecent = () => {
    allProducts = allProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
    setSort(SortType.Recent);
    setSelectedIndex(0);
  };
  const sortByDescendingPrice = () => {
    allProducts = allProducts.sort((a, b) => (a.cost < b.cost ? 1 : -1));
    setSort(SortType.DescendingPrice);
    setSelectedIndex(1);
  };
  const sortByAscendingPrice = () => {
    allProducts = allProducts.sort((a, b) => (a.cost > b.cost ? 1 : -1));
    setSort(SortType.AscendingPrice);
    setSelectedIndex(2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.paginationContainer}>
        <span>{(currPage + 1) * 16} products of 32</span>
        <button
          onClick={() => setCurrPage((page) => page - 1)}
          disabled={currPage == 0}
        >
          <img src={left} alt="left arrow" />
        </button>
        <button
          onClick={() => setCurrPage((page) => page + 1)}
          disabled={currPage == 1}
        >
          <img src={right} alt="right arrow" />
        </button>
      </div>
      <div className={styles.sortContainer}>
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
