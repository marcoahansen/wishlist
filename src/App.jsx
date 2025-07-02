import { useState } from "react";
import styles from "./App.module.css";
import { CardGrid } from "./components/CardGrid/CardGrid";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  const [wishs, setWishs] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    urlImage: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
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
  console.log(wishs);
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Desejo</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">URL Imagem</label>
            <input
              type="text"
              name="urlImage"
              value={form.urlImage}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Adicionar</button>
        </form>
        <CardGrid wishs={wishs} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
