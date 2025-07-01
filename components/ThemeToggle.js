import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const ThemeToggle = ({ mobile = false }) => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  // Premier effet : marquer comme monté et initialiser le thème
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const dataTheme = document.documentElement.getAttribute("data-theme");
    const initialTheme = stored || dataTheme || "dark";
    setTheme(initialTheme);
  }, []);

  // Synchronise le state si le thème change ailleurs (autre instance)
  useEffect(() => {
    const current =
      localStorage.getItem("theme") ||
      document.documentElement.getAttribute("data-theme") ||
      "dark";

    // Ne met à jour que si le thème actuel est différent de celui en mémoire
    if (current !== theme) {
      setTheme(current);
    }

    const syncTheme = () => {
      const updated =
        localStorage.getItem("theme") ||
        document.documentElement.getAttribute("data-theme") ||
        "dark";
      setTheme((prev) => {
        // Ne met à jour que si différent de la valeur précédente
        return updated !== prev ? updated : prev;
      });
    };

    window.addEventListener("storage", syncTheme);

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      window.removeEventListener("storage", syncTheme);
      observer.disconnect();
    };
  }, [theme]);

  useEffect(() => {
    // Ne pas sauvegarder lors de l'initialisation
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const isDark = theme === "dark";

  // Ne pas afficher tant que le composant n'est pas monté (évite l'hydratation mismatch)
  if (!mounted) {
    return null;
  }

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
