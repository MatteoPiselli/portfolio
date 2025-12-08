// Next
import Image from "next/image";
// Components
import ParticlesBackground from "./Particles";
import NavBar from "./NavBar";
import Skills from "./Skills";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Home() {
  return (
    <>
      {/* ------------Background----------- */}
      <div className="relative bg-gradient-to-b min-h-screen w-full ">
        {/* --------- Navigation ---------- */}
        <div className="flex justify-center items-center mt-12">
          <NavBar />
          {/* ----------- Social Media Icons ------------*/}
          <div className="hidden md:block absolute right-20 z-20">
            <div className="flex items-center space-x-4">
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
              <ThemeToggle /> {/* Desktop version */}
            </div>
          </div>
        </div>

        {/* -------------About me------------ */}
        <div className="absolute z-10 inset-0 flex items-center justify-center px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full text-main">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold mt-8 md:mt-0 mb-8">
                Développeur Full Stack web et mobile 💻 📱
              </h1>
              <div className="text-lg font-light space-y-4">
                <p>👋🏻 Salut, moi c’est Matteo PISELLI.</p>
                <p>
                  👨🏻‍💻 Je conçois des applications modernes et performantes en
                  <br />
                  <span className="inline-flex items-center gap-1 bg-blue-400 text-main px-2 py-1 rounded-md text-sm font-medium">
                    React
                  </span>
                  ,{" "}
                  <span className="inline-flex items-center gap-1 bg-green-600 text-main px-2 py-1 rounded-md text-sm font-medium">
                    Node.js
                  </span>{" "}
                  et{" "}
                  <span className="inline-flex items-center gap-1 bg-green-500 text-main px-2 py-1 rounded-md text-sm font-medium">
                    MongoDB
                  </span>
                  .
                </p>
                <p>
                  🎯 Aujourd'hui, je recherche un CDI/Alternance pour m'investir
                  pleinement dans des projets ambitieux au sein d'une équipe.
                </p>
                <p>
                  🚀 À côté, j’exerce également en freelance, ce qui me permet
                  de renforcer mes compétences et de rester polyvalent.
                </p>
              </div>
            </div>
            {/* -----------Picture---------- */}
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden relative shadow-lg">
              <Image
                src="/portrait.jpg"
                alt="photo-portrait"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Other components */}
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
      <ScrollToTop className="hidden md:block" />

      {/* Footer */}
      <Footer />

      {/* Particles background */}
      <ParticlesBackground />
    </>
  );
}
