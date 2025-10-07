// Next
import Link from "next/link";
// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-body text-main border-t py-8 z-10">
      <div className="container mx-auto px-4 mt-4 flex flex-col md:flex-row justify-between items-center">
        {/* Informations de contact */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Matteo PISELLI</h2>
          <p>Développeur Full Stack Web & Mobile</p>
          <p>
            Email:{" "}
            <a
              href="mailto:pro.matteo.piselli@gmail.com"
              className="text-blue-400"
            >
              pro.matteo.piselli@gmail.com
            </a>
          </p>
          <p>Téléphone: +33 6 48 35 73 19</p>
        </div>

        {/* Liens de réseaux sociaux */}
        <div className="flex space-x-6">
          <Link href="https://github.com/MatteoPiselli">
            <span className="text-main hover:text-[#A1A1A1] text-2xl cursor-pointer">
              <FaGithub />
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/matteo-piselli/">
            <span className="text-main hover:text-[#A1A1A1] text-2xl cursor-pointer">
              <FaLinkedin />
            </span>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 md:mt-0">
          <p>© {new Date().getFullYear()} Matteo PISELLI.</p>
        </div>
      </div>
    </footer>
  );
}
