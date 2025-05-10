import Image from "next/image";

function Home() {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
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
