import style from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.text}>
          <h1 className={style.mainTitle}>
            COMMERCIAL ADVICE ON FURNITURE THAT WILL SUIT YOUR HOME, GARDEN AND
            WORKPLACE
          </h1>
          <hr></hr>
          <p>
            Furniture is an integral part of any interior - it informs the
            design and creates the environment within the workplace.
          </p>
          <p>
            If you want to show your furniture, please
            <Link className={style.link} to={"/login"}>
              Login.
            </Link>
          </p>
        </div>
        <div>
          <img className={style.homePic} src="/home1.png" alt="pic" />
        </div>
      </div>
    </>
  );
}
