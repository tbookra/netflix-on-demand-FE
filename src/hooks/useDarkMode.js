import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    let localType = localStorage.getItem("themeType");
    setTheme({
      palette: {
        type: localType || "light",
      },
    });
  }, []);

  const toggleDarkMode = () => {
    const {
      palette: { type },
    } = theme;
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? "dark" : "light",
      },
    };
    localStorage.setItem("themeType", updatedTheme.palette.type);
    setTheme(updatedTheme);
  };
  return [theme, toggleDarkMode];
};

export default useDarkMode;
