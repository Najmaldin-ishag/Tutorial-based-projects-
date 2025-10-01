/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const darkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );
  function toggleDarkMode() {
    setIsDarkMode((darkMode) => !darkMode);
  }
  return (
    <darkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(darkModeContext);

  if (context === undefined) throw new Error("context used outside its scope");

  return context;
}

export { DarkModeProvider, useDarkMode };
