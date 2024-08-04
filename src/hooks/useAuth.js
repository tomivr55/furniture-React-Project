import { useContext } from "react";
import { login, register } from "../api/authAPI";
import { AuthenticationContext } from "../contexts/AuthContext";

export const useLogin = () => {
  const { changeAuthState } = useContext(AuthenticationContext);
  const loginHandler = async (email, password) => {
    const { password: _, ...authData } = await login(email, password);
    changeAuthState(authData);
    return authData;
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
    const { password: _, ...authData } = await register(
      username,
      email,
      tel,
      avatar,
      password,
      rePassword
    );
    changeAuthState(authData);
    return authData;
  };
  return registerHandler;
};
