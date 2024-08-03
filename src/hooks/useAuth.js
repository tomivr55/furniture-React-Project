import { useContext } from "react";
import { login, register } from "../api/authAPI";
import { AuthenticationContext } from "../contexts/AuthContext";

export const useLogin = () => {
  const { changeAuthState } = useContext(AuthenticationContext);
  const loginHandler = async (email, password) => {
    const result = await login(email, password);
    changeAuthState(result);
    return result;
  };
  return loginHandler;
};

export const useRegister = () => {
  const { changeAuthState } = useContext(AuthenticationContext);
  const registerHandler = async (
    username,
    email,
    tel,
    avatar,
    password,
    rePassword
  ) => {
    const result = await register(
      username,
      email,
      tel,
      avatar,
      password,
      rePassword
    );
    changeAuthState(result);
    return result;
  };
  return registerHandler;
};
