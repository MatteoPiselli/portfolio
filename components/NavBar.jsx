import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`bg-nav text-main w-[90%] md:w-[50%] mx-auto shadow-md z-20 
      ${isOpen ? "rounded-t-2xl" : "rounded-full"}`} // si le menu mobile est ouvert arrondie seulement le haut
    >
      <div className="flex items-center justify-between w-[100%] mx-auto px-4 md:px-8 py-4">
        <div className="text-xl font-bold tracking-wide">Matteo PISELLI</div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-8 text-md font-light z-20">
          <li>
            <Link href="#skills" scroll={true}>
              <span className="cursor-pointer text-link text-link:hover">
                Stack Tech
              </span>
            </Link>
          </li>
          <li>
            <Link href="#projects" scroll={true}>
              <span className="cursor-pointer text-link text-link:hover">
                Projets
              </span>
            </Link>
          </li>
          <li>
            <Link href="#experiences" scroll={true}>
              <span className="cursor-pointer text-link text-link:hover">
                Expériences
              </span>
            </Link>
          </li>
          <li>
            <Link href="#contact" scroll={true}>
              <span className="cursor-pointer text-link text-link:hover">
                Contact
              </span>
            </Link>
          </li>
        </ul>

        {/* Burger menu - mobile only */}
        <button
          className="btn-color md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile (visible quand ouvert) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="relative w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute w-full bg-nav rounded-b-2xl shadow-md z-10"
                style={{ marginTop: "-1px" }} // pour coller parfaitement à la navbar
              >
                <ul className="flex flex-col ml-4 mr-4 mb-2 space-y-3 text-md font-light">
                  <li>
                    <Link href="#skills" scroll={true}>
                      <span
                        onClick={() => setIsOpen(false)}
                        className="text-link text-link:hover"
                      >
                        Stack Tech
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#projects" scroll={true}>
                      <span
                        onClick={() => setIsOpen(false)}
                        className="text-link text-link:hover"
                      >
                        Projets
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#experiences" scroll={true}>
                      <span
                        onClick={() => setIsOpen(false)}
                        className="text-link text-link:hover"
                      >
                        Expériences
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" scroll={true}>
                      <span
                        onClick={() => setIsOpen(false)}
                        className="text-link text-link:hover"
                      >
                        Contact
                      </span>
                    </Link>
                  </li>
                  <div className="flex items-center border-t pt-2 space-x-4">
                    <a
                      href="https://github.com/MatteoPiselli"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon icon:hover text-2xl cursor-pointer">
                        <FaGithub />
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/matteo-piselli/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon icon:hover text-2xl cursor-pointer">
                        <FaLinkedin />
                      </span>
                    </a>
                    <div className="absolute right-4">
                      <ThemeToggle mobile />
                    </div>
                  </div>
                </ul>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
