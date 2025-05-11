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
          <Image
            src="/logos/reactjs.svg"
            alt="logo-react"
            width={100}
            height={100}
          />
          <Image
            src="/logos/nextjs.png"
            alt="logo-next"
            width={100}
            height={100}
          />
          <Image
            src="/logos/redux.svg"
            alt="logo-redux"
            width={100}
            height={100}
          />
          <Image
            src="/logos/tailwind.svg"
            alt="logo-tailwind"
            width={100}
            height={100}
          />
          <Image
            src="/logos/nodejs.svg"
            alt="logo-node"
            width={100}
            height={100}
          />
          <Image
            src="/logos/express.png"
            alt="logo-express"
            width={100}
            height={100}
          />
          <Image
            src="/logos/mongodb.png"
            alt="logo-mongodb"
            width={100}
            height={100}
          />
          <Image
            src="/logos/expo.svg"
            alt="logo-expo"
            width={100}
            height={100}
          />
          <Image
            src="/logos/github.svg"
            alt="logo-github"
            width={100}
            height={100}
          />
          <Image
            src="/logos/bash.png"
            alt="logo-bash"
            width={100}
            height={100}
          />
          <Image
            src="/logos/figma.png"
            alt="logo-figma"
            width={100}
            height={100}
          />
          <Image
            src="/logos/vscode.svg"
            alt="logo-vscode"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
