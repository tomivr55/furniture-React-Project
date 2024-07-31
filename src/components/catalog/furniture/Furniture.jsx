import style from "./Furniture.module.css";

export default function Furniture() {
  return (
    <div className={style.card}>
      <div className={style.textSection}>
        <h1 className={style.postTitle}>MILLERKNOLL MILLERKNOL</h1>
        <p className={style.postText}>Made from:</p>
        <a href="#" className={style.button}>
          Details
        </a>
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
