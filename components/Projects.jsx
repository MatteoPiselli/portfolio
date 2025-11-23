import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaGlobe, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "SummonerFinder.gg",
    image: "/projets/summoner-finder.png",
    repo_front: "https://github.com/MatteoPiselli/leagueoflegends-api-frontend",
    repo_back: "https://github.com/MatteoPiselli/leagueoflegends-api-backend",
    url: "https://leagueoflegends-api-frontend.vercel.app/",
    details: [
      "Application web permettant de rechercher des profils de joueurs League of Legends.",
      "- Recherche par username et tagline avec affichage dynamique des statistiques de jeu.",
      "- Développement d’une API REST en Node.js/Express pour interagir avec l’API de Riot Games et mise en cache MongoDB.",
      "- Création de l'interface utilisateur en Next.js, Tailwind CSS, React Context et hooks personnalisés pour la gestion des données.",
    ],
    stacks: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Jest",
      "Riot Games API",
    ],
    date: "2025",
  },
  {
    title: "Unimap+",
    image: "/projets/unimap.png",
    repo_front: "https://github.com/Myl-W/Unimap-frontend",
    repo_back: "https://github.com/Myl-W/Unimap-backend",
    url: null,
    details: [
      "Application mobile collaborative dédiée à l’accessibilité des lieux publics.",
      "- Interface développée en React Native/Expo, intégration de Google Maps.",
      "- Authentification sécurisée avec JWT, API REST en Node.js/Express.js.",
      "- Stockage des signalements et des données utilisateurs dans MongoDB.",
      "- Projet mené en méthodologie Agile, travail en équipe avec répartition claire des rôles, une communication continue, et l’utilisation de Git pour la gestion de version.",
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
      "Google Maps API",
    ],
    date: "2025",
  },
  {
    title: "Portfolio v2",
    image_light: "/projets/portfolio-v2-white.png",
    image_dark: "/projets/portfolio-v2-black.png",
    repo: "https://github.com/MatteoPiselli/portfolio",
    url: "https://matteopiselli.dev",
    details: [
      "Application web responsive mettant en avant mes compétences, projets et expériences professionnelles.",
      "- Interface moderne, responsive et animée en Next.js et Tailwind CSS.",
      "- Implémentation d'un dark/light mode",
      "- Formulaire de contact avec Formspree, validation côté client avec des regex.",
    ],
    stacks: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Formspree",
      "particles.js",
    ],
    date: "2025",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [theme, setTheme] = useState("light");

  // Détection du thème (light ou dark)
  useEffect(() => {
    const getTheme = () =>
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(getTheme());
    const observer = new MutationObserver(() => setTheme(getTheme()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

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
      className="relative w-full min-h-screen bg-color text-main py-16 px-4"
    >
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-bold text-2xl md:text-4xl mb-8">Projets</h2>
        <p className="text-lg text-center text-secondary">
          Des projets réalisés pour mettre en pratique mes compétences.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row md:justify-center z-10 gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative bg-card rounded-2xl shadow-lg overflow-hidden w-full md:w-80 flex flex-col"
          >
            {/* Image du projet */}
            <Image
              src={
                project.title === "Portfolio v2"
                  ? theme === "light"
                    ? project.image_light
                    : project.image_dark
                  : project.image
              }
              alt={project.title}
              width={700}
              height={350}
              className="object-cover w-full bg-main-inverse h-48"
            />
            {/* Contenu du projet */}
            <div className="flex-1 flex flex-col p-4 min-h-0">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 pt-2 pb-8 h-full items-start">
                {project.stacks.map((stack) => (
                  <span
                    key={stack}
                    className="bg-badge text-xs px-2 py-1 rounded-full text-main font-semibold"
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
                  className="ml-auto flex items-center gap-1 text-sm bg-learn bg-learn:hover px-3 py-1 rounded-full transition"
                >
                  <span>En savoir plus</span>
                  <FaExternalLinkAlt size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up modal */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="relative bg-card rounded-2xl shadow-2xl p-4 md:p-8 max-w-lg w-full max-h-[95vh] md:max-h-[90vh] animate-fade-in overflow-y-auto scrollbar scrollbar-thumb-gray-600 scrollbar-track-transparent scrollbar-thin">
            {/* Bouton de fermeture */}
            <button
              className="absolute top-3 right-3 md:top-4 md:right-4 text-secondary hover:text-main transition z-10"
              onClick={() => setSelected(null)}
              aria-label="Fermer"
            >
              <FaTimes size={20} />
            </button>

            {/* -------- Titre + Image du projet ---------*/}
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 pr-8">
              {projects[selected].title}
            </h3>

            <div className="relative overflow-hidden rounded-lg leading-[0]">
              <Image
                src={
                  projects[selected].title === "Portfolio v2"
                    ? theme === "dark"
                      ? projects[selected].image_dark
                      : projects[selected].image_light
                    : projects[selected].image
                }
                alt={projects[selected].title}
                width={700}
                height={350}
                className="object-cover bg-main-inverse w-full"
              />
              {projects[selected].title === "SummonerFinder.gg" && (
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2 md:p-4">
                  <div className="text-center px-2 md:px-4">
                    <p className="text-white text-sm md:text-base font-semibold mb-1 md:mb-2">
                      ⚠️ Site non responsive ⚠️
                    </p>
                    <p className="text-gray-300 text-xs md:text-base">
                      Pour une expérience optimale, veuillez consulter ce site
                      sur ordinateur.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* ----------- Description du projet scrollable---------------*/}

            {/* ------ Developpeurs ------*/}
            {projects[selected].developpeurs && (
              <div className="mt-3 md:mt-4 text-sm md:text-base">
                <u>Développeurs</u> :
                {projects[selected].developpeurs.map((dev) => (
                  <a
                    key={dev.name}
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A66C2] hover:underline font-medium m-1 md:m-2"
                  >
                    {dev.name}
                  </a>
                ))}
              </div>
            )}

            {/* ------ Paragraphe ------*/}
            <div className="mt-3 md:mt-4 mb-3 md:mb-4 overflow-y-auto max-h-[35vh] md:max-h-[40vh] scrollbar scrollbar-thumb-gray-600 scrollbar-track-transparent scrollbar-thin pr-2 text-sm md:text-base">
              {projects[selected].details.map((paragraph, index) => (
                <p key={index} className="mt-2 md:mt-4 mb-2 md:mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Container parent en relative pour la date en md:absolute */}
            <div className="relative flex flex-wrap gap-2 md:gap-4 items-center text-sm md:text-base">
              {/* Liens */}
              {projects[selected].repo_front && (
                <a
                  href={projects[selected].repo_front}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-badge hover:text-[#7B7B7B] transition px-3 py-1.5 md:px-4 md:py-2 rounded-full"
                >
                  <FaGithub size={18} /> Front
                </a>
              )}
              {projects[selected].repo_back && (
                <a
                  href={projects[selected].repo_back}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-badge hover:text-[#7B7B7B] transition px-3 py-1.5 md:px-4 md:py-2 rounded-full"
                >
                  <FaGithub size={18} /> Back
                </a>
              )}
              {projects[selected].repo && (
                <a
                  href={projects[selected].repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-badge hover:text-[#7B7B7B] transition px-3 py-1.5 md:px-4 md:py-2 rounded-full"
                >
                  <FaGithub size={18} /> Code
                </a>
              )}
              {projects[selected].url && (
                <a
                  href={projects[selected].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-badge hover:text-[#7B7B7B] transition px-3 py-1.5 md:px-4 md:py-2 rounded-full"
                >
                  <FaGlobe size={18} /> Site
                </a>
              )}
              {projects[selected].date && (
                <div
                  className="flex items-center gap-2 bg-badge px-3 py-1.5 md:px-4 md:py-2 rounded-full md:absolute md:right-0"
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
