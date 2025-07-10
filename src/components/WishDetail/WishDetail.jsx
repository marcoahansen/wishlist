import { useNavigate, useParams } from "react-router";
import { useWishs } from "../../hooks/useWishs";
import { useEffect, useState } from "react";

export const WishDetail = () => {
  const { id } = useParams();
  const { wishs, loading, setLoading } = useWishs();
  const [wishDetail, setWishDetail] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (id && wishs.length > 0) {
      const foundWish = wishs.find((wish) => wish.id === Number.parseInt(id));
      setWishDetail(foundWish);
    }
    setLoading(false);
  }, [wishs, id]);

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>⬅️ Voltar</button>
      <h1>Detalhes do desejo</h1>
      <p>{wishDetail.name}</p>
      <p>{wishDetail.description}</p>
      <img width={200} src={wishDetail.urlImage} alt={wishDetail.name} />
    </div>
  );
};
