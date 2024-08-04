import { createContext } from "react";

export const AuthenticationContext = createContext({
  username: "",
  userId: "",
  email: "",
  accessToken: "",
  isAuthenticated: false,
  changeAuthState: (authState = {}) => null,
});

// only for help
