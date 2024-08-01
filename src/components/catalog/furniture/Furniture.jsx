import style from "./Furniture.module.css";
import { Link } from "react-router-dom";

export default function Furniture() {
  return (
    <div className={style.card}>
      <div className={style.textSection}>
        <h1 className={style.postTitle}>MILLERKNOLL MILLERKNOL</h1>
        <p className={style.postText}>Made from:</p>
        <Link to="/details" className={style.button}>
          Details
        </Link>
      </div>

      <div className={style.imageSection}>
        <img
          className={style.postPic}
          src="https://www.raftfurniture.co.uk/media/catalog/product/cache/0138abd0fcf6edc9284837bfb46ecd61/s/o/sol-chair-45x45x85cm-nt-1.0_2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
