import * as React from "react";

import { getUserInfo } from "./handlers/userHandler";
import Layout from "./components/Layout";
import ProductsList from "./components/ProductsList";

const App: React.FC = () => {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const data = await getUserInfo();
      setUser(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <h3>Loading....</h3>;

  return (
    <Layout user={user}>
      <ProductsList points={user.points} />
    </Layout>
  );
};

export default App;
