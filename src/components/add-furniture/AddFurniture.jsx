import style from "./AddFurniture.module.css";
import { Link } from "react-router-dom";

export default function AddFutniture() {
  return (
    <div className={style.container}>
      <form className={style.box}>
        <h1 className={style.addTitle}>Add Furniture</h1>
        <div className={style.main}>
          <div className={style.left}>
            <input type="text" name="name" placeholder="Name..." required="" />

            <input
              type="text"
              name="width"
              placeholder="Width..."
              required=""
            />
            <input
              type="text"
              name="height"
              placeholder="Height..."
              required=""
            />
            <input
              type="text"
              name="depth"
              placeholder="Depth..."
              required=""
            />
          </div>
          <div className={style.right}>
            <input
              type="text"
              name="material"
              placeholder="Made from..."
              required=""
            />
            <input
              type="text"
              name="imgUrl"
              placeholder="Upload a photo..."
              required=""
            />
            <textarea
              name="description"
              id="description"
              placeholder="Description...."
            ></textarea>
          </div>
        </div>
        <button>Add</button>
      </form>
      {/* <div className={style.info}>
          <p>
            If you already have an account <Link to="/login">Login</Link>
          </p>
        </div> */}
    </div>
  );
}
