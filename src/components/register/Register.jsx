import style from "./Register.module.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <form>
          <label>Register</label>
          <input type="text" name="txt" placeholder="User name" required="" />
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required=""
          />
          <input
            type="password"
            name="rePassword"
            placeholder="Repeat password"
            required=""
          />
          <input type="tel" name="tel" placeholder="Phone number" required="" />
          <button>Register</button>
        </form>
        <div className={style.info}>
          <p>
            If you already have an account <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
