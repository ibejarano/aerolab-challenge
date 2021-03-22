import * as React from "react";

import styles from "./History.module.scss";

import { getHistory } from "../../handlers/apiHandler";

interface RedeemHistory {
  name: string;
  cost: number;
  createDate: Date;
}
interface Props {
  points: number;
}

const Layout: React.FC<Props> = ({ points }) => {
  const [history, setHistory] = React.useState<RedeemHistory[] | null>(null);
  const [viewHistory, setViewHistory] = React.useState<boolean>(false);

  const handleToggle = () => {
    setViewHistory((prev) => !prev);
  };

  React.useEffect(() => {
    async function fetchData() {
      const data = await getHistory();
      setHistory(data);
    }
    console.log("fetching history");
    fetchData();
  }, [points]);

  if (!history)
    return (
      <section className={styles.container}>
        <button onClick={handleToggle}>View History</button>
        {viewHistory && (
          <div className={styles.noRedeems}>
            <p>Empty redeems history</p>
          </div>
        )}
      </section>
    );

  return (
    <section className={styles.container}>
      <button onClick={handleToggle}>View History</button>
      {viewHistory && (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Cost</th>
              <th>Redeem date</th>
            </tr>
          </thead>
          <tbody>
            {history.map((p, idx) => (
              <tr key={idx}>
                <td>{p.name}</td>
                <td>{p.cost}</td>
                <td>{new Date(p.createDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Layout;
