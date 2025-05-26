import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaGlobe, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Unimap+",
    image: "/projets/unimap-black.png",
    repo_front: "https://github.com/Myl-W/Unimap-frontend",
    repo_back: "https://github.com/Myl-W/Unimap-backend",
    url: null,
    details: [
      "UniMap+ est une application mobile réalisée en 10 jours dans le cadre d’un projet de fin de batch par une équipe de quatre développeurs, dédiée à l'amélioration de l’accessibilité urbaine pour tous :",
      "Personnes en situation de handicap (visuel, auditif, moteur ou cognitif), seniors, parents avec poussette, mais aussi professionnels de santé et aidants.",
      "Elle propose une carte interactive, la gestion de signalements, la prise de photos géolocalisées, ainsi que d'autres fonctionnalités pensées pour faciliter les déplacements et la navigation en milieu urbain.",
      "UniMap+ repose sur une communauté d'utilisateurs : chacun peut signaler des obstacles, recommander des lieux accessibles ou partager des informations utiles.",
      "Ensemble, nous construisons une ville plus inclusive, par et pour ses usagers.",
    ],
    developpeurs: [
      {
        name: "Matteo",
        linkedin: "https://www.linkedin.com/in/matteo-piselli/",
      },
      {
        name: "Mylène",
        linkedin: "https://www.linkedin.com/in/mylène-wan-56665512a/",
      },
      {
        name: "Salim",
        linkedin: "https://www.linkedin.com/in/salim-bouras-63a2492b7/",
      },
      {
        name: "Karel",
        linkedin: "https://www.linkedin.com/in/karel-buet-185a57331/",
      },
    ],
    stacks: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "MongoDB",
      "API Google",
    ],
    date: "2025",
  },
  {
    title: "Portfolio v2",
    image: "/projets/portfolio-v2.png",
    repo: "https://github.com/MatteoPiselli/portfolio",
    url: "https://portfolio-matteo-pisellis-projects.vercel.app/",
    details: [
      "Mon portfolio actuel, entièrement refait.",
      "Ce projet met en avant mes compétences, mes projets et mes expériences professionnelles via une interface moderne, responsive et animée.",
    ],
    stacks: ["Next.js", "Tailwind CSS", "Framer Motion"],
    date: "2025",
  },
  {
    title: "Riot API",
    image: "/projets/riot-api.png",
    repo: "https://github.com/MatteoPiselli/riot-api",
    url: null,
    details: [
      "En cours de développement...",
      "Projet de recherche de joueurs basé sur l'API League of Legends, inspiré d'OP.GG.",
    ],
    stacks: ["React", "Node.js", "Express.js", "API Riot Games"],
    date: "2025",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  // Empêche le scroll du body quand la modale est ouverte
  useEffect(() => {
    if (selected !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Nettoyage au démontage
    return () => document.body.classList.remove("overflow-hidden");
  }, [selected]);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-[#232526] text-white py-16 px-4"
    >
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-bold text-2xl md:text-4xl mb-8">Projets</h2>
        <p className="text-lg text-center text-[#B4B4B4]">
          Des projets réalisés pour mettre en pratique mes compétences. Cliquez
          sur "Learn more" pour en savoir plus
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row md:justify-center z-10 gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative bg-[#191919] rounded-2xl shadow-lg overflow-hidden w-full md:w-80 flex flex-col"
          >
            {/* Image du projet */}
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={350}
              className="object-cover w-full bg-[#313131] h-48"
            />
            {/* Contenu du projet */}
            <div className="flex-1 flex flex-col p-6 min-h-0">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 pt-2 pb-8 flex-1 h-full items-start">
                {project.stacks.map((stack) => (
                  <span
                    key={stack}
                    className="bg-[#414345] text-xs px-2 py-1 rounded-full text-[#EEEEEE] font-semibold"
                  >
                    {stack}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                {/* ---------- Repo front ------------*/}
                {project.repo_front && (
                  <a
                    href={project.repo_front}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Voir le code Frontend sur GitHub"
                    className="hover:text-[#7B7B7B] transition"
                  >
                    <FaGithub size={22} />
                  </a>
                )}
                {/* ---------- Repo back ------------*/}
                {project.repo_back && (
                  <a
                    href={project.repo_back}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Voir le code Backend sur GitHub"
                    className="hover:text-[#7B7B7B] transition"
                  >
                    <FaGithub size={22} />
                  </a>
                )}
                {/* ---------- Repo général ------------*/}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Voir le code sur GitHub"
                    className="hover:text-[#7B7B7B] transition"
                  >
                    <FaGithub size={22} />
                  </a>
                )}
                {/* ---------- Lien vers le site ou la démo ------------*/}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Voir le site"
                    className="hover:text-[#7B7B7B] transition"
                  >
                    <FaGlobe size={22} />
                  </a>
                )}
                {/* ---------- Learn more ------------*/}
                <button
                  onClick={() => setSelected(idx)}
                  className="ml-auto flex items-center gap-1 text-sm bg-[#414345] hover:bg-[#2A2A2A] px-3 py-1 rounded-full transition"
                >
                  <span>Learn more</span>
                  <FaExternalLinkAlt size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up modal */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-[#191919] rounded-2xl shadow-2xl p-8 max-w-lg w-[90vw] max-h-[90vh] animate-fade-in overflow-y-auto scrollbar scrollbar-thumb-gray-600 scrollbar-track-transparent scrollbar-thin">
            {/* Bouton de fermeture */}
            <button
              className="absolute top-4 right-4 text-[#B4B4B4] hover:text-white"
              onClick={() => setSelected(null)}
              aria-label="Fermer"
            >
              <FaTimes size={22} />
            </button>

            {/* -------- Titre + Image du projet ---------*/}
            <h3 className="text-2xl font-bold mb-4">
              {projects[selected].title}
            </h3>

            <Image
              src={projects[selected].image}
              alt={projects[selected].title}
              width={600}
              height={350}
              className="object-cover bg-[#313131] rounded-lg"
            />

            {/* ----------- Description du projet scrollable---------------*/}

            {/* ------ Developpeurs ------*/}
            {projects[selected].developpeurs && (
              <div className="mt-2">
                <u>Développeurs</u> :
                {projects[selected].developpeurs.map((dev) => (
                  <a
                    key={dev.name}
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A66C2] hover:underline font-medium m-2 gap-1"
                  >
                    {dev.name}
                  </a>
                ))}
              </div>
            )}

            {/* ------ Paragraphe ------*/}
            <div className="mt-4 mb-4 overflow-y-auto max-h-[40vh] scrollbar scrollbar-thumb-gray-600 scrollbar-track-transparent scrollbar-thin pr-2">
              {projects[selected].details.map((paragraph, index) => (
                <p key={index} className="mt-4 mb-4 ">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Container parent en relative pour la date en md:absolute */}
            <div className="relative flex flex-wrap gap-4 items-center">
              {/* Liens */}
              {projects[selected].repo_front && (
                <a
                  href={projects[selected].repo_front}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#232526] px-4 py-2 rounded-full hover:bg-[#414345] transition"
                >
                  <FaGithub /> Front
                </a>
              )}
              {projects[selected].repo_back && (
                <a
                  href={projects[selected].repo_back}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#232526] px-4 py-2 rounded-full hover:bg-[#414345] transition"
                >
                  <FaGithub /> Back
                </a>
              )}
              {projects[selected].repo && (
                <a
                  href={projects[selected].repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#232526] px-4 py-2 rounded-full hover:bg-[#414345] transition"
                >
                  <FaGithub /> Code
                </a>
              )}
              {projects[selected].url && (
                <a
                  href={projects[selected].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#232526] px-4 py-2 rounded-full hover:bg-[#414345] transition"
                >
                  <FaGlobe /> Site
                </a>
              )}
              {projects[selected].date && (
                <div
                  className="flex items-center gap-2 bg-[#232526] px-4 py-2 rounded-full hover:bg-[#414345] transition md:absolute md:right-0"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {projects[selected].date}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
