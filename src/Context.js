import { createContext, useReducer, useEffect } from "react";

export const themeContext = createContext();

const initialState = {
  darkMode: false,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      const newDarkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode)); // Save to local storage
      return { darkMode: newDarkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const savedDarkMode =
    JSON.parse(localStorage.getItem("darkMode")) || initialState.darkMode;

  const [state, dispatch] = useReducer(themeReducer, {
    darkMode: savedDarkMode,
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(state.darkMode)); // Update local storage on component mount
  }, [state.darkMode]);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
