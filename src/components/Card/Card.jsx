import { useNavigate } from "react-router";
import styles from "./Card.module.css";
import { formatDate } from "../../utils/formatDate";

export const Card = ({ name, description, image, date, id, onDelete }) => {
  const formatedDate = formatDate(date);
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.description}>{formatedDate}</p>
        </div>
        <div className={styles.btnContainer}>
          <button
            className={styles.detalhes}
            onClick={() => navigate(`wish/${id}`)}
          >
            Detalhes
          </button>
        </div>
      </div>
      <button className={styles.delete} onClick={onDelete}>
        🗑️
      </button>
    </div>
  );
};
