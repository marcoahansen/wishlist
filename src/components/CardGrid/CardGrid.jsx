import { Card } from "../Card/Card";
import styles from "./CardGrid.module.css";

export const CardGrid = () => {
  return (
    <div className={styles.grid}>
      <Card
        name="Ps5"
        description="Para jogar não sei que horas..."
        image="https://http2.mlstatic.com/D_NQ_NP_970771-MLA73347645092_122023-O.webp"
      />
      <Card
        name="Ps5"
        description="Para jogar não sei que horas..."
        image="https://http2.mlstatic.com/D_NQ_NP_970771-MLA73347645092_122023-O.webp"
      />
    </div>
  );
};
