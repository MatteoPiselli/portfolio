import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton({ className = "" }) {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Fonction qui montre ou cache le bouton en fonction de la position de défilement
  const toggleVisibility = () => {
    window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    // Ajouter un écouteur d'événement pour détecter le défilement
    window.addEventListener("scroll", toggleVisibility);

    // Nettoyer l'écouteur lors du démontage du composant
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className={`${className} fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-gradient-to-b text-main p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-10 `}
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    )
  );
}
