import styles from "./App.module.css";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Card
          name="Ps5"
          description="Para jogar não sei que horas..."
          image="https://http2.mlstatic.com/D_NQ_NP_970771-MLA73347645092_122023-O.webp"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
