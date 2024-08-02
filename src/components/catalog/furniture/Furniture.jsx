import style from "./Furniture.module.css";
import { Link } from "react-router-dom";

export default function Furniture({ _id, name, material, imgUrl }) {
  return (
    <div className={style.card}>
      <div className={style.textSection}>
        <h1 className={style.postTitle}>{name}</h1>
        <p className={style.postText}>Made from: {material}</p>
        <Link to="/details" className={style.button}>
          Details
        </Link>
      </div>

      <div className={style.imageSection}>
        <img className={style.postPic} src={imgUrl} alt={name} />
      </div>
    </div>
  );
}
