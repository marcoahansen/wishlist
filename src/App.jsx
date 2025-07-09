import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./App.module.css";
import { CardGrid } from "./components/CardGrid/CardGrid";
import { AddItemForm } from "./components/AddItemForm/AddItemForm";

function App({ search }) {
  const [wishs, setWishs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    description: "",
    urlImage: "",
    date: "",
  });

  const filteredWishs = useMemo(() => {
    if (!search.trim()) {
      return wishs;
    }
    return wishs.filter((wish) => {
      const seachLower = search.toLowerCase();
      return (
        wish.name.toLowerCase().includes(seachLower) ||
        wish.description.toLowerCase().includes(seachLower)
      );
    });
  }, [search, wishs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWishs = [...wishs, form];
    setWishs(updatedWishs);
    setForm({
      name: "",
      description: "",
      urlImage: "",
      date: "",
    });
  };

  useEffect(() => {
    const savedWishs = localStorage.getItem("userWishs");
    console.log(savedWishs);
    if (savedWishs) {
      try {
        const parsedWishs = JSON.parse(savedWishs);
        console.log("parsed: ", parsedWishs);
        setWishs(parsedWishs);
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("userWishs", JSON.stringify(wishs));
    }
  }, [wishs]);

  const handleDelete = useCallback(
    (indexToDelete) => {
      const updatedWishs = wishs.filter((_, index) => index !== indexToDelete);
      setWishs(updatedWishs);
    },
    [wishs]
  );

  return (
    <>
      <main className={styles.main}>
        <AddItemForm
          handleSubmit={handleSubmit}
          form={form}
          setForm={setForm}
        />
        <CardGrid
          wishs={filteredWishs}
          handleDelete={handleDelete}
          search={search}
        />
      </main>
    </>
  );
}

export default App;
