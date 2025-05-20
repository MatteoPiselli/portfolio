import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1a1a3f] text-white w-full md:w-[50%] mx-auto border border-white rounded-full shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Nom */}
        <div className="text-xl font-bold tracking-wide">Matteo Piselli</div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-8 text-md font-light">
          <li>
            <Link
              href="#skills"
              className="hover:text-[#00bcd4] transition-colors duration-200"
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-[#00bcd4] transition-colors duration-200"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              href="#experiences"
              className="hover:text-[#00bcd4] transition-colors duration-200"
            >
              Expériences
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-[#00bcd4] transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Burger menu - mobile only */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile (visible quand ouvert) */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-3 text-md font-light">
            <li>
              <Link
                href="#skills"
                className="hover:text-[#00bcd4] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Compétences
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:text-[#00bcd4] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                href="#experiences"
                className="hover:text-[#00bcd4] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Expériences
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-[#00bcd4] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
