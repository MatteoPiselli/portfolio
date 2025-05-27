import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ mobile = false }) => {
  const [theme, setTheme] = useState(() => {
    // Lecture initiale du thème depuis localStorage ou data-theme
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") ||
        document.documentElement.getAttribute("data-theme") ||
        "dark"
      );
    }
    return "dark";
  });

  // Synchronise le state si le thème change ailleurs (autre instance)
  useEffect(() => {
    const syncTheme = () => {
      const current =
        localStorage.getItem("theme") ||
        document.documentElement.getAttribute("data-theme") ||
        "dark";
      setTheme(current);
    };
    window.addEventListener("storage", syncTheme);
    // Pour le cas où data-theme change sans storage (ex: navigation responsive)
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => {
      window.removeEventListener("storage", syncTheme);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`bg-card text-main px-4 py-2 rounded shadow-card z-20 ${
        mobile ? "block md:hidden" : "hidden md:block"
      }`}
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
