import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`bg-[#222222] text-[#EEEEEE] w-[90%] md:w-[50%] mx-auto shadow-md z-20 
      ${isOpen ? "rounded-t-2xl" : "rounded-full"}`} // si le menu mobile est ouvert arrondie seulement le haut
    >
      <div className="flex items-center justify-between w-[100%] mx-auto px-4 md:px-8 py-4">
        <div className="text-xl font-bold tracking-wide">Matteo PISELLI</div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-8 text-md font-light z-20">
          <li>
            <Link href="#skills" scroll={true}>
              <span className="cursor-pointer hover:text-[#A1A1A1]">
                Stack Tech
              </span>
            </Link>
          </li>
          <li>
            <Link href="#projects" scroll={true}>
              <span className="cursor-pointer hover:text-[#A1A1A1]">
                Projets
              </span>
            </Link>
          </li>
          <li>
            <Link href="#experiences" scroll={true}>
              <span className="cursor-pointer hover:text-[#A1A1A1]">
                Expériences
              </span>
            </Link>
          </li>
          <li>
            <Link href="#contact" scroll={true}>
              <span className="cursor-pointer hover:text-[#A1A1A1]">
                Contact
              </span>
            </Link>
          </li>
        </ul>

        {/* Burger menu - mobile only */}
        <button
          className="text-[#EEEEEE] md:hidden"
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
                className="md:hidden absolute w-full bg-[#222222] rounded-b-2xl shadow-md z-10"
                style={{ marginTop: "-1px" }} // pour coller parfaitement à la navbar
              >
                <ul className="flex flex-col ml-4 space-y-3 mb-2 text-md font-light">
                  <li>
                    <Link href="#skills" scroll={true}>
                      <span
                        onClick={() => setIsOpen(false)}
                        className="text-[#EEEEEE] hover:text-[#A1A1A1]"
                      >
                        Stack Tech
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#projects" scroll={true}>
                      <span
                        onClick={() => setIsOpen(false)}
                        className="text-[#EEEEEE] hover:text-[#A1A1A1]"
                      >
                        Projets
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#experiences" scroll={true}>
                      <span
                        onClick={() => setIsOpen(false)}
                        className="text-[#EEEEEE] hover:text-[#A1A1A1]"
                      >
                        Expériences
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" scroll={true}>
                      <span
                        onClick={() => setIsOpen(false)}
                        className="text-[#EEEEEE] hover:text-[#A1A1A1]"
                      >
                        Contact
                      </span>
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
