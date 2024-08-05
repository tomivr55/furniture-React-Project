import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthenticationContext = createContext({
  username: "",
  userId: "",
  email: "",
  accessToken: "",
  isAuthenticated: false,
  changeAuthState: (authState = {}) => null,
});

export function AuthenticationContextProvider(props) {
  const [authState, setAuthState] = usePersistedState("authenticate", {});

  const changeAuthState = (state) => {
    localStorage.setItem("accessToken", state.accessToken);
    setAuthState(state);
  };

  const contextData = {
    username: authState?.username,
    userId: authState?._id,
    email: authState?.email,
    accessToken: authState?.accessToken,
    isAuthenticated: !!authState?.email,
    changeAuthState,
  };

  return (
    <AuthenticationContext.Provider value={contextData}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}
