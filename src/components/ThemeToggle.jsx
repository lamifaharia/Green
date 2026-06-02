import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <button
      className="btn btn-outline"
      onClick={() => setTheme(theme === "light" ? "forest" : "light")}
    >
      Theme
    </button>
  );
};

export default ThemeToggle;