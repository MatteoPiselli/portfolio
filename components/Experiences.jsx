import Image from "next/image";

export default function Experiences() {
  return (
    <div className="relative w-full min-h-screen bg-[#2a2a5a] text-white">
      <div className="relative z-10 max-w-7xl mx-auto pt-24 px-4">
        <h2 id="experiences" className="text-4xl font-bold text-center mb-12">
          Expériences Professionnelles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-24">
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-white pb-2">
              Développement 💻
            </h2>
            <div className="space-y-4">
              {/* Partenaires Particuliers */}
              <div className="bg-[#40406b] rounded-2xl p-4 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Développeur Web</h3>
                <div className="flex mb-2">
                  <Image
                    src="/experiences/partenaires-particuliers.png"
                    alt="partenaires-particuliers-logo"
                    width={56}
                    height={56}
                  />
                  <div className="flex flex-col">
                    <span>Partenaires Particuliers - Stage</span>
                    <span className="text-gray-400 text-sm">
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
                  <li>
                    ✅ - Refonte / redesign du site web de l'entreprise (pages
                    index, abouteMe, contact).
                  </li>
                  <li>✅ - Ajout de nouveaux éléments.</li>
                  <li>
                    ✅ - Utilisation des MediaQueries pour avoir un site web
                    responsive.
                  </li>
                </ul>

                <div className="flex mt-4">
                  <Image
                    src="/experiences/partenaires-particuliers-mini.jpg"
                    alt="partenaires-particuliers-miniature"
                    width={100}
                    height={56}
                    className="rounded-lg"
                  />
                  <a
                    className="flex items-center ml-4 italic hover:opacity-50 hover:scale-[1.1]"
                    href="https://www.partenaires-particuliers.fr/"
                  >
                    Partenaires Particuliers
                  </a>
                </div>
              </div>

              {/* Transgourmet */}
              <div className="bg-[#40406b] rounded-2xl p-4 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Développeur Web</h3>
                <div className="flex mb-2">
                  <Image
                    src="/experiences/transgourmet.png"
                    alt="transgourmet-france-logo"
                    width={56}
                    height={56}
                  />
                  <div className="flex flex-col">
                    <span>Transgourmet France - Stage</span>
                    <span className="text-gray-400 text-sm">
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
                  <li>✅ - Manipulation du DOM et des API Fetch 👨‍💻.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-white pb-2">
              Jobs Étudiants - 2024 📚
            </h2>
            <div className="space-y-4">
              <div className="bg-[#40406b] rounded-2xl p-4 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Caissier</h3>
                <div className="flex mb-2">
                  <Image
                    src="/experiences/grand-frais.png"
                    alt="grand-frais-logo"
                    width={56}
                    height={56}
                  />
                  <div className="flex flex-col">
                    <span>Grand Frais - CDD</span>
                    <span className="text-gray-400 text-sm">
                      La Queue-en-Brie
                    </span>
                  </div>
                </div>
                <br />
                <span>
                  ✅ - Soft skills : Relation clients et sens du service.
                </span>
              </div>

              <div className="bg-[#40406b] rounded-2xl p-4 shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Préparateur de commandes
                </h3>
                <div className="flex mb-2">
                  <Image
                    src="/experiences/intermarche.png"
                    alt="intermarché-logo"
                    width={56}
                    height={56}
                  />
                  <div className="flex flex-col">
                    <span>Intermarché - CDD</span>
                    <span className="text-gray-400 text-sm">
                      Loriol-sur-Drôme
                    </span>
                  </div>
                </div>
                <br />
                <span>✅ - Soft skills : Rigueur et organisation.</span>
              </div>

              <div className="bg-[#40406b] rounded-2xl p-4 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Ouvrier agricole</h3>
                <div className="flex mb-2">
                  <Image
                    src="/experiences/entreprise.png"
                    alt="entreprise-logo"
                    width={56}
                    height={56}
                  />
                  <div className="flex flex-col">
                    <span>Les Vergers d'Ici - CDD</span>
                    <span className="text-gray-400 text-sm">
                      Livron-sur-Drôme
                    </span>
                  </div>
                </div>
                <br />
                <span>✅ - Soft skills : Esprit d'équipe et organisation</span>
              </div>

              <div className="bg-[#40406b] rounded-2xl p-4 shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Manutentionnaire chez Relais Colis
                </h3>
                <div className="flex mb-2">
                  <Image
                    src="/experiences/adequat.png"
                    alt="adéquat-intérim-logo"
                    width={56}
                    height={56}
                  />
                  <div className="flex flex-col">
                    <span>Adéquat Intérim & Recrutement - Intérim</span>
                    <span className="text-gray-400 text-sm">
                      Combs-la-Ville
                    </span>
                  </div>
                </div>
                <br />
                <span>
                  ✅ - Soft skills : Esprit d'équipe, rigueur et précision
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
