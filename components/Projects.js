import Image from "next/image";

export default function Projects() {
  return (
    <div className="relative w-screen min-h-screen bg-[#2a2a5a] text-white">
      <h1 className="font-bold text-4xl text-center p-10 mb-4">Projets</h1>

      <div className="absolute z-10 inset-0 mt-24 flex flex-col items-center md:flex-wrap md:flex-row md:justify-center">
        {/* MYMOVIZ */}
        <div className="relative w-[90%] md:w-[25%] h-auto m-8 transform transition-transform duration-300 hover:scale-105">
          <Image
            src="/projets/mymoviz.png"
            alt="mymoviz"
            width={1000}
            height={600}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">
                <a
                  href="https://mymoviz-frontend-matteo-pisellis-projects.vercel.app/"
                  target="_blank"
                  className="italic underline"
                  rel="noreferrer"
                >
                  MyMoviz
                </a>
              </h2>
              <p className="text-sm">
                MyMoviz est un site qui permet d’afficher les derniers films
                sortis avec la possibilité de placer un compteur de vues et
                d’évaluer chacun des films présentés
                <br />
                <strong>
                  <u>Voir détails 👁️</u>
                </strong>
                .
              </p>
            </div>
          </div>
        </div>

        {/* WEATHER APP */}
        <div className="relative w-[90%] md:w-[25%] h-auto m-8 transform transition-transform duration-300 hover:scale-105">
          <Image
            src="/projets/weatherapp.png"
            alt="weather-app"
            width={1000}
            height={600}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">
                <a
                  href="https://weatherapp-frontend-matteo-pisellis-projects.vercel.app/"
                  target="_blank"
                  className="italic underline"
                  rel="noreferrer"
                >
                  WeatherApp
                </a>
              </h2>
              <p className="text-sm">
                WeatherApp est une application qui affiche la météo des villes
                saisies.
                <br />
                <strong>
                  <u>Voir détails 👁️</u>
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* RIOT API */}
        <div className="relative w-[90%] md:w-[25%] h-auto m-8 transform transition-transform duration-300 hover:scale-105">
          <Image
            src="/projets/riot-api.png"
            alt="riot-api"
            width={1000}
            height={600}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">Riot API</h2>
              <p className="text-sm">
                J'ai développé un projet de recherche de joueurs basé sur l'API
                League of Legends de Riot Games, en prenant{" "}
                <a
                  href="https://www.op.gg/"
                  className="underline font-bold italic hover:opacity-75 hover:scale-110 inline-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  OP.GG
                </a>{" "}
                comme référence pour l'affichage des données.
                <br />
                <u>Stack Technique :</u>{" "}
                <strong>React.js, Tailwind CSS, Node.js</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* PORTFOLIO */}
        <div className="relative w-[90%] md:w-[25%] h-auto m-8 transform transition-transform duration-300 hover:scale-105">
          <Image
            src="/projets/portfolio-v1.png"
            alt="portfolio-v1"
            width={1000}
            height={600}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">
                <a
                  href="https://matteopiselli.github.io/react-portfolio/"
                  target="_blank"
                  className="italic underline"
                  rel="noreferrer"
                >
                  Portfolio v1
                </a>
              </h2>
              <p className="text-sm">
                J'ai développé mon portfolio responsive en utilisant{" "}
                <strong>Tailwind CSS</strong>, car il est simple d'utilisation.
                <br />
                <u>Stack technique :</u> <strong>React.js</strong>,{" "}
                <strong>Tailwind CSS</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* PARTENAIRES PARTICULIERS */}
        <div className="relative w-[90%] md:w-[25%] h-auto m-8 transform transition-transform duration-300 hover:scale-105">
          <Image
            src="/projets/partenaires-particuliers.png"
            alt="partenaires-particuliers"
            width={1000}
            height={600}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">
                <a
                  href="https://www.partenaires-particuliers.fr/"
                  target="_blank"
                  className="italic underline"
                  rel="noreferrer"
                >
                  Partenaires Particuliers
                </a>
              </h2>
              <p className="text-sm">
                Refonte du site web de l'entreprise durant mon stage de BTS.
                Site web responsive.
                <br />
                <u>Stack Technique :</u> <strong>HTML, CSS, JavaScript</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
