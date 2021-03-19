import * as React from "react";

import styles from "./History.module.scss";

import { getHistory } from "../../handlers/userHandler";

const Layout: React.FC = () => {
  const [history, setHistory] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const data = await getHistory();
      setHistory(data);
    }
    fetchData();
  }, []);

  return (
    <section className={styles.container}>
      {history.map((p, idx) => (
        <div key={idx}>
          <p>
            {p.name} {p.cost}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Layout;
