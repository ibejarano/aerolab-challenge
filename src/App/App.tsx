import * as React from "react";

import { getUserInfo, getProducts } from "./handlers/userHandler";
import { Layout } from "./components/Layout";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { ProductsList } from "./components/ProductsList";
import { SortBar } from "./components/SortBar";

let allProducts: any[] = [];
const PRODUCTS_PER_PAGE: number = 16;

const App: React.FC = () => {
  const [userName, setUserName] = React.useState("");
  const [points, setPoints] = React.useState(0);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const [currPage, setCurrPage] = React.useState(0);
  const [sort, setSort] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const { name, points } = await getUserInfo();
      setPoints(points);
      setUserName(name);
      allProducts = await getProducts();
      setProducts(
        allProducts.slice(
          currPage * PRODUCTS_PER_PAGE,
          (currPage + 1) * PRODUCTS_PER_PAGE
        )
      );
      setLoading(false);
    }

    if (loading) {
      console.log("Fetching...");
      fetchData();
    } else {
      console.log("Not fetching... Re render!");
      setProducts(
        allProducts.slice(
          currPage * PRODUCTS_PER_PAGE,
          (currPage + 1) * PRODUCTS_PER_PAGE
        )
      );
    }
  }, [sort, currPage]);

  if (loading) return <LoadingScreen />;

  return (
    <Layout>
      <Navbar userName={userName} points={points} setPoints={setPoints} />
      <figure>
        <h2>Electronics</h2>
      </figure>
      <SortBar
        allProducts={allProducts}
        setSort={setSort}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
      <ProductsList setPoints={setPoints} points={points} products={products} />
    </Layout>
  );
};

export default App;
