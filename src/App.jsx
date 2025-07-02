import { useState } from "react";
import styles from "./App.module.css";
import { CardGrid } from "./components/CardGrid/CardGrid";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AddItemForm } from "./components/AddItemForm/AddItemForm";

function App() {
  const [wishs, setWishs] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    urlImage: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWishs = [...wishs, form];
    setWishs(updatedWishs);
    setForm({
      name: "",
      description: "",
      urlImage: "",
    });
  };
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <AddItemForm
          handleSubmit={handleSubmit}
          form={form}
          setForm={setForm}
        />
        <CardGrid wishs={wishs} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
