import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthenticationContext = createContext({
  username: "",
  userId: "",
  email: "",
  accessToken: "",
  isAuthenticated: false,
  changeAuthState: (authState = {}) => null,
  logout: () => null,
});

export function AuthenticationContextProvider(props) {
  const [authState, setAuthState] = usePersistedState("authenticate", {});

  const changeAuthState = (state) => {
    setAuthState(state);
  };

  const logout = () => {
    setAuthState(null);
  };

  const contextData = {
    username: authState?.username,
    userId: authState?._id,
    email: authState?.email,
    accessToken: authState?.accessToken,
    isAuthenticated: !!authState?.email,
    changeAuthState,
    logout,
  };

  return (
    <AuthenticationContext.Provider value={contextData}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}
