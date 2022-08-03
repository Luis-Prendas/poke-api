import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PokeApi - Luis Prendas</title>
        <meta name="description" content="Pokedex hecha por Luis Prendas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full h-20 bg-stone-700 text-stone-100 flex justify-center items-center text-4xl font-medium">
        PokeApi
      </nav>
      <main className="bg-stone-600 min-h-screen flex justify-start items-center flex-col gap-4 text-stone-100 p-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
