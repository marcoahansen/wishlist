import { useParams } from "react-router";

export const WishDetail = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Detalhes do desejo com o id: {id}</h1>
    </>
  );
};
