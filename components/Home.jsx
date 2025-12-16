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
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
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
              <h1 className="text-2xl md:text-3xl font-bold mt-16 md:mt-0 mb-4">
                Développeur Full Stack <br className="md:hidden" />
                <span style={{ color: "#00ED64" }}>M</span>
                <span style={{ color: "#444" }}>E</span>
                <span style={{ color: "#61DAFB" }}>R</span>
                <span style={{ color: "#339933" }}>N</span> 💻 📱
              </h1>
              <div className="text-lg font-thin space-y-4">
                <p className="italic">
                  Je crée des applications web et mobiles avec{" "}
                  <span className="font-bold" style={{ color: "#00ED64" }}>
                    M
                  </span>
                  ongoDB,{" "}
                  <span className="font-bold" style={{ color: "#444" }}>
                    E
                  </span>
                  xpress.js,{" "}
                  <span className="font-bold" style={{ color: "#61DAFB" }}>
                    R
                  </span>
                  eact et{" "}
                  <span className="font-bold" style={{ color: "#339933" }}>
                    N
                  </span>
                  ode.js.
                </p>
                <p>
                  Spécialisé dans la stack{" "}
                  <span className="font-bold">MERN</span>, je développe des
                  applications performantes, modernes et évolutives.
                </p>
                <p>
                  Que ce soit pour un <span className="font-bold">MVP</span>,
                  une application <span className="font-bold">SaaS</span> ou une
                  solution <span className="font-bold">sur mesure</span>, je
                  m'attache à livrer du code propre, maintenable et scalable.
                </p>
              </div>
            </div>
            {/* -----------Picture---------- */}
            <div className="relative w-[280px] h-[280px] flex items-center justify-center">
              {/* Orbiting icons */}
              <div className="absolute inset-0 animate-spin-slow">
                {/* MongoDB - Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-spin-reverse">
                    <SiMongodb
                      className="text-4xl"
                      style={{ color: "#00ED64" }}
                    />
                  </div>
                </div>
                {/* Express - Right */}
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                  <div className="animate-spin-reverse">
                    <SiExpress className="text-4xl" style={{ color: "#444" }} />
                  </div>
                </div>
                {/* React - Bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="animate-spin-reverse">
                    <SiReact
                      className="text-4xl"
                      style={{ color: "#61DAFB" }}
                    />
                  </div>
                </div>
                {/* Node.js - Left */}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-spin-reverse">
                    <SiNodedotjs
                      className="text-4xl"
                      style={{ color: "#339933" }}
                    />
                  </div>
                </div>
              </div>
              {/* Profile picture */}
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden relative shadow-lg z-10">
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
