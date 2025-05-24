import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaGlobe, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "MyMoviz",
    image: "/projets/mymoviz.png",
    repo_front: "https://github.com/MatteoPiselli/mymoviz-frontend",
    repo_back: "https://github.com/MatteoPiselli/mymoviz-backend",
    url: "https://mymoviz-frontend-matteo-pisellis-projects.vercel.app/",
    description:
      "MyMoviz permet d’afficher les derniers films sortis, de créer une wishlist, de compter les vues et d’évaluer les films.",
    details:
      "Stack : React, Node.js et Express.js avec intégration d’API TMDB.",
  },
  {
    title: "Riot API",
    image: "/projets/riot-api.png",
    repo: "https://github.com/MatteoPiselli/riot-api",
    url: null,
    description:
      "Projet de recherche de joueurs basé sur l'API League of Legends, inspiré d'OP.GG.",
    details: "En cours de développement...",
  },
  {
    title: "Portfolio v1",
    image: "/projets/portfolio-v1.png",
    repo: "https://github.com/MatteoPiselli/react-portfolio",
    url: "https://matteopiselli.github.io/react-portfolio/",
    description:
      "Mon premier portfolio responsive, développé avec React.js et Tailwind CSS.",
    details:
      "Présentation de mon parcours, de mes projets et de mes compétences. Navigation fluide, animations CSS et responsive design.",
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
      </div>

      <div className="relative flex flex-col md:flex-row md:justify-center z-10 gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative bg-[#191919] rounded-2xl shadow-lg overflow-hidden w-full md:w-80 flex flex-col"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={350}
              className="object-cover w-full h-48"
            />
            <div className="flex-1 flex flex-col p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-[#B4B4B4] h-full mb-4">
                {project.description}
              </p>
              <div className="flex items-center gap-4 mb-4">
                {/* ---------- Repo front et/ou repo unique ------------*/}
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
                <button
                  onClick={() => setSelected(idx)}
                  className="ml-auto flex items-center gap-1 text-sm bg-[#414345] hover:bg-[#2a2a5a] px-3 py-1 rounded-full transition"
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
          <div className="relative bg-[#191919] rounded-2xl shadow-2xl p-8 max-w-lg w-[90%] animate-fade-in">
            <button
              className="absolute top-4 right-4 text-[#B4B4B4] hover:text-white"
              onClick={() => setSelected(null)}
              aria-label="Fermer"
            >
              <FaTimes size={22} />
            </button>
            <h3 className="text-2xl font-bold mb-4">
              {projects[selected].title}
            </h3>
            <Image
              src={projects[selected].image}
              alt={projects[selected].title}
              width={600}
              height={350}
              className="object-cover w-full h-48 rounded-lg"
            />
            <p className="mt-4 mb-4">{projects[selected].details}</p>
            <div className="flex gap-4">
              {/* Repo front/back ou repo unique */}
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
