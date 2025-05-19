import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#1a1a3f] text-white w-[50%] mx-auto border border-white rounded-full shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wide">Matteo Piselli</div>

        <ul className="flex space-x-8 text-md font-light">
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
      </div>
    </nav>
  );
}
