import { useState } from "react";

export default function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    const auth = localStorage.getItem(key);

    if (!auth) {
      return typeof initialState === "function" ? initialState() : initialState;
    }

    const authData = JSON.parse(auth);
  });

  const updateState = (value) => {
    const newState = typeof value === "function" ? value(state) : value;
    localStorage.setItem(key, JSON.stringify(value));
    setState(newState);
  };

  return [state, updateState];
}
