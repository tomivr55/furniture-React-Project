import { useState } from "react";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import style from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [error, setError] = useState("");

  const initialValues = {
    username: "",
    email: "",
    tel: "",
    avatar: "",
    password: "",
    rePassword: "",
  };

  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async ({
    username,
    email,
    tel,
    avatar,
    password,
    rePassword,
  }) => {
    if (password !== rePassword) {
      setError("Passwords do not match!");
      return;
    }
    if ((!username, !email, !tel, !avatar, !password, !rePassword)) {
      setError("All fields are required!");
      return;
    }
    if (password.length <= 6) {
      setError("Password must contain at least 6 characters!");
      return;
    }

    try {
      await register(username, email, tel, avatar, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const { formValues, changeHandler, submitHandler } = useForm(
    initialValues,
    registerHandler
  );

  return (
    <div className={style.container}>
      <div className={style.box}>
        <form onSubmit={submitHandler}>
          <h1 className={style.title}>Register</h1>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={changeHandler}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="tel"
            placeholder="Phone number"
            value={formValues.tel}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="avatar"
            placeholder="Image URL"
            value={formValues.avatar}
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={changeHandler}
          />
          <input
            type="password"
            name="rePassword"
            placeholder="Repeat password"
            value={formValues.rePassword}
            onChange={changeHandler}
          />
          <button className={style.register}>Register</button>
        </form>
        <div className={style.info}>
          {error && <p className={style.error}>{error}</p>}
          <p>
            If you already have an account <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
