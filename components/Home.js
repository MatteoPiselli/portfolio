import Head from "next/head";
import Image from "next/image";

function Home() {
  return (
    <>
      <Head>
        <title>Matteo Piselli - Portfolio</title>
        <meta
          name="description"
          content="Bienvenue sur mon portfolio ! Vous y découvrirez de nombreuses informations tel que mon parcours, mes projets et mes expériences."
        ></meta>
      </Head>
      <div
        className="relative w-[100vw] h-[100vh]"
        // style={{
        //   position: "relative",
        //   width: "100vw",
        //   height: "100vh",
        // }}
      >
        <Image
          src="/background.png"
          alt="background-image"
          layout="fill"
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
}

export default Home;
