import * as React from "react";

import { getUserInfo, getProducts } from "./handlers/userHandler";
import Layout from "./components/Layout";
import ProductsList from "./components/ProductsList";
import { SortBar } from "./components/SortBar";

const App: React.FC = () => {
  const [userName, setUserName] = React.useState("");
  const [points, setPoints] = React.useState(0);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const [sort, setSort] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const { name, points } = await getUserInfo();
      setPoints(points);
      setUserName(name);
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    }

    if (loading) {
      console.log("Fetching...")
      fetchData();
    } else {
      console.log("Not fetching... Re render!");
    }
  }, [sort]);

  if (loading) return <h3>Loading....</h3>;

  return (
    <Layout userName={userName} points={points}>
      <SortBar
        products={products}
        setProducts={setProducts}
        setSort={setSort}
      />
      <ProductsList setPoints={setPoints} points={points} products={products} />
    </Layout>
  );
};

export default App;
