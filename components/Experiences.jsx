import Image from "next/image";

const experiencesData = {
  "Développeur 💻": [
    {
      title: "Développeur Web Stagiaire",
      company: "Partenaires Particuliers",
      logo: "/experiences/partenaires-particuliers.png",
      period: "2023",
      tasks: [
        "Refonte complète du site vitrine de l’entreprise.",
        "Intégration responsive pour tous formats d’écran.",
      ],
      stack: "HTML, CSS, Javascript",
      link: "https://www.partenaires-particuliers.fr/",
      image: "/experiences/partenaires-particuliers-mini.jpg",
    },
    {
      title: "Développeur Web Stagiaire",
      company: "Transgourmet France",
      logo: "/experiences/transgourmet.png",
      period: "2022",
      tasks: [
        "Découverte de JavaScript, manipulation du DOM.",
        "Formation via OpenClassrooms + premiers scripts dynamiques.",
      ],
      stack: "HTML, CSS, Javascript",
      link: "https://www.transgourmet.fr/",
      image: "/experiences/transgourmet-mini.png",
    },
  ],
};

export default function Experiences() {
  return (
    <div className="relative w-full min-h-screen bg-color text-main">
      <div className="relative z-10 max-w-7xl mx-auto pt-24 px-4">
        <h2 id="experiences" className="text-4xl font-bold text-center mb-12">
          Expériences Professionnelles
        </h2>

        <div className="max-w-4xl mx-auto mt-24">
          {Object.entries(experiencesData).map(([category, experiences]) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold mb-8 border-b border-color pb-2">
                {category}
              </h2>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {/* En-tête de l'expérience */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 relative">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            layout="fill"
                            className="object-contain rounded-lg"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-lg text-main">{exp.company}</p>
                          <p className="text-secondary text-sm">{exp.period}</p>
                        </div>
                      </div>
                    </div>

                    {/* Missions réalisées */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">
                        📌 Missions réalisées :
                      </h4>
                      <ul className="space-y-2">
                        {exp.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start">
                            <span className="mr-2">✅</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack technique */}
                    <div className="mb-6">
                      <p className="font-semibold">
                        <span className="underline">Stack technique</span> :{" "}
                        {exp.stack}
                      </p>
                    </div>

                    {/* Lien et aperçu */}
                    <div className="flex items-center space-x-4">
                      <div className="w-24 h-14 relative rounded-lg overflow-hidden">
                        <Image
                          src={exp.image}
                          alt={`${exp.company} aperçu`}
                          layout="fill"
                          className="object-cover"
                        />
                      </div>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center italic hover:opacity-70 hover:scale-105 transition-all duration-200 text-blue-500 hover:text-blue-600"
                      >
                        Voir le site web →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
