import Image from "next/image";

export default function Projects() {
  return (
    <div className="relative w-full min-h-screen bg-[#2a2a5a] text-white py-16 px-4">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-bold text-2xl md:text-4xl mb-8">Projets</h2>
        <p className="text-center text-lg text-gray-400 max-w-2xl">
          Voici un aperçu de mes projets personnels ainsi que ceux réalisés
          pendant ma formation.
        </p>
      </div>

      {/* Projets */}
      <div className="relative z-10 flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-8">
        {[
          {
            title: "MyMoviz",
            image: "/projets/mymoviz.png",
            url: "https://mymoviz-frontend-matteo-pisellis-projects.vercel.app/",
            description:
              "MyMoviz est un site qui permet d’afficher les derniers films sortis avec la possibilité de créer une wishlist, de placer un compteur de vues et d’évaluer chacun des films présentés.",
          },
          {
            title: "WeatherApp",
            image: "/projets/weatherapp.png",
            url: "https://weatherapp-frontend-matteo-pisellis-projects.vercel.app/",
            description:
              "WeatherApp est une application qui affiche la météo des villes saisies.",
          },
          {
            title: "Riot API",
            image: "/projets/riot-api.png",
            url: null,
            description:
              "Projet de recherche de joueurs basé sur l'API League of Legends, inspiré d'OP.GG.",
          },
          {
            title: "Portfolio v1",
            image: "/projets/portfolio-v1.png",
            url: "https://matteopiselli.github.io/react-portfolio/",
            description:
              "Mon premier portfolio responsive, développé avec React.js et Tailwind CSS.",
          },
          {
            title: "Partenaires Particuliers",
            image: "/projets/partenaires-particuliers.png",
            url: "https://www.partenaires-particuliers.fr/",
            description:
              "Refonte du site web d’entreprise réalisée pendant mon stage. Site responsive.",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="relative w-[90%] md:w-[28%] transform transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={600}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold mb-2">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      className="italic underline"
                      rel="noreferrer"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h2>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
