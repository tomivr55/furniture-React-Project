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
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/gm;
    const isMatch = Boolean(password.match(regex));

    if (password !== rePassword) {
      setError("Passwords do not match!");
      return;
    }
    if ((!username, !email, !tel, !avatar, !password, !rePassword)) {
      setError("All fields are required!");
      return;
    }
    if (!isMatch) {
      setError("Look at informatin");
      return;
    }

    try {
      await register(username, email, tel, avatar, password);

      navigate("/");
    } catch (error) {
      console.log(error);

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
          <div className={style.passwordRequirements}>
            <span className={style.tooltip}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z" />
              </svg>
              <span className={style.tooltiptext}>
                Passwords should be at least 7 characters long and include 1
                lowercase and one upercase alpha, 1 number and 1 special
                character.
              </span>
            </span>
          </div>
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
