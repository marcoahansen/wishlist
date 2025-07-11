import { useNavigate, useParams } from "react-router";
import { useWishs } from "../../hooks/useWishs";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { AddItemForm } from "../AddItemForm/AddItemForm";

export const WishDetail = () => {
  const { id } = useParams();
  const { wishs, loading, setLoading, form, setForm, setWishs } = useWishs();
  const [wishDetail, setWishDetail] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedWish = { ...form, id: wishDetail.id };
    setWishs((prev) =>
      prev.map((wish) => (wish.id === updatedWish.id ? updatedWish : wish))
    );
    setIsEditing(false);
  };

  useEffect(() => {
    setLoading(true);
    if (id && wishs.length > 0) {
      const foundWish = wishs.find((wish) => wish.id === Number.parseInt(id));
      setWishDetail(foundWish);
      setForm({
        name: foundWish.name,
        description: foundWish.description,
        urlImage: foundWish.urlImage,
        date: foundWish.date || "",
      });
    }
    setLoading(false);
  }, [wishs, id]);

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>⬅️ Voltar</button>
      <h1>Detalhes do desejo</h1>
      <button onClick={handleEditToggle}>✏️ Editar</button>
      {isEditing ? (
        <>
          <AddItemForm
            handleSubmit={handleUpdate}
            setForm={setForm}
            form={form}
          />
        </>
      ) : (
        <>
          <p>{wishDetail.name}</p>
          <p>{wishDetail.description}</p>
          <p>{formatDate(wishDetail.date)}</p>
          <img width={200} src={wishDetail.urlImage} alt={wishDetail.name} />
        </>
      )}
    </div>
  );
};
