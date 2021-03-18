import * as React from "react";

import { getUserInfo } from "./handlers/userHandler";
import Layout from "./components/Layout";
import ProductsList from "./components/ProductsList";

const App: React.FC = () => {
  const [userName, setUserName] = React.useState("");
  const [points, setPoints] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const { name, points } = await getUserInfo();
      setUserName(name);
      setPoints(points);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <h3>Loading....</h3>;

  return (
    <Layout userName={userName} points={points}>
      <ProductsList setPoints={setPoints} points={points} />
    </Layout>
  );
};

export default App;
