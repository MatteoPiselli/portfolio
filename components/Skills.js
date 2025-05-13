import Image from "next/image";

export default function Skills() {
  return (
    <div className="relative w-screen h-screen bg-[#2a2a5a]">
      <div className="absolute z-10 inset-0 flex flex-col justify-center items-center text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Stack Technique</h2>
        <p className="text-lg text-gray-400">
          La stack technique avec laquelle je crée mes applications web & mobile
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 justify-center gap-12 mt-24">
          {[
            {
              title: "Logo React",
              image: "/logos/reactjs.svg",
            },
            {
              title: "Logo Next.js",
              image: "/logos/nextjs.png",
            },
            {
              title: "Logo Redux Toolkit",
              image: "/logos/redux.svg",
            },
            {
              title: "Logo Tailwind CSS",
              image: "/logos/tailwind.svg",
            },
            {
              title: "Logo Node.js",
              image: "/logos/nodejs.svg",
            },
            {
              title: "Logo Express.js",
              image: "/logos/express.png",
            },
            {
              title: "Logo MongoDB",
              image: "/logos/mongodb.png",
            },
            {
              title: "Logo Expo",
              image: "/logos/expo.svg",
            },
            {
              title: "Logo GitHub",
              image: "/logos/github.svg",
            },
            {
              title: "Logo Bash",
              image: "/logos/bash.png",
            },
            {
              title: "Logo Figma",
              image: "/logos/figma.png",
            },
            {
              title: "Logo VS Code",
              image: "/logos/vscode.svg",
            },
          ].map((skills, index) => (
            <Image
              key={index}
              src={skills.image}
              alt={skills.title}
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
