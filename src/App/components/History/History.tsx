import * as React from "react";

import styles from "./History.module.scss";

import { getHistory } from "../../handlers/userHandler";

const Layout: React.FC = () => {
  const [history, setHistory] = React.useState([]);
  const [viewHistory, setViewHistory] = React.useState(false);

  const handleToggle = () => {
    setViewHistory((prev) => !prev);
  };

  React.useEffect(() => {
    async function fetchData() {
      const data = await getHistory();
      setHistory(data);
    }
    fetchData();
  }, []);

  return (
    <section className={styles.container}>
      <button onClick={handleToggle}>View History</button>
      {viewHistory && (
        <table>
          <tr>
            <th>Product</th>
            <th>Cost</th>
            <th>Redeem date</th>
          </tr>
          {history.map((p, idx) => (
            <tr key={idx}>
              <td>{p.name}</td>
              <td>{p.cost}</td>
              <td>{new Date(p.createDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </table>
      )}
    </section>
  );
};

export default Layout;
