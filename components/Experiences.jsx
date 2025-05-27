import Image from "next/image";

export default function Experiences() {
  return (
    <div className="relative w-full min-h-screen bg-color text-main">
      <div className="relative z-10 max-w-7xl mx-auto pt-24 px-4">
        <h2 id="experiences" className="text-4xl font-bold text-center mb-12">
          Expériences Professionnelles
        </h2>

        <div className="max-w-2xl mx-auto mt-24">
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-color pb-2">
              Développement 💻
            </h2>
            <div className="space-y-4">
              {/* Partenaires Particuliers */}
              <div className="bg-card rounded-2xl p-4 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Développeur Web</h3>
                <div className="flex items-center mb-4 space-x-4">
                  <Image
                    src="/experiences/partenaires-particuliers.png"
                    alt="partenaires-particuliers-logo"
                    width={56}
                    height={56}
                  />
                  <div className="flex flex-col">
                    <span>Partenaires Particuliers - Stage</span>
                    <span className="text-secondary text-sm">
                      Reims (Février 2023 - Mars 2023)
                    </span>
                  </div>
                </div>
                <span>💻 Stage de 2ème année de BTS</span>
                <br />
                <br />
                <p>
                  Au cours de ce stage, j’ai participé à la refonte du site web
                  de l’entreprise afin d’améliorer son design et d'ajouter de
                  nouveaux éléments 🏗.
                </p>
                <br />
                <p>📌 Missions réalisées :</p>
                <ul>
                  <li>✅ - Refonte / redesign du site web de l'entreprise.</li>
                  <li>✅ - Ajout de nouveaux éléments.</li>
                  <li>
                    ✅ - Utilisation des MediaQueries pour avoir un site web
                    responsive.
                  </li>
                </ul>
                <br />
                <span>
                  <u>Stack</u> : HTML, CSS, Javascript.
                </span>

                <div className="flex mt-4">
                  <Image
                    src="/experiences/partenaires-particuliers-mini.jpg"
                    alt="partenaires-particuliers-miniature"
                    width={100}
                    height={56}
                    className="rounded-lg"
                  />
                  <a
                    className="flex items-center ml-4 italic hover:opacity-50 hover:scale-[1.1] transition-all"
                    href="https://www.partenaires-particuliers.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Partenaires Particuliers
                  </a>
                </div>
              </div>

              {/* Transgourmet */}
              <div className="bg-card rounded-2xl p-4 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Développeur Web</h3>
                <div className="flex items-center mb-4 space-x-4">
                  <Image
                    src="/experiences/transgourmet.png"
                    alt="transgourmet-france-logo"
                    width={56}
                    height={56}
                  />
                  <div className="flex flex-col">
                    <span>Transgourmet France - Stage</span>
                    <span className="text-secondary text-sm">
                      Valenton (Juin 2022 - Juillet 2022)
                    </span>
                  </div>
                </div>
                <span>💻 Stage de 1ère année de BTS</span>
                <br />
                <br />
                <p>
                  Au cours de ce stage, j’ai acquis une première expérience avec
                  Javascript. Cette expérience a été très enrichissante et
                  bénéfique pour mes compétences professionnelles. En effet cela
                  m'a permis d'apprendre à rendre des pages web dynamiques et
                  interactives.
                </p>
                <br />
                <p>📌 Missions confiées :</p>
                <ul>
                  <li>✅ - Suivi des tracks Javascript d'Openclassroom.</li>
                  <li>✅ - Manipulation du DOM et des API REST.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
