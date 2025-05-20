import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1a1a3f] text-white w-full md:w-[50%] mx-auto rounded-full shadow-md z-20">
      <div className="flex items-center justify-between w-[100%] mx-auto px-4 md:px-8 py-4">
        <div className="text-xl font-bold tracking-wide">Matteo Piselli</div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-8 text-md font-light z-20">
          <li>
            <Link href="#skills" className="text-white hover:text-[#A1A1A1]">
              Stack Tech
            </Link>
          </li>
          <li>
            <Link href="#projects">Projets</Link>
          </li>
          <li>
            <Link href="#experiences">Expériences</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        {/* Burger menu - mobile only */}
        <button
          className="text-white md:hidden"
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
              <Link href="#skills" onClick={() => setIsOpen(false)}>
                Compétences
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setIsOpen(false)}>
                Projets
              </Link>
            </li>
            <li>
              <Link href="#experiences" onClick={() => setIsOpen(false)}>
                Expériences
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
