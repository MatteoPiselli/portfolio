// Next
import Head from "next/head";
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
      <Head>
        <title>Matteo PISELLI - Portfolio</title>
        <meta
          name="description"
          content="Bienvenue sur mon portfolio ! Vous y découvrirez de nombreuses informations telles que mon parcours, mes projets et mes expériences."
        />
      </Head>

      {/* ------------Background----------- */}
      <div className="relative bg-gradient-to-b min-h-screen w-full ">
        {/* --------- Navigation ---------- */}
        <div className="flex justify-center items-center mt-12">
          <NavBar />
          <ThemeToggle />
          {/* ----------- Social Media Icons ------------*/}
          <div className="absolute right-20 z-20">
            <div className="flex space-x-4">
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
            </div>
          </div>
        </div>

        {/* -------------About me------------ */}
        <div className="absolute z-10 inset-0 flex items-center justify-center px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full text-main">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                Développeur Full-Stack Web & Mobile 💻 📱
              </h1>
              <p className="text-lg font-light">
                👋 Salut, moi c’est Matteo PISELLI - Développeur Full-Stack Web
                & Mobile Js.
                <br />
                Je crée des applications web et mobiles modernes et
                performantes.
              </p>
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
