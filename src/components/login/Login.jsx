import { useState } from "react";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [error, setError] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };
  const login = useLogin();
  const navigate = useNavigate();

  const loginHandler = async ({ email, password }) => {
    if ((!email, !password)) {
      setError("All fields are required!");
      return;
    }
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const { formValues, changeHandler, submitHandler } = useForm(
    initialValues,
    loginHandler
  );

  return (
    <div className={style.container}>
      <div className={style.box}>
        <form onSubmit={submitHandler}>
          <h1 className={style.title}>Login</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={changeHandler}
          />
          <button className={style.login}>Login</button>
        </form>
        <div className={style.info}>
          {error && <p className={style.error}>{error}</p>}
          <p>
            If you don't have an account yet
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
