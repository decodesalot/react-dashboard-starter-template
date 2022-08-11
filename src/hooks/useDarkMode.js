import { useEffect } from "react";
import { useLocalStorage } from "./useStorage";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
