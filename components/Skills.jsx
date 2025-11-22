import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiExpo,
  SiFigma,
  SiVercel,
  SiGithubcopilot,
  SiTypescript,
} from "react-icons/si";

const skillsData = {
  Frontend: [
    { name: "React", icon: <FaReact className="text-main" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-main" /> },
    { name: "Typescript", icon: <SiTypescript className="text-main" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-main" />,
    },
  ],
  Mobile: [
    {
      name: "React Native",
      icon: <FaReact className="text-main" />,
    },
    {
      name: "Expo",
      icon: <SiExpo className="text-main bg-main-inverse rounded-full p-2" />,
    },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-main" /> },
    { name: "Express.js", icon: <SiExpress className="text-main" /> },
  ],
  Database: [{ name: "MongoDB", icon: <SiMongodb className="text-main" /> }],

  Outils: [
    { name: "Git/GitHub", icon: <FaGithub className="text-main" /> },
    { name: "Copilot", icon: <SiGithubcopilot className="text-main" /> },
    { name: "Vercel", icon: <SiVercel className="text-main" /> },
    {
      name: "Expo Go",
      icon: <SiExpo className="text-main bg-main-inverse rounded-full p-2" />,
    },
  ],
  Design: [{ name: "Figma", icon: <SiFigma className="text-main" /> }],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex items-center justify-center w-full min-h-screen bg-color"
    >
      <div className="relative z-10 inset-0 flex flex-col justify-center items-center text-main">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Stack Technique</h2>
        <p className="text-lg text-center text-secondary">
          La stack technique avec laquelle je crée mes applications web & mobile
        </p>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-16 mt-24 w-full max-w-6xl">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="flex flex-col items-center min-w-[170px]"
            >
              <h3 className="font-bold text-xl text-main mb-12 md:text-left md:w-full md:ml-2">
                {category}
              </h3>
              <div className="flex flex-col gap-8 text-secondary text-4xl md:w-full">
                {skills.map(({ name, icon }) => (
                  <div key={name} className="flex items-center gap-4 w-full">
                    {icon}
                    <span className="text-base mt-1 whitespace-nowrap">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
