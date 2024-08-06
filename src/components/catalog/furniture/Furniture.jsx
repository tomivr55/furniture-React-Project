import { formatDate } from "../../../utils/dateUtil";
import style from "./Furniture.module.css";
import { Link } from "react-router-dom";

export default function Furniture({ _id, name, material, imgUrl, _createdOn }) {
  return (
    <div className={style.card}>
      <div className={style.textSection}>
        <h1 className={style.postTitle}>{name}</h1>
        <p className={style.postText}>Create on: {formatDate(_createdOn)}</p>
        <p className={style.postText}>Made from: {material}</p>
        <Link to={`/catalog/${_id}`} className={style.button}>
          Details
        </Link>
      </div>

      <div className={style.imageSection}>
        <img className={style.postPic} src={imgUrl} alt={name} />
      </div>
    </div>
  );
}
