import Head from "next/head";
import Image from "next/image";
import ParticlesBackground from "../components/Particles";
import Skills from "./Skills";
import Projects from "./Projects";
import Experiences from "./Experiences";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matteo Piselli - Portfolio</title>
        <meta
          name="description"
          content="Bienvenue sur mon portfolio ! Vous y découvrirez de nombreuses informations telles que mon parcours, mes projets et mes expériences."
        />
      </Head>

      <div className="relative w-screen h-screen bg-gradient-to-b from-[#0a0a23] via-[#1a1a3f] to-[#2a2a5a]">
        <div className="absolute z-10 inset-0 flex items-center justify-center px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl w-full text-white">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                👨🏻‍💻 Développeur Full-Stack Web & Mobile 💻 📱
              </h1>
              <p className="text-lg font-light">
                👋 Salut, moi c’est Matteo Piselli - Développeur Full-Stack Web
                & Mobile Js.
                <br />
                Je crée des applications web et mobiles modernes et
                performantes.
              </p>
            </div>
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

      <Skills />
      <Projects />
      <Experiences />
      <ParticlesBackground className="z-20" />
    </>
  );
}
