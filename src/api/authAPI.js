import environment from "../environments/environment";
import * as request from "./mainRequester";

const USER_URL = environment.apiUrlUsers;

export const login = async (email, password) => {
  const dataToSend = { email, password };
  const authData = await request.post(`${USER_URL}/login`, dataToSend);
  return authData;
};

export const register = async (
  username,
  email,
  tel,
  avatar,
  password,
  rePassword
) => {
  const dataToSend = { username, email, tel, avatar, password, rePassword };
  const authData = await request.post(`${USER_URL}/register`, dataToSend);
  return authData;
};

export const loggedInUser = async () => {
  const userData = await request.get(`${USER_URL}/me`);
  return userData;
};

export const logout = () => {
  request.get(`${USER_URL}/logout`);
};
