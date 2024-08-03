import { createContext } from "react";

export const AuthenticationContext = createContext({
  userId: "",
  email: "",
  accessToken: "",
  isAuthenticated: false,
  changeAuthState: (authState = {}) => null,
});

// only for help
