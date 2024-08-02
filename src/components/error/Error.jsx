import style from "./Error.module.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className={style.errorContent}>
      <div>
        <img src="/404.png" alt="Crash" />
      </div>
      <div className={style.errorText}>
        <h1 className={style.errorTitle}>404</h1>
        <p className={style.errorMessage}>
          Page not found. Go to{" "}
          <Link className={style.link} to="/">
            home
          </Link>
        </p>
      </div>
    </div>
  );
}
