import style from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <form>
          <h1 className={style.title}>Login</h1>
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required=""
          />
          <button className={style.login}>Login</button>
        </form>
        <div className={style.info}>
          <p>
            If you don't have an account yet
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
