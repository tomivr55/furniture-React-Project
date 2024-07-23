import style from "./Login.module.css";

export default function Login() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <form>
          <label>Login</label>
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <button>Login</button>
        </form>
        <div className={style.info}>
          <p>
            If you don't have an account yet
            <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
