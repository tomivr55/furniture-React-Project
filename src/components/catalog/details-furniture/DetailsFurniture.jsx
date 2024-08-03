import { useGetOneFurniture } from "../../../hooks/useFurniture";
import style from "./DetailsFurniture.module.css";
import { useParams } from "react-router-dom";

export default function DetailsFurniture() {
  const { furnitureId } = useParams();
  const [furniture, setFurniture] = useGetOneFurniture(furnitureId);

  return (
    <div className={style.detailsContent}>
      <div className={style.furnitureDetails}>
        <h1 className={style.detailsTitle}>{furniture.name}</h1>

        <div className={style.detailInfo}>
          <div className={style.detailsText}>
            <p className={style.whd}>Height: {furniture.height} </p>
            <p className={style.whd}>Width: {furniture.width}</p>
            <p className={style.whd}>Deepth: {furniture.depth}</p>
            <p className={style.whd}>Made from: {furniture.material}</p>
          </div>
          <div className={style.line}></div>
          <div className={style.detailsPic}>
            <img
              className={style.detailsImg}
              src={furniture.imgUrl}
              alt={furniture.name}
            />
          </div>
        </div>
        <div className={style.detailsDescriotion}>
          <p className={style.whd}>Description: {furniture.description}</p>
        </div>
        <div className={style.detailsButtons}>
          <a className={style.button} href="">
            Edit
          </a>
          <a className={style.button} href="">
            Delete
          </a>
        </div>
        <div className={style.furnitureComment}>
          <hr />
          <p className={style.whd}>Pesho: mnogo gotino</p>
          <p className={style.whd}>Pesho: mnogo gotino</p>
          <p className={style.whd}>Pesho: mnogo gotino</p>
        </div>
      </div>
      <div className={style.furnitureDetails}>
        <h1 className={style.detailsTitle}>Add comments</h1>
        <form>
          <textarea name="comment" placeholder="Comment......"></textarea>
          <button className={style.button} type="submit">
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
}

// name X
// width X
// height X
// depth X
// madeFrom X
// imgUrl X
// description
