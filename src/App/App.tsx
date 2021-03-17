import * as React from "react";

import Layout from "./components/Layout";
import ProductsList from "./components/ProductsList";

const App: React.FC = () => {
  return (
    <Layout>
      <ProductsList />
    </Layout>
  );
};

export default App;
