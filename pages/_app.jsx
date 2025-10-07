import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Matteo PISELLI - Portfolio</title>
        <meta
          name="description"
          content="Bienvenue sur mon portfolio ! Vous y découvrirez mes projets et mes expériences en développement web et mobile."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://matteopiselli.dev" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
