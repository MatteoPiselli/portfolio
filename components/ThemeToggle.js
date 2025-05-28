import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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

  const isDark = theme === "dark";

  return (
    <div
      className={`${
        mobile ? "block md:hidden" : "hidden md:block"
      } z-20 flex items-center justify-center`}
    >
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="w-[80px] h-[40px] bg-main-inverse rounded-full p-2 flex items-center shadow-card transition-all relative"
        style={{
          justifyContent: isDark ? "flex-end" : "flex-start",
        }}
      >
        {/* Icône du thème opposé en fond */}
        <span className="absolute left-3 pointer-events-none opacity-20">
          <FaSun />
        </span>
        <span className="absolute right-3 pointer-events-none opacity-20">
          <FaMoon />
        </span>
        {/* Poignée coulissante avec l’icône du thème courant */}
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 50,
          }}
          className="w-[36px] h-[36px] bg-color rounded-full flex items-center justify-center text-main z-10"
        >
          {isDark ? <FaMoon /> : <FaSun />}
        </motion.div>
      </button>
    </div>
  );
};

export default ThemeToggle;
